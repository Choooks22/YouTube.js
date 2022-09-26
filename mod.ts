// deno-lint-ignore-file no-explicit-any, no-var
declare var require: (id: string) => any;

// Polyfill fetch for node
// @ts-ignore testing for node
if (typeof process !== "undefined" && process?.versions?.node) {
  const set = (propertyKey: PropertyKey, value: any) => {
    // dnt-shim-ignore
    Reflect.set(globalThis, propertyKey, value);
  };

  const undici = require("undici");
  set("fetch", undici.fetch);
  set("Headers", undici.Headers);
  set("Request", undici.Request);
  set("Response", undici.Response);
  set("FormData", undici.FormData);
  set("File", undici.File);
  try {
    const { ReadableStream } = require("node:stream/web");
    set("ReadableStream", ReadableStream);
  } catch { /* do nothing */ }
}

export * from "./src/utils/index.ts";
export { YTNodes } from "./src/parser/map.ts";
export { default as Parser } from "./src/parser/index.ts";
export { default, default as Innertube } from "./src/Innertube.ts";
