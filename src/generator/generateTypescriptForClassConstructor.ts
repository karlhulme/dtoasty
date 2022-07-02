import { TypescriptTreeClassConstructor } from "../interfaces/index.ts";
import { generateTypescriptFunctionComment } from "./generateTypescriptFunctionComment.ts";

/**
 * Returns the Typescript code for a class constructor.
 * @param ctor A class constructor.
 */
export function generateTypescriptForClassConstructor(
  ctor: TypescriptTreeClassConstructor,
) {
  let block = "";

  if (ctor.comment) {
    block += generateTypescriptFunctionComment(
      ctor.comment,
      ctor.params.map((p) => ({
        name: p.name,
        comment: p.comment,
      })),
    ) + "\n";
  }

  block += "constructor (";

  const params: string[] = [];

  for (const param of ctor.params) {
    const opt = param.optional ? "?" : "";
    params.push(`${param.name}${opt}: ${param.typeName}`);
  }

  block += params.join(", ");

  block += ") {\n";

  block += ctor.lines;

  block += "\n};";

  return block;
}
