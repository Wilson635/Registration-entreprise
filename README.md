# Full Stack business directory with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

![Copy of Fullstack Twitter Clone (8)](https://vercel.com/9ea75b50-c59b-4d30-832a-f2851b42dae6.png)
blob:https://vercel.com/9ea75b50-c59b-4d30-832a-f2851b42dae6


This is a repository for a Full Stack business directory with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.


Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Page loading state
- Page empty state
- Creation and deletion of entreprises
- Advanced search algorithm by category,  map location
    - For example we will filter out entreprise that have a listing
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/wilson635/Registration-entreprise.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
