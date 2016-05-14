import './list/list.template.html';

import matchConfig from './match.config';

import ListController from './list/list.controller';

let martchModule = angular.module('Match', []);

martchModule.config(matchConfig);

martchModule.controller('ListController', ListController);

export default martchModule;
