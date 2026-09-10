// Module ID: 4347
// Function ID: 4348
// Dependencies: [32, 4330, 4343]
// Exports: useRiveEnum

// Module 4347
import c from "c" /* 4330 */;
import _mod4343 from "module_4343" /* 4343 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
function getEnumProperty(enumProperty, arg1) {
  return enumProperty.enumProperty(arg1);
}

export const useRiveEnum = function useRiveEnum(FillColor, instance) {
  const cResult = c.c(4);
  [tmp3, tmp4, tmp5] = _mod4343.useRiveProperty(instance, FillColor, getEnumProperty);
  if (cResult[0] === tmp5) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const obj3 = { value: tmp3, setValue: tmp4, error: tmp5 };
  cResult[0] = tmp5;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = obj3;
  tmp6 = obj3;
};
