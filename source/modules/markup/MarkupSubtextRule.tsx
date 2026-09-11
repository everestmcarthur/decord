// Module ID: 5078
// Function ID: 5079
// Name: MarkupSubtextRule
// Dependencies: [4303, 2]

// Module 5078 (MarkupSubtextRule)
import _mod4303 from "module_4303" /* 4303 */;
import size from "module_2" /* 2 */;

const _modDef4303 = _mod4303;

const re2 = /\n$/;
const re3 = /^ *-# +((?!-#)[^\n]+)(?:\n|$)/;
const result = size.fileFinishedImporting("modules/markup/MarkupSubtextRule.tsx");

export default {
  order: _modDef4303.defaultRules.heading.order,
  requiredFirstCharacters: ["-"],
  match(arg0, allowSubtext, str) {
    let tmp = null;
    if (false !== allowSubtext.allowSubtext) {
      if (null != str) {
        if ("" !== str) {
          let tmp4 = null;
        }
        tmp = tmp4;
      }
      tmp4 = _mod4303.anyScopeRegex(re3)(arg0, allowSubtext, str);
    }
    return tmp;
  },
  parse(arg0, fn, arg2) {
    const obj = { content: null };
    const obj3 = {};
    const trimmed = arg0[1].trim();
    const merged = Object.assign(arg2);
    obj3.allowSubtext = false;
    obj.content = _mod4303.parseInline(fn, trimmed, obj3);
    return obj;
  }
};
