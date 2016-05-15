import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import authModule from '../imports/auth/auth.module';
import matchModule from '../imports/match/match.module';
import profileModule from '../imports/profile/profile.module';
import adminModule from '../imports/admin/admin.module';

import appConfig from '../imports/app.config';

import { DEPARTMENTS } from '../imports/app.constant';

import { displayNameFilter } from '../imports/app.filter';

import AuthService from '../imports/_shared/auth.service';
import MessageService from '../imports/_shared/message.service';

import AppController from '../imports/app.controller';

import navbarComponent from '../imports/navbar/navbar.component'

import appRun from '../imports/app.run';

let app = angular.module('DBetApp', [
    angularMeteor, uiRouter, ngMessages,
    authModule.name, profileModule.name, matchModule.name, adminModule.name
]);

app.config(appConfig);

app.constant('DEPARTMENTS', DEPARTMENTS);

app.filter('displayNameFilter', displayNameFilter);

app.service('AuthService', AuthService);
app.service('MessageService', MessageService);

app.controller('AppController', AppController);

app.component('navbar', navbarComponent);

app.run(appRun);
