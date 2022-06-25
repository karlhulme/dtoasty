import { assertEquals } from "../../deps.ts";
import { generateTypescriptForInterface } from "./generateTypescriptForInterface.ts";

Deno.test("Generate an empty interface.", () => {
  assertEquals(
    generateTypescriptForInterface({
      name: "myType",
      comment: "This is a comment.",
      deprecated: true,
      members: [],
    }),
    "/**\n * @deprecated This is a comment.\n */\ninterface myType {\n}",
  );
});

Deno.test("Generate an interface with a required field, an optional field, a deprecated field and a hyphentated field.", () => {
  assertEquals(
    generateTypescriptForInterface({
      name: "myType",
      comment: "This is a comment.",
      exported: true,
      members: [{
        name: "param1",
        typeName: "string",
        comment: "This is param 1.",
      }, {
        name: "param2",
        typeName: "number",
        optional: true,
      }, {
        name: "param3",
        typeName: "boolean",
        deprecated: true,
      }, {
        name: "param-4",
        typeName: "string[]",
      }],
    }),
    "/**\n * This is a comment.\n */\nexport interface myType {\n/**\n * This is param 1.\n */\nparam1: string;\n" +
      "param2?: number;\n" +
      "/**\n * @deprecated \n */\nparam3: boolean;\n" +
      '"param-4": string[];\n' +
      "}",
  );
});
