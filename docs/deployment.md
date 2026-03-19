# oLauncher Site Deployment

## Overview

The site is designed for:

- `Cloudflare Pages` to host the public marketing pages
- `Cloudflare R2` to host the downloadable DMG
- `Paddle` to power checkout and transactional emails

## Environment Variables

Set these in Cloudflare Pages before the first production deploy:

- `NEXT_PUBLIC_DOWNLOAD_URL`
- `NEXT_PUBLIC_PADDLE_ENV`
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`
- `NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID`
- `NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_CURRENT_VERSION`

## Cloudflare Pages

1. Connect the Git repository to a new Pages project.
2. Set the production branch to `main`.
3. Use the Next.js framework preset or a custom build command:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Bind your production domain after the first successful deploy.

## Cloudflare R2

Recommended bucket name:

- `olauncher-downloads`

Recommended object paths:

- `stable/oLauncher-YYYYMMDD.dmg`
- `beta/oLauncher-YYYYMMDD-beta.dmg`
- `media/oLauncher-media-kit.zip`

Point `NEXT_PUBLIC_DOWNLOAD_URL` at the public `stable` object URL.

## Paddle

Create two one-time products:

- `oLauncher Single Device Lifetime`
- `oLauncher Two Devices Lifetime`

Map their price IDs to:

- `NEXT_PUBLIC_PADDLE_SINGLE_PRICE_ID`
- `NEXT_PUBLIC_PADDLE_DOUBLE_PRICE_ID`

The site expects Paddle checkout to be initialized through the public client token.
