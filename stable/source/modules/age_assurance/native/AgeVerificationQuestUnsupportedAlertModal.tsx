// Module ID: 8427
// Function ID: 8428
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: [19, 21, 4910, 1114, 2946, 4910, 2]
// Exports: default

// Module 8427 (AgeVerificationQuestUnsupportedAlertModal)
import util from "util" /* 1114 */;
import _modDef2946 from "module_2946" /* 2946 */;
import AlertModal from "AlertModal" /* 4910 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  const obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef2946.gUqXQN);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef2946.yBHwMy);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};
