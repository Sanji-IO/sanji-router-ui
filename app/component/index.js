import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sjLogger from 'sanji-logger-ui';

import RouterHelperProvider from './router-helper';

let app = angular.module('sanji.router', [uiRouter, sjLogger]);
app.provider('routerHelper', RouterHelperProvider);
export default app = app.name
