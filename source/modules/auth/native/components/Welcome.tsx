// Module ID: 15981
// Function ID: 15982
// Name: Welcome
// Dependencies: [19, 17, 15982, 4490, 7471, 12443, 1385, 4558, 8772, 1074, 7340, 7750, 21, 4574, 576, 12689, 1114, 38, 1178, 4418, 4570, 13246, 6959, 13888, 1483, 1611, 504, 5006, 7489, 1242, 510, 6607, 5612, 15983, 15978, 1484, 5447, 4989, 4284, 5696, 11927, 2]
// Exports: default

// Module 15981 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Link from "Link" /* 1484 */;
import UserUtilsDefault from "UserUtils" /* 4418 */;
import Text_Text from "Text/Text" /* 4570 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6959 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7489 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12689 */;
import _modDef13246 from "module_13246" /* 13246 */;
import _mod13888 from "module_13888" /* 13888 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15978 */;
import noop from "module_19" /* 19 */;
import AgeGateStore from "AgeGateStore" /* 15982 */;
import ExperimentStore from "ExperimentStore" /* 4490 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7471 */;
import MultiAccountStore from "MultiAccountStore" /* 12443 */;
import UserRecord from "UserRecord" /* 1385 */;
import InviteStore from "InviteStore" /* 4558 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8772 */;

const require = globalThis.__r;

const Storage2 = tmp(510);
require = fn;
function InviteCard(invite) {
  invite = invite.invite;
  const tmp = closure_23();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      const obj3 = { guild };
      let tmp14 = closure_1_20(GuildInviteIconDefault, obj3);
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = closure_1_20;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const obj = { user: null, guildId: "a" };
      const tmp12 = new UserRecord(inviter);
      obj.user = tmp12;
      tmp14 = closure_1_20(native.Avatar, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.OsdY8B);
      name = UserUtilsDefault.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = closure_1_20;
    } else if (null == inviter) {
      return null;
    } else {
      const obj4 = { user: null, guildId: "a" };
      const tmp33 = new UserRecord(inviter);
      obj4.user = tmp33;
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["+ITYkQ"]);
      const tmp35 = closure_1_20(native.Avatar, obj4);
      name = UserUtilsDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = closure_1_20;
    }
    const obj5 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj5.style = items;
    const items1 = [tmp14, ];
    const obj6 = { style: tmp.text, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [tmp18(tmp17(4570).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp18(tmp17(4570).Text, obj8);
    obj6.children = items2;
    items1[1] = __initData(React4, obj6);
    obj5.children = items1;
    return __initData(React4, obj5);
  }
}
function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = closure_23();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [closure_1_20(hasOwnProperty, { source: _modDef13246 }), ];
  const obj3 = { style: tmp.text, children: null };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.QzUORX);
  const items2 = [closure_1_20(Text_Text.Text, obj4), closure_1_20(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj3.children = items2;
  items1[1] = __initData(React4, obj3);
  obj.children = items1;
  return __initData(React4, obj);
}
function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_22(tmp2);
  let tmp7 = null != guildTemplate;
  if (tmp7) {
    tmp7 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj = { style: null, children: null };
  const items = [tmp3.centerpieceContainer];
  obj.style = items;
  const obj2 = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  const items1 = [closure_1_20(hasOwnProperty, { style: tmp3.logo, source: _mod13888 }), , ];
  const obj4 = { style: tmp3.header, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj4.lineClamp = num;
  const intl = tmp4(1114).intl;
  obj4.children = intl.string(util.t["3S2xmm"]);
  const items2 = [closure_1_20(Text_Text.Heading, obj4), , , ];
  const items3 = [tmp3.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj5 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: null };
  items3[1] = subHeaderWithInvite;
  const intl2 = tmp4(1114).intl;
  obj5.children = intl2.string(util.t.Gtcthl);
  items2[1] = closure_1_20(Text_Text.Text, obj5);
  let tmp9Result = null;
  if (null != invite) {
    const obj6 = { invite };
    tmp9Result = tmp9(InviteCard, obj6);
  }
  items2[2] = tmp9Result;
  let tmp9Result2 = null;
  if (tmp7) {
    const obj7 = { guildTemplate };
    tmp9Result2 = tmp9(GuildTemplateCard, obj7);
  }
  items2[3] = tmp9Result2;
  items1[1] = __initData(React4, { children: items2 });
  items1[2] = inlineButtons.inlineButtons;
  obj2.children = items1;
  obj.children = __initData(timestampProducer, obj2);
  return closure_1_20(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17 } = Constants);
const GuildTemplateStates = fn(7340).GuildTemplateStates;
const InviteTypes = fn(7750).InviteTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let createStyles = fn(4574);
let closure_22 = createStyles.createStyles((arg0) => {
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: null, subHeaderWithInvite: null, centerpieceContainer: null, buttonContainer: null };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.subHeader = { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 };
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj.buttonContainer = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
createStyles = fn(4574);
let obj3 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm }, text: { marginLeft: 16 } };
let closure_23 = createStyles.createStyles(obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_22(tmp3);
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  let tmp = importDefault;
  ({ top, bottom } = require("useSafeAreaInsets")());
  let tmp6 = require("useSafeAreaInsets")();
  const items = [DisplayedInviteStore];
  importDefault = require("initialize").useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = require("initialize");
  const items1 = [InviteStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const obj3 = require("initialize");
  const items2 = [GuildTemplateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  let obj4 = require("initialize");
  const items3 = [AgeGateStore];
  noop = require("initialize").useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const obj5 = require("initialize");
  const items4 = [MultiAccountStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const obj6 = require("initialize");
  const items5 = [MultiAccountStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const result = TTIAnalyticsUtils.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != tmp5.type) {
        tmp6 = InviteTypes[tmp5.type];
      }
    }
    const obj4 = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = Storage2.Storage;
    obj4.last_logout_ts = Storage.get(constants2.LOGOUT_TIMESTAMP_KEY);
    obj4.invite_type = tmp6;
    let id;
    if (stateFromStores != null) {
      const guild = tmp5.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    obj4.guild_id = id;
    let id1;
    if (stateFromStores != null) {
      const channel = tmp5.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    obj4.channel_id = id1;
    let code;
    if (stateFromStores != null) {
      code = tmp5.code;
    }
    obj4.invite_code = code;
    AnalyticsUtilsDefault.track(constants.APP_LANDING_VIEWED, obj4);
  });
  const effect = noop.useEffect(() => {
    const locationMetadata = closure_1(stateFromStores[31]).getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = noop.useEffect(() => {

  });
  const effect2 = noop.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_20(tmp(tmp2[33]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: null };
  const obj9 = { children: null };
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (closure_3) {
        navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const nextAuthState = RegistrationStepsUtils.getNextAuthState(constants3.WELCOME);
        const CommonActions = Link.CommonActions;
        navigation.dispatch(CommonActions.navigate(nextAuthState));
        AnalyticsUtilsDefault.track(constants.REGISTER_VIEWED);
      }
    },
    text: null
  };
  const intl = tmp5(tmp2[16]).intl;
  obj10.text = intl.string(require("util").t.pV8xeR);
  const items6 = [closure_20(require("components/Button/Button").Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null
  };
  const intl2 = tmp5(tmp2[16]).intl;
  obj11.text = intl2.string(require("util").t.dKhVQN);
  items6[1] = closure_20(require("components/Button/Button").Button, obj11);
  obj9.children = items6;
  obj8.children = closure_21(require("ButtonGroup").ButtonGroup, obj9);
  const tmp19 = closure_20(closure_4, obj8);
  const obj12 = { style: null, children: null };
  const items7 = [tmp4.container, ];
  const obj7 = require("initialize");
  const tmp17 = closure_4;
  const tmp18 = closure_21;
  items7[1] = { paddingTop: top + require("NavigatorConstants").NAV_BAR_HEIGHT, paddingBottom: bottom };
  obj12.style = items7;
  const obj14 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
  let tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  obj14.inlineButtons = tmp21;
  const items8 = [closure_20(Centerpiece, obj14), , ];
  let tmp22 = !tmp3;
  if (!tmp3) {
    tmp22 = tmp19;
  }
  const obj15 = { theme: "darker", children: null };
  items8[1] = tmp22;
  items8[2] = closure_20(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "welcome" });
  obj12.children = items8;
  obj15.children = tmp18(tmp17, obj12);
  return closure_20(require("native").ThemeContextProvider, obj15);
};
