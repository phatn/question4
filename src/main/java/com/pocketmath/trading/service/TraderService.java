package com.pocketmath.trading.service;

import java.util.List;

import com.pocketmath.trading.model.Trader;

public interface TraderService {
	
	List<Trader> getByCity(String city);
	
	List<Trader> getAllTraders();
}
