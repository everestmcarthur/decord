// Module ID: 17072
// Function ID: 17073
// Name: useNativeThemeUpdater
// Dependencies: [19, 1183, 17073, 17074, 2]
// Exports: default

// Module 17072 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(17073).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(17074).updateTheme(theme);
        const obj = handleThemeUpdate(17074);
      }
    }
    handleThemeUpdate(17074).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};
