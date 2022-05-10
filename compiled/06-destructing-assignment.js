"use strict";

var state = Object.freeze({
  loading: false,
  error: null,
  data: [{
    id: 'kwdvj2ke1',
    title: 'euid'
  }, {
    id: 'zwecr8kip',
    title: 'react'
  }, {
    id: 'jdw1vkke1',
    title: 'gitbook'
  }]
});
var loading = state.loading;
var error = state.error;
var data = state.data;
var firstData = data[0];
var restData = data.slice(1);