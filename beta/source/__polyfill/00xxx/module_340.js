// Module ID: 340
// Function ID: 341
// Dependencies: [32, 19, 88]
// Exports: default

// Module 340
import _slicedToArray from "module_32" /* 32 */;

const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);

export default function useWindowDimensions() {
  [first, dependencyMap] = closure_4(() => first(88).get("window"));
  const items = [first];
  closure_3(() => {
    styles = first(88).addEventListener("change", function handleChange(event) {
      const _window = event.window;
      if (!tmp2) {
        dependencyMap(_window);
      }
    });
    const obj = first(88);
    const size = first(88).get("window");
    if (!tmp2) {
      dependencyMap(size);
    }
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
};
