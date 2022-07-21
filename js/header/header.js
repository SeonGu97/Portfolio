'use strict';

export default class Header {
    constructor(Creator, main) {
        this.header = new Creator('header', 'header', [''], [''], '', 1, main, false, '', '');
    }
}