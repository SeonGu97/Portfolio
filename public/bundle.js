(()=>{"use strict";class t{constructor(t,e,s,i,n,h,r,a,p,o){this.name=t,this.element=e,this.type=s,this.value=i,this.text=n,this.num=h,this.parent=r,this.boolean=a,this.event=p,this.func=o;for(let t=0;t<this.num;t++)this.promise_1=this.create(),this.promise_2=this.attrs(),this.promise_3=this.innerHTML(),this.promise_4=this.append(),this.promise_5=this.Event();this.promise_1.then(this.promise_2),this.promise_2.then(this.promise_3),this.promise_3.then(this.promise_4)}get num(){return this._num}set num(t){this._num=t<1?1:t}get type(){return this._type}set type(t){this._type="object"==typeof t?t:new Array(t),this._type=this._type[0].split(" "),""==this._type?this._type.length=0:this._type}get value(){return this._value}set value(t){this._value="object"==typeof t?t:new Array(t)}get boolean(){return this._boolean}set boolean(t){this._boolean=t?this.promise_5:t}get event(){return this._event}set event(t){this._event=t||(this.boolean=!1)}get func(){return this._func}set func(t){this._func="function"==typeof t?t:t=void 0}async create(){return this.name=document.createElement(this.element)}async attrs(){for(let t=0;t<this.type.length;t++)""==this.value[t]?this.value[t]=void 0:this.value[t],this.name.setAttribute(this.type[t],this.value[t]);return this.name}async innerHTML(){return this.name.innerHTML=this.text}async append(){return this.parent.appendChild(this.name)}async Event(){return this.name.addEventListener(this.event,this.func,!1)}}class e{constructor(t,e){this.main=new t("main","main",[""],[""],"",1,e,!1,"","")}}new class{constructor(){this.app=new t("app","div",["id"],["app"],"",1,document.body,!1,"",""),this.main=new e(t,this.app.name)}}})();