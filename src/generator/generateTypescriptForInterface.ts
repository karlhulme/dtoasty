import { TypescriptTreeInterface } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns a Typescript interface declaration.
 * @param iface An interface definition.
 */
export function generateTypescriptForInterface(iface: TypescriptTreeInterface) {
  let line = "";

  if (iface.comment) {
    line += generateTypescriptComment(iface.comment, {
      deprecated: iface.deprecated,
    }) + "\n";
  }

  if (iface.exported) {
    line += "export ";
  }

  line += `interface ${iface.name} {\n`;

  for (const field of iface.members) {
    if (field.comment || field.deprecated) {
      line += generateTypescriptComment(
        field.comment || "",
        {
          deprecated: field.deprecated,
        },
      ) + "\n";
    }

    const opt = field.optional ? "?" : "";
    line += `${field.name}${opt}: ${field.typeName};\n`;
  }

  line += "}";

  return line;
}
