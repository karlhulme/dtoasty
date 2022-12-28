/**
 * A Typescript function.
 */
export interface TypescriptTreeFunction {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * True if the function is asynchronous.
   */
  async?: boolean;

  /**
   * The name of the function.
   */
  name: string;

  /**
   * The definitions of type parameters for the class.
   */
  typeParams?: string[];

  /**
   * An array of parameters that the function expects.
   */
  params: TypescriptTreeFunctionParam[];

  /**
   * The return type of the function.
   */
  returnType?: string;

  /**
   * The content of the function.
   */
  lines: string;

  /**
   * The number of the generation process in which to write out this artifact.
   * Defaults to zero.
   */
  outputGeneration?: number;
}

/**
 * A parameter for a Typescript function.
 */
export interface TypescriptTreeFunctionParam {
  /**
   * An optional comment for the parameter.
   */
  comment?: string;

  /**
   * The name of the parameter.
   */
  name: string;

  /**
   * True if the parameter may be left undefined.
   */
  optional?: boolean;

  /**
   * The type name (or declaration) for the parameter.
   */
  typeName: string;
}
