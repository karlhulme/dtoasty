import { assertEquals } from "../../deps.ts";
import { generateTypescriptForError } from "./generateTypescriptForError.ts";

Deno.test("Generate an error.", () => {
  assertEquals(
    generateTypescriptForError({
      name: "MyError",
      parameters: [],
    }),
    "class MyError extends Error {\n" +
      "  constructor(public readonly message: string) {\n" +
      "    super(message);\n" +
      "    Object.setPrototypeOf(this, new.target.prototype);\n" +
      "    this.name = this.constructor.name;\n" +
      "  }\n" +
      "}",
  );
});

Deno.test("Generate an exported, deprecated error with properties and a custom base class.", () => {
  assertEquals(
    generateTypescriptForError({
      name: "MyError",
      exported: true,
      baseError: "MyBaseError",
      superMessage: '"The custom message"',
      parameters: [{
        name: "param1",
        typeName: "number",
      }],
      comment: "This is my error class.",
      deprecated: true,
    }),
    "/**\n * @deprecated This is my error class.\n */\n" +
      "export class MyError extends MyBaseError {\n" +
      "  constructor(public readonly param1: number) {\n" +
      '    super("The custom message");\n' +
      "    Object.setPrototypeOf(this, new.target.prototype);\n" +
      "    this.name = this.constructor.name;\n" +
      "  }\n" +
      "}",
  );
});
