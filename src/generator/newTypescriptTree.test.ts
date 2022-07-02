import { assertEquals } from "../../deps.ts";
import { newTypescriptTree } from "./newTypescriptTree.ts";

Deno.test("Create a new typescript tree.", () => {
  assertEquals(
    newTypescriptTree(),
    {
      lintDirectives: {},
      enumConstArrays: [],
      errors: [],
      functions: [],
      imports: [],
      interfaces: [],
      stringUnions: [],
      types: [],
      classes: [],
    },
  );
});
