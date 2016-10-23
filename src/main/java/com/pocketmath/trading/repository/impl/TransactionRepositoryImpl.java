package com.pocketmath.trading.repository.impl;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pocketmath.trading.config.ApplicationConfig;
import com.pocketmath.trading.httpclient.RestHttpClient;
import com.pocketmath.trading.model.Transaction;
import com.pocketmath.trading.repository.TransactionRepository;

@Repository
public class TransactionRepositoryImpl implements TransactionRepository {

	public static Map<String, String> header = new HashMap<>();
	
	@Autowired
	private CustomMapper mapper;
	
	@Autowired
	private ApplicationConfig applicationConfig;
	
	@Autowired
	private RestHttpClient restHttpClient;
	
	
	@Override
	public List<Transaction> getByHighestValue() {
		List<Transaction> result = new ArrayList<>();
		Transaction[] transactions = getTransactions();
		if(transactions != null && transactions.length > 0) {
			BigDecimal highestValue = BigDecimal.ZERO;
			
			// Find the highest value
			for(Transaction trans : transactions) {
				if(trans.getValue().compareTo(highestValue) == 1) {
					highestValue = trans.getValue();
				}
			}
			
			// Get transactions that their values equal to highest value
			for(Transaction trans : transactions) {
				if(trans.getValue().compareTo(highestValue) == 0) {
					result.add(trans);
				}
			}
		}
		return result;
	}

	@Override
	public List<Transaction> getByYear(Integer year) {
		List<Transaction> result = new ArrayList<>();
		Transaction[] transactions = getTransactions();
		if(transactions != null && transactions.length > 0) {
			
			if(year.intValue() == 0) {
				result = Arrays.asList(transactions);
			} else {
				for(Transaction trans : transactions) {
					if(getYear(trans.getTimestamp()) == year.intValue()) {
						result.add(trans);
					}
				}
			}
		}
		Collections.sort(result);
		return result;
	}

	private Transaction[] getTransactions() {
		Transaction[] transactions = null;
		try {
			transactions = mapper.readValue(restHttpClient.get(applicationConfig.getEndpoint() + 
					applicationConfig.getResourceTransaction(), buildHeader()), Transaction[].class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return transactions;
	}
	
	private Map<String, String> buildHeader() {
		if(!header.containsKey("accept")) {
			header.put("accept", "application/json");
		}
		
		if(!header.containsKey("x-api-key")) {
			header.put("x-api-key", applicationConfig.getApiKey());
		}
		
		return header;
	}
	
	private static int getYear(long timestamp) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(timestamp * 1000);
		return calendar.get(Calendar.YEAR);
		
	}

	@Override
	public List<Transaction> getAllTransactions() {
		return Arrays.asList(getTransactions());
	}
}
