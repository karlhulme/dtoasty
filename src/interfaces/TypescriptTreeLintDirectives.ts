/**
 * A set of lint directives.
 */
export interface TypescriptTreeLintDirectives {
  /**
   * True if the declarations may use the any type.
   */
  ignoreNoExplicitAny?: boolean;

  /**
   * True if variables may be declared but not used.
   */
  ignoreNoUnusedVars?: boolean;

  /**
   * True if interfaces may be declared without any members.
   */
  ignoreNoEmptyInterface?: boolean;

  /**
   * True if lint declarations may be made even if they don't
   * suppress any warnings.
   */
  ignoreUnusedIgnore?: boolean;
}
