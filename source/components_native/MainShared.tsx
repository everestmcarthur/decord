// Module ID: 16994
// Function ID: 16995
// Name: MainShared
// Dependencies: [19, 17, 1957, 4630, 21, 504, 9583, 4464, 9774, 16995, 1115, 14635, 1114, 16997, 14630, 14489, 2, 16998, 16999, 17000, 17001, 17009, 17010, 17043]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 16994 (MainShared)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4464 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9583 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9774 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14489 */;
import KeyCommandsView from "KeyCommandsView" /* 14630 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 16995 */;
import BurstReactionAnimationContainerDefault from "BurstReactionAnimationContainer" /* 16998 */;
import NativeMenuPresenterDefault from "NativeMenuPresenter" /* 16999 */;
import components_ActionSheetPresenterDefault from "components/ActionSheetPresenter" /* 17000 */;
import AlertsDefault from "Alerts" /* 17001 */;
import SoundPlayerDefault from "SoundPlayer" /* 17009 */;
import MainViewTooltipActionSheetsV2Default from "MainViewTooltipActionSheetsV2" /* 17010 */;
import ToastContainerDefault from "ToastContainer" /* 17043 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4630 */;

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
