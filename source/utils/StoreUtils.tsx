// Module ID: 4848
// Function ID: 4849
// Name: StoreUtils
// Dependencies: [5, 502, 4266, 4267, 4270, 1074, 4849, 4847, 4928, 1430, 4930, 1272, 1115, 1114, 2]
// Exports: getAssetURL, getPrimarySKUForApplication, httpGetWithCountryCodeQuery, nativePlatformTypeToSKUOperatingSystem, skuOperatingSystemToText

// Module 4848 (StoreUtils)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BillingInfoStore from "BillingInfoStore" /* 4266 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4267 */;
import SubscriptionStore from "SubscriptionStore" /* 4270 */;
import allSettled_mod from "allSettled" /* 4849 */;

require = fn;
let closure_10 = async function _httpGetWithCountryCodeQuery(arg0, value) {
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = true;
  }
  closure_133_1 = flag;
  await "PX_16";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_133_2 = closure_134_3.isAuthenticated();
      if (closure_133_1) {
        if (closure_133_2) {
          closure_133_3 = [];
          if (!closure_134_5.hasFetchedPaymentSources) {
            const paymentSourcesFetchRequest = closure_134_4.paymentSourcesFetchRequest;
            closure_3 = paymentSourcesFetchRequest;
            if (paymentSourcesFetchRequest == null) {
              closure_3 = closure_134_0(closure_134_1[10]).fetchPaymentSources();
              closure_134_0(closure_134_1[10]);
            }
            closure_133_3.push(closure_3);
          }
          if (!closure_134_4.ipCountryCodeLoaded) {
            closure_133_3.push(closure_134_0(closure_134_1[10]).fetchIpCountryCode());
            closure_134_0(closure_134_1[10]);
          }
          closure_133_3.push((function waitForSubscriptionsToBeFetched() {
            closure_0 = closure_2(function*(arg0, value) {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      c1 = 0;
                      closure_129_0 = closure_0;
                      if (closure_1_6.hasFetchedSubscriptions()) {
                        tmp18();
                      } else if (closure_1_4.isSubscriptionFetching) {
                        function wait() {
                          if (closure_2_4.isSubscriptionFetching) {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(closure_1_1, 50);
                          } else {
                            closure_1_0();
                          }
                        }
                        closure_129_1 = wait;
                        wait();
                      } else {
                        c2 = 1;
                        c3 = 1;
                        const obj5 = { value: closure_0(c1[10]).fetchSubscriptions(), done: false };
                        return obj5;
                      }
                      c3 = 3;
                      tmp18 = closure_0;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    closure_129_0();
                  }
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } catch (tmp13) {
                  c3 = tmp;
                  throw tmp13;
                }
              }
            });
            return new Promise(function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            });
          })());
          const items = [Promise.allSettled(closure_133_3), ];
          items[1] = new Promise((arg0) => setTimeout(arg0, 10000));
          c7 = 2;
          c8 = 1;
          new Promise((arg0) => setTimeout(arg0, 10000));
          return { value: Promise.race(items), done: false };
        }
      }
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  }
  let defaultBillingCountryCode = closure_134_5.getDefaultBillingCountryCode();
  const defaultPaymentSource = closure_134_5.defaultPaymentSource;
  if (defaultPaymentSource != null) {
    const id = defaultPaymentSource.id;
  }
  c2 = id;
  if (id == null) {
    c2 = null;
  }
  let paymentSourceId = c2;
  const premiumTypeSubscription = closure_134_6.getPremiumTypeSubscription();
  let tmp19 = null != premiumTypeSubscription;
  if (tmp19) {
    tmp19 = null != premiumTypeSubscription.paymentSourceId;
  }
  if (tmp19) {
    paymentSourceId = premiumTypeSubscription.paymentSourceId;
  }
  if (null === defaultBillingCountryCode) {
    const ipCountryCode = closure_134_4.ipCountryCode;
    c4 = ipCountryCode;
    if (ipCountryCode == null) {
      c4 = null;
    }
    defaultBillingCountryCode = c4;
  }
  closure_133_7 = {};
  if (null != defaultBillingCountryCode) {
    closure_133_7.country_code = defaultBillingCountryCode;
  }
  if (null != paymentSourceId) {
    closure_133_7.payment_source_id = paymentSourceId;
  }
  if (null != defaultBillingCountryCode) {
    if (typeof closure_133_0 === "string") {
      closure_133_0 = { url: closure_133_0, oldFormErrors: true, rejectWithError: false };
    }
    if (typeof closure_133_0.query === "string") {
      const _Error = Error;
      const error = new Error("string query not supported");
      throw error;
    } else {
      const merged = Object.assign(closure_133_7);
      const merged1 = Object.assign(closure_133_0.query);
      closure_133_0.query = {};
    }
  }
  const HTTP = closure_134_0(closure_134_1[11]).HTTP;
  return HTTP.get(closure_133_0);
};
const Constants = fn(1074);
({ Endpoints: closure_7, OperatingSystems: closure_8 } = Constants);
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
const isMobile = fn(4847).isMobile;
let tmp4 = !isMobile;
if (!isMobile) {
  tmp4 = !fn(4847).isTablet;
}
if (tmp4) {
  tmp4 = -1 !== fn(4928).getChromeVersion();
  let obj2 = fn(4928);
}
let closure_9 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(arg0, mimeType, arg2, mp4) {
  let str = mp4;
  if (null == mp4) {
    str = "mp4";
    if ("video/quicktime" !== (mimeType.mimeType || mimeType.mime_type)) {
      str = "mp4";
      if ("video/mp4" !== tmp) {
        str = "image/gif" === tmp ? "gif" : "webp";
      }
    }
  }
  if (!tmp2) {
    str = "png";
  }
  let id = mimeType;
  if (typeof mimeType !== "string") {
    id = mimeType.id;
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + "https:" + "//" + CDN_HOST + "/app-assets/" + arg0 + "/store/" + id + "." + str;
  } else {
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + "https:" + window.GLOBAL_ENV.API_ENDPOINT + React5.STORE_ASSET(arg0, id, str);
  }
  let sum = combined;
  if (null != arg2) {
    const obj = ImageLoaderUtils;
    const _HermesInternal3 = HermesInternal;
    sum = combined + "?size=" + obj.getBestMediaProxySize(arg2 * ImageLoaderUtils.getDevicePixelRatio());
  }
  return sum;
};
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (PlatformUtils.PlatformTypes.WINDOWS === platform) {
    return constants.WINDOWS;
  } else if (tmp(1115).PlatformTypes.OSX === platform) {
    return constants.MACOS;
  } else if (tmp(1115).PlatformTypes.LINUX === platform) {
    return constants.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (constants.WINDOWS === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0/xHFO"]);
  } else if (tmp.MACOS === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.E4u4n5);
  } else if (tmp.LINUX === arg0) {
    const intl = util.intl;
    return intl.string(util.t.tcawo3);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown operating system value: " + arg0);
    throw error;
  }
};
export const getPrimarySKUForApplication = function getPrimarySKUForApplication(arg0, getApplication, get) {
  const application = getApplication.getApplication(arg0);
  value = null;
  if (null != application) {
    value = null;
    if (null != application.primarySkuId) {
      value = get.get(application.primarySkuId);
    }
  }
  return value;
};
