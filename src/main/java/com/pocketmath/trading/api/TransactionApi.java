package com.pocketmath.trading.api;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pocketmath.trading.model.Transaction;
import com.pocketmath.trading.service.TransactionService;

@RestController
@RequestMapping("/api/trading")
public class TransactionApi {
	
	@Autowired
	private TransactionService transactionService;
	
	@RequestMapping("/transaction/highest-value")
	public ApiResponse<List<Transaction>> findByHighestValue() {
		return new ApiResponse<>(transactionService.getByHighestValue(), true);
	}
	
	@RequestMapping("/transaction/year/{year}")
	public ApiResponse<List<Transaction>> findByYear(@PathVariable("year") Integer year) {
		return new ApiResponse<List<Transaction>>(transactionService.getByYear(year), true);
	}
	
	@RequestMapping("/transaction/average/city/{city}")
	public ApiResponse<String> getAverageByCity(@PathVariable("city") String city) {
		return new ApiResponse<String>(transactionService.getAvarageValueByCity(city).toString(), true);
	}
	
	@RequestMapping("/transactions")
	public ApiResponse<List<Transaction>> findAll() {
		return new ApiResponse<List<Transaction>>(transactionService.getAllTransactions(), true);
	}
}
