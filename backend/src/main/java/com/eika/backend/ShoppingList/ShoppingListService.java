package com.eika.backend.ShoppingList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ShoppingListService {
    private final ShoppingListRepository repository;

    @Autowired
    public ShoppingListService(ShoppingListRepository repository) {
        this.repository = repository;
    }

    public List<ShoppingList> getAll() {
        return repository.findAll();
    }

    public Optional<ShoppingList> getById(Long listId) {
        return repository.findById(listId);
    }

    public  ShoppingList create( ShoppingList newList) {
        return repository.save(newList);
    }

    public ShoppingList update(ShoppingList  updatedList ) {
        return repository.save(updatedList);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}