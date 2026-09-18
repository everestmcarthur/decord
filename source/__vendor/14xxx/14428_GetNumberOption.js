// Module ID: 14428
// Function ID: 14429
// Name: GetNumberOption
// Dependencies: [14429]
// Exports: GetNumberOption

// Module 14428 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14429 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
