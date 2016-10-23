import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Trader } from 'app/trader-component/model/trader';
import { Observable }     from 'rxjs/Observable';

const TRADERS_BY_CITY_URL: string = 'api/trading/traders/city';
const TRADERS_URL: string = 'api/trading/traders';

@Injectable()
export class TraderService {

    constructor(private http: Http) { }

    getTradersByCity(city: string): Observable<Trader[]> {
        return this.http.get(`${TRADERS_BY_CITY_URL}/${city}`)
            .map(this.extractData)
            .catch(this.handleError);
   	}

	getTraders(): Observable<Trader[]> {
        return this.http.get(TRADERS_URL)
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
