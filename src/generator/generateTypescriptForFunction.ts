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

  const params: string[] = [];

  for (const param of func.params) {
    const opt = param.optional ? "?" : "";
    params.push(`${param.name}${opt}: ${param.typeName}`);
  }

  const paramsDec = params.join(", ");
  const content = func.lines.join("\n");

  block += `function ${func.name} `;
  block += `(${paramsDec}): ${func.returnType} {\n`;
  block += content;
  block += "\n};";

  return block;
}
