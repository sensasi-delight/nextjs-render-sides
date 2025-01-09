# Next.js Render Sides

This repository aims to provide a simple analysis of how and when different parts of a Next.js app do their thing. By checking out logs and runtime behavior, this simple research sheds light on how Next.js handles rendering on various technique both in App and Pages router.

> **_Rendering converts the code you write into user interfaces_**[^1]. ....

This repository is here to give you a better understand the render behaviors of Next.js Next.js and help you build and optimize Next.js based apps to run smoother and faster.

Please visit this repository in [Code Sandbox](https://codesandbox.io/p/github/sensasi-delight/nextjs-render-sides) to getting started.

## What's The Problem?

Next.js is awesome because it gives you a lot of flexibility with rendering methods, but let's be real—figuring out when and how things run can be a headache. Whether it's SSR, SSG, or CSR, the flow isn't always clear, which can make optimizing performance and debugging tricky. This simple research aims to clear the fog by breaking down what happens under the hood, so you can make smarter choices and avoid unnecessary guesswork.

## Methodology

Logs were recorded across various files within a Next.js application during execution to analyze and understand the sequence of rendering processes.

[^1]: [Building Your Application: Rendering | Next.js](https://github.com/vercel/next.js/blob/8ffa6c74b1f3fe357ce25bb455a565c6327dbd1e/docs/01-app/03-building-your-application/03-rendering/index.mdx). (mdx file on GitHub)
