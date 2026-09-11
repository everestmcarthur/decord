// Module ID: 17046
// Function ID: 17047
// Name: useNativeThemeUpdater
// Dependencies: [19, 1183, 17047, 17048, 2]
// Exports: default

// Module 17046 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(17047).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(17048).updateTheme(theme);
        const obj = handleThemeUpdate(17048);
      }
    }
    handleThemeUpdate(17048).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
