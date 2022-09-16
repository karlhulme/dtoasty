import { assertEquals } from "../../deps.ts";
import { generateTypescriptForLintDirectives } from "./generateTypescriptForLintDirectives.ts";

Deno.test("Generate an empty lint directive given no directives.", () => {
  assertEquals(
    generateTypescriptForLintDirectives({}),
    "",
  );
});

Deno.test("Generate a full lint directive given true directives.", () => {
  assertEquals(
    generateTypescriptForLintDirectives({
      ignoreUnusedIgnore: true,
      ignoreNoEmptyInterface: true,
      ignoreNoExplicitAny: true,
      ignoreNoUnusedVars: true,
    }),
    "// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-unused-vars no-empty-interface",
  );
});
