// Module ID: 16571
// Function ID: 16572
// Name: StandaloneMembersView
// Dependencies: [19, 21, 1483, 1611, 9068, 5624, 1114, 16572, 11841, 11854, 11856, 7000, 2]
// Exports: default

// Module 16571 (StandaloneMembersView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_5 = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = require("set").fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = guildId(1483);
  importDefault = obj.useNavigation();
  const items = [guildId];
  const effect = React.useEffect(() => {
    navigation(9068).init(guildId);
  }, items);
  obj = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  dependencyMap = { contentContainerStyle: obj };
  obj = {};
  obj1 = {
    headerLeft: guildId(5624).getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(1114).intl;
      obj[0] = intl.string(guildId(1114).t["9Oq93m"]);
      return callback(guildId(5624).NavigatorHeader, obj);
    },
    render() {
      return closure_1_4(navigation(16572), { guildId });
    }
  };
  obj[constants.MAIN] = obj1;
  obj[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(guildId(11841).GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(navigation(11854), { guildId });
    }
  };
  obj[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(navigation(11856), { guildId });
    }
  };
  const obj2 = { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null };
  let intl = guildId(1114).intl;
  obj2[2] = intl.string(guildId(1114).t["13/7kX"]);
  return jsx(guildId(7000).Navigator, { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null });
};
