// Module ID: 8206
// Function ID: 8207
// Name: MarkupParser
// Dependencies: [8207, 2, 8208, 8209]

// Module 8206 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8207 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("../discord_common/js/packages/markup/MarkupParser.tsx");
for (const key10026 in require("MarkupASTUtils")) {
  arg5[key10026] = require("MarkupASTUtils")[key10026];
  continue;
}
for (const key10030 in require("MarkupParserTypes")) {
  arg5[key10030] = require("MarkupParserTypes")[key10030];
  continue;
}

export const reactParserFor = markup_MarkupParser.default.reactParserFor;
export const astParserFor = markup_MarkupParser.default.astParserFor;
