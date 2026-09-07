// Module ID: 14102
// Function ID: 14103
// Name: LocalImageThumbnail
// Dependencies: [19, 17, 21, 1115, 14103, 2]
// Exports: default

// Module 14102 (LocalImageThumbnail)
import noopAll from "noop" /* 19 */;
import { Image as _default } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;

noopAll;
if (set.isAndroid()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
