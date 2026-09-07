// Module ID: 17054
// Function ID: 17055
// Name: getUnitId
// Dependencies: [1434, 2]

// Module 17054 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1434 */;

const obj = { 1: null };
obj[1] = { enableMuteWarning: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default tmp2;
