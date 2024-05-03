> [!WARNING]
> Todo app is for dev only, excuse me if i forgot to delete. If u want to use it yourself setup and skweeeeeeligt (sqlite) database and check commit `14274817d37720a98ba2776b149643c9db7a5216`

## Work in Progress: A NextJS (14) Starter Kit

This is a personal starter kit with packages I frequently use and configuration settings I prefer not to recreate every time.

### Will consist of
...

### Authentication
- NextAuth with credentials
`/api/auth/login`
`/api/auth/logout`

Hardcoded users in `src/auth/auth-options.ts` with admin in `.env` file.


## Included Packages

The following packages are included in this project. Packages marked with an asterisk (*) are considered essential.

- Styling
  - Tailwind CSS* for most boilerplate styling.
  - SCSS for more complex styling.

> [!NOTE]
> Remember, Tailwind is a utility framework so there's no shame in combining plain CSS/SASS/LESS (well, you should be ashamed of LESS) for more complex pseudo and animation work.

- Next-themes: Used for implementing dark/light mode.

## Theme

- Radix UI*: This serves as the base for Shadcn-ui components.
- Next-themes: Used for implementing dark/light mode.

```tsx
// allows to use
<div className='bg-back dark:bg-white'>
```
## Random libs

- [React Hook Form](https://react-hook-form.com/)*: Used for form handling.
- [Framer Motion](https://www.framer.com/motion/): Used for animations. SCSS works fine, but anim in JS can get a bit more advanced. Worth the learning curve.
- [Million.js -🔥🔥🔥Blazingly fast javascript🔥🔥🔥🔥🔥🔥Blazingly fast javascript🔥🔥🔥 ](https://million.dev/):
New kid on the block. It says it compiles my stuff about treefiddy times faster so I believe it. Refer to next-config.-
- [NextTopLoader](https://www.npmjs.com/package/nextjs-toploader): Adds a fancy loading bar at the top of the page with a lot of customization options. Default is off but can be turned on in layout.tsx with a **TODO DON'T FORGET!!!@remcostoeten**

## Misc libs
- [clsx](https://www.npmjs.com/package/clsx): Used for conditional classnames.
- [react-icons](https://react-icons.github.io/react-icons/): Used for icons.
- [Tailwind merge](https://www.npmjs.com/package/tailwindcss-merge): Used for merging Tailwind classes.


## data(base)
    <small>Firebase rocks for quick prototyping and hobby projects. Got almost everything you need. No ORM or other stupid configs</small>
- Firebase: Used for authentication and Firestore database. Setup [here](https://console.firebase.google.com/) and fill the `.env.local` <Small>(And let's be honest, Clerk auth is not the most visually appealing)<small>
- [Firebase - react hookforms](https://github.com/CSFrequency/react-firebase-hooks/tree/09bf06b28c82b4c3c1beabb1b32a8007232ed045): Used for form handling.
    <small>For separate back-ends I Setup an optional Apollo GraphQL </small>

- [Apollo Client](https://www.apollographql.com/docs/react/): Used for handling GraphQL.

<small>Another BaaS but with a more traditional squeal/postgres feel</small>
- Convex: A more robust database solution.
- Clerk: An alternative for those who prefer not to use Firebase for authentication.

## Additional Packages
- class-variance-authority: Additional package for class variance authority.
- @vercel/speed-insights: Vercel package for speed insights. <small>Obviously only works when deployed to vercel. Remove from Providers.tsx if not needed</small>
- @vercel/analytics: Vercel package for analytics. <small>Obviously only works when deployed to vercel. Remove from Providers.tsx if not needed</small>
- builder.io/react-hydration-overlay: Builder.io is based. It makes you want to jump a little less often from a bridge when having hydration errors. <small>Remove from Providers.tsx if not needed</small>
- Sharp. Idk vercel keeps telling me to use it. It should optimize images, or is a Bitcoin miner, who knows.

## DX
- [Prettier](https://prettier.io/): Used for code formatting.
   See `prettier.config.js` for configuration. Don't feel free to change it. It's perfect.
- [ESLint](https://eslint.org/): Used for linting.
    See `.eslintrc.js` for configuration. Don't feel free to change it. It's perfect.

    ## File structure

- Proper folder structure. I prefer `core/` instead of `lib` and floating that. Thus it will be:

```bash
├── core
│   ├── config          # config files with data such as menu items to map over, or other configuration files. See how site.ts is used in layout.tsx in the root(!)
│   │   ├── menu.ts
│   │   └── site.ts
│   ├── database
│   │   ├── firebase
│   │   │   ├── auth.tsx
│   │   │   └── firebase.ts
│   │   └── graphql
│   │       ├── apollo-client.ts
│   │       └── apollo-wrapper.tsx
│   ├── hooks
│   │   └── use-click-outside.ts
│   ├── lib                                 # utility functions. ShadN standard is @/lib/utils so if you partly migrate over to this structure be sure to find and replace `@/lib/utils` with `@/core/lib/utils` and change the path in `components.json`
│   │   ├── animations
│   │   │   ├── nav-animations.ts
│   │   │   └── bezier-curves.ts
│   │   ├── clsx.ts
│   │   └── utils.ts
│   ├── NODE_MODULE_PATcHES                 # When you need to make patches to the core I prefer uppercase
│   │   └── next-link.ts                    # underscore to indicate it's a patch
│   ├── actions                             # Mutations and queries
│   │   ├── queries   fast
│   │   │   └── fetch-anything.ts
│   │   ├── mutations
│   │   │   └── mutate-deez-nuts.ts
│   └── types
│       ├── types.ts
│       └── ...extend
```

## components
```bash
├── (auth)
│   ├── layout.tsx
│   ├── sign-in
│   │   └── sign-in.tsx
│   └── sign-up
│       └── sign-up.tsx
├── (dashboard)
│   ├── kanban
│   │   ├── components  # specific component folder inside feature if unique to feature only
│   │   │   └── kanban-specific-component.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── user-profile
│   └── components  # specific component folder inside feature if unique to feature only
│       └── add-user.tsx
├── layout.tsx
├── (marketing)  # pages should go here that provide information about the product/service. Landing page, contact, about etc
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about
│   │   └── page.tsx
│   └── contact
│       └── page.tsx
└── page.tsx
```