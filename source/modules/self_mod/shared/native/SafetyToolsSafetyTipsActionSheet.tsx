// Module ID: 11504
// Function ID: 11505
// Name: SafetyToolsSafetyTipsActionSheet
// Dependencies: [19, 17, 11459, 21, 4607, 576, 11495, 1114, 11472, 4603, 2]
// Exports: default

// Module 11504 (SafetyToolsSafetyTipsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4603 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 11472 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11495 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(11459).getInappropriateConversationsSafetyTips;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj2 = { safetyTipsContainer: { marginHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  const obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const tmp = closure_6();
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  const obj2 = { style: tmp.safetyTipsContainer, children: null };
  const obj3 = { description: null, safetyTips: null };
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t.DJMZX6);
  obj3.safetyTips = closure_4().map((children, index) => jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index));
  obj2.children = <tmp3 description={null} safetyTips={null} />;
  obj.children = <View style={tmp.safetyTipsContainer}>{null}</View>;
  return <tmp2 hasHeaderBack recipientId={recipientId} warningId={warningId} warningType={warningType} headerTitle={null} channelId={null} onClose={null}>{null}</tmp2>;
};
