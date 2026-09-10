// Module ID: 8783
// Function ID: 8784
// Name: GameProfileAnnouncements
// Dependencies: [19, 17, 8784, 21, 5009, 1114, 4574, 576, 8785, 4570, 8788, 4255, 8790, 7176, 8792, 8719, 8713, 8795, 4989, 7223, 8753, 2]
// Exports: default

// Module 8783 (GameProfileAnnouncements)
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4255 */;
import Text_Text from "Text/Text" /* 4570 */;
import CustomMarkupAll from "CustomMarkup" /* 5009 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8713 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8719 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 8785 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8788 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 8795 */;
import noop from "module_19" /* 19 */;

require = fn;
function EmbedAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_15();
  if (null == parser) {
    parser = CustomMarkupAll.getParser();
  }
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, 160, c12);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp11;
    if (null != embedSource.color) {
      const obj3 = { borderLeftColor: embedSource.color };
      tmp11 = obj3;
    }
    const obj4 = {
      style: tmp.card,
      onPress() {
          return importDefault(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: null
    };
    const obj5 = { style: tmp.cardBody, children: null };
    let tmp12Result = null != embedSource.url;
    if (tmp12Result) {
      const obj6 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp12Result = tmp12(Text_Text.Text, obj6);
    }
    const items = [tmp12Result, ];
    const obj7 = { style: null, children: null };
    const items1 = [tmp.embedContentArea, tmp11];
    obj7.style = items1;
    let tmp14Result = null != embedSource.authorName;
    if (tmp14Result) {
      const obj8 = { style: tmp.embedAuthorRow, children: null };
      let tmp12Result6 = null != embedSource.authorIconUrl;
      if (tmp12Result6) {
        const obj9 = { source: null, style: null };
        const obj10 = { uri: embedSource.authorIconUrl };
        obj9.source = obj10;
        obj9.style = tmp.embedAuthorIcon;
        tmp12Result6 = tmp12(hasOwnProperty, obj9);
      }
      const items2 = [tmp12Result6, ];
      const obj11 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = tmp12(Text_Text.Text, obj11);
      obj8.children = items2;
      tmp14Result = tmp14(tmp15, obj8);
    }
    const items3 = [tmp14Result, , , , ];
    let tmp12Result7 = null != message.media && null != posterUrl;
    if (tmp12Result7) {
      const obj12 = { style: tmp.embedMedia, children: null };
      const obj13 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj12.children = tmp12(ImageWithPlaceholder.ImageWithPlaceholder, obj13);
      tmp12Result7 = tmp12(tmp15, obj12);
    }
    items3[1] = tmp12Result7;
    let tmp12Result8 = null != message.title;
    if (tmp12Result8) {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
      const obj15 = { guildId, channelId };
      obj14.children = tmp4(message.title, true, obj15);
      tmp12Result8 = tmp12(Text_Text.Text, obj14);
    }
    items3[2] = tmp12Result8;
    let tmp12Result9 = message.body.length > 0;
    if (tmp12Result9) {
      obj16 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
      const obj17 = { guildId, channelId };
      obj16.children = tmp4(message.body, true, obj17);
      tmp12Result9 = tmp12(Text_Text.Text, obj16);
    }
    items3[3] = tmp12Result9;
    const obj18 = { style: tmp.metadataRow, children: null };
    let tmp12Result10 = null != embedSource.providerIconUrl;
    if (tmp12Result10) {
      const obj19 = { source: null, style: null };
      const obj20 = { uri: embedSource.providerIconUrl };
      obj19.source = obj20;
      obj19.style = tmp.embedProviderIcon;
      tmp12Result10 = tmp12(hasOwnProperty, obj19);
    }
    const items4 = [tmp12Result10, , ];
    let str2 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj21 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const items5 = [str2, ];
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = DateUtils.dateFormat(date, "LL");
    obj21.children = items5;
    items4[1] = closure_1_11(Text_Text.Text, obj21);
    let tmp14Result2 = message.reactionCount > 0;
    if (tmp14Result2) {
      const obj22 = { style: tmp.reactionInfo, children: null };
      const obj23 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items6 = [tmp12(tmp35(8790).ReactionIcon, obj23), ];
      let tmp46 = null != obj16;
      if (tmp46) {
        tmp46 = obj16.locale === tmp35(1114).intl.currentLocale;
      }
      if (!tmp46) {
        const obj24 = { locale: tmp35(1114).intl.currentLocale, format: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(tmp35(1114).intl.currentLocale);
        obj24.format = numberFormat;
        obj16 = obj24;
      }
      const obj25 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const format = obj16.format;
      obj25.children = format.format(message.reactionCount);
      items6[1] = tmp12(tmp35(4570).Text, obj25);
      obj22.children = items6;
      tmp14Result2 = tmp14(tmp15, obj22);
    }
    items4[2] = tmp14Result2;
    obj18.children = items4;
    items3[4] = closure_1_11(timestampProducer, obj18);
    obj7.children = items3;
    items[1] = closure_1_11(timestampProducer, obj7);
    obj5.children = items;
    obj4.children = closure_1_11(timestampProducer, obj5);
    return closure_1_10(React5, obj4);
  }
}
function MessageAnnouncementCard(message) {
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = closure_15();
  if (null == parser) {
    parser = CustomMarkupAll.getParser();
  }
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    posterUrl = AnnouncementMessageUtils.getPosterUrl(proxyUrl, 160, c12);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const obj3 = {
    style: tmp.card,
    onPress() {
      return importDefault(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: null
  };
  let tmp13 = null != message.media;
  if (tmp13) {
    tmp13 = null != posterUrl;
  }
  if (tmp13) {
    const obj4 = { style: tmp.smallCardMedia, children: null };
    const obj5 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj4.children = closure_1_10(ImageWithPlaceholder.ImageWithPlaceholder, obj5);
    tmp13 = closure_1_10(timestampProducer, obj4);
  }
  const items = [tmp13, ];
  const obj6 = { style: tmp.cardBody, children: null };
  let tmp19 = null != message.title;
  if (tmp19) {
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: null };
    const obj8 = { guildId, channelId };
    obj7.children = tmp4(message.title, true, obj8);
    tmp19 = closure_1_10(Text_Text.Text, obj7);
  }
  const items1 = [tmp19, , ];
  let tmp23 = message.body.length > 0;
  if (tmp23) {
    const obj9 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: null };
    const obj10 = { guildId, channelId };
    obj9.children = tmp4(message.body, true, obj10);
    tmp23 = closure_1_10(Text_Text.Text, obj9);
  }
  items1[1] = tmp23;
  const obj11 = { style: tmp.metadataRow, children: null };
  const obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const obj13 = DateUtils;
  const tmp12 = React5;
  obj12.children = obj13.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [closure_1_10(Text_Text.Text, obj12), ];
  let tmp11Result = message.reactionCount > 0;
  if (tmp11Result) {
    const obj14 = { style: tmp.reactionInfo, children: null };
    const obj15 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const items3 = [tmp27(tmp28(8790).ReactionIcon, obj15), ];
    let tmp34 = null != obj16;
    if (tmp34) {
      tmp34 = obj16.locale === tmp28(1114).intl.currentLocale;
    }
    if (!tmp34) {
      obj16 = { locale: tmp28(1114).intl.currentLocale, format: null };
      const _Intl = Intl;
      const numberFormat = new Intl.NumberFormat(tmp28(1114).intl.currentLocale);
      obj16.format = numberFormat;
    }
    const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const format = obj16.format;
    obj17.children = format.format(message.reactionCount);
    items3[1] = tmp27(tmp28(4570).Text, obj17);
    obj14.children = items3;
    tmp11Result = tmp11(tmp18, obj14);
  }
  items2[1] = tmp11Result;
  obj11.children = items2;
  items1[2] = closure_1_11(timestampProducer, obj11);
  obj6.children = items1;
  items[1] = closure_1_11(timestampProducer, obj6);
  obj3.children = items;
  return closure_1_11(tmp12, obj3);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_15();
  const pollAnswerOption = tmp;
  const poll = message.poll;
  if (null == poll) {
    return null;
  } else {
    const answers = poll.answers;
    const substr = answers.slice(0, 3);
    const diff = poll.answers.length - substr.length;
    const obj2 = {
      style: tmp.card,
      onPress() {
          return onPress(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: poll.question.text,
      children: null
    };
    const obj3 = { style: tmp.cardBody, children: null };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    const items = [closure_10(message(4570).Text, obj4), , ];
    const obj5 = { style: tmp.pollAnswers, children: null };
    const items1 = [
      substr.map((poll_media) => {
          const obj = { style: pollAnswerOption.pollAnswerOption, children: null };
          let str = poll_media.poll_media.text;
          if (str == null) {
            str = "";
          }
          obj.children = closure_2_10(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str });
          return closure_2_10(timestampProducer, obj, poll_media.answer_id);
        }),

    ];
    let tmp9Result = diff > 0;
    if (tmp9Result) {
      let obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: null };
      const intl = tmp13(1114).intl;
      const obj6 = { count: diff };
      obj.children = intl.format(tmp13(1114).t["mv/nIa"], obj6);
      tmp9Result = tmp9(tmp13(4570).Text, obj);
    }
    items1[1] = tmp9Result;
    obj5.children = items1;
    items[1] = closure_11(closure_6, obj5);
    const obj7 = { style: tmp.metadataRow, children: null };
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl2 = tmp13(1114).intl;
    const obj9 = { createdAt: null, expiryLabel: null };
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj9.createdAt = date;
    obj9.expiryLabel = message(8785).getPollExpiryLabel(poll);
    obj8.children = intl2.format(message(1114).t.t0FTsH, obj9);
    obj7.children = closure_10(message(4570).Text, obj8);
    items[2] = closure_10(closure_6, obj7);
    obj3.children = items;
    obj2.children = closure_11(closure_6, obj3);
    return closure_10(closure_7, obj2);
  }
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, Pressable: closure_7, ActivityIndicator: closure_8 } = get_ActivityIndicator);
const MAX_VISIBLE_ANNOUNCEMENTS = fn(8784).MAX_VISIBLE_ANNOUNCEMENTS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 120;
let closure_13 = null;
const createStyles = fn(4574);
let obj = { container: { gap: nativeDefault.space.PX_8 }, smallCardsScroller: null, smallCardsContainer: null, sectionHeader: null, loadingContainer: null, card: null, cardBody: null, smallCardMedia: null, mediaImage: null, metadataRow: null, reactionInfo: null, embedContentArea: null, embedAuthorRow: null, embedAuthorIcon: null, embedProviderIcon: null, embedMedia: null, pollAnswers: null, pollAnswerOption: null, pollMoreOptions: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj.smallCardsScroller = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
obj.smallCardsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.sectionHeader = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj.loadingContainer = { height: 120, alignItems: "center", justifyContent: "center" };
let obj6 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj.card = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
let obj7 = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
obj.cardBody = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj8 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.metadataRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj.reactionInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedContentArea = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
let obj11 = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
obj.embedAuthorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj.embedAuthorIcon = size;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.embedMedia = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
let obj13 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj.pollAnswers = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
let obj14 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj.pollAnswerOption = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj16 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.pollMoreOptions = obj16;
let closure_15 = createStyles.createStyles(obj);
let closure_19 = noop.memo((message) => {
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    let tmp6 = closure_1_10(PollAnnouncementCard, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = closure_1_10(EmbedAnnouncementCard, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = closure_1_10(MessageAnnouncementCard, obj);
  }
  return tmp6;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default function GameProfileAnnouncements(gameId) {
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  channelId = undefined;
  const tmp = closure_15();
  const analyticsLocations = invite(trackAction[13])().analyticsLocations;
  const tmp4 = invite(trackAction[14])(gameId, MAX_VISIBLE_ANNOUNCEMENTS);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  const items = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const items1 = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const callback = scrollOffsetRef.useCallback(() => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
      const obj2 = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
      closeModal();
      const obj3 = { invite: tmp, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj3);
    }
  }, items);
  const onPress = scrollOffsetRef.useCallback((messageId) => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
      const obj2 = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = GameProfileActionCreatorsDefault.setGameProfilePendingReturn(obj2);
      closeModal();
      const obj3 = { invite: tmp, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj3);
    }
  }, items1);
  if (tmp4.loading) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { style: tmp.sectionHeader, children: null };
    let obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = gameId(tmp3[5]).intl;
    obj3.children = intl.string(gameId(tmp3[5]).t.B0BV3Y);
    obj2.children = closure_10(gameId(tmp3[9]).Text, obj3);
    const items2 = [closure_10(channelId, obj2), ];
    const obj4 = { style: tmp.loadingContainer, children: closure_10(onPress, {}) };
    items2[1] = closure_10(channelId, obj4);
    obj.children = items2;
    let tmp7 = closure_11(channelId, obj);
  } else {
    tmp7 = null;
    if (null != channelId) {
      tmp7 = null;
      if (0 !== messages.length) {
        const obj5 = { style: tmp.container, children: null };
        const obj6 = { style: tmp.sectionHeader, children: null };
        const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
        const intl2 = gameId(tmp3[5]).intl;
        obj7.children = intl2.string(gameId(tmp3[5]).t.B0BV3Y);
        const items3 = [closure_10(gameId(tmp3[9]).Text, obj7), ];
        const obj8 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
        const intl3 = gameId(tmp3[5]).intl;
        obj8.text = intl3.string(gameId(tmp3[5]).t.budhsM);
        obj8.icon = closure_10(gameId(tmp3[19]).ChevronSmallRightIcon, { size: "sm" });
        obj8.onPress = callback;
        items3[1] = closure_10(gameId(tmp3[18]).Button, obj8);
        obj6.children = items3;
        const items4 = [closure_11(channelId, obj6), ];
        const obj17 = { showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false, children: null };
        ({ smallCardsScroller: obj9.style, smallCardsContainer: obj9.contentContainerStyle } = tmp);
        obj17.children = messages.map((message) => closure_2_10(closure_19, { message, onPress, guildId, channelId }, message.id));
        items4[1] = closure_10(invite(tmp3[20]), obj17);
        obj5.children = items4;
        tmp7 = closure_11(channelId, obj5);
        const tmp2Result = invite(tmp3[20]);
      }
    }
  }
  return tmp7;
};
