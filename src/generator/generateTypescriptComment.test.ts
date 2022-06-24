import { assertEquals } from "../../deps.ts";
import { generateTypescriptComment } from "./generateTypescriptComment.ts";

Deno.test("Generate a one line comment.", () => {
  assertEquals(
    generateTypescriptComment("This is a one line comment."),
    "/**\n * This is a one line comment.\n */",
  );
});

Deno.test("Generate a two line comment.", () => {
  assertEquals(
    generateTypescriptComment("This is line one.\nThis is line two."),
    "/**\n * This is line one. This is line two.\n */",
  );
});
