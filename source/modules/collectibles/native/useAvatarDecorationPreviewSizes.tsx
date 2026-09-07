// Module ID: 11086
// Function ID: 11087
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [1477, 8815, 2]
// Exports: useAvatarDecorationPreviewSizes

// Module 11086 (useAvatarDecorationPreviewSizes)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 8815 */;

let result = set.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
};
