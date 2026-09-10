// Module ID: 8039
// Function ID: 8040
// Name: MarkupParser
// Dependencies: [8040, 2, 8041, 8042]

// Module 8039 (MarkupParser)
import markup_MarkupParser from "markup/MarkupParser" /* 8040 */;
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
