// Module ID: 17603
// Function ID: 17604
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8259, 17604, 17605, 17606, 4425, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17603 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
