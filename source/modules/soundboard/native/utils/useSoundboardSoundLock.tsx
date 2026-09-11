// Module ID: 17155
// Function ID: 17156
// Name: useSoundboardSoundLock
// Dependencies: [19, 1371, 5065, 504, 7417, 4264, 17156, 7922, 7925, 4305, 10160, 1114, 2]
// Exports: useSoundboardSoundLock

// Module 17155 (useSoundboardSoundLock)
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4264 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7922 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7925 */;
import _modDef10160 from "module_10160" /* 10160 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 17156 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(5065).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  _require = sound;
  let BARTXV = dependencyMap;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const result = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, sound, channel);
  let obj2 = require("SoundboardUtils");
  const tmp4 = !result;
  const result1 = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
  let tmp6 = !result1;
  if (!result1) {
    tmp6 = sound.guildId !== channel.guild_id;
  }
  if (tmp6) {
    tmp6 = sound.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  importDefault = tmp6;
  const items1 = [tmp6, sound.available];
  if (result) {
    const obj4 = { isLocked: tmp4, lockedAccessibilityHint: undefined, onLockedPress: tmp8 };
    return obj4;
  } else if (tmp6) {
    const intl2 = tmp(1114).intl;
    BARTXV = tmp(1114).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.MDOXJR);
  }
};
