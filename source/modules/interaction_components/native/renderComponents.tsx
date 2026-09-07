// Module ID: 17394
// Function ID: 17395
// Name: renderComponents
// Dependencies: [19, 21, 1894, 17395, 15714, 17396, 15717, 15718, 17397, 17398, 17400, 17401, 17402, 2]

// Module 17394 (renderComponents)
import noopAll from "noop" /* 19 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1894 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15714 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15717 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15718 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17395 */;
import _modDef17396 from "module_17396" /* 17396 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17397 */;
import MainAreaCanUploadDefault from "MainAreaCanUpload" /* 17398 */;
import _modDef17400 from "module_17400" /* 17400 */;
import _modDef17401 from "module_17401" /* 17401 */;
import _modDef17402 from "module_17402" /* 17402 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function renderComponents(components) {
  return components.map((arg0, arg1) => callback(arg0, arg1.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (PermissionOverwriteType.ComponentType.ACTION_ROW === type) {
    let obj = {};
    const merged = Object.assign(component);
    obj.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1894).ComponentType.STRING_SELECT === type) {
    obj = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1894).ComponentType.TEXT_INPUT === type) {
    obj1 = {};
    const merged2 = Object.assign(component);
    return jsx(_modDef17396, {}, arg1);
  } else {
    if (tmp(1894).ComponentType.USER_SELECT !== type) {
      if (tmp(1894).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1894).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1894).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1894).ComponentType.TEXT_DISPLAY === type) {
              const obj2 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.LABEL === type) {
              const obj3 = {};
              const merged4 = Object.assign(component);
              obj3.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.FILE_UPLOAD === type) {
              const obj4 = {};
              const merged5 = Object.assign(component);
              return jsx(MainAreaCanUploadDefault, {}, arg1);
            } else if (tmp(1894).ComponentType.RADIO_GROUP === type) {
              const obj5 = {};
              const merged6 = Object.assign(component);
              return jsx(_modDef17400, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX_GROUP === type) {
              const obj6 = {};
              const merged7 = Object.assign(component);
              return jsx(_modDef17401, {}, arg1);
            } else if (tmp(1894).ComponentType.CHECKBOX === type) {
              obj = {};
              const merged8 = Object.assign(component);
              return jsx(_modDef17402, {}, arg1);
            }
          }
        }
      }
    }
    const obj7 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
noopAll;
const result = require("set").fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
