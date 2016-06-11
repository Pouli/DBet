import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngFileUpload from 'ng-file-upload';
import 'ng-img-crop/compile/minified/ng-img-crop';
import 'ng-img-crop/compile/minified/ng-img-crop.css';

import authModule from '../imports/auth/auth.module';
import profileModule from '../imports/profile/profile.module';
import adminModule from '../imports/admin/admin.module';
import betModule from '../imports/bet/bet.module';
import resultModule from '../imports/result/result.module';

import appConfig from '../imports/app.config';

import { DEPARTMENTS } from '../imports/app.constant';
import { GROUPS } from '../imports/app.constant';

import { displayNameFilter } from '../imports/app.filter';
import { convertDepartmentId } from '../imports/app.filter';
import { convertGroupId } from '../imports/app.filter';

import AuthService from '../imports/_shared/auth.service';
import MessageService from '../imports/_shared/message.service';

import AppController from '../imports/app.controller';

import navbarComponent from '../imports/components/navbar/navbar.component';
import imgUploaderComponent from '../imports/components/img-uploader/img-uploader.component';

import GraphDirective from '../imports/components/graph/graph.directive';

import appRun from '../imports/app.run';

let app = angular.module('DBetApp', [
    angularMeteor, uiRouter, ngMessages, ngFileUpload, 'ngImgCrop', 
    authModule.name, profileModule.name, adminModule.name, betModule.name, resultModule.name
]);

app.config(appConfig);

app.constant('DEPARTMENTS', DEPARTMENTS);
app.constant('GROUPS', GROUPS);

app.filter('displayNameFilter', displayNameFilter);
app.filter('convertDepartmentId', convertDepartmentId);
app.filter('convertGroupId', convertGroupId);

app.service('AuthService', AuthService);
app.service('MessageService', MessageService);

app.controller('AppController', AppController);

app.component('navbar', navbarComponent);
app.component('imgUploader', imgUploaderComponent);

app.directive('graphDirective', () => new GraphDirective());

app.run(appRun);
