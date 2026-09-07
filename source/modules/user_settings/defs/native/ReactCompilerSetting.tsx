// Module ID: 15885
// Function ID: 15886
// Dependencies: [11473, 15565, 2]

// Module 15885
import set from "set" /* 2 */;
import WrenchIcon from "WrenchIcon" /* 15565 */;
import createToggle from "createToggle" /* 11473 */;

const obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;
