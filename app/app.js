import './app.scss';
import angular from 'angular';
import {sjRouter} from './component';

angular.module('webapp', [sjRouter]);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
