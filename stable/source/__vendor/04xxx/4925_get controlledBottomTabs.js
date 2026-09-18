// Module ID: 4925
// Function ID: 4926
// Name: get controlledBottomTabs
// Dependencies: []

// Module 4925 (get controlledBottomTabs)
let ios26AllowInteractionsDuringTransition = { experiment: { controlledBottomTabs: false, synchronousScreenUpdatesEnabled: false, synchronousHeaderConfigUpdatesEnabled: false, synchronousHeaderSubviewUpdatesEnabled: false, androidResetScreenShadowStateOnOrientationChangeEnabled: true, iosPreventReattachmentOfDismissedScreens: true, ios26AllowInteractionsDuringTransition: true }, stable: {} };
ios26AllowInteractionsDuringTransition = "controlledBottomTabs";
let c1 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "synchronousScreenUpdatesEnabled";
let closure_2 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "synchronousHeaderConfigUpdatesEnabled";
let closure_3 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "synchronousHeaderSubviewUpdatesEnabled";
let closure_4 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "androidResetScreenShadowStateOnOrientationChangeEnabled";
let closure_5 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "iosPreventReattachmentOfDismissedScreens";
let closure_6 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
ios26AllowInteractionsDuringTransition = "ios26AllowInteractionsDuringTransition";
c1 = true;
let closure_7 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  }
};
const obj = { experiment: null, stable: null };
const obj2 = {};
Object.defineProperty(obj2, "controlledBottomTabs", {
  get: () => _true.get(),
  set: (arg0) => {
    const result = _true.set(arg0);
  }
});
Object.defineProperty(obj2, "synchronousScreenUpdatesEnabled", {
  get: () => closure_2.get(),
  set: (arg0) => {
    const result = closure_2.set(arg0);
  }
});
Object.defineProperty(obj2, "synchronousHeaderConfigUpdatesEnabled", {
  get: () => closure_3.get(),
  set: (arg0) => {
    const result = closure_3.set(arg0);
  }
});
Object.defineProperty(obj2, "synchronousHeaderSubviewUpdatesEnabled", {
  get: () => closure_4.get(),
  set: (arg0) => {
    const result = closure_4.set(arg0);
  }
});
Object.defineProperty(obj2, "androidResetScreenShadowStateOnOrientationChangeEnabled", {
  get: () => closure_5.get(),
  set: (arg0) => {
    const result = closure_5.set(arg0);
  }
});
Object.defineProperty(obj2, "iosPreventReattachmentOfDismissedScreens", {
  get: () => closure_6.get(),
  set: (arg0) => {
    const result = closure_6.set(arg0);
  }
});
Object.defineProperty(obj2, "ios26AllowInteractionsDuringTransition", {
  get: () => closure_7.get(),
  set: (arg0) => {
    const result = closure_7.set(arg0);
  }
});
obj.experiment = obj2;
obj.stable = {};

export default obj;
export const compatibilityFlags = { isNewBackTitleImplementation: true, usesHeaderFlexboxImplementation: true, usesNewAndroidHeaderHeightImplementation: true };
export const featureFlags = obj;
