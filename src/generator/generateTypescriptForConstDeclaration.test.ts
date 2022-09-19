import { assertEquals } from "../../deps.ts";
import { generateTypescriptForConstDeclaration } from "./generateTypescriptForConstDeclaration.ts";

Deno.test("Generate a const declaration.", () => {
  assertEquals(
    generateTypescriptForConstDeclaration({
      name: "hello",
      value: '"world"',
    }),
    'const hello = "world"\n',
  );
});

Deno.test("Generate a const declaration with a type name.", () => {
  assertEquals(
    generateTypescriptForConstDeclaration({
      name: "hello",
      value: '"world"',
      typeName: "string",
    }),
    'const hello: string = "world"\n',
  );
});

Deno.test("Generate a const declaration that is deprectated and with a comment block.", () => {
  assertEquals(
    generateTypescriptForConstDeclaration({
      comment: "This is my declaration.",
      name: "MyValue",
      value: "5",
      deprecated: true,
      exported: true,
    }),
    "/**\n * @deprecated This is my declaration.\n */\n" +
      "export const MyValue = 5\n",
  );
});
