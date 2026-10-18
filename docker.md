# Docker

You can deploy hkbus using docker.

## Development

```bash
docker compose up -d
```

Check out https://localhost:8080 in the browser

* If you prefer port other than 8080, add `PRODUCTION_PORT=<PORT_NUMBER>` in `.env` file.

## Build

### Using docker

```bash
docker compose run dev yarn build
```

## Deploy

```bash
docker compose run dev yarn deploy
```
