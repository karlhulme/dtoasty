/**
 * A Typescript function.
 */
export interface TypescriptTreeFunction {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the function.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * True if the function is asynchronous.
   */
  async?: boolean;

  /**
   * An array of parameters that the function expects.
   */
  params: TypescriptTreeFunctionParam[];

  /**
   * The return type of the function.
   */
  returnType: string;

  /**
   * The content of the function.
   */
  lines: string[];
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
