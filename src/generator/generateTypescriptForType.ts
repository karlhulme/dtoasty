import { TypescriptTreeType } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * A Typescript type definition.
 * @param typeDef A simple type definition.
 */
export function generateTypescriptForType(typeDef: TypescriptTreeType) {
  let line = "";

  if (typeDef.comment) {
    line += generateTypescriptComment(typeDef.comment) + "\n";
  }

  if (typeDef.exported) {
    line += "export ";
  }

  line += `type ${typeDef.name} = ${typeDef.def};`;

  return line;
}
