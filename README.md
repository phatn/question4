#Requirements
These challenges are all of the same domain: traders executing transactions. Traders have a name, a city, and a unique trader ID. Transactions have a UTC 0 UNIX epoch second timestamp, a value (representing the monetary value transacted in USD), and a trader ID (identifying the trader who made the transaction). There are REST endpoints which you can invoke GET to obtain the data. The endpoints require the same API key for authorization. The REST endpoints are 'GET /prod/traders' (for all traders) and 'GET /prod/transactions' (for all transactions).

1. Find all traders from Singapore and sort them by name.
2. Find the transaction with the highest value.
3. Find all transactions in the year 2016 and sort them by value (high to small).
4. Find the average of transactions' values from the traders living in Beijing

#Introduction
This project is **Java web application** based on REST using some frameworks like Spring, Spring MVC, Angular 2, Bootstrap

#Get code
Clone the repository: $ git clone https://github.com/phatn/question4.git

#Build and run application
**This project is tested with Java 8, not with older versions yet**
```
$ cd question4
$ mvn clean install
$ mvn jetty:run
```
When Jetty server get started then access it at **http://localhost:8080/index.html**
