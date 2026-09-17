// Module ID: 16652
// Function ID: 16653
// Name: openDetailsActionSheet
// Dependencies: [8500, 4607, 16618, 1897, 2]
// Exports: openDetailsActionSheet

// Module 16652 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8500 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16618, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
