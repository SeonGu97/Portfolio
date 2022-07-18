'use strict';

export default class Aside {
    constructor(Creator, app) {
        this.aside = new Creator('aside', 'aside', ['class'], ['tb-pd bs'], '', 1, app, false, '', '');
    }
}