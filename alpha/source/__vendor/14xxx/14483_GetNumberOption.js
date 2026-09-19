// Module ID: 14483
// Function ID: 14484
// Name: GetNumberOption
// Dependencies: [14484]
// Exports: GetNumberOption

// Module 14483 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14484 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
