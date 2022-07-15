'use strict';

import Creator from "./create/creator.js";

export default class App {
    constructor() {
        this.app = new Creator('app', 'div', ['id'], ['app'], '', 1, document.body, false, '', '');
    }
}

const app = new App();