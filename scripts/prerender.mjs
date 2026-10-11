
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const baseUrl = 'https://matlbs.com'

const pages = {
  '/': {
    title: 'Mat Labs | Web Development, Software & Cybersecurity',
    description:
      'Mat Labs provides web development, custom software, cybersecurity, networking, and digital solutions for businesses and organizations in Uganda and beyond.',
  },

  '/about': {
    title: 'About Mat Labs | Our Story and Mission',
    description:
      'Learn about Mat Labs, our mission, and our commitment to building useful digital solutions through technology, innovation, and expertise.',
  },

  '/services': {
    title: 'Our Services | Mat Labs Digital Solutions',
    description:
      'Explore Mat Labs services, including web development, custom software, cybersecurity, networking, and digital solutions for organizations and businesses.',
  },

  '/work': {
    title: 'Our Work and Projects | Mat Labs',
    description:
      'Explore projects and digital solutions from Mat Labs, showcasing our work in web development, software, and technology.',
  },

  '/team': {
    title: 'Our Team | Mat Labs',
    description:
      'Meet the people behind Mat Labs and learn about the expertise and commitment driving our digital solutions.',
  },

  '/blog': {
    title: 'Technology Insights and Articles | Mat Labs',
    description:
      'Explore Mat Labs articles and insights on web development, software, cybersecurity, networking, and digital technology.',
  },

  '/contact': {
    title: 'Contact Mat Labs | Get in Touch',
    description:
      'Contact Mat Labs to discuss web development, software solutions, cybersecurity, networking, or your next digital project.',
  },

  '/get-quote': {
    title: 'Request a Quote | Mat Labs',
    description:
      'Request a quote from Mat Labs for web development, custom software, cybersecurity, networking, and other digital solutions.',
  },

  '/privacy-policy': {
    title: 'Privacy Policy | Mat Labs',
    description:
      'Read the Mat Labs Privacy Policy to learn how information is handled when you use our website and services.',
  },

  '/terms-of-service': {
    title: 'Terms of Service | Mat Labs',
    description:
      'Review the terms and conditions governing your use of the Mat Labs website and digital services.',
  },
}

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[character]
  })

function setMeta(html, attribute, name, content) {
  const escapedContent = escapeHtml(content)
  const escapedName = escapeHtml(name)

  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapedName}["'][^>]*>`,
    'i',
  )

  const replacement = `<meta ${attribute}="${escapedName}" content="${escapedContent}" />`

  if (pattern.test(html)) {
    return html.replace(pattern, replacement)
  }

  return html.replace(
    '</head>',
    `  ${replacement}\n  </head>`,
  )
}

function setTitle(html, title) {
  const escapedTitle = escapeHtml(title)

  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapedTitle}</title>`,
    )
  }

  return html.replace(
    '</head>',
    `  <title>${escapedTitle}</title>\n  </head>`,
  )
}

function setCanonical(html, url) {
  const escapedUrl = escapeHtml(url)

  const pattern =
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i

  const replacement =
    `<link rel="canonical" href="${escapedUrl}" />`

  if (pattern.test(html)) {
    return html.replace(pattern, replacement)
  }

  return html.replace(
    '</head>',
    `  ${replacement}\n  </head>`,
  )
}

const vite = await createServer({
  configFile: './vite.config.js',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const template = await readFile('dist/index.html', 'utf8')

  for (const [route, metadata] of Object.entries(pages)) {
    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        { location: route },
        React.createElement(App),
      ),
    )

    const canonicalUrl = `${baseUrl}${route === '/' ? '/' : route}`

    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    )

    // Page title and description
    html = setTitle(html, metadata.title)
    html = setMeta(
      html,
      'name',
      'description',
      metadata.description,
    )

    // Canonical URL for this specific page
    html = setCanonical(html, canonicalUrl)

    // Open Graph metadata
    html = setMeta(html, 'property', 'og:title', metadata.title)
    html = setMeta(
      html,
      'property',
      'og:description',
      metadata.description,
    )
    html = setMeta(html, 'property', 'og:url', canonicalUrl)

    // Twitter / X metadata
    html = setMeta(html, 'name', 'twitter:title', metadata.title)
    html = setMeta(
      html,
      'name',
      'twitter:description',
      metadata.description,
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

    console.log(`Prerendered with SEO metadata: ${route}`)
  }
} finally {
  await vite.close()
}
