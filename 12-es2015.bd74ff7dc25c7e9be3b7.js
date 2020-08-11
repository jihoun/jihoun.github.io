(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{kanD:function(t,e,n){"use strict";n.r(e),n.d(e,"StaffModule",(function(){return z}));var r=n("2kYt"),o=n("nIj0"),s=n("PBFl"),a=n("Meci"),c=n("OZ4H"),i=n("29Wa"),l=n("kAAd"),b=n("bFHC"),u=n("Cd2c"),m=n("R7+U"),p=n("Y2X+"),f=n("sEIs"),d=n("s2Ay"),h=n("xVbo"),g=n("YtkY"),C=n("EM62"),v=n("AytR"),k=n("vobO");let V=(()=>{class t{constructor(t){this.http=t,this.baseUrl=v.a.baseUrl}getList(){return this.http.get(`${this.baseUrl}/users`)}getOne(t){return this.http.get(`${this.baseUrl}/users/${t}`)}update(t,e){return this.http.put(`${this.baseUrl}/users/${t}`,e)}create(t){return this.http.post(`${this.baseUrl}/users`,t)}changePassword(t,e){return this.http.put(`${this.baseUrl}/users/${t}/password`,{password:e})}delete(t){return this.http.delete(`${this.baseUrl}/users/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(C.ac(k.b))},t.\u0275prov=C.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function W(t,e){1&t&&(C.Wb(0,"mat-error"),C.Gc(1),C.jc(2,"translate"),C.Vb()),2&t&&(C.Cb(1),C.Hc(C.kc(2,1,"error.required")))}function O(t,e){if(1&t&&(C.Wb(0,"mat-error"),C.Gc(1),C.jc(2,"translate"),C.Vb()),2&t){const t=C.ic();C.Cb(1),C.Hc(C.lc(2,1,"error.minlength",null==t.form.controls.password.errors?null:t.form.controls.password.errors.minlength))}}const w=function(t){return["../../detail",t]};let y=(()=>{class t{constructor(t,e,n,r){this.service=e,this.activatedRoute=n,this.router=r,this.form=t.group({password:[null,[o.m.required,o.m.minLength(2)]]})}ngOnInit(){this.activatedRoute.params.pipe(Object(h.a)(t=>t.uid),Object(g.a)(t=>t.uid)).subscribe(t=>this.userId=t)}submit(){this.form.valid&&this.userId&&this.service.changePassword(this.userId,this.form.value.password).subscribe(()=>this.router.navigate(["/dash/staff/detail",this.userId]))}}return t.\u0275fac=function(e){return new(e||t)(C.Qb(o.b),C.Qb(V),C.Qb(f.a),C.Qb(f.b))},t.\u0275cmp=C.Kb({type:t,selectors:[["app-change-password"]],decls:15,vars:16,consts:[[3,"formGroup","ngSubmit"],["matInput","","type","password","formControlName","password"],[4,"ngIf"],[1,"buttons"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","color","primary",3,"routerLink"]],template:function(t,e){1&t&&(C.Wb(0,"form",0),C.ec("ngSubmit",(function(){return e.submit()})),C.Wb(1,"mat-form-field"),C.Wb(2,"mat-label"),C.Gc(3),C.jc(4,"translate"),C.Vb(),C.Rb(5,"input",1),C.Ec(6,W,3,3,"mat-error",2),C.Ec(7,O,3,4,"mat-error",2),C.Vb(),C.Wb(8,"div",3),C.Wb(9,"button",4),C.Gc(10),C.jc(11,"translate"),C.Vb(),C.Wb(12,"a",5),C.Gc(13),C.jc(14,"translate"),C.Vb(),C.Vb(),C.Vb()),2&t&&(C.oc("formGroup",e.form),C.Cb(3),C.Hc(C.kc(4,8,"user.newPassword")),C.Cb(3),C.oc("ngIf",null==e.form.controls.password.errors?null:e.form.controls.password.errors.required),C.Cb(1),C.oc("ngIf",null==e.form.controls.password.errors?null:e.form.controls.password.errors.minlength),C.Cb(2),C.oc("disabled",!e.form.valid),C.Cb(1),C.Ic(" ",C.kc(11,10,"misc.save")," "),C.Cb(2),C.oc("routerLink",C.qc(14,w,e.userId)),C.Cb(1),C.Ic(" ",C.kc(14,12,"misc.cancel")," "))},directives:[o.n,o.i,o.d,i.c,i.f,u.b,o.a,o.h,o.c,r.m,s.b,s.a,f.e,i.b],pipes:[d.d],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]}),t})();var I=n("TLy2");let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["ng-component"]],decls:10,vars:10,consts:[["translate",""],["mat-flat-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"],["mat-button","","mat-dialog-close",""]],template:function(t,e){1&t&&(C.Wb(0,"mat-dialog-content",0),C.Gc(1),C.jc(2,"translate"),C.Vb(),C.Wb(3,"mat-dialog-actions"),C.Wb(4,"button",1),C.Gc(5),C.jc(6,"translate"),C.Vb(),C.Wb(7,"button",2),C.Gc(8),C.jc(9,"translate"),C.Vb(),C.Vb()),2&t&&(C.Cb(1),C.Hc(C.kc(2,4,"user.confirmDeletion")),C.Cb(3),C.oc("mat-dialog-close",!0),C.Cb(1),C.Ic(" ",C.kc(6,6,"misc.save")," "),C.Cb(3),C.Hc(C.kc(9,8,"misc.cancel")))},directives:[c.e,d.a,c.c,s.b,c.d],pipes:[d.d],encapsulation:2}),t})();var j=n("kYBX");let P=(()=>{class t{transform(t){return t===j.b.owner?"Owner":t===j.b.manager?"Manager":t===j.b.employee?"Staff":""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=C.Pb({name:"positionToPrint",type:t,pure:!0}),t})();function M(t,e){if(1&t&&(C.Wb(0,"a",8),C.Wb(1,"mat-icon"),C.Gc(2,"phone"),C.Vb(),C.Gc(3),C.Vb()),2&t){const t=C.ic(2);C.oc("href","tel:"+t.person.phone,C.zc),C.Cb(3),C.Hc(t.person.phone)}}function _(t,e){if(1&t&&(C.Wb(0,"a",9),C.Wb(1,"mat-icon"),C.Gc(2,"email"),C.Vb(),C.Gc(3),C.Vb()),2&t){const t=C.ic(2);C.oc("href","mailto:"+t.person.email,C.zc),C.Cb(3),C.Ic(" ",t.person.email,"")}}const S=function(t){return["../../edit",t]},L=function(t){return["../../change-password",t]};function N(t,e){if(1&t){const t=C.Xb();C.Ub(0),C.Wb(1,"h1",1),C.Gc(2),C.Wb(3,"span",2),C.Gc(4),C.jc(5,"positionToPrint"),C.Vb(),C.Vb(),C.Wb(6,"p"),C.Ec(7,M,4,2,"a",3),C.Ec(8,_,4,2,"a",4),C.Vb(),C.Wb(9,"div",5),C.Wb(10,"a",6),C.Wb(11,"mat-icon"),C.Gc(12,"edit"),C.Vb(),C.Gc(13),C.jc(14,"translate"),C.Vb(),C.Wb(15,"a",6),C.Wb(16,"mat-icon"),C.Gc(17,"lock"),C.Vb(),C.Gc(18),C.jc(19,"translate"),C.Vb(),C.Wb(20,"button",7),C.ec("click",(function(){return C.xc(t),C.ic().deleteUser()})),C.Wb(21,"mat-icon"),C.Gc(22,"delete"),C.Vb(),C.Gc(23),C.jc(24,"translate"),C.Vb(),C.Vb(),C.Tb()}if(2&t){const t=C.ic();C.Cb(2),C.Jc(" ",null==t.person?null:t.person.lastName," ",null==t.person?null:t.person.firstName," "),C.Cb(2),C.Ic("(",C.kc(5,10,null==t.person?null:t.person.position),")"),C.Cb(3),C.oc("ngIf",null==t.person?null:t.person.phone),C.Cb(1),C.oc("ngIf",null==t.person?null:t.person.email),C.Cb(2),C.oc("routerLink",C.qc(18,S,t.person.id)),C.Cb(3),C.Ic(" ",C.kc(14,12,"misc.edit")," "),C.Cb(2),C.oc("routerLink",C.qc(20,L,t.person.id)),C.Cb(3),C.Ic(" ",C.kc(19,14,"user.changePassword")," "),C.Cb(5),C.Ic(" ",C.kc(24,16,"user.delete")," ")}}let $=(()=>{class t{constructor(t,e,n,r){this.staffService=t,this.activatedRoute=e,this.router=n,this.dialog=r}ngOnInit(){this.activatedRoute.params.pipe(Object(h.a)(t=>t.uid),Object(g.a)(t=>t.uid),Object(I.a)(t=>this.staffService.getOne(t))).subscribe(t=>this.person=t,t=>console.error(t))}deleteUser(){this.person&&this.dialog.open(G).afterClosed().pipe(Object(h.a)(t=>!0===t)).subscribe(()=>{this.person&&this.staffService.delete(this.person.id).subscribe(()=>this.router.navigate(["/dash/staff"]))})}}return t.\u0275fac=function(e){return new(e||t)(C.Qb(V),C.Qb(f.a),C.Qb(f.b),C.Qb(c.b))},t.\u0275cmp=C.Kb({type:t,selectors:[["app-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"mat-h1"],[1,"mat-caption"],["mat-flat-button","",3,"href",4,"ngIf"],["mat-flat-button","","target","_blank",3,"href",4,"ngIf"],[1,"buttons"],["mat-flat-button","","color","primary",3,"routerLink"],["mat-flat-button","","color","warn",3,"click"],["mat-flat-button","",3,"href"],["mat-flat-button","","target","_blank",3,"href"]],template:function(t,e){1&t&&C.Ec(0,N,25,22,"ng-container",0),2&t&&C.oc("ngIf",e.person)},directives:[r.m,s.a,f.e,b.a,s.b],pipes:[P,d.d],styles:[".buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:.8rem}"]}),t})();var H=n("mFH5");function x(t,e){if(1&t&&(C.Wb(0,"mat-option",10),C.Gc(1),C.jc(2,"positionToPrint"),C.Vb()),2&t){const t=e.$implicit;C.oc("value",t),C.Cb(1),C.Hc(C.kc(2,2,t))}}const R=function(t){return["../../detail",t]},Q=function(){return["/dash/staff/list"]};let U=(()=>{class t{constructor(t,e,n,r){this.staffService=t,this.activatedRoute=e,this.fb=n,this.router=r}ngOnInit(){this.form=this.fb.group({firstName:["",[o.m.required]],lastName:["",[o.m.required]],position:[j.b.employee,[o.m.required]],phone:[null,[o.m.required]],email:[null,[o.m.email]]}),this.activatedRoute.params.pipe(Object(h.a)(t=>t.uid),Object(g.a)(t=>t.uid),Object(I.a)(t=>this.staffService.getOne(t))).subscribe(t=>{this.person=t,this.form.setValue({firstName:t.firstName,lastName:t.lastName,position:t.position,phone:t.phone||null,email:t.email||null})},t=>console.error(t))}get positions(){return[j.b.owner,j.b.manager,j.b.employee]}save(){if(this.form.valid){const t=this.form.value;let e;e=this.person?this.staffService.update(this.person.id,t):this.staffService.create(t),e.subscribe(t=>{this.router.navigate(["/dash/staff/detail",t.id])})}}}return t.\u0275fac=function(e){return new(e||t)(C.Qb(V),C.Qb(f.a),C.Qb(o.b),C.Qb(f.b))},t.\u0275cmp=C.Kb({type:t,selectors:[["app-edit"]],decls:34,vars:28,consts:[[3,"formGroup","ngSubmit"],["matInput","","formControlName","lastName"],["matInput","","formControlName","firstName"],["matInput","","formControlName","phone","type","tel"],["matInput","","formControlName","email","type","email"],["formControlName","position"],[3,"value",4,"ngFor","ngForOf"],[1,"buttons"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","color","primary",3,"routerLink"],[3,"value"]],template:function(t,e){1&t&&(C.Wb(0,"form",0),C.ec("ngSubmit",(function(){return e.save()})),C.Wb(1,"mat-form-field"),C.Wb(2,"mat-label"),C.Gc(3),C.jc(4,"translate"),C.Vb(),C.Rb(5,"input",1),C.Vb(),C.Wb(6,"mat-form-field"),C.Wb(7,"mat-label"),C.Gc(8),C.jc(9,"translate"),C.Vb(),C.Rb(10,"input",2),C.Vb(),C.Wb(11,"mat-form-field"),C.Wb(12,"mat-label"),C.Gc(13),C.jc(14,"translate"),C.Vb(),C.Rb(15,"input",3),C.Vb(),C.Wb(16,"mat-form-field"),C.Wb(17,"mat-label"),C.Gc(18),C.jc(19,"translate"),C.Vb(),C.Rb(20,"input",4),C.Vb(),C.Wb(21,"mat-form-field"),C.Wb(22,"mat-label"),C.Gc(23),C.jc(24,"translate"),C.Vb(),C.Wb(25,"mat-select",5),C.Ec(26,x,3,4,"mat-option",6),C.Vb(),C.Vb(),C.Wb(27,"div",7),C.Wb(28,"button",8),C.Gc(29),C.jc(30,"translate"),C.Vb(),C.Wb(31,"a",9),C.Gc(32),C.jc(33,"translate"),C.Vb(),C.Vb(),C.Vb()),2&t&&(C.oc("formGroup",e.form),C.Cb(3),C.Hc(C.kc(4,11,"user.lastName")),C.Cb(5),C.Hc(C.kc(9,13,"user.firstName")),C.Cb(5),C.Hc(C.kc(14,15,"user.phone")),C.Cb(5),C.Hc(C.kc(19,17,"user.email")),C.Cb(5),C.Hc(C.kc(24,19,"user.position")),C.Cb(3),C.oc("ngForOf",e.positions),C.Cb(2),C.oc("disabled",!e.form.valid),C.Cb(1),C.Ic(" ",C.kc(30,21,"misc.save")," "),C.Cb(2),C.oc("routerLink",null!=e.person&&e.person.id?C.qc(25,R,null==e.person?null:e.person.id):C.pc(27,Q)),C.Cb(1),C.Ic(" ",C.kc(33,23,"misc.cancel")," "))},directives:[o.n,o.i,o.d,i.c,i.f,u.b,o.a,o.h,o.c,m.a,r.l,s.b,s.a,f.e,H.l],pipes:[d.d,P],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column}form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]}),t})();var q=n("HOZh");function E(t,e){if(1&t&&C.Rb(0,"img",6),2&t){const t=C.ic().$implicit;C.oc("src",t.pictureUrl,C.zc)}}const F=function(t){return["../detail",t]};function T(t,e){if(1&t&&(C.Wb(0,"mat-grid-tile"),C.Wb(1,"a",3),C.Wb(2,"mat-card",4),C.Wb(3,"mat-card-header"),C.Ec(4,E,1,1,"img",5),C.Wb(5,"mat-card-title"),C.Gc(6),C.Vb(),C.Wb(7,"mat-card-subtitle"),C.Gc(8),C.jc(9,"positionToPrint"),C.Vb(),C.Vb(),C.Vb(),C.Vb(),C.Vb()),2&t){const t=e.$implicit;C.Cb(1),C.oc("routerLink",C.qc(7,F,t.id)),C.Cb(3),C.oc("ngIf",t.pictureUrl),C.Cb(2),C.Jc("",t.lastName," ",t.firstName,""),C.Cb(2),C.Hc(C.kc(9,5,t.position))}}const X=function(){return["../new"]};let A=(()=>{class t{constructor(t,e){this.staffService=t,this.breakpointObserver=e}get list$(){return this._list$||(this._list$=this.staffService.getList()),this._list$}ngOnInit(){this.breakpointObserver.observe([q.b.XSmall,q.b.Small,q.b.Medium,q.b.Large,q.b.XLarge]).subscribe(t=>{t.matches&&(t.breakpoints[q.b.XSmall]?this.nbColumns=1:t.breakpoints[q.b.Small]?this.nbColumns=2:t.breakpoints[q.b.Medium]?this.nbColumns=3:t.breakpoints[q.b.Large]?this.nbColumns=4:t.breakpoints[q.b.XLarge]&&(this.nbColumns=5))})}}return t.\u0275fac=function(e){return new(e||t)(C.Qb(V),C.Qb(q.a))},t.\u0275cmp=C.Kb({type:t,selectors:[["app-list"]],decls:6,vars:6,consts:[["mat-icon-button","","matTooltip","Add Staff","aria-label","Add Staff","color","primary",3,"routerLink"],["gutterSize","1.2rem",1,"list",3,"cols"],[4,"ngFor","ngForOf"],[1,"link",3,"routerLink"],[1,"item"],["mat-card-avatar","",3,"src",4,"ngIf"],["mat-card-avatar","",3,"src"]],template:function(t,e){1&t&&(C.Wb(0,"a",0),C.Wb(1,"mat-icon"),C.Gc(2,"person_add"),C.Vb(),C.Vb(),C.Wb(3,"mat-grid-list",1),C.Ec(4,T,10,9,"mat-grid-tile",2),C.jc(5,"async"),C.Vb()),2&t&&(C.oc("routerLink",C.pc(5,X)),C.Cb(3),C.oc("cols",e.nbColumns),C.Cb(1),C.oc("ngForOf",C.kc(5,3,e.list$)))},directives:[s.a,f.e,p.a,b.a,l.a,r.l,l.c,a.a,a.c,r.m,a.f,a.e,a.b],pipes:[r.b,P],styles:[".list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{width:100%}"]}),t})();const K=function(){return["/dash/staff"]},Y=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["app-staff"]],decls:3,vars:2,consts:[["translate","",1,"mat-display-1",3,"routerLink"]],template:function(t,e){1&t&&(C.Wb(0,"h1",0),C.Gc(1,"Staff"),C.Vb(),C.Rb(2,"router-outlet")),2&t&&C.oc("routerLink",C.pc(1,K))},directives:[d.a,f.c,f.g],styles:[""]}),t})(),children:[{path:"list",component:A},{path:"edit/:uid",component:U},{path:"detail/:uid",component:$},{path:"new",component:U},{path:"change-password/:uid",component:y},{path:"",redirectTo:"list",pathMatch:"full"}]}];let z=(()=>{class t{}return t.\u0275mod=C.Ob({type:t}),t.\u0275inj=C.Nb({factory:function(e){return new(e||t)},imports:[[r.c,f.f.forChild(Y),l.b,a.d,s.c,i.e,u.c,m.b,o.l,b.b,p.b,c.f,d.c.forChild()]]}),t})()}}]);