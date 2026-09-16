// Module ID: 14325
// Function ID: 14326
// Name: GetNumberOption
// Dependencies: [14326]
// Exports: GetNumberOption

// Module 14325 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14326 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
