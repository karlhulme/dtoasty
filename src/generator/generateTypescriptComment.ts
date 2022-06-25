/**
 * The options for the generated comment.
 */
interface CommentOptions {
  /**
   * True if the comment should include a
   * deprecated doc comment.
   */
  deprecated?: boolean;
}

/**
 * Returns a Typescript comment.
 * @param comment A comment.
 */
export function generateTypescriptComment(
  comment: string,
  options?: CommentOptions,
) {
  let block = "/**\n * ";

  if (options?.deprecated) {
    block += "@deprecated ";
  }

  block += comment.replaceAll("\n", " ");

  block += "\n */";

  return block;
}
