// Module ID: 14264
// Function ID: 14265
// Name: GetNumberOption
// Dependencies: [14265]
// Exports: GetNumberOption

// Module 14264 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14265 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
