import adminConfig from './admin.config';

let adminModule = angular.module('Admin', []);

adminModule.config(adminConfig);

export default adminModule;
