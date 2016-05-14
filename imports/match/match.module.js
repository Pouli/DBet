import './list/list.template.html';

import matchConfig from './match.config';

import ListController from './list/list.controller';

let proposalModule = angular.module('Match', []);

proposalModule.config(matchConfig);

proposalModule.controller('ListController', ListController);

export default proposalModule;
