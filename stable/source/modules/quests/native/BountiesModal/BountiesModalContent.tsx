// Module ID: 15064
// Function ID: 15065
// Name: BountiesModalContent
// Dependencies: [5, 19, 17, 7702, 5444, 1074, 1085, 21, 1477, 1611, 4560, 576, 504, 8856, 11525, 15019, 15023, 11529, 15022, 15024, 7718, 5451, 7728, 5449, 11517, 15005, 15027, 11783, 15065, 15057, 7123, 15048, 11488, 4271, 2]
// Exports: default

// Module 15064 (BountiesModalContent)
import nativeDefault from "native" /* 576 */;
import QuestContent from "QuestContent" /* 5449 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11517 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11783 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15005 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7702 */;

const require = globalThis.__r;

require = fn;
function BountiesModalContentInner(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  noop = undefined;
  handleProgress = undefined;
  let flushProgress;
  let handleVideoProgressAnalytics;
  let isEndCardVisible;
  let maxVideoProgressSeconds;
  let videoDuration;
  const tmp = closure_14();
  dependencyMap = tmp;
  let size = sourceQuestContent(1477)();
  const width = size.width;
  closure_129_0 = width;
  const height = size.height;
  closure_129_1 = height;
  const tmp4 = sourceQuestContent(1611)();
  closure_129_2 = tmp4;
  let items = [width, height, , , , ];
  ({ top: arr[2], bottom: arr[3], left: arr[4], right: arr[5] } = tmp4);
  const memo = noop.useMemo(() => {
    const rect = closure_2;
    const diff = bounty - closure_2.left - closure_2.right;
    const diff1 = sourceQuestContent - closure_2.top - closure_2.bottom;
    let result = diff / c13;
    let flag = true;
    let result1 = diff;
    if (result > diff1) {
      result1 = diff1 * c13;
      flag = false;
      result = diff1;
    }
    const size = { top: Math.floor(rect.top + (diff1 - result) / 2), left: Math.floor(rect.left + (diff - result1) / 2), width: Math.floor(result1), height: Math.floor(result), isFullWidth: flag };
    return size;
  }, items);
  let items1 = [tmp.videoWrapper, memo];
  const items2 = [tmp.closeButton, , , ];
  ({ top: arr3[1], left: arr3[2], width: arr3[3] } = memo);
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.videoWrapper, ];
    const size = { top: memo.top, left: memo.left, width: memo.width, height: memo.height };
    items[1] = size;
    return items;
  }, items1);
  const items3 = [, , , , , ];
  ({ bottomContainer: arr4[0], bottomContainerFullWidth: arr4[1], bottomContainerNotFullWidth: arr4[2] } = tmp);
  ({ isFullWidth: arr4[3], left: arr4[4], width: arr4[5] } = memo);
  const memo2 = noop.useMemo(() => {
    const items = [closure_2.closeButton, ];
    const rect = { top: memo.top + nativeDefault.space.PX_8, left: null };
    const sum = memo.left + memo.width;
    const diff = sum - nativeDefault.space.PX_32;
    rect.left = diff - nativeDefault.space.PX_8;
    items[1] = rect;
    return items;
  }, items2);
  const memo3 = noop.useMemo(() => {
    const bottomContainer = closure_2.bottomContainer;
    if (memo.isFullWidth) {
      const items = [bottomContainer, tmp2.bottomContainerFullWidth];
      let items1 = items;
    } else {
      items1 = [bottomContainer, tmp2.bottomContainerNotFullWidth, ];
      const obj = { left: null, width: null };
      ({ left: obj.left, width: obj.width } = memo);
      items1[2] = obj;
    }
    return items1;
  }, items3);
  const items4 = [flushProgress];
  const stateFromStores = bounty(504).useStateFromStores(items4, () => BountyStore.isBountyCompleted(bounty.id));
  let obj2 = bounty(504);
  let obj3 = bounty(8856);
  const bountiesExperience = bounty(11525).useBountiesExperience(handleVideoProgressAnalytics.VIDEO_MODAL_MOBILE);
  ({ loopingEnabled, ownedByVerticalScrollExperiment, stage1Enabled, rewardTimerSeconds } = bountiesExperience);
  const BountyVideoEndMode = bounty(15019).BountyVideoEndMode;
  const tmp12 = loopingEnabled ? BountyVideoEndMode.LOOP : BountyVideoEndMode.END_CARD;
  if (!stage1Enabled) {
    if (!ownedByVerticalScrollExperiment) {
      let result = 1000 * bounty.rewardTimerSeconds;
    }
    noop = result;
    let obj5 = { bountyId: bounty.id, endMode: tmp12 };
    const bountyVideoProgressPersistence = tmp9(15023).useBountyVideoProgressPersistence(obj5);
    ({ initialProgress, handleProgress } = bountyVideoProgressPersistence);
    flushProgress = bountyVideoProgressPersistence.flushProgress;
    const items5 = [bounty.id, sourceQuestContent];
    const callback = obj.useCallback(memo(function*() {
      closure_1 = tmp3;
      yield closure_0(tmp20[17]).claimBountyReward(bounty.id, sourceQuestContent);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        const result = bounty(tmp20[18]).openBountyRewardClaimErrorToast(closure_128_0);
        c5 = 3;
        bounty(tmp20[18]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return arg1;
    }), items5);
    const tmp9Result = tmp9(15023);
    const obj6 = { bountyId: bounty.id, sourceQuestContent, rewardDurationMs: result, initialPlaybackTimeSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null, wasPreloaded: false, startupPath: "carousel", verticalScrollingPosition: null };
    ({ timestampSec: obj8.initialPlaybackTimeSec, maxTimestampSec: obj8.initialMaxVideoProgressSec, duration: obj8.initialVideoDurationSec } = initialProgress);
    const bountiesModalVideoAnalytics = tmp9(15024).useBountiesModalVideoAnalytics(obj6);
    handleVideoProgressAnalytics = bountiesModalVideoAnalytics.handleVideoProgressAnalytics;
    const items6 = [handleVideoProgressAnalytics, handleProgress];
    ({ handleVideoEndAnalytics, handleVideoLoopedAnalytics, handleVideoPausedAnalytics, handleVideoResumedAnalytics, handleVideoErrorAnalytics, handleLoadStartAnalytics, handleVideoTracksAnalytics, handleReadyForDisplayAnalytics, handleBufferAnalytics } = bountiesModalVideoAnalytics);
    const callback1 = obj.useCallback((arg0, arg1, arg2) => {
      handleVideoProgressAnalytics(arg0, arg1, arg2);
      handleProgress(arg0, arg1, arg2);
    }, items6);
    const tmp9Result3 = tmp9(15024);
    const obj7 = { endMode: tmp12, rewardDurationMs: result, isCompleted: stateFromStores, onRewardEarned: callback, onVideoProgress: callback1, onVideoEnd: handleVideoEndAnalytics, onVideoLooped: handleVideoLoopedAnalytics, onVideoPaused: handleVideoPausedAnalytics, onVideoResumed: handleVideoResumedAnalytics, initialProgressSec: null, initialMaxVideoProgressSec: null, initialVideoDurationSec: null };
    ({ timestampSec: obj10.initialProgressSec, maxTimestampSec: obj10.initialMaxVideoProgressSec } = initialProgress);
    let duration = null;
    if (initialProgress.duration > 0) {
      duration = initialProgress.duration;
    }
    obj7.initialVideoDurationSec = duration;
    const bountiesModalTiming = tmp9(15019).useBountiesModalTiming(obj7);
    isEndCardVisible = bountiesModalTiming.isEndCardVisible;
    maxVideoProgressSeconds = bountiesModalTiming.maxVideoProgressSeconds;
    videoDuration = bountiesModalTiming.videoDuration;
    const items7 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    ({ isCtaVisible, handleVideoEnd, handleVideoProgress, handleVideoPaused, handleVideoResumed, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress } = bountiesModalTiming);
    const items8 = [bounty.id, maxVideoProgressSeconds, result, sourceQuestContent, videoDuration, flushProgress];
    const callback2 = obj.useCallback(() => {
      const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: null, reward_timer_seconds: null };
      const obj = AnalyticsActions;
      obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
      obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_MOBILE;
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj3.threshold_met = 1000 * maxVideoProgressSeconds >= c4;
      obj3.reward_timer_seconds = c4 / 1000;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj2);
      flushProgress();
      BountiesModalActionCreatorsDefault.hideModal();
    }, items7);
    const obj9 = { children: null };
    const obj11 = { style: memo1, children: null };
    const callback3 = obj.useCallback(() => {
      const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, event: AnalyticEvents.AD_VIDEO_MODAL_CLOSED, properties: null, sourceQuestContent: null };
      const obj3 = { content_name: null, content_id: null, video_progress: null, threshold_met: true, reward_timer_seconds: null };
      const obj = AnalyticsActions;
      obj3.content_name = AnalyticsTypes.getQuestContentName(QuestContent.QuestContent.VIDEO_MODAL_END_CARD);
      obj3.content_id = QuestContent.QuestContent.VIDEO_MODAL_END_CARD;
      let num = videoDuration;
      if (videoDuration == null) {
        num = 0;
      }
      obj3.video_progress = VideoQuestUtils.formatVideoProgressRatio(maxVideoProgressSeconds, num);
      obj3.reward_timer_seconds = c4 / 1000;
      obj2.properties = obj3;
      obj2.sourceQuestContent = sourceQuestContent;
      obj.trackAdContentEvent(obj2);
      flushProgress();
      BountiesModalActionCreatorsDefault.hideModal();
    }, items8);
    const size1 = {
      isActive: true,
      bounty,
      sourceQuestContent,
      isCompleted: stateFromStores,
      isCtaVisible,
      isEndCardVisible,
      isProgressBarVisible: !isEndCardVisible,
      orbsBalance: obj3.useFetchVirtualCurrencyBalance().balance,
      handleVideoEnd,
      handleVideoProgress,
      handleVideoPaused,
      handleVideoResumed,
      handleVideoError: handleVideoErrorAnalytics,
      onLoadStart: handleLoadStartAnalytics,
      onBuffer: handleBufferAnalytics,
      onFirstFrame: handleReadyForDisplayAnalytics,
      onVideoTracks: handleVideoTracksAnalytics,
      rewardRemainingSeconds,
      rewardTotalSeconds,
      normalizedProgress,
      repeat: loopingEnabled,
      initialProgress,
      renderEndCard() {
          return closure_2_10(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
            adContentId: bounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            questContent: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
            sourceQuestContent,
            overrideVisibility: isEndCardVisible,
            children() {
              return videoDuration(sourceQuestContent(closure_2[28]), { bounty, visible, sourceQuestContent });
            }
          });
        },
      isScrollIndicatorEnabled: false,
      width: null,
      height: null
    };
    ({ width: obj13.width, height: obj13.height } = memo);
    obj11.children = videoDuration(tmp9(15027).BountyVideo, size1);
    const items9 = [videoDuration(handleProgress, obj11), , ];
    const obj12 = { style: memo2, children: null };
    const obj14 = { onPress: callback2 };
    obj12.children = videoDuration(tmp2(15057), obj14);
    items9[1] = videoDuration(handleProgress, obj12);
    let rect = { left: null, right: null, bottom: true, style: null, pointerEvents: "box-none", children: null };
    ({ isFullWidth: obj16.left, isFullWidth: obj16.right } = memo);
    rect.style = memo3;
    const obj15 = { bounty, visible: isEndCardVisible, sourceQuestContent, onClose: callback3 };
    rect.children = videoDuration(tmp2(15048), obj15);
    items9[2] = videoDuration(tmp9(7123).SafeAreaPaddingView, rect);
    obj9.children = items9;
    return closure_12(closure_11, obj9);
  }
  result = 1000 * rewardTimerSeconds;
}
const View = fn(17).View;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = 0.5625;
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles(() => {
  const obj = { videoWrapper: { position: "absolute" }, closeButton: { position: "absolute" }, bottomContainer: { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" }, bottomContainerFullWidth: null, bottomContainerNotFullWidth: null };
  const rect = { left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
  obj.bottomContainerFullWidth = rect;
  const obj2 = { position: "absolute", bottom: nativeDefault.space.PX_24, justifyContent: "flex-end" };
  obj.bottomContainerNotFullWidth = { paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalContent.tsx");

export default function BountiesModalContent(arg0) {
  ({ bountyId: require, sourceQuestContent } = arg0);
  let found;
  const questHomeBounties = require("hooks/QuestHooks").useQuestHomeBounties().questHomeBounties;
  found = questHomeBounties.find((id) => id.id === require);
  let tmp4 = null;
  if (null != found) {
    const obj2 = { theme: ThemeTypes.DARKER, children: null };
    const obj3 = {
      adContentId: found.id,
      adCreativeType: tmp(tmp2[21]).AdCreativeType.BOUNTY,
      questContent: tmp(tmp2[23]).QuestContent.VIDEO_MODAL_MOBILE,
      sourceQuestContent,
      overrideVisibility: true,
      children() {
          return closure_2_10(BountiesModalContentInner, { bounty: found, sourceQuestContent });
        }
    };
    obj2.children = closure_10(tmp(tmp2[27]).BillableAdPlacementImpressionTrackerNative, obj3);
    tmp4 = closure_10(tmp(tmp2[33]).ThemeContextProvider, obj2);
  }
  return tmp4;
};
