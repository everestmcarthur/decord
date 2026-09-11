// Module ID: 16334
// Function ID: 16335
// Name: useShouldRenderChannelList
// Dependencies: [32, 19, 7549, 5328, 1074, 4464, 4465, 1109, 2]
// Exports: useShouldRenderChannelList

// Module 16334 (useShouldRenderChannelList)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CacheStore from "CacheStore" /* 7549 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5328 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
let c7 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  [first, dependencyMap] = noop.useState(c7);
  const items = [first];
  const effect = noop.useEffect(() => {
    function allowRender() {
      c7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange() {
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleNavigationChange() {
      const obj = first(handleGatewayChange[5]);
      const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    if (!allowRender) {
      let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
      let result1 = CacheStore.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1109).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(4465).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
        const result1 = CacheStore.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
};
