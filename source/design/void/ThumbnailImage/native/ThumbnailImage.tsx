// Module ID: 14174
// Function ID: 14175
// Name: ThumbnailImage
// Dependencies: [19, 17, 21, 1115, 14175, 2]
// Exports: default

// Module 14174 (ThumbnailImage)
import noop from "module_19" /* 19 */;

let _default = fn(17).Image;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  _default = fn(14175).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/ThumbnailImage/native/ThumbnailImage.tsx");

export default function LocalImageThumbnail(arg0) {
  const merged = Object.assign(arg0);
  return <_default />;
};
