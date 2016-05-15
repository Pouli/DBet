import './list/list.template.html';

import matchConfig from './match.config';

import ListController from './list/list.controller';

let matchModule = angular.module('Match', []);

matchModule.config(matchConfig);

matchModule.controller('ListController', ListController);

export default matchModule;
