
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const routes = [
  '/',
  '/about',
  '/services',
  '/work',
  '/team',
  '/blog',
  '/contact',
  '/get-quote',
  '/privacy-policy',
  '/terms-of-service',
]

const vite = await createServer({
  configFile: './vite.config.js',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const template = await readFile('dist/index.html', 'utf8')

  for (const route of routes) {
    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(App),
      ),
    )

    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    )

    const outputDirectory =
      route === '/'
        ? 'dist'
        : path.join('dist', route.slice(1))

    await mkdir(outputDirectory, { recursive: true })

    await writeFile(
      path.join(outputDirectory, 'index.html'),
      html,
      'utf8',
    )

    console.log(`Prerendered: ${route}`)
  }
} finally {
  await vite.close()
}
