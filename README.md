# sanji-router-ui
> Sanji router service is part of Sanji UI framework and also it is a angular
module. It just a router wrapper for setup client router.

[sanji-router-ui-icon]: https://nodei.co/npm/sanji-router-ui.png?downloads=true
[sanji-router-ui-url]: https://npmjs.org/package/sanji-router-ui
[quality-badge]: http://npm.packagequality.com/badge/sanji-router-ui.png
[quality-url]: http://packagequality.com/#?package=sanji-router-ui
[travis-build-badge]: https://travis-ci.org/Sanji-IO/sanji-router-ui.svg?branch=master
[travis-build-url]: https://travis-ci.org/Sanji-IO/sanji-router-ui
[sanji-router-ui-coverage-image]: http://codecov.io/github/Sanji-IO/sanji-router-ui/coverage.svg?branch=master
[sanji-router-ui-coverage-url]: http://codecov.io/github/Sanji-IO/sanji-router-ui?branch=master
[sanji-router-ui-codacy-image]: https://api.codacy.com/project/badge/13d7e2e9bf1b40a3bd9a3113c7cea587
[sanji-router-ui-codacy-url]: https://www.codacy.com/public/zack9433/sanji-router-ui.git
[dependencies-image]: https://david-dm.org/Sanji-IO/sanji-router-ui.png
[dependencies-url]: https://david-dm.org/Sanji-IO/sanji-router-ui
[devdependencies-image]: https://david-dm.org/Sanji-IO/sanji-router-ui/dev-status.png
[devdependencies-url]: https://david-dm.org/Sanji-IO/sanji-router-ui#info=devDependencies
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

[![NPM][sanji-router-ui-icon]][sanji-router-ui-url]
[![Package Quality][quality-badge]][quality-url]
[![Build Status][travis-build-badge]][travis-build-url]
[![Coverage Status][sanji-router-ui-coverage-image]][sanji-router-ui-coverage-url]
[![Codacy Badge][sanji-router-ui-codacy-image]][sanji-router-ui-codacy-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]

## Dependencies
- [angularjs](https://github.com/angular/angular.js)
- [sanji-logger-ui](https://github.com/Sanji-IO/sanji-logger-ui)

## Installation
Sanji router service is based on es6 + webpack to development and embrace npm to install it.

```shell
npm install sanji-router-ui --save
```

## How to use
You need to include module first.
```javascript
angular.module('webapp', ['sanji.router'])
```
and then use `router` as DI service.
```javascript
class AppController {
  constructor(router) {
    router.on('connect', () => {
      console.info('connected');
    });
  }
}
AppController.$inject = ['router'];
```

## References
- [johnpapa/generator-hottowel](https://github.com/johnpapa/generator-hottowel)

## Contact

Author: Zack Yang &copy; 2015

* [@zack9433](https://twitter.com/zack9433)

Support: if you find any problems with this library,
[open issue](https://github.com/Sanji-IO/sanji-socket-ui/issues) on Github

