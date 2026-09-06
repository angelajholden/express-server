# Express Server

A small Express API that serves Instagram media with manually maintained accessibility alt text.

## Setup

Install dependencies with Node.js and npm:

```sh
npm ci
```

Create a `.env` file in the project root:

```dotenv
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
PORT=3000
```

`PORT` is optional and defaults to `3000`. Keep the access token private; `.env` is excluded from Git.

## Run

Start the server:

```sh
npm start
```

Or run with automatic restarts during development:

```sh
npm run dev
```

The server is available at `http://localhost:3000` by default.

## Endpoints

- `GET /instagram` — Returns the Instagram response, including media items and pagination metadata. Each item includes an `alt` property.
- `GET /instagram/images` — Returns an array of up to 12 standalone `IMAGE` items from the fetched batch, in their original order. Videos and carousels are excluded.

The service requests up to 25 media items without following pagination. Responses are cached in memory for 12 hours. If a refresh fails, the server returns cached data when available; otherwise, it returns a JSON error with status `500`.

Instagram routes are limited to 100 requests per IP address every 15 minutes. CORS allows `https://practicelayouts.com` and `https://angelajholden.github.io`. Requests without an Origin header are also allowed.

## Instagram alt text

Edit `data/instagram-alt-text.json` to add or update descriptions. Keep media IDs as quoted strings:

```json
{
	"18051824711638498": "Heidi curled in a gray padded dog bed."
}
```

Descriptions should be concise and describe the actual image content. Use an empty string for purely decorative images.

Alt text is not generated automatically. New or unmapped media IDs receive `alt: ""` until a description is added. The mapping loads once at startup, so restart the server or reload PM2 after changing it. The JSON file must exist and contain valid JSON.

## Deployment

The GitHub Actions production workflow deploys pushes to `main` to DigitalOcean and reloads the app with PM2 using `ecosystem.config.cjs`. The production working directory is `/var/www/html`.
