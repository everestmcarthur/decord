// Module ID: 17572
// Function ID: 17573
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8234, 17573, 17574, 17575, 4411, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17572 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_17573");
    },
    darker() {
      return require("module_17574");
    },
    light() {
      return require("module_17575");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17573");
    },
    darker() {
      return require("module_17574");
    },
    light() {
      return require("module_17575");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17573");
    },
    darker() {
      return require("module_17574");
    },
    light() {
      return require("module_17575");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
