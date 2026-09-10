// Module ID: 15392
// Function ID: 15393
// Name: CustomTypingIndicatorEmojiSlots
// Dependencies: [32, 19, 1374, 21, 15393, 15395, 15397, 15399, 15401, 15403, 15405, 15407, 15409, 15411, 15413, 15415, 15417, 15419, 15421, 15423, 15425, 15427, 15429, 15431, 15433, 15435, 4574, 7144, 1396, 4310, 4988, 4992, 11153, 1114, 3562, 1392, 5621, 12, 4987, 2]
// Exports: default

// Module 15392 (CustomTypingIndicatorEmojiSlots)
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1392 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import Stack_Stack from "Stack/Stack" /* 4987 */;
import spring from "spring" /* 4988 */;
import springPresets from "springPresets" /* 4992 */;
import EmojiDefault from "Emoji" /* 7144 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11153 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function EmojiGlyph(emoji) {
  emoji = emoji.emoji;
  const obj = { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null };
  let emojiURL;
  if (null != emoji.id) {
    const obj2 = { id: null, animated: null, size: null };
    ({ id: obj3.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    obj2.animated = animated;
    obj2.size = v28;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
    const tmp2Result = AvatarUtilsDefault;
  }
  obj.src = emojiURL;
  const size = { width: v28, height: v28 };
  obj.fastImageStyle = size;
  obj.textEmojiStyle = { fontSize: v28, lineHeight: 32 };
  return jsx(EmojiDefault, { name: emoji.name, src: null, fastImageStyle: null, textEmojiStyle: null });
}
function PlaceholderEmojiGlyph(pressed) {
  pressed = pressed.pressed;
  const fn = function t() {
    value = pressed.get();
    const obj = { opacity: null, transform: null };
    const obj2 = spring;
    obj.opacity = obj2.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]), springPresets.ON_PRESS_SPRING);
    const obj4 = { scale: null };
    const interpolateResult = ReanimatedRexport.interpolate(value, [0, 1], [0.4, 1]);
    const obj5 = spring;
    obj4.scale = obj5.withSpring(ReanimatedRexport.interpolate(value, [0, 1], [1, 1.14]), springPresets.ON_PRESS_SPRING);
    items = [obj4];
    obj.transform = items;
    return obj;
  };
  let obj = pressed(4310);
  fn.__closure = { pressed, withSpring: pressed(4988).withSpring, interpolate: pressed(4310).interpolate, PLACEHOLDER_EMOJI_RESTING_OPACITY: 0.4, ON_PRESS_SPRING: pressed(4992).ON_PRESS_SPRING, PLACEHOLDER_EMOJI_ACTIVE_SCALE: 1.14 };
  fn.__workletHash = 16574219123934;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: animatedStyle, children: null };
  let obj4 = { size: "custom", style: null };
  const size = { width: v28, height: v28 };
  obj4.style = size;
  obj3.children = jsx(pressed.Icon, { size: "custom", style: null });
  return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
}
function CustomTypingIndicatorEmojiSlot(index) {
  index = index.index;
  ({ emoji, onChange } = index);
  let sharedValue;
  const tmp = closure_9();
  sharedValue = index(sharedValue[29]).useSharedValue(0);
  items = [index, onChange];
  const items1 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
      onPressEmoji(id) {
        id = id.id;
        const obj = { id, name: null, animated: null };
        if (null == id.id) {
          if (null != id.optionallyDiverseSequence) {
            if ("" !== id.optionallyDiverseSequence) {
              let str2 = id.optionallyDiverseSequence;
            }
            obj.name = str2;
            obj.animated = id.animated;
            return onChange(index, obj);
          }
        }
        str2 = id.name;
        if (str2 == null) {
          str2 = "";
        }
      },
      pickerIntention: EmojiIntention.TYPING_INDICATOR,
      bypassPremiumEmojiEntitlement: true
    });
  }, items);
  const items2 = [sharedValue];
  const callback1 = noop.useCallback(() => sharedValue.set(1), items1);
  const callback2 = noop.useCallback(() => sharedValue.set(0), items2);
  if (null != emoji) {
    const intl2 = tmp2(tmp3[33]).intl;
    const obj2 = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, emojiName: emoji.name };
    let formatToPlainStringResult = intl2.formatToPlainString(onChange(tmp3[34])["lEsZ+N"], obj2);
  } else {
    const intl = tmp2(tmp3[33]).intl;
    const obj3 = { slot: index + 1, total: tmp2(tmp3[35]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT };
    formatToPlainStringResult = intl.formatToPlainString(onChange(tmp3[34]).O0Pe85, obj3);
  }
  const obj4 = { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null };
  if (null != emoji) {
    const obj5 = { emoji };
    let tmp11Result = tmp11(EmojiGlyph, obj5);
  } else {
    const obj6 = { Icon: index.placeholderIcon, pressed: sharedValue };
    tmp11Result = tmp11(PlaceholderEmojiGlyph, obj6);
  }
  obj4.children = tmp11Result;
  return jsx(index(sharedValue[36]).Card, { style: tmp.slot, onPress: callback, onPressIn: callback1, onPressOut: callback2, accessibilityLabel: formatToPlainStringResult, radius: 16, children: null });
}
const EmojiIntention = fn(1374).EmojiIntention;
const jsx = fn(21).jsx;
let c7 = 28;
let items = [fn(15393).EmojiAngryFaceWithHornsIcon, fn(15395).EmojiColdFaceIcon, fn(15397).EmojiCowboyHatFaceIcon, fn(15399).EmojiCryingFaceIcon, fn(15401).EmojiDisguisedFaceIcon, fn(15403).EmojiFaceVomitingIcon, fn(15405).EmojiFaceWithMonocleIcon, fn(15407).EmojiFaceWithSpiralEyesIcon, fn(15409).EmojiMeltingFaceIcon, fn(15411).EmojiMoneyMouthFaceIcon, fn(15413).EmojiNerdFaceIcon, fn(15415).EmojiPartyingFaceIcon, fn(15417).EmojiSalutingFaceIcon, fn(15419).EmojiSkullIcon, fn(15421).EmojiSmilingFaceWithHornsIcon, fn(15423).EmojiSmilingFaceWithSunglassesIcon, fn(15425).EmojiSquintingFaceWithTongueIcon, fn(15427).EmojiUpsideDownFaceIcon, fn(15429).EmojiWoozyFaceIcon, fn(15431).EmojiZanyFaceIcon, fn(15433).EmojiRollingOnTheFloorLaughingIcon, fn(15435).EmojiSmilingFaceWithHeartsIcon];
const createStyles = fn(4574);
let closure_9 = createStyles.createStyles({ slot: { flex: 1, height: 64, alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function CustomTypingIndicatorEmojiSlotsTsx1(){const{pressed,withSpring,interpolate,PLACEHOLDER_EMOJI_RESTING_OPACITY,ON_PRESS_SPRING,PLACEHOLDER_EMOJI_ACTIVE_SCALE}=this.__closure;const value=pressed.get();return{opacity:withSpring(interpolate(value,[0,1],[PLACEHOLDER_EMOJI_RESTING_OPACITY,1]),ON_PRESS_SPRING),transform:[{scale:withSpring(interpolate(value,[0,1],[1,PLACEHOLDER_EMOJI_ACTIVE_SCALE]),ON_PRESS_SPRING)}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEmojiSlots.tsx");

export default function CustomTypingIndicatorEmojiSlots(arg0) {
  ({ emojis: require, onChange: importDefault } = arg0);
  dependencyMap = _slicedToArray(noop.useState(() => dependencyMap(12).sampleSize(items, dependencyMap(1392).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT)), 1)[0];
  let obj = {
    direction: "horizontal",
    spacing: 8,
    children: Array.from({ length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
      const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
      let tmp3 = dependencyMap[index];
      if (tmp3 == null) {
        tmp3 = null;
      }
      obj.emoji = tmp3;
      obj.placeholderIcon = dependencyMap2[index];
      obj.onChange = onChange;
      return <CustomTypingIndicatorEmojiSlot key={arg1} index={arg1} emoji={null} placeholderIcon={null} onChange={null} />;
    })
  };
  return jsx(Stack_Stack.Stack, {
    direction: "horizontal",
    spacing: 8,
    children: Array.from({ length: CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT }, (arg0, index) => {
      const obj = { index, emoji: null, placeholderIcon: null, onChange: null };
      let tmp3 = dependencyMap[index];
      if (tmp3 == null) {
        tmp3 = null;
      }
      obj.emoji = tmp3;
      obj.placeholderIcon = dependencyMap2[index];
      obj.onChange = onChange;
      return <CustomTypingIndicatorEmojiSlot key={arg1} index={arg1} emoji={null} placeholderIcon={null} onChange={null} />;
    })
  });
};
