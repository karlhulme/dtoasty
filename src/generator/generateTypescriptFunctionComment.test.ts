import { assertEquals } from "../../deps.ts";
import { generateTypescriptFunctionComment } from "./generateTypescriptFunctionComment.ts";

Deno.test("Generate a one line function comment.", () => {
  assertEquals(
    generateTypescriptFunctionComment(
      "This is a function comment.",
      [{
        name: "param1",
        comment: "This is param 1.",
      }, {
        name: "param2",
      }, {
        name: "param3",
        comment: "This is\nparam 3",
      }],
    ),
    "/**\n * This is a function comment.\n * @param param1 This is param 1.\n * @param param3 This is param 3\n */",
  );
});
