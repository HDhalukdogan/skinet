"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[474],{7474:(T,c,s)=>{s.r(c),s.d(c,{AccountModule:()=>S});var u=s(9808),a=s(5020),o=s(2382),t=s(4893),p=s(9479),g=s(4015);let d=(()=>{class e{constructor(n,r,l){this.accountService=n,this.router=r,this.activatedRoute=l}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("bob@test.com",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("Pa$$w0rd",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.B),t.Y36(a.F0),t.Y36(a.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"button",7),t._uU(9,"Sign in"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("disabled",r.loginForm.invalid))},directives:[o._Y,o.JL,o.sg,g.t,o.JJ,o.u],styles:[""]}),e})();var f=s(8306),h=s(4986),v=s(3532);var x=s(3900),C=s(9646),F=s(4004);function J(e,i){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n," ")}}function w(e,i){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,J,2,1,"li",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const N=[{path:"login",component:d},{path:"register",component:(()=>{class e{constructor(n,r,l){this.fb=n,this.accountService=r,this.router=l}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>function y(e=0,i,n=h.P){let r=-1;return null!=i&&((0,v.K)(i)?n=i:r=i),new f.y(l=>{let m=function b(e){return e instanceof Date&&!isNaN(e)}(e)?+e-n.now():e;m<0&&(m=0);let Z=0;return n.schedule(function(){l.closed||(l.next(Z++),0<=r?this.schedule(void 0,r):l.complete())},m)})}(500).pipe((0,x.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,F.U)(r=>r?{emailExists:!0}:null)):(0,C.of)(null)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(p.B),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Register"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),t.YNc(9,w,2,1,"ul",8),t.TgZ(10,"button",9),t._uU(11,"Register"),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("formGroup",r.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email Address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",r.errors),t.xp6(1),t.Q6J("disabled",r.registerForm.invalid))},directives:[o._Y,o.JL,o.sg,g.t,o.JJ,o.u,u.O5,u.sg],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(N)],a.Bz]}),e})();var R=s(4466);let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,A,R.m]]}),e})()}}]);