// Module ID: 15830
// Function ID: 15831
// Name: InternalBuildUpdateSetting
// Dependencies: [14482, 21, 13993, 504, 4228, 14931, 4585, 15238, 11601, 2]

// Module 15830 (InternalBuildUpdateSetting)
import initialize from "initialize" /* 504 */;
import _modDef4228 from "module_4228" /* 4228 */;
import MobileNativeUpdateUtilsAll from "MobileNativeUpdateUtils" /* 13993 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14931 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14482 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11601);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [MobileNativeUpdateStore];
    if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp(4585).DownloadIcon;
    } else {
      RefreshIcon = tmp(15238).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [MobileNativeUpdateStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const items1 = [MobileNativeUpdateStore];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => MobileNativeUpdateStore.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + _modDef4228(stateFromStores1).fromNow();
        const obj3 = _modDef4228(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      MobileNativeUpdateUtilsAll.openBuildInstaller(newBuild);
    } else {
      MobileNativeUpdateStore.checkForNewerBuild();
    }
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;
