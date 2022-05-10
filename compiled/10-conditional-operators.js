"use strict";

var defaultArg = function defaultArg(value, initialValue) {
  if (value === null || value === undefined) {
    return initialValue;
  } else {
    return value;
  }
};

var ellipsisText = function ellipsisText(text, limit) {
  limit = defaultArg(limit, 100);
  return text.slice(0, limit).trim() + "...";
};

var desc = "\n  JavaScript\uB294 \uBB38 \uBCF4\uB2E4, \uC2DD\uC744 \uC0AC\uC6A9\uD574 \uC870\uAC74 \uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\uAC00 \uC7A6\uC2B5\uB2C8\uB2E4. \n  \uC790\uC8FC \uC0AC\uC6A9\uB418\uB294 \uC870\uAC74 \uC2DD\uC5D0 \uB300\uD574 \uC815\uB9AC\uD569\uB2C8\uB2E4.\n".trim();
var company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39
  },
  getLocation: function getLocation() {
    return Object.values(company.location);
  }
});
var companyName, companyLat;

if ('companyName' in company) {
  companyName = company.companyName;
}

console.log('companyName = ', companyName);

if ('location' in company) {
  if ('lat' in company.location) companyLat = company.location.lat;
}

console.log('companyLat = ', companyLat);

if ('getFoundingDate' in company) {
  if (typeof company.getFoundingDate === 'function') company.getFoundingDate();
}

if ('getLocation' in company) {
  if (typeof company.getLocation === 'function') company.getLocation();
}