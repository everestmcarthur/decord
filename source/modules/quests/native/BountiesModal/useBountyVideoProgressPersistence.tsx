// Module ID: 15076
// Function ID: 15077
// Name: useBountyVideoProgressPersistence
// Dependencies: [32, 19, 7775, 5496, 11616, 15072, 11620, 2]
// Exports: useBountyVideoProgressPersistence

// Module 15076 (useBountyVideoProgressPersistence)
import BountyActionCreators from "BountyActionCreators" /* 11620 */;
import useBountiesModalTiming from "useBountiesModalTiming" /* 15072 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7775 */;

require = fn;
let QuestsExperimentLocations = fn(5496).QuestsExperimentLocations;
let closure_6 = { timestampSec: 0, maxTimestampSec: 0, duration: 0 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx");

export const useBountyVideoProgressPersistence = function useBountyVideoProgressPersistence(bountyId) {
  bountyId = bountyId.bountyId;
  const endMode = bountyId.endMode;
  noop = undefined;
  QuestsExperimentLocations = undefined;
  const bountiesExperience = bountyId(endMode[4]).useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  _slicedToArray = tmp2;
  const first = _slicedToArray(noop.useState(() => {
    if (closure_2) {
      let bountyVideoProgress = BountyStore.getBountyVideoProgress(bountyId);
      if (null != bountyVideoProgress) {
        if (endMode === useBountiesModalTiming.BountyVideoEndMode.LOOP) {
          const duration = bountyVideoProgress.duration;
          let tmp10 = duration > 0;
          if (tmp10) {
            tmp10 = tmp9 >= duration - 1;
          }
          return bountyVideoProgress;
        }
      }
      bountyVideoProgress = closure_6;
    } else {
      return closure_6;
    }
  }), 1)[0];
  noop = noop.useRef(0);
  noop.useRef(first.timestampSec);
  QuestsExperimentLocations = noop.useRef(first.maxTimestampSec);
  noop.useRef(first.duration);
  let obj2 = { initialProgress: first, handleProgress: null, flushProgress: null };
  const items = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  obj2.handleProgress = noop.useCallback((current, current2, current3) => {
    closure_4.current = current3;
    closure_5.current = current;
    closure_6.current = current2;
    let tmp = closure_2;
    if (closure_2) {
      tmp = current3 >= ref.current;
    }
    if (tmp) {
      ref.current = current3 + 1;
      const obj2 = { timestampSec: current3, maxTimestampSec: current, duration: current2 };
      const result = BountyActionCreators.setBountyVideoProgress(bountyId, obj2);
    }
  }, items);
  const items1 = [bountiesExperience.ownedByVerticalScrollExperiment || bountiesExperience.stage1Enabled, bountyId];
  obj2.flushProgress = noop.useCallback(() => {
    if (closure_2) {
      const obj2 = { timestampSec: ref2.current, maxTimestampSec: ref3.current, duration: ref4.current };
      const result = BountyActionCreators.setBountyVideoProgress(bountyId, obj2);
    }
  }, items1);
  return obj2;
};
