import { TypescriptTreeEnumConstArray } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns the Typescript code for an enum const array.
 * @param enumConstArray An enum const array definition.
 */
export function generateTypescriptForEnumConstArray(
  enumConstArray: TypescriptTreeEnumConstArray,
) {
  let line = "";
  const valuesTypeName = `all${enumConstArray.name}Values`;

  if (enumConstArray.comment) {
    line += generateTypescriptComment(enumConstArray.comment) + "\n";
  }

  if (enumConstArray.exported) {
    line += "export ";
  }

  line += `const ${valuesTypeName} = [\n`;

  line += enumConstArray.values
    .map((v) => `"${v}",\n`)
    .join("");

  line += "] as const;\n\n";

  if (enumConstArray.comment) {
    line += generateTypescriptComment(enumConstArray.comment) + "\n";
  }

  if (enumConstArray.exported) {
    line += "export ";
  }

  line += `type ${enumConstArray.name} = \n`;

  line += ` typeof ${valuesTypeName}`;
  line += `[keyof typeof ${valuesTypeName}];`;

  return line;
}
