// Module ID: 4629
// Function ID: 4630
// Name: findCodedLinkUrls
// Dependencies: [4630, 8125, 5083, 13961, 13962, 2]
// Exports: default

// Module 4629 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5083 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13962 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4630).default;
    const parseToASTResult = tmp(4630).default.parseToAST(content, true, { allowLinks: true });
    tmp(8125).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8125);
  }
  return items;
};
