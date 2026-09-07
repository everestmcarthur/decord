// Module ID: 16129
// Function ID: 16130
// Name: useShallowArrayMemo
// Dependencies: [16130, 558, 2]
// Exports: default

// Module 16129 (useShallowArrayMemo)
import set from "set" /* 2 */;
import useMemoWithEqualityFunctionDefault from "useMemoWithEqualityFunction" /* 16130 */;

const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useShallowArrayMemo.tsx");

export default function useShallowArrayMemo(arg0) {
  const _require = arg0;
  return useMemoWithEqualityFunctionDefault(() => closure_0, arg0, _require(558).areArraysShallowEqual);
};
