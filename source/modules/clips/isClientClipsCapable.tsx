// Module ID: 13731
// Function ID: 13732
// Name: isClientClipsCapable
// Dependencies: [4631, 13730, 1115, 2]
// Exports: default

// Module 13731 (isClientClipsCapable)
import PlatformUtilsAll from "PlatformUtils" /* 1115 */;
import Constants from "Constants" /* 4631 */;
import ClipsExperiment2 from "ClipsExperiment" /* 13730 */;
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
