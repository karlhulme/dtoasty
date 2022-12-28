/**
 * The definition of a const declaration.
 */
export interface TypescriptTreeConstDeclaration {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the const.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * The value to be assigned to the const.
   */
  value: string;

  /**
   * The type name (or declaration) for this declaration.
   */
  typeName?: string;

  /**
   * True if the interface should not be used.
   */
  deprecated?: boolean;

  /**
   * The number of the generation process in which to write out this artifact.
   * Defaults to zero.
   */
  outputGeneration?: number;
}
