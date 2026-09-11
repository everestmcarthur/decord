// Module ID: 14275
// Function ID: 14276
// Name: FormatNumericToString
// Dependencies: [14261, 14259, 14276, 14277, 14278]
// Exports: FormatNumericToString

// Module 14275 (FormatNumericToString)
import _mod14259 from "module_14259" /* 14259 */;
import TEN from "TEN" /* 14261 */;

require = arg1;
const dependencyMap = arg6;

export const FormatNumericToString = function FormatNumericToString(roundingType, timesResult) {
  if (timesResult.isZero()) {
    if (timesResult.isNegative()) {
      let ZERO = TEN.ZERO;
      let str2 = "negative";
      let tmp5Result = dependencyMap;
      let tmp5 = require;
    }
    roundingType = roundingType.roundingType;
    const result = tmp5(14276).GetUnsignedRoundingMode(roundingType.roundingMode, tmp9);
    if ("significantDigits" === roundingType) {
      let ToRawPrecisionResult = tmp5(14277).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
    } else if ("fractionDigits" === roundingType) {
      ToRawPrecisionResult = tmp5(14278).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
    } else {
      const ToRawPrecisionResult1 = tmp5(14277).ToRawPrecision(ZERO, roundingType.minimumSignificantDigits, roundingType.maximumSignificantDigits, result);
      let ToRawFixedResult = tmp5(14278).ToRawFixed(ZERO, roundingType.minimumFractionDigits, roundingType.maximumFractionDigits, roundingType.roundingIncrement, result);
      if ("morePrecision" === roundingType.roundingType) {
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawFixedResult = ToRawPrecisionResult1;
        }
        ToRawPrecisionResult = ToRawFixedResult;
      } else {
        tmp5(14259).invariant("lessPrecision" === roundingType.roundingType, "Invalid roundingType");
        ToRawPrecisionResult = ToRawPrecisionResult1;
        if (ToRawPrecisionResult1.roundingMagnitude <= ToRawFixedResult.roundingMagnitude) {
          ToRawPrecisionResult = ToRawFixedResult;
        }
      }
    }
    ({ roundedNumber, formattedString } = ToRawPrecisionResult);
    let substr = formattedString;
    if ("stripIfInteger" === roundingType.trailingZeroDisplay) {
      substr = formattedString;
      if (roundedNumber.isInteger()) {
        const index = formattedString.indexOf(".");
        substr = formattedString;
        if (index > -1) {
          substr = formattedString.slice(0, index);
        }
      }
    }
    const integerDigitsCount = ToRawPrecisionResult.integerDigitsCount;
    const minimumIntegerDigits = roundingType.minimumIntegerDigits;
    let sum = substr;
    if (integerDigitsCount < minimumIntegerDigits) {
      sum = tmp5(14259).repeat("0", minimumIntegerDigits - integerDigitsCount) + substr;
    }
    if ("negative" !== str2) {
      const obj = { roundedNumber, formattedString: sum };
      return obj;
    } else if (roundedNumber.isZero()) {
      tmp5Result = tmp5(14261);
      let NEGATIVE_ZERO = tmp5Result.NEGATIVE_ZERO;
    } else {
      NEGATIVE_ZERO = roundedNumber.negated();
    }
  }
  _mod14259.invariant(timesResult.isFinite(), "NumberFormatDigitInternalSlots value is not finite");
  let str = "positive";
  if (timesResult.lessThan(0)) {
    str = "negative";
  }
  ZERO = timesResult;
  str2 = str;
  tmp5Result = tmp2;
  tmp5 = tmp;
  if ("negative" === str) {
    ZERO = timesResult.negated();
    str2 = str;
    tmp5Result = tmp2;
    tmp5 = tmp;
  }
};
