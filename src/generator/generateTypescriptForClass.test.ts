import { assertEquals } from "../../deps.ts";
import { generateTypescriptForClass } from "./generateTypescriptForClass.ts";

Deno.test("Generate a class.", () => {
  const ts = generateTypescriptForClass({
    name: "Test",
    baseClass: "BaseTest",
    comment: "This is a class.",
    ctor: {
      params: [],
      lines: "// construct",
      comment: "Create new Test.",
    },
    deprecated: true,
    exported: true,
    typeParams: ["TypeParam1", "TypeParam2"],
    privateVars: [{
      name: "reqPrivateVar",
      typeName: "string",
    }, {
      name: "optPrivateVar",
      typeName: "number",
      optional: true,
    }],
    functions: [{
      name: "performAction",
      params: [],
      lines: "// do something here",
    }],
  });

  assertEquals(
    ts,
    "/**\n * @deprecated This is a class.\n */\n" +
      "export class Test<TypeParam1, TypeParam2> extends BaseTest {\n" +
      "private reqPrivateVar: string;\n" +
      "private optPrivateVar?: number;\n" +
      "/**\n * Create new Test.\n */\n" +
      "constructor () {\n" +
      "// construct\n" +
      "};\n" +
      "performAction () {\n" +
      "// do something here\n" +
      "}\n" +
      "}",
  );
});
