// Module ID: 112
// Function ID: 113
// Name: Commands
// Dependencies: [65, 113]

// Module 112 (Commands)
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import module_65 from "module_65" /* 65 */;

const value = module_65.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });
