import routerModule from './index' ;

let routerHelperProvider;
let $location, $rootScope, $state, logger, routerHelper;

describe('Provider: routerHelper', function() {
  beforeEach(angular.mock.module(routerModule));

  beforeEach(function() {
    angular.mock.module(function(_routerHelperProvider_) {
      routerHelperProvider = _routerHelperProvider_;
    });
  });

  beforeEach(function() {
    angular.mock.inject(function(_$location_, _$rootScope_, _$state_, _logger_, _routerHelper_) {
      $location = _$location_;
      $rootScope = _$rootScope_;
      $state = _$state_;
      logger = _logger_;
      routerHelper = _routerHelper_;
    });
  });

  it('#configure() should extend config', function() {
    let config = {
      defaultRoute: '/home',
      docTitle: 'home',
      resolveAlways: {}
    };
    routerHelperProvider.configure({defaultRoute: '/home', docTitle: 'home'});
    expect(routerHelperProvider.config).to.eql(config);
  });

  it('#$get(<...injects>) should return router service instance', function() {
    let obj = routerHelperProvider.$get($location, $rootScope, $state, logger);
    expect(obj.stateCounts).to.be.a('object');
    expect(obj.configureStates).to.be.a('function');
    expect(obj.getStates).to.be.a('function');
  });

  describe('Service: routerHelper', function() {
    it('#stateCounts should have default errors and changes', function() {
      let result = routerHelper.stateCounts;
      expect(result).to.eql({errors: 0, changes: 0});
    });

    it('#configureStates(<states, otherwisePath>) should set states and otherwise path', function() {
      let states = [{
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm'
        }
      }];
      routerHelper.configureStates(states, '/dashboard');
      expect($state.get('dashboard')).to.contain.all.keys([
        'url',
        'templateUrl',
        'controller',
        'controllerAs'
      ]);
    });
  });
});
