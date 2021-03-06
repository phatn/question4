"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t\t<h1>{{title}}</h1>\n\t   <nav class=\"navbar navbar-default\">\n\t\t  <div class=\"container-fluid\">\n\t\t    <div class=\"navbar-header\">\n\t\t      <a class=\"navbar-brand\" href=\"#\">Home</a>\n\t\t    </div>\n\t\t    <ul class=\"nav navbar-nav\">\n\t\t      <li><a routerLink=\"/traders\">Traders</a></li>\n\t\t      <li><a routerLink=\"/transactions\">Transactions</a></li> \n\t\t    </ul>\n\t\t  </div>\n\t\t</nav>\n\t   <router-outlet></router-outlet>\n  \t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map