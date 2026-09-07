// Module ID: 10316
// Function ID: 10317
// Name: View
// Dependencies: [17, 1115, 10317, 2]

// Module 10316 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 10317 */;
import set from "set" /* 1115 */;

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
