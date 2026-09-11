// Module ID: 12915
// Function ID: 12916
// Dependencies: [12891, 12892, 12916, 12906, 12903, 12898]
// Exports: closeSession, makeSession

// Module 12915
import _mod12898 from "module_12898" /* 12898 */;
import _mod12903 from "module_12903" /* 12903 */;
import _mod12906 from "module_12906" /* 12906 */;
import _mod12916 from "module_12916" /* 12916 */;
import __SENTRY_DEBUG__ from "module_12891" /* 12891 */;
import consoleSandbox from "module_12892" /* 12892 */;

function updateSession(ipAddress) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (obj.user) {
    ipAddress = ipAddress.ipAddress;
    let ip_address = !ipAddress;
    if (!ipAddress) {
      ip_address = obj.user.ip_address;
    }
    if (ip_address) {
      ipAddress.ipAddress = obj.user.ip_address;
    }
    if (!tmp) {
      ipAddress.did = obj.user.id || obj.user.email || obj.user.username;
    }
    tmp = ipAddress.did || obj.did;
  }
  let timestamp = obj.timestamp;
  if (!timestamp) {
    timestamp = _mod12906.timestampInSeconds();
  }
  ipAddress.timestamp = timestamp;
  if (obj.abnormal_mechanism) {
    ipAddress.abnormal_mechanism = obj.abnormal_mechanism;
  }
  if (obj.ignoreDuration) {
    ipAddress.ignoreDuration = obj.ignoreDuration;
  }
  if (!obj.sid) {
    if (undefined !== obj.init) {
      ipAddress.init = obj.init;
    }
    const did = ipAddress.did;
    let did2 = !did;
    if (!did) {
      did2 = obj.did;
    }
    if (did2) {
      const _HermesInternal = HermesInternal;
      ipAddress.did = "" + obj.did;
    }
    if (typeof obj.started === "number") {
      ipAddress.started = obj.started;
    }
    if (ipAddress.ignoreDuration) {
      ipAddress.duration = undefined;
    } else if (typeof obj.duration === "number") {
      ipAddress.duration = obj.duration;
    } else {
      const diff = ipAddress.timestamp - ipAddress.started;
      let num2 = 0;
      if (diff >= 0) {
        num2 = diff;
      }
      ipAddress.duration = num2;
    }
    if (obj.release) {
      ipAddress.release = obj.release;
    }
    if (obj.environment) {
      ipAddress.environment = obj.environment;
    }
    const ipAddress2 = ipAddress.ipAddress;
    let ipAddress3 = !ipAddress2;
    if (!ipAddress2) {
      ipAddress3 = obj.ipAddress;
    }
    if (ipAddress3) {
      ipAddress.ipAddress = obj.ipAddress;
    }
    const userAgent = ipAddress.userAgent;
    let userAgent2 = !userAgent;
    if (!userAgent) {
      userAgent2 = obj.userAgent;
    }
    if (userAgent2) {
      ipAddress.userAgent = obj.userAgent;
    }
    if (typeof obj.errors === "number") {
      ipAddress.errors = obj.errors;
    }
    if (obj.status) {
      ipAddress.status = obj.status;
    }
  } else {
    if (32 === obj.sid.length) {
      let sid = obj.sid;
    } else {
      sid = _mod12903.uuid4();
    }
    ipAddress.sid = sid;
  }
}
_mod12916;

export const closeSession = function closeSession(status, status2) {
  if (status2) {
    const obj2 = { status: status2 };
    let obj = obj2;
  } else {
    obj = {};
    if ("ok" === status.status) {
      obj = { status: "exited" };
    }
  }
  updateSession(status, obj);
};
export const makeSession = function makeSession(arg0) {
  const timestampInSecondsResult = obj2(12906).timestampInSeconds();
  obj2 = { sid: null, init: true, timestamp: null, started: null, duration: 0, status: "ok", errors: 0, ignoreDuration: false, toJSON: null };
  let obj = obj2(12906);
  obj2.sid = obj2(12903).uuid4();
  obj2.timestamp = timestampInSecondsResult;
  obj2.started = timestampInSecondsResult;
  obj2.toJSON = function toJSON() {
    const obj3 = { sid: "" + obj2.sid, init: obj2.init, started: null, timestamp: null, status: null, errors: null, did: null, duration: null, abnormal_mechanism: null, attrs: null };
    const obj = _mod12898;
    obj3.started = new Date(1000 * obj2.started).toISOString();
    const date = new Date(1000 * obj2.started);
    obj3.timestamp = new Date(1000 * obj2.timestamp).toISOString();
    ({ status: obj2.status, errors: obj2.errors } = obj2);
    if (typeof obj2.did === "number") {
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp.did;
    }
    obj3.did = combined;
    ({ duration: obj2.duration, abnormal_mechanism: obj2.abnormal_mechanism } = obj2);
    obj3.attrs = { release: obj2.release, environment: obj2.environment, ip_address: obj2.ipAddress, user_agent: obj2.userAgent };
    return obj.dropUndefinedKeys(obj3);
  };
  if (arg0) {
    updateSession(obj2, arg0);
  }
  return obj2;
};
export { updateSession };
