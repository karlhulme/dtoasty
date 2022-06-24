import { TypescriptTreeFunction } from "../interfaces/index.ts";
import { generateTypescriptFunctionComment } from "./generateTypescriptFunctionComment.ts";

/**
 * Returns the Typescript code for a function.
 * @param func A function definition.
 */
export function generateTypescriptForFunction(func: TypescriptTreeFunction) {
  let line = "";

  if (func.comment) {
    line += generateTypescriptFunctionComment(
      func.comment,
      func.params.map((p) => ({
        name: p.name,
        comment: p.comment,
      })),
    ) + "\n";
  }

  if (func.exported) {
    line += "export ";
  }

  if (func.async) {
    line += "async ";
  }

  const params: string[] = [];

  for (const param of func.params) {
    const opt = param.optional ? "?" : "";
    params.push(`${param.name}${opt}: ${param.typeName}`);
  }

  const paramsDec = params.join(", ");
  const content = func.lines.join("\n");

  line += `function ${func.name} `;
  line += `(${paramsDec}): ${func.returnType} {\n`;
  line += content;
  line += "\n};";

  return line;
}
