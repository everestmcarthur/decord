// Module ID: 14931
// Function ID: 14932
// Name: FamilyCenterSettingsNotice
// Dependencies: [19, 8529, 21, 8780, 14800, 2397, 7696, 4651, 2]
// Exports: default

// Module 14931 (FamilyCenterSettingsNotice)
import _modDef2397 from "module_2397" /* 2397 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4651 */;
import LayerActionCreators from "LayerActionCreators" /* 7696 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14800 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8529).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  activeLinkUserIds = activeLinkUserIds(8780).useActiveLinkUserIds();
  const obj2 = { label: null, noticeType: null, labelHook: null, count: null };
  let obj = activeLinkUserIds(8780);
  obj2.label = _modDef2397.i284fU;
  obj2.noticeType = SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE;
  obj2.labelHook = function labelHook() {
    LayerActionCreators.popLayer();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
  };
  obj2.count = activeLinkUserIds.length;
  return jsx(SafetySettingsNoticeDefault, { label: null, noticeType: null, labelHook: null, count: null });
};
