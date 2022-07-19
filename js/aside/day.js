'use strict';

export default class Day {
    constructor(Creator, aside) {
        this.day = new Creator('day', 'div', ['class'], ['day pd-tb'], '', 1, aside, false, '', '');
    
        this.date = new Date();
        this.y = this.date.getFullYear();
        this.m = this.date.getMonth() + 1;
        this.d = this.date.getDate();
        this.w = this.date.getDay();

        this.week = ['일', '월', '화', '수', '목', '금', '토'];

        this.m < 10 ? this.m = '0' + this.m : this.m;
        this.d < 10 ? this.d = '0' + this.d : this.d;

        this.day.name.innerText = `${this.y}년 ${this.m}월 ${this.d}일 ${this.week[this.w]}요일`;
    }
}