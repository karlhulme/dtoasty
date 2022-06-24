import { assertEquals } from "../../deps.ts";
import { generateTypescriptForType } from "./generateTypescriptForType.ts";

Deno.test("Generate a type declaration.", () => {
  assertEquals(
    generateTypescriptForType({
      name: "myType",
      def: "(x: string) => void",
      comment: "This is a comment.",
      exported: true,
    }),
    "/**\n * This is a comment.\n */\nexport type myType = (x: string) => void;",
  );
});
