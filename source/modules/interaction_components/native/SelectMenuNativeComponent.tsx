// Module ID: 15715
// Function ID: 15716
// Name: SelectMenuNativeComponent
// Dependencies: [19, 21, 15716, 2]
// Exports: default

// Module 15715 (SelectMenuNativeComponent)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 15716 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/SelectMenuNativeComponent.tsx");

export default function SelectMenuNativeComponent(model) {
  const merged = Object.assign(model, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.model = JSON.stringify(model.model);
  obj.style = { width: "100%" };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
