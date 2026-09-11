// Module ID: 14871
// Function ID: 14872
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8487, 21, 8738, 14742, 2396, 7660, 4620, 2]
// Exports: default

// Module 14871 (FamilyCenterSettingsNotice)
import _modDef2396 from "module_2396" /* 2396 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4620 */;
import LayerActionCreators from "LayerActionCreators" /* 7660 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14742 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8487).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8738).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8738);
  obj2.label = _modDef2396.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
