// Module ID: 17642
// Function ID: 17643
// Name: renderComponents
// Dependencies: [19, 21, 1895, 17643, 15848, 17644, 15851, 15852, 17645, 17646, 17648, 17649, 17650, 2]

// Module 17642 (renderComponents)
import Server from "Server" /* 1895 */;
import StringSelectActionComponentDefault from "StringSelectActionComponent" /* 15848 */;
import SearchableSelectActionComponentDefault from "SearchableSelectActionComponent" /* 15851 */;
import TextDisplayComponentDefault from "TextDisplayComponent" /* 15852 */;
import ActionRowLayoutComponentDefault from "ActionRowLayoutComponent" /* 17643 */;
import TextInputActionComponentDefault from "TextInputActionComponent" /* 17644 */;
import LabelLayoutComponentDefault from "LabelLayoutComponent" /* 17645 */;
import FileUploadActionComponentDefault from "FileUploadActionComponent" /* 17646 */;
import RadioGroupActionComponentDefault from "RadioGroupActionComponent" /* 17648 */;
import CheckboxGroupActionComponentDefault from "CheckboxGroupActionComponent" /* 17649 */;
import CheckboxActionComponentDefault from "CheckboxActionComponent" /* 17650 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderComponents(components) {
  return components.map((item, index) => renderComponent(item, index.toString()));
}
function renderComponent(component, arg1) {
  const type = component.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const obj2 = {};
    const merged = Object.assign(component);
    obj2.renderComponents = renderComponents;
    return jsx(ActionRowLayoutComponentDefault, {}, arg1);
  } else if (tmp(1895).ComponentType.STRING_SELECT === type) {
    const obj3 = {};
    const merged1 = Object.assign(component);
    return jsx(StringSelectActionComponentDefault, {}, arg1);
  } else if (tmp(1895).ComponentType.TEXT_INPUT === type) {
    const obj4 = {};
    const merged2 = Object.assign(component);
    return jsx(TextInputActionComponentDefault, {}, arg1);
  } else {
    if (tmp(1895).ComponentType.USER_SELECT !== type) {
      if (tmp(1895).ComponentType.ROLE_SELECT !== type) {
        if (tmp(1895).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(1895).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(1895).ComponentType.TEXT_DISPLAY === type) {
              const obj5 = {};
              const merged3 = Object.assign(component);
              return jsx(TextDisplayComponentDefault, {}, arg1);
            } else if (tmp(1895).ComponentType.LABEL === type) {
              const obj6 = {};
              const merged4 = Object.assign(component);
              obj6.renderComponent = renderComponent;
              return jsx(LabelLayoutComponentDefault, {}, arg1);
            } else if (tmp(1895).ComponentType.FILE_UPLOAD === type) {
              const obj7 = {};
              const merged5 = Object.assign(component);
              return jsx(FileUploadActionComponentDefault, {}, arg1);
            } else if (tmp(1895).ComponentType.RADIO_GROUP === type) {
              const obj8 = {};
              const merged6 = Object.assign(component);
              return jsx(RadioGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1895).ComponentType.CHECKBOX_GROUP === type) {
              const obj9 = {};
              const merged7 = Object.assign(component);
              return jsx(CheckboxGroupActionComponentDefault, {}, arg1);
            } else if (tmp(1895).ComponentType.CHECKBOX === type) {
              const obj = {};
              const merged8 = Object.assign(component);
              return jsx(CheckboxActionComponentDefault, {}, arg1);
            }
          }
        }
      }
    }
    const obj10 = {};
    const merged9 = Object.assign(component);
    return jsx(SearchableSelectActionComponentDefault, {}, arg1);
  }
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/renderComponents.tsx");

export { renderComponents };
