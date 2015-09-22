/* Help configure the state-base ui.router */

const $inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
class RouterHelperProvider {
  constructor(...injects) {
    RouterHelperProvider.$inject.forEach((item, index) => this[item] = injects[index]);
    this.config = {
      defaultRoute: '/',
      docTitle: undefined,
      resolveAlways: {}
    };

    this.$locationProvider.html5Mode(true);
    this.configure = cfg => Object.assign(this.config, cfg);
  }

  $get($location, $rootScope, $state, logger) {
    let $stateProvider = this.$stateProvider;
    let $urlRouterProvider = this.$urlRouterProvider;
    let config = this.config;
    let handlingStateChangeError = false;
    let hasOtherwise = false;
    let stateCounts = {
      errors: 0,
      changes: 0
    };

    _init();

    return {
      stateCounts: stateCounts,
      configureStates: configureStates,
      getStates: getStates
    };

    function _init() {
      _handleRoutingErrors();
      _updateDocTitle();
    }

    function _handleRoutingErrors() {
      // Route cancellation:
      // On routing error, go to the specific page.
      $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
          if (handlingStateChangeError) {
            return;
          }
          stateCounts.errors++;
          handlingStateChangeError = true;
          let destination = (toState &&
            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
            'unknown target';
          let msg = 'Error routing to ' + destination + '. ' +
            (error.data || '') + '. <br/>' + (error.statusText || '') +
            ': ' + (error.status || '');
          logger.warning(msg, [toState]);
          $location.path(config.defaultRoute);
        }
      );
    }

    function _updateDocTitle() {
      $rootScope.$on('$stateChangeSuccess',
        (event, toState, toParams, fromState, fromParams) => {
          stateCounts.changes++;
          handlingStateChangeError = false;
          let title = config.docTitle + ' ' + (toState.title || '');
          $rootScope.title = title; // data bind to <title>
        });
    }

    function configureStates(states, otherwisePath) {
      states.forEach(state => {
        state.config.resolve =
          Object.assign(state.config.resolve || {}, config.resolveAlways);
        $stateProvider.state(state.state, state.config);
      });
      if (otherwisePath && !hasOtherwise) {
        hasOtherwise = true;
        $urlRouterProvider.otherwise(otherwisePath);
      }
    }

    function getStates() {
     return $state.get();
    }
  }
}
RouterHelperProvider.$inject = $inject;

export default RouterHelperProvider;
