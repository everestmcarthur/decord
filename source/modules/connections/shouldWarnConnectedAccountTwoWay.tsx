// Module ID: 14967
// Function ID: 14968
// Name: set
// Dependencies: [1074, 2]
// Exports: default

// Module 14967 (set)
import ME from "ME" /* 1074 */;
import set from "set" /* 2 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = ME.PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};
