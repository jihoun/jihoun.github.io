(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7wo0":function(t,e,i){"use strict";i.r(e),i.d(e,"SettingsModule",(function(){return G}));var n=i("2kYt"),a=i("bFHC"),s=i("nKqi"),o=i("sg/T"),r=i("TKFd"),c=i("Sv/w"),l=i("EM62"),h=i("mFH5"),d=i("5lCh"),b=i("ZTXN"),m=(i("bwdy"),i("g6G6")),u=i("KTx3"),p=i("ROBh"),f=i("8lHc"),g=(i("f7+R"),i("jIqt")),_=(i("Ohay"),i("kuMc")),v=i("5XID"),k=i("cZZj"),x=i("fAiE"),y=i("E5oP"),C=i("qvOF");const w=["*"],O=["tabListContainer"],A=["tabList"],I=["nextPaginator"],P=["previousPaginator"],T=["mat-tab-nav-bar",""],D=new l.r("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let R=(()=>{class t{constructor(t,e,i,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=n}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.l),l.Ob(l.A),l.Ob(D),l.Ob(d.a,8))},t.\u0275dir=l.Jb({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&l.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const L=Object(k.f)({passive:!0});let S=(()=>{class t{constructor(t,e,i,n,a,s,o){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=n,this._ngZone=a,this._platform=s,this._animationMode=o,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new b.a,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new b.a,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new l.o,this.indexFocused=new l.o,a.runOutsideAngular(()=>{Object(u.a)(t.nativeElement,"mouseleave").pipe(Object(_.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(v.f)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(u.a)(this._previousPaginator.nativeElement,"touchstart",L).pipe(Object(_.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(u.a)(this._nextPaginator.nativeElement,"touchstart",L).pipe(Object(_.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(p.a)(null),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new o.g(this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap(),this._keyManager.updateActiveItem(0),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(m.a)(t,e,this._items.changes).pipe(Object(_.a)(this._destroyed)).subscribe(()=>{i(),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(_.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(x.q)(t))switch(t.keyCode){case x.f:this._keyManager.setFirstItemActive(),t.preventDefault();break;case x.c:this._keyManager.setLastItemActive(),t.preventDefault();break;case x.d:case x.l:this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t);break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e=this._platform,i="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,e&&(e.TRIDENT||e.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:a}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=n,o=s+a):(o=this._tabList.nativeElement.offsetWidth-n,s=o-a);const r=this.scrollDistance,c=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>c&&(this.scrollDistance+=o-c+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(f.a)(650,100).pipe(Object(_.a)(Object(m.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.l),l.Ob(l.h),l.Ob(C.d),l.Ob(y.b,8),l.Ob(l.A),l.Ob(k.a),l.Ob(d.a,8))},t.\u0275dir=l.Jb({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),E=(()=>{class t extends S{constructor(t,e,i,n,a,s,o){super(t,n,a,e,i,s,o),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement.classList;e.remove(`mat-background-${this.backgroundColor}`),t&&e.add(`mat-background-${t}`),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(v.c)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe(Object(g.a)(null),Object(_.a)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(t){if(!this._items)return;const e=this._items.toArray();for(let i=0;i<e.length;i++)if(e[i].active)return this.selectedIndex=i,void this._changeDetectorRef.markForCheck();this.selectedIndex=-1,this._inkBar.hide()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.l),l.Ob(y.b,8),l.Ob(l.A),l.Ob(l.h),l.Ob(C.d),l.Ob(k.a,8),l.Ob(d.a,8))},t.\u0275dir=l.Jb({type:t,inputs:{color:"color",backgroundColor:"backgroundColor",disableRipple:"disableRipple"},features:[l.zb]}),t})(),M=(()=>{class t extends E{constructor(t,e,i,n,a,s,o){super(t,e,i,n,a,s,o)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(l.l),l.Ob(y.b,8),l.Ob(l.A),l.Ob(l.h),l.Ob(C.d),l.Ob(k.a,8),l.Ob(d.a,8))},t.\u0275cmp=l.Ib({type:t,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,e,i){var n;1&t&&l.Hb(i,U,!0),2&t&&l.qc(n=l.dc())&&(e._items=n)},viewQuery:function(t,e){var i;1&t&&(l.xc(R,!0),l.xc(O,!0),l.xc(A,!0),l.Fc(I,!0),l.Fc(P,!0)),2&t&&(l.qc(i=l.dc())&&(e._inkBar=i.first),l.qc(i=l.dc())&&(e._tabListContainer=i.first),l.qc(i=l.dc())&&(e._tabList=i.first),l.qc(i=l.dc())&&(e._nextPaginator=i.first),l.qc(i=l.dc())&&(e._previousPaginator=i.first))},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:10,hostBindings:function(t,e){2&t&&l.Fb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())("mat-primary","warn"!==e.color&&"accent"!==e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color)},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[l.zb],attrs:T,ngContentSelectors:w,decls:13,vars:6,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(l.lc(),l.Ub(0,"div",0,1),l.cc("click",(function(){return e._handlePaginatorClick("before")}))("mousedown",(function(t){return e._handlePaginatorPress("before",t)}))("touchend",(function(){return e._stopInterval()})),l.Pb(2,"div",2),l.Tb(),l.Ub(3,"div",3,4),l.cc("keydown",(function(t){return e._handleKeydown(t)})),l.Ub(5,"div",5,6),l.cc("cdkObserveContent",(function(){return e._onContentChanges()})),l.Ub(7,"div",7),l.kc(8),l.Tb(),l.Pb(9,"mat-ink-bar"),l.Tb(),l.Tb(),l.Ub(10,"div",8,9),l.cc("mousedown",(function(t){return e._handlePaginatorPress("after",t)}))("click",(function(){return e._handlePaginatorClick("after")}))("touchend",(function(){return e._stopInterval()})),l.Pb(12,"div",2),l.Tb()),2&t&&(l.Fb("mat-tab-header-pagination-disabled",e._disableScrollBefore),l.mc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),l.Cb(10),l.Fb("mat-tab-header-pagination-disabled",e._disableScrollAfter),l.mc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[h.q,r.a,R],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n'],encapsulation:2}),t})();class F{}const j=Object(h.A)(Object(h.w)(Object(h.x)(F)));let B=(()=>{class t extends j{constructor(t,e,i,n,a,s){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=a,this._isActive=!1,this.rippleConfig=i||{},this.tabIndex=parseInt(n)||0,"NoopAnimations"===s&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),a.monitor(e)}get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink(this.elementRef))}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(E),l.Ob(l.l),l.Ob(h.f,8),l.Zb("tabindex"),l.Ob(o.h),l.Ob(d.a,8))},t.\u0275dir=l.Jb({type:t,inputs:{active:"active"},features:[l.zb]}),t})(),U=(()=>{class t extends B{constructor(t,e,i,n,a,s,o,r){super(t,e,a,s,o,r),this._tabLinkRipple=new h.s(this,i,e,n),this._tabLinkRipple.setupTriggerEvents(e.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(M),l.Ob(l.l),l.Ob(l.A),l.Ob(k.a),l.Ob(h.f,8),l.Zb("tabindex"),l.Ob(o.h),l.Ob(d.a,8))},t.\u0275dir=l.Jb({type:t,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:7,hostBindings:function(t,e){2&t&&(l.Db("aria-current",e.active?"page":null)("aria-disabled",e.disabled)("tabIndex",e.tabIndex),l.Fb("mat-tab-disabled",e.disabled)("mat-tab-label-active",e.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[l.zb]}),t})(),z=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[n.c,h.g,c.g,h.r,r.c,o.a],h.g]}),t})();var q=i("sEIs");let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ib({type:t,selectors:[["app-misc"]],decls:3,vars:0,consts:[[1,"coming-soon"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"span"),l.Ac(2,"\u{1f3d7}Coming soon"),l.Tb(),l.Tb())},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.coming-soon[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:4rem;font-weight:lighter}"]}),t})();const H=function(){return["vaccines"]},V=function(){return["misc"]};let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ib({type:t,selectors:[["app-settings"]],decls:10,vars:6,consts:[["translate","",1,"mat-display-1"],["mat-tab-nav-bar","","color","accent"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"],["rla2","routerLinkActive"]],template:function(t,e){if(1&t&&(l.Ub(0,"h1",0),l.Ac(1,"Settings"),l.Tb(),l.Ub(2,"nav",1),l.Ub(3,"a",2,3),l.Ac(5," Vaccines "),l.Tb(),l.Ub(6,"a",2,4),l.Ac(8," Misc "),l.Tb(),l.Tb(),l.Pb(9,"router-outlet")),2&t){const t=l.rc(4),e=l.rc(7);l.Cb(3),l.mc("routerLink",l.nc(4,H))("active",t.isActive),l.Cb(3),l.mc("routerLink",l.nc(5,V))("active",e.isActive)}},directives:[M,q.e,U,q.d,q.g],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}"]}),t})();var Z=i("zmEM");function J(t,e){if(1&t&&(l.Ub(0,"mat-list-item"),l.Ub(1,"div",2),l.Ac(2),l.Tb(),l.Ub(3,"div",2),l.Ac(4),l.Tb(),l.Tb()),2&t){const t=e.$implicit;l.Cb(2),l.Bc(t.time),l.Cb(2),l.Bc(t.name)}}function K(t,e){if(1&t&&(l.Ub(0,"mat-list-item"),l.Ub(1,"div",2),l.Ac(2),l.Tb(),l.Ub(3,"div",2),l.Ac(4),l.Tb(),l.Tb()),2&t){const t=e.$implicit;l.Cb(2),l.Bc(t.time),l.Cb(2),l.Bc(t.name)}}function $(t,e){if(1&t&&(l.Ub(0,"mat-list-item"),l.Ub(1,"div",2),l.Ac(2),l.Tb(),l.Ub(3,"div",2),l.Ac(4),l.Tb(),l.Tb()),2&t){const t=e.$implicit;l.Cb(2),l.Bc(t.time),l.Cb(2),l.Bc(t.name)}}const X=[{path:"",component:N,children:[{path:"vaccines",component:(()=>{class t{constructor(){this.pregnantVaccines=[{time:"\ubd84\ub9cc 6\uc8fc\uc804",name:"\uad6c\uc81c\uc5ed \ubc31\uc2e0"},{time:"\ubd84\ub9cc 5\uc8fc\uc804",name:"RPH"},{time:"\ubd84\ub9cc 4\uc8fc\uc804",name:"ED"},{time:"\ubd84\ub9cc 3\uc8fc\uc804",name:"RPH"},{time:"\ubd84\ub9cc 2\uc8fc\uc804",name:"ED"}],this.pendingInsemination=[{time:"\uc785\uc2dd",name:"PRRS 1\ucc28 \uc811\uc885"},{time:"0.5\uc8fc\ucc28",name:"\ud638\ud761\uae30 \ubc31\uc2e0 1\ucc28"},{time:"1\uc8fc\ucc28",name:"\uad6c\ucda9"},{time:"2\uc8fc\ucc28",name:"\uc368\ucf54\ub9c8\uc774\ucf54"},{time:"3\uc8fc\ucc28",name:"PRRS 2\ucc28"},{time:"4\uc8fc\ucc28",name:"\ud30c\ubcf4 1\ucc28"},{time:"5\uc8fc\ucc28",name:"\uad6c\uc81c\uc5ed"},{time:"6\uc8fc\ucc28",name:"\ub2e8\uc5f4\ubc31\uc2e0"},{time:"7\uc8fc\ucc28",name:"\ud30c\ubcf4 2\ucc28"}],this.seasonalVaccines=[{time:"4~5\uc6d4",name:"\uc77c\ubcf8\ub1cc\uc5fc"},{time:"3\uc6d4, 10\uc6d4",name:"\uad6c\ucda9"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Ib({type:t,selectors:[["app-vaccines"]],decls:12,vars:3,consts:[["mat-subheader",""],[4,"ngFor","ngForOf"],["mat-line",""]],template:function(t,e){1&t&&(l.Ub(0,"mat-list"),l.Ub(1,"div",0),l.Ac(2,"\ubaa8\ub3c8 \ubc31\uc2e0"),l.Tb(),l.zc(3,J,5,2,"mat-list-item",1),l.Pb(4,"mat-divider"),l.Ub(5,"div",0),l.Ac(6,"\ud6c4\ubcf4\ub3c8 \ubc31\uc2e0"),l.Tb(),l.zc(7,K,5,2,"mat-list-item",1),l.Pb(8,"mat-divider"),l.Ub(9,"div",0),l.Ac(10,"\uacc4\uc808\ubc31\uc2e0"),l.Tb(),l.zc(11,$,5,2,"mat-list-item",1),l.Tb()),2&t&&(l.Cb(3),l.mc("ngForOf",e.pregnantVaccines),l.Cb(4),l.mc("ngForOf",e.pendingInsemination),l.Cb(4),l.mc("ngForOf",e.seasonalVaccines))},directives:[s.a,s.e,n.l,Z.a,s.c,h.h],styles:[""]}),t})()},{path:"misc",component:W},{path:"",pathMatch:"full",redirectTo:"vaccines"}]}];let G=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[n.c,q.f.forChild(X),z,s.d,a.b]]}),t})()}}]);