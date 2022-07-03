import { assertEquals } from "../../deps.ts";
import { generateTypescriptForClassFunction } from "./generateTypescriptForClassFunction.ts";

Deno.test("Generate a class function.", () => {
  assertEquals(
    generateTypescriptForClassFunction({
      comment: "This is a comment.",
      name: "myFunc",
      typeParams: ["MyType1"],
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
      isPrivate: true,
      lines: "// line 1\n// line 2",
    }),
    "/**\n * This is a comment.\n * @param param1 This is param 1.\n */\n" +
      "async private myFunc<MyType1> (param1: string, param2?: number): boolean {\n" +
      "// line 1\n// line 2\n}",
  );
});
