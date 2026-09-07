// Module ID: 17669
// Function ID: 17670
// Name: safetyCheck
// Dependencies: [32, 19, 1085, 4411, 17670, 17671, 17672, 17676, 17677, 6992, 4495, 2]
// Exports: default

// Module 17669 (safetyCheck)
import useThemeDefault from "useTheme" /* 4495 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ThemeTypes } from "sum" /* 1085 */;

const require = arg1;
class EnableCommunityModalIcons {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = ThemeTypes.LIGHT;
    obj.theme = global;
    return obj;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(17670);
    } else {
      tmpResult = tmp(17671);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(17672) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(17676);
    } else {
      tmpResult = tmp(17677);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(6992) /* registerAsset */;
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return callback(React.useState(() => {
    if (typeof closure_1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_1_6.prototype);
    obj[0] = closure_1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};
