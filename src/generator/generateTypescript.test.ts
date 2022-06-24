import { assertEquals } from "../../deps.ts";
import { generateTypescript } from "./generateTypescript.ts";

function normalise(v: string) {
  return v.replaceAll("\n", "").replaceAll(" ", "");
}

Deno.test("Generate a typescript file without error.", () => {
  const output = generateTypescript({
    lintDirectives: {
      banUnusedIgnore: true,
      noEmptyInterface: true,
      noExplicitAny: true,
      noUnusedVars: true,
    },
    enumConstArrays: [{
      name: "MyEnum",
      values: ["foo", "bar"],
    }],
    functions: [{
      name: "myFunc",
      params: [],
      lines: [],
      returnType: "void",
    }],
    imports: [{
      name: "type1",
      path: "../pathA.ts",
    }],
    interfaces: [{
      name: "MyInterface",
      members: [],
    }],
    stringUnions: [{
      name: "MyStringUnion",
      values: ["foo", "bar"],
    }],
    types: [{
      name: "MyType",
      def: "(x: number) => void",
    }],
  });

  const expected = `
    // deno-lint-ignore-file ban-unused-ignore no-explicit-any no-unused-vars no-empty-interface

    import { type1 } from "../pathA.ts";

    type MyStringUnion = "foo"|"bar";

    const allMyEnumValues = [
    "foo",
    "bar",
    ] as const;

    type MyEnum = 
    typeof allMyEnumValues[keyof typeof allMyEnumValues];

    type MyType = (x: number) => void;

    interface MyInterface {
    }

    function myFunc (): void {

    };
  `;

  assertEquals(
    normalise(output),
    normalise(expected),
  );
});
