package com.example.demo.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Item;
import com.example.demo.jpaRepo.ItemRepo;

@Service
public class ItemService {
	@Autowired
	ItemRepo repo;
	
	public Item addItem(Item i) {
		Item item = repo.save(i);
		return item;
	}
	
	public List<Item> showItem() {
		List<Item> items = repo.findAll();
		return items;
	}
	
	public Item showItemById(String code) {
		Item item = repo.findById(code).orElse(null);
		return item;
	}
	
	public String updatePrice(String code, BigDecimal price) {
		Item item = this.showItemById(code);
		if(item != null) {
			item.setPrice(price);
			repo.save(item);
			return "Updated";
		} else {
			return "Item Not Found";
		}
	}
	
	public BigDecimal generateBillById(String code, int quantity) {
		Item item = this.showItemById(code);
		if(item != null) {
			BigDecimal price = item.getPrice().multiply(BigDecimal.valueOf(quantity));
			return price;
		} else {
			return BigDecimal.ZERO;
		}
	}
}