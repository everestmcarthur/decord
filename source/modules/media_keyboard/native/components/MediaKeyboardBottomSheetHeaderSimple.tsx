// Module ID: 10768
// Function ID: 10769
// Name: MediaKeyboardBottomSheetHeaderSimple
// Dependencies: [19, 17, 1607, 21, 4636, 576, 10769, 2]

// Module 10768 (MediaKeyboardBottomSheetHeaderSimple)
import nativeDefault from "native" /* 576 */;
import MediaKeyboardBottomSheetHandleDefault from "MediaKeyboardBottomSheetHandle" /* 10769 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
const obj = { headerHandleOnlyWrap: { height: fn(1607).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 } };
let closure_4 = createStyles.createStyles(obj);
const obj3 = { height: fn(1607).HEADER_HANDLE_HEIGHT, paddingBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeaderSimple.tsx");

export default noop.memo(function MediaKeyboardBottomSheetHeaderSimple(arg0) {
  ({ animatedIndex, onPress } = arg0);
  return <View style={closure_4().headerHandleOnlyWrap}>{jsx(MediaKeyboardBottomSheetHandleDefault, { animatedIndex, onPress })}</View>;
});
