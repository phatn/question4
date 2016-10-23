import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
  		<h1>{{title}}</h1>
	   <nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <div class="navbar-header">
		      <a class="navbar-brand" href="#">Home</a>
		    </div>
		    <ul class="nav navbar-nav">
		      <li><a routerLink="/traders">Traders</a></li>
		      <li><a routerLink="/transactions">Transactions</a></li> 
		    </ul>
		  </div>
		</nav>
	   <router-outlet></router-outlet>
  	`
})
export class AppComponent {
    title = "";
}
