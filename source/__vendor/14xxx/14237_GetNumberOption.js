// Module ID: 14237
// Function ID: 14238
// Name: GetNumberOption
// Dependencies: [14238]
// Exports: GetNumberOption

// Module 14237 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14238 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
