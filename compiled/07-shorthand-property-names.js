"use strict";

var show = function show() {
  return this.name + " \uBCF4\uB2E4.";
};

function look() {
  return this.name + " \uC9C0\uCF1C\uBCF4\uB2E4.";
}

var watch = function watch() {
  console.log(this);
  return this.name + " \uAD00\uCC30\uD558\uB2E4.";
};

var euid = {
  name: '이듬',
  show: show,
  look: look,
  watch: watch
};
console.dir(euid);