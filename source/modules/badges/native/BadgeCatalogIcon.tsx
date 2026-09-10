// Module ID: 11222
// Function ID: 11223
// Name: BadgeCatalogIcon
// Dependencies: [32, 19, 17, 21, 11223, 5601, 8484, 2]
// Exports: default

// Module 11222 (BadgeCatalogIcon)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const re7 = /\.svg(?:[?#]|$)/i;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(style) {
  ({ badge, size } = style);
  let isMatch;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let complex_icon_animated_url = badge.simple_icon_url;
  if (complex_icon_animated_url == null) {
    complex_icon_animated_url = badge.complex_icon_static_url;
  }
  if (complex_icon_animated_url == null) {
    complex_icon_animated_url = badge.complex_icon_animated_url;
  }
  isMatch = null != complex_icon_animated_url;
  if (isMatch) {
    isMatch = regex.test(complex_icon_animated_url);
  }
  [tmp4, c2] = noop.useState(null);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = tmp5[1];
  const items = [complex_icon_animated_url, isMatch];
  const effect = noop.useEffect(() => {
    if (null != abortController) {
      if (isMatch) {
        if (null == obj.getCachedSvgXml(tmp)) {
          const _AbortController = AbortController;
          abortController = new AbortController();
          const svgXml = tmp3(tmp4[4]).loadSvgXml(tmp, abortController.signal);
          const tmp3Result = tmp3(tmp4[4]);
          svgXml.then((xml) => {
            if (!abortController.signal.aborted) {
              const obj = { url: complex_icon_animated_url, xml };
              c2(obj);
            }
          }).catch(() => {

          });
          return () => abortController.abort();
        }
        obj = complex_icon_animated_url(_undefined[4]);
        tmp3 = complex_icon_animated_url;
        tmp4 = _undefined;
      }
    }
  }, items);
  [][0] = complex_icon_animated_url;
  const items1 = [{ width: size, height: size }, style.style];
  if (null == complex_icon_animated_url) {
    const obj2 = { style: items1, "aria-hidden": true };
    return <View style={items1} aria-hidden />;
  } else if (isMatch) {
    let url;
    if (tmp4 != null) {
      url = tmp4.url;
    }
    if (url === complex_icon_animated_url) {
      let xml = tmp4.xml;
    } else {
      xml = complex_icon_animated_url(11223).getCachedSvgXml(complex_icon_animated_url);
      const obj6 = complex_icon_animated_url(11223);
    }
    const obj3 = { style: items1, "aria-hidden": true, children: null };
    let tmp15Result = null;
    if (null != xml) {
      const size1 = { xml, width: size, height: size };
      tmp15Result = tmp15(complex_icon_animated_url(8484).SvgXml, size1);
    }
    obj3.children = tmp15Result;
    return <View style={items1} aria-hidden>{null}</View>;
  } else {
    if (tmp5[0] === complex_icon_animated_url) {
      const obj4 = { style: items1, "aria-hidden": true };
      let obj = obj4;
    } else {
      obj = { style: items1, "aria-hidden": true, children: null };
      const obj5 = { source: null, style: null, onError: null };
      const obj7 = { uri: complex_icon_animated_url };
      obj5.source = obj7;
      const size2 = { width: size, height: size };
      obj5.style = size2;
      obj5.onError = tmp7;
      obj.children = tmp8(isMatch(5601), obj5);
    }
    return <View {...obj} />;
  }
  let tmp3 = _slicedToArray(noop.useState(null), 2);
};
