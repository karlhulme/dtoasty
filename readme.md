# dtoasty

![Image](https://img.shields.io/badge/coverage-100%25-green)

Generate Typescript source code from a tree structure.

## Features

This library strikes a balance between working in a data-driven manner without
going full AST. So high level concepts are represented with types but function
and property implementations are just strings.

It can write out definitions for:

- Interfaces with optional/nullable/deprecatable members
- Classes and member functions
- Error definitions
- Imports (with de-duplication)
- Lint directives
- Enum const arrays and string unions
- Const declarations

Comments can be added to most elements of the output, e.g. class comments,
function parameter comments, etc.

The order of output can be controlled via the `outputGeneration` property on most artifacts.

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
