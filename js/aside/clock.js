'use strict';

export default class Clock {
    constructor(Creator, aside) {
        this.clock = new Creator('clock', 'div', ['class'], ['clock'], '', 1, aside, false, '', '');

        setInterval(() => {
            this.date = new Date();
            this.h = this.date.getHours();
            this.m = this.date.getMinutes();
            this.s = this.date.getSeconds();
            this.session = '오전';

            this.h > 12 ? this.session = '오후' : this.session;
    
            this.h > 12 ? this.h -= 12 : this.h;
            this.h < 10 ? this.h = '0' + this.h : this.h;
            this.m < 10 ? this.m = '0' + this.m : this.m;
            this.s < 10 ? this.s = '0' + this.s : this.s;

            this.clock.name.innerText = `${this.session} ${this.h}시 ${this.m}분 ${this.s}초`;
        }, 1000);
    }
}