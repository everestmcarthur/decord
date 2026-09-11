// Module ID: 15907
// Function ID: 15908
// Name: ShopFlashList
// Dependencies: [19, 21, 4607, 576, 15880, 8966, 1178, 8318, 1114, 2]
// Exports: default

// Module 15907 (ShopFlashList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import generated_NoResults from "generated/NoResults" /* 8318 */;
import _mod8966 from "module_8966" /* 8966 */;
import useScrollToInitialIndexOnce from "useScrollToInitialIndexOnce" /* 15880 */;
import noop from "module_19" /* 19 */;

require = fn;
function ShopEmptyState() {
  const obj = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
  const intl = util.intl;
  obj.body = intl.string(util.t.eAn6z2);
  return jsx(native.EmptyState, { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopFlashList.tsx");

export default function ShopFlashList(initialScrollIndex) {
  initialScrollIndex = initialScrollIndex.initialScrollIndex;
  ({ data, renderItem, getItemType } = initialScrollIndex);
  const ref = noop.useRef(null);
  const tmp2 = closure_4();
  let tmp5 = null != initialScrollIndex;
  if (tmp5) {
    tmp5 = initialScrollIndex > 0;
  }
  const obj = useScrollToInitialIndexOnce;
  const scrollToInitialIndexOnce = obj.useScrollToInitialIndexOnce({ shouldScroll: tmp5, initialScrollIndex, flashListRef: ref, afterMs: useScrollToInitialIndexOnce.INITIAL_SCROLL_DELAY_MS });
  return jsx(_mod8966.FlashList, { ref, data, renderItem, showsVerticalScrollIndicator: false, ListEmptyComponent: ShopEmptyState, initialScrollIndex, getItemType, contentContainerStyle: tmp2.contentContainer });
};
