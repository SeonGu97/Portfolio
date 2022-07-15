'use strict';

export default class Main {
    constructor(Creator, app) {
        this.main = new Creator('main', 'main', [''], [''], '', 1, app, false, '', '');
    }
}