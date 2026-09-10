// Module ID: 14249
// Function ID: 14250
// Name: ComputeExponentForMagnitude
// Dependencies: [1162, 14233, 14234]
// Exports: ComputeExponentForMagnitude

// Module 14249 (ComputeExponentForMagnitude)
import digitsToString2 from "digitsToString" /* 14233 */;
import _mod14234 from "module_14234" /* 14234 */;
import e from "e" /* 1162 */;

const digitsToString = e.__importDefault(digitsToString2);
const result = digitsToString.default.set({ toExpPos: 100 });

export const ComputeExponentForMagnitude = function ComputeExponentForMagnitude(style, floorResult) {
  ({ notation, dataLocaleData, numberingSystem } = style);
  if ("standard" === notation) {
    return 0;
  } else if ("scientific" === notation) {
    return floorResult.toNumber();
  } else if ("engineering" === notation) {
    const divResult = floorResult.div(3);
    floorResult = floorResult.div(3).floor();
    return floorResult.div(3).floor().times(3).toNumber();
  } else {
    _mod14234.invariant("compact" === notation, "Invalid notation");
    if ("currency" === style.style) {
      if ("name" !== tmp11) {
        let short = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]].short;
        const tmp2 = dataLocaleData.numbers.currency[numberingSystem] || dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
      }
      if (short) {
        const str1 = digitsToString.default.pow(10, floorResult).toString();
        const _Object = Object;
        const keys = Object.keys(short);
        if (str1 < keys[0]) {
          return 0;
        } else if (str1 > keys[keys.length - 1]) {
          return keys[keys.length - 1].length - 1;
        } else {
          const index = keys.indexOf(str1);
          if (-1 === index) {
            return 0;
          } else {
            let num4 = 0;
            if ("0" !== short[keys[index]].other) {
              num4 = arr2.length - short[arr2].other.match(/0+/)[0].length;
            }
            return num4;
          }
        }
        const _default = digitsToString.default;
        const str3 = digitsToString.default.pow(10, floorResult);
      } else {
        return 0;
      }
    }
    const tmp = dataLocaleData.numbers.decimal[numberingSystem] || dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
    short = "long" === style.compactDisplay ? tmp.long : tmp.short;
  }
};
