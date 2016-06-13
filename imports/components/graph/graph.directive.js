import templateUrl from './graph.template.html';

class GraphController {
    constructor () {
        this.name = 'Pouli';
    }
}

class GraphDirective {
    constructor() {
        this.templateUrl = templateUrl;
        this.restrict = 'E';
        this.scope = {
            scores: '='
        };

        this.controller = GraphController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    link(scope, element, attrs, controller) {
        console.log(scope);
        console.log(element);
        console.log(attrs);
        console.log(controller);
    }
}

export default GraphDirective;