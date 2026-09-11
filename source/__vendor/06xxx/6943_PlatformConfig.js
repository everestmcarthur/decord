// Module ID: 6943
// Function ID: 6944
// Name: PlatformConfig
// Dependencies: [6944]

// Module 6943 (PlatformConfig)
import reactNativeVersion from "reactNativeVersion" /* 6944 */;

const obj = { defaultDrawDistance: 250, supportsOffsetCorrection: true, trackAverageRenderTimeForOffsetProjection: true, isRN083OrAbove: null, invertedTransformStyle: null, invertedTransformStyleHorizontal: null };
obj.isRN083OrAbove = reactNativeVersion.isRN083OrAbove();
const obj2 = { transform: null };
const items = [{ rotate: "180deg" }];
obj2.transform = items;
obj.invertedTransformStyle = obj2;
const obj3 = { transform: null };
const items1 = [{ rotate: "180deg" }];
obj3.transform = items1;
obj.invertedTransformStyleHorizontal = obj3;

export const PlatformConfig = obj;
