// Module ID: 17087
// Function ID: 17088
// Name: useControllerPIPState
// Dependencies: [32, 19, 1956, 4576, 9516, 1957, 5419, 12277, 9511, 9517, 17040, 504, 4189, 9552, 9501, 17088, 550, 17089, 17090, 17092, 2]
// Exports: useControllerPIPState

// Module 17087 (useControllerPIPState)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4189 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 9552 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import FramesStore from "FramesStore" /* 9516 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SpeakingStore from "SpeakingStore" /* 5419 */;

require = fn;
const VoicePanelModes = fn(12277).VoicePanelModes;
const ActivityPanelModes = fn(9511).ActivityPanelModes;
const asLaunched = fn(9517).asLaunched;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  channelId = channelId.channelId;
  let obj4 = channelId;
  ({ connected, focusedId } = channelId);
  const layoutManager = channelId.layoutManager;
  dependencyMap = layoutManager;
  const mode = channelId.mode;
  let current;
  noop = undefined;
  c7 = undefined;
  const ref = noop.useRef({ id: "sa", mode: "isArray", width: false, height: 57.77734375, containerHeight: null, showSecondaryPIP: "\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F" });
  const tmp2 = current(noop.useState(undefined), 2);
  current = tmp2[0];
  noop = tmp2[1];
  closure_5 = noop.useRef(current);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_5.current = current;
  });
  closure_129_0 = channelId;
  closure_129_1 = mode;
  const tmp7 = ref(17040)(channelId);
  closure_129_2 = tmp7;
  let items = [closure_5, c7, ChannelStore];
  const items1 = [channelId, tmp7, mode];
  const stateFromStores = obj4(504).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(obj4);
    let isVocalResult;
    if (channel != null) {
      isVocalResult = channel.isVocal();
    }
    if (isVocalResult) {
      if (!closure_2) {
        return false;
      }
    }
    const tmp4 = asLaunched(FramesStore.getMainFrame());
    if (null != tmp4) {
      if (tmp4.data.activityPanelMode === ActivityPanelModes.PIP) {
        return true;
      }
    }
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    if (null == connectedActivityLocation) {
      return false;
    } else {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const channel1 = obj.getChannel(embeddedActivityLocationChannelId);
      let result = null != channel1;
      const activityPanelMode = obj3.getActivityPanelMode();
      if (result) {
        result = ActivitiesInTextUtils.isActivityInTextSupportedForChannel(channel1);
        const tmp14Result = ActivitiesInTextUtils;
      }
      if (result) {
        result = embeddedActivityLocationChannelId !== tmp;
      }
      let tmp10 = activityPanelMode === ActivityPanelModes.PIP;
      if (tmp10) {
        tmp10 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== tmp;
        const tmp13 = ref === VoicePanelModes.PIP || embeddedActivityLocationChannelId !== tmp;
      }
      if (result) {
        result = tmp10;
      }
      return result;
    }
    obj = ChannelStore;
    obj3 = EmbeddedActivitiesStore;
  }, items1);
  let tmp10 = ref(17088)(channelId);
  const first1 = current(noop.useState(() => ref(closure_2[16])((fn) => fn(), 1000, { leading: true })), 1)[0];
  const items2 = [first1];
  const layoutEffect = noop.useLayoutEffect(() => () => first1.cancel(), items2);
  const obj2 = obj4(504);
  let tmp5 = ref;
  [tmp14, c7] = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  let obj3 = { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores };
  let tmp13 = current(noop.useState(() => closure_2.getTargetDimensions(ref)), 2);
  ({ participant, dimensions } = ref(17089)(channelId, layoutManager, focusedId, current, { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores }));
  obj4 = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (participant != null) {
    id = participant.id;
  }
  obj4.id = id;
  obj4.showSecondaryPIP = stateFromStores;
  const tmp15 = ref(17089)(channelId, layoutManager, focusedId, current, { connected, mode, focusedId, participantTargetDimensions: tmp14, selfHasVideo: tmp10, showSecondaryPIP: stateFromStores });
  obj4.mode = obj4(17090).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp10 });
  const tmp8Result = obj4(17090);
  let result = obj4(9501).cheapWorkletShallowEqual(obj4, ref.current);
  dependencyMap = !result;
  const effect = obj.useEffect(() => {
    if (closure_2) {
      ref.current = obj4;
    }
  });
  if (result) {
    obj4 = ref.current;
  }
  const items3 = [channelId, first1];
  const effect1 = obj.useEffect(() => {
    const items = [SpeakingStore, first1];
    const batchedStoreListener = new obj4(closure_2[11]).BatchedStoreListener(items, () => {
      const tmp = (() => {
        speakers = speakers.getSpeakers();
        const iter = speakers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (null != participant.getParticipant(closure_0, nextResult)) {
            iter.return();
            return nextResult;
          }
        }
      })();
      closure_0 = tmp;
      let tmp3 = tmp !== ref.current;
      if (tmp3) {
        tmp3 = null != tmp;
      }
      if (tmp3) {
        if (null == ref.current) {
          closure_4(tmp);
        } else {
          participant(() => closure_2_4(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items3);
  const items4 = [focusedId, layoutManager, tmp14];
  const effect2 = obj.useEffect(() => {
    _undefined((safeAreaState) => {
      targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    });
    return closure_2.subscribeFromItem(function updateParticipantDimensions() {
      _undefined((safeAreaState) => {
        targetDimensions = targetDimensions.getTargetDimensions(closure_1_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items4);
  tmp5(17092)(channelId, layoutManager, focusedId);
  return obj4;
};
