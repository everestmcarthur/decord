// Module ID: 1114
// Function ID: 1115
// Name: util
// Dependencies: [19, 1074, 21, 17, 1115, 1117, 1118, 1155, 1178, 14212, 2, 14213, 14216]
// Exports: getSystemLocale, useSyncMessages

// Module 1114 (util)
import _mod17 from "module_17" /* 17 */;
import intl_util from "intl/util" /* 1118 */;
import native from "native" /* 1178 */;
import migration from "migration" /* 14212 */;
import _modDef14216 from "module_14216" /* 14216 */;
import noop from "module_19" /* 19 */;

const NativeDeviceLocaleModule = tmp(1117);
require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
get_ActivityIndicator = fn(17);
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let LocalizationManager = fn(1117).default;
} else {
  LocalizationManager = get_ActivityIndicator.NativeModules.LocalizationManager;
}
let str = "en-US";
if (null != LocalizationManager) {
  str = LocalizationManager.getConstants().Language;
}
function getSystemLocale(arg0) {
  const tmp3 = _mod17;
  if (obj.isAndroid()) {
    let LocalizationManager = NativeDeviceLocaleModule.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let Language = arg0;
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  return Language;
}
const util = fn(1118);
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
export const getAvailableLocales = fn(1118).getAvailableLocales;
export const getLanguages = fn(1118).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
};
export const t = fn(14213)._defaultMessages;
export const international = _modDef14216;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
