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

Deno.test("Generate an interface with a required field, an optional field, a deprecated field and a hyphentated field and type params.", () => {
  assertEquals(
    generateTypescriptForInterface({
      name: "myType",
      comment: "This is a comment.",
      typeParams: ["string", "number"],
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
      }, {
        name: "param5",
        typeName: "number",
        nullable: true,
      }],
    }),
    "/**\n * This is a comment.\n */\nexport interface myType<string, number> {\n/**\n * This is param 1.\n */\nparam1: string;\n" +
      "param2?: number;\n" +
      "/**\n * @deprecated \n */\nparam3: boolean;\n" +
      '"param-4": string[];\n' +
      "param5: number|null;\n" +
      "}",
  );
});
