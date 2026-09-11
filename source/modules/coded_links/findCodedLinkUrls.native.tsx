// Module ID: 4595
// Function ID: 4596
// Name: findCodedLinkUrls
// Dependencies: [4596, 8063, 5047, 13900, 13901, 2]
// Exports: default

// Module 4595 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5047 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4596).default;
    const parseToASTResult = tmp(4596).default.parseToAST(content, true, { allowLinks: true });
    tmp(8063).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8063);
  }
  return items;
};
