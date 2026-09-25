# syntax=docker/dockerfile:1.7

# =============================================================
# STAGE 1 — Builder: instala deps e executa o build do Vite/Nitro
# Saída: .output/server  (servidor Node standalone Nitro)
#        .output/public  (assets estáticos servidos pelo Nitro)
# =============================================================
FROM node:20-bookworm-slim AS builder

ENV NODE_ENV=production \
    CI=true \
    npm_config_update_notifier=false \
    npm_config_audit=false \
    npm_config_fund=false

WORKDIR /app

# Copia apenas arquivos de deps para cache de camada do Docker
COPY package.json package-lock.json* bun.lock* ./

# Usa npm (package-lock presente no repo) mesmo se bun.lock existir
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev=false --no-audit --no-fund || \
    (test -f bun.lockb && npm i --no-audit --no-fund)

# Copia código fonte (ver .dockerignore para exclusões)
COPY . .

# Build do TanStack Start via Vite → Nitro gera .output/
RUN npm run build

# =============================================================
# STAGE 2 — Runner: imagem leve, apenas Node + .output
# =============================================================
FROM node:20-alpine3.20 AS runner

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000 \
    NITRO_PORT=3000 \
    NITRO_HOST=0.0.0.0

WORKDIR /app

# Usuário não-root por segurança
RUN addgroup -S nodejs && \
    adduser  -S nodejs -G nodejs

# Copia .output gerado pelo builder (Nitro standalone)
COPY --from=builder /app/.output ./.output

# Build do TanStack Start Nitro já vem com o package.json correto no .output/server,
# mas em .output estático do Nitro basta rodar o entrypoint index.mjs
RUN chown -R nodejs:nodejs /app/.output

USER nodejs

EXPOSE 3000

# Healthcheck via rota raiz (200 ou 30x válidos)
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "require('http').get('http://127.0.0.1:3000/',r=>{process.exit((r.statusCode>=200&&r.statusCode<400)?0:1)}).on('error',()=>process.exit(1))"

CMD ["node", ".output/server/index.mjs"]
