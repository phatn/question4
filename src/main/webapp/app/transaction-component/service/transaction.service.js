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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TRANSACTIONS_HIGHEST_VALUE_URL = 'api/trading/transaction/highest-value';
var TRANSACTIONS_YEAR_URL = 'api/trading/transaction/year';
var TRANSACTIONS_AVERAGE_CITY_URL = 'api/trading/transaction/average/city';
var TRANSACTIONS_URL = 'api/trading/transactions';
var TransactionService = (function () {
    function TransactionService(http) {
        this.http = http;
        this.transactions = [];
    }
    TransactionService.prototype.getTransactions = function () {
        return this.http.get(TRANSACTIONS_URL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TransactionService.prototype.getByHighestValue = function () {
        return this.http.get(TRANSACTIONS_HIGHEST_VALUE_URL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TransactionService.prototype.getByYear = function (year) {
        return this.http.get(TRANSACTIONS_YEAR_URL + "/" + year)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TransactionService.prototype.getAverageByCity = function (city) {
        return this.http.get(TRANSACTIONS_AVERAGE_CITY_URL + "/" + city)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TransactionService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TransactionService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TransactionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map