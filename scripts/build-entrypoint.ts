import { resolve } from 'https://deno.land/std@0.148.0/path/mod.ts';
const __dirname = new URL('.', import.meta.url).pathname;

interface Opts {
  /**
   * How many levels to recurse.
   */
  depth?: number;
}

async function createEntrypoint(dir: string, options?: Opts) {
  const opts: Required<Opts> = {
    depth: 0,
    ...options,
  };

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

  await write('/**\n * THIS FILE WAS AUTOGENERATED. DO NOT EDIT\n */');
  for await (const { name, isDirectory } of Deno.readDir(path)) {
    if (isDirectory) {
      if (opts.depth > 0) {
        await createEntrypoint(`${dir}/${name}`, {
          ...opts,
          depth: opts.depth - 1,
        });
        await write(`export * from './${name}/mod.ts'`);
      }
      continue;
    }

    if (name === 'mod.ts' || !name.endsWith('.ts')) continue;

    await write(`export * from './${name}'`);
  }

  entrypoint.close();
}

await createEntrypoint('../src/core');
await createEntrypoint('../src/parser/classes', { depth: 2 });
await createEntrypoint('../src/parser/youtube');
await createEntrypoint('../src/parser/ytmusic');
await createEntrypoint('../src/parser/misc');
