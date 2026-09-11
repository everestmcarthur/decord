// Module ID: 9319
// Function ID: 9320
// Name: TwoWayLinkStepHeader
// Dependencies: [19, 21, 9318, 7053, 4603, 1114, 2]
// Exports: TwoWayLinkStepHeader

// Module 9319 (TwoWayLinkStepHeader)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4603 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7053 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9318 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStepHeader.tsx");

export const TwoWayLinkStepHeader = function TwoWayLinkStepHeader(arg0) {
  ({ idx, total } = arg0);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TwoWayLinkStepHeader", "text-xs/bold");
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null };
  const items = [twoWayLinkStyles.stepHeader, typeConsolidationEyebrow.style];
  obj3.style = items;
  const intl = util.intl;
  obj3.children = intl.format(util.t.fHz6eR, { number: idx, total });
  return jsx(Text_Text.Text, { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null });
};
