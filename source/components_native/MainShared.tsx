// Module ID: 17005
// Function ID: 17006
// Name: MainShared
// Dependencies: [19, 17, 1957, 4628, 21, 504, 9560, 4462, 9751, 17006, 1115, 14657, 1114, 17008, 14652, 14511, 2, 17009, 17010, 17011, 17012, 17020, 17021, 17053]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 17005 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4462 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9560 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9751 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14511 */;
import KeyCommandsView from "KeyCommandsView" /* 14652 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 17006 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 17009 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 17010 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17011 */;
import AlertsDefault from "Alerts" /* 17012 */;
import SoundPlayerDefault from "SoundPlayer" /* 17020 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17021 */;
import ToastContainerDefault from "ToastContainer" /* 17053 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4628 */;

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
