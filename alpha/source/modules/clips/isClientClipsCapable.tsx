// Module ID: 13935
// Function ID: 13936
// Name: isClientClipsCapable
// Dependencies: [4781, 13934, 1364, 2]
// Exports: default

// Module 13935 (isClientClipsCapable)
import PlatformUtilsAll from "PlatformUtils" /* 1364 */;
import Constants from "Constants" /* 4781 */;
import ClipsExperiment2 from "ClipsExperiment" /* 13934 */;
import size from "module_2" /* 2 */;

const Features = Constants.Features;
const result = size.fileFinishedImporting("modules/clips/isClientClipsCapable.tsx");

export default function isClientClipsCapable(getMediaEngine) {
  const ClipsExperiment = ClipsExperiment2.ClipsExperiment;
  let ignorePlatformRestriction = ClipsExperiment.getConfig({ location: "isClipsClientCapable" }).ignorePlatformRestriction;
  const mediaEngine = getMediaEngine.getMediaEngine();
  if (!ignorePlatformRestriction) {
    let isDesktopResult = PlatformUtilsAll.isDesktop();
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.supports(Features.CLIPS);
    }
    if (isDesktopResult) {
      isDesktopResult = mediaEngine.hasClipsV3Support();
    }
    ignorePlatformRestriction = isDesktopResult;
  }
  return ignorePlatformRestriction;
};
