(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kanD:function(t,e,n){"use strict";n.r(e),n.d(e,"StaffModule",(function(){return Q}));var i=n("2kYt"),r=n("nIj0"),a=n("PBFl"),o=n("Meci"),s=n("29Wa"),c=n("kAAd"),b=n("bFHC"),l=n("Cd2c"),u=n("R7+U"),m=n("Y2X+"),p=n("sEIs"),f=n("s2Ay"),d=n("xVbo"),h=n("YtkY"),g=n("TLy2"),v=n("EM62"),C=n("AytR"),V=n("vobO");let W=(()=>{class t{constructor(t){this.http=t,this.baseUrl=C.a.baseUrl}getList(){return this.http.get(`${this.baseUrl}/users`)}getOne(t){return this.http.get(`${this.baseUrl}/users/${t}`)}update(t,e){return this.http.put(`${this.baseUrl}/users/${t}`,e)}create(t){return this.http.post(`${this.baseUrl}/users`,t)}}return t.\u0275fac=function(e){return new(e||t)(v.ac(V.b))},t.\u0275prov=v.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=n("kYBX");let O=(()=>{class t{transform(t){return t===k.b.owner?"Owner":t===k.b.manager?"Manager":t===k.b.employee?"Staff":""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=v.Pb({name:"positionToPrint",type:t,pure:!0}),t})();function y(t,e){if(1&t&&(v.Wb(0,"a",6),v.Wb(1,"mat-icon"),v.Gc(2,"phone"),v.Vb(),v.Gc(3),v.Vb()),2&t){const t=v.ic(2);v.oc("href","tel:"+t.person.phone,v.zc),v.Cb(3),v.Hc(t.person.phone)}}function I(t,e){if(1&t&&(v.Wb(0,"a",7),v.Wb(1,"mat-icon"),v.Gc(2,"email"),v.Vb(),v.Gc(3),v.Vb()),2&t){const t=v.ic(2);v.oc("href","mailto:"+t.person.email,v.zc),v.Cb(3),v.Ic(" ",t.person.email,"")}}const G=function(t){return["../../edit",t]};function N(t,e){if(1&t&&(v.Ub(0),v.Wb(1,"h1",1),v.Gc(2),v.Wb(3,"span",2),v.Gc(4),v.jc(5,"positionToPrint"),v.Vb(),v.Vb(),v.Wb(6,"p"),v.Ec(7,y,4,2,"a",3),v.Ec(8,I,4,2,"a",4),v.Vb(),v.Wb(9,"a",5),v.Wb(10,"mat-icon"),v.Gc(11,"edit"),v.Vb(),v.Gc(12),v.jc(13,"translate"),v.Vb(),v.Tb()),2&t){const t=v.ic();v.Cb(2),v.Jc(" ",null==t.person?null:t.person.lastName," ",null==t.person?null:t.person.firstName," "),v.Cb(2),v.Ic("(",v.kc(5,7,null==t.person?null:t.person.position),")"),v.Cb(3),v.oc("ngIf",null==t.person?null:t.person.phone),v.Cb(1),v.oc("ngIf",null==t.person?null:t.person.email),v.Cb(1),v.oc("routerLink",v.qc(11,G,t.person.id)),v.Cb(3),v.Ic(" ",v.kc(13,9,"misc.edit")," ")}}let S=(()=>{class t{constructor(t,e){this.staffService=t,this.activatedRoute=e}ngOnInit(){this.activatedRoute.params.pipe(Object(d.a)(t=>t.uid),Object(h.a)(t=>t.uid),Object(g.a)(t=>this.staffService.getOne(t))).subscribe(t=>this.person=t,t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(v.Qb(W),v.Qb(p.a))},t.\u0275cmp=v.Kb({type:t,selectors:[["app-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"mat-h1"],[1,"mat-caption"],["mat-flat-button","",3,"href",4,"ngIf"],["mat-flat-button","","target","_blank",3,"href",4,"ngIf"],["mat-flat-button","","color","primary",3,"routerLink"],["mat-flat-button","",3,"href"],["mat-flat-button","","target","_blank",3,"href"]],template:function(t,e){1&t&&v.Ec(0,N,14,13,"ng-container",0),2&t&&v.oc("ngIf",e.person)},directives:[i.m,a.a,p.e,b.a],pipes:[O,f.d],styles:[""]}),t})();var w=n("mFH5");function L(t,e){if(1&t&&(v.Wb(0,"mat-option",8),v.Gc(1),v.jc(2,"positionToPrint"),v.Vb()),2&t){const t=e.$implicit;v.oc("value",t),v.Cb(1),v.Hc(v.kc(2,2,t))}}let j=(()=>{class t{constructor(t,e,n,i){this.staffService=t,this.activatedRoute=e,this.fb=n,this.router=i}ngOnInit(){this.form=this.fb.group({firstName:["",[r.n.required]],lastName:["",[r.n.required]],position:[k.b.employee,[r.n.required]],phone:[null,[r.n.required]],email:[null,[r.n.email]]}),this.activatedRoute.params.pipe(Object(d.a)(t=>t.uid),Object(h.a)(t=>t.uid),Object(g.a)(t=>this.staffService.getOne(t))).subscribe(t=>{this.person=t,this.form.setValue({firstName:t.firstName,lastName:t.lastName,position:t.position,phone:t.phone||null,email:t.email||null})},t=>console.error(t))}get positions(){return[k.b.owner,k.b.manager,k.b.employee]}save(){if(this.form.valid){const t=this.form.value;let e;e=this.person?this.staffService.update(this.person.id,t):this.staffService.create(t),e.subscribe(t=>{this.router.navigate(["/dash/staff/detail",t.id])})}}}return t.\u0275fac=function(e){return new(e||t)(v.Qb(W),v.Qb(p.a),v.Qb(r.b),v.Qb(p.b))},t.\u0275cmp=v.Kb({type:t,selectors:[["app-edit"]],decls:25,vars:6,consts:[[3,"formGroup","ngSubmit"],["matInput","","formControlName","lastName"],["matInput","","formControlName","firstName"],["matInput","","formControlName","phone","type","tel"],["matInput","","formControlName","email","type","email"],["formControlName","position"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(t,e){1&t&&(v.Wb(0,"form",0),v.ec("ngSubmit",(function(){return e.save()})),v.Wb(1,"mat-form-field"),v.Wb(2,"mat-label"),v.Gc(3,"Last Name"),v.Vb(),v.Rb(4,"input",1),v.Vb(),v.Wb(5,"mat-form-field"),v.Wb(6,"mat-label"),v.Gc(7,"First Name"),v.Vb(),v.Rb(8,"input",2),v.Vb(),v.Wb(9,"mat-form-field"),v.Wb(10,"mat-label"),v.Gc(11,"Phone"),v.Vb(),v.Rb(12,"input",3),v.Vb(),v.Wb(13,"mat-form-field"),v.Wb(14,"mat-label"),v.Gc(15,"Email"),v.Vb(),v.Rb(16,"input",4),v.Vb(),v.Wb(17,"mat-form-field"),v.Wb(18,"mat-label"),v.Gc(19,"Position"),v.Vb(),v.Wb(20,"mat-select",5),v.Ec(21,L,3,4,"mat-option",6),v.Vb(),v.Vb(),v.Wb(22,"button",7),v.Gc(23),v.jc(24,"translate"),v.Vb(),v.Vb()),2&t&&(v.oc("formGroup",e.form),v.Cb(21),v.oc("ngForOf",e.positions),v.Cb(1),v.oc("disabled",!e.form.valid),v.Cb(1),v.Ic(" ",v.kc(24,4,"misc.save")," "))},directives:[r.o,r.j,r.d,s.c,s.f,l.b,r.a,r.i,r.c,u.a,i.l,a.b,w.l],pipes:[f.d,O],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();var M=n("HOZh");function P(t,e){if(1&t&&v.Rb(0,"img",6),2&t){const t=v.ic().$implicit;v.oc("src",t.pictureUrl,v.zc)}}const $=function(t){return["../detail",t]};function _(t,e){if(1&t&&(v.Wb(0,"mat-grid-tile"),v.Wb(1,"a",3),v.Wb(2,"mat-card",4),v.Wb(3,"mat-card-header"),v.Ec(4,P,1,1,"img",5),v.Wb(5,"mat-card-title"),v.Gc(6),v.Vb(),v.Wb(7,"mat-card-subtitle"),v.Gc(8),v.jc(9,"positionToPrint"),v.Vb(),v.Vb(),v.Vb(),v.Vb(),v.Vb()),2&t){const t=e.$implicit;v.Cb(1),v.oc("routerLink",v.qc(7,$,t.id)),v.Cb(3),v.oc("ngIf",t.pictureUrl),v.Cb(2),v.Jc("",t.lastName," ",t.firstName,""),v.Cb(2),v.Hc(v.kc(9,5,t.position))}}const R=function(){return["../new"]};let F=(()=>{class t{constructor(t,e){this.staffService=t,this.breakpointObserver=e}get list$(){return this._list$||(this._list$=this.staffService.getList()),this._list$}ngOnInit(){this.breakpointObserver.observe([M.b.XSmall,M.b.Small,M.b.Medium,M.b.Large,M.b.XLarge]).subscribe(t=>{t.matches&&(t.breakpoints[M.b.XSmall]?this.nbColumns=1:t.breakpoints[M.b.Small]?this.nbColumns=2:t.breakpoints[M.b.Medium]?this.nbColumns=3:t.breakpoints[M.b.Large]?this.nbColumns=4:t.breakpoints[M.b.XLarge]&&(this.nbColumns=5))})}}return t.\u0275fac=function(e){return new(e||t)(v.Qb(W),v.Qb(M.a))},t.\u0275cmp=v.Kb({type:t,selectors:[["app-list"]],decls:6,vars:6,consts:[["mat-icon-button","","matTooltip","Add Staff","aria-label","Add Staff","color","primary",3,"routerLink"],["gutterSize","1.2rem",1,"list",3,"cols"],[4,"ngFor","ngForOf"],[1,"link",3,"routerLink"],[1,"item"],["mat-card-avatar","",3,"src",4,"ngIf"],["mat-card-avatar","",3,"src"]],template:function(t,e){1&t&&(v.Wb(0,"a",0),v.Wb(1,"mat-icon"),v.Gc(2,"person_add"),v.Vb(),v.Vb(),v.Wb(3,"mat-grid-list",1),v.Ec(4,_,10,9,"mat-grid-tile",2),v.jc(5,"async"),v.Vb()),2&t&&(v.oc("routerLink",v.pc(5,R)),v.Cb(3),v.oc("cols",e.nbColumns),v.Cb(1),v.oc("ngForOf",v.kc(5,3,e.list$)))},directives:[a.a,p.e,m.a,b.a,c.a,i.l,c.c,o.a,o.c,i.m,o.f,o.e,o.b],pipes:[i.b,O],styles:[".list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{width:100%}"]}),t})();const U=function(){return["/dash/staff"]},E=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=v.Kb({type:t,selectors:[["app-staff"]],decls:3,vars:2,consts:[["translate","",1,"mat-display-1",3,"routerLink"]],template:function(t,e){1&t&&(v.Wb(0,"h1",0),v.Gc(1,"Staff"),v.Vb(),v.Rb(2,"router-outlet")),2&t&&v.oc("routerLink",v.pc(1,U))},directives:[f.a,p.c,p.g],styles:[""]}),t})(),children:[{path:"list",component:F},{path:"edit/:uid",component:j},{path:"detail/:uid",component:S},{path:"new",component:j},{path:"",redirectTo:"list",pathMatch:"full"}]}];let Q=(()=>{class t{}return t.\u0275mod=v.Ob({type:t}),t.\u0275inj=v.Nb({factory:function(e){return new(e||t)},imports:[[i.c,p.f.forChild(E),c.b,o.d,a.c,s.e,l.c,u.b,r.m,b.b,m.b,f.c.forChild()]]}),t})()}}]);