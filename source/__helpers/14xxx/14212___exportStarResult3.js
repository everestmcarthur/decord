// Module ID: 14212
// Function ID: 14213
// Name: __exportStarResult3
// Dependencies: [14213]

// Module 14212 (__exportStarResult3)
import DefaultNumberOption from "DefaultNumberOption" /* 14213 */;

require = arg1;
const dependencyMap = arg6;
arg5.GetNumberOption = function GetNumberOption(result1, minimumIntegerDigits, minimumSignificantDigits, arg3, arg4) {
  return DefaultNumberOption.DefaultNumberOption(result1[minimumIntegerDigits], minimumSignificantDigits, arg3, arg4);
};
