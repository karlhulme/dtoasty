/**
 * A string union.
 */
export interface TypescriptTreeStringUnion {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the string union.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * An array of values that make up the union.
   */
  values: string[];

  /**
   * The number of the generation process in which to write out this artifact.
   */
  outputGeneration?: number;
}
