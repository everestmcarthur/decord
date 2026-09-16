// Module ID: 17765
// Function ID: 17766
// Name: EmptyServerSettingsAuditLog
// Dependencies: [19, 17, 21, 8361, 17766, 17767, 17768, 4489, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17765 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4489 */;
import _mod8361 from "module_8361" /* 8361 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("module_17766");
    },
    darker() {
      return require("module_17767");
    },
    light() {
      return require("module_17768");
    }
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17766");
    },
    darker() {
      return require("module_17767");
    },
    light() {
      return require("module_17768");
    }
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17766");
    },
    darker() {
      return require("module_17767");
    },
    light() {
      return require("module_17768");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
