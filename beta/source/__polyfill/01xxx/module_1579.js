// Module ID: 1579
// Function ID: 1580
// Dependencies: [19, 1551]
// Exports: useStateForPath

// Module 1579
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1551 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return noop.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
