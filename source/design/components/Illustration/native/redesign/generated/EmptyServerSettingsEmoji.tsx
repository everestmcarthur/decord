// Module ID: 17654
// Function ID: 17655
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8319, 17655, 17656, 17657, 4458, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17654 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
