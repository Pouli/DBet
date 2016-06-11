import templateUrl from './graph.template.html';

class GraphDirective {
    constructor() {
        this.templateUrl = templateUrl;
        this.restrict = 'E';
        this.scope = {};

        this.controller = GraphController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    compile() {

    }

    link() {

    }
}

// Directive's controller
class GraphController {
    constructor () {
        this.name = 'Pouli';
    }
}

export default GraphDirective;