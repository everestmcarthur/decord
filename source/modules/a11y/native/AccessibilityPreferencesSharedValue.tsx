// Module ID: 14439
// Function ID: 14440
// Name: A11Y_FEATURE_MAP
// Dependencies: [1349, 2, 14131]

// Module 14439 (A11Y_FEATURE_MAP)
import set from "set" /* 2 */;
import AccessibilityFeatureFlags2 from "AccessibilityFeatureFlags" /* 1349 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 14131 */;

const AccessibilityFeatureFlags = AccessibilityFeatureFlags2.AccessibilityFeatureFlags;
const result = set.fileFinishedImporting("modules/a11y/native/AccessibilityPreferencesSharedValue.tsx");

export const A11Y_FEATURE_MAP = { [AccessibilityFeatureFlags.REDUCED_MOTION]: "reduceMotion", [AccessibilityFeatureFlags.REDUCED_MOTION_PREFERS_CROSSFADES]: "prefersCrossfades", [AccessibilityFeatureFlags.SCREENREADER]: "screenReaderEnabled" };
export const accessibilityPreferencesSharedValue = AccessibilityAnnouncer.accessibilityPreferencesSharedValue;
