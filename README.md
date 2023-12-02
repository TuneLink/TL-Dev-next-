# TuneLink

Hello :)

Our vision is to connect people with Spotify playlists that feature both popular and undiscovered artists tailored to individual tastes.

## Description

First and foremost, this is our Senior Experience project. We are a team of software engineers who are honing in on our web development skills as Computer Science students @ MSU Denver. With this app, we are hoping to create a platform to connect music enthusiasts with emerging artists. Dive into unique playlists and be part of a genuine and inclusive community shaping the future of music discovery!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
If you are unfamiliar with Spotify's Web API, check out the following link for an official getting started guide from Spotify for Developers:
https://developer.spotify.com/documentation/web-api/tutorials/getting-started

Install dependencies:

```bash
npm run install
# or
yarn install
# or
pnpm install
```

Next, create an `.env`:
```bash
NEXTAUTH_URL="http://localhost:3000/"
# generate new NEXTAUTH_SECRET with `openssl rand -base64 32`
NEXTAUTH_SECRET = "<NEXTAUTH_SECRET>" # then `npm run build`
SPOTIFY_CLIENT_ID="<SPOTIFY_CLIENT_ID>"
SPOTIFY_CLIENT_SECRET="<SPOTIFY_CLIENT_SECRET>"
SPOTIFY_REDIRECT_URI="http://localhost:3000/api/auth/callback/spotify"
# SPOTIFY_REDIRECT_URI="<SPOTIFY_REDIRECT_URI>/api/auth/callback/spotify"

```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Help

Please create an issue if you have any questions or concerns.

## Authors

Contributors names and contact info
* [CooperDavis00](https://github.com/CooperDavis00)
* [Issac](https://github.com/Issac-Lopez)
* [Jeremy Satram](https://github.com/Jsatram)
* [Sajjadalfa](https://github.com/Sajjadalfa)
* [zahirsanti05](https://github.com/zahirsanti05)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
