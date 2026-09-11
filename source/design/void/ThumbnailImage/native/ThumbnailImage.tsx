// Module ID: 14152
// Function ID: 14153
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1115, 14153, 2]
// Exports: default

// Module 14152 (ThumbnailImage)
import noop from "module_19" /* 19 */;

let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  _default = fn(14153).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
