import { chromium } from 'playwright'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const browser = await chromium.launch()
const page = await browser.newPage()

await page.emulateMedia({ media: 'print' })
await page.goto('http://localhost:5174/?pdf', { waitUntil: 'networkidle' })

// Wait for fonts and styles to fully load
await page.waitForTimeout(2000)

const outPath = path.join(__dirname, 'Presentacion_EP1_RedNorte.pdf')

await page.pdf({
  path: outPath,
  format: 'A4',
  landscape: true,
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
})

await browser.close()
console.log('PDF generado:', outPath)
