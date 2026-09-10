// Module ID: 17590
// Function ID: 17591
// Name: EmptyServerSettingsAuditLog
// Dependencies: [19, 17, 21, 8259, 17591, 17592, 17593, 4425, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17590 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_17591");
    },
    darker() {
      return require("module_17592");
    },
    light() {
      return require("module_17593");
    }
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17591");
    },
    darker() {
      return require("module_17592");
    },
    light() {
      return require("module_17593");
    }
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17591");
    },
    darker() {
      return require("module_17592");
    },
    light() {
      return require("module_17593");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
