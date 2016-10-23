package com.pocketmath.trading.service;

import java.math.BigDecimal;
import java.util.List;

import com.pocketmath.trading.model.Transaction;

public interface TransactionService {
	
	List<Transaction> getByHighestValue();
	
	List<Transaction> getByYear(Integer year);
	
	BigDecimal getAvarageValueByCity(String city);
	
	List<Transaction> getAllTransactions();
}
