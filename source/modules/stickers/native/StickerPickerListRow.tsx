// Module ID: 10471
// Function ID: 10472
// Name: StickerPickerListRow
// Dependencies: [32, 19, 17, 1371, 1938, 10343, 1219, 21, 4605, 1115, 1935, 4573, 4574, 4944, 7389, 5318, 10246, 10472, 1232, 5173, 2]
// Exports: default

// Module 10471 (StickerPickerListRow)
import UserSettings from "UserSettings" /* 1935 */;
import HapticUtils from "HapticUtils" /* 4573 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4574 */;
import StickersUtils from "StickersUtils" /* 4944 */;
import StickerSendability from "StickerSendability" /* 7389 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const StickerPickerConstants = fn(10343);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_10 = createStyles.createStyles({ row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, isSectionNitroLocked } = stickers);
  if (isSectionNitroLocked === undefined) {
    isSectionNitroLocked = false;
  }
  ({ onPressSticker: dependencyMap, onLongPressStickerDetail: _slicedToArray, focusedSticker: View, setFocusedSticker: UserStore, channel: StickerAnimationSettings, nativeRow } = stickers);
  if (nativeRow === undefined) {
    nativeRow = stickers(1115).isAndroid();
    let obj = stickers(1115);
  }
  let items;
  c11 = undefined;
  function handleOnLongPressSticker(PressableOpacity) {
    if (null != _slicedToArray) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(PressableOpacity);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (currentUser != null) {
          currentUser(PressableOpacity);
        }
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (user != null) {
      id = user.id;
    }
    items = [StickersUtils.shouldAnimateSticker(closure_8, id.id === id), , ];
    let isSendableStickerResult = isSectionNitroLocked;
    if (!isSectionNitroLocked) {
      isSendableStickerResult = null == StickerAnimationSettings;
    }
    if (!isSendableStickerResult) {
      isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), StickerAnimationSettings);
      const tmpResult = StickerSendability;
    }
    items[1] = isSendableStickerResult;
    items[2] = null == dependencyMap;
    return items;
  }
  const tmp6 = items();
  itemSize = tmp6;
  let AnimateStickers = stickers(1935).AnimateStickers;
  rowContentPaddingVertical = AnimateStickers.useSetting();
  items = [];
  if (nativeRow) {
    let num5 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num5];
        if (undefined !== tmp12) {
          [first, obj2.stickerOpaque, obj2.stickerDisabled] = rowTraits(tmp12);
          let obj2 = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null };
          ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp12);
          let obj5 = stickers(10246);
          obj2.stickerUrl = obj5.getStickerAssetUrl(tmp12, itemSize, first);
          obj2.stickerAnimated = first;
          let arr2 = items.push(obj2);
        } else {
          let obj3 = { stickerId: "", stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          obj3.stickerType = stickers(5318).StickerFormat.PNG;
          let arr3 = items.push(obj3);
        }
        num5 = num5 + 1;
      } while (num5 < rowSize);
    }
    try {
      const obj6 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      const obj7 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize, items };
      obj6.rowData = obj7;
      obj6.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (dependencyMap != null) {
            dependencyMap(found);
          }
        }
      };
      obj6.onLongPressSticker = function onLongPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          handleOnLongPressSticker(found);
        }
      };
      return handleOnLongPressSticker(isSectionNitroLocked(10472), obj6);
    } catch (tmp28) {
      const obj9 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      const obj10 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj10.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj9.data = obj10;
      isSectionNitroLocked(tmp[18]).addBreadcrumb(obj9);
      throw tmp28;
    }
  } else {
    c11 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c11]) {
            const obj = { style: size.stickerImage };
            items.push(handleOnLongPressSticker(closure_1_4, obj, tmp));
            return 1;
          } else {
            let id;
            if (user != null) {
              id = user.id;
            }
            items = [stickers(4944).shouldAnimateSticker(closure_8, tmp2.id === id), , ];
            let isSendableStickerResult = isSectionNitroLocked;
            if (!isSectionNitroLocked) {
              isSendableStickerResult = null == closure_6;
            }
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp26(7389).isSendableSticker(tmp2, currentUser.getCurrentUser(), closure_6);
              const tmp26Result = tmp26(7389);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == dependencyMap;
            const obj5 = stickers(4944);
            [tmp11, tmp12, tmp13] = items;
            const obj2 = {
              accessibilityRole: "button",
              accessibilityLabel: tmp2.name,
              style: size.stickerImage,
              disabled: tmp13,
              onPress() {
                  const result = closure_0(4573).triggerHapticFeedback(isSectionNitroLocked(4574).IMPACT_LIGHT);
                  if (dependencyMap != null) {
                    dependencyMap(closure_0);
                  }
                },
              onLongPress() {
                  return handleOnLongPressSticker(closure_0);
                },
              children: null
            };
            const obj3 = { sticker: tmp2, size, animated: tmp11, opaque: tmp12 };
            obj2.children = handleOnLongPressSticker(isSectionNitroLocked(10246), obj3, tmp);
            items.push(handleOnLongPressSticker(stickers(5173).PressableOpacity, obj2, tmp2.id));
          }
        })();
        sum = num2 + 1;
        c11 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj17 = { style: tmp6.row, children: items };
    return handleOnLongPressSticker(View, obj17);
  }
};
