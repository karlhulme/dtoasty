import {
  TypescriptTreeClassConstructor,
  TypescriptTreeClassFunction,
} from "./TypescriptTreeClassFunction.ts";

/**
 * Represents a Class object.
 */
export interface TypescriptTreeClass {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the class.
   */
  name: string;

  /**
   * The definitions of type parameters for the class.
   */
  typeParams?: string[];

  /**
   * The class extended by this class.
   */
  baseClass?: string;

  /**
   * An array of private variables declared on the class.
   */
  privateVars?: TypescriptTreeClassPrivateVar[];

  /**
   * A constructor function.
   */
  ctor?: TypescriptTreeClassConstructor;

  /**
   * An array of class functions.
   */
  functions?: TypescriptTreeClassFunction[];

  /**
   * True if the class should be exported.
   */
  exported?: boolean;

  /**
   * True if the class should not be used.
   */
  deprecated?: boolean;

  /**
   * The number of the generation process in which to write out this artifact.
   * Defaults to zero.
   */
  outputGeneration?: number;
}

/**
 * A private variable.
 */
export interface TypescriptTreeClassPrivateVar {
  /**
   * The name of the private variable.
   */
  name: string;

  /**
   * True if the private variable may be left undefined.
   */
  optional?: boolean;

  /**
   * The type name (or declaration) for this private variable.
   */
  typeName: string;
}
