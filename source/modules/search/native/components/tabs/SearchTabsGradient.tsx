// Module ID: 16804
// Function ID: 16805
// Name: SearchTabsGradient
// Dependencies: [19, 21, 4308, 576, 4456, 12854, 2]
// Exports: default

// Module 16804 (SearchTabsGradient)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4456 */;
import TabsGradientDefault from "TabsGradient" /* 12854 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsGradient.tsx");

export default function SearchTabsGradient(state) {
  let token;
  token = token(4308).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  const colors = noop.useMemo(() => {
    const items = [token, ColorUtils.hexWithOpacity(token, 0)];
    return items;
  }, items);
  return jsx(TabsGradientDefault, { state: state.state, colors });
};
