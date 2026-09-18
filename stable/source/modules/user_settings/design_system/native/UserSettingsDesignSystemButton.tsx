// Module ID: 15757
// Function ID: 15758
// Name: UserSettingsDesignSystemButton
// Dependencies: [32, 19, 17, 1230, 21, 15758, 4975, 15759, 8098, 7381, 9896, 14168, 9066, 7950, 9134, 4560, 576, 1483, 4527, 15760, 1896, 4973, 4556, 10657, 9886, 9892, 9894, 9893, 9891, 9890, 5433, 4271, 1091, 4987, 5607, 5125, 8915, 2]
// Exports: default

// Module 15757 (UserSettingsDesignSystemButton)
import nativeDefault from "native" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _modDef7381 from "module_7381" /* 7381 */;
import _modDef7950 from "module_7950" /* 7950 */;
import IconButton from "IconButton" /* 8098 */;
import _modDef9066 from "module_9066" /* 9066 */;
import _modDef9134 from "module_9134" /* 9134 */;
import _modDef9886 from "module_9886" /* 9886 */;
import _modDef9890 from "module_9890" /* 9890 */;
import _modDef9891 from "module_9891" /* 9891 */;
import _modDef9892 from "module_9892" /* 9892 */;
import _modDef9893 from "module_9893" /* 9893 */;
import _modDef9894 from "module_9894" /* 9894 */;
import ImageButton from "ImageButton" /* 9896 */;
import _modDef10657 from "module_10657" /* 10657 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14168 */;
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15758 */;
import _modDef15759 from "module_15759" /* 15759 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ExampleButton(arg0) {
  ({ variant, text, grow } = arg0);
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  ({ buttonScale, buttonSize, iconPosition, showIcon, showDisabled } = tmp3);
  noop.useRef(null);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp4[1];
  const items = [enableLoadingState];
  const callback = noop.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      closure_2(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_2(false);
      }, 5000);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    closure_2(true);
    closure_1.current = setTimeout(() => {
      closure_1_2(false);
    }, 5000);
  }, []);
  const obj = { disabled: showDisabled, onPress: callback, onLongPress: callback1, loading: tmp4[0], variant, text: null, grow: null, size: null, icon: null, iconPosition: null, scaleAmountInPx: null };
  if (text == null) {
    text = variant;
  }
  if (text == null) {
    text = "";
  }
  obj.text = text;
  if (grow == null) {
    grow = false;
  }
  obj.grow = grow;
  obj.size = buttonSize;
  let tmpResult;
  if (showIcon) {
    tmpResult = _modDef15759;
  }
  obj.icon = tmpResult;
  obj.iconPosition = iconPosition;
  obj.scaleAmountInPx = buttonScale;
  return React7(components_Button_Button.Button, obj);
}
function ExampleIconButton(arg0) {
  ({ variant, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp3 = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp3.enableLoadingState;
  const showDisabled = tmp3.showDisabled;
  noop.useRef(null);
  [tmp5, c2] = noop.useState(false);
  const items = [enableLoadingState];
  closure_3 = noop.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label: null,
      grow: true,
      loading: null,
      variant: null,
      icon: null
    };
    let str2 = variant;
    if (variant == null) {
      str2 = "";
    }
    obj2.label = str2;
    obj2.loading = tmp5;
    obj2.variant = variant;
    obj2.icon = tmp(7381);
    let obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: null,
      loading: null,
      variant: null,
      size: null,
      icon: null
    };
    let str = variant;
    if (variant == null) {
      str = "";
    }
    obj.accessibilityLabel = str;
    obj.loading = tmp5;
    obj.variant = variant;
    obj.size = tmp3.buttonSize;
    obj.icon = tmp(7381);
  }
  return React7(IconButton.IconButton, obj);
}
function ExampleImageButton(arg0) {
  ({ image, label, showLabel } = arg0);
  if (showLabel === undefined) {
    showLabel = false;
  }
  c2 = undefined;
  const tmp = useDesignSystemSettingsStateDefault();
  const enableLoadingState = tmp.enableLoadingState;
  const showDisabled = tmp.showDisabled;
  noop.useRef(null);
  [tmp3, c2] = noop.useState(false);
  const items = [enableLoadingState];
  closure_3 = noop.useCallback(() => {
    if (enableLoadingState) {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      _undefined(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 5000);
    }
  }, items);
  if (showLabel) {
    const obj2 = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      label,
      grow: true,
      loading: tmp3,
      image
    };
    let obj = obj2;
  } else {
    obj = {
      disabled: showDisabled,
      onPress() {
          return closure_3();
        },
      accessibilityLabel: label,
      loading: tmp3,
      size: tmp.buttonSize,
      image
    };
  }
  return React7(ImageButton.ImageButton, obj);
}
function ExampleToggleButton() {
  [first, closure_1] = noop.useState(false);
  const obj2 = { on: null, off: null };
  const obj = useToggleButtonProps;
  obj2.on = { text: "Unfollow", icon: _modDef9066 };
  const obj3 = { text: "Unfollow", icon: _modDef9066 };
  obj2.off = { text: "Follow", icon: _modDef7950 };
  const toggleButtonProps = obj.useToggleButtonProps(obj2, first);
  const obj5 = {};
  const merged = Object.assign(toggleButtonProps);
  obj5.onPress = function onPress() {
    closure_1(!first);
  };
  obj5.variant = "secondary";
  obj5.size = "md";
  return React7(components_Button_Button.Button, obj5);
}
function ExampleIconToggleButton() {
  [first, closure_1] = noop.useState(false);
  const obj2 = { on: null, off: null };
  const obj = useToggleButtonProps;
  obj2.on = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9134 };
  const obj3 = { variant: "destructive", accessibilityLabel: "Mute", icon: _modDef9134 };
  obj2.off = { variant: "secondary", accessibilityLabel: "Mute", icon: _modDef9134 };
  const toggleIconButtonProps = obj.useToggleIconButtonProps(obj2, first);
  const obj5 = {};
  const merged = Object.assign(toggleIconButtonProps);
  obj5.onPress = function onPress() {
    closure_1(!first);
  };
  obj5.size = "md";
  return React7(IconButton.IconButton, obj5);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ClientThemesConstants = fn(1230);
({ LIGHT_BACKGROUND_GRADIENT_PRESETS: closure_7, DARK_BACKGROUND_GRADIENT_PRESETS: closure_8 } = ClientThemesConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = ["primary", "secondary", "tertiary"];
let closure_13 = ["primary-overlay", "secondary-overlay"];
let closure_14 = ["destructive", "active"];
let closure_15 = ["expressive"];
let closure_16 = ["experimental_premium-primary", "experimental_premium-secondary"];
const createStyles = fn(4560);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonContainer: null, overlayButtonContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.overlayButtonContainer = { backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButton.tsx");

export default function UserSettingsDesignSystemButton() {
  const tmp = closure_22();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  importDefault = noop.useCallback(() => {
    onPress(paths[18]).openLazy(closure_0(paths[20])(paths[19], paths.paths), "UserSettingsDesignSystemButtonActionSheet");
  }, []);
  navigation.setOptions({
    headerRight() {
      return React7(IconButton.IconButton, { onPress, icon: _modDef7381, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  });
  const obj3 = { children: null };
  const obj4 = { children: null };
  const obj5 = { spacing: 24, children: null };
  const obj6 = { children: null };
  let obj = require("useNavigation");
  const obj2 = {
    headerRight() {
      return React7(IconButton.IconButton, { onPress, icon: _modDef7381, size: "sm", variant: "secondary", accessibilityLabel: "Settings" });
    }
  };
  let items = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) }), ];
  const obj7 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical buttons" }) };
  items[1] = closure_9(closure_5, {
    children: closure_12.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj6.children = items;
  const items1 = [closure_10(require("Stack/Stack").Stack, obj6), , , , , , , , , , , , , , , , , , , ];
  const obj9 = { children: null };
  const obj8 = {
    children: closure_12.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items2 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) }), ];
  const obj10 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment buttons" }) };
  items2[1] = closure_9(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj9.children = items2;
  items1[1] = closure_10(require("Stack/Stack").Stack, obj9);
  const obj12 = { children: null };
  const obj11 = {
    children: closure_14.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items3 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) }), ];
  const obj13 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Expressive buttons" }) };
  items3[1] = closure_9(closure_5, {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj12.children = items3;
  items1[2] = closure_10(require("Stack/Stack").Stack, obj12);
  const obj15 = { children: null };
  const obj14 = {
    children: closure_15.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items4 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) }), ];
  const obj16 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Experimental premium buttons" }) };
  items4[1] = closure_9(closure_5, {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj15.children = items4;
  items1[3] = closure_10(require("Stack/Stack").Stack, obj15);
  const obj18 = { children: null };
  const obj19 = { style: tmp.container, children: null };
  const items5 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Overlay buttons are meant to be used overlayed on top of an image or background color. They do not change colors with the theme." })];
  obj19.children = items5;
  const items6 = [closure_10(require("Stack/Stack").Stack, obj19), ];
  const obj17 = {
    children: closure_16.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  items6[1] = closure_9(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: null, children: React7(ExampleButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj18.children = items6;
  items1[4] = closure_10(require("Stack/Stack").Stack, obj18);
  const obj21 = { children: null };
  const obj22 = { style: tmp.container, children: null };
  const items7 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Custom color icons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "If a button needs to have an icon which has its own custom color, then create your own Button.Icon to pass as the icon prop." })];
  obj22.children = items7;
  const items8 = [closure_10(require("Stack/Stack").Stack, obj22), ];
  const obj23 = { children: null };
  const obj24 = { style: tmp.buttonContainer, children: null };
  const obj25 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a custom color icon",
    size: "md",
    icon: null
  };
  const obj20 = {
    children: closure_13.map((variant) => {
      const obj = { style: null, children: React7(ExampleButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return React7(hasOwnProperty, obj, variant);
    })
  };
  obj25.icon = closure_9(require("components/Button/Button").Button.Icon, { source: _modDef10657 });
  obj24.children = closure_9(require("components/Button/Button").Button, obj25);
  const items9 = [closure_9(closure_5, obj24), ];
  const obj27 = { style: tmp.buttonContainer, children: null };
  const obj28 = {
    onPress() {

    },
    variant: "secondary",
    text: "Button with a entity variant icon",
    size: "md",
    icon: null
  };
  const obj26 = { source: _modDef10657 };
  obj28.icon = closure_9(require("components/Button/Button").Button.Icon, { variant: "entity", source: _modDef9886 });
  obj27.children = closure_9(require("components/Button/Button").Button, obj28);
  items9[1] = closure_9(closure_5, obj27);
  obj23.children = items9;
  items8[1] = closure_10(closure_5, obj23);
  obj21.children = items8;
  items1[5] = closure_10(require("Stack/Stack").Stack, obj21);
  const obj30 = { children: null };
  const obj29 = { variant: "entity", source: _modDef9886 };
  const items10 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) }), ];
  const obj32 = { children: null };
  const obj33 = { style: tmp.buttonContainer, children: null };
  const obj31 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Buttons with various text lengths" }) };
  obj33.children = closure_9(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10657
  });
  const items11 = [closure_9(closure_5, obj33), , , ];
  const obj35 = { style: tmp.buttonContainer, children: null };
  const obj34 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10657
  };
  obj35.children = closure_9(require("components/Button/Button").Button, {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10657,
    iconPosition: "end"
  });
  items11[1] = closure_9(closure_5, obj35);
  const obj37 = {
    style: tmp.buttonContainer,
    children: closure_9(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
      size: "md"
    })
  };
  items11[2] = closure_9(closure_5, obj37);
  const obj39 = {
    style: tmp.buttonContainer,
    children: closure_9(require("components/Button/Button").Button, {
      onPress() {

      },
      variant: "secondary",
      text: "A",
      size: "md"
    })
  };
  items11[3] = closure_9(closure_5, obj39);
  obj32.children = items11;
  items10[1] = closure_10(closure_5, obj32);
  obj30.children = items10;
  items1[6] = closure_10(require("Stack/Stack").Stack, obj30);
  const obj41 = { children: null };
  const obj42 = { style: tmp.container, children: null };
  const items12 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Toggling button states" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Use the useToggleButtonProps hook or the useToggleIconButtonProps hook to toggle a button between two states." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "This hook changes the button presentation and adds some important accessibility attributes for a toggle button." })];
  obj42.children = items12;
  const items13 = [closure_10(require("Stack/Stack").Stack, obj42), ];
  const obj43 = { children: null };
  const obj36 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md",
    icon: _modDef10657,
    iconPosition: "end"
  };
  const obj38 = {
    onPress() {

    },
    variant: "secondary",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur",
    size: "md"
  };
  const obj40 = {
    onPress() {

    },
    variant: "secondary",
    text: "A",
    size: "md"
  };
  const items14 = [closure_9(closure_5, { style: tmp.buttonContainer, children: closure_9(ExampleToggleButton, {}) }), ];
  const obj44 = { style: tmp.buttonContainer, children: closure_9(ExampleToggleButton, {}) };
  items14[1] = closure_9(closure_5, { style: tmp.buttonContainer, children: closure_9(ExampleIconToggleButton, {}) });
  obj43.children = items14;
  items13[1] = closure_10(closure_5, obj43);
  obj41.children = items13;
  items1[7] = closure_10(require("Stack/Stack").Stack, obj41);
  const obj46 = { children: null };
  const obj47 = { style: tmp.container, children: null };
  const items15 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Hierarchical icon buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "While the primary variants of IconButton are supported, these should be used very rarely." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "An icon button usually has a secondary function and should use the secondary variants." })];
  obj47.children = items15;
  const items16 = [closure_10(require("Stack/Stack").Stack, obj47), ];
  const obj45 = { style: tmp.buttonContainer, children: closure_9(ExampleIconToggleButton, {}) };
  items16[1] = closure_9(closure_5, {
    children: closure_12.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleIconButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj46.children = items16;
  items1[8] = closure_10(require("Stack/Stack").Stack, obj46);
  const obj49 = { children: null };
  const obj48 = {
    children: closure_12.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleIconButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items17 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) }), ];
  const obj50 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Sentiment icon buttons" }) };
  items17[1] = closure_9(closure_5, {
    children: closure_14.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleIconButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj49.children = items17;
  items1[9] = closure_10(require("Stack/Stack").Stack, obj49);
  const obj52 = { children: null };
  const obj51 = {
    children: closure_14.map((variant) => {
      const obj = { style: closure_0.buttonContainer, children: React7(ExampleIconButton, { variant }) };
      return React7(hasOwnProperty, obj, variant);
    })
  };
  const items18 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) }), ];
  const obj53 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Overlay icon buttons" }) };
  items18[1] = closure_9(closure_5, {
    children: closure_13.map((variant) => {
      const obj = { style: null, children: React7(ExampleIconButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return React7(hasOwnProperty, obj, variant);
    })
  });
  obj52.children = items18;
  items1[10] = closure_10(require("Stack/Stack").Stack, obj52);
  const obj55 = { children: null };
  const obj56 = { style: tmp.container, children: null };
  const items19 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Image buttons" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Image buttons are rereserved for more branded buttons, like social media sharing buttons." })];
  obj56.children = items19;
  const items20 = [closure_10(require("Stack/Stack").Stack, obj56), ];
  const obj57 = { children: null };
  const obj58 = { style: null, children: null };
  const items21 = [tmp.buttonContainer];
  obj58.style = items21;
  const obj54 = {
    children: closure_13.map((variant) => {
      const obj = { style: null, children: React7(ExampleIconButton, { variant }) };
      const items = [, ];
      ({ buttonContainer: arr[0], overlayButtonContainer: arr[1] } = closure_0);
      obj.style = items;
      return React7(hasOwnProperty, obj, variant);
    })
  };
  obj58.children = closure_9(ExampleImageButton, { image: _modDef9892, label: "Telegram" });
  const items22 = [closure_9(closure_5, obj58), , ];
  const obj60 = { style: null, children: null };
  const items23 = [tmp.buttonContainer];
  obj60.style = items23;
  const obj59 = { image: _modDef9892, label: "Telegram" };
  obj60.children = closure_9(ExampleImageButton, { image: _modDef9894, label: "WhatsApp" });
  items22[1] = closure_9(closure_5, obj60);
  const obj62 = { style: null, children: null };
  const items24 = [tmp.buttonContainer];
  obj62.style = items24;
  const obj61 = { image: _modDef9894, label: "WhatsApp" };
  obj62.children = closure_9(ExampleImageButton, { image: _modDef9893, label: "Twitter" });
  items22[2] = closure_9(closure_5, obj62);
  obj57.children = items22;
  items20[1] = closure_10(closure_5, obj57);
  obj55.children = items20;
  items1[11] = closure_10(require("Stack/Stack").Stack, obj55);
  const obj64 = { spacing: 24, children: null };
  const obj65 = { style: tmp.container, children: null };
  const items25 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "IconButton with a label" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "Icon buttons with a label require a different combination of props and will only appear in the 'lg' size." }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "It is highly recommended that a list of these buttons appear wrapped in a ScrollView, so that they will horizontally scroll when there are many buttons, when the text is longer through internationalization, or the text is larger through OS font size settings." })];
  obj65.children = items25;
  const items26 = [closure_10(require("Stack/Stack").Stack, obj65), , ];
  const obj66 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj63 = { image: _modDef9893, label: "Twitter" };
  obj66.children = closure_9(require("Stack/Stack").Stack, { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((variant) => closure_1_9(ExampleIconButton, { variant, showLabel: true }, variant)) });
  items26[1] = closure_9(closure_6, obj66);
  const obj68 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj69 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj67 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: closure_12.map((variant) => closure_1_9(ExampleIconButton, { variant, showLabel: true }, variant)) };
  const items27 = [
    closure_9(require("IconButton").IconButton, {
      variant: "secondary",
      icon: _modDef7381,
      label: "Supercalifragilisticexpialidocious",
      grow: true,
      onPress() {

      }
    }),
  ,

  ];
  const obj70 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[1] = closure_9(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  const obj71 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  items27[2] = closure_9(require("IconButton").IconButton, {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  });
  obj69.children = items27;
  obj68.children = closure_10(require("Stack/Stack").Stack, obj69);
  items26[2] = closure_9(closure_6, obj68);
  obj64.children = items26;
  items1[12] = closure_10(require("Stack/Stack").Stack, obj64);
  const obj73 = { spacing: 24, children: null };
  const obj72 = {
    variant: "secondary",
    icon: _modDef7381,
    label: "Supercalifragilisticexpialidocious",
    grow: true,
    onPress() {

    }
  };
  const items28 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) }), , ];
  const obj75 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj76 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj74 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "ImageButton with a label" }) };
  const items29 = [closure_9(ExampleImageButton, { image: _modDef9891, label: "Label", showLabel: true }), , ];
  const obj77 = { image: _modDef9891, label: "Label", showLabel: true };
  items29[1] = closure_9(ExampleImageButton, { image: _modDef9886, label: "Label", showLabel: true });
  const obj78 = { image: _modDef9886, label: "Label", showLabel: true };
  items29[2] = closure_9(ExampleImageButton, { image: _modDef9890, label: "Label", showLabel: true });
  obj76.children = items29;
  obj75.children = closure_10(require("Stack/Stack").Stack, obj76);
  items28[1] = closure_9(closure_6, obj75);
  const obj80 = { horizontal: true, contentContainerStyle: { minWidth: "100%" }, children: null };
  const obj81 = { direction: "horizontal", justify: "center", style: tmp.buttonContainer, children: null };
  const obj79 = { image: _modDef9890, label: "Label", showLabel: true };
  const items30 = [closure_9(ExampleImageButton, { image: _modDef9892, label: "Supercalifragilisticexpialidocious", showLabel: true }), , ];
  const obj82 = { image: _modDef9892, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[1] = closure_9(ExampleImageButton, { image: _modDef9894, label: "Supercalifragilisticexpialidocious", showLabel: true });
  const obj83 = { image: _modDef9894, label: "Supercalifragilisticexpialidocious", showLabel: true };
  items30[2] = closure_9(ExampleImageButton, { image: _modDef9893, label: "Supercalifragilisticexpialidocious", showLabel: true });
  obj81.children = items30;
  obj80.children = closure_10(require("Stack/Stack").Stack, obj81);
  items28[2] = closure_9(closure_6, obj80);
  obj73.children = items28;
  items1[13] = closure_10(require("Stack/Stack").Stack, obj73);
  const obj85 = { spacing: 24, children: null };
  const obj84 = { image: _modDef9893, label: "Supercalifragilisticexpialidocious", showLabel: true };
  const items31 = [closure_9(require("Stack/Stack").Stack, { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) }), ];
  const obj87 = { direction: "horizontal", style: tmp.container, children: null };
  const items32 = [closure_9(ExampleButton, { variant: "secondary", text: "Search", grow: true }), closure_9(ExampleIconButton, { variant: "secondary" })];
  obj87.children = items32;
  items31[1] = closure_10(require("ButtonGroup").ButtonGroup, obj87);
  obj85.children = items31;
  items1[14] = closure_10(require("Stack/Stack").Stack, obj85);
  const obj88 = { children: null };
  const obj89 = { style: tmp.container, children: null };
  const items33 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Profile Themes" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light profile theme" })];
  obj89.children = items33;
  const items34 = [closure_10(require("Stack/Stack").Stack, obj89), ];
  const obj90 = { theme: "light", primaryColor: null, secondaryColor: null, children: null };
  const obj86 = { style: tmp.container, children: closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Mixing buttons" }) };
  obj90.primaryColor = require("utils/ColorUtils").hex2int("#ffae70");
  const obj92 = require("utils/ColorUtils");
  obj90.secondaryColor = require("utils/ColorUtils").hex2int("#cc2300");
  const obj91 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#ffae70", "#cc2300"], children: null };
  const obj93 = require("utils/ColorUtils");
  const obj94 = { children: null };
  const obj95 = { spacing: 16, children: null };
  const items35 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj95.children = items35;
  obj94.children = closure_10(require("Stack/Stack").Stack, obj95);
  obj91.children = closure_9(require("Card").Card, obj94);
  obj90.children = closure_9(LinearGradientDefault, obj91);
  items34[1] = closure_9(require("native").ThemeContextProvider, obj90);
  obj88.children = items34;
  items1[15] = closure_10(require("Stack/Stack").Stack, obj88);
  const obj96 = { children: null };
  const obj97 = { style: tmp.container, children: null };
  const items36 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Profile Themes" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark profile theme" })];
  obj97.children = items36;
  const items37 = [closure_10(require("Stack/Stack").Stack, obj97), ];
  const obj98 = { theme: "dark", primaryColor: null, secondaryColor: null, children: null };
  obj98.primaryColor = require("utils/ColorUtils").hex2int("#490000");
  const obj100 = require("utils/ColorUtils");
  obj98.secondaryColor = require("utils/ColorUtils").hex2int("#cc2300");
  const obj99 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: ["#490000", "#cc2300"], children: null };
  const obj101 = require("utils/ColorUtils");
  const obj102 = { children: null };
  const obj103 = { spacing: 16, children: null };
  const items38 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj103.children = items38;
  obj102.children = closure_10(require("Stack/Stack").Stack, obj103);
  obj99.children = closure_9(require("Card").Card, obj102);
  obj98.children = closure_9(LinearGradientDefault, obj99);
  items37[1] = closure_9(require("native").ThemeContextProvider, obj98);
  obj96.children = items37;
  items1[16] = closure_10(require("Stack/Stack").Stack, obj96);
  const obj104 = { children: null };
  const obj105 = { style: tmp.container, children: null };
  const items39 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Light Client Theme" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a light client theme" })];
  obj105.children = items39;
  const items40 = [closure_10(require("Stack/Stack").Stack, obj105), ];
  const obj106 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  obj106.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
  const obj107 = { style: { position: "relative", padding: 16 }, children: null };
  const items41 = [closure_9(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj110 = { style: null, children: null };
  const obj111 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj108 = require("native");
  const obj109 = { absolute: true, gradient: 32 };
  obj111.backgroundColor = require("native").setColorOpacity("white", 0.7);
  obj110.style = obj111;
  const obj112 = { spacing: 16, children: null };
  const items42 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj112.children = items42;
  obj110.children = closure_10(require("Stack/Stack").Stack, obj112);
  items41[1] = closure_9(closure_5, obj110);
  obj107.children = items41;
  obj106.children = closure_10(closure_5, obj107);
  items40[1] = closure_9(require("native").ThemeContextProvider, obj106);
  obj104.children = items40;
  items1[17] = closure_10(require("Stack/Stack").Stack, obj104);
  const obj114 = { children: null };
  const obj115 = { style: tmp.container, children: null };
  const items43 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Dark Client Theme" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "All buttons as they appear on a dark client theme" })];
  obj115.children = items43;
  const items44 = [closure_10(require("Stack/Stack").Stack, obj115), ];
  const obj116 = { theme: 32.theme, gradient: 32, flags: null, children: null };
  const obj113 = require("native");
  obj116.flags = require("native").setThemeFlag(0, require("native").ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
  const obj117 = { style: { position: "relative", padding: 16 }, children: null };
  const items45 = [closure_9(require("ThemedGradient").Gradient, { absolute: true, gradient: 32 }), ];
  const obj120 = { style: null, children: null };
  const obj121 = { backgroundColor: null, padding: 16, borderRadius: 16 };
  const obj118 = require("native");
  const obj119 = { absolute: true, gradient: 32 };
  obj121.backgroundColor = require("native").setColorOpacity("black", 0.7);
  obj120.style = obj121;
  const obj122 = { spacing: 16, children: null };
  const items46 = [closure_12.map((variant) => closure_1_9(ExampleButton, { variant }, variant)), closure_14.map((variant) => closure_1_9(ExampleButton, { variant }, variant))];
  obj122.children = items46;
  obj120.children = closure_10(require("Stack/Stack").Stack, obj122);
  items45[1] = closure_9(closure_5, obj120);
  obj117.children = items45;
  obj116.children = closure_10(closure_5, obj117);
  items44[1] = closure_9(require("native").ThemeContextProvider, obj116);
  obj114.children = items44;
  items1[18] = closure_10(require("Stack/Stack").Stack, obj114);
  const obj124 = { children: null };
  const obj125 = { style: tmp.container, children: null };
  const items47 = [closure_9(require("Text/Text").Text, { variant: "heading-lg/bold", children: "Floating Action Button" }), closure_9(require("Text/Text").Text, { variant: "text-sm/normal", children: "An ever-present icon button, giving the most important call to action in a compact way." })];
  obj125.children = items47;
  const items48 = [closure_10(require("Stack/Stack").Stack, obj125), closure_9(closure_5, { style: { padding: 48 } })];
  obj124.children = items48;
  items1[19] = closure_10(require("Stack/Stack").Stack, obj124);
  obj5.children = items1;
  obj4.children = closure_10(require("Stack/Stack").Stack, obj5);
  const items49 = [closure_9(closure_6, obj4), ];
  const obj123 = require("native");
  items49[1] = closure_9(require("FloatingActionButton").FloatingActionButton, {
    icon: _modDef7381,
    onPress() {

    },
    positionBottom: 32,
    accessibilityLabel: "Floating Action Button"
  });
  obj3.children = items49;
  return closure_10(closure_11, obj3);
};
