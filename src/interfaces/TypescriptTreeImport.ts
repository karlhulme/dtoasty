/**
 * The definition of an import.
 */
export interface TypescriptTreeImport {
  /**
   * The name of a type to import.
   */
  name: string;

  /**
   * The optional alias to be assigned to the import.
   */
  alias?: string;

  /**
   * The path that the type should be imported from.
   */
  path: string;
}
