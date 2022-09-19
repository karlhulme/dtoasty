import { TypescriptTreeConstDeclaration } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns the Typescript code for an error.
 * @param constDeclaration A constant declaration.
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

  block += `const ${constDeclaration.name}`;

  if (constDeclaration.typeName) {
    block += `: ${constDeclaration.typeName}`;
  }

  block += ` = ${constDeclaration.value}\n`;

  return block;
}
