import adminConfig from './admin.config';

import mainComponent from './main/main.component';
import matchComponent from './match/match.component';
import teamComponent from './team/team.component';
import teamCreationComponent from './team/creation/creation.component';
import teamEditionComponent from './team/edition/edition.component';

let adminModule = angular.module('Admin', []);

adminModule.config(adminConfig);

adminModule.component('adminMain', mainComponent);
adminModule.component('adminMatch', matchComponent);
adminModule.component('adminTeam', teamComponent);
adminModule.component('adminTeamCreation', teamCreationComponent);
adminModule.component('adminTeamEdition', teamEditionComponent);


export default adminModule;
