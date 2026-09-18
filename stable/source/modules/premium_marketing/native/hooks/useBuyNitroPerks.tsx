// Module ID: 13364
// Function ID: 13365
// Name: useBuyNitroPerks
// Dependencies: [19, 7432, 1373, 672, 7393, 1114, 8763, 13365, 9377, 13366, 13367, 5106, 9383, 13369, 9381, 13370, 9227, 13371, 9379, 13372, 8668, 10119, 13373, 12532, 13374, 13375, 10115, 13377, 5071, 13378, 13379, 13381, 13382, 13384, 13385, 8723, 13387, 8868, 2]
// Exports: default

// Module 13364 (useBuyNitroPerks)
import util from "util" /* 1114 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7393 */;
import ReactionIcon from "ReactionIcon" /* 8763 */;
import UploadIcon from "UploadIcon" /* 9377 */;
import _modDef13365 from "module_13365" /* 13365 */;
import _modDef13366 from "module_13366" /* 13366 */;
import AppIconUtils from "AppIconUtils" /* 13367 */;
import _modDef13369 from "module_13369" /* 13369 */;
import _modDef13371 from "module_13371" /* 13371 */;
import _modDef13372 from "module_13372" /* 13372 */;
import _modDef13373 from "module_13373" /* 13373 */;
import _modDef13374 from "module_13374" /* 13374 */;
import _modDef13377 from "module_13377" /* 13377 */;
import _modDef13378 from "module_13378" /* 13378 */;
import _modDef13381 from "module_13381" /* 13381 */;
import _modDef13384 from "module_13384" /* 13384 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_672" /* 672 */;

const ChatIcon = tmp(5071);
const AppsIcon = tmp(5106);
const NitroWheelIcon = tmp(8668);
const TrophyIcon = tmp(8723);
const TagIcon = tmp(8868);
const ScreenStreamIcon = tmp(9227);
const SuperReactionIcon = tmp(9379);
const BoostGemIcon = tmp(9381);
const UserSquareIcon = tmp(9383);
const VideoIcon = tmp(10115);
const StickerIcon = tmp(10119);
const SoundboardIcon = tmp(12532);
const DoorEnterIcon = tmp(13375);
const ServerGridIcon = tmp(13379);
const PaintPaletteIcon = tmp(13382);
const LettersIcon = tmp(13385);
const SparklesIcon = tmp(13387);
require = fn;
const Gradients = fn(7432).Gradients;
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
    let obj = { id: "emoji", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["R2IV/Q"]);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["3cyhe3"]);
    obj.IconComponent = ReactionIcon.ReactionIcon;
    obj.detail = { image: _modDef13365, description: util.t["3SUJLd"] };
    let items = [obj, , , , , , , , , , , , , , , ];
    let obj3 = { id: "uploads", label: null, labelBasic: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t["3BtVbk"]);
    const intl4 = util.intl;
    obj3.labelBasic = intl4.string(util.t["Zs49/V"]);
    const intl5 = util.intl;
    obj3.subLabel = intl5.string(util.t["8AhJqy"]);
    obj3.IconComponent = UploadIcon.UploadIcon;
    let obj2 = { image: _modDef13365, description: util.t["3SUJLd"] };
    obj3.detail = { image: _modDef13366, description: util.t.i1UuMk };
    items[1] = obj3;
    const obj4 = { image: _modDef13366, description: util.t.i1UuMk };
    if (obj5.isAppIconsSupported()) {
      const obj6 = { id: "custom-app-icons", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl6 = util.intl;
      obj6.label = intl6.string(util.t.OuItFi);
      const intl7 = util.intl;
      obj6.subLabel = intl7.string(util.t.mPyrE6);
      obj6.IconComponent = AppsIcon.AppsIcon;
      let items1 = [obj6];
      let items2 = items1;
    } else {
      items2 = [];
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, 2);
    const obj7 = { id: "profiles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl8 = util.intl;
    obj7.label = intl8.string(util.t["Gv/rQ6"]);
    const intl9 = util.intl;
    obj7.subLabel = intl9.string(util.t["t/Mvdj"]);
    obj7.IconComponent = UserSquareIcon.UserSquareIcon;
    obj5 = AppIconUtils;
    obj7.detail = { image: _modDef13369, description: util.t.kWcDK8 };
    items[arraySpreadResult] = obj7;
    if (closure_1) {
      let items3 = [];
    } else {
      const obj9 = { id: "boosts", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
      const intl10 = util.intl;
      const obj10 = { numBoosts };
      obj9.label = intl10.formatToPlainString(util.t.DbkNFj, obj10);
      const intl11 = util.intl;
      obj9.subLabel = intl11.string(util.t["n+DGY/"]);
      obj9.IconComponent = BoostGemIcon.BoostGemIcon;
      const obj11 = { image: tmp3(13370), description: util.t.jsyNHm };
      obj9.detail = obj11;
      items3 = [obj9];
    }
    const arraySpreadResult7 = HermesBuiltin.arraySpread(items3, arraySpreadResult + 1);
    const obj12 = { id: "streaming", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl12 = util.intl;
    obj12.label = intl12.string(util.t.RSXQYO);
    const intl13 = util.intl;
    obj12.subLabel = intl13.string(util.t.ymCPxp);
    obj12.IconComponent = ScreenStreamIcon.ScreenStreamIcon;
    const obj8 = { image: _modDef13369, description: util.t.kWcDK8 };
    const tmp5 = closure_1;
    obj12.detail = { image: _modDef13371, description: util.t.ymCPxp };
    items[arraySpreadResult7] = obj12;
    const sum = arraySpreadResult7 + 1;
    const obj14 = { id: "super-reactions", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl14 = util.intl;
    obj14.label = intl14.string(util.t["uZt5q/"]);
    const intl15 = util.intl;
    obj14.subLabel = intl15.string(util.t.ZK3ZoX);
    obj14.IconComponent = SuperReactionIcon.SuperReactionIcon;
    const obj13 = { image: _modDef13371, description: util.t.ymCPxp };
    obj14.detail = { image: _modDef13372, description: util.t.A0U9fk };
    items[sum] = obj14;
    if (tmp5) {
      let items4 = [];
    } else {
      const obj16 = { id: "badge", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
      const intl16 = util.intl;
      obj16.label = intl16.string(util.t.SS87rQ);
      const intl17 = util.intl;
      obj16.subLabel = intl17.string(util.t.oD6CRr);
      obj16.IconComponent = NitroWheelIcon.NitroWheelIcon;
      items4 = [obj16];
    }
    const arraySpreadResult8 = HermesBuiltin.arraySpread(items4, sum + 1);
    const obj17 = { id: "stickers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl18 = util.intl;
    obj17.label = intl18.string(util.t.tzdIwI);
    const intl19 = util.intl;
    obj17.subLabel = intl19.string(util.t.hJG8ZN);
    obj17.IconComponent = StickerIcon.StickerIcon;
    const obj15 = { image: _modDef13372, description: util.t.A0U9fk };
    obj17.detail = { image: _modDef13373, description: util.t.FXlU24 };
    items[arraySpreadResult8] = obj17;
    const sum1 = arraySpreadResult8 + 1;
    const obj19 = { id: "custom-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl20 = util.intl;
    obj19.label = intl20.string(util.t.LWsArT);
    const intl21 = util.intl;
    obj19.subLabel = intl21.string(util.t["4lSyCY"]);
    obj19.IconComponent = SoundboardIcon.SoundboardIcon;
    const obj18 = { image: _modDef13373, description: util.t.FXlU24 };
    obj19.detail = { image: _modDef13374, description: util.t["4lSyCY"] };
    items[sum1] = obj19;
    const sum2 = sum1 + 1;
    const obj21 = { id: "entrance-sounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl22 = util.intl;
    obj21.label = intl22.string(util.t["f4M+H9"]);
    const intl23 = util.intl;
    obj21.subLabel = intl23.string(util.t["7ZCYvC"]);
    obj21.IconComponent = DoorEnterIcon.DoorEnterIcon;
    items[sum2] = obj21;
    const sum3 = sum2 + 1;
    const obj22 = { id: "video-backgrounds", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: true, detail: null };
    const intl24 = util.intl;
    obj22.label = intl24.string(util.t.NaGpTf);
    const intl25 = util.intl;
    obj22.subLabel = intl25.string(util.t["A8O/Qw"]);
    obj22.IconComponent = VideoIcon.VideoIcon;
    const obj20 = { image: _modDef13374, description: util.t["4lSyCY"] };
    obj22.detail = { image: _modDef13377, description: util.t["A8O/Qw"] };
    items[sum3] = obj22;
    const sum4 = sum3 + 1;
    const obj24 = { id: "longer-messages", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl26 = util.intl;
    obj24.label = intl26.string(util.t.BUScid);
    const intl27 = util.intl;
    obj24.subLabel = intl27.string(util.t.vN6XpQ);
    obj24.IconComponent = ChatIcon.ChatIcon;
    const obj23 = { image: _modDef13377, description: util.t["A8O/Qw"] };
    obj24.detail = { image: _modDef13378, description: util.t.vN6XpQ };
    items[sum4] = obj24;
    const sum5 = sum4 + 1;
    const obj26 = { id: "more-servers", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl28 = util.intl;
    obj26.label = intl28.string(util.t.Bv8Pfk);
    const intl29 = util.intl;
    obj26.subLabel = intl29.string(util.t.JMfaTU);
    obj26.IconComponent = ServerGridIcon.ServerGridIcon;
    const obj25 = { image: _modDef13378, description: util.t.vN6XpQ };
    obj26.detail = { image: _modDef13381, description: util.t.JMfaTU };
    items[sum5] = obj26;
    const sum6 = sum5 + 1;
    const obj28 = { id: "client-themes", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl30 = util.intl;
    obj28.label = intl30.string(util.t.kWM48G);
    const intl31 = util.intl;
    obj28.subLabel = intl31.string(util.t.CjRASJ);
    obj28.IconComponent = PaintPaletteIcon.PaintPaletteIcon;
    const obj27 = { image: _modDef13381, description: util.t.JMfaTU };
    obj28.detail = { image: _modDef13384, description: util.t.jBTTws };
    items[sum6] = obj28;
    const sum7 = sum6 + 1;
    const obj30 = { id: "display-name-styles", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl32 = util.intl;
    obj30.label = intl32.string(util.t.OLtTrt);
    const intl33 = util.intl;
    obj30.subLabel = intl33.string(util.t["di/pXR"]);
    obj30.IconComponent = LettersIcon.LettersIcon;
    items[sum7] = obj30;
    const sum8 = sum7 + 1;
    const obj31 = { id: "permadecos", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl34 = util.intl;
    obj31.label = intl34.string(util.t.L14NZN);
    const intl35 = util.intl;
    obj31.subLabel = intl35.string(util.t.eCZkAI);
    obj31.IconComponent = TrophyIcon.TrophyIcon;
    items[sum8] = obj31;
    const sum9 = sum8 + 1;
    const obj32 = { id: "early-access", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl36 = util.intl;
    obj32.label = intl36.string(util.t.EYxi0o);
    const intl37 = util.intl;
    obj32.subLabel = intl37.string(util.t.M9AIt1);
    obj32.IconComponent = SparklesIcon.SparklesIcon;
    items[sum9] = obj32;
    const obj33 = { id: "member-pricing", label: null, subLabel: null, IconComponent: null, includedInNitroBasic: false, detail: null };
    const intl38 = util.intl;
    obj33.label = intl38.string(util.t["H4/NBN"]);
    const intl39 = util.intl;
    obj33.subLabel = intl39.string(util.t.wo3D3T);
    obj33.IconComponent = TagIcon.TagIcon;
    items[sum9 + 1] = obj33;
    closure_1 = tmp19;
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
    const obj34 = { kind: "section-header", id: "explore-perks-header", title: null };
    const intl40 = util.intl;
    obj34.title = intl40.string(util.t["eQX+gg"]);
    if (closure_0 === TIER_0.TIER_0) {
      const found = mapped.filter((includedInNitroBasic) => includedInNitroBasic.includedInNitroBasic);
      const found1 = mapped.filter((includedInNitroBasic) => !includedInNitroBasic.includedInNitroBasic);
      if (0 === found1.length) {
        const items5 = [obj34];
        mapped = found;
        HermesBuiltin.arraySpread(found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
        let items6 = items5;
      } else {
        items6 = [obj34, ];
        const arraySpreadResult10 = HermesBuiltin.arraySpread(found.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
        const obj35 = { kind: "section-header", id: "nitro-only-perks-header", title: null, highlightNitro: true };
        const intl41 = util.intl;
        obj35.title = intl41.string(util.t.YCZldK);
        items6[arraySpreadResult10] = obj35;
        mapped = found1;
        HermesBuiltin.arraySpread(found1.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), arraySpreadResult10 + 1);
      }
      return items6;
    } else {
      const items7 = [obj34];
      HermesBuiltin.arraySpread(mapped.map((perk, index) => ({ kind: "perk", perk, start: 0 === index, end: index === mapped.length - 1 })), 1);
      return items7;
    }
    const obj29 = { image: _modDef13384, description: util.t.jBTTws };
  }, items);
};
