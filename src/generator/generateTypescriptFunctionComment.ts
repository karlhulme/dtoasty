/**
 * Returns a Typescript function comment block.
 * @param comment A function comment.
 * @param params An array of comments for each of the parameters.
 */
export function generateTypescriptFunctionComment(
  comment: string,
  params: { name: string; comment?: string }[],
) {
  let line = "/**\n * ";

  line += comment.replaceAll("\n", " ") + "\n";

  for (const param of params) {
    if (param.comment) {
      line += ` * @param ${param.name} `;
      line += param.comment.replaceAll("\n", " ") + "\n";
    }
  }

  line += " */";

  return line;
}
