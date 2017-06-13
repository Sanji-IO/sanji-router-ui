import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { sjLogger } from 'sanji-logger-ui';

import RouterHelperProvider from './router-helper';

const sjRouter = angular.module('sanji.router', [uiRouter, sjLogger]).provider('routerHelper', RouterHelperProvider)
  .name;
export { sjRouter };
