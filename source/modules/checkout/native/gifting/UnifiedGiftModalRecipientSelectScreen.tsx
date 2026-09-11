// Module ID: 10950
// Function ID: 10951
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: [19, 17, 10951, 21, 4607, 576, 1483, 10952, 10918, 2]
// Exports: default

// Module 10950 (UnifiedGiftModalRecipientSelectScreen)
import nativeDefault from "native" /* 576 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10918 */;
import SearchableUserListDefault from "SearchableUserList" /* 10952 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserRowModes = fn(10951).UserRowModes;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj2 = { container: { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  importDefault = setRecipientUser(1483).useNavigation();
  const obj2 = {
    style: closure_6().container,
    children: jsx(SearchableUserListDefault, {
      onSelectUser(user) {
        setRecipientUser(user);
        navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
      },
      rowMode: UserRowModes.NONE,
      disableGradient: true,
      disableThemedGradient: true
    })
  };
  return <View style={closure_6().container}>{jsx(SearchableUserListDefault, {
    onSelectUser(user) {
      setRecipientUser(user);
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL);
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  })}</View>;
};
