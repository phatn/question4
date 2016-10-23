package com.pocketmath.trading.api;

public class ApiResponse<T> {
	
	private boolean success;
	
	private T data;
	
	public ApiResponse(T data, boolean success) {
		this.success = success;
		this.data = data;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
