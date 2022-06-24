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
    directives.banUnusedIgnore ||
      directives.noEmptyInterface ||
      directives.noExplicitAny ||
      directives.noUnusedVars,
  );

  if (isUsed) {
    line += "// deno-lint-ignore-file";

    if (directives.banUnusedIgnore) {
      line += " ban-unused-ignore";
    }

    if (directives.noExplicitAny) {
      line += " no-explicit-any";
    }

    if (directives.noUnusedVars) {
      line += " no-unused-vars";
    }

    if (directives.noEmptyInterface) {
      line += " no-empty-interface";
    }
  }

  return line;
}
