// Module ID: 1114
// Function ID: 1115
// Name: util
// Dependencies: [19, 1074, 21, 1115, 1116, 1155, 1178, 14272, 2, 14273, 14276]
// Exports: getSystemLocale, useSyncMessages

// Module 1114 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1115 */;
import intl_util from "intl/util" /* 1116 */;
import native from "native" /* 1178 */;
import migration from "migration" /* 14272 */;
import _modDef14276 from "module_14276" /* 14276 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1115).default;
let str = "en-US";
if (null != _default) {
  str = _default.getConstants().Language;
}
function getSystemLocale(arg0) {
  let Language = arg0;
  const _default = NativeDeviceLocaleModule.default;
  if (null != _default) {
    Language = _default.getConstants().Language;
  }
  return Language;
}
const util = fn(1116);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1155 = fn(1155);
const reactFormatter = module_1155.makeReactFormatter({
  $i(children, arg1) {
    obj = { style: obj.italic, children };
    return jsx(native.LegacyText, { style: obj.italic, children }, arg1);
  },
  $b(children, arg1) {
    obj = { style: obj.strong, children };
    return jsx(native.LegacyText, { style: obj.strong, children }, arg1);
  },
  $del(children, arg1) {
    obj = { style: obj.del, children };
    return jsx(native.LegacyText, { style: obj.del, children }, arg1);
  },
  $p(children, arg1) {
    return jsx(native.LegacyText, { children }, arg1);
  },
  $code(children, arg1) {
    obj = { style: obj.code, children };
    return jsx(native.LegacyText, { style: obj.code, children }, arg1);
  },
  $link(children, arg1, arg2) {
    [tmp] = arg2;
    return jsx(migration.IntlLink, { target: tmp, children }, arg1);
  }
});
const intlManager = new fn(1155).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({ format: reactFormatter, formatToPlainString: fn(1155).stringFormatter, formatToMarkdownString: fn(1155).markdownFormatter, formatToParts: fn(1155).astFormatter });
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1116).getAvailableLocales;
export const getLanguages = fn(1116).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
};
export const t = fn(14273)._defaultMessages;
export const international = _modDef14276;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
