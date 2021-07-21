package com.eika.backend.OrderComplete;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrderListService {
    private final OrderListRepository repository;

    @Autowired
    public OrderListService(OrderListRepository repository) {
        this.repository = repository;
    }

    public List<OrderList> getAll() {
        return repository.findAll();
    }

    public Optional<OrderList> getById(Long listId) {
        return repository.findById(listId);
    }

    public  OrderList create( OrderList newList) {
        return repository.save(newList);
    }

    public OrderList update(OrderList  updatedList ) { return repository.save(updatedList); }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}