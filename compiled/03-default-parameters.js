"use strict";

var defaultArg = function defaultArg(value, initialValue) {
  if (value === null || value === undefined) {
    value = initialValue;
  }

  return value;
};

var truncateText = function truncateText(text, limit) {
  limit = defaultArg(limit, 100);
  return text.slice(0, limit).trim() + "...";
};