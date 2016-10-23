package com.pocketmath.trading.httpclient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

@Component
public class RestHttpClient {
	
	public String get(String url, Map<String, String> header) {
		OkHttpClient client = new OkHttpClient();
		StringBuilder resultBuilder = new StringBuilder();
		Request request = new Request.Builder()
		  .url(url)
		  .get()
		  .addHeader("x-api-key", header.get("x-api-key"))
		  .addHeader("accept", header.get("accept"))
		  .addHeader("cache-control", "no-cache")
		  .build();

		try {
			Response response = client.newCall(request).execute();
			BufferedReader br = new BufferedReader(
	                new InputStreamReader((response.body().byteStream())));

			String output;
			while ((output = br.readLine()) != null) {
				resultBuilder.append(output);
			}
			response.body().close();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		return resultBuilder.toString();
	}
}
