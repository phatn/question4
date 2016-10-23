package com.pocketmath.trading.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pocketmath.trading.model.Trader;
import com.pocketmath.trading.service.TraderService;

@RestController
@RequestMapping("/api/trading")
public class TraderApi {
	
	@Autowired
	private TraderService traderService;
	
	@RequestMapping("/traders/city/{city}")
	public ApiResponse<List<Trader>> findByCity(@PathVariable("city") String city) {
		return new ApiResponse<List<Trader>>(traderService.getByCity(city), true);
	}
	
	@RequestMapping("/traders")
	public ApiResponse<List<Trader>> findAllTraders() {
		return new ApiResponse<List<Trader>>(traderService.getAllTraders(), true);
	}
}
