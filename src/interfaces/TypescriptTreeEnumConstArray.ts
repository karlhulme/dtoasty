/**
 * The definition of an enum const array.
 */
export interface TypescriptTreeEnumConstArray {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the enum const.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * The array of string valus to declare.
   */
  values: string[];

  /**
   * The number of the generation process in which to write out this artifact.
   * Defaults to zero.
   */
  outputGeneration?: number;
}
