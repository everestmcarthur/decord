// Module ID: 17056
// Function ID: 17057
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8361, 17057, 17058, 17059, 4489, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 17056 (WebhookEmpty)
import shared from "shared" /* 4489 */;
import _mod8361 from "module_8361" /* 8361 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("module_17057");
    },
    darker() {
      return require("module_17058");
    },
    light() {
      return require("module_17059");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17057");
    },
    darker() {
      return require("module_17058");
    },
    light() {
      return require("module_17059");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17057");
    },
    darker() {
      return require("module_17058");
    },
    light() {
      return require("module_17059");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
