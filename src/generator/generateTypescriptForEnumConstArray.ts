import { TypescriptTreeEnumConstArray } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns the Typescript code for an enum const array.
 * @param enumConstArray An enum const array definition.
 */
export function generateTypescriptForEnumConstArray(
  enumConstArray: TypescriptTreeEnumConstArray,
) {
  let block = "";
  const valuesTypeName = `all${enumConstArray.name}Values`;

  if (enumConstArray.comment) {
    block += generateTypescriptComment(enumConstArray.comment) + "\n";
  }

  if (enumConstArray.exported) {
    block += "export ";
  }

  block += `const ${valuesTypeName} = [\n`;

  block += enumConstArray.values
    .map((v) => `"${v}",\n`)
    .join("");

  block += "] as const;\n\n";

  if (enumConstArray.comment) {
    block += generateTypescriptComment(enumConstArray.comment) + "\n";
  }

  if (enumConstArray.exported) {
    block += "export ";
  }

  block += `type ${enumConstArray.name} = \n`;

  block += ` typeof ${valuesTypeName}`;
  block += `[keyof typeof ${valuesTypeName}];`;

  return block;
}
