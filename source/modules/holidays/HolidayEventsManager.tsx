// Module ID: 17589
// Function ID: 17590
// Name: HolidayEventsManager
// Dependencies: [1235, 10043, 10044, 7228, 17590, 17594, 17595, 17596, 10045, 2]

// Module 17589 (HolidayEventsManager)
import getSoundsForPackDefault from "getSoundsForPack" /* 10045 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17590 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 17594 */;
import SoundpackActions from "SoundpackActions" /* 17595 */;
import setIncomingRingtone from "setIncomingRingtone" /* 17596 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import SoundpackStore from "SoundpackStore" /* 10043 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

require = fn;
const Soundpacks = fn(10044).Soundpacks;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!HolidayEventsConfigDefault.isDesktopOnly) {
        applyArgumentsResult.updateSoundpack();
        applyArgumentsResult.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HolidayEventsManager.prototype;
prototype["updateSoundpack"] = function updateSoundpack() {
  const soundpack = SoundpackStore.getSoundpack();
  const lastSoundpackExperimentId = SoundpackStore.getLastSoundpackExperimentId();
  const experiment = HolidayEventsConfigDefault.experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = HolidayEventsUtilsDefault.isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(17590).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(17590).soundpack;
    }
    if (isEligibleResult) {
      SoundpackActions.setSoundpack(tmp3(17590).soundpack, name);
    }
  } else {
    SoundpackActions.setSoundpack(Soundpacks.CLASSIC, null);
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundsForPackDefault;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
    }
    tmpResultResult = getSoundsForPackDefault(SoundpackStore.getSoundpack());
  } else {
    setIncomingRingtone.setIncomingRingtone("call_ringing", "call_ringing.mp3");
  }
};
const holidayEventsManager = new HolidayEventsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;
