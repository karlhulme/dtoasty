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
   * True if the declaration should be exported.
   */
  exported?: boolean;

  /**
   * The members of the interface.
   */
  members: TypescriptTreeInterfaceMember[];
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
   * The type name (or declaration) for this member.
   */
  typeName: string;
}
