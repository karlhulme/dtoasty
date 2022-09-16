import { TypescriptTreeLintDirectives } from "../interfaces/index.ts";

/**
 * Returns a Typescript lint comment that can be inserted
 * at the head of a Typescript file.
 * @param directives A set of lint directives.
 */
export function generateTypescriptForLintDirectives(
  directives: TypescriptTreeLintDirectives,
) {
  let line = "";

  const isUsed = Boolean(
    directives.ignoreUnusedIgnore ||
      directives.ignoreNoEmptyInterface ||
      directives.ignoreNoExplicitAny ||
      directives.ignoreNoUnusedVars,
  );

  if (isUsed) {
    line += "// deno-lint-ignore-file";

    if (directives.ignoreUnusedIgnore) {
      line += " ban-unused-ignore";
    }

    if (directives.ignoreNoExplicitAny) {
      line += " no-explicit-any";
    }

    if (directives.ignoreNoUnusedVars) {
      line += " no-unused-vars";
    }

    if (directives.ignoreNoEmptyInterface) {
      line += " no-empty-interface";
    }
  }

  return line;
}
