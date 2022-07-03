import { assertEquals } from "../../deps.ts";
import { generateTypescriptForFunction } from "./generateTypescriptForFunction.ts";

Deno.test("Generate a function.", () => {
  assertEquals(
    generateTypescriptForFunction({
      comment: "This is a comment.",
      name: "myFunc",
      typeParams: ["MyType1", "MyType2"],
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
      lines: "// line 1\n// line 2",
    }),
    "/**\n * This is a comment.\n * @param param1 This is param 1.\n */\n" +
      "export async function myFunc<MyType1, MyType2> (param1: string, param2?: number): boolean {\n" +
      "// line 1\n// line 2\n}",
  );
});
