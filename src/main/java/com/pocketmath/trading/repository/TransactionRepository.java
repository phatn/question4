package com.pocketmath.trading.repository;

import java.util.List;

import com.pocketmath.trading.model.Transaction;

public interface TransactionRepository {
	
	List<Transaction> getByHighestValue();
	
	List<Transaction> getByYear(Integer year);
	
	List<Transaction> getAllTransactions();
}
