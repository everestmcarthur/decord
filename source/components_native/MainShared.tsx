// Module ID: 16948
// Function ID: 16949
// Name: MainShared
// Dependencies: [19, 17, 1957, 4597, 21, 504, 9522, 4431, 9713, 16949, 1115, 14608, 1114, 16951, 14603, 14462, 2, 16952, 16953, 16954, 16955, 16963, 16964, 16994]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 16948 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4431 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9522 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9713 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14462 */;
import KeyCommandsView from "KeyCommandsView" /* 14603 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 16949 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 16952 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 16953 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 16954 */;
import AlertsDefault from "Alerts" /* 16955 */;
import SoundPlayerDefault from "SoundPlayer" /* 16963 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 16964 */;
import ToastContainerDefault from "ToastContainer" /* 16994 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4597 */;

const require = globalThis.__r;

require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerDefault;
export const MenuContainer = NativeMenuPresenterDefault;
export const ActionSheetContainer = components_ActionSheetPresenterDefault;
export const Alerts = AlertsDefault;
export const SoundPlayer = SoundPlayerDefault;
export const MainViewTooltipActionSheetsV2 = MainViewTooltipActionSheetsV2Default;
export const ToastContainer = ToastContainerDefault;
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  const items = [ChannelStore, RTCConnectionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant({ isActivityViewFocused: false });
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  VoicePanelUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          const obj4 = { channel: stateFromStores };
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: stateFromStores });
        }
      }
    }
  }
  return tmp7;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = noop.useMemo(() => {
    if (obj.isAndroid()) {
      let keyModifierCommand = require("NativeKeyCommandsModule").getConstants().keyModifierCommand;
      const obj2 = require("NativeKeyCommandsModule");
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    const obj3 = { input: "k", modifierFlags: keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = tmp(tmp2[12]).intl;
    obj3.discoverabilityTitle = intl.string(util.t.yYsRlD);
    obj3.onKeyCommand = function onKeyCommand() {
      closure_1_1(closure_1_2[13])();
    };
    const items = [obj3];
    return items;
  }, []);
  const keyCommands = KeyCommandsView.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = noop.useEffect(() => {
    const result = AccessibilityManagerDefault.checkScreenreaderEnabled();
  }, []);
};
