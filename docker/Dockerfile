# syntax=docker/dockerfile:1.7

ARG NODE_IMAGE=node:22-bookworm-slim@sha256:c3de60bf2f9dd0ac6370e6117950ff62d6e339527e7472301c9c78a017978392
ARG NGINX_IMAGE=nginx:alpine

FROM ${NODE_IMAGE} AS build

WORKDIR /app

ARG VITE_COMMIT_HASH=unknown
ARG VITE_COMMIT_MESSAGE=container-build
ARG VITE_REPO_URL=unknown

ENV CI=true \
    PUPPETEER_SKIP_DOWNLOAD=true \
    VITE_COMMIT_HASH=${VITE_COMMIT_HASH} \
    VITE_COMMIT_MESSAGE=${VITE_COMMIT_MESSAGE} \
    VITE_REPO_URL=${VITE_REPO_URL}

RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn,sharing=locked \
    corepack enable \
    && yarn install --frozen-lockfile --non-interactive

COPY . .
RUN yarn build

FROM ${NGINX_IMAGE} AS runtime

RUN apk upgrade --no-cache
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

RUN mkdir -p /var/cache/nginx /var/run \
    && chown -R nginx:nginx /var/cache/nginx /var/run /usr/share/nginx/html \
    && touch /tmp/nginx.pid \
    && chown nginx:nginx /tmp/nginx.pid

USER nginx
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
