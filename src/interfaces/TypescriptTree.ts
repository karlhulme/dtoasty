import { TypescriptTreeLintDirectives } from "./TypescriptTreeLintDirectives.ts";
import { TypescriptTreeImport } from "./TypescriptTreeImport.ts";
import { TypescriptTreeInterface } from "./TypescriptTreeInterface.ts";
import { TypescriptTreeStringUnion } from "./TypescriptTreeStringUnion.ts";
import { TypescriptTreeType } from "./TypescriptTreeType.ts";
import { TypescriptTreeEnumConstArray } from "./TypescriptTreeEnumConstArray.ts";
import { TypescriptTreeFunction } from "./TypescriptTreeFunction.ts";
import { TypescriptTreeError } from "./TypescriptTreeError.ts";

/**
 * A tree of definitions that can be converted to a Typescript file.
 */
export interface TypescriptTree {
  /**
   * The lint declarations that govern lint errors will appear
   * for the generated file.
   */
  lintDirectives: TypescriptTreeLintDirectives;

  /**
   * An array of the types to import.
   */
  imports: TypescriptTreeImport[];

  /**
   * An array of errors.
   */
  errors: TypescriptTreeError[];

  /**
   * An array of interfaces to declare.
   */
  interfaces: TypescriptTreeInterface[];

  /**
   * An array of string unions to declare.
   */
  stringUnions: TypescriptTreeStringUnion[];

  /**
   * An array of enum const arrays to declare.
   */
  enumConstArrays: TypescriptTreeEnumConstArray[];

  /**
   * An array of simple type declarations.
   */
  types: TypescriptTreeType[];

  /**
   * An array of functions to declare.
   */
  functions: TypescriptTreeFunction[];
}
