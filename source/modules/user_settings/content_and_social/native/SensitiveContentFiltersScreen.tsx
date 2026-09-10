// Module ID: 14843
// Function ID: 14844
// Name: SensitiveContentFiltersScreen
// Dependencies: [19, 7989, 21, 1114, 11500, 14844, 14718, 2]
// Exports: default

// Module 14843 (SensitiveContentFiltersScreen)
import util from "util" /* 1114 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import SettingLayoutDefault from "SettingLayout" /* 14718 */;
import SettingsScreenNotices from "SettingsScreenNotices" /* 14844 */;
import noop from "module_19" /* 19 */;

const SettingsScreenNoticesDefault = SettingsScreenNotices;

require = fn;
const MobileUserSettings = fn(7989).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersScreen.tsx");

export default function UserSettingsSensitiveContentFilters() {
  const obj = { children: null };
  const memo = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { label: null, settings: null, subLabel: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.GYpoAq);
    const items = [, , ];
    ({ EXPLICIT_MEDIA_FILTERS_FRIENDS_DMS: arr[0], EXPLICIT_MEDIA_FILTERS_NON_FRIENDS_DMS: arr[1], EXPLICIT_MEDIA_FILTERS_GUILDS: arr[2] } = MobileUserSettings);
    obj3.settings = items;
    const intl2 = util.intl;
    obj3.subLabel = intl2.string(util.t.Wnojv1);
    const items1 = [obj3, ];
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t["16/3Bi"]);
    const items2 = [, , ];
    ({ GORE_MEDIA_FILTERS_FRIENDS_DMS: arr3[0], GORE_MEDIA_FILTERS_NON_FRIENDS_DMS: arr3[1], GORE_MEDIA_FILTERS_GUILDS: arr3[2] } = MobileUserSettings);
    obj4.settings = items2;
    const intl4 = util.intl;
    obj4.subLabel = intl4.string(util.t.XgH9eh);
    items1[1] = obj4;
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  let obj2 = { screen: SettingsScreenNotices.SettingsScreen.SENSITIVE_CONTENT_FILTERS };
  let items = [hasOwnProperty(SettingsScreenNoticesDefault, obj2), hasOwnProperty(SettingLayoutDefault, { node: memo })];
  obj.children = items;
  return React5(timestampProducer, obj);
};
