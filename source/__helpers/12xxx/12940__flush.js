// Module ID: 12940
// Function ID: 12941
// Name: _flush
// Dependencies: [5, 12919, 12941, 12920, 12892, 12903, 12906, 12899, 12929, 12893, 12915]
// Exports: addEventProcessor, captureCheckIn, captureEvent, captureException, captureMessage, captureSession, close, flush, isEnabled, isInitialized, lastEventId, setContext, setExtra, setExtras, setTag, setTags, setUser, startSession, withMonitor

// Module 12940 (_flush)
import _mod12893 from "module_12893" /* 12893 */;
import _mod12903 from "module_12903" /* 12903 */;
import _mod12906 from "module_12906" /* 12906 */;
import _mod12915 from "module_12915" /* 12915 */;
import _mod12919 from "module_12919" /* 12919 */;
import _mod12941 from "module_12941" /* 12941 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

let closure_3 = async function _flush(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12919").getClient();
        if (client) {
          client.flush(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const logger = tmp14(tmp15[4]).logger;
            logger.warn("Cannot flush events. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12919");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
let closure_4 = async function _close(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const client = require("module_12919").getClient();
        if (client) {
          client.close(tmp13);
        } else {
          if (tmp14(tmp15[3]).DEBUG_BUILD) {
            const logger = tmp14(tmp15[4]).logger;
            logger.warn("Cannot flush events and disable SDK. No client defined.");
          }
          const resolved = Promise.resolve(false);
        }
        c1 = 3;
        const obj3 = require("module_12919");
        tmp13 = closure_0;
      }
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function endSession() {
  const isolationScope = _mod12919.getIsolationScope();
  const currentScope = _mod12919.getCurrentScope();
  const tmp3 = currentScope.getSession() || isolationScope.getSession();
  if (tmp3) {
    tmp(12915).closeSession(tmp3);
    const tmpResult = tmp(12915);
  }
  const isolationScope1 = _mod12919.getIsolationScope();
  const tmpResult4 = _mod12919;
  const currentScope1 = _mod12919.getCurrentScope();
  const tmpResult5 = _mod12919;
  const client = _mod12919.getClient();
  const tmp5 = currentScope1.getSession() || isolationScope1.getSession();
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = client;
  }
  if (tmp6) {
    client.captureSession(tmp5);
  }
  isolationScope.setSession();
  currentScope.setSession();
}

export const addEventProcessor = function addEventProcessor(arg0) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.addEventProcessor(arg0);
};
export const captureCheckIn = function captureCheckIn(arg0, arg1) {
  const currentScope = _mod12919.getCurrentScope();
  const client = _mod12919.getClient();
  if (client) {
    if (client.captureCheckIn) {
      return client.captureCheckIn(arg0, arg1, currentScope);
    } else if (tmp(12920).DEBUG_BUILD) {
      const logger2 = tmp(12892).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
  } else if (tmp(12920).DEBUG_BUILD) {
    const logger = tmp(12892).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  return _mod12903.uuid4();
};
export const captureEvent = function captureEvent(arg0, arg1) {
  const currentScope = _mod12919.getCurrentScope();
  return currentScope.captureEvent(arg0, arg1);
};
export const captureException = function captureException(arg0, arg1) {
  const currentScope = _mod12919.getCurrentScope();
  return currentScope.captureException(arg0, _mod12941.parseEventHintOrCaptureContext(arg1));
};
export const captureMessage = function captureMessage(arg0, captureContext) {
  let tmp;
  if (typeof captureContext === "string") {
    tmp = captureContext;
  }
  let tmp2;
  if (typeof captureContext !== "string") {
    const obj2 = { captureContext };
    tmp2 = obj2;
  }
  const currentScope = _mod12919.getCurrentScope();
  return currentScope.captureMessage(arg0, tmp, tmp2);
};
export const captureSession = function captureSession() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (flag) {
    endSession();
  } else {
    const isolationScope = _mod12919.getIsolationScope();
    const currentScope = _mod12919.getCurrentScope();
    const client = _mod12919.getClient();
    const tmp3 = currentScope.getSession() || isolationScope.getSession();
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = client;
    }
    if (tmp4) {
      client.captureSession(tmp3);
    }
  }
};
export const close = function close(arg0) {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { endSession };
export const flush = function flush(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isEnabled = function isEnabled() {
  const client = _mod12919.getClient();
  let transport = client;
  if (transport) {
    transport = false !== client.getOptions().enabled;
  }
  if (transport) {
    transport = client.getTransport();
  }
  return transport;
};
export const isInitialized = function isInitialized() {
  return _mod12919.getClient();
};
export const lastEventId = function lastEventId() {
  const isolationScope = _mod12919.getIsolationScope();
  return isolationScope.lastEventId();
};
export const setContext = function setContext(arg0, arg1) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setContext(arg0, arg1);
};
export const setExtra = function setExtra(arg0, arg1) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setExtra(arg0, arg1);
};
export const setExtras = function setExtras(arg0) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setExtras(arg0);
};
export const setTag = function setTag(arg0, arg1) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setTag(arg0, arg1);
};
export const setTags = function setTags(arg0) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setTags(arg0);
};
export const setUser = function setUser(arg0) {
  const isolationScope = _mod12919.getIsolationScope();
  isolationScope.setUser(arg0);
};
export const startSession = function startSession(arg0) {
  const client = _mod12919.getClient();
  const isolationScope = _mod12919.getIsolationScope();
  const currentScope = _mod12919.getCurrentScope();
  let options = client;
  if (client) {
    options = client.getOptions();
  }
  if (!options) {
    options = {};
  }
  ({ environment, release } = options);
  if (undefined === environment) {
    environment = tmp(12929).DEFAULT_ENVIRONMENT;
  }
  const userAgent = _mod12893.GLOBAL_OBJ.navigator || {}.userAgent;
  const tmp3 = _mod12893.GLOBAL_OBJ.navigator || {};
  const obj2 = { release, environment, user: null };
  const tmpResult = _mod12915;
  obj2.user = currentScope.getUser() || isolationScope.getUser();
  let tmp5 = userAgent;
  if (userAgent) {
    const obj4 = { userAgent };
    tmp5 = obj4;
  }
  const merged = Object.assign(tmp5);
  const merged1 = Object.assign(arg0);
  const session = tmpResult.makeSession(obj2);
  const session1 = isolationScope.getSession();
  let tmp10 = session1;
  if (session1) {
    tmp10 = "ok" === session1.status;
  }
  if (tmp10) {
    tmp(12915).updateSession(session1, { status: "exited" });
    const tmpResult2 = tmp(12915);
  }
  endSession();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
};
export const withMonitor = function withMonitor(monitorSlug, arg1, arg2) {
  _require = monitorSlug;
  dependencyMap = arg1;
  function finishCheckIn(status) {
    const obj = { monitorSlug, status, checkInId: captureCheckInResult, duration: _mod12906.timestampInSeconds() - closure_3 };
    const currentScope = _mod12919.getCurrentScope();
    const client = _mod12919.getClient();
    if (client) {
      if (client.captureCheckIn) {
        captureCheckInResult = client.captureCheckIn(obj, undefined, currentScope);
      } else if (tmp(12920).DEBUG_BUILD) {
        const logger2 = tmp(12892).logger;
        logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
      }
    } else if (tmp(12920).DEBUG_BUILD) {
      const logger = tmp(12892).logger;
      logger.warn("Cannot capture check-in. No client defined.");
    }
    _mod12903.uuid4();
  }
  let currentScope = require("module_12919").getCurrentScope();
  let obj = { monitorSlug, status: "in_progress" };
  let obj2 = require("module_12919");
  let client = require("module_12919").getClient();
  if (client) {
    if (client.captureCheckIn) {
      let captureCheckInResult = client.captureCheckIn(obj, arg2, currentScope);
    } else if (tmp(12920).DEBUG_BUILD) {
      let logger2 = tmp(12892).logger;
      logger2.warn("Cannot capture check-in. Client does not support sending check-ins.");
    }
    asyncGeneratorStep = captureCheckInResult;
    closure_3 = tmp(12906).timestampInSeconds();
    const tmpResult = tmp(12906);
    return tmp(12919).withIsolationScope(() => {
      try {
        const tmp3 = closure_1();
        if (obj.isThenable(tmp3)) {
          const resolved = Promise.resolve(tmp3);
          resolved.then(() => {
            finishCheckIn("ok");
          }, (arg0) => {
            finishCheckIn("error");
            throw arg0;
          });
        } else {
          finishCheckIn("ok");
        }
        return tmp3;
      } catch (tmp12) {
        finishCheckIn("error");
        throw tmp12;
      }
    });
  } else if (tmp(12920).DEBUG_BUILD) {
    let logger = tmp(12892).logger;
    logger.warn("Cannot capture check-in. No client defined.");
  }
  let obj3 = require("module_12919");
  captureCheckInResult = require("module_12903").uuid4();
};
