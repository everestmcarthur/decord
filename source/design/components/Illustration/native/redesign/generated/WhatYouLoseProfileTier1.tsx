// Module ID: 13432
// Function ID: 13433
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 17, 21, 8317, 13433, 13434, 13435, 4458, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13432 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_13433");
    },
    darker() {
      return require("module_13434");
    },
    light() {
      return require("module_13435");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13433");
    },
    darker() {
      return require("module_13434");
    },
    light() {
      return require("module_13435");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13433");
    },
    darker() {
      return require("module_13434");
    },
    light() {
      return require("module_13435");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
