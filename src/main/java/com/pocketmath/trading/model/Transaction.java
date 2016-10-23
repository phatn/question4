package com.pocketmath.trading.model;

import java.math.BigDecimal;

public class Transaction implements Comparable<Transaction> {
	
	private String traderId;
	
	private Long timestamp;
	
	private BigDecimal value;

	public String getTraderId() {
		return traderId;
	}

	public void setTraderId(String traderId) {
		this.traderId = traderId;
	}

	public Long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Long timestamp) {
		this.timestamp = timestamp;
	}

	public BigDecimal getValue() {
		return value;
	}

	public void setValue(BigDecimal value) {
		this.value = value;
	}

	@Override
	public int compareTo(Transaction transaction) {
		return transaction.getValue().compareTo(this.getValue());
	}
	
}
