// Module ID: 13021
// Function ID: 13022
// Name: isOnMetaQuest
// Dependencies: [1074, 2]
// Exports: default

// Module 13021 (isOnMetaQuest)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};
