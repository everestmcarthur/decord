// Module ID: 15156
// Function ID: 15157
// Name: VideoQuestModalHeader
// Dependencies: [19, 17, 7705, 21, 4560, 576, 15129, 11488, 7724, 4184, 11517, 4556, 1114, 15151, 2]
// Exports: default

// Module 15156 (VideoQuestModalHeader)
import nativeDefault from "native" /* 576 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7724 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const useVideoQuestUIStore = fn(7705).useVideoQuestUIStore;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let obj2 = { videoContentHeaderWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, videoContentHeading: { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 }, subheader: { opacity: 0.6 }, textShadow: null };
let obj3 = { flexDirection: "column", flexShrink: 1, gap: nativeDefault.space.PX_4 };
obj2.textShadow = { margin: -15, padding: 15, textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 15 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx");

export default function VideoQuestModalHeader(showCurrentVideoTime) {
  showCurrentVideoTime = showCurrentVideoTime.showCurrentVideoTime;
  let tmp = undefined !== showCurrentVideoTime;
  ({ closeButtonIconColor, onClose, style } = showCurrentVideoTime);
  if (tmp) {
    tmp = showCurrentVideoTime;
  }
  const withTextShadow = showCurrentVideoTime.withTextShadow;
  let textShadow = undefined !== withTextShadow && withTextShadow;
  const tmp2 = closure_7();
  quest = quest(15129).useVideoQuestModalContext().quest;
  let obj = quest(15129);
  const questTaskDetails = quest(11488).useQuestTaskDetails(quest);
  const tmp6 = useVideoQuestUIStore((arg0) => {
    let tmp = arg0.videoProgress[quest.id];
    if (tmp == null) {
      const obj = { timestampSec: null, duration: null, maxTimestampSec: null };
      ({ progressSeconds: obj.timestampSec, targetSeconds: obj.duration, progressSeconds: obj.maxTimestampSec } = questTaskDetails);
      tmp = obj;
    }
    const time = QuestTaskUtils.parseMinutesAndSecondsFromSeconds(tmp.duration - tmp.timestampSec);
    return QuestTaskUtils.formatWatchTaskTime(time.minutes, time.seconds);
  }, quest(4184).shallow);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null == completedAt) {
    const videoQuestProgressRemainingAccessibilityLabel = tmp3(11517).getVideoQuestProgressRemainingAccessibilityLabel(questTaskDetails, tmp8);
    const tmp3Result = tmp3(11517);
  }
  const obj3 = { style: null, children: null };
  const items = [tmp2.videoContentHeaderWrapper, style];
  obj3.style = items;
  const obj4 = { style: tmp2.videoContentHeading, children: null };
  let textShadow2 = textShadow;
  if (textShadow) {
    textShadow2 = tmp2.textShadow;
  }
  const obj5 = { variant: "heading-md/semibold", color: "text-overlay-light", style: textShadow2, children: null };
  const intl = tmp3(1114).intl;
  obj5.children = intl.formatToPlainString(quest(1114).t.EQa7os, { questName: quest.config.messages.questName });
  const items1 = [closure_5(quest(4556).Text, obj5), ];
  const obj7 = { variant: "heading-sm/semibold", color: "text-overlay-light", accessibilityLabel: videoQuestProgressRemainingAccessibilityLabel, style: null, children: null };
  const items2 = [tmp2.subheader, ];
  if (textShadow) {
    textShadow = tmp2.textShadow;
  }
  items2[1] = textShadow;
  obj7.style = items2;
  let gamePublisher = tmp6;
  if (null != completedAt) {
    gamePublisher = tmp6;
    if (!tmp) {
      gamePublisher = quest.config.messages.gamePublisher;
    }
  }
  obj7.children = gamePublisher;
  items1[1] = closure_5(quest(4556).Text, obj7);
  obj4.children = items1;
  const items3 = [closure_6(View, obj4), closure_5(questTaskDetails(15151), { iconColor: closeButtonIconColor, onClose })];
  obj3.children = items3;
  return closure_6(View, obj3);
};
