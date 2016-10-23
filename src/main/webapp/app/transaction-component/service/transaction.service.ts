import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Transaction } from 'app/transaction-component/model/transaction';
import { Observable }     from 'rxjs/Observable';

const TRANSACTIONS_HIGHEST_VALUE_URL: string = 'api/trading/transaction/highest-value';
const TRANSACTIONS_YEAR_URL: string = 'api/trading/transaction/year';
const TRANSACTIONS_AVERAGE_CITY_URL: string = 'api/trading/transaction/average/city';
const TRANSACTIONS_URL: string = 'api/trading/transactions';

@Injectable()
export class TransactionService {

    constructor(private http: Http) { }
    
    transactions: Transaction[] = [];
    
    getTransactions(): Observable<Transaction[]> {
    	 return this.http.get(TRANSACTIONS_URL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getByHighestValue(): Observable<Transaction[]> {
        return this.http.get(TRANSACTIONS_HIGHEST_VALUE_URL)
            .map(this.extractData)
            .catch(this.handleError);
   	}
	
	getByYear(year: string): Observable<Transaction[]> {
        return this.http.get(`${TRANSACTIONS_YEAR_URL}/${year}`)
            .map(this.extractData)
            .catch(this.handleError);
   	}
	
	getAverageByCity(city: string): Observable<string> {
        return this.http.get(`${TRANSACTIONS_AVERAGE_CITY_URL}/${city}`)
            .map(this.extractData)
            .catch(this.handleError);
   	}
	
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}