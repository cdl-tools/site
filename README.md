# CDL Site

CDL's website provides leaderboards and other resources for communities that
participate in Community Day League. The website is built using Nuxt, with
[DaisyUI](https://daisyui.com/) and [Tailwind](https://tailwindcss.com/)
powering the frontend design. [FormKit](https://formkit.com/) is used for form
building, and any additional inputs that may be needed are composed with
components from [HeadlessUI](https://headlessui.com/v1/vue). Icons are provided
by [Heroicons](https://heroicons.com/). To integrate data from Google Sheets,
[Clipsheet](https://jsr.io/@katlyn/clipsheet) is used.

Look at the
[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to
learn more about how Nuxt works.

## Development

The development process uses feature branches and pull requests through git.
Create a new branch for the feature / bug fix you are working on, and create a
pull request to request review when it is ready to be merged into production and
deployed. Optionally, you may create a draft pull request to receive feedback
and collaborate as you develop.

When attempting to create a commit, a series of checks will run that check basic
code quality and formatting on any staged files. You can run these checks
manually with `pnpm prettier . --check`.

It is recommended to have your editor's
[Prettier integration](https://prettier.io/docs/en/editors) set up to make code
formatting easier and automatic.

## Setup

Install NodeJS and enable
[corepack](https://nodejs.org/api/corepack.html#enabling-the-feature).

```bash
corepack enable
```

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

Check out the
[deployment documentation](https://nuxt.com/docs/getting-started/deployment) for
more information.
