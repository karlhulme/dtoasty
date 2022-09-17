import { TypescriptTreeConstDeclaration } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns the Typescript code for an error.
 * @param error A Typescript tree error.
 */
export function generateTypescriptForConstDeclaration(
  constDeclaration: TypescriptTreeConstDeclaration,
) {
  let block = "";

  if (constDeclaration.comment) {
    block += generateTypescriptComment(constDeclaration.comment, {
      deprecated: constDeclaration.deprecated,
    }) + "\n";
  }

  if (constDeclaration.exported) {
    block += "export ";
  }

  block += `const ${constDeclaration.name} = ${constDeclaration.value}\n`;

  return block;
}
