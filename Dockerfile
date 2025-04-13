FROM denoland/deno:alpine-1.42.0

WORKDIR /app

COPY . .

RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
