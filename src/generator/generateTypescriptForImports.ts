import { TypescriptTreeImport } from "../interfaces/index.ts";

/**
 * Represents a single file to import.
 */
interface ImportedFile {
  /**
   * The path to the import.
   */
  path: string;

  /**
   * The array of elements to import.
   */
  elements: ImportedFileElement[];
}

/**
 * Represents an element being imported from a file.
 */
interface ImportedFileElement {
  /**
   * The name of the type as defined in the imported file.
   */
  name: string;

  /**
   * The optional alias to assign when importing the type.
   */
  alias?: string;
}

/**
 * Returns a series of Typescript import declarations.
 * @param imports An array of imports.
 */
export function generateTypescriptForImports(imports: TypescriptTreeImport[]) {
  const files: ImportedFile[] = [];

  for (const importElement of imports) {
    const matchedFile = files.find((f) => f.path === importElement.path);

    if (matchedFile) {
      matchedFile.elements.push({
        name: importElement.name,
        alias: importElement.alias,
      });
    } else {
      files.push({
        path: importElement.path,
        elements: [{
          name: importElement.name,
          alias: importElement.alias,
        }],
      });
    }
  }

  const lines: string[] = [];

  for (const file of files) {
    const importNames = file.elements
      .map((element) => {
        return (element.alias)
          ? `${element.name} as ${element.alias}`
          : element.name;
      })
      .join(", ");

    lines.push(`import { ${importNames} } from "${file.path}";`);
  }

  return lines.join("\n");
}
