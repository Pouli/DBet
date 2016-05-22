export default function($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        if(error === 'AUTH_REQUIRED') {
            return $state.go('login');
        }
        if(error === 'NOT_AUTHORIZED') {
            if(fromState.abstract) return $state.go('match');
            
            return $state.go(fromState);
        }
    });
}
