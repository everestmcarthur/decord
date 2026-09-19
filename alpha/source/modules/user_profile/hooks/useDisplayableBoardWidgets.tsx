// Module ID: 13193
// Function ID: 13194
// Name: useDisplayableBoardWidgets
// Dependencies: [19, 7867, 7864, 7857, 13194, 13195, 2]
// Exports: useDisplayableBoardWidgets

// Module 13193 (useDisplayableBoardWidgets)
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7867 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 13195 */;
import noop from "module_19" /* 19 */;

require = fn;
function isNonEmptyBoardWidget(games) {
  let tmp3 = games instanceof UserProfileApplicationWidgetTypes.ApplicationWidget;
  if (!tmp3) {
    let tmp4 = games instanceof tmp(7864).UserProfilePersonalWidget;
    if (!tmp4) {
      let isGameWidgetResult = tmp(7857).isGameWidget(games);
      if (isGameWidgetResult) {
        isGameWidgetResult = games.games.length > 0;
      }
      tmp4 = isGameWidgetResult;
      const tmpResult = tmp(7857);
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useDisplayableBoardWidgets.tsx");

export const useDisplayableBoardWidgets = function useDisplayableBoardWidgets(id) {
  isMobileGameCollectionExperimentEnabled = isMobileGameCollectionExperimentEnabled(13194).useIsMobileGameCollectionExperimentEnabled("UserProfileWidgetsBoard");
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
