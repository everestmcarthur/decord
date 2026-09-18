// Module ID: 14212
// Function ID: 14213
// Name: GetNumberOption
// Dependencies: [14213]
// Exports: GetNumberOption

// Module 14212 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14213 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
