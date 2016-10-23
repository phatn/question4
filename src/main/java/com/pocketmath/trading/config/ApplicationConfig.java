package com.pocketmath.trading.config;

public class ApplicationConfig {
	
	private String endpoint;
	
	private String apiKey;
	
	private String resourceTrader;
	
	private String resourceTransaction;

	public String getEndpoint() {
		return endpoint;
	}

	public void setEndpoint(String endpoint) {
		this.endpoint = endpoint;
	}

	public String getApiKey() {
		return apiKey;
	}

	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	public String getResourceTrader() {
		return resourceTrader;
	}

	public void setResourceTrader(String resourceTrader) {
		this.resourceTrader = resourceTrader;
	}

	public String getResourceTransaction() {
		return resourceTransaction;
	}

	public void setResourceTransaction(String resourceTransaction) {
		this.resourceTransaction = resourceTransaction;
	}
}
