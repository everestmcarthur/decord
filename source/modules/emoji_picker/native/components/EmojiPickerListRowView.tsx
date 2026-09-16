// Module ID: 10450
// Function ID: 10451
// Name: EmojiPickerListRowView
// Dependencies: [17, 1364, 10451, 2]

// Module 10450 (EmojiPickerListRowView)
import _mod17 from "module_17" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 10451 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
