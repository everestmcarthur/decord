// Module ID: 15312
// Function ID: 15313
// Name: track
// Dependencies: [573, 2]
// Exports: track

// Module 15312 (track)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  let obj = dispatcherDefault;
  obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};
