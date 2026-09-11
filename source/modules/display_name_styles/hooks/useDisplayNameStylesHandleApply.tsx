// Module ID: 15399
// Function ID: 15400
// Name: useDisplayNameStylesHandleApply
// Dependencies: [19, 1074, 1390, 8252, 8249, 1242, 1391, 2]
// Exports: useDisplayNameStylesHandleApply

// Module 15399 (useDisplayNameStylesHandleApply)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1390 */;
import DisplayNameFont from "DisplayNameFont" /* 1391 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  let items = [hasChanges, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, guildId, isTryItOut];
  return selectedColors.useCallback(() => {
    if (hasChanges) {
      let tmp4 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID;
      if (tmp4) {
        tmp4 = arr.length > 0;
      }
      if (tmp4) {
        tmp4 = arr[0] === defaultColor;
      }
      let items = arr;
      if (tmp4) {
        items = [];
      }
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        const result = tmp2(8252).setTryItOutDisplayNameStyles(obj);
        const tmp2Result = tmp2(8252);
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        tmp2(8249).setPendingChanges(obj2);
        const tmp2Result2 = tmp2(8249);
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[selectedFontId], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED, obj3);
      if (onClose != null) {
        onClose();
      }
    }
  }, items);
};
