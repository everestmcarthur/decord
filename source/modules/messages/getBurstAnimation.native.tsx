// Module ID: 7858
// Function ID: 7859
// Name: getBurstAnimation
// Dependencies: [5, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 2]
// Exports: getBurstAnimation

// Module 7858 (getBurstAnimation)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

const items = [
  {
    load() {
      return closure_0(7859);
    }
  },
  {
    load() {
      return closure_0(7860);
    }
  },
  {
    load() {
      return closure_0(7861);
    }
  },
  {
    load() {
      return closure_0(7862);
    }
  },
  {
    load() {
      return closure_0(7863);
    }
  },
  {
    load() {
      return closure_0(7864);
    }
  },
  {
    load() {
      return closure_0(7865);
    }
  },
  {
    load() {
      return closure_0(7866);
    }
  },
  {
    load() {
      return closure_0(7867);
    }
  },
  {
    load() {
      return closure_0(7868);
    }
  },
  {
    load() {
      return closure_0(7869);
    }
  },
  {
    load() {
      return closure_0(7870);
    }
  },
  {
    load() {
      return closure_0(7871);
    }
  },
  {
    load() {
      return closure_0(7872);
    }
  },
  {
    load() {
      return closure_0(7873);
    }
  },
  {
    load() {
      return closure_0(7874);
    }
  },
  {
    load() {
      return closure_0(7875);
    }
  },
  {
    load() {
      return closure_0(7876);
    }
  }
];
const items1 = [
  {
    load() {
      return closure_0(7877);
    }
  },
  {
    load() {
      return closure_0(7878);
    }
  },
  {
    load() {
      return closure_0(7879);
    }
  },
  {
    load() {
      return closure_0(7880);
    }
  },
  {
    load() {
      return closure_0(7881);
    }
  },
  {
    load() {
      return closure_0(7882);
    }
  },
  {
    load() {
      return closure_0(7883);
    }
  },
  {
    load() {
      return closure_0(7884);
    }
  },
  {
    load() {
      return closure_0(7885);
    }
  },
  {
    load() {
      return closure_0(7886);
    }
  },
  {
    load() {
      return closure_0(7887);
    }
  },
  {
    load() {
      return closure_0(7888);
    }
  },
  {
    load() {
      return closure_0(7889);
    }
  },
  {
    load() {
      return closure_0(7890);
    }
  },
  {
    load() {
      return closure_0(7891);
    }
  },
  {
    load() {
      return closure_0(7892);
    }
  },
  {
    load() {
      return closure_0(7893);
    }
  },
  {
    load() {
      return closure_0(7894);
    }
  }
];
let closure_0 = asyncGeneratorStepDefault(function*(arg0, value, arg2) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_3 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = dependencyMap;
          closure_132_2 = closure_2;
          let flag = length;
          if (length === undefined) {
            flag = false;
          }
          closure_132_3 = flag;
          let burstAnimationHash;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        const _HermesInternal = HermesInternal;
        burstAnimationHash = closure_0(dependencyMap[37]).getBurstAnimationHash("" + closure_132_0 + closure_132_1 + closure_132_2);
        if (closure_132_3) {
          let tmp6 = closure_2;
        } else {
          tmp6 = length;
        }
        tmp6[burstAnimationHash % length.length].load();
        c7 = 3;
        const obj5 = closure_0(dependencyMap[37]);
      }
    } catch (tmp16) {
      c7 = tmp;
      throw tmp16;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/getBurstAnimation.native.tsx");

export const getBurstAnimation = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
