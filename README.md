# Monorepo - Using Turborepo with React App

This is an example monorepo using Vercel's [Turborepo](https://turbo.build/repo/docs) library. It contains two React apps, namely "client" and "admin," and CRUD APIs using Express.

![Client - Turborepo Example - Google Chrome 2023-12-03 19-59-54 (online-video-cutter com)](https://github.com/Prasad-Katkade/React-Monorepo/assets/41871409/79ded446-5086-4cf5-8b1d-7e338e5bd017)

## What is a Monorepo?

A monolithic repository, commonly known as a mono-repo, is a version control repository that houses multiple projects or components within a single repository. This approach stands in contrast to the traditional model of having separate repositories for each project.

## Advantages of Mono-Repos

### 1. Simplified Dependency Management

In a mono-repo, all projects within the repository share the same version control history. This makes it easier to manage dependencies between projects, ensuring that they are always compatible.

### 2. Unified Versioning

Since all projects reside in the same repository, it's possible to enforce a consistent versioning strategy across all components. This can simplify the release process and make it more predictable.

### 3. Code Sharing

Developers can easily share code between different projects within the mono-repo. This promotes code reuse and helps maintain a consistent coding style and standards across the entire codebase.

### 4. Atomic Changes Across Projects

When making changes that span multiple projects, it's beneficial to have atomic commits that affect all related components simultaneously. Mono-repos facilitate this by allowing developers to make coordinated changes across the entire codebase.

## What's inside My Monorepo?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `admin`: [React-app](https://create-react-app.dev) app serves as a basic admin panel to create & delete products.
- `client`: [React-app](https://create-react-app.dev) app serves as a basic client panel to view products.
- `api`: Simple CRUD APIs created using Express, used inside client and admin.
- `packages`: This directory consists of common configs and UI components used in admin and client. <br/>
Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).<br/>

![React-Monorepo - Visual Studio Code 2023-12-03 20-07-32 (online-video-cutter com) (1)](https://github.com/Prasad-Katkade/React-Monorepo/assets/41871409/faf4fcca-4ef7-4918-9e87-b40dd7202a01)

## How to run?

1. Install dependencies using `npm i` on the root level. <br/>
2. Run all the projects using `npm run dev`. To run a single project, hit the same command by opening the particular repo in the terminal.

## Support
If you liked the approach, be sure to ⭐ the repository. Looking forward to connecting for any remote work opportunity!
- [LinkedIn](https://www.linkedin.com/in/prasad-katkade/)
- [Twitter](https://twitter.com/_prasadd_)