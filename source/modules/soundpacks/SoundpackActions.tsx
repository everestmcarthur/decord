// Module ID: 17499
// Function ID: 17500
// Name: SoundpackActions
// Dependencies: [10033, 1074, 1242, 573, 2]
// Exports: setSoundpack

// Module 17499 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import SoundpackStore from "SoundpackStore" /* 10033 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() });
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  DispatcherDefault.dispatch({ type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name });
};
