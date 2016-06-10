import resultConfig from './result.config';

import mainComponent from './main/main.component';

let resultModule = angular.module('Result', []);

resultModule.config(resultConfig);

resultModule.component('resultMain', mainComponent);

export default resultModule;
