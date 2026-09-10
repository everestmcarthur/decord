// Module ID: 7063
// Function ID: 7064
// Name: useScaledRowHeight
// Dependencies: [4996, 4275, 576, 2]
// Exports: default, useScaledRowHeightData

// Module 7063 (useScaledRowHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4275 */;
import useFontScale from "useFontScale" /* 4996 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  return { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
};
