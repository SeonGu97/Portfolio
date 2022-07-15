'use strict';

export default class Aside {
    constructor(Creator, app) {
        this.aside = new Creator('aside', 'aside', [''], [''], '', 1, app, false, '', '');
    }
}