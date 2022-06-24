/**
 * A simple type definition.
 */
export interface TypescriptTreeType {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the type.
   */
  name: string;

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * The definition of the type.
   */
  def: string;
}
