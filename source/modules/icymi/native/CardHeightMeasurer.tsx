// Module ID: 16554
// Function ID: 16555
// Name: CardHeightMeasurer
// Dependencies: [19, 17, 21, 16487, 8379, 2]

// Module 16554 (CardHeightMeasurer)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8379 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = noop.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={noop.useCallback((nativeEvent) => {
    ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: noop.useContext(itemId(16487).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
