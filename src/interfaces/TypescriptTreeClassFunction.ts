/**
 * A Typescript function.
 */
export interface TypescriptTreeClassConstructor {
  /**
   * An optional comment for the parameter.
   */
  comment?: string;

  /**
   * An array of parameters that the constructor expects.
   */
  params: TypescriptTreeClassFunctionParam[];

  /**
   * The content of the constructor.
   */
  lines: string;
}

/**
 * A Typescript function.
 */
export interface TypescriptTreeClassFunction {
  /**
   * An optional comment for the parameter.
   */
  comment?: string;

  /**
   * True if the function should be declared as private.
   */
  isPrivate?: boolean;

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
  params: TypescriptTreeClassFunctionParam[];

  /**
   * The return type of the function.
   */
  returnType?: string;

  /**
   * The content of the function.
   */
  lines: string;
}

/**
 * A parameter for a Typescript function.
 */
export interface TypescriptTreeClassFunctionParam {
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
