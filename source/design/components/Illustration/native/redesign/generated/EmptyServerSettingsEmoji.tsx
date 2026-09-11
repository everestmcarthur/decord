// Module ID: 17653
// Function ID: 17654
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8317, 17654, 17655, 17656, 4458, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17653 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17654");
    },
    darker() {
      return require("module_17655");
    },
    light() {
      return require("module_17656");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
