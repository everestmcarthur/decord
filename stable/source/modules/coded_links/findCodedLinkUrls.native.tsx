// Module ID: 4549
// Function ID: 4550
// Name: findCodedLinkUrls
// Dependencies: [4550, 7990, 4996, 13849, 13850, 2]
// Exports: default

// Module 4549 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 4996 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13850 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4550).default;
    const parseToASTResult = tmp(4550).default.parseToAST(content, true, { allowLinks: true });
    tmp(7990).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7990);
  }
  return items;
};
