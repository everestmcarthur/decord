// Module ID: 12022
// Function ID: 12023
// Name: ModalFooter
// Dependencies: [19, 17, 21, 4607, 2]
// Exports: ModalFooter

// Module 12022 (ModalFooter)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_2 = createStyles.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = function ModalFooter(children) {
  return <View style={closure_2().footer}>{arg0.children}</View>;
};
