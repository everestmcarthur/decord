// Module ID: 6051
// Function ID: 6052
// Name: ExperimentalGiftEnvelopeIllocon
// Dependencies: [21, 5639, 6052, 2]
// Exports: ExperimentalGiftEnvelopeIllocon

// Module 6051 (ExperimentalGiftEnvelopeIllocon)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5639 */;
import _modDef6052 from "module_6052" /* 6052 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ExperimentalGiftEnvelopeIllocon.native.tsx");

export const ExperimentalGiftEnvelopeIllocon = function ExperimentalGiftEnvelopeIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  const obj2 = { uri: _modDef6052 };
  obj.source = obj2;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null });
};
