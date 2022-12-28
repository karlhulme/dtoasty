/**
 * An interface definition.
 */
export interface TypescriptTreeInterface {
  /**
   * An optional comment.
   */
  comment?: string;

  /**
   * The name of the interface.
   */
  name: string;

  /**
   * The definitions of type parameters for the interface.
   */
  typeParams?: string[];

  /**
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * The members of the interface.
   */
  members: TypescriptTreeInterfaceMember[];

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

/**
 * A member of an interface.
 */
export interface TypescriptTreeInterfaceMember {
  /**
   * An optional comment for the interface property.
   */
  comment?: string;

  /**
   * The name of the member.
   */
  name: string;

  /**
   * True if the member may be left undefined.
   */
  optional?: boolean;

  /**
   * True if the member may be set to null.
   */
  nullable?: boolean;

  /**
   * The type name (or declaration) for this member.
   */
  typeName: string;

  /**
   * True if the member should not be used.
   */
  deprecated?: boolean;
}
