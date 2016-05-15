export default function($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        if(error === 'AUTH_REQUIRED') {
            $state.go('login');
        }
        if(error === 'NOT_AUTHORIZED') {
            $state.go(fromState);
        }
    });
}
