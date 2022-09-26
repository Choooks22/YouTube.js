export const YTNodes = map;
import * as map from './classes/mod.ts';
import type { YTNodeConstructor } from './helpers.ts';

/**
 * @param name - Name of the node to be parsed
 */
export function GetParserByName(name: string) {
  const ParserConstructor = (map as Record<string, YTNodeConstructor>)[name];

  if (!ParserConstructor) {
    const error = new Error(`Module not found: ${name}`);
    (error as any).code = 'MODULE_NOT_FOUND';
    throw error;
  }

  return ParserConstructor;
}
