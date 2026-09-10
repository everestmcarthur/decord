// Module ID: 17743
// Function ID: 17744
// Name: CreatorHighlightSection
// Dependencies: [19, 17, 21, 4574, 576, 4570, 1178, 10334, 1114, 17744, 4268, 17716, 5601, 15272, 4990, 2]
// Exports: default

// Module 17743 (CreatorHighlightSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import LinkingDefault from "Linking" /* 4268 */;
import Text_Text from "Text/Text" /* 4570 */;
import _modDef10334 from "module_10334" /* 10334 */;
import EmojiIconDefault from "EmojiIcon" /* 15272 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildServerSubscriberCount(arg0) {
  ({ subscriberCount, style } = arg0);
  const tmp = closure_8();
  const obj = { style: null, children: null };
  const items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj.style = items;
  const items1 = [timestampProducer(Text_Text.Text, { style: tmp.subscriberCount, variant: "text-sm/medium", color: "text-overlay-light", children: subscriberCount }), timestampProducer(native.Icon, { size: native.Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.subscriberCountIcon, source: _modDef10334 }), ];
  const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["3NNXPW"]);
  items1[2] = timestampProducer(Text_Text.Text, obj4);
  obj.children = items1;
  return React5(React4, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  const tmp = closure_8();
  _require = tmp;
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp4 = guild_id(17744)(guild_id, 3, 60);
  dependencyMap = tmp4;
  const hasAllImperativeDetails = tmp4.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp4];
  if (tmp4.isLoading) {
    const obj2 = { style: tmp.cardContainer, children: closure_6(tmp2(17716), {}) };
    return closure_6(closure_4, obj2);
  } else if (hasAllImperativeDetails) {
    const details = tmp4.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    let obj = { style: tmp.cardContainer, children: null };
    const obj3 = { style: tmp.horizontalContainer, children: null };
    ({ guildName, guildAvatarUrl } = details);
    const obj4 = { style: tmp.guildIcon, source: null };
    const obj5 = { uri: guildAvatarUrl };
    obj4.source = obj5;
    const items1 = [closure_6(tmp2(5601), obj4), ];
    const obj6 = { style: tmp.cardHeaderContainer, children: null };
    const obj7 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: guildName };
    const items2 = [closure_6(require("Text/Text").Text, obj7), ];
    let tmp9Result = null != subscriberCount;
    if (tmp9Result) {
      const obj8 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp9Result = tmp9(GuildServerSubscriberCount, obj8);
    }
    items2[1] = tmp9Result;
    obj6.children = items2;
    items1[1] = closure_7(closure_4, obj6);
    obj3.children = items1;
    const items3 = [closure_7(closure_4, obj3), , , , ];
    const obj9 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = closure_6(require("Text/Text").Text, obj9);
    const obj10 = { style: tmp.ownerUsername, variant: "text-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail", children: null };
    const intl = tmp10(1114).intl;
    const obj11 = { attributionName: quote_attribution, attributionTitle: null };
    if (quote_attribution_title == null) {
      const intl2 = tmp10(1114).intl;
      quote_attribution_title = intl2.string(tmp10(1114).t.pclUFJ);
    }
    obj11.attributionTitle = quote_attribution_title;
    obj10.children = intl.format(require("util").t.m0b6Kj, obj11);
    items3[2] = closure_6(require("Text/Text").Text, obj10);
    let tmp7Result = null != emojisToShow;
    if (tmp7Result) {
      tmp7Result = emojisToShow.length > 0;
    }
    if (tmp7Result) {
      const obj12 = { style: tmp.emojiSectionContainer, children: null };
      const obj13 = { style: tmp.premiumEmojisTitle, variant: "text-xs/semibold", color: "text-default", children: null };
      const intl3 = tmp10(1114).intl;
      obj13.children = intl3.string(tmp10(1114).t.wg53L8);
      const items4 = [tmp9(tmp10(4570).Text, obj13), ];
      const obj14 = { style: null, children: null };
      const items5 = [, ];
      ({ horizontalContainer: arr6[0], emojiContainer: arr6[1] } = tmp);
      obj14.style = items5;
      const items6 = [
        emojisToShow.map((id) => {
              const obj = { style: null, size: 24, id: id.id, guildId: guild_id };
              const items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
              obj.style = items;
              return timestampProducer(EmojiIconDefault, obj, id.id);
            }),

      ];
      let tmp9Result2 = null != notShownEmojiCount;
      if (tmp9Result2) {
        const obj15 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default", children: null };
        const _HermesInternal = HermesInternal;
        obj15.children = "+" + notShownEmojiCount;
        tmp9Result2 = tmp9(tmp10(4570).Text, obj15);
      }
      items6[1] = tmp9Result2;
      obj14.children = items6;
      items4[1] = tmp7(tmp8, obj14);
      obj12.children = items4;
      tmp7Result = tmp7(tmp8, obj12);
    }
    items3[3] = tmp7Result;
    const obj16 = { style: tmp.viewServerButtonContainer, children: null };
    const obj17 = { pillStyle: tmp.viewServerButton, text: null, onPress: null, shrink: true };
    const intl4 = tmp10(1114).intl;
    obj17.text = intl4.string(require("util").t.mQ2IGa);
    obj17.onPress = tmp5;
    obj16.children = closure_6(require("BaseTextButton").BaseTextButton, obj17);
    items3[4] = closure_6(closure_4, obj16);
    obj.children = items3;
    return closure_7(closure_4, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 }, subscriberCountContainer: { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: nativeDefault.radii.xs, overflow: "hidden" }, subscriberCount: null, subscriberCountIcon: null, cardContainer: null, cardHeaderContainer: null, guildIcon: null, ownerQuote: null, ownerUsername: null, premiumEmojisTitle: null, viewServerButtonContainer: null, viewServerButton: null, emojiSectionContainer: null, emojiContainer: null, emojiListItem: null, emoji: null };
let obj3 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.subscriberCount = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj2.subscriberCountIcon = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj2.cardContainer = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.cardHeaderContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
obj2.guildIcon = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
obj2.ownerQuote = { marginTop: 24 };
obj2.ownerUsername = { marginTop: 8 };
obj2.premiumEmojisTitle = { marginTop: 32, textTransform: "uppercase" };
obj2.viewServerButtonContainer = { flex: 1, justifyContent: "flex-end" };
let obj5 = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.viewServerButton = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiSectionContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj6 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiContainer = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.emojiListItem = { marginHorizontal: 8 };
obj2.emoji = { height: 24, width: 24, marginVertical: 8 };
let closure_8 = createStyles.createStyles(obj2);
function renderItem(highlightedCreatorGuild) {
  return timestampProducer(CreatorGuildCard, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx");

export default function CreatorHighlightSection(data) {
  return timestampProducer(hasOwnProperty, {
    data: data.highlightedCreators,
    horizontal: true,
    keyExtractor(guild_id) {
      return guild_id.guild_id;
    },
    renderItem
  });
};
