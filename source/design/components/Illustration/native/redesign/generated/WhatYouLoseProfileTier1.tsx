// Module ID: 13434
// Function ID: 13435
// Name: WhatYouLoseProfileTier1
// Dependencies: [19, 17, 21, 8319, 13435, 13436, 13437, 4458, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13434 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_13435");
    },
    darker() {
      return require("module_13436");
    },
    light() {
      return require("module_13437");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13435");
    },
    darker() {
      return require("module_13436");
    },
    light() {
      return require("module_13437");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13435");
    },
    darker() {
      return require("module_13436");
    },
    light() {
      return require("module_13437");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
