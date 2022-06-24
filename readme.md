# dtoasty

A simple, light weight utility, for generating Typescript code files.

Use it as part of a code-generation pipeline.

## Usage

```typescript
import {
  generateTypescript,
  TypescriptTree,
} from "https://github.com/karlhulme/dtoasty/mod.ts";

// Describe the declarations that you want.
const tree: TypescriptTree = {
  lintDirectives: {
    banUnusedIgnore: true,
    noEmptyInterface: true,
    noExplicitAny: true,
    noUnusedVars: true,
  },
  interfaces: [{
    name: "myType",
    comment: "This is a comment.",
    fields: [{
      name: "param1",
      typeName: "string",
      comment: "This is param 1.",
    }, {
      name: "param2",
      typeName: "number",
      optional: true,
    }],
  }],
};

// Generate the typescript contents.
const contents = generateTypescript(tree);

// Write it to a file.
await Deno.writeTextFile("./src/autogen/myFile.autogen.ts", contents);
```

## Formatting

All output is left-aligned, so run `deno fmt` after generation to pretty-print.

## Commands

Run `deno task test` to test, format and output coverage report.
