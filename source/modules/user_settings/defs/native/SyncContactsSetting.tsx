// Module ID: 14872
// Function ID: 14873
// Name: SyncContactsSetting
// Dependencies: [5295, 1371, 7989, 1074, 12710, 14873, 11500, 1114, 2]

// Module 14872 (SyncContactsSetting)
import util from "util" /* 1114 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12710 */;
import ContactSyncSettings from "ContactSyncSettings" /* 14873 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5295 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const SettingBuilders = fn(11500);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.uSvEy7);
  },
  parent: fn(7989).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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
