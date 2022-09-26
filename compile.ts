import { join } from 'https://deno.land/std@0.148.0/path/mod.ts';
import { build, emptyDir } from 'https://deno.land/x/dnt@0.30.0/mod.ts';
import commonjs from 'https://esm.sh/@rollup/plugin-commonjs@22.0.2';
import { nodeResolve } from 'https://esm.sh/@rollup/plugin-node-resolve@14.1.0';
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
  entryPoints: [
    './src/mod.ts',
    {
      name: './core',
      path: './src/core/mod.ts',
    },
    {
      name: './classes',
      path: './src/parser/classes/mod.ts',
    },
    {
      name: './youtube',
      path: './src/parser/youtube/mod.ts',
    },
    {
      name: './ytmusic',
      path: './src/parser/ytmusic/mod.ts',
    },
  ],
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
    name: '@chooks22/youtubei.js',
    version: '3.0.0',
    license: 'MIT',
    browser: './browser.js',
    dependencies: {
      undici: '^5.10.0',
    },
    author: 'Chooks22 <chooksdev@gmail.com> (https://github.com/Choooks22)',
    homepage: 'https://github.com/Choooks22/YouTube.js#readme',
    repository: {
      'type': 'git',
      'url': 'git+https://github.com/Choooks22/YouTube.js.git',
    },
    contributors: [
      'Wykerd (https://github.com/wykerd/)',
      'MasterOfBob777 (https://github.com/MasterOfBob777)',
      'patrickkfkan (https://github.com/patrickkfkan)',
    ],
    bugs: {
      'url': 'https://github.com/Choooks22/YouTube.js/issues',
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
  input: './npm/esm/Innertube.js',
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
});

console.info('[rollup] Emitting web bundle...');
await bun.write({
  file: './npm/browser.js',
  exports: 'auto',
});

console.info('[rollup] Complete!');
