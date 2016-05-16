import './team/team.template.html';
import './team/creation/creation.template.html';

import adminConfig from './admin.config';

import teamComponent from './team/team.component';
import teamCreationComponent from './team/creation/creation.component';

let adminModule = angular.module('Admin', []);

adminModule.config(adminConfig);

adminModule.component('adminTeam', teamComponent);
adminModule.component('adminTeamCreation', teamCreationComponent);

export default adminModule;
