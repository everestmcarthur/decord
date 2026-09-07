// Module ID: 17175
// Function ID: 17176
// Name: getDrawerSpec
// Dependencies: [10998, 2]
// Exports: getDrawerSpec

// Module 17175 (getDrawerSpec)
import set from "set" /* 2 */;
import tDefault from "t" /* 10998 */;

function getDrawerSpec(height, top) {
  const diff = height - top;
  return { minHeight: tDefault(0.65 * diff), maxHeight: diff };
}
getDrawerSpec.__closure = { roundToNearestPixel: tDefault };
getDrawerSpec.__workletHash = 3647675988513;
getDrawerSpec.__initData = { code: "function getDrawerSpec_VoicePanelControlUtilsTsx1(height,top){const{roundToNearestPixel}=this.__closure;const maxHeight=height-top;return{minHeight:roundToNearestPixel(maxHeight*0.65),maxHeight:maxHeight};}" };
const obj = { roundToNearestPixel: tDefault };
const result = set.fileFinishedImporting("modules/voice_panel/native/controls/utils/VoicePanelControlUtils.tsx");

export { getDrawerSpec };
