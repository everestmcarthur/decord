// Module ID: 13040
// Function ID: 13041
// Name: getStreamURL
// Dependencies: [1920, 2]
// Exports: default

// Module 13040 (getStreamURL)
import set from "set" /* 2 */;
import items3 from "items3" /* 1920 */;

const validStreamURL = items3.validStreamURL;
const result = set.fileFinishedImporting("modules/activities/utils/getStreamURL.tsx");

export default function getStreamURL(url) {
  if (null != url) {
    if (null != url.url) {
      if (validStreamURL.test(url.url)) {
        return url.url;
      }
    }
  }
};
