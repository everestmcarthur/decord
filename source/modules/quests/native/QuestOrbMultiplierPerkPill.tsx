// Module ID: 15195
// Function ID: 15196
// Name: QuestOrbMultiplierPerkPill
// Dependencies: [19, 17, 21, 4574, 576, 4509, 4282, 4275, 4423, 11515, 11325, 1114, 8695, 4570, 5137, 15196, 5001, 2]
// Exports: QuestOrbMultiplierPerkPill

// Module 15195 (QuestOrbMultiplierPerkPill)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4275 */;
import themes from "themes" /* 4282 */;
import ColorUtils from "ColorUtils" /* 4423 */;
import useTheme from "useTheme" /* 4509 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 11325 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11515 */;
import openQuestOrbMultiplierPerkInfoActionSheetDefault from "openQuestOrbMultiplierPerkInfoActionSheet" /* 15196 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
const createStyles = fn(4574);
let obj2 = { fullGradientContainer: { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" }, fullGradient: null, fullGradientContent: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderRadius = nativeDefault.radii.round;
obj2.fullGradient = obj4;
let obj3 = { borderRadius: nativeDefault.radii.round, overflow: "hidden", minHeight: 19, backgroundColor: "transparent" };
obj2.fullGradientContent = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: 4, minHeight: 19 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkPill.tsx");

export const QuestOrbMultiplierPerkPill = function QuestOrbMultiplierPerkPill(questId) {
  ({ onPress: require, orbMultiplierEligibility } = questId);
  const tmp = closure_10();
  const theme = useTheme.useTheme();
  const isThemeDarkResult = themes.isThemeDark(theme);
  dependencyMap = isThemeDarkResult;
  const token = useToken.useToken(orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_PINK_START, "dark");
  const tmp6 = orbMultiplierEligibility;
  const token1 = useToken.useToken(orbMultiplierEligibility(576).colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, "dark");
  const token2 = useToken.useToken(orbMultiplierEligibility(576).colors.BACKGROUND_BASE_LOWEST, "dark");
  const items = [ColorUtils.hexOpacityToRgba(token, 1), ];
  items[1] = ColorUtils.hexOpacityToRgba(token1, 0.5);
  const token3 = useToken.useToken(orbMultiplierEligibility(576).colors.BACKGROUND_BRAND);
  const questOrbRewardMultiplier = hooks_QuestHooks.useQuestOrbRewardMultiplier(questId.questId);
  const result = QuestOrbMultiplierUtils.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  const tmp13 = orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.CREPE;
  closure_6 = tmp13;
  const items1 = [tmp13, token2, token3, isThemeDarkResult];
  if (null == questOrbRewardMultiplier) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = tmp2(1114).t;
    if (result) {
      const obj11 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      let formatToPlainStringResult = formatToPlainString(t.l2UfLG, obj11);
    } else {
      const obj12 = { bonusOrbMultiplier: questOrbRewardMultiplier };
      formatToPlainStringResult = formatToPlainString(t["G+mKoo"], obj12);
    }
    let tmp21Result = !tmp13;
    let tmp19 = tmp21Result;
    if (!tmp13) {
      tmp19 = questOrbRewardMultiplier(tmp2(8695).NitroWheelIcon, { size: "xs", color: "white" });
    }
    const obj13 = { children: null };
    const items2 = [tmp19, ];
    const obj14 = { variant: "text-xs/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    items2[1] = questOrbRewardMultiplier(tmp2(4570).Text, obj14);
    obj13.children = items2;
    const obj15 = {
      onPress() {
          if (null != questOrbRewardMultiplier) {
            openQuestOrbMultiplierPerkInfoActionSheetDefault(tmp, orbMultiplierEligibility);
            if (require != null) {
              require();
            }
          }
        },
      activeOpacity: 0.8,
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainStringResult,
      children: null
    };
    const obj16 = { style: null, children: null };
    const items3 = [tmp.fullGradientContainer, ];
    const obj17 = { backgroundColor: tmp14 };
    items3[1] = obj17;
    obj16.style = items3;
    if (!tmp13) {
      const obj18 = { style: tmp.fullGradient, colors: items, start, end };
      tmp21Result = tmp21(tmp6(5001), obj18);
    }
    const items4 = [tmp21Result, ];
    const obj19 = { style: tmp.fullGradientContent, children: closure_7(closure_6, obj13) };
    items4[1] = questOrbRewardMultiplier(token3, obj19);
    obj16.children = items4;
    obj15.children = closure_7(token3, obj16);
    return questOrbRewardMultiplier(tmp2(5137).PressableOpacity, obj15);
  }
};
