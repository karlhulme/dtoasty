import { TypescriptTreeClass } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";
import { generateTypescriptForClassConstructor } from "./generateTypescriptForClassConstructor.ts";
import { generateTypescriptForClassFunction } from "./generateTypescriptForClassFunction.ts";

/**
 * Returns the Typescript code for a class.
 * @param aClass A class definition.
 */
export function generateTypescriptForClass(aClass: TypescriptTreeClass) {
  let block = "";

  if (aClass.comment) {
    block += generateTypescriptComment(
      aClass.comment,
      { deprecated: aClass.deprecated },
    ) + "\n";
  }

  if (aClass.exported) {
    block += "export ";
  }

  block += `class ${aClass.name}`;

  if (Array.isArray(aClass.typeParams)) {
    block += `<${aClass.typeParams.join(", ")}>`;
  }

  if (aClass.baseClass) {
    block += ` extends ${aClass.baseClass}`;
  }

  block += " {\n";

  if (Array.isArray(aClass.privateVars)) {
    for (const privateVar of aClass.privateVars) {
      const opt = privateVar.optional ? "?" : "";
      const line =
        `private ${privateVar.name}${opt}: ${privateVar.typeName};\n`;
      block += line;
    }
  }

  if (aClass.ctor) {
    block += generateTypescriptForClassConstructor(aClass.ctor) + "\n";
  }

  if (Array.isArray(aClass.functions)) {
    for (const func of aClass.functions) {
      block += generateTypescriptForClassFunction(func) + "\n";
    }
  }

  block += "}";

  return block;
}
