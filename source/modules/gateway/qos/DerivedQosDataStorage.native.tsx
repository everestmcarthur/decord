// Module ID: 14249
// Function ID: 14250
// Name: DerivedQosDataStorage
// Dependencies: [3, 13694, 2]
// Exports: setDerivedQosData

// Module 14249 (DerivedQosDataStorage)
import LoggerDefault from "Logger" /* 3 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13694 */;

const logger = new LoggerDefault("DerivedQosDataStorage");
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/qos/DerivedQosDataStorage.native.tsx");

export const setDerivedQosData = function setDerivedQosData(id, qosToken) {
  logger.info("setDerivedQosData: userId: ", { userId: id, dataPresent: null != qosToken });
  if (null != id) {
    NativeFastConnectModuleDefault.setDerivedQosData(id, qosToken);
  }
};
