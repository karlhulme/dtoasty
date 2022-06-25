import { TypescriptTreeInterface } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns a Typescript interface declaration.
 * @param iface An interface definition.
 */
export function generateTypescriptForInterface(iface: TypescriptTreeInterface) {
  let block = "";

  if (iface.comment) {
    block += generateTypescriptComment(iface.comment, {
      deprecated: iface.deprecated,
    }) + "\n";
  }

  if (iface.exported) {
    block += "export ";
  }

  block += `interface ${iface.name} {\n`;

  for (const field of iface.members) {
    if (field.comment || field.deprecated) {
      block += generateTypescriptComment(
        field.comment || "",
        {
          deprecated: field.deprecated,
        },
      ) + "\n";
    }

    const fieldName = field.name.includes("-") ? `"${field.name}"` : field.name;
    const opt = field.optional ? "?" : "";
    const orNull = field.nullable ? "|null" : "";

    block += `${fieldName}${opt}: ${field.typeName}${orNull};\n`;
  }

  block += "}";

  return block;
}
