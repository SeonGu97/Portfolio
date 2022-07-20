'use strict';

export default class Analog {
    constructor(Creator, aside) {
        this.analog = new Creator('analog', 'div', ['class'], ['analog bs'], '', 1, aside, false, '', '');

        this.hh = new Creator('hh', 'div', ['class'], ['hh'], '', 1, this.analog.name, false, '', '');
        this.mh = new Creator('mh', 'div', ['class'], ['mh'], '', 1, this.analog.name, false, '', '');
        this.sh = new Creator('sh', 'div', ['class'], ['sh'], '', 1, this.analog.name, false, '', '');
        
        this.num = 12;

        this.number = new Creator('number', 'div', ['class'], ['number'], '|', this.num, this.analog.name, false, '', '');
    
        this.numbers = document.querySelectorAll('.number');

        for(let i = 0; i < this.num; i++) {
            this.numbers[i].style.transform = `rotate(${30 * i}deg)`;
        }

        setInterval(() => {
            this.date = new Date();
            this.s = this.date.getSeconds() / 60;
            this.m = (this.s + this.date.getMinutes()) / 60;
            this.h = (this.m + this.date.getHours()) / 12;
            
            this.setRotate(this.sh.name, this.s);
            this.setRotate(this.mh.name, this.m);
            this.setRotate(this.hh.name, this.h);
        }, 1000);
    }

    setRotate(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }
}