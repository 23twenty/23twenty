// Full-page screenshots of every page at phone and desktop widths, plus console
// errors and failed requests. `npm run shots -- <baseUrl> <outDir>`
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const [base = 'http://localhost:4321', out = 'shots/local'] = process.argv.slice(2);
const pages = process.env.PAGES ? process.env.PAGES.split(',') : ['/', '/photo/', '/photo/headshots/', '/photo/events/', '/photo/music/', '/photo/product/', '/video/', '/about/'];
const viewports = { desktop: { width: 1440, height: 900 }, phone: { width: 390, height: 844 } };
const findings = [];

mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const [vpName, viewport] of Object.entries(viewports)) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: vpName === 'phone' ? 2 : 1 });
  for (const [i, path] of pages.entries()) {
    const page = await ctx.newPage();
    page.on('console', (m) => m.type() === 'error' && findings.push(`${vpName} ${path} console: ${m.text()}`));
    page.on('pageerror', (e) => findings.push(`${vpName} ${path} pageerror: ${e.message}`));
    page.on('response', (r) => r.status() >= 400 && findings.push(`${vpName} ${path} HTTP ${r.status()} ${r.url()}`));
    await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 }).catch((e) => findings.push(`${vpName} ${path} goto: ${e.message}`));
    // Scroll through so lazy images load, then return to the top.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1500);
    const name = `${out}/${vpName}-${i + 1}-${path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home'}`;
    await page.screenshot({ path: `${name}-fold.png` });
    await page.screenshot({ path: `${name}.png`, fullPage: true });
    await page.close();
  }
  await ctx.close();
}
await browser.close();
writeFileSync(`${out}/findings.txt`, findings.join('\n') + '\n');
console.log(`${findings.length} findings → ${out}/findings.txt`);
