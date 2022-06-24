import { assertEquals } from "../../deps.ts";
import { generateTypescriptForImports } from "./generateTypescriptForImports.ts";

Deno.test("Generate a set of imports.", () => {
  assertEquals(
    generateTypescriptForImports([{
      name: "type1",
      path: "../pathA.ts",
    }, {
      name: "type2",
      path: "../pathA.ts",
      alias: "type2b",
    }, {
      name: "type3",
      path: "../pathB.ts",
    }]),
    'import { type1, type2 as type2b } from "../pathA.ts";\nimport { type3 } from "../pathB.ts";',
  );
});
