import './team/team.template.html';

import adminConfig from './admin.config';

import teamComponent from './team/team.component';

let adminModule = angular.module('Admin', []);

adminModule.config(adminConfig);

adminModule.component('adminTeam', teamComponent)

export default adminModule;
