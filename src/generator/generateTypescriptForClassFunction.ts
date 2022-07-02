import { TypescriptTreeClassFunction } from "../interfaces/index.ts";
import { generateTypescriptFunctionComment } from "./generateTypescriptFunctionComment.ts";

/**
 * Returns the Typescript code for a function.
 * @param func A function definition.
 */
export function generateTypescriptForClassFunction(
  func: TypescriptTreeClassFunction,
) {
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

  if (func.async) {
    block += "async ";
  }

  if (func.isPrivate) {
    block += "private ";
  }

  block += `${func.name} (`;

  const params: string[] = [];

  for (const param of func.params) {
    const opt = param.optional ? "?" : "";
    params.push(`${param.name}${opt}: ${param.typeName}`);
  }

  block += params.join(", ");

  block += ")";

  if (func.returnType) {
    block += `: ${func.returnType}`;
  }

  block += " {\n";
  block += func.lines;
  block += "\n}";

  return block;
}
