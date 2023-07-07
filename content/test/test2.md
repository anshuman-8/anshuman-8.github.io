---
title: My Awe234 1212
slug: my-Awe234-1212
description: Well hello thisis dsf askd fnsdfjk asdkbgkas dfkhabsdng baksdf gnabgfknasdjkfhkasd fkhabsdfkabskdfbamnsdf babsdfnbasd
date: "2023-07-06"
tags:
  - programming
  - web development
cover_image: og-image.png
---

# MDX Remote Example

This example shows how a simple blog might be built using the [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) library, which allows mdx content to be loaded via `getStaticProps` or `getServerSideProps`. The mdx content is loaded from a local folder, but it could be loaded from a database or anywhere else.

The example also showcases [next-remote-watch](https://github.com/hashicorp/next-remote-watch), a library that allows next.js to watch files outside the `pages` folder that are not explicitly imported, which enables the mdx content here to trigger a live reload on change.

Since `next-remote-watch` uses undocumented Next.js APIs, it doesn't replace the default `dev` script for this example. To use it, run `npm run dev:watch` or `yarn dev:watch`.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote&project-name=with-mdx-remote&repository-name=with-mdx-remote)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-mdx-remote with-mdx-remote-app
```

```bash
yarn create next-app --example with-mdx-remote with-mdx-remote-app
```

```bash
pnpm create next-app --example with-mdx-remote with-mdx-remote-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

### Conditional custom components

When using `next-mdx-remote`, you can pass custom components to the MDX renderer. However, some pages/MDX files might use components that are used infrequently, or only on a single page. To avoid loading those components on every MDX page, you can use `next/dynamic` to conditionally load them.

For example, here's how you can change `getStaticProps` to pass a list of component names, checking the names in the page render function to see which components need to be dynamically loaded.

```js
import dynamic from 'next/dynamic'
import Test from '../components/test'

const SomeHeavyComponent = dynamic(() => import('SomeHeavyComponent'))

const defaultComponents = { Test }

export function SomePage({ mdxSource, componentNames }) {
  const components = {
    ...defaultComponents,
    SomeHeavyComponent: componentNames.includes('SomeHeavyComponent')
      ? SomeHeavyComponent
      : null,
  }

  return <MDXRemote {...mdxSource} components={components} />
}

export async function getStaticProps() {
  const source = `---
  title: Conditional custom components
  ---

  Some **mdx** text, with a default component <Test name={title}/> and a Heavy component <SomeHeavyComponent />
  `

  const { content, data } = matter(source)

  const componentNames = [
    /<SomeHeavyComponent/.test(content) ? 'SomeHeavyComponent' : null,
  ].filter(Boolean)

  const mdxSource = await serialize(content)

  return {
    props: {
      mdxSource,
      componentNames,
    },
  }
}
```

## Hi there <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="35">, I am Anshuman

- 👨🏻‍🎓 Sophomore at Amrita Vishwa Vidyapeetham, Amritapuri.
- 👨🏻‍💻 Member at [amFoss](https://amfoss.in/)
- 🚀 Full Stack Web Developer.
- 🌱 I'm currently working on Machine Learning and Artificial Intelligence.

![Anshuman's GitHub stats](https://github-readme-stats.vercel.app/api?username=anshuman-8&show_icons=true&theme=prussian)

<details>
<summary>Top language used</summary>
<p >
    <img alt = "Top Language" src="https://github-readme-stats.vercel.app/api/top-langs/?username=anshuman-8&hide=html,&layout=compact&theme=prussian"
    
</p>

</details>



<div align="center">
<h3>🙋‍♂️ Let's Connect</h3>
</div>

<p align="center">
  <a href="https://anshuman-8.github.io/"><img src="https://img.icons8.com/bubbles/50/000000/web.png" alt="Website"/></a>
        <a href="mailto:anshuman8swain@gmail.com"><img src="https://img.icons8.com/bubbles/50/000000/gmail.png" alt="Gmail"/></a>
        <a href="https://github.com/anshuman-8"><img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="GitHub"/></a>
        <a className='m-3' href="https://twitter.com/Anshuman_8_"><img src="https://img.icons8.com/bubbles/50/000000/twitter-circled.png" alt="Twitter"/></a>
        <a href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="LinkedIn"/></a>
        


</p>

![views](https://komarev.com/ghpvc/?username=anshuman-8&color=10507d)

<samp>
  <p align="center">
  <img width="235" height="145" src="./tenor.gif">
  </p>
  <p align="center">
    ════ ⋆★⋆ ════
        <br>
         Happy Coding👨‍💻!
        <br>
    </p>

</samp>

