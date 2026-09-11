// Module ID: 16728
// Function ID: 16729
// Name: GridItemPlaceholder
// Dependencies: [19, 17, 21, 4607, 576, 2]

// Module 16728 (GridItemPlaceholder)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj = { imageContainer: { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_2 = createStyles.createStyles(obj);
const obj3 = { flex: 1, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default noop.memo((arg0) => {
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, closure_2().imageContainer, style];
  obj.style = items;
  return <View style={null} />;
});
