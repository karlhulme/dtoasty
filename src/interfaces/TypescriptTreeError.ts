/**
 * Represents an Error object.
 */
export interface TypescriptTreeError {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * If supplied, this base error will be used instead of Error.
   */
  baseError?: string;

  /**
   * The name of the interface.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * If specified, this property will be passed to the parent
   * constructor, otherwise a message parameter will be added
   * to the error.  If you specify this property, you will need
   * to wrap it in quotes or back-ticks depending on whether
   * you need interpolation.
   */
  superMessage?: string;

  /**
   * The parameters of the error.
   */
  parameters: TypescriptTreeErrorParameter[];

  /**
   * True if the interface should not be used.
   */
  deprecated?: boolean;

  /**
   * The number of the generation process in which to write out this artifact.
   */
  outputGeneration?: number;
}

/**
 * Represents a parameter passed to an Error constructor.
 */
export interface TypescriptTreeErrorParameter {
  /**
   * The name of the parameter.
   */
  name: string;

  /**
   * The type of the parameter.
   */
  typeName: string;
}
