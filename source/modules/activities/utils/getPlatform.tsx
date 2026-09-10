// Module ID: 9442
// Function ID: 9443
// Name: getPlatform
// Dependencies: [1894, 2]
// Exports: default

// Module 9442 (getPlatform)
import Server from "Server" /* 1894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPlatform.tsx");

export default function getPlatform(arg0) {
  if ("android" === arg0) {
    return Server.EmbeddedActivitySupportedPlatforms.ANDROID;
  } else if ("ios" === arg0) {
    return Server.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    return Server.EmbeddedActivitySupportedPlatforms.WEB;
  }
};
