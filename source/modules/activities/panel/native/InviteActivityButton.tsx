// Module ID: 17109
// Function ID: 17110
// Name: InviteActivityButton
// Dependencies: [19, 11553, 5331, 21, 4574, 17110, 1896, 504, 11856, 5027, 10123, 1114, 2]

// Module 17109 (InviteActivityButton)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11856 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11553 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5331 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default noop.memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationId];
  const stateFromStores = applicationId(504).useStateFromStores(items, () => getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, applicationId), items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17110, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10123),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    };
    const intl = tmp(1114).intl;
    obj2.text = intl.string(tmp(1114).t["OzOM/q"]);
    const intl2 = tmp(1114).intl;
    obj2.accessibilityLabel = intl2.string(tmp(1114).t["OzOM/q"]);
    tmp4 = jsx(tmp(5027).Button, {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(17110, dependencyMap.paths), "ActivityInviteSheet-" + stateFromStores.session_id, { activity: stateFromStores });
        },
      icon: stateFromStores(10123),
      text: null,
      accessibilityLabel: null,
      variant: "secondary-overlay",
      size: "sm",
      shrink: true,
      maxFontSizeMultiplier: 1
    });
  }
  return tmp4;
});
