# UTSTAT Math Finance Blog

A statically generated blog using **Next.js**, **Markdown**, **TypeScript**, and **Tailwind CSS** designed to showcase articles, updates, and insights related to UTSTAT Math Finance.

This project leverages **Next.js**'s [Static Site Generation (SSG)](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) capabilities to build a performant and scalable blog with Markdown files as the primary data source.

---

## Features

- **Markdown-powered Content**: Blog posts are written in Markdown, stored in the `src/contents/posts` directory, and support front matter for metadata.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Static Export**: The blog is exported as a static site using Next.js's `export` functionality.
- **Responsive Design**: Styled with [Tailwind CSS](https://tailwindcss.com).
- **Configurable Base Path**: Can be deployed under custom paths, such as `/utstat-math-finance`.
- **Unoptimized Images**: Simplifies static export without relying on external image optimization services.

---

## Getting Started

### Installation

Ensure you have **Node.js** and **Yarn** installed on your system. Then, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/utstat-math-finance.git
cd utstat-math-finance
yarn install
```

### Running Locally

Start the development server:

```bash
yarn dev
```

Your blog will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Editing Content

### Blog Posts

To edit or create blog posts:

1. Navigate to the `src/contents/posts` directory.
2. Each blog post is written in Markdown with front matter metadata:

```yaml
---
title: "Dynamic Routing and Static Generation"
excerpt: "An overview of how Next.js supports dynamic routing and static generation."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-03-16"
author:
  name: JJ Kasper
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---
```

3. Add your content below the front matter in Markdown format.

4. Save the file. The blog will automatically include the new post after re-exporting.

### Static Content

Static website content (such as FAQs or faculty members) is managed in the `src/contents` directory using TypeScript files.

---

## Deployment

This project supports static export using Next.js. The configuration ensures compatibility with hosting platforms like **Vercel**, **Netlify**, or any static file server.

### Exporting the Site

To build and export the static site:

```bash
yarn build
yarn export
```

The static files will be located in the `out` directory.

### Base Path Configuration

The `next.config.js` file is preconfigured to support deployment under a custom base path, such as `/utstat-math-finance`. Modify this as needed:

```ts
const nextConfig = {
  basePath: "/utstat-math-finance",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

---

## Notes

- This project uses **Yarn** for dependency management.
- All images are unoptimized to support static site generation.
