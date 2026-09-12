// Module ID: 14282
// Function ID: 14283
// Name: DerivedQosDataStorage
// Dependencies: [3, 13726, 2]
// Exports: setDerivedQosData

// Module 14282 (DerivedQosDataStorage)
import LoggerDefault from "Logger" /* 3 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13726 */;

const logger = new LoggerDefault("DerivedQosDataStorage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  logger.info("setDerivedQosData: userId: ", { userId: id, dataPresent: null != qosToken });
  if (null != id) {
    NativeFastConnectModuleDefault.setDerivedQosData(id, qosToken);
  }
};
