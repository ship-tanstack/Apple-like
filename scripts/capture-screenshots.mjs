import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
)
const outDir = path.join(projectRoot, 'docs/screenshots')
const baseUrl = 'http://localhost:3000/'

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({
  deviceScaleFactor: 2,
  colorScheme: 'dark',
})

const page = await context.newPage()

async function shot(name, options = {}) {
  const { viewport, before, fullPage = false } = options

  if (viewport) {
    await page.setViewportSize(viewport)
  }

  await page.goto(baseUrl, { waitUntil: 'load', timeout: 60_000 })
  await page.waitForTimeout(1500)

  if (before) {
    await before(page)
    await page.waitForTimeout(800)
  }

  await page.screenshot({
    path: path.join(outDir, name),
    fullPage,
  })
}

await shot('01-hero-desktop.png', {
  viewport: { width: 1440, height: 900 },
})

await shot('02-metrics-features.png', {
  viewport: { width: 1440, height: 900 },
  before: async (p) => {
    await p.locator('#performance').scrollIntoViewIfNeeded()
  },
})

await shot('03-design-lens.png', {
  viewport: { width: 1440, height: 900 },
  before: async (p) => {
    await p.locator('#design').scrollIntoViewIfNeeded()
  },
})

await shot('04-finishes-cta.png', {
  viewport: { width: 1440, height: 900 },
  before: async (p) => {
    await p.locator('#finish').scrollIntoViewIfNeeded()
  },
})

await shot('05-hero-mobile.png', {
  viewport: { width: 390, height: 844 },
})

await shot('06-full-page.png', {
  viewport: { width: 1280, height: 800 },
  fullPage: true,
})

await browser.close()
console.log(`Screenshots saved to ${outDir}`)
