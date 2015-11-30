import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Router from './router.js';

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(() => {
  window.router = new Router();
})
