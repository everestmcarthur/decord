// Module ID: 11774
// Function ID: 11775
// Name: QuestRewardDetailsBottomSheet
// Dependencies: [19, 17, 1371, 21, 4560, 576, 11772, 4527, 11488, 11295, 7708, 1114, 504, 7150, 4973, 11775, 4556, 2]
// Exports: default

// Module 11774 (QuestRewardDetailsBottomSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7708 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11295 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11488 */;
import QuestUtils from "QuestUtils" /* 11772 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest.config];
  const memo = noop.useMemo(() => QuestRewardUtils.isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = noop.useMemo(() => {
    const type = QuestRewardUtils.getQuestPrimaryReward(quest).type;
    if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = tmp(1114).intl;
      const t = tmp(1114).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (tmp(7708).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = tmp(1114).intl;
      return intl.string(tmp(1114).t.maMtqM);
    } else {
      return null;
    }
  }, items1);
  const items2 = [UserStore];
  const stateFromStores = quest(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  let obj = quest(504);
  const tmp4 = quest;
  const defaultRewardName = quest(11295).getDefaultRewardName(quest.config, stateFromStores);
  const obj3 = { direction: "vertical", spacing: memo(576).space.PX_16, style: tmp.wrapper, children: null };
  const obj4 = { align: "center", direction: "horizontal", spacing: memo(576).space.PX_16, children: null };
  const items3 = [closure_6(memo(11775), { quest, height: 56, width: 56, withAnimation: true }), ];
  const obj5 = { direction: "vertical", spacing: memo(576).space.PX_4, style: tmp.rewardDetailsCopy, children: null };
  const obj6 = { variant: "eyebrow", color: "text-subtle", children: null };
  let intl = quest(1114).intl;
  obj6.children = intl.string(quest(1114).t["jyYgZ+"]);
  const items4 = [closure_6(quest(4556).Text, obj6), closure_6(quest(4556).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  obj5.children = items4;
  items3[1] = closure_7(quest(4973).Stack, obj5);
  obj4.children = items3;
  const items5 = [closure_7(quest(4973).Stack, obj4), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj7 = { children: null };
    const obj8 = { style: tmp.separator };
    const items6 = [tmp8(View, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = tmp8(tmp4(4556).Text, obj9);
    obj7.children = items6;
    tmp9Result = tmp9(closure_8, obj7);
  }
  const obj2 = quest(11295);
  items5[1] = tmp9Result;
  obj3.children = items5;
  return closure_6(quest(7150).BottomSheet, { startExpanded: true, children: closure_7(quest(4973).Stack, obj3) });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { wrapper: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 }, rewardDetailsCopy: { flexShrink: 1 }, separator: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = noop.useCallback(() => {
    const result = QuestUtils.showQuestUnavailableAlert();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const nonNullableQuest = hooks_QuestHooks.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    const obj2 = { quest: nonNullableQuest };
    tmp3 = timestampProducer(QuestRewardDetailsBottomSheet, obj2);
  }
  return tmp3;
};
