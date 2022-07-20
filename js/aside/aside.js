'use strict';

import Day from "./day.js";
import Clock from "./clock.js";

export default class Aside {
    constructor(Creator, app) {
        this.aside = new Creator('aside', 'aside', ['class'], ['pd-tb bs'], '', 1, app, false, '', '');
    
        this.day = new Day(Creator, this.aside.name);
        this.clock = new Clock(Creator, this.aside.name);
    }
}