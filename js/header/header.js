'use strict';

import Dark_mod from "./dark_mod.js";

export default class Header {
    constructor(Creator, main) {
        this.header = new Creator('header', 'header', [''], [''], '', 1, main, false, '', '');
    
        this.dark_mod = new Dark_mod(Creator, this.header.name);
    }
}