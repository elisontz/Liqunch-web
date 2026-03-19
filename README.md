# oLauncher Site

Marketing and commerce site for `oLauncher`.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- Cloudflare R2
- Paddle Checkout

## Local development

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

## Cloudflare Pages build

```bash
npm run build
npm run pages:build
```

## Required environment variables

- `NEXT_PUBLIC_DOWNLOAD_URL`
- `NEXT_PUBLIC_PADDLE_ENV`
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`
- `NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID`
- `NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_CURRENT_VERSION`
