// Module ID: 15103
// Function ID: 15104
// Name: BountyVideo
// Dependencies: [32, 19, 17, 5494, 21, 1116, 11357, 576, 4605, 15104, 11592, 11593, 4341, 4306, 4606, 4609, 15091, 15096, 15105, 15115, 5637, 1114, 15116, 15118, 15120, 11163, 2]
// Exports: BountyVideo

// Module 15103 (BountyVideo)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4606 */;
import timingPresets from "timingPresets" /* 4609 */;
import AssetUtils from "AssetUtils" /* 11357 */;
import useBountiesAutoScroll from "useBountiesAutoScroll" /* 15091 */;
import BountiesModalProgress from "BountiesModalProgress" /* 15104 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5494).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const PlatformUtils = fn(1116);
let closure_14 = { top: 48, bottom: 16, left: 16, right: 16 };
const lg = nativeDefault.radii.lg;
const createStyles = fn(4605);
let closure_16 = createStyles.createStyles(() => {
  const obj = { videoContainer: null, leftRow: null, progress: null, poster: null };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.overflow = "hidden";
  obj2.borderRadius = lg;
  obj.videoContainer = obj2;
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.leftRow = rect;
  const rect1 = { position: "absolute", bottom: 0, height: BountiesModalProgress.PROGRESS_BAR_HEIGHT, left: lg, right: lg };
  obj.progress = rect1;
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.backgroundColor = "#000000";
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.poster = obj3;
  return obj;
});
const __initData = { code: "function BountyVideoTsx1(){const{posterOpacity}=this.__closure;return{opacity:posterOpacity.get()};}" };
const __initData2 = { code: "function BountyVideoTsx2(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData3 = { code: "function BountyVideoTsx3(){const{peekScale,AUTO_SCROLL_PEEK_SCALE,height,AUTO_SCROLL_PEEK_TOP_OFFSET}=this.__closure;if(peekScale==null){return{};}const scale=peekScale.get();const scaleProgress=(1-scale)/(1-AUTO_SCROLL_PEEK_SCALE);const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:scaleProgress*AUTO_SCROLL_PEEK_TOP_OFFSET-centerPivotCompensation},{scale:scale}]};}" };
const __initData4 = { code: "function BountyVideoTsx4(){const{videoEndPeekScale,height}=this.__closure;if(videoEndPeekScale==null){return{};}const scale=videoEndPeekScale.get();if(scale>=1){return{};}const centerPivotCompensation=height*(1-scale)/2;return{transform:[{translateY:-centerPivotCompensation},{scale:scale}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountyVideo.tsx");

export const BountyVideo = function BountyVideo(bounty) {
  bounty = bounty.bounty;
  ({ isCtaVisible, isEndCardVisible, isScrollIndicatorEnabled, handleVideoProgress } = bounty);
  const handleVideoError = bounty.handleVideoError;
  const onFirstFrame = bounty.onFirstFrame;
  let flag = bounty.isActive;
  ({ sourceQuestContent, isCompleted, isProgressBarVisible, orbsBalance, handleVideoEnd, handleVideoPaused, handleVideoResumed, onLoadStart, onBuffer, onVideoTracks, rewardRemainingSeconds, rewardTotalSeconds, normalizedProgress, initialProgress, repeat } = bounty);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bounty.isRecapPageRevealed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const isScrollingInBoundsSharedValue = bounty.isScrollingInBoundsSharedValue;
  ({ renderEndCard, shouldLoadHls, playerRef, onPlayerStateChange, balanceWidgetPillResetKey } = bounty);
  if (shouldLoadHls === undefined) {
    shouldLoadHls = true;
  }
  const width = bounty.width;
  const height = bounty.height;
  const peekScale = bounty.peekScale;
  const videoEndPeekScale = bounty.videoEndPeekScale;
  let flag3 = bounty.softDownloadCapsEnabled;
  if (flag3 === undefined) {
    flag3 = false;
  }
  c10 = undefined;
  let first;
  closure_12 = undefined;
  let sharedValue;
  let callback;
  const tmp = closure_16();
  const bountiesExperience = bounty(handleVideoError[10]).useBountiesExperience(videoEndPeekScale.VIDEO_MODAL_MOBILE);
  ({ stage1Enabled, ownedByVerticalScrollExperiment } = bountiesExperience);
  let obj = bounty(handleVideoError[10]);
  const isBountiesVerticalScrollExperimentEnabled = bounty(handleVideoError[11]).useIsBountiesVerticalScrollExperimentEnabled("BountyVideo");
  if (flag3) {
    flag3 = !flag;
  }
  let obj2 = bounty(handleVideoError[11]);
  [tmp7, c10] = onFirstFrame(flag.useState(false), 2);
  const tmp8 = onFirstFrame(flag.useState(false), 2);
  first = tmp8[0];
  closure_12 = tmp10;
  flag.useRef(null);
  const tmp6 = onFirstFrame(flag.useState(false), 2);
  sharedValue = bounty(handleVideoError[12]).useSharedValue(1);
  let items = [bounty, width, height];
  const memo = flag.useMemo(() => {
    const size = { assetUrl: bounty.videoHls, width, height };
    return AssetUtils.getScaledFirstFrameImageUrl(size);
  }, items);
  const tmp2Result = bounty(handleVideoError[12]);
  const token = bounty(handleVideoError[13]).useToken(handleVideoProgress(tmp3[7]).colors.TEXT_DEFAULT);
  const combined = "" + bounty.id + ":" + shouldLoadHls;
  const tmp15 = onFirstFrame(flag.useState(combined), 2);
  if (tmp15[0] !== combined) {
    tmp15[1](combined);
    tmp10(false);
    let result = sharedValue.set(1);
  }
  const items1 = [combined];
  const effect = obj3.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, items1);
  const items2 = [first, sharedValue];
  const effect1 = obj3.useEffect(() => {
    if (first) {
      const result = sharedValue.set(timing.withTiming(0, timingPresets.timingFast));
    }
  }, items2);
  callback = obj3.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    closure_12(true);
  }, []);
  const items3 = [onFirstFrame];
  const items4 = [callback, handleVideoError];
  const callback1 = obj3.useCallback(() => {
    if (onFirstFrame != null) {
      tmp();
    }
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp3.current);
    }
    ref.current = setTimeout(() => {
      closure_1_12(true);
      ref.current = null;
    }, num);
  }, items3);
  const items5 = [handleVideoProgress];
  const callback2 = obj3.useCallback((arg0) => {
    callback();
    if (handleVideoError != null) {
      tmp2(arg0);
    }
  }, items4);
  const callback3 = obj3.useCallback((currentTime) => {
    if (currentTime.currentTime > 0) {
      _undefined(true);
    }
    handleVideoProgress(currentTime);
  }, items5);
  const tmp2Result7 = bounty(handleVideoError[13]);
  class Ve {
    constructor() {
      obj = { opacity: closure_14.get() };
      return obj;
    }
  }
  Ve.__closure = { posterOpacity: sharedValue };
  Ve.__workletHash = 4975136521719;
  Ve.__initData = __initData;
  const animatedStyle = bounty(handleVideoError[12]).useAnimatedStyle(Ve);
  const tmp2Result8 = bounty(handleVideoError[12]);
  class Be {
    constructor() {
      obj = closure_5;
      if (closure_5 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[14]);
      num = 0;
      if (c4) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[15]).timingStandard) };
      return obj1;
    }
  }
  const tmp2Result9 = bounty(handleVideoError[12]);
  Be.__closure = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[14]).withTiming, isActive: flag, timingStandard: bounty(handleVideoError[15]).timingStandard };
  Be.__workletHash = 12676706441349;
  Be.__initData = __initData2;
  const animatedStyle1 = tmp2Result9.useAnimatedStyle(Be);
  let obj4 = { isScrollingInBoundsSharedValue, withTiming: bounty(handleVideoError[14]).withTiming, isActive: flag, timingStandard: bounty(handleVideoError[15]).timingStandard };
  class Fe {
    constructor() {
      obj = peekScale;
      if (null == peekScale) {
        return {};
      } else {
        value = obj.get();
        obj1 = { transform: null };
        obj5 = { translateY: null };
        num = 1;
        tmp3 = closure_0;
        tmp4 = closure_2;
        diff = 1 - value;
        diff1 = 1 - closure_0(closure_2[16]).AUTO_SCROLL_PEEK_SCALE;
        tmp6 = height;
        num2 = 2;
        obj5.translateY = diff / diff1 * closure_0(closure_2[16]).AUTO_SCROLL_PEEK_TOP_OFFSET - height * (1 - value) / 2;
        items = [, ];
        items[0] = obj5;
        obj6 = { scale: null };
        obj6.scale = value;
        items[1] = obj6;
        obj1.transform = items;
        return obj1;
      }
    }
  }
  const tmp2Result10 = bounty(handleVideoError[12]);
  Fe.__closure = { peekScale, AUTO_SCROLL_PEEK_SCALE: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_SCALE, height, AUTO_SCROLL_PEEK_TOP_OFFSET: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  Fe.__workletHash = 13770344279431;
  Fe.__initData = __initData3;
  const animatedStyle2 = tmp2Result10.useAnimatedStyle(Fe);
  const obj5 = { peekScale, AUTO_SCROLL_PEEK_SCALE: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_SCALE, height, AUTO_SCROLL_PEEK_TOP_OFFSET: bounty(handleVideoError[16]).AUTO_SCROLL_PEEK_TOP_OFFSET };
  class Le {
    constructor() {
      obj = videoEndPeekScale;
      if (null == videoEndPeekScale) {
        return {};
      } else {
        value = obj.get();
        num = 1;
        if (value >= 1) {
          obj1 = {};
        } else {
          obj1 = { transform: null };
          obj5 = { translateY: null };
          tmp2 = height;
          num2 = 2;
          obj5.translateY = -height * (1 - value) / 2;
          items = [, ];
          items[0] = obj5;
          obj6 = { scale: null };
          obj6.scale = value;
          items[1] = obj6;
          obj1.transform = items;
        }
        return obj1;
      }
    }
  }
  Le.__closure = { videoEndPeekScale, height };
  Le.__workletHash = 9172705764213;
  Le.__initData = __initData4;
  let tmp29 = isCtaVisible;
  const animatedStyle3 = bounty(handleVideoError[12]).useAnimatedStyle(Le);
  if (isBountiesVerticalScrollExperimentEnabled) {
    let tmp30 = isCtaVisible;
    if (isCtaVisible) {
      tmp30 = !isEndCardVisible;
    }
    tmp29 = tmp30;
  }
  const tmp2Result11 = bounty(handleVideoError[12]);
  const bountyVideoEndAppStoreContext = bounty(handleVideoError[17]).useBountyVideoEndAppStoreContext();
  let prop1 = null;
  if (true === flag) {
    let prop;
    if (bountyVideoEndAppStoreContext != null) {
      prop = bountyVideoEndAppStoreContext.isVideoEndAppStoreOverlayVisible;
    }
    prop1 = null;
    if (true === prop) {
      prop1 = bountyVideoEndAppStoreContext.dismissVideoEndAppStoreOverlay;
    }
  }
  const obj6 = { style: null, children: null };
  const items6 = [width.absoluteFillObject, animatedStyle2, animatedStyle3];
  obj6.style = items6;
  const obj7 = { style: tmp.videoContainer, children: null };
  let tmp39Result = null;
  if (shouldLoadHls) {
    const obj8 = { ref: playerRef, source: null, automaticallyWaitsToMinimizeStalling: null, maxBitRate: null, bufferConfig: null, preferredForwardBufferDuration: null, initialProgress: null, isFullscreen: false, externallyPaused: null, style: null, contentInsets: null, onProgress: null, onEnd: null, onPausePlayback: null, onResumePlayback: null, onError: null, onLoadStart: null, onBuffer: null, onReadyForDisplay: null, onVideoTracks: null, hideControls: null, showSkipButtons: false, repeat: null, bufferingSpinnerPlacement: "center", onPlayerStateChange: null };
    const obj9 = { uri: bounty.videoHls };
    obj8.source = obj9;
    let tmp40 = !stage1Enabled;
    if (!stage1Enabled) {
      tmp40 = !ownedByVerticalScrollExperiment;
    }
    obj8.automaticallyWaitsToMinimizeStalling = tmp40;
    let prop2;
    if (flag3) {
      prop2 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_MAX_BITRATE;
    }
    obj8.maxBitRate = prop2;
    let prop3;
    if (flag3) {
      prop3 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_BUFFER_CONFIG;
    }
    obj8.bufferConfig = prop3;
    let prop4;
    if (flag3) {
      prop4 = tmp2(tmp3[19]).SOFT_CAP_PRELOAD_FORWARD_BUFFER_SEC;
    }
    obj8.preferredForwardBufferDuration = prop4;
    obj8.initialProgress = initialProgress;
    let tmp44 = !flag;
    if (flag) {
      tmp44 = isEndCardVisible;
    }
    if (!tmp44) {
      tmp44 = flag2;
    }
    obj8.externallyPaused = tmp44;
    obj8.style = tmp36.absoluteFillObject;
    obj8.contentInsets = sharedValue;
    obj8.onProgress = callback3;
    obj8.onEnd = handleVideoEnd;
    obj8.onPausePlayback = handleVideoPaused;
    obj8.onResumePlayback = handleVideoResumed;
    obj8.onError = callback2;
    obj8.onLoadStart = onLoadStart;
    obj8.onBuffer = onBuffer;
    obj8.onReadyForDisplay = callback1;
    obj8.onVideoTracks = onVideoTracks;
    obj8.hideControls = isEndCardVisible;
    obj8.repeat = repeat;
    obj8.onPlayerStateChange = onPlayerStateChange;
    tmp39Result = c10(tmp2(tmp3[18]).AdVideoPlayer, obj8);
  }
  const items7 = [tmp39Result, , , , , ];
  if (null != memo) {
    const obj10 = { style: null, pointerEvents: "none", children: null };
    const items8 = [tmp.poster, animatedStyle];
    obj10.style = items8;
    const obj11 = { style: tmp36.absoluteFillObject, source: null, resizeMode: "cover" };
    const obj12 = { uri: memo };
    obj11.source = obj12;
    const items9 = [c10(tmp12(tmp3[20]), obj11), ];
    let tmp48Result = !first;
    if (!first) {
      const obj13 = { animating: true, size: "small", color: token };
      tmp48Result = tmp48(height, obj13);
    }
    items9[1] = tmp48Result;
    obj10.children = items9;
    let tmp34Result = tmp34(tmp12(tmp3[12]).View, obj10);
    let tmp46 = tmp48;
  } else {
    tmp46 = c10;
    const obj14 = { style: null, pointerEvents: "none" };
    const items10 = [tmp.poster, animatedStyle];
    obj14.style = items10;
    tmp34Result = c10(tmp12(tmp3[12]).View, obj14);
  }
  items7[1] = tmp34Result;
  let renderEndCardResult;
  if (renderEndCard != null) {
    renderEndCardResult = renderEndCard();
  }
  items7[2] = renderEndCardResult;
  let tmp46Result = null;
  if (null != prop1) {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
    const intl = tmp2(tmp3[21]).intl;
    obj15.accessibilityLabel = intl.string(tmp2(tmp3[21]).t.dcl9MQ);
    obj15.onPress = prop1;
    obj15.style = tmp36.absoluteFillObject;
    tmp46Result = tmp46(peekScale, obj15);
  }
  items7[3] = tmp46Result;
  if (isScrollIndicatorEnabled) {
    const obj16 = { opacityStyle: animatedStyle1, enabled: null, isEndCardVisible: null };
    if (flag) {
      flag = tmp7;
    }
    obj16.enabled = flag;
    obj16.isEndCardVisible = isEndCardVisible;
    isScrollIndicatorEnabled = tmp46(tmp12(tmp3[22]), obj16);
    const tmp12Result = tmp12(tmp3[22]);
  }
  const obj17 = { children: null };
  items7[4] = isScrollIndicatorEnabled;
  const obj18 = { style: null, pointerEvents: "box-none", children: tmp46(handleVideoProgress(handleVideoError[23]), { bounty, visible: tmp29, sourceQuestContent }) };
  const items11 = [width.absoluteFillObject, animatedStyle1];
  obj18.style = items11;
  items7[5] = tmp46(handleVideoProgress(handleVideoError[12]).View, obj18);
  obj7.children = items7;
  const items12 = [first(isScrollingInBoundsSharedValue, obj7), ];
  const obj19 = { style: null, children: tmp46(handleVideoProgress(handleVideoError[9]), { progress: normalizedProgress, visible: isProgressBarVisible }) };
  const items13 = [tmp.progress, animatedStyle1];
  obj19.style = items13;
  items12[1] = tmp46(handleVideoProgress(handleVideoError[12]).View, obj19);
  obj6.children = items12;
  const items14 = [first(handleVideoProgress(handleVideoError[12]).View, obj6), ];
  const obj20 = { style: null, children: null };
  const items15 = [tmp.leftRow, animatedStyle1];
  obj20.style = items15;
  const items16 = [tmp46(handleVideoProgress(handleVideoError[24]), { isCompleted, totalSeconds: rewardTotalSeconds, remainingSeconds: rewardRemainingSeconds }), tmp46(bounty(handleVideoError[25]).BalanceWidgetPill, { balance: orbsBalance }, balanceWidgetPillResetKey)];
  obj20.children = items16;
  items14[1] = first(handleVideoProgress(handleVideoError[12]).View, obj20);
  obj17.children = items14;
  return first(closure_12, obj17);
};
