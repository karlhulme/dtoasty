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
import { generateTypescriptForConstDeclaration } from "./generateTypescriptForConstDeclaration.ts";

const MAX_OUTPUT_GENERATION = 10;

/**
 * Returns a string that contains Typescript declarations
 * that can be written to a typescript (.ts) file.
 * @param tree A typesript tree.
 */
export function generateTypescript(tree: TypescriptTree) {
  const lines: string[] = [];

  lines.push(generateTypescriptForLintDirectives(tree.lintDirectives));

  lines.push(generateTypescriptForImports(tree.imports));

  for (let gen = 0; gen < MAX_OUTPUT_GENERATION; gen++) {
    for (const error of tree.errors) {
      if (checkGeneration(gen, error.outputGeneration)) {
        lines.push(generateTypescriptForError(error));
      }
    }

    for (const stringUnion of tree.stringUnions) {
      if (checkGeneration(gen, stringUnion.outputGeneration)) {
        lines.push(generateTypescriptForStringUnion(stringUnion));
      }
    }

    for (const enumConstArray of tree.enumConstArrays) {
      if (checkGeneration(gen, enumConstArray.outputGeneration)) {
        lines.push(generateTypescriptForEnumConstArray(enumConstArray));
      }
    }

    for (const typeDef of tree.types) {
      if (checkGeneration(gen, typeDef.outputGeneration)) {
        lines.push(generateTypescriptForType(typeDef));
      }
    }

    for (const iface of tree.interfaces) {
      if (checkGeneration(gen, iface.outputGeneration)) {
        lines.push(generateTypescriptForInterface(iface));
      }
    }

    for (const func of tree.functions) {
      if (checkGeneration(gen, func.outputGeneration)) {
        lines.push(generateTypescriptForFunction(func));
      }
    }

    for (const aClass of tree.classes) {
      if (checkGeneration(gen, aClass.outputGeneration)) {
        lines.push(generateTypescriptForClass(aClass));
      }
    }

    for (const constDeclaration of tree.constDeclarations) {
      if (checkGeneration(gen, constDeclaration.outputGeneration)) {
        lines.push(generateTypescriptForConstDeclaration(constDeclaration));
      }
    }
  }

  return lines.join("\n\n") + "\n";
}

/**
 * Returns true if the output generation of a specific artifact
 * matches the target generation.
 * @param targetGeneration The target generation number.
 * @param outputGeneration The output generation of a specific artifact.
 */
function checkGeneration(targetGeneration: number, outputGeneration = 0) {
  return targetGeneration === outputGeneration;
}
