// Module ID: 12189
// Function ID: 12190
// Name: FrecencySectionStoreActionCreators
// Dependencies: [573, 2]
// Exports: setFrecencySectionSelection

// Module 12189 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  DispatcherDefault.dispatch({ type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS });
};
