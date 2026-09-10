// Module ID: 9259
// Function ID: 9260
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 9258, 4570, 1114, 2]
// Exports: TwoWayLinkStepHeader

// Module 9259 (TwoWayLinkStepHeader)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9258 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const obj2 = { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null };
  const intl = util.intl;
  obj2.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: "text-xs/bold", color: "text-default", style: twoWayLinkStyles.stepHeader, children: null });
};
