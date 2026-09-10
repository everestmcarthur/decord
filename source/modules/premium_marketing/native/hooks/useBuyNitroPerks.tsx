// Module ID: 13387
// Function ID: 13388
// Name: useBuyNitroPerks
// Dependencies: [19, 7446, 1373, 672, 7407, 4231, 1114, 8790, 13388, 5144, 9403, 13389, 13390, 5120, 9409, 13392, 9407, 13393, 9253, 13394, 9405, 13395, 8695, 10146, 13396, 12558, 13397, 13398, 10142, 13400, 5085, 13401, 13402, 13404, 13405, 13407, 13408, 8750, 13410, 8894, 2]
// Exports: default

// Module 13387 (useBuyNitroPerks)
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4231 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5144 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7407 */;
import ReactionIcon from "ReactionIcon" /* 8790 */;
import UploadIcon from "UploadIcon" /* 9403 */;
import _modDef13388 from "module_13388" /* 13388 */;
import _modDef13389 from "module_13389" /* 13389 */;
import AppIconUtils from "AppIconUtils" /* 13390 */;
import _modDef13392 from "module_13392" /* 13392 */;
import _modDef13394 from "module_13394" /* 13394 */;
import _modDef13395 from "module_13395" /* 13395 */;
import _modDef13396 from "module_13396" /* 13396 */;
import _modDef13397 from "module_13397" /* 13397 */;
import _modDef13400 from "module_13400" /* 13400 */;
import _modDef13401 from "module_13401" /* 13401 */;
import _modDef13404 from "module_13404" /* 13404 */;
import _modDef13407 from "module_13407" /* 13407 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_672" /* 672 */;

const ChatIcon = tmp(5085);
const AppsIcon = tmp(5120);
const NitroWheelIcon = tmp(8695);
const TrophyIcon = tmp(8750);
const TagIcon = tmp(8894);
const ScreenStreamIcon = tmp(9253);
const SuperReactionIcon = tmp(9405);
const BoostGemIcon = tmp(9407);
const UserSquareIcon = tmp(9409);
const VideoIcon = tmp(10142);
const StickerIcon = tmp(10146);
const SoundboardIcon = tmp(12558);
const DoorEnterIcon = tmp(13398);
const ServerGridIcon = tmp(13402);
const PaintPaletteIcon = tmp(13405);
const LettersIcon = tmp(13408);
const SparklesIcon = tmp(13410);
require = fn;
const Gradients = fn(7446).Gradients;
const PremiumConstants = fn(1373);
({ FractionalPremiumStates: closure_4, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: hasOwnProperty, PremiumTypes: metroRequire } = PremiumConstants);
let n = n_mod;
let items = [...Gradients.PREMIUM_TIER_2];
let closure_7 = n.scale(items.reverse()).mode("lab");
let n = n_mod;
let items1 = [...Gradients.PREMIUM_TIER_0];
const scaleResult = n.scale(items.reverse());
let closure_8 = n.scale(items1.reverse()).mode("lab");
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPerks.tsx");

export default function useBuyNitroPerks(arg0) {
  closure_0 = arg0;
  let tmp = useFractionalPremiumInfoDefault({ forceFetch: true }).fractionalState === constants.FP_ONLY;
  importDefault = tmp;
  let items = [arg0, tmp];
  return noop.useMemo(() => {
    const maxFileSizeForPremiumType = PremiumUtils.getMaxFileSizeForPremiumType(TIER_2.TIER_2, { useSpace: false });
    let obj2 = { id: "emoji", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t["R2IV/Q"]);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(util.t["3cyhe3"]);
    obj2.IconComponent = ReactionIcon.ReactionIcon;
    const tmp3 = TIER_2;
    obj2.detail = { image: _modDef13388, description: util.t["3SUJLd"] };
    let items = [obj2, , , , , , , , , , , , , , , ];
    const obj4 = { id: "uploads", label: null, labelBasic: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    let obj3 = { image: _modDef13388, description: util.t["3SUJLd"] };
    const obj6 = { legacyCopy: null, rolloutCopy: null };
    const intl3 = util.intl;
    obj6.legacyCopy = intl3.string(util.t["3BtVbk"]);
    const intl4 = util.intl;
    obj6.rolloutCopy = intl4.formatToPlainString(util.t.vjcKsF, { maxFileSize: maxFileSizeForPremiumType });
    obj4.label = NitroFileUploadExperiments.getNitroFileUploadRolloutCopy(obj6);
    const intl5 = util.intl;
    obj4.labelBasic = intl5.string(util.t["Zs49/V"]);
    const intl6 = util.intl;
    obj4.subLabel = intl6.string(util.t["8AhJqy"]);
    obj4.IconComponent = UploadIcon.UploadIcon;
    const obj7 = { image: _modDef13389, description: null };
    const obj9 = { legacyCopy: null, rolloutCopy: null };
    const intl7 = util.intl;
    obj9.legacyCopy = intl7.string(util.t.i1UuMk);
    const intl8 = util.intl;
    obj9.rolloutCopy = intl8.formatToPlainString(util.t.PvqncD, { maxFileSize: maxFileSizeForPremiumType });
    obj7.description = NitroFileUploadExperiments.getNitroFileUploadRolloutCopy(obj9);
    obj4.detail = obj7;
    items[1] = obj4;
    if (obj10.isAppIconsSupported()) {
      const obj11 = { id: "custom-app-icons", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl9 = util.intl;
      obj11.label = intl9.string(util.t.OuItFi);
      const intl10 = util.intl;
      obj11.subLabel = intl10.string(util.t.mPyrE6);
      obj11.IconComponent = AppsIcon.AppsIcon;
      let items1 = [obj11];
      let items2 = items1;
    } else {
      items2 = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    const obj12 = { id: "profiles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl11 = util.intl;
    obj12.label = intl11.string(util.t["Gv/rQ6"]);
    const intl12 = util.intl;
    obj12.subLabel = intl12.string(util.t["t/Mvdj"]);
    obj12.IconComponent = UserSquareIcon.UserSquareIcon;
    obj10 = AppIconUtils;
    obj12.detail = { image: _modDef13392, description: util.t.kWcDK8 };
    items[arraySpreadResult] = obj12;
    if (closure_1) {
      let items3 = [];
    } else {
      const obj14 = { id: "boosts", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
      const intl13 = util.intl;
      const obj15 = { numBoosts };
      obj14.label = intl13.formatToPlainString(util.t.DbkNFj, obj15);
      const intl14 = util.intl;
      obj14.subLabel = intl14.string(util.t["n+DGY/"]);
      obj14.IconComponent = BoostGemIcon.BoostGemIcon;
      const obj16 = { image: tmp5(13393), description: util.t.jsyNHm };
      obj14.detail = obj16;
      items3 = [obj14];
    }
    const arraySpreadResult7 = HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
    const obj17 = { id: "streaming", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl15 = util.intl;
    obj17.label = intl15.string(util.t.RSXQYO);
    const intl16 = util.intl;
    obj17.subLabel = intl16.string(util.t.ymCPxp);
    obj17.IconComponent = ScreenStreamIcon.ScreenStreamIcon;
    const obj13 = { image: _modDef13392, description: util.t.kWcDK8 };
    const tmp7 = closure_1;
    obj17.detail = { image: _modDef13394, description: util.t.ymCPxp };
    items[arraySpreadResult7] = obj17;
    const sum = arraySpreadResult7 + 1;
    const obj19 = { id: "super-reactions", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl17 = util.intl;
    obj19.label = intl17.string(util.t["uZt5q/"]);
    const intl18 = util.intl;
    obj19.subLabel = intl18.string(util.t.ZK3ZoX);
    obj19.IconComponent = SuperReactionIcon.SuperReactionIcon;
    const obj18 = { image: _modDef13394, description: util.t.ymCPxp };
    obj19.detail = { image: _modDef13395, description: util.t.A0U9fk };
    items[sum] = obj19;
    if (tmp7) {
      let items4 = [];
    } else {
      const obj21 = { id: "badge", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl19 = util.intl;
      obj21.label = intl19.string(util.t.SS87rQ);
      const intl20 = util.intl;
      obj21.subLabel = intl20.string(util.t.oD6CRr);
      obj21.IconComponent = NitroWheelIcon.NitroWheelIcon;
      items4 = [obj21];
    }
    const arraySpreadResult8 = HermesBuiltin.arraySpread(items4, sum + 1);
    const obj22 = { id: "stickers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl21 = util.intl;
    obj22.label = intl21.string(util.t.tzdIwI);
    const intl22 = util.intl;
    obj22.subLabel = intl22.string(util.t.hJG8ZN);
    obj22.IconComponent = StickerIcon.StickerIcon;
    const obj20 = { image: _modDef13395, description: util.t.A0U9fk };
    obj22.detail = { image: _modDef13396, description: util.t.FXlU24 };
    items[arraySpreadResult8] = obj22;
    const sum1 = arraySpreadResult8 + 1;
    const obj24 = { id: "custom-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl23 = util.intl;
    obj24.label = intl23.string(util.t.LWsArT);
    const intl24 = util.intl;
    obj24.subLabel = intl24.string(util.t["4lSyCY"]);
    obj24.IconComponent = SoundboardIcon.SoundboardIcon;
    const obj23 = { image: _modDef13396, description: util.t.FXlU24 };
    obj24.detail = { image: _modDef13397, description: util.t["4lSyCY"] };
    items[sum1] = obj24;
    const sum2 = sum1 + 1;
    const obj26 = { id: "entrance-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl25 = util.intl;
    obj26.label = intl25.string(util.t["f4M+H9"]);
    const intl26 = util.intl;
    obj26.subLabel = intl26.string(util.t["7ZCYvC"]);
    obj26.IconComponent = DoorEnterIcon.DoorEnterIcon;
    items[sum2] = obj26;
    const sum3 = sum2 + 1;
    const obj27 = { id: "video-backgrounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl27 = util.intl;
    obj27.label = intl27.string(util.t.NaGpTf);
    const intl28 = util.intl;
    obj27.subLabel = intl28.string(util.t["A8O/Qw"]);
    obj27.IconComponent = VideoIcon.VideoIcon;
    const obj25 = { image: _modDef13397, description: util.t["4lSyCY"] };
    obj27.detail = { image: _modDef13400, description: util.t["A8O/Qw"] };
    items[sum3] = obj27;
    const sum4 = sum3 + 1;
    const obj29 = { id: "longer-messages", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl29 = util.intl;
    obj29.label = intl29.string(util.t.BUScid);
    const intl30 = util.intl;
    obj29.subLabel = intl30.string(util.t.vN6XpQ);
    obj29.IconComponent = ChatIcon.ChatIcon;
    const obj28 = { image: _modDef13400, description: util.t["A8O/Qw"] };
    obj29.detail = { image: _modDef13401, description: util.t.vN6XpQ };
    items[sum4] = obj29;
    const sum5 = sum4 + 1;
    const obj31 = { id: "more-servers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl31 = util.intl;
    obj31.label = intl31.string(util.t.Bv8Pfk);
    const intl32 = util.intl;
    obj31.subLabel = intl32.string(util.t.JMfaTU);
    obj31.IconComponent = ServerGridIcon.ServerGridIcon;
    const obj30 = { image: _modDef13401, description: util.t.vN6XpQ };
    obj31.detail = { image: _modDef13404, description: util.t.JMfaTU };
    items[sum5] = obj31;
    const sum6 = sum5 + 1;
    const obj33 = { id: "client-themes", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl33 = util.intl;
    obj33.label = intl33.string(util.t.kWM48G);
    const intl34 = util.intl;
    obj33.subLabel = intl34.string(util.t.CjRASJ);
    obj33.IconComponent = PaintPaletteIcon.PaintPaletteIcon;
    const obj32 = { image: _modDef13404, description: util.t.JMfaTU };
    obj33.detail = { image: _modDef13407, description: util.t.jBTTws };
    items[sum6] = obj33;
    const sum7 = sum6 + 1;
    const obj35 = { id: "display-name-styles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl35 = util.intl;
    obj35.label = intl35.string(util.t.OLtTrt);
    const intl36 = util.intl;
    obj35.subLabel = intl36.string(util.t["di/pXR"]);
    obj35.IconComponent = LettersIcon.LettersIcon;
    items[sum7] = obj35;
    const sum8 = sum7 + 1;
    const obj36 = { id: "permadecos", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl37 = util.intl;
    obj36.label = intl37.string(util.t.L14NZN);
    const intl38 = util.intl;
    obj36.subLabel = intl38.string(util.t.eCZkAI);
    obj36.IconComponent = TrophyIcon.TrophyIcon;
    items[sum8] = obj36;
    const sum9 = sum8 + 1;
    const obj37 = { id: "early-access", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl39 = util.intl;
    obj37.label = intl39.string(util.t.EYxi0o);
    const intl40 = util.intl;
    obj37.subLabel = intl40.string(util.t.M9AIt1);
    obj37.IconComponent = SparklesIcon.SparklesIcon;
    items[sum9] = obj37;
    const obj38 = { id: "member-pricing", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl41 = util.intl;
    obj38.label = intl41.string(util.t["H4/NBN"]);
    const intl42 = util.intl;
    obj38.subLabel = intl42.string(util.t.wo3D3T);
    obj38.IconComponent = TagIcon.TagIcon;
    items[sum9 + 1] = obj38;
    closure_1 = tmp21;
    let mapped = items.map((includedInNitroBasic, index) => {
      const result = index / mapped.length;
      const result1 = (index + 1) / mapped.length;
      const items = [closure_2_7(result).hex(), ];
      const obj = closure_2_7(result);
      items[1] = closure_2_7(result1).hex();
      const obj2 = closure_2_7(result1);
      const items1 = [closure_2_8(result).hex(), ];
      const obj3 = closure_2_8(result);
      items1[1] = closure_2_8(result1).hex();
      let tmp4 = closure_1;
      if (closure_1) {
        tmp4 = !includedInNitroBasic.includedInNitroBasic;
      }
      if (closure_1) {
        if (null != includedInNitroBasic.labelBasic) {
          let label = includedInNitroBasic.labelBasic;
        }
        const obj5 = {};
        const merged = Object.assign(includedInNitroBasic);
        obj5.label = label;
        obj5.iconGradient = items;
        obj5.iconGradientBasic = items1;
        obj5.disabled = tmp4;
        return obj5;
      }
      label = includedInNitroBasic.label;
    });
    const obj39 = { kind: "section-header", id: "explore-perks-header", title: null };
    const intl43 = util.intl;
    obj39.title = intl43.string(util.t["eQX+gg"]);
    if (closure_0 === tmp3.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj39];
        mapped = found;
        HermesBuiltin.arraySpread(found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
        let items6 = items5;
      } else {
        items6 = [obj39, ];
        const arraySpreadResult10 = HermesBuiltin.arraySpread(found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
        const obj40 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl44 = util.intl;
        obj40.title = intl44.string(util.t.YCZldK);
        items6[arraySpreadResult10] = obj40;
        mapped = found1;
        HermesBuiltin.arraySpread(found1.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), arraySpreadResult10 + 1);
      }
      return items6;
    } else {
      const items7 = [obj39];
      HermesBuiltin.arraySpread(mapped.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
      return items7;
    }
    const obj34 = { image: _modDef13407, description: util.t.jBTTws };
  }, items);
};
