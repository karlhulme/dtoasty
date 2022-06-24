import { assertEquals } from "../../deps.ts";
import { generateTypescriptForEnumConstArray } from "./generateTypescriptForEnumConstArray.ts";

Deno.test("Generate an enum const array.", () => {
  assertEquals(
    generateTypescriptForEnumConstArray({
      name: "MyType",
      values: ["foo", "bar"],
      comment: "This is a comment.",
      exported: true,
    }),
    "/**\n * This is a comment.\n */\n" +
      'export const allMyTypeValues = [\n"foo",\n"bar",\n] as const;\n\n' +
      "/**\n * This is a comment.\n */\n" +
      "export type MyType = \n typeof allMyTypeValues[keyof typeof allMyTypeValues];",
  );
});
