package com.pocketmath.trading.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pocketmath.trading.model.Trader;
import com.pocketmath.trading.repository.TraderRepository;
import com.pocketmath.trading.service.TraderService;

@Service
public class TraderServiceImpl implements TraderService {

	@Autowired
	private TraderRepository traderRepository;
	
	@Override
	public List<Trader> getByCity(String city) {
		return traderRepository.findByCity(city);
	}

	@Override
	public List<Trader> getAllTraders() {
		return traderRepository.findAllTraders();
	}

}
