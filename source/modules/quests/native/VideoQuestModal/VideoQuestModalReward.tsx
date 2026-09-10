// Module ID: 15179
// Function ID: 15180
// Name: VideoQuestModalReward
// Dependencies: [19, 21, 4574, 15156, 11515, 11798, 4987, 576, 15161, 4570, 1114, 2]

// Module 15179 (VideoQuestModalReward)
import nativeDefault from "native" /* 576 */;
import QuestUtils from "QuestUtils" /* 11798 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15161 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let closure_6 = createStyles.createStyles({ questName: { textAlign: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalReward.tsx");

export default noop.memo(function VideoQuestModalReward(style) {
  const withQuestName = style.withQuestName;
  let tmp = undefined === withQuestName;
  if (!tmp) {
    tmp = withQuestName;
  }
  const withRewardAvailableCopy = style.withRewardAvailableCopy;
  let tmp9Result = undefined === withRewardAvailableCopy || withRewardAvailableCopy;
  const size = style.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  ({ withRewardTileAnimation, onTextBlockLayout } = style);
  quest = quest(15156).useVideoQuestModalContext().quest;
  const obj = quest(15156);
  const items = [quest.id];
  const questTaskDetails = quest(11515).useQuestTaskDetails(quest);
  const callback = noop.useCallback(() => {
    const result = QuestUtils.openRewardDetailsBottomSheet({ questId: quest.id });
  }, items);
  const obj2 = quest(11515);
  const obj3 = { justify: "center", align: "center", spacing: nativeDefault.space.PX_24, style: style.style, children: null };
  const items1 = [closure_4(QuestProgressIndicatorDefault, { hasConfetti: true, quest, size: str, progress: questTaskDetails.percentComplete, onPress: callback, withAnimation: withRewardTileAnimation }), ];
  const obj5 = { align: "center", spacing: nativeDefault.space.PX_4, onLayout: onTextBlockLayout, children: null };
  if (tmp) {
    const obj6 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp7.questName, children: null };
    const intl = tmp3(1114).intl;
    const obj7 = { questName: quest.config.messages.questName };
    obj6.children = intl.formatToPlainString(tmp3(1114).t.EAYZAr, obj7);
    tmp = tmp9(tmp3(4570).Text, obj6);
  }
  const items2 = [tmp, ];
  if (tmp9Result) {
    const obj8 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp3(1114).intl;
    obj8.children = intl2.string(tmp3(1114).t["1Wvve2"]);
    tmp9Result = tmp9(tmp3(4570).Text, obj8);
  }
  items2[1] = tmp9Result;
  obj5.children = items2;
  items1[1] = closure_5(quest(4987).Stack, obj5);
  obj3.children = items1;
  return closure_5(quest(4987).Stack, obj3);
});
