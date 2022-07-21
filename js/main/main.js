'use strict';

import Header from "../header/header.js";

export default class Main {
    constructor(Creator, app) {
        this.main = new Creator('main', 'main', ['class'], ['pd-tb bs'], '', 1, app, false, '', '');
    
        this.header = new Header(Creator, this.main.name);
    }
}