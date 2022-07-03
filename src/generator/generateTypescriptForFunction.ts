import { TypescriptTreeFunction } from "../interfaces/index.ts";
import { generateTypescriptFunctionComment } from "./generateTypescriptFunctionComment.ts";

/**
 * Returns the Typescript code for a function.
 * @param func A function definition.
 */
export function generateTypescriptForFunction(func: TypescriptTreeFunction) {
  let block = "";

  if (func.comment) {
    block += generateTypescriptFunctionComment(
      func.comment,
      func.params.map((p) => ({
        name: p.name,
        comment: p.comment,
      })),
    ) + "\n";
  }

  if (func.exported) {
    block += "export ";
  }

  if (func.async) {
    block += "async ";
  }

  block += `function ${func.name}`;

  if (Array.isArray(func.typeParams) && func.typeParams.length > 0) {
    block += "<" + func.typeParams.join(", ") + ">";
  }

  const params: string[] = [];

  for (const param of func.params) {
    const opt = param.optional ? "?" : "";
    params.push(`${param.name}${opt}: ${param.typeName}`);
  }

  block += ` (${params.join(", ")})`;

  if (func.returnType) {
    block += `: ${func.returnType}`;
  }

  block += ` {\n`;
  block += func.lines;
  block += "\n}";

  return block;
}
