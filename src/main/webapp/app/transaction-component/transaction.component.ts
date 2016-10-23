import { Component, OnInit } from '@angular/core';

import { TransactionService } from 'app/transaction-component/service/transaction.service';
import { Transaction } from 'app/transaction-component/model/transaction';
import { TraderService } from 'app/trader-component/service/trader.service';
import { Trader } from 'app/trader-component/model/trader';

@Component({
    selector: 'my-trader',
    templateUrl: 'app/transaction-component/transaction.component.html'
})
export class TransactionComponent {

	 transactions: Transaction[] = [];
	 
	 errorMessage: string;
	 
	 years: string[] = [];
	 
	 cities: string[] = [];
	 
	 traders: Trader[] = [];
	 
	 transactionResults: Transaction[] = [];
	 
	 averageValue: string = null;
	 
	 constructor(
	 	private transactionService: TransactionService,
	 	private traderService: TraderService) { }
	 
	 
	 ngOnInit() {
        this.getTransactions();
	}
    
    getByHighestValue() {
    	this.transactionResults = [];
    	this.transactionService.getByHighestValue()
            .subscribe(
                transactionResults => {
                	this.transactionResults = transactionResults;
                },
                error => this.errorMessage = <any>error);
    }
    
    getByYear(year: string) {
    	this.transactionResults = [];
    	this.transactionService.getByYear(year)
            .subscribe(
                transactionResults => {
                	this.transactionResults = transactionResults;
                },
                error => this.errorMessage = <any>error);
    }
    
    getAverageByCity(city: string) {
    	this.transactionService.getAverageByCity(city)
            .subscribe(
                averageValue => {
                	this.averageValue = averageValue;
                },
                error => this.errorMessage = <any>error);
    }
    
    getTraders() {
		 this.traderService.getTraders()
            .subscribe(
                traders => {
                	this.traders = traders;
                	this.cities = this.extractCites(this.traders);
                },
                error => this.errorMessage = <any>error);
	}
    
    getTransactions() {
		 this.transactionService.getTransactions()
            .subscribe(
                transactions => {
                	this.transactions = transactions;
                	this.years = this.extractYears(this.transactions);
                },
                error => this.errorMessage = <any>error);
	}
	
	searchByYear(year: string) {
		this.getByYear(year);
	}
	
	searchByHighestValue() {
		this.getByHighestValue();
	}
	
	searchByCity(city: string) {
		this.getAverageByCity(city);
	}
	
	private extractYears(transactions: Transaction[]): string[] {
    	let results: string[] = [];
    	for(let trans of transactions) {
    		let date = new Date(trans.timestamp * 1000);
    		results.push(date.getFullYear().toString());
    	}
    	return this.removeDuplicates(results);
    }
    
    private extractCites(traders: Trader[]): string[] {
    	let results: string[] = [];
    	for(let trader of traders) {
    		results.push(trader.city);
    	}
    	return this.removeDuplicates(results);
    }
    
    private removeDuplicates(arr: string[]) {  
	  let out = [],  obj = {};  
	   
	  for(let i = 0; i < arr.length; i++) {  
	  	obj[arr[i]] = 0;  
	  } 
	   
	  for (let i in obj) {  
	    out.push(i);  
	  }
	    
	  return out;  
	}
}