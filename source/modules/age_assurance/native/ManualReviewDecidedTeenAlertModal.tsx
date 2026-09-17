// Module ID: 8740
// Function ID: 8741
// Name: ManualReviewDecidedTeenAlertModal
// Dependencies: [19, 21, 4990, 1115, 2981, 4636, 8560, 2025, 4990, 2]
// Exports: default

// Module 8740 (ManualReviewDecidedTeenAlertModal)
import util from "util" /* 1115 */;
import _modDef2981 from "module_2981" /* 2981 */;
import Text_Text from "Text/Text" /* 4636 */;
import AlertModal from "AlertModal" /* 4990 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal() {
  let obj = { title: null, content: null, actions: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef2981.AA3xYb);
  const intl2 = util.intl;
  obj.content = intl2.format(_modDef2981["2+f8w1"], {
    contentAndSettingsHook(children, arg1) {
      return jsx(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(8560);
          const intl = closure_1_0(1115).intl;
          return obj.openUrl(closure_1_1(2025).getArticleURL(intl.string(closure_1_1(2981).agiNYw)));
        },
        children
      }, arg1);
    }
  });
  const obj3 = { children: null };
  const obj4 = { text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t["NX+WJN"]);
  obj3.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null });
};
