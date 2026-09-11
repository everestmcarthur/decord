// Module ID: 12618
// Function ID: 12619
// Name: GuildPowerupsImage
// Dependencies: [4599, 21, 4607, 504, 1116, 8903, 5639, 2]
// Exports: default

// Module 12618 (GuildPowerupsImage)
import initialize from "initialize" /* 504 */;
import FastImageDefault from "FastImage" /* 5639 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8903 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = closure_5();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        const obj3 = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj3.style = items1;
        obj3.url = imageUrl;
        let tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  const obj4 = { style: null, source: { uri: imageUrl } };
  const items2 = [tmp.image, style];
  obj4.style = items2;
  tmp6 = jsx(FastImageDefault, { style: null, source: { uri: imageUrl } });
};
