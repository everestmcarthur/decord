// Module ID: 14870
// Function ID: 14871
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8485, 21, 8736, 14739, 2396, 7659, 4619, 2]
// Exports: default

// Module 14870 (FamilyCenterSettingsNotice)
import _modDef2396 from "module_2396" /* 2396 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4619 */;
import LayerActionCreators from "LayerActionCreators" /* 7659 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14739 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8485).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8736).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8736);
  obj2.label = _modDef2396.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
