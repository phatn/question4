package com.pocketmath.trading.repository;

import java.util.List;

import com.pocketmath.trading.model.Trader;

public interface TraderRepository {
	List<Trader> findByCity(String city);
	List<Trader> findAllTraders();
}
