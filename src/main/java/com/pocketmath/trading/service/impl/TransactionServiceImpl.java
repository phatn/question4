package com.pocketmath.trading.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pocketmath.trading.model.Trader;
import com.pocketmath.trading.model.Transaction;
import com.pocketmath.trading.repository.TraderRepository;
import com.pocketmath.trading.repository.TransactionRepository;
import com.pocketmath.trading.service.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private TraderRepository traderRepository;
	
	@Override
	public List<Transaction> getByHighestValue() {
		return transactionRepository.getByHighestValue();
	}

	@Override
	public List<Transaction> getByYear(Integer year) {
		return transactionRepository.getByYear(year);
	}

	@Override
	public BigDecimal getAvarageValueByCity(String city) {
		BigDecimal averageValue = BigDecimal.ZERO;
		List<Transaction> transactionsByCity = new ArrayList<>();
		List<Trader> traders = traderRepository.findByCity(city);
		List<Transaction> transactions = transactionRepository.getAllTransactions();
		
		for(Transaction trans : transactions) {
			for(Trader trader : traders) {
				if(trans.getTraderId().equals(trader.getId())) {
					transactionsByCity.add(trans);
				}
			}
		}
		if(!transactionsByCity.isEmpty()) {
			BigDecimal sum = BigDecimal.ZERO;
			for(Transaction trans : transactionsByCity) {
				sum = sum.add(trans.getValue());
			}
			averageValue = sum.divide(new BigDecimal(transactionsByCity.size()), 17, RoundingMode.CEILING);
		}
		return averageValue;
	}

	@Override
	public List<Transaction> getAllTransactions() {
		return transactionRepository.getAllTransactions();
	}

}
