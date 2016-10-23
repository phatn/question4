package com.pocketmath.trading.repository.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.pocketmath.trading.config.ApplicationConfig;
import com.pocketmath.trading.httpclient.RestHttpClient;
import com.pocketmath.trading.model.Trader;
import com.pocketmath.trading.repository.TraderRepository;

@Repository
public class TraderRepositoryImpl implements TraderRepository {

	public static Map<String, String> header = new HashMap<>();
	
	@Autowired
	private CustomMapper mapper;
	
	@Autowired
	private ApplicationConfig applicationConfig;
	
	@Autowired
	private RestHttpClient restHttpClient;
	
	@Override
	public List<Trader> findByCity(String city) {
		Trader[] traders;
		List<Trader> result = new ArrayList<>();
		traders =  getTraders();
		
		if(traders != null && traders.length > 0) {
			
			if(city == null || StringUtils.isEmpty(city) || "SELECT_ALL".equals(city)) {
				return Arrays.asList(traders);
			}
			
			for(Trader trader : traders) {
				if(trader.getCity().equalsIgnoreCase(city)) {
					result.add(trader);
				}
			}
		}
		Collections.sort(result);
		return result;
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

	private Trader[] getTraders() {
		Trader[] traders = null;
		try {
			traders = mapper.readValue(restHttpClient.get(applicationConfig.getEndpoint() + 
					applicationConfig.getResourceTrader(), buildHeader()), Trader[].class);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return traders;
	}

	@Override
	public List<Trader> findAllTraders() {
		return Arrays.asList(getTraders());
	}
}
