import { assertEquals } from "../../deps.ts";
import { generateTypescriptForClassConstructor } from "./generateTypescriptForClassConstructor.ts";

Deno.test("Generate a class constructor.", () => {
  assertEquals(
    generateTypescriptForClassConstructor({
      params: [{
        name: "param1",
        typeName: "string",
        comment: "This is param 1.",
      }, {
        name: "param2",
        typeName: "number",
        optional: true,
      }],
      comment: "This is a comment.",
      lines: "// line 1\n// line 2",
    }),
    "/**\n * This is a comment.\n * @param param1 This is param 1.\n */\n" +
      "constructor (param1: string, param2?: number) {\n" +
      "// line 1\n// line 2\n}",
  );
});
