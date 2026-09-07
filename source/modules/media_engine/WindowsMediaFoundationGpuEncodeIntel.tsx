// Module ID: 14065
// Function ID: 14066
// Name: getWmfGpuEncodeIntel
// Dependencies: [1433, 2]
// Exports: getWmfGpuEncodeIntel

// Module 14065 (getWmfGpuEncodeIntel)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-01-wmf-gpu-encode-intel", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/WindowsMediaFoundationGpuEncodeIntel.tsx");

export const getWmfGpuEncodeIntel = function getWmfGpuEncodeIntel(MediaEngineStore) {
  return config.getConfig({ location: MediaEngineStore });
};
