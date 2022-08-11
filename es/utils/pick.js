"use strict";

export default function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (object[key]) {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}