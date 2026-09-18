// Module ID: 9648
// Function ID: 9649
// Name: getPlatform
// Dependencies: [1895, 2]
// Exports: default

// Module 9648 (getPlatform)
import Server from "Server" /* 1895 */;
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
