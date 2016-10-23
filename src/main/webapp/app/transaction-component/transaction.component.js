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
var transaction_service_1 = require('app/transaction-component/service/transaction.service');
var trader_service_1 = require('app/trader-component/service/trader.service');
var TransactionComponent = (function () {
    function TransactionComponent(transactionService, traderService) {
        this.transactionService = transactionService;
        this.traderService = traderService;
        this.transactions = [];
        this.years = [];
        this.cities = [];
        this.traders = [];
        this.transactionResults = [];
        this.averageValue = null;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionComponent.prototype.getByHighestValue = function () {
        var _this = this;
        this.transactionResults = [];
        this.transactionService.getByHighestValue()
            .subscribe(function (transactionResults) {
            _this.transactionResults = transactionResults;
        }, function (error) { return _this.errorMessage = error; });
    };
    TransactionComponent.prototype.getByYear = function (year) {
        var _this = this;
        this.transactionResults = [];
        this.transactionService.getByYear(year)
            .subscribe(function (transactionResults) {
            _this.transactionResults = transactionResults;
        }, function (error) { return _this.errorMessage = error; });
    };
    TransactionComponent.prototype.getAverageByCity = function (city) {
        var _this = this;
        this.transactionService.getAverageByCity(city)
            .subscribe(function (averageValue) {
            _this.averageValue = averageValue;
        }, function (error) { return _this.errorMessage = error; });
    };
    TransactionComponent.prototype.getTraders = function () {
        var _this = this;
        this.traderService.getTraders()
            .subscribe(function (traders) {
            _this.traders = traders;
            _this.cities = _this.extractCites(_this.traders);
        }, function (error) { return _this.errorMessage = error; });
    };
    TransactionComponent.prototype.getTransactions = function () {
        var _this = this;
        this.transactionService.getTransactions()
            .subscribe(function (transactions) {
            _this.transactions = transactions;
            _this.years = _this.extractYears(_this.transactions);
        }, function (error) { return _this.errorMessage = error; });
    };
    TransactionComponent.prototype.searchByYear = function (year) {
        this.getByYear(year);
    };
    TransactionComponent.prototype.searchByHighestValue = function () {
        this.getByHighestValue();
    };
    TransactionComponent.prototype.searchByCity = function (city) {
        this.getAverageByCity(city);
    };
    TransactionComponent.prototype.extractYears = function (transactions) {
        var results = [];
        for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
            var trans = transactions_1[_i];
            var date = new Date(trans.timestamp * 1000);
            results.push(date.getFullYear().toString());
        }
        return this.removeDuplicates(results);
    };
    TransactionComponent.prototype.extractCites = function (traders) {
        var results = [];
        for (var _i = 0, traders_1 = traders; _i < traders_1.length; _i++) {
            var trader = traders_1[_i];
            results.push(trader.city);
        }
        return this.removeDuplicates(results);
    };
    TransactionComponent.prototype.removeDuplicates = function (arr) {
        var out = [], obj = {};
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = 0;
        }
        for (var i in obj) {
            out.push(i);
        }
        return out;
    };
    TransactionComponent = __decorate([
        core_1.Component({
            selector: 'my-trader',
            templateUrl: 'app/transaction-component/transaction.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof transaction_service_1.TransactionService !== 'undefined' && transaction_service_1.TransactionService) === 'function' && _a) || Object, (typeof (_b = typeof trader_service_1.TraderService !== 'undefined' && trader_service_1.TraderService) === 'function' && _b) || Object])
    ], TransactionComponent);
    return TransactionComponent;
    var _a, _b;
}());
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map