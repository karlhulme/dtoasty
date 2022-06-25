/**
 * Returns a Typescript function comment block.
 * @param comment A function comment.
 * @param params An array of comments for each of the parameters.
 */
export function generateTypescriptFunctionComment(
  comment: string,
  params: { name: string; comment?: string }[],
) {
  let block = "/**\n * ";

  block += comment.replaceAll("\n", " ") + "\n";

  for (const param of params) {
    if (param.comment) {
      block += ` * @param ${param.name} `;
      block += param.comment.replaceAll("\n", " ") + "\n";
    }
  }

  block += " */";

  return block;
}
