import { TypescriptTreeStringUnion } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * A Typescript declaration of a string union.
 * @param stringUnion A string union definition.
 */
export function generateTypescriptForStringUnion(
  stringUnion: TypescriptTreeStringUnion,
) {
  let line = "";

  if (stringUnion.comment) {
    line += generateTypescriptComment(stringUnion.comment) + "\n";
  }

  if (stringUnion.exported) {
    line += "export ";
  }

  line += `type ${stringUnion.name} = `;

  line += stringUnion.values
    .map((su) => `"${su}"`)
    .join("|");

  line += ";";

  return line;
}
