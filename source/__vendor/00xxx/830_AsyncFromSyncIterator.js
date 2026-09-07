// Module ID: 830
// Function ID: 831
// Name: AsyncFromSyncIterator
// Dependencies: [831, 833, 705, 734, 829, 828, 823]
// Exports: instrumentStream

// Module 830 (AsyncFromSyncIterator)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import items10 from "items" /* 829 */;
import closure_2 from "_awaitAsyncGenerator" /* 831 */;
import closure_3 from "AsyncGenerator" /* 833 */;

function AsyncFromSyncIterator(arg0) {
  class AsyncFromSyncIterator {
    constructor(arg0) {
      return;
    }
  }
  AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next() {
      const n = this.n;
      const apply = n.apply;
      const s = this.s;
      if (typeof apply === "unknown") {
        let iter = HermesBuiltin.applyArguments(s);
      } else {
        iter = apply(s, arguments);
      }
      if (Object(iter) !== iter) {
        const _TypeError = TypeError;
        const typeError = new TypeError(iter + " is not an object.");
        let rejectResult = Promise.reject(typeError);
      } else {
        const done = iter.done;
        const resolved = Promise.resolve(iter.value);
        rejectResult = resolved.then((value) => ({ value, done }));
      }
      return rejectResult;
    },
    return(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value: null, done: true };
        obj[0] = arg0;
        let resolved = Promise.resolve(obj);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          resolved = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved1 = Promise.resolve(iter.value);
          resolved = resolved1.then((value) => ({ value, done }));
        }
      }
      return resolved;
    },
    throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        const apply = _return.apply;
        const s = tmp.s;
        if (typeof apply === "unknown") {
          let iter = HermesBuiltin.applyArguments(s);
        } else {
          iter = apply(s, arguments);
        }
        const _Object = Object;
        if (Object(iter) !== iter) {
          const _TypeError = TypeError;
          const typeError = new TypeError(iter + " is not an object.");
          rejectResult = Promise.reject(typeError);
        } else {
          const done = iter.done;
          const resolved = Promise.resolve(iter.value);
          rejectResult = resolved.then((value) => ({ value, done }));
        }
      }
      return rejectResult;
    }
  };
  return new AsyncFromSyncIterator(arg0);
}
function processChatCompletionToolCalls(tool_calls, chatCompletionToolCalls) {
  const iter = tool_calls[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let index = nextResult.index;
    let tmp3 = index;
    if (undefined !== index) {
      let tmp16 = nextResult;
      if (tmp2.function) {
        let tmp4 = index;
        chatCompletionToolCalls = chatCompletionToolCalls.chatCompletionToolCalls;
        let tmp5 = index;
        if (tmp3 in chatCompletionToolCalls.chatCompletionToolCalls) {
          let tmp10 = chatCompletionToolCalls[tmp3];
          let tmp11 = nextResult;
          let _arguments = tmp2.function.arguments;
          if (_arguments) {
            let tmp12 = tmp10;
            let _function;
            if (tmp10 != null) {
              _function = tmp10.function;
            }
            _arguments = _function;
          }
          if (_arguments) {
            let tmp14 = tmp10;
            _function = tmp10.function;
            let tmp15 = nextResult;
            _function.arguments = _function.arguments + tmp2.function.arguments;
          }
        } else {
          let obj = {};
          let tmp6 = nextResult;
          let tmp7 = obj;
          let tmp8 = tmp2;
          let merged = Object.assign(nextResult);
          obj = { name: null, arguments: null };
          obj[0] = tmp2.function.name;
          obj[1] = tmp2.function.arguments || "";
          obj.function = obj;
          chatCompletionToolCalls[tmp3] = obj;
        }
      }
    }
    continue;
  }
}
function processChatCompletionChunk(id, responseId) {
  responseId = id.id;
  if (responseId == null) {
    responseId = responseId.responseId;
  }
  responseId.responseId = responseId;
  let responseModel = id.model;
  if (responseModel == null) {
    responseModel = responseId.responseModel;
  }
  responseId.responseModel = responseModel;
  let responseTimestamp = id.created;
  if (responseTimestamp == null) {
    responseTimestamp = responseId.responseTimestamp;
  }
  responseId.responseTimestamp = responseTimestamp;
  if (id.usage) {
    responseId.promptTokens = id.usage.prompt_tokens;
    responseId.completionTokens = id.usage.completion_tokens;
    responseId.totalTokens = id.usage.total_tokens;
  }
  let choices = id.choices;
  if (choices == null) {
    choices = [];
  }
  for (const item10020 of choices) {
    let tmp = item10020;
    if (arg2) {
      let tmp2 = item10020;
      let delta = tmp.delta;
      let content;
      if (delta != null) {
        content = delta.content;
      }
      if (content) {
        let responseTexts = arg1.responseTexts;
        let tmp4 = item10020;
        let arr = responseTexts.push(tmp.delta.content);
      }
      let tmp6 = item10020;
      let delta2 = tmp.delta;
      let tool_calls;
      if (delta2 != null) {
        tool_calls = delta2.tool_calls;
      }
      if (tool_calls) {
        let tmp8 = processChatCompletionToolCalls;
        let tmp9 = item10020;
        let tmp10 = processChatCompletionToolCalls(tmp.delta.tool_calls, arg1);
      }
    }
    let tmp11 = item10020;
    if (tmp.finish_reason) {
      let finishReasons = arg1.finishReasons;
      let tmp12 = item10020;
      arr = finishReasons.push(tmp.finish_reason);
    }
    continue;
  }
}
function processResponsesApiEvent(obj, responsesApiToolCalls, arg2, setStatus) {
  if (obj) {
    if (typeof obj === "object") {
      const _Error = Error;
      if (obj instanceof Error) {
        obj = { code: null, message: "internal_error" };
        obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
        setStatus.setStatus(obj);
        obj = { mechanism: null };
        obj[0] = { handled: false, type: "auto.ai.openai.stream-response" };
        captureCheckIn.captureException(obj, obj);
      } else if ("type" in obj) {
        const RESPONSE_EVENT_TYPES = items10.RESPONSE_EVENT_TYPES;
        if (RESPONSE_EVENT_TYPES.includes(obj.type)) {
          let output_text = arg2;
          if (arg2) {
            let tmp6 = "response.output_item.done" === obj.type;
            if (tmp6) {
              tmp6 = "item" in obj;
            }
            if (tmp6) {
              const prop = responsesApiToolCalls.responsesApiToolCalls;
              prop.push(obj.item);
            }
            if ("response.output_text.delta" === obj.type) {
              if ("delta" in obj) {
                if (obj.delta) {
                  const responseTexts = responsesApiToolCalls.responseTexts;
                  responseTexts.push(obj.delta);
                }
              }
            }
          }
          if ("response" in obj) {
            const response = obj.response;
            let responseId = response.id;
            if (responseId == null) {
              responseId = responsesApiToolCalls.responseId;
            }
            responsesApiToolCalls.responseId = responseId;
            let responseModel = response.model;
            if (responseModel == null) {
              responseModel = responsesApiToolCalls.responseModel;
            }
            responsesApiToolCalls.responseModel = responseModel;
            let responseTimestamp = response.created_at;
            if (responseTimestamp == null) {
              responseTimestamp = responsesApiToolCalls.responseTimestamp;
            }
            responsesApiToolCalls.responseTimestamp = responseTimestamp;
            if (response.usage) {
              responsesApiToolCalls.promptTokens = response.usage.input_tokens;
              responsesApiToolCalls.completionTokens = response.usage.output_tokens;
              responsesApiToolCalls.totalTokens = response.usage.total_tokens;
            }
            if (response.status) {
              const finishReasons = responsesApiToolCalls.finishReasons;
              finishReasons.push(response.status);
            }
            if (output_text) {
              output_text = response.output_text;
            }
            if (output_text) {
              const responseTexts1 = responsesApiToolCalls.responseTexts;
              responseTexts1.push(response.output_text);
            }
          }
        } else {
          const eventTypes = responsesApiToolCalls.eventTypes;
          eventTypes.push(obj.type);
        }
      }
    }
  }
  const eventTypes1 = responsesApiToolCalls.eventTypes;
  eventTypes1.push("unknown:non-object");
}
function _instrumentStream() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c21 = 0;
    c22 = 0;
    c19 = 0;
    return (function*(arg0, done) {
      if (c22 === 2) {
        c22 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = done;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp13;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp14 === 3) {
          if (arg0 === 1) {
            throw done;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = done;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c22 = 2;
            switch (c21) {
              case 0:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c22 = 3;
                  obj = { value: null, done: true };
                  obj[0] = done;
                  return obj;
                } else {
                  closure_17 = tmp4;
                  closure_18 = tmp15;
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  store = dependencyMap;
                  throwTypeErrorResult = obj1;
                  dependencyMap = obj1;
                  closure_3 = undefined;
                  let lib;
                  let lib2;
                  let value;
                  let items9;
                  obj1 = { eventTypes: null, responseTexts: null, finishReasons: null, responseId: "", responseModel: "", responseTimestamp: 0, promptTokens: "r", completionTokens: "sa", totalTokens: "isArray", chatCompletionToolCalls: null, responsesApiToolCalls: null };
                  obj1[0] = [];
                  obj1[1] = [];
                  obj1[2] = [];
                  obj1[9] = {};
                  obj1[10] = [];
                  c4 = false;
                  closure_5 = false;
                  c19 = 4;
                  const iter = (function _asyncIterator(closure_0) {
                    if (typeof Symbol !== "undefined") {
                      const _Symbol = Symbol;
                      let str2 = Symbol.asyncIterator;
                      const _Symbol2 = Symbol;
                      let str = Symbol.iterator;
                    }
                    let num = 1;
                    while (true) {
                      let tmp2 = str;
                      let tmp3 = str2;
                      let tmp = num;
                      if (str2) {
                        if (null != closure_0[str2]) {
                          break;
                        }
                      }
                      if (str) {
                        let tmp5 = closure_0[str];
                        if (null != tmp5) {
                          let call = tmp5.call;
                          let tmp10 = c4;
                          let tmp11 = typeof call === "unknown" ? tmp5() : call(closure_0);
                          let tmp12 = new.target;
                          let tmp13 = new.target;
                          let tmp14 = tmp11;
                          tmp10 = new tmp10(tmp11);
                          let tmp16 = tmp10;
                          return tmp10;
                        }
                      }
                      num = num - 1;
                      str = "@@iterator";
                      str2 = "@@asyncIterator";
                      if (tmp) {
                        continue;
                      } else {
                        let _TypeError = TypeError;
                        let tmp6 = new.target;
                        let str3 = "Object is not async iterable";
                        let tmp7 = new.target;
                        let typeError = new TypeError("Object is not async iterable");
                        let tmp9 = typeError;
                        throw typeError;
                      }
                    }
                    const call2 = tmp4.call;
                    return typeof call2 === "unknown" ? tmp4() : call2(closure_0);
                  })(store);
                  lib2 = iter;
                  throwTypeErrorResult = callback;
                  c21 = 5;
                  c22 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = callback(iter.next());
                  return obj2;
                }
              break;
              case 1:
                throwTypeErrorResult = closure_18;
                throwTypeErrorResult = closure_17;
                c19 = 0;
                throwTypeErrorResult = store;
                throwTypeErrorResult = dependencyMap;
                const obj64 = store(828);
                throwTypeErrorResult = store;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj64;
                throwTypeErrorResult = obj64.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                throwTypeErrorResult = store;
                throwTypeErrorResult = dependencyMap;
                const obj65 = store(828);
                throwTypeErrorResult = store;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = obj65;
                throwTypeErrorResult = obj65.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                throwTypeErrorResult = store;
                const obj3 = {};
                throwTypeErrorResult = store;
                throwTypeErrorResult = dependencyMap;
                obj3[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                throwTypeErrorResult = store.setAttributes(obj3);
                throwTypeErrorResult = obj1;
                if (obj1.finishReasons.length) {
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = store;
                  const obj4 = {};
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON17 = JSON;
                  throwTypeErrorResult = obj1;
                  obj4[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                  throwTypeErrorResult = store.setAttributes(obj4);
                }
                throwTypeErrorResult = closure_18;
                let length9 = dependencyMap;
                if (dependencyMap) {
                  throwTypeErrorResult = obj1;
                  length9 = obj1.responseTexts.length;
                }
                if (length9) {
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = store;
                  const obj5 = {};
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = obj1;
                  const responseTexts9 = obj1.responseTexts;
                  obj5[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts9.join("");
                  throwTypeErrorResult = store.setAttributes(obj5);
                }
                throwTypeErrorResult = closure_18;
                closure_12 = 0;
                const _Object9 = Object;
                throwTypeErrorResult = obj1;
                const items = [];
                throwTypeErrorResult = closure_12;
                throwTypeErrorResult = items;
                closure_12 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_12);
                throwTypeErrorResult = obj1;
                throwTypeErrorResult = closure_12;
                throwTypeErrorResult = items;
                closure_12 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_12);
                items9 = items;
                throwTypeErrorResult = items9;
                if (items9.length > 0) {
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = store;
                  const obj6 = {};
                  throwTypeErrorResult = store;
                  throwTypeErrorResult = dependencyMap;
                  const _JSON18 = JSON;
                  throwTypeErrorResult = items9;
                  obj6[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                  throwTypeErrorResult = store.setAttributes(obj6);
                }
                throwTypeErrorResult = closure_18;
                throwTypeErrorResult = store;
                throwTypeErrorResult = store.end();
                throw throwTypeErrorResult;
              case 2:
                closure_16 = throwTypeErrorResult;
                throwTypeErrorResult = closure_18;
                c19 = 3;
                throwTypeErrorResult = c4;
                if (c4) {
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = null != lib2.return;
                }
                if (!throwTypeErrorResult) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    throwTypeErrorResult = closure_16;
                    throw closure_16;
                  }
                } else {
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = lib2;
                  c21 = 16;
                  c22 = 1;
                  let obj7 = { value: null, done: false };
                  obj7[0] = obj1(lib2.return());
                  return obj7;
                }
              break;
              case 3:
                throwTypeErrorResult = closure_18;
                c19 = 1;
                throwTypeErrorResult = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 4:
                throwTypeErrorResult = closure_18;
                c19 = 2;
                closure_5 = true;
                closure_3 = throwTypeErrorResult;
                throwTypeErrorResult = closure_18;
                c19 = 8;
                throwTypeErrorResult = c4;
                if (c4) {
                  throwTypeErrorResult = lib2;
                  throwTypeErrorResult = null != lib2.return;
                }
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_17;
                  throwTypeErrorResult = obj1;
                  throwTypeErrorResult = lib2;
                  c21 = 15;
                  c22 = 1;
                  let obj8 = { value: null, done: false };
                  obj8[0] = obj1(lib2.return());
                  return obj8;
                } else {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c19 = 0;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let obj55 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj55;
                    throwTypeErrorResult = obj55.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let obj56 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj56;
                    throwTypeErrorResult = obj56.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    throwTypeErrorResult = store;
                    const obj9 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj9[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    throwTypeErrorResult = store.setAttributes(obj9);
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj10 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON15 = JSON;
                      throwTypeErrorResult = obj1;
                      obj10[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      throwTypeErrorResult = store.setAttributes(obj10);
                    }
                    throwTypeErrorResult = closure_18;
                    let length8 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length8 = obj1.responseTexts.length;
                    }
                    if (length8) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj11 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts8 = obj1.responseTexts;
                      obj11[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts8.join("");
                      throwTypeErrorResult = store.setAttributes(obj11);
                    }
                    throwTypeErrorResult = closure_18;
                    closure_11 = 0;
                    const _Object8 = Object;
                    throwTypeErrorResult = obj1;
                    const items1 = [];
                    throwTypeErrorResult = closure_11;
                    throwTypeErrorResult = items1;
                    closure_11 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_11);
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = closure_11;
                    throwTypeErrorResult = items1;
                    closure_11 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_11);
                    items9 = items1;
                    throwTypeErrorResult = items9;
                    if (items9.length > 0) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj12 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON16 = JSON;
                      throwTypeErrorResult = items9;
                      obj12[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      throwTypeErrorResult = store.setAttributes(obj12);
                    }
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c22 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              break;
              case 5:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else {
                  closure_15 = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = closure_18;
                    c19 = 5;
                    throwTypeErrorResult = c4;
                    if (c4) {
                      throwTypeErrorResult = lib2;
                      throwTypeErrorResult = null != lib2.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = lib2;
                      c21 = 8;
                      c22 = 1;
                      const obj13 = { value: null, done: false };
                      obj13[0] = obj1(lib2.return());
                      return obj13;
                    } else {
                      c19 = 1;
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_5;
                      if (closure_5) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        c19 = 0;
                        throwTypeErrorResult = closure_17;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        let obj47 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj47;
                        throwTypeErrorResult = obj47.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        let obj48 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj48;
                        throwTypeErrorResult = obj48.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                        throwTypeErrorResult = store;
                        const obj14 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj14[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        throwTypeErrorResult = store.setAttributes(obj14);
                        throwTypeErrorResult = obj1;
                        if (obj1.finishReasons.length) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          let obj15 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON13 = JSON;
                          throwTypeErrorResult = obj1;
                          obj15[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                          throwTypeErrorResult = store.setAttributes(obj15);
                        }
                        throwTypeErrorResult = closure_18;
                        let length7 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length7 = obj1.responseTexts.length;
                        }
                        if (length7) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          let obj16 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          const responseTexts7 = obj1.responseTexts;
                          obj16[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts7.join("");
                          throwTypeErrorResult = store.setAttributes(obj16);
                        }
                        throwTypeErrorResult = closure_18;
                        c4 = 0;
                        const _Object7 = Object;
                        throwTypeErrorResult = obj1;
                        const items2 = [];
                        throwTypeErrorResult = c4;
                        throwTypeErrorResult = items2;
                        c4 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), c4);
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = c4;
                        throwTypeErrorResult = items2;
                        c4 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, c4);
                        items9 = items2;
                        throwTypeErrorResult = items9;
                        if (items9.length > 0) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          const obj17 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON14 = JSON;
                          throwTypeErrorResult = items9;
                          obj17[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                          throwTypeErrorResult = store.setAttributes(obj17);
                        }
                        throwTypeErrorResult = closure_18;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c22 = 3;
                        throwTypeErrorResult = closure_15;
                        const obj18 = { value: null, done: true };
                        obj18[0] = closure_15;
                        return obj18;
                      }
                    }
                  } else {
                    throwTypeErrorResult = closure_18;
                    lib = done;
                    const done2 = done.done;
                    c4 = !done2;
                    if (done2) {
                      c19 = 2;
                    } else {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = lib;
                      value = lib.value;
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      let obj45 = store(828);
                      throwTypeErrorResult = value;
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      if (obj45.isChatCompletionChunk(value)) {
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = value;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = dependencyMap;
                        throwTypeErrorResult = lib(value, obj1, dependencyMap);
                      } else {
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        let obj46 = store(828);
                        throwTypeErrorResult = value;
                        if (obj46.isResponsesApiStreamEvent(value)) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = lib2;
                          throwTypeErrorResult = value;
                          throwTypeErrorResult = obj1;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = lib2(value, obj1, dependencyMap, store);
                        }
                      }
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = value;
                      c21 = 11;
                      c22 = 1;
                    }
                  }
                }
              break;
              case 6:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else {
                  closure_14 = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = closure_18;
                    c19 = 6;
                    throwTypeErrorResult = c4;
                    if (c4) {
                      throwTypeErrorResult = lib2;
                      throwTypeErrorResult = null != lib2.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = lib2;
                      c21 = 10;
                      c22 = 1;
                      const obj19 = { value: null, done: false };
                      obj19[0] = obj1(lib2.return());
                      return obj19;
                    } else {
                      c19 = 1;
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_5;
                      if (closure_5) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        c19 = 0;
                        throwTypeErrorResult = closure_17;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        let obj37 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj37;
                        throwTypeErrorResult = obj37.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        let obj38 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj38;
                        throwTypeErrorResult = obj38.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                        throwTypeErrorResult = store;
                        const obj20 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj20[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        throwTypeErrorResult = store.setAttributes(obj20);
                        throwTypeErrorResult = obj1;
                        if (obj1.finishReasons.length) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          const obj21 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON11 = JSON;
                          throwTypeErrorResult = obj1;
                          obj21[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                          throwTypeErrorResult = store.setAttributes(obj21);
                        }
                        throwTypeErrorResult = closure_18;
                        let length6 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length6 = obj1.responseTexts.length;
                        }
                        if (length6) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          const obj22 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          const responseTexts6 = obj1.responseTexts;
                          obj22[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts6.join("");
                          throwTypeErrorResult = store.setAttributes(obj22);
                        }
                        throwTypeErrorResult = closure_18;
                        lib = 0;
                        const _Object6 = Object;
                        throwTypeErrorResult = obj1;
                        const items3 = [];
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = items3;
                        lib = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), lib);
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = items3;
                        lib = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, lib);
                        items9 = items3;
                        throwTypeErrorResult = items9;
                        if (items9.length > 0) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          let obj23 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON12 = JSON;
                          throwTypeErrorResult = items9;
                          obj23[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                          throwTypeErrorResult = store.setAttributes(obj23);
                        }
                        throwTypeErrorResult = closure_18;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c22 = 3;
                        throwTypeErrorResult = closure_14;
                        let obj24 = { value: null, done: true };
                        obj24[0] = closure_14;
                        return obj24;
                      }
                    }
                  } else {
                    throwTypeErrorResult = closure_18;
                    lib = done;
                    done = done.done;
                    c4 = !done;
                  }
                }
              break;
              case 7:
                throwTypeErrorResult = closure_18;
                c19 = 1;
                throwTypeErrorResult = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 8:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c19 = 0;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let obj30 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj30;
                    throwTypeErrorResult = obj30.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    let obj31 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj31;
                    throwTypeErrorResult = obj31.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    throwTypeErrorResult = store;
                    const obj25 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj25[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    throwTypeErrorResult = store.setAttributes(obj25);
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj26 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON9 = JSON;
                      throwTypeErrorResult = obj1;
                      obj26[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      throwTypeErrorResult = store.setAttributes(obj26);
                    }
                    throwTypeErrorResult = closure_18;
                    let length5 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length5 = obj1.responseTexts.length;
                    }
                    if (length5) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj27 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts5 = obj1.responseTexts;
                      obj27[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts5.join("");
                      throwTypeErrorResult = store.setAttributes(obj27);
                    }
                    throwTypeErrorResult = closure_18;
                    closure_3 = 0;
                    const _Object5 = Object;
                    throwTypeErrorResult = obj1;
                    const items4 = [];
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = items4;
                    closure_3 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_3);
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = items4;
                    closure_3 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_3);
                    items9 = items4;
                    throwTypeErrorResult = items9;
                    if (items9.length > 0) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj28 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON10 = JSON;
                      throwTypeErrorResult = items9;
                      obj28[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      throwTypeErrorResult = store.setAttributes(obj28);
                    }
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c22 = 3;
                    const obj29 = { value: null, done: true };
                    obj29[0] = done;
                    return obj29;
                  }
                }
              break;
              case 9:
                throwTypeErrorResult = closure_18;
                c19 = 1;
                throwTypeErrorResult = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 10:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c19 = 0;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj23 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj23;
                    throwTypeErrorResult = obj23.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj24 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj24;
                    throwTypeErrorResult = obj24.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    throwTypeErrorResult = store;
                    obj30 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj30[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    throwTypeErrorResult = store.setAttributes(obj30);
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      obj31 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON7 = JSON;
                      throwTypeErrorResult = obj1;
                      obj31[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      throwTypeErrorResult = store.setAttributes(obj31);
                    }
                    throwTypeErrorResult = closure_18;
                    let length4 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length4 = obj1.responseTexts.length;
                    }
                    if (length4) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj32 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts4 = obj1.responseTexts;
                      obj32[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts4.join("");
                      throwTypeErrorResult = store.setAttributes(obj32);
                    }
                    throwTypeErrorResult = closure_18;
                    closure_5 = 0;
                    const _Object4 = Object;
                    throwTypeErrorResult = obj1;
                    const items5 = [];
                    throwTypeErrorResult = closure_5;
                    throwTypeErrorResult = items5;
                    closure_5 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_5);
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = closure_5;
                    throwTypeErrorResult = items5;
                    closure_5 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_5);
                    items9 = items5;
                    throwTypeErrorResult = items9;
                    if (items9.length > 0) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj33 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON8 = JSON;
                      throwTypeErrorResult = items9;
                      obj33[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      throwTypeErrorResult = store.setAttributes(obj33);
                    }
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c22 = 3;
                    const obj34 = { value: null, done: true };
                    obj34[0] = done;
                    return obj34;
                  }
                }
              break;
              case 11:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else {
                  closure_13 = done;
                  if (arg0 === 2) {
                    throwTypeErrorResult = closure_18;
                    c19 = 7;
                    throwTypeErrorResult = c4;
                    if (c4) {
                      throwTypeErrorResult = lib2;
                      throwTypeErrorResult = null != lib2.return;
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = obj1;
                      throwTypeErrorResult = lib2;
                      c21 = 13;
                      c22 = 1;
                      const obj35 = { value: null, done: false };
                      obj35[0] = obj1(lib2.return());
                      return obj35;
                    } else {
                      c19 = 1;
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_5;
                      if (closure_5) {
                        throwTypeErrorResult = closure_3;
                        throw closure_3;
                      } else {
                        c19 = 0;
                        throwTypeErrorResult = closure_17;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj15 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj15;
                        throwTypeErrorResult = obj15.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj16 = store(828);
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = obj16;
                        throwTypeErrorResult = obj16.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                        throwTypeErrorResult = store;
                        const obj36 = {};
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = dependencyMap;
                        obj36[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                        throwTypeErrorResult = store.setAttributes(obj36);
                        throwTypeErrorResult = obj1;
                        if (obj1.finishReasons.length) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          obj37 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON5 = JSON;
                          throwTypeErrorResult = obj1;
                          obj37[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                          throwTypeErrorResult = store.setAttributes(obj37);
                        }
                        throwTypeErrorResult = closure_18;
                        let length3 = dependencyMap;
                        if (dependencyMap) {
                          throwTypeErrorResult = obj1;
                          length3 = obj1.responseTexts.length;
                        }
                        if (length3) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          obj38 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          throwTypeErrorResult = obj1;
                          const responseTexts3 = obj1.responseTexts;
                          obj38[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts3.join("");
                          throwTypeErrorResult = store.setAttributes(obj38);
                        }
                        throwTypeErrorResult = closure_18;
                        value = 0;
                        const _Object3 = Object;
                        throwTypeErrorResult = obj1;
                        const items6 = [];
                        throwTypeErrorResult = value;
                        throwTypeErrorResult = items6;
                        value = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), value);
                        throwTypeErrorResult = obj1;
                        throwTypeErrorResult = value;
                        throwTypeErrorResult = items6;
                        value = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, value);
                        items9 = items6;
                        throwTypeErrorResult = items9;
                        if (items9.length > 0) {
                          throwTypeErrorResult = closure_18;
                          throwTypeErrorResult = closure_17;
                          throwTypeErrorResult = store;
                          const obj39 = {};
                          throwTypeErrorResult = store;
                          throwTypeErrorResult = dependencyMap;
                          const _JSON6 = JSON;
                          throwTypeErrorResult = items9;
                          obj39[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                          throwTypeErrorResult = store.setAttributes(obj39);
                        }
                        throwTypeErrorResult = closure_18;
                        throwTypeErrorResult = store;
                        throwTypeErrorResult = store.end();
                        c22 = 3;
                        throwTypeErrorResult = closure_13;
                        const obj40 = { value: null, done: true };
                        obj40[0] = closure_13;
                        return obj40;
                      }
                    }
                  } else {
                    throwTypeErrorResult = closure_18;
                    c4 = false;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = lib2;
                    c21 = 6;
                    c22 = 1;
                    const obj41 = { value: null, done: false };
                    obj41[0] = obj1(lib2.next());
                    return obj41;
                  }
                }
              break;
              case 12:
                throwTypeErrorResult = closure_18;
                c19 = 1;
                throwTypeErrorResult = closure_5;
                if (closure_5) {
                  throwTypeErrorResult = closure_3;
                  throw closure_3;
                } else {
                  throw throwTypeErrorResult;
                }
              break;
              case 13:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c19 = 0;
                    obj7 = store(828);
                    const result = obj7.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    obj8 = store(828);
                    const result1 = obj8.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    const obj42 = {};
                    obj42[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    store.setAttributes(obj42);
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj43 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON3 = JSON;
                      throwTypeErrorResult = obj1;
                      obj43[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      throwTypeErrorResult = store.setAttributes(obj43);
                    }
                    throwTypeErrorResult = closure_18;
                    let length2 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length2 = obj1.responseTexts.length;
                    }
                    if (length2) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj44 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts2 = obj1.responseTexts;
                      obj44[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts2.join("");
                      throwTypeErrorResult = store.setAttributes(obj44);
                    }
                    throwTypeErrorResult = closure_18;
                    lib2 = 0;
                    const _Object2 = Object;
                    throwTypeErrorResult = obj1;
                    const items7 = [];
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = items7;
                    lib2 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), lib2);
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = lib2;
                    throwTypeErrorResult = items7;
                    lib2 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, lib2);
                    items9 = items7;
                    throwTypeErrorResult = items9;
                    if (items9.length > 0) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      obj45 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON4 = JSON;
                      throwTypeErrorResult = items9;
                      obj45[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      throwTypeErrorResult = store.setAttributes(obj45);
                    }
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c22 = 3;
                    obj46 = { value: null, done: true };
                    obj46[0] = done;
                    return obj46;
                  }
                }
              break;
              case 14:
                c19 = 1;
                if (closure_5) {
                  throw closure_3;
                } else {
                  throw tmp74;
                }
              break;
              case 15:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throw closure_3;
                  } else {
                    c19 = 0;
                    obj = store(828);
                    const result2 = obj.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    obj1 = store(828);
                    const result3 = obj1.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    obj47 = {};
                    obj47[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    store.setAttributes(obj47);
                    if (obj1.finishReasons.length) {
                      obj48 = {};
                      const _JSON = JSON;
                      obj48[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      store.setAttributes(obj48);
                    }
                    let length = dependencyMap;
                    if (dependencyMap) {
                      length = obj1.responseTexts.length;
                    }
                    if (length) {
                      const obj49 = {};
                      const responseTexts = obj1.responseTexts;
                      obj49[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts.join("");
                      store.setAttributes(obj49);
                    }
                    items9 = 0;
                    const _Object = Object;
                    const items8 = [];
                    items9 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), items9);
                    items9 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, items9);
                    items9 = items8;
                    if (items9.length > 0) {
                      const obj50 = {};
                      const _JSON2 = JSON;
                      obj50[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      store.setAttributes(obj50);
                    }
                    store.end();
                    c22 = 3;
                    const obj51 = { value: null, done: true };
                    obj51[0] = done;
                    return obj51;
                  }
                }
              break;
              default:
                if (arg0 === 1) {
                  c22 = 3;
                  throw done;
                } else if (arg0 === 2) {
                  c19 = 1;
                  throwTypeErrorResult = closure_18;
                  throwTypeErrorResult = closure_5;
                  if (closure_5) {
                    throwTypeErrorResult = closure_3;
                    throw closure_3;
                  } else {
                    c19 = 0;
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    const obj72 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj72;
                    throwTypeErrorResult = obj72.setCommonResponseAttributes(store, obj1.responseId, obj1.responseModel, obj1.responseTimestamp);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    const obj73 = store(828);
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = obj73;
                    throwTypeErrorResult = obj73.setTokenUsageAttributes(store, obj1.promptTokens, obj1.completionTokens, obj1.totalTokens);
                    throwTypeErrorResult = store;
                    const obj52 = {};
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = dependencyMap;
                    obj52[store(823).GEN_AI_RESPONSE_STREAMING_ATTRIBUTE] = true;
                    throwTypeErrorResult = store.setAttributes(obj52);
                    throwTypeErrorResult = obj1;
                    if (obj1.finishReasons.length) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj53 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON19 = JSON;
                      throwTypeErrorResult = obj1;
                      obj53[store(823).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(obj1.finishReasons);
                      throwTypeErrorResult = store.setAttributes(obj53);
                    }
                    throwTypeErrorResult = closure_18;
                    let length10 = dependencyMap;
                    if (dependencyMap) {
                      throwTypeErrorResult = obj1;
                      length10 = obj1.responseTexts.length;
                    }
                    if (length10) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      const obj54 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = obj1;
                      const responseTexts10 = obj1.responseTexts;
                      obj54[store(823).GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = responseTexts10.join("");
                      throwTypeErrorResult = store.setAttributes(obj54);
                    }
                    throwTypeErrorResult = closure_18;
                    closure_10 = 0;
                    const _Object10 = Object;
                    throwTypeErrorResult = obj1;
                    items9 = [];
                    throwTypeErrorResult = closure_10;
                    throwTypeErrorResult = items9;
                    closure_10 = HermesBuiltin.arraySpread(Object.values(obj1.chatCompletionToolCalls), closure_10);
                    throwTypeErrorResult = obj1;
                    throwTypeErrorResult = closure_10;
                    throwTypeErrorResult = items9;
                    closure_10 = HermesBuiltin.arraySpread(obj1.responsesApiToolCalls, closure_10);
                    throwTypeErrorResult = items9;
                    if (items9.length > 0) {
                      throwTypeErrorResult = closure_18;
                      throwTypeErrorResult = closure_17;
                      throwTypeErrorResult = store;
                      obj55 = {};
                      throwTypeErrorResult = store;
                      throwTypeErrorResult = dependencyMap;
                      const _JSON20 = JSON;
                      throwTypeErrorResult = items9;
                      obj55[store(823).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(items9);
                      throwTypeErrorResult = store.setAttributes(obj55);
                    }
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = store;
                    throwTypeErrorResult = store.end();
                    c22 = 3;
                    obj56 = { value: null, done: true };
                    obj56[0] = done;
                    return obj56;
                  }
                }
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c19;
            if (tmp5 === c19) {
              throwTypeErrorResult = tmp3;
              c22 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c21 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c21 = throwTypeErrorResult;
            } else if (tmp3 === throwTypeErrorResult) {
              c21 = tmp3;
            } else if (tmp12 === throwTypeErrorResult) {
              c21 = tmp12;
            } else if (tmp6 === throwTypeErrorResult) {
              c21 = tmp11;
            } else if (tmp7 === throwTypeErrorResult) {
              c21 = tmp10;
            } else if (tmp11 === throwTypeErrorResult) {
              c21 = tmp9;
            } else {
              c21 = tmp8;
            }
          }
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentStream = function instrumentStream(arg0, arg1, arg2) {
  const self = this;
  const apply = _instrumentStream.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
