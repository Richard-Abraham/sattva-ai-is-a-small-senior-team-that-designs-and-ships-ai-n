# syntax=docker/dockerfile:1

# ── Stage 1: Build ──
FROM node:22-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY . .
ENV NODE_ENV=production
RUN npm run build

# ── Stage 2: Runtime ──
FROM node:22-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/public ./public
COPY --from=base /app/.next/static ./.next/static

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
ENV PORT=3000
# Next standalone binds to process.env.HOSTNAME; containers set it to the container id,
# which makes the server unreachable from outside — bind all interfaces instead.
ENV HOSTNAME=0.0.0.0
CMD ["node", "server.js"]
