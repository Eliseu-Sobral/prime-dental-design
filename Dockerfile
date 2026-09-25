# syntax=docker/dockerfile:1.7

# =============================================================================
#  JB ODONTOLOGIA PRIME · TanStack Start (Nitro standalone)
#  PADRÃO MAMAJULA / KAMEETECH — multi-stage builder + runner
#  Dependências de runtime: node + curl (para healthcheck CMD curl -fsS)
# =============================================================================

# -----------------------------------------------------------------
#  STAGE 1 — Builder: instala deps e builda o Vite → Nitro .output/
# -----------------------------------------------------------------
FROM node:20-bookworm-slim AS builder

ENV NODE_ENV=production \
    CI=true \
    npm_config_update_notifier=false \
    npm_config_audit=false \
    npm_config_fund=false

WORKDIR /app

COPY package.json package-lock.json* ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev=false --no-audit --no-fund

COPY . .

RUN npm run build

# -----------------------------------------------------------------
#  STAGE 2 — Runner: imagem final (leve + curl disponível)
# -----------------------------------------------------------------
FROM node:20-bookworm-slim AS runner

ENV NODE_ENV=production \
    TZ=America/Sao_Paulo \
    NITRO_PORT=3000 \
    NITRO_HOST=0.0.0.0 \
    HOST=0.0.0.0 \
    PORT=3000

WORKDIR /app

# Instala curl (exatamente como Kameetech/Mamajula usa no healthcheck)
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl tzdata \
 && ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
 && echo "America/Sao_Paulo" > /etc/timezone \
 && rm -rf /var/lib/apt/lists/*

# Copia somente .output gerado pelo builder (Nitro standalone)
COPY --from=builder /app/.output ./.output

EXPOSE 3000

# Healthcheck MESMO formato do modelo Kameetech (curl -fsS)
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -fsS "http://127.0.0.1:3000/" >/dev/null || exit 1

CMD ["node", ".output/server/index.mjs"]
