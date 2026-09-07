// Module ID: 15918
// Function ID: 15919
// Name: route
// Dependencies: [11473, 1114, 9781, 14453, 15919, 15920, 2722, 15917, 15922, 15923, 15924, 15925, 2]

// Module 15918 (route)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2722 */;
import BellIcon from "BellIcon" /* 9781 */;
import getNamedExperiment from "getNamedExperiment" /* 14453 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15917 */;
import frozen from "frozen" /* 15919 */;
import createToggle from "createToggle" /* 11473 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  IconComponent: BellIcon.BellIcon,
  parent: null,
  usePredicate() {
    return getNamedExperiment.useIsDeclarativeSettingsUIAvailable("RootRoute");
  },
  screen: null
};
obj = {
  route: frozen.MobileNotifSettingsSections.NOTIFICATIONS_REDESIGN,
  getComponent() {
    return require(15920).default;
  }
};
obj[4] = obj;
const route = createToggle.createRoute(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.S5cB9e);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("REALTIME");
  },
  screen: {
    route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
    getComponent() {
      return require(15922).default;
    }
  }
};
const route1 = createToggle.createRoute(obj1);
const obj3 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["UzRF+8"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_SOCIAL");
  },
  screen: null
};
const obj2 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_REALTIME,
  getComponent() {
    return require(15922).default;
  }
};
obj3[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15923).default;
  }
};
const route2 = createToggle.createRoute(obj3);
const obj5 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.zRKbpz);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_SERVER");
  },
  screen: null
};
const obj4 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SOCIAL,
  getComponent() {
    return require(15923).default;
  }
};
obj5[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15924).default;
  }
};
const route3 = createToggle.createRoute(obj5);
const obj7 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.q5M7HV);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    return getNamedExperiment.useNotifCategoryVisibility("CATEGORY_OTHER");
  },
  screen: null
};
const obj6 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_SERVER,
  getComponent() {
    return require(15924).default;
  }
};
obj7[3] = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15925).default;
  }
};
const route4 = createToggle.createRoute(obj7);
const obj8 = {
  route: frozen.MobileNotifSettingsSections.NOTIF_CATEGORY_OTHER,
  getComponent() {
    return require(15925).default;
  }
};
const result = set.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsRoutes.tsx");

export const RootRoute = route;
export const RealtimeRoute = route1;
export const CategorySocialRoute = route2;
export const CategoryServerRoute = route3;
export const CategoryOtherRoute = route4;
