// Module ID: 10402
// Function ID: 10403
// Name: EmojiPickerListRowView
// Dependencies: [17, 1115, 10403, 2]

// Module 10402 (EmojiPickerListRowView)
import _mod17 from "module_17" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 10403 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
