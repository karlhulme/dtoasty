import { assertEquals } from "../../deps.ts";
import { generateTypescriptForInterface } from "./generateTypescriptForInterface.ts";

Deno.test("Generate an empty interface.", () => {
  assertEquals(
    generateTypescriptForInterface({
      name: "myType",
      comment: "This is a comment.",
      members: [],
    }),
    "/**\n * This is a comment.\n */\ninterface myType {\n}",
  );
});

Deno.test("Generate a full interface.", () => {
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
      }],
    }),
    "/**\n * This is a comment.\n */\nexport interface myType {\n/**\n * This is param 1.\n */\nparam1: string;\nparam2?: number;\n}",
  );
});
