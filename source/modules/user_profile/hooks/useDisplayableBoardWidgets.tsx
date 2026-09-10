// Module ID: 9064
// Function ID: 9065
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7647, 7644, 7637, 9065, 9066, 2]
// Exports: useDisplayableBoardWidgets

// Module 9064 (useDisplayableBoardWidgets)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7647 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 9066 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7644).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7637).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7637);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(9065).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
  const tmp2 = useUserProfileWidgetsDefault(id);
  importDefault = tmp2;
  const items = [isMobileGameCollectionExperimentEnabled, tmp2];
  return noop.useMemo(() => {
    if (isMobileGameCollectionExperimentEnabled) {
      let found = closure_1.filter(isNonEmptyBoardWidget);
    } else {
      found = [];
    }
    return found;
  }, items);
};
