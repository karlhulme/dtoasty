/**
 * Returns a Typescript comment.
 * @param comment A comment.
 */
export function generateTypescriptComment(comment: string) {
  let line = "/**\n * ";

  line += comment.replaceAll("\n", " ");

  line += "\n */";

  return line;
}
