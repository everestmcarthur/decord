// Module ID: 14558
// Function ID: 14559
// Name: CertifiedDeviceActionCreators
// Dependencies: [573, 2]
// Exports: setCertifiedDevices

// Module 14558 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  DispatcherDefault.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: id, devices });
};
