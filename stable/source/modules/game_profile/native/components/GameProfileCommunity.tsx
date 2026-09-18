// Module ID: 8742
// Function ID: 8743
// Name: GameProfileCommunity
// Dependencies: [5, 32, 19, 17, 1959, 21, 4560, 576, 8695, 4543, 4548, 8743, 504, 8692, 7342, 8744, 1971, 4556, 1114, 5584, 8746, 1178, 4975, 2]
// Exports: default

// Module 8742 (GameProfileCommunity)
import nativeDefault from "native" /* 576 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8692 */;
import DisplayedInviteActionCreators from "DisplayedInviteActionCreators" /* 8744 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 1959 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, headerText: null, card: null, guildContent: null, guildHeaderRow: null, guildIcon: null, guildIconImage: null, guildInfo: null, guildNameDescriptionContainer: null, guildNameRow: null, memberCountsContainer: null, memberCountContainer: null, onlineEllipse: null, membersEllipse: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.card = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.guildContent = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "column", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.guildHeaderRow = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: nativeDefault.space.PX_4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: -nativeDefault.space.PX_4 };
obj2.guildIcon = size;
const size1 = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.none };
obj2.guildIconImage = size1;
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.guildInfo = { flex: 1, gap: nativeDefault.space.PX_16 };
let obj8 = { flex: 1, gap: nativeDefault.space.PX_16 };
obj2.guildNameDescriptionContainer = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj2.guildNameRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.memberCountsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.memberCountContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size2 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2.onlineEllipse = size2;
const size3 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.membersEllipse = size3;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileCommunity.tsx");

export default function GameProfileCommunityServer(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const onInviteResolved = game.onInviteResolved;
  const closeModal = game.closeModal;
  let first;
  noop = undefined;
  let memo;
  let stateFromStores;
  const tmp = closure_10();
  const tmp2 = first(noop.useState(null), 2);
  first = tmp2[0];
  noop = tmp2[1];
  closure_6 = noop.useRef(onInviteResolved);
  const items = [onInviteResolved];
  const effect = noop.useEffect(() => {
    closure_6.current = onInviteResolved;
  }, items);
  let websites;
  if (game != null) {
    websites = game.websites;
  }
  const items1 = [websites];
  memo = noop.useMemo(() => {
    let found;
    if (game != null) {
      const websites = game.websites;
      if (websites != null) {
        found = websites.find((category) => category.category === game(onInviteResolved[8]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    return found;
  }, items1);
  const items2 = [memo];
  const effect1 = noop.useEffect(() => {
    closure_0 = async function _resolve(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              let invite;
              let banned;
              if (null != memo) {
                const findCodedLinkResult = game(onInviteResolved[9]).findCodedLink(tmp35.url);
                if (null != findCodedLinkResult) {
                  if (findCodedLinkResult.type === tmp20(tmp21[10]).CodedLinkType.INVITE) {
                    c2 = 1;
                    c3 = 2;
                    c4 = 1;
                    const obj5 = { value: trackAction(tmp21[11])(findCodedLinkResult.code, "game_profile"), done: false };
                    return obj5;
                  }
                }
                const obj2 = game(onInviteResolved[9]);
                tmp20 = game;
              }
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              invite = closure_128_0.invite;
              banned = closure_128_0.banned;
              let tmp10 = null != invite;
              if (tmp10) {
                tmp10 = true !== banned;
              }
              if (tmp10) {
                closure_1_5(invite);
                const current = ref.current;
                if (current != null) {
                  current(invite);
                }
              }
              c2 = 0;
            }
            c2 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 3;
        } catch (tmp24) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c3 = tmp;
          }
        }
      }
    };
    if (null != memo) {
      (function resolve() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items2);
  const items3 = [memo];
  stateFromStores = game(onInviteResolved[12]).useStateFromStores(items3, () => {
    let id;
    if (first != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      isMemberResult = GuildMembershipStore.isMember(tmp.guild.id);
    }
    return isMemberResult;
  });
  const items4 = [first, stateFromStores, trackAction, closeModal];
  if (null != first) {
    if (null != first.guild) {
      const fromInviteGuildResult = tmp8(tmp9[16]).fromInviteGuild(first.guild);
      let approximate_member_count = first.approximate_member_count;
      if (approximate_member_count == null) {
        approximate_member_count = first.guild.approximate_member_count;
      }
      let approximate_presence_count = first.approximate_presence_count;
      if (approximate_presence_count == null) {
        approximate_presence_count = first.guild.approximate_presence_count;
      }
      let obj3 = { style: tmp.container, children: null };
      let obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
      const intl = tmp8(tmp9[18]).intl;
      obj4.children = intl.string(tmp8(tmp9[18]).t["U2N+ci"]);
      const items5 = [stateFromStores(tmp8(tmp9[17]).Text, obj4), ];
      let obj5 = { style: tmp.card, children: null };
      const obj6 = { style: tmp.guildContent, children: null };
      const obj7 = { style: tmp.guildHeaderRow, children: null };
      const obj8 = { style: tmp.guildIcon, children: null };
      const obj9 = { guild: fromInviteGuildResult, size: null, style: null };
      const tmp8Result = tmp8(tmp9[16]);
      obj9.size = tmp8(tmp9[19]).GuildIconSizes.LARGE;
      obj9.style = tmp.guildIconImage;
      obj8.children = stateFromStores(trackAction(tmp9[19]), obj9);
      const items6 = [stateFromStores(closure_6, obj8), ];
      const obj10 = { style: tmp.guildInfo, children: null };
      const obj11 = { style: tmp.guildNameDescriptionContainer, children: null };
      const obj12 = { style: tmp.guildNameRow, children: null };
      const obj13 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: fromInviteGuildResult.name };
      const items7 = [stateFromStores(tmp8(tmp9[17]).Text, obj13), ];
      const obj14 = { guild: fromInviteGuildResult, size: null };
      const tmp16 = trackAction(tmp9[19]);
      obj14.size = tmp8(tmp9[21]).Icon.Sizes.REFRESH_SMALL_16;
      items7[1] = stateFromStores(trackAction(tmp9[20]), obj14);
      obj12.children = items7;
      const items8 = [closure_9(closure_6, obj12), ];
      const obj15 = { variant: "text-sm/medium", color: "text-default", lineClamp: 2, children: fromInviteGuildResult.description };
      items8[1] = stateFromStores(tmp8(tmp9[17]).Text, obj15);
      obj11.children = items8;
      const items9 = [closure_9(closure_6, obj11), ];
      const obj16 = { style: tmp.memberCountsContainer, children: null };
      let tmp12Result = null;
      if (null != approximate_presence_count) {
        const obj17 = { style: tmp.memberCountContainer, children: null };
        const obj18 = { style: tmp.onlineEllipse };
        const items10 = [tmp14(tmp13, obj18), ];
        const obj19 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl2 = tmp8(tmp9[18]).intl;
        const obj20 = { membersOnline: approximate_presence_count };
        obj19.children = intl2.formatToPlainString(tmp8(tmp9[18]).t["LC+S+m"], obj20);
        items10[1] = tmp14(tmp8(tmp9[17]).Text, obj19);
        obj17.children = items10;
        tmp12Result = tmp12(tmp13, obj17);
      }
      const items11 = [tmp12Result, ];
      let tmp12Result2 = null;
      if (null != approximate_member_count) {
        const obj21 = { style: tmp.memberCountContainer, children: null };
        const obj22 = { style: tmp.membersEllipse };
        const items12 = [tmp14(tmp13, obj22), ];
        const obj23 = { variant: "text-xs/normal", color: "text-default", children: null };
        const intl3 = tmp8(tmp9[18]).intl;
        const obj24 = { count: approximate_member_count };
        obj23.children = intl3.formatToPlainString(tmp8(tmp9[18]).t.zRl6XR, obj24);
        items12[1] = tmp14(tmp8(tmp9[17]).Text, obj23);
        obj21.children = items12;
        tmp12Result2 = tmp12(tmp13, obj21);
      }
      items11[1] = tmp12Result2;
      obj16.children = items11;
      items9[1] = closure_9(closure_6, obj16);
      obj10.children = items9;
      items6[1] = closure_9(closure_6, obj10);
      obj7.children = items6;
      const items13 = [closure_9(closure_6, obj7), ];
      const intl4 = tmp8(tmp9[18]).intl;
      const string = intl4.string;
      const t = tmp8(tmp9[18]).t;
      if (stateFromStores) {
        let stringResult = string(t.cEnaWx);
      } else {
        stringResult = string(t.XpeFYr);
      }
      const obj25 = { variant: "secondary", size: "md", text: stringResult, onPress: tmp11 };
      items13[1] = stateFromStores(tmp8(tmp9[22]).Button, obj25);
      obj6.children = items13;
      obj5.children = closure_9(closure_6, obj6);
      items5[1] = stateFromStores(closure_6, obj5);
      obj3.children = items5;
      return closure_9(closure_6, obj3);
    }
  }
  return null;
};
