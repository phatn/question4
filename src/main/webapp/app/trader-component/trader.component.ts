import { Component, OnInit } from '@angular/core';

import { TraderService } from 'app/trader-component/service/trader.service';
import { Trader } from 'app/trader-component/model/trader';

@Component({
    selector: 'my-trader',
    templateUrl: 'app/trader-component/trader.component.html'
})
export class TraderComponent {

    traders: Trader[] = [];
	
	traderResults: Trader[] = [];
	
    errorMessage: string;

	searchCity: string = "";
	
	cities: string[] = [];
	
    constructor(private traderService: TraderService) { }

	searchTraders(city: string) {
		 this.getTradersByCity(city);
	}
	
    getTradersByCity(city: string) {
        this.traderService.getTradersByCity(city)
            .subscribe(
                traders => this.traderResults = traders,
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

    ngOnInit() {
        this.getTraders();
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
