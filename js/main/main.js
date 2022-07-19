'use strict';

export default class Main {
    constructor(Creator, app) {
        this.main = new Creator('main', 'main', ['class'], ['pd-tb bs'], '', 1, app, false, '', '');
    }
}