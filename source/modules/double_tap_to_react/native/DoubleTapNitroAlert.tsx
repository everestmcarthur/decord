// Module ID: 7988
// Function ID: 7989
// Name: DoubleTapNitroAlert
// Dependencies: [19, 17, 7983, 1074, 7989, 21, 4574, 7396, 4920, 4924, 6624, 1114, 2]
// Exports: default

// Module 7988 (DoubleTapNitroAlert)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4924 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6624 */;
import openUserSettings from "openUserSettings" /* 7396 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(7983).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1074).UserSettingsSections;
const MobileUserSettings = fn(7989).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4574);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
    openUserSettings.openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: constants.PREMIUM }, () => {
      closure_1_0(dependencyMap[8]).dismissAlert(closure_1_4);
    });
  }, []);
  const obj = { header: null, title: null, content: null, actions: null };
  const tmp = closure_10();
  obj.header = React5(View, { style: closure_10().icon, children: React5(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) });
  const intl = util.intl;
  obj.title = intl.string(util.t.HRAWfC);
  const intl2 = util.intl;
  obj.content = intl2.format(util.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  const obj3 = { children: null };
  const obj4 = { onPress: callback, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.LIIHRy);
  const items = [React5(AlertModal.AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["Nr6v2+"]);
  items[1] = React5(AlertModal.AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = React7(React6, obj3);
  return React5(AlertModal.AlertModal, obj);
};
