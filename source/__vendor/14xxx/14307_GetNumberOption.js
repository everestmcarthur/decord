// Module ID: 14307
// Function ID: 14308
// Name: GetNumberOption
// Dependencies: [14308]
// Exports: GetNumberOption

// Module 14307 (GetNumberOption)
import DefaultNumberOption from "DefaultNumberOption" /* 14308 */;

require = arg1;
const dependencyMap = arg6;

export const GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
