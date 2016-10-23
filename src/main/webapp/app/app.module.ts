import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { TraderComponent } from 'app/trader-component/trader.component';
import { TransactionComponent } from 'app/transaction-component/transaction.component'

import { TraderService } from 'app/trader-component/service/trader.service';
import { TransactionService } from 'app/transaction-component/service/transaction.service';
	
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/traders',
                pathMatch: 'full'
            },
            {
                path: 'transactions',
                component: TransactionComponent
            },
            {
                path: 'traders',
                component: TraderComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        TraderComponent,
        TransactionComponent
    ],
    providers: [TraderService, TransactionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
