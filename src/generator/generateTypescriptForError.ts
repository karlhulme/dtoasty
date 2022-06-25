import { TypescriptTreeError } from "../interfaces/index.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

/**
 * Returns the Typescript code for an error.
 * @param error A Typescript tree error.
 */
export function generateTypescriptForError(error: TypescriptTreeError) {
  let block = "";

  if (error.comment) {
    block += generateTypescriptComment(error.comment, {
      deprecated: error.deprecated,
    }) + "\n";
  }

  if (error.exported) {
    block += "export ";
  }

  const baseError = error.baseError || "Error";
  block += `class ${error.name} extends ${baseError} {\n`;

  const ctorParams: string[] = [];

  if (!error.superMessage) {
    ctorParams.push(`public readonly message: string`);
  }

  for (const param of error.parameters) {
    ctorParams.push(`public readonly ${param.name}: ${param.typeName}`);
  }

  block += `  constructor(${ctorParams.join(", ")}) {\n`;

  if (error.superMessage) {
    block += `    super(${error.superMessage});\n`;
  } else {
    block += `    super(message);\n`;
  }

  block += `    Object.setPrototypeOf(this, new.target.prototype);\n`;
  block += `    this.name = this.constructor.name;\n`;
  block += `  }\n`;
  block += "}";

  return block;
}
