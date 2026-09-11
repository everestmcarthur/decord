// Module ID: 12970
// Function ID: 12971
// Dependencies: [12948, 12936, 12971]

// Module 12970
import _mod12971 from "module_12971" /* 12971 */;
import setupIntegration from "module_12948" /* 12948 */;


export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    const options = on;
    on.on("beforeEnvelope", (arg0) => {
      options(closure_1_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp3;
          if (Array.isArray(arg0)) {
            tmp3 = arg0[1];
          }
          if (tmp3) {
            const result = options(dependencyMap[2]).stripMetadataFromStackFrames(tmp3);
            arg0[1] = tmp3;
            const obj = options(dependencyMap[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = _mod12971.addMetadataToStackFrames(options.getOptions().stackParser, type);
      }
    });
  }
}));
