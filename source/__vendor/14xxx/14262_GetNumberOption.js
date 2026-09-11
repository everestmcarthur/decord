// Module ID: 14262
// Function ID: 14263
// Name: GetNumberOption
// Dependencies: [14263]
// Exports: GetNumberOption

// Module 14262 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14263 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
