import matchConfig from './bet.config';

import mainComponent from './main/main.component';

let betModule = angular.module('Bet', []);

betModule.config(matchConfig);

betModule.component('betMain', mainComponent);

export default betModule;
