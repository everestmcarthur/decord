// Module ID: 16849
// Function ID: 16850
// Name: getWebhookEmptySource
// Dependencies: [19, 17, 21, 8233, 16850, 16851, 16852, 4411, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16849 (getWebhookEmptySource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16850);
    },
    darker() {
      return callback(16851);
    },
    light() {
      return callback(16852);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16850);
    },
    darker() {
      return callback(16851);
    },
    light() {
      return callback(16852);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16850);
    },
    darker() {
      return callback(16851);
    },
    light() {
      return callback(16852);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
