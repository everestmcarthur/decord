// Module ID: 14064
// Function ID: 14065
// Name: getWmfGpuEncode
// Dependencies: [1433, 2]
// Exports: getWmfGpuEncode

// Module 14064 (getWmfGpuEncode)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-12-wmf-gpu-encode", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncode.tsx");

export const getWmfGpuEncode = function getWmfGpuEncode(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
