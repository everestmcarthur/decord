// Module ID: 18044
// Function ID: 18045
// Name: utils/NumberUtils
// Dependencies: [2028, 2]
// Exports: truncateAndLocalizeNumber

// Module 18044 (utils/NumberUtils)
import module_2028 from "module_2028" /* 2028 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/NumberUtils.tsx");

export const truncateAndLocalizeNumber = (arg0, arg1) => {
  if (arg0 < 1000000) {
    const _Intl = Intl;
    let num2 = 1;
    if (tmp % 1 === 0) {
      num2 = 0;
    }
    const obj2 = { maximumFractionDigits: num2 };
    const numberFormat = new Intl.NumberFormat(arg1, obj2);
    return numberFormat.format(arg0);
  } else {
    const _Math = Math;
    const _Intl2 = Intl;
    let num = 1;
    if (Math.round(arg0 / 1000000 * 10) / 10 % 1 === 0) {
      num = 0;
    }
    const obj = { maximumFractionDigits: num };
    const numberFormat1 = new Intl.NumberFormat(arg1, obj);
    const NUMBER_ABBREVIATIONS_MILLION = module_2028.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj3 = { num: numberFormat1.format(arg0 / 1000000) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj3);
  }
};
