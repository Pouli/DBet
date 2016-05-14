import './main/main.template.html';
import './avatar/avatar.template.html';

import profileConfig from './profile.config';

import mainComponent from './main/main.component';
import avatarComponent from './avatar/avatar.component';

let profileModule = angular.module('Profile', []);

profileModule.config(profileConfig);

profileModule.component('profile', mainComponent);
profileModule.component('avatar', avatarComponent);

export default profileModule;
