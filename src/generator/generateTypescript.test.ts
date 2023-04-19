import { assertEquals } from "../../deps.ts";
import { generateTypescript } from "./generateTypescript.ts";

function normalise(v: string) {
  return v.replaceAll("\n", "").replaceAll(" ", "");
}

Deno.test("Generate a full typescript file.", () => {
  const output = generateTypescript({
    lintDirectives: {
      ignoreUnusedIgnore: true,
      ignoreNoEmptyInterface: true,
      ignoreNoExplicitAny: true,
      ignoreNoUnusedVars: true,
    },
    enumConstArrays: [{
      name: "MyEnum",
      values: ["foo", "bar"],
    }],
    errors: [{
      name: "MyError",
      parameters: [],
    }],
    functions: [{
      name: "myFunc",
      params: [],
      lines: "// do action",
      returnType: "void",
    }],
    imports: [{
      name: "type1",
      path: "../pathA.ts",
    }],
    interfaces: [{
      name: "MyEmptyInterface",
      members: [],
    }],
    stringUnions: [{
      name: "MyStringUnion",
      values: ["foo", "bar"],
    }],
    types: [{
      name: "MyType",
      def: "(x: number) => void",
      outputGeneration: 1,
    }],
    classes: [{
      name: "MyEmptyClass",
      functions: [{
        name: "simpleFunc",
        params: [],
        lines: "// do more",
      }],
    }],
    constDeclarations: [{
      name: "MaxDecimalPlaces",
      value: "2",
    }],
  });

  const expected = `
    // deno-lint-ignore-file ban-unused-ignore no-explicit-any no-unused-vars no-empty-interface

    import { type1 } from "../pathA.ts";

    class MyError extends Error {
      constructor(public readonly message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = this.constructor.name;
      }
    }

    type MyStringUnion = "foo"|"bar";

    const allMyEnumValues = [
      "foo",
      "bar",
    ] as const;

    type MyEnum = 
      typeof allMyEnumValues[number];

    interface MyEmptyInterface {
    }

    function myFunc (): void {
      // do action
    }

    class MyEmptyClass {
      simpleFunc () {
        // do more
      }
    }

    const MaxDecimalPlaces = 2

    type MyType = (x: number) => void;
  `;
  // console.log(output);
  assertEquals(
    normalise(output),
    normalise(expected),
  );
});
