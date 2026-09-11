// Module ID: 16946
// Function ID: 16947
// Name: SearchNavigatorPreviewHeader
// Dependencies: [19, 17, 21, 4607, 13363, 2]

// Module 16946 (SearchNavigatorPreviewHeader)
import ChannelHeaderDefault from "ChannelHeader" /* 13363 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo((channelId) => <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId: arg0.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
