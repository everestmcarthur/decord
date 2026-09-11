// Module ID: 15355
// Function ID: 15356
// Name: SettingsAppearanceActivityCardsItem
// Dependencies: [19, 21, 8964, 576, 15356, 2]
// Exports: default

// Module 15355 (SettingsAppearanceActivityCardsItem)
import nativeDefault from "native" /* 576 */;
import SettingsAppearanceActivityCardItemDefault from "SettingsAppearanceActivityCardItem" /* 15356 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardsItem.tsx");

export default function ActivityCardsItem(animatedStyles) {
  animatedStyles = animatedStyles.animatedStyles;
  const obj = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true
  };
  return jsx(animatedStyles(8964).FlashList, {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
    data: animatedStyles.cards,
    renderItem(item) {
      const merged = Object.assign(item.item);
      return jsx(SettingsAppearanceActivityCardItemDefault, { animatedStyles });
    },
    keyExtractor(title) {
      return title.title;
    },
    showsHorizontalScrollIndicator: false,
    horizontal: true
  });
};
