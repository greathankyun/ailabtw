// 重新輸出所有 PNG：在這個資料夾執行 `node render.js`（需要 Node 和 Playwright：npm i playwright）
// 每個 HTML 裡的 .frame 會輸出成 ../png/<資料夾>/<data-name>.png；logo SVG 輸出成 ../png/logo/*.png
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const here = __dirname, out = path.join(here, '..', 'png'), logoDir = path.join(here, '..', 'logo');
const groups = {
  'launch-carousel.html': 'launch',
  'carousel-weekly-app.html': 'pillar-1-weekly-app',
  'carousel-build-breakdown.html': 'pillar-2-build-breakdown',
  'carousel-wish-pool.html': 'pillar-3-wish-pool',
  'carousel-progress.html': 'pillar-4-progress',
  'stories.html': 'stories',
  'project-showcase.html': 'project-showcase',
  'project-starvoyager.html': 'project-starvoyager',
  'og-image.html': 'web'
};
// [svg, width, height, output, transparent background?]
const logos = [
  ['avatar-cream.svg', 1080, 1080, 'avatar-cream-1080.png', false],
  ['avatar-ink.svg', 1080, 1080, 'avatar-ink-1080.png', false],
  ['favicon.svg', 32, 32, 'favicon-32.png', true],
  ['favicon.svg', 180, 180, 'favicon-180.png', true],
  ['favicon.svg', 512, 512, 'favicon-512.png', true],
  ['lockup.svg', 2400, 429, 'lockup-2400w.png', true],
  ['lockup-dark.svg', 2400, 429, 'lockup-dark-2400w.png', true],
  ['mark.svg', 1600, 994, 'mark-1600w.png', true],
  ['mark-dark.svg', 1600, 994, 'mark-dark-1600w.png', true]
];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2400, height: 2400 } });
  for (const [file, dir] of Object.entries(groups)) {
    fs.mkdirSync(path.join(out, dir), { recursive: true });
    await p.goto('file://' + path.join(here, file));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(500);
    for (const f of await p.$$('.frame')) {
      const name = await f.getAttribute('data-name');
      await f.screenshot({ path: path.join(out, dir, name + '.png') });
      console.log(dir + '/' + name + '.png');
    }
  }
  fs.mkdirSync(path.join(out, 'logo'), { recursive: true });
  for (const [svg, w, h, name, transparent] of logos) {
    const lp = await b.newPage({ viewport: { width: w, height: h } });
    await lp.goto('file://' + path.join(logoDir, svg));
    await lp.evaluate(([w, h]) => { const s = document.documentElement; s.setAttribute('width', w); s.setAttribute('height', h); }, [w, h]);
    await lp.screenshot({ path: path.join(out, 'logo', name), omitBackground: transparent, clip: { x: 0, y: 0, width: w, height: h } });
    console.log('logo/' + name);
    await lp.close();
  }
  await b.close();
})();
