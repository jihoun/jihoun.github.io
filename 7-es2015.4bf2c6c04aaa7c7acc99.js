(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{kanD:function(t,e,n){"use strict";n.r(e),n.d(e,"StaffModule",(function(){return q}));var r=n("2kYt"),i=n("nIj0"),o=n("PBFl"),a=n("Meci"),s=n("29Wa"),c=n("kAAd"),l=n("bFHC"),p=n("Cd2c"),f=n("R7+U"),u=n("sEIs"),m=n("xVbo"),b=n("YtkY"),d=n("TLy2"),h=n("EM62"),g=n("ROBh"),v=n("IdLP"),y="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),w=new Uint8Array(16);function U(){if(!y)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(w)}for(var O=[],T=0;T<256;++T)O[T]=(T+256).toString(16).substr(1);var N=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||U)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e)for(var o=0;o<16;++o)e[r+o]=i[o];return e||function(t,e){var n=0;return[O[t[n++]],O[t[n++]],O[t[n++]],O[t[n++]],"-",O[t[n++]],O[t[n++]],"-",O[t[n++]],O[t[n++]],"-",O[t[n++]],O[t[n++]],"-",O[t[n++]],O[t[n++]],O[t[n++]],O[t[n++]],O[t[n++]],O[t[n++]]].join("")}(i)},C=function(t){return t[t.owner=0]="owner",t[t.manager=1]="manager",t[t.employee=2]="employee",t}({});const j=[{id:"1",firstName:"\ubbfc",lastName:"\uae40",pictureUrl:`https://picsum.photos/200/200?random=${N()}`,position:C.manager},{id:"2",firstName:"\uc11d\ud604",lastName:"\uae40",pictureUrl:`https://picsum.photos/200/200?random=${N()}`,position:C.owner},{id:"3",firstName:"\uc694\ud55c",lastName:"\ub77c\uc9c0\uc560",pictureUrl:`https://picsum.photos/200/200?random=${N()}`,position:C.employee},{id:"4",firstName:"Nicolas",lastName:"Lagier",pictureUrl:`https://picsum.photos/200/200?random=${N()}`,position:C.employee}];let S=(()=>{class t{constructor(){this.staff=[...j]}getList(){return Object(g.a)(this.staff)}getOne(t){return new v.a(e=>{const n=this.staff.find(e=>e.id===t);if(!n)throw new Error(`Person ${t} not Found`);e.next(n)})}patchStaff(t,e){return new v.a(n=>{const r=this.staff.findIndex(e=>e.id===t);if(-1===r)throw new Error("No such staff");this.staff[r]=Object.assign(Object.assign({},this.staff[r]),e),n.next(this.staff[r])})}postStaff(t){return new v.a(e=>{t.id=N(),this.staff.push(t),e.next(t)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=h.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),k=(()=>{class t{transform(t){return t===C.owner?"Owner":t===C.manager?"Manager":t===C.employee?"Staff":""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=h.Nb({name:"positionToPrint",type:t,pure:!0}),t})();const I=function(t){return["../../edit",t]};function P(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"h1",1),h.vc(2),h.Ub(3,"span",2),h.vc(4),h.fc(5,"positionToPrint"),h.Tb(),h.Tb(),h.Ub(6,"a",3),h.vc(7,"Edit"),h.Tb(),h.Rb()),2&t){const t=h.ec();h.Cb(2),h.yc(" ",null==t.person?null:t.person.lastName," ",null==t.person?null:t.person.firstName," "),h.Cb(2),h.xc("(",h.gc(5,4,null==t.person?null:t.person.position),")"),h.Cb(2),h.jc("routerLink",h.lc(6,I,t.person.id))}}let L=(()=>{class t{constructor(t,e){this.staffService=t,this.activatedRoute=e}ngOnInit(){this.activatedRoute.params.pipe(Object(m.a)(t=>t.uid),Object(b.a)(t=>t.uid),Object(d.a)(t=>this.staffService.getOne(t))).subscribe(t=>this.person=t,t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(h.Ob(S),h.Ob(u.a))},t.\u0275cmp=h.Ib({type:t,selectors:[["app-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"mat-h1"],[1,"mat-caption"],["mat-flat-button","","color","primary",3,"routerLink"]],template:function(t,e){1&t&&h.uc(0,P,8,8,"ng-container",0),2&t&&h.jc("ngIf",e.person)},directives:[r.l,o.a,u.e],pipes:[k],styles:[""]}),t})();var R=n("mFH5");function F(t,e){if(1&t&&(h.Ub(0,"mat-option",8),h.vc(1),h.fc(2,"positionToPrint"),h.Tb()),2&t){const t=e.$implicit;h.jc("value",t),h.Cb(1),h.wc(h.gc(2,2,t))}}let M=(()=>{class t{constructor(t,e,n,r){this.staffService=t,this.activatedRoute=e,this.fb=n,this.router=r}ngOnInit(){this.form=this.fb.group({firstName:["",[i.k.required]],lastName:["",[i.k.required]],position:[C.employee,[i.k.required]],phone:[null,[]],email:[null,[i.k.email]]}),this.activatedRoute.params.pipe(Object(m.a)(t=>t.uid),Object(b.a)(t=>t.uid),Object(d.a)(t=>this.staffService.getOne(t))).subscribe(t=>{this.person=t,this.form.setValue({firstName:t.firstName,lastName:t.lastName,position:t.position,phone:t.phone||null,email:t.email||null})},t=>console.error(t))}get positions(){return[C.owner,C.employee,C.manager]}save(){if(this.form.valid){const t=this.form.value;let e;e=this.person?this.staffService.patchStaff(this.person.id,t):this.staffService.postStaff(t),e.subscribe(t=>{this.router.navigate(["/staff/detail",t.id])})}}}return t.\u0275fac=function(e){return new(e||t)(h.Ob(S),h.Ob(u.a),h.Ob(i.b),h.Ob(u.b))},t.\u0275cmp=h.Ib({type:t,selectors:[["app-edit"]],decls:24,vars:3,consts:[[3,"formGroup","ngSubmit"],["matInput","","formControlName","lastName"],["matInput","","formControlName","firstName"],["matInput","","formControlName","phone","type","tel"],["matInput","","formControlName","email","type","email"],["formControlName","position"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(t,e){1&t&&(h.Ub(0,"form",0),h.cc("ngSubmit",(function(){return e.save()})),h.Ub(1,"mat-form-field"),h.Ub(2,"mat-label"),h.vc(3,"Last Name"),h.Tb(),h.Pb(4,"input",1),h.Tb(),h.Ub(5,"mat-form-field"),h.Ub(6,"mat-label"),h.vc(7,"First Name"),h.Tb(),h.Pb(8,"input",2),h.Tb(),h.Ub(9,"mat-form-field"),h.Ub(10,"mat-label"),h.vc(11,"Phone"),h.Tb(),h.Pb(12,"input",3),h.Tb(),h.Ub(13,"mat-form-field"),h.Ub(14,"mat-label"),h.vc(15,"Email"),h.Tb(),h.Pb(16,"input",4),h.Tb(),h.Ub(17,"mat-form-field"),h.Ub(18,"mat-label"),h.vc(19,"Position"),h.Tb(),h.Ub(20,"mat-select",5),h.uc(21,F,3,4,"mat-option",6),h.Tb(),h.Tb(),h.Ub(22,"button",7),h.vc(23," Save "),h.Tb(),h.Tb()),2&t&&(h.jc("formGroup",e.form),h.Cb(21),h.jc("ngForOf",e.positions),h.Cb(1),h.jc("disabled",!e.form.valid))},directives:[i.l,i.h,i.d,s.b,s.e,p.a,i.a,i.g,i.c,f.a,r.k,o.b,R.h],pipes:[k],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();function x(t,e){if(1&t&&h.Pb(0,"img",6),2&t){const t=h.ec().$implicit;h.jc("src",t.pictureUrl,h.pc)}}const $=function(t){return["../detail",t]};function E(t,e){if(1&t&&(h.Ub(0,"mat-grid-tile"),h.Ub(1,"a",3),h.Ub(2,"mat-card",4),h.Ub(3,"mat-card-header"),h.uc(4,x,1,1,"img",5),h.Ub(5,"mat-card-title"),h.vc(6),h.Tb(),h.Ub(7,"mat-card-subtitle"),h.vc(8),h.fc(9,"positionToPrint"),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Tb()),2&t){const t=e.$implicit;h.Cb(1),h.jc("routerLink",h.lc(7,$,t.id)),h.Cb(3),h.jc("ngIf",t.pictureUrl),h.Cb(2),h.yc("",t.lastName," ",t.firstName,""),h.Cb(2),h.wc(h.gc(9,5,t.position))}}const V=function(){return["../new"]};let _=(()=>{class t{constructor(t){this.staffService=t}get list$(){return this.staffService.getList()}}return t.\u0275fac=function(e){return new(e||t)(h.Ob(S))},t.\u0275cmp=h.Ib({type:t,selectors:[["app-list"]],decls:6,vars:5,consts:[["mat-icon-button","","aria-label","Example icon-button with a heart icon",3,"routerLink"],["cols","2","gutterSize","1.2rem",1,"list"],[4,"ngFor","ngForOf"],[1,"link",3,"routerLink"],[1,"item"],["mat-card-avatar","",3,"src",4,"ngIf"],["mat-card-avatar","",3,"src"]],template:function(t,e){1&t&&(h.Ub(0,"a",0),h.Ub(1,"mat-icon"),h.vc(2,"person_add"),h.Tb(),h.Tb(),h.Ub(3,"mat-grid-list",1),h.uc(4,E,10,9,"mat-grid-tile",2),h.fc(5,"async"),h.Tb()),2&t&&(h.jc("routerLink",h.kc(4,V)),h.Cb(4),h.jc("ngForOf",h.gc(5,2,e.list$)))},directives:[o.a,u.e,l.a,c.a,r.k,c.c,a.a,a.e,r.l,a.h,a.g,a.c],pipes:[r.b,k],styles:[".list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:100%}"]}),t})();const A=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Ib({type:t,selectors:[["app-staff"]],decls:3,vars:0,consts:[[1,"mat-display-1"]],template:function(t,e){1&t&&(h.Ub(0,"h1",0),h.vc(1,"Staff"),h.Tb(),h.Pb(2,"router-outlet"))},directives:[u.g],styles:[""]}),t})(),children:[{path:"list",component:_},{path:"edit/:uid",component:M},{path:"detail/:uid",component:L},{path:"new",component:M},{path:"",redirectTo:"list",pathMatch:"full"}]}];let q=(()=>{class t{}return t.\u0275mod=h.Mb({type:t}),t.\u0275inj=h.Lb({factory:function(e){return new(e||t)},imports:[[r.c,u.f.forChild(A),c.b,a.f,o.c,s.d,p.b,f.b,i.j,l.b]]}),t})()}}]);