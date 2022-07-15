'use strict';

import Creator from "./create/creator.js";
import Aside from "./js/aside/aside.js"
import Main from "./js/main/main.js";

export default class App {
    constructor() {
        this.app = new Creator('app', 'div', ['id'], ['app'], '', 1, document.body, false, '', '');

        this.aside = new Aside(Creator, this.app.name);
        this.main = new Main(Creator, this.app.name);
    }
}

const app = new App();