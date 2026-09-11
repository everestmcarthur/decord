// Module ID: 14898
// Function ID: 14899
// Name: SyncContactsSetting
// Dependencies: [5333, 1371, 8050, 1074, 12775, 14899, 11564, 1114, 2]

// Module 14898 (SyncContactsSetting)
import util from "util" /* 1114 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12775 */;
import ContactSyncSettings from "ContactSyncSettings" /* 14899 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5333 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(8050).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useContactSyncSettingValue() {
    const contactSyncAccount = ContactSyncUtils.useContactSyncAccount();
    return ContactSyncUtils.isContactSyncEnabled(contactSyncAccount);
  },
  onValueChange: function onContactSyncSettingValueChange(arg0) {
    const localAccount = ConnectedAccountsStore.getLocalAccount(PlatformTypes.CONTACTS);
    const currentUser = UserStore.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    ContactSyncSettings.handleSyncContacts(localAccount, phone, arg0);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsSetting.tsx");

export default toggle;
