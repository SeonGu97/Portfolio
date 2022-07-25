'use strict';

export default class Dark_mod {
    constructor(Creator, header) {
        this.dark_mod = new Creator('dark_mod', 'label', ['class'], ['dark_mod bs'], '', 1, header, false, '', '');
    
        this.mod_icon = new Creator('mod_icon', 'span', ['class'], ['mod_icon'], '', 1, this.dark_mod.name, true, 'click', this.modEvent);
        
        this.icon = ['🌝'];

        this.mod_icon.name.innerHTML = this.icon[0];
    }

    modEvent(e) {
        this.target = e.target;

        this.target.parentElement.classList.toggle('mod_bg');
        this.target.classList.toggle('mod_change');

        this.icon = ['🌝', '🌚'];

        this.analog = document.querySelector('.analog');

        if(this.target.classList.contains('mod_change')) {
            this.target.innerHTML = this.icon[1];
        }else {
            this.target.innerHTML = this.icon[0];
        }

        document.body.classList.toggle('dark');

        this.analog = document.querySelector('.analog');
    }
}