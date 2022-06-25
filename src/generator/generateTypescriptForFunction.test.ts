import { assertEquals } from "../../deps.ts";
import { generateTypescriptForFunction } from "./generateTypescriptForFunction.ts";

Deno.test("Generate a function.", () => {
  assertEquals(
    generateTypescriptForFunction({
      name: "myFunc",
      params: [{
        name: "param1",
        typeName: "string",
        comment: "This is param 1.",
      }, {
        name: "param2",
        typeName: "number",
        optional: true,
      }],
      returnType: "boolean",
      async: true,
      exported: true,
      comment: "This is a comment.",
      lines: "// line 1\n// line 2",
    }),
    "/**\n * This is a comment.\n * @param param1 This is param 1.\n */\n" +
      "export async function myFunc (param1: string, param2?: number): boolean {\n" +
      "// line 1\n// line 2\n};",
  );
});
