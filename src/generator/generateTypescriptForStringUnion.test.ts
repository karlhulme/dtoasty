import { assertEquals } from "../../deps.ts";
import { generateTypescriptForStringUnion } from "./generateTypescriptForStringUnion.ts";

Deno.test("Generate a string union declaration.", () => {
  assertEquals(
    generateTypescriptForStringUnion({
      name: "myType",
      values: ["foo", "bar"],
      comment: "This is a comment.",
      exported: true,
    }),
    '/**\n * This is a comment.\n */\nexport type myType = "foo"|"bar";',
  );
});
