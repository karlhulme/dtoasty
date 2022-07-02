import { TypescriptTree } from "../interfaces/index.ts";
import { generateTypescriptForLintDirectives } from "./generateTypescriptForLintDirectives.ts";
import { generateTypescriptForImports } from "./generateTypescriptForImports.ts";
import { generateTypescriptForStringUnion } from "./generateTypescriptForStringUnion.ts";
import { generateTypescriptForEnumConstArray } from "./generateTypescriptForEnumConstArray.ts";
import { generateTypescriptForType } from "./generateTypescriptForType.ts";
import { generateTypescriptForInterface } from "./generateTypescriptForInterface.ts";
import { generateTypescriptForFunction } from "./generateTypescriptForFunction.ts";
import { generateTypescriptForError } from "./generateTypescriptForError.ts";
import { generateTypescriptForClass } from "./generateTypescriptForClass.ts";

/**
 * Returns a string that contains Typescript declarations
 * that can be written to a typescript (.ts) file.
 * @param tree A typesript tree.
 */
export function generateTypescript(tree: TypescriptTree) {
  const lines: string[] = [];

  lines.push(generateTypescriptForLintDirectives(tree.lintDirectives));

  lines.push(generateTypescriptForImports(tree.imports));

  for (const error of tree.errors) {
    lines.push(generateTypescriptForError(error));
  }

  for (const stringUnion of tree.stringUnions) {
    lines.push(generateTypescriptForStringUnion(stringUnion));
  }

  for (const enumConstArray of tree.enumConstArrays) {
    lines.push(generateTypescriptForEnumConstArray(enumConstArray));
  }

  for (const typeDef of tree.types) {
    lines.push(generateTypescriptForType(typeDef));
  }

  for (const iface of tree.interfaces) {
    lines.push(generateTypescriptForInterface(iface));
  }

  for (const func of tree.functions) {
    lines.push(generateTypescriptForFunction(func));
  }

  for (const aClass of tree.classes) {
    lines.push(generateTypescriptForClass(aClass));
  }

  return lines.join("\n\n") + "\n";
}
