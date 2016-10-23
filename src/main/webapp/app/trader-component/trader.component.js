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
var trader_service_1 = require('app/trader-component/service/trader.service');
var TraderComponent = (function () {
    function TraderComponent(traderService) {
        this.traderService = traderService;
        this.traders = [];
        this.traderResults = [];
        this.searchCity = "";
        this.cities = [];
    }
    TraderComponent.prototype.searchTraders = function (city) {
        this.getTradersByCity(city);
    };
    TraderComponent.prototype.getTradersByCity = function (city) {
        var _this = this;
        this.traderService.getTradersByCity(city)
            .subscribe(function (traders) { return _this.traderResults = traders; }, function (error) { return _this.errorMessage = error; });
    };
    TraderComponent.prototype.getTraders = function () {
        var _this = this;
        this.traderService.getTraders()
            .subscribe(function (traders) {
            _this.traders = traders;
            _this.cities = _this.extractCites(_this.traders);
        }, function (error) { return _this.errorMessage = error; });
    };
    TraderComponent.prototype.ngOnInit = function () {
        this.getTraders();
    };
    TraderComponent.prototype.extractCites = function (traders) {
        var results = [];
        for (var _i = 0, traders_1 = traders; _i < traders_1.length; _i++) {
            var trader = traders_1[_i];
            results.push(trader.city);
        }
        return this.removeDuplicates(results);
    };
    TraderComponent.prototype.removeDuplicates = function (arr) {
        var out = [], obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = 0;
        }
        for (var i in obj) {
            out.push(i);
        }
        return out;
    };
    TraderComponent = __decorate([
        core_1.Component({
            selector: 'my-trader',
            templateUrl: 'app/trader-component/trader.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof trader_service_1.TraderService !== 'undefined' && trader_service_1.TraderService) === 'function' && _a) || Object])
    ], TraderComponent);
    return TraderComponent;
    var _a;
}());
exports.TraderComponent = TraderComponent;
//# sourceMappingURL=trader.component.js.map