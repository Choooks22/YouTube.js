// deno-lint-ignore-file no-explicit-any

// Polyfill fetch for node
// @ts-ignore testing for node
if (typeof process !== 'undefined' && process?.versions?.node) {
  (async () => {
    const set = (propertyKey: PropertyKey, value: any) => {
      // dnt-shim-ignore
      Reflect.set(globalThis, propertyKey, value);
    };

    const undici = await import('undici' as string);
    set('fetch', undici.fetch);
    set('Headers', undici.Headers);
    set('Request', undici.Request);
    set('Response', undici.Response);
    set('FormData', undici.FormData);
    set('File', undici.File);
    try {
      const { ReadableStream } = await import('stream/web' as string);
      set('ReadableStream', ReadableStream);
    } catch { /* do nothing */ }
  })();
}

export * from './utils/index.ts';
export { YTNodes } from './parser/map.ts';
export { Parser } from './parser/index.ts';
export { Innertube } from './Innertube.ts';
