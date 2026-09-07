// Module ID: 15266
// Function ID: 15267
// Name: DEFAULT_FONT_SCALE_STORE_STATE
// Dependencies: [1115, 10125, 1244, 2]

// Module 15266 (DEFAULT_FONT_SCALE_STORE_STATE)
import enforcingDefault from "enforcing" /* 10125 */;
import set from "set" /* 1115 */;
import identity from "identity" /* 1244 */;

if (set.isAndroid()) {
  let customFontScale = enforcingDefault.getCustomFontScale();
  const importDefaultResult = enforcingDefault;
} else {
  customFontScale = { fontScale: 1, isClassicChatFontScaleEnabled: false };
}
const obj = { persistedFontScale: customFontScale.fontScale, persistedIsClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled, fontScale: customFontScale.fontScale, isClassicChatFontScaleEnabled: customFontScale.isClassicChatFontScaleEnabled };
const withEqualityFn = identity.createWithEqualityFn(() => obj);
const result = set.fileFinishedImporting("modules/user_settings/appearance/native/FontScaleStore.tsx");

export const DEFAULT_FONT_SCALE_STORE_STATE = obj;
export const useFontScaleStore = withEqualityFn;
