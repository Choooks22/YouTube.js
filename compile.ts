import { build, emptyDir } from 'https://deno.land/x/dnt@0.30.0/mod.ts';
import { join } from 'https://deno.land/std@0.148.0/path/mod.ts';
import { rollup } from 'https://esm.sh/rollup@2.79.1';

const outDir = './npm';
const copy = (source: string) => Deno.copyFile(source, join(outDir, source));

await emptyDir(outDir);
await Promise.all([
  copy('./LICENSE'),
  copy('./CONTRIBUTING.md'),
  copy('./README.md'),
]);

await build({
  entryPoints: ['./mod.ts'],
  outDir,
  compilerOptions: {
    lib: [
      'dom',
      'esnext',
    ],
  },
  shims: {
    deno: false,
  },
  package: {
    name: 'youtubei.js',
    version: '3.0.0',
    license: 'MIT',
    browser: './browser.js',
    dependencies: {
      undici: '^5.10.0',
    },
    author: 'LuanRT <luan.lrt4@gmail.com> (https://github.com/LuanRT)',
    homepage: 'https://github.com/LuanRT/YouTube.js#readme',
    repository: {
      'type': 'git',
      'url': 'git+https://github.com/LuanRT/YouTube.js.git',
    },
    contributors: [
      'Wykerd (https://github.com/wykerd/)',
      'MasterOfBob777 (https://github.com/MasterOfBob777)',
      'patrickkfkan (https://github.com/patrickkfkan)',
    ],
    bugs: {
      'url': 'https://github.com/LuanRT/YouTube.js/issues',
    },
    funding: [
      'https://github.com/sponsors/LuanRT',
    ],
    keywords: [
      'yt',
      'dl',
      'ytdl',
      'youtube',
      'youtubedl',
      'youtube-dl',
      'youtube-downloader',
      'youtube-music',
      'innertubeapi',
      'innertube',
      'unofficial',
      'downloader',
      'livechat',
      'studio',
      'upload',
      'ytmusic',
      'search',
      'comment',
      'music',
      'api',
    ],
  },
});

console.info('[rollup] Bundling for web...');
const bun = await rollup({
  input: './npm/esm/mod.js',
});

console.info('[rollup] Emitting web bundle...');
await bun.write({
  file: './npm/browser.js',
});

console.info('[rollup] Complete!');
