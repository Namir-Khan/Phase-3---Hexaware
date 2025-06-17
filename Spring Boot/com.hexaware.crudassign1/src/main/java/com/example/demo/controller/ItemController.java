package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Item;
import com.example.demo.service.ItemService;

@RestController
public class ItemController {
	@Autowired
	ItemService service;
	
	@PostMapping("/api/items")
	public Item addItem(@RequestBody Item i) {
		Item item = service.addItem(i);
		return item;
	}
	
	@GetMapping("/api/items")
	public List<Item> showItem() {
		List<Item> items = service.showItem();
		return items;
	}
	
	@GetMapping("/api/items/{code}")
	public Item showItemById(@PathVariable String code) {
		Item item = service.showItemById(code);
		return item;
	}
	
	@PutMapping("/api/items/{code}/{price}")
	public String updatePrice(@PathVariable String code, @PathVariable BigDecimal price) {
		String res = service.updatePrice(code, price);
		return res;
	}
	
	@PostMapping("/api/generateBill/{code}/{quantity}")
	public BigDecimal generateBillById(@PathVariable String code, @PathVariable int quantity) {
		BigDecimal total = service.generateBillById(code, quantity);
		return total;
	}
	
	@PostMapping("/api/generateBill")
	public BigDecimal generateBill(@RequestBody List<Map<String, Object>> items) {
		BigDecimal total = BigDecimal.ZERO;
		for (Map<String, Object> entry : items) {
	        String code = (String) entry.get("code");
	        int quantity = (int) entry.get("quantity");

	        Item item = service.showItemById(code);
	        if (item != null) {
	            BigDecimal itemTotal = item.getPrice().multiply(BigDecimal.valueOf(quantity));
	            total = total.add(itemTotal);
	        }
	    }
	    return total;
	}
}