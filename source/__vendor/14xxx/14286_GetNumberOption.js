// Module ID: 14286
// Function ID: 14287
// Name: GetNumberOption
// Dependencies: [14287]
// Exports: GetNumberOption

// Module 14286 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14287 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
