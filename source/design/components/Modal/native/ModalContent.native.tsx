// Module ID: 8450
// Function ID: 8451
// Name: ModalContent
// Dependencies: [19, 17, 21, 4574, 2]

// Module 8450 (ModalContent)
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_2 = createStyles.createStyles({ scrollContainer: { flex: 1 }, contentContainer: { flexDirection: "column", paddingTop: 24, paddingHorizontal: 16, alignItems: "center", flexGrow: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalContent.native.tsx");

export const ModalContent = noop.forwardRef((children, ref) => {
  const tmp = closure_2();
  return <ScrollView style={tmp.scrollContainer} contentContainerStyle={tmp.contentContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" ref={arg1}>{arg0.children}</ScrollView>;
});
