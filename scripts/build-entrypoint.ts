import { resolve } from 'https://deno.land/std@0.148.0/path/mod.ts';
const __dirname = new URL('.', import.meta.url).pathname;

async function createEntrypoint(dir: string) {
  const path = resolve(__dirname, dir);
  const filepath = resolve(path, 'mod.ts');

  const entrypoint = await Deno.open(filepath, {
    create: true,
    truncate: true,
    write: true,
  });

  const enc = new TextEncoder();
  const write = (content: string) =>
    entrypoint.write(enc.encode(content + '\n'));

  for await (const { name, isDirectory } of Deno.readDir(path)) {
    if (isDirectory || name === 'mod.ts' || !name.endsWith('.ts')) continue;
    await write(`export * from './${name}'`);
  }

  entrypoint.close();
}

await createEntrypoint('../src/core');
await createEntrypoint('../src/parser/classes');
await createEntrypoint('../src/parser/youtube');
await createEntrypoint('../src/parser/ytmusic');
