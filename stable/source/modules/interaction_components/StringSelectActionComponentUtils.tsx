// Module ID: 8120
// Function ID: 8121
// Name: StringSelectActionComponentUtils
// Dependencies: [8114, 1894, 2]
// Exports: getInitialStringSelectOptions

// Module 8120 (StringSelectActionComponentUtils)
import Server from "Server" /* 1894 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8114 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/StringSelectActionComponentUtils.tsx");

export const getInitialStringSelectOptions = function getInitialStringSelectOptions(selectionActionComponent, containerId) {
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectionActionComponent.id);
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type === Server.ComponentType.STRING_SELECT) {
    let mapped = interactionComponentState.values;
  } else {
    const options = selectionActionComponent.options;
    const found = options.filter((item) => item.default);
    mapped = found.map((value) => value.value);
  }
  return mapped;
};
