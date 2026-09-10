// Module ID: 10075
// Function ID: 10076
// Name: StageChannelBackground
// Dependencies: [19, 17, 21, 4574, 576, 2]
// Exports: default

// Module 10075 (StageChannelBackground)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={closure_2().container}>{arg0.children}</View>;
};
