// Module ID: 16563
// Function ID: 16564
// Name: openDetailsActionSheet
// Dependencies: [8439, 4574, 16529, 1896, 2]
// Exports: openDetailsActionSheet

// Module 16563 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8439 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16529, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
