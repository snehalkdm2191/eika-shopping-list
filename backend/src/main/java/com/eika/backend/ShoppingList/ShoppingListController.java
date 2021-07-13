package com.eika.backend.ShoppingList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/list")
public class ShoppingListController {

    private final ShoppingListService service;

    @Autowired
    public ShoppingListController(ShoppingListService service) {
        this.service = service;
    }

    //Get all List
    @GetMapping("")
    public List<ShoppingList> getAll() {
        return service.getAll();
    }

    //Get List by id
    @GetMapping("/{id}")
    public ShoppingList getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //posting a new List
    @PostMapping("/new")
    public ShoppingList create(@RequestBody ShoppingList newList) {
        return service.create(newList);
    }

    //Updating an existing List
    @PutMapping("/update")
    public ShoppingList update(@RequestBody ShoppingList updatedList) {
        return service.update(updatedList);
    }

    // ENd point to Delete an List with its id
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
