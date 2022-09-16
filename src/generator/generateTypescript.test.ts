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
    }],
    classes: [{
      name: "MyEmptyClass",
      functions: [{
        name: "simpleFunc",
        params: [],
        lines: "// do more",
      }],
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
      typeof allMyEnumValues[keyof typeof allMyEnumValues];

    type MyType = (x: number) => void;

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
  `;
  console.log(output);
  assertEquals(
    normalise(output),
    normalise(expected),
  );
});
