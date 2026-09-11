// Module ID: 13129
// Function ID: 13130
// Name: getStreamURL
// Dependencies: [1920, 2]
// Exports: default

// Module 13129 (getStreamURL)
import Constants from "Constants" /* 1920 */;
import size from "module_2" /* 2 */;

const validStreamURL = Constants.validStreamURL;
const result = size.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};
