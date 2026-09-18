// Module ID: 10406
// Function ID: 10407
// Name: StickerPickerListRow
// Dependencies: [32, 19, 17, 1371, 1938, 10278, 1219, 21, 4560, 1115, 1935, 4528, 4529, 4899, 7337, 5268, 10181, 10407, 1232, 5123, 2]
// Exports: default

// Module 10406 (StickerPickerListRow)
import UserSettings from "UserSettings" /* 1935 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import StickerSendability from "StickerSendability" /* 7337 */;
import StickerDefault from "Sticker" /* 10181 */;
import StickerPickerListRowNativeComponentDefault from "StickerPickerListRowNativeComponent" /* 10407 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const StickerPickerConstants = fn(10278);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ row: { height: StickerPickerConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }, stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default function StickerPickerListRow(stickers) {
  let sum;
  stickers = stickers.stickers;
  ({ rowSize, onPressSticker: importDefault, onLongPressStickerDetail: dependencyMap, focusedSticker: _slicedToArray, setFocusedSticker: View, channel: UserStore, nativeRow } = stickers);
  if (nativeRow === undefined) {
    nativeRow = stickers(1115).isAndroid();
    let obj = stickers(1115);
  }
  c10 = undefined;
  function handleOnLongPressSticker(found) {
    if (null != dependencyMap) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      tmp(found);
    } else {
      const AnimateStickers = UserSettings.AnimateStickers;
      if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
        const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
        if (View != null) {
          View(found);
        }
      }
    }
  }
  function rowTraits(id) {
    id = undefined;
    if (_slicedToArray != null) {
      id = _slicedToArray.id;
    }
    items = [StickersUtils.shouldAnimateSticker(closure_7, id.id === id), , ];
    let isSendableStickerResult = null == currentUser;
    if (!isSendableStickerResult) {
      isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), tmp5);
      const tmpResult = StickerSendability;
    }
    items[1] = isSendableStickerResult;
    items[2] = null == importDefault;
    return items;
  }
  const tmp6 = c10();
  closure_6 = tmp6;
  let AnimateStickers = stickers(1935).AnimateStickers;
  itemSize = AnimateStickers.useSetting();
  let items = [];
  if (nativeRow) {
    let num5 = 0;
    if (0 < rowSize) {
      do {
        let tmp12 = stickers[num5];
        if (undefined !== tmp12) {
          [first, obj2.stickerOpaque, obj2.stickerDisabled] = rowTraits(tmp12);
          let obj2 = { stickerId: null, stickerName: null, stickerType: null, stickerUrl: null, stickerAnimated: null, stickerDisabled: null, stickerOpaque: null };
          ({ id: obj4.stickerId, name: obj4.stickerName, format_type: obj4.stickerType } = tmp12);
          let obj5 = stickers(10181);
          obj2.stickerUrl = obj5.getStickerAssetUrl(tmp12, itemSize, first);
          obj2.stickerAnimated = first;
          let arr2 = items.push(obj2);
        } else {
          let obj3 = { stickerId: "", stickerName: "", stickerType: null, stickerUrl: "", stickerAnimated: false, stickerDisabled: true, stickerOpaque: false };
          obj3.stickerType = stickers(5268).StickerFormat.PNG;
          let arr3 = items.push(obj3);
        }
        num5 = num5 + 1;
      } while (num5 < rowSize);
    }
    try {
      const obj6 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
      const obj7 = { rowContentWidth: tmp3, rowContentPaddingVertical: handleOnLongPressSticker, itemSize, items };
      obj6.rowData = obj7;
      obj6.onPressSticker = function onPressSticker(arg0) {
        const nativeEvent = arg0;
        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
        if (null != found) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (closure_1_1 != null) {
            closure_1_1(found);
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
      return items(StickerPickerListRowNativeComponentDefault, obj6);
    } catch (tmp28) {
      const obj9 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
      const obj10 = { itemLength: arr.length, items: null };
      let found = arr.filter((stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl);
      obj10.items = found.map((stickerId) => ({ stickerId: stickerId.stickerId, stickerName: stickerId.stickerName, stickerUrl: stickerId.stickerUrl }));
      obj9.data = obj10;
      require("SentryUtils").addBreadcrumb(obj9);
      throw tmp28;
    }
  } else {
    c10 = 0;
    let num2 = 0;
    if (0 < rowSize) {
      do {
        let tmp8 = (function _loop() {
          stickers = tmp2;
          if (undefined === stickers[c10]) {
            const obj = { style: closure_6.stickerImage };
            items.push(items(View, obj, tmp));
            return 1;
          } else {
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            items = [stickers(dependencyMap[13]).shouldAnimateSticker(size, tmp2.id === id), , ];
            let isSendableStickerResult = null == closure_5;
            if (!isSendableStickerResult) {
              isSendableStickerResult = tmp25(tmp26[14]).isSendableSticker(tmp2, currentUser.getCurrentUser(), tmp4);
              const tmp25Result = tmp25(tmp26[14]);
            }
            items[1] = isSendableStickerResult;
            items[2] = null == closure_1;
            const obj5 = stickers(dependencyMap[13]);
            [tmp10, tmp11, tmp12] = items;
            const obj2 = {
              accessibilityRole: "button",
              accessibilityLabel: tmp2.name,
              style: closure_6.stickerImage,
              disabled: tmp12,
              onPress() {
                  const result = closure_0(4528).triggerHapticFeedback(closure_1_1(4529).IMPACT_LIGHT);
                  if (importDefault != null) {
                    importDefault(closure_0);
                  }
                },
              onLongPress() {
                  return handleOnLongPressSticker(closure_0);
                },
              children: null
            };
            const obj3 = { sticker: tmp2, size, animated: tmp10, opaque: tmp11 };
            obj2.children = items(StickerDefault, obj3, tmp);
            items.push(items(stickers(dependencyMap[19]).PressableOpacity, obj2, tmp2.id));
          }
        })();
        sum = num2 + 1;
        c10 = sum;
        num2 = sum;
      } while (sum < rowSize);
    }
    const obj17 = { style: tmp6.row, children: items };
    return items(View, obj17);
  }
};
