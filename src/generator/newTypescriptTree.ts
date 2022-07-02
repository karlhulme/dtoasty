import { TypescriptTree } from "../interfaces/index.ts";

/**
 * Returns a new TypescriptTree with all the members intialised
 * to empty arrays.
 */
export function newTypescriptTree(): TypescriptTree {
  return {
    lintDirectives: {},
    enumConstArrays: [],
    errors: [],
    functions: [],
    imports: [],
    interfaces: [],
    stringUnions: [],
    types: [],
    classes: [],
  };
}
