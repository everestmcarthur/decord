// Module ID: 4596
// Function ID: 4597
// Name: findCodedLinkUrls
// Dependencies: [4597, 8064, 5048, 13902, 13903, 2]
// Exports: default

// Module 4596 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5048 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13903 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4597).default;
    const parseToASTResult = tmp(4597).default.parseToAST(content, true, { allowLinks: true });
    tmp(8064).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8064);
  }
  return items;
};
