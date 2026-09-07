// Module ID: 16359
// Function ID: 16360
// Name: areGuildsBarFastListStatesEqual
// Dependencies: [2]
// Exports: default

// Module 16359 (areGuildsBarFastListStatesEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/areGuildsBarFastListStatesEqual.tsx");

export default function areGuildsBarFastListStatesEqual(version, version2) {
  return version.version === version2.version;
};
