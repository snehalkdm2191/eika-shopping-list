package com.eika.backend.OrderComplete;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/order")
public class OrderListController {

    private final OrderListService service;

    @Autowired
    public OrderListController(OrderListService service) {
        this.service = service;
    }

    //Get all List
    @GetMapping("")
    public List<OrderList> getAll() {
        return service.getAll();
    }

    //Get List by id
    @GetMapping("/{id}")
    public OrderList getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //posting a new List
    @PostMapping("/new")
    public OrderList create(@RequestBody OrderList newList) {
        return service.create(newList);
    }

    //Updating an existing List
    @PutMapping("/update")
    public OrderList update(@RequestBody OrderList updatedList) {
        return service.update(updatedList);
    }

    // ENd point to Delete an List with its id
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
