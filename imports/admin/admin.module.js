import './match/match.template.html';
import './team/team.template.html';
import './team/creation/creation.template.html';

import adminConfig from './admin.config';

import matchComponent from './match/match.component';
import teamComponent from './team/team.component';
import teamCreationComponent from './team/creation/creation.component';

let adminModule = angular.module('Admin', []);

adminModule.config(adminConfig);

adminModule.component('adminMatch', matchComponent);
adminModule.component('adminTeam', teamComponent);
adminModule.component('adminTeamCreation', teamCreationComponent);

export default adminModule;
