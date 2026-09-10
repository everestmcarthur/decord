// Module ID: 13362
// Function ID: 13363
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 17, 21, 8259, 13363, 13364, 13365, 4425, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13362 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_13363");
    },
    darker() {
      return require("module_13364");
    },
    light() {
      return require("module_13365");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13363");
    },
    darker() {
      return require("module_13364");
    },
    light() {
      return require("module_13365");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13363");
    },
    darker() {
      return require("module_13364");
    },
    light() {
      return require("module_13365");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
