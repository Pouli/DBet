import AuthConfig from './auth.config';

import loginComponent from './login/login.component';
import signupComponent from './signup/signup.component';

let authModule = angular.module('Auth', []);

authModule.config(AuthConfig);

authModule.component('login', loginComponent);
authModule.component('signup', signupComponent);

export default authModule;
