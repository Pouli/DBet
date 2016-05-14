import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import authModule from '../imports/auth/auth.module';
import matchModule from '../imports/match/match.module';

import { displayNameFilter } from '../imports/app.filter';

import navbarComponent from '../imports/navbar/navbar.component'

import appConfig from '../imports/app.config';

import appRun from '../imports/app.run';

let app = angular.module('DBetApp', [
    angularMeteor, uiRouter, 'accounts.ui',
    matchModule.name, authModule.name
]);

app.filter('displayNameFilter', displayNameFilter);

app.component('navbar', navbarComponent);

app.config(appConfig);

app.run(appRun);
