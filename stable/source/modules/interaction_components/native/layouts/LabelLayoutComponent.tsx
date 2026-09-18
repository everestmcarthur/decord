// Module ID: 17397
// Function ID: 17398
// Name: LabelLayoutComponent
// Dependencies: [19, 17, 21, 8113, 1894, 6607, 2]
// Exports: default

// Module 17397 (LabelLayoutComponent)
import Server from "Server" /* 1894 */;
import Input from "Input" /* 6607 */;
import ComponentStateContext from "ComponentStateContext" /* 8113 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/layouts/LabelLayoutComponent.tsx");

export default function LabelLayoutComponent(arg0) {
  ({ component, renderComponent } = arg0);
  ({ label, description } = arg0);
  const componentError = ComponentStateContext.useComponentError(component);
  if (component.type === Server.ComponentType.CHECKBOX) {
    let renderComponentResult = renderComponent(component, "label-child");
  } else {
    const obj2 = { label, description, required: component.required, errorMessage: componentError, children: null };
    const obj3 = { style: { width: "100%" }, children: renderComponent(component, "label-child") };
    obj2.children = <View style={{ width: "100%" }}>{renderComponent(component, "label-child")}</View>;
    renderComponentResult = jsx(Input.Input, { label, description, required: component.required, errorMessage: componentError, children: null });
  }
  return renderComponentResult;
};
