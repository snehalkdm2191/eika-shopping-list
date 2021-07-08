package com.eika.backend.ShoppingList;

import javax.persistence.*;
import java.util.List;

@Entity
public class ShoppingList {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "list_generator")
    @SequenceGenerator(name = "list_generator", sequenceName = "list_seq")
    private Long id;
    // All fields for ShoppingList
    private String title;
    private String price;
    private String imageUrl;
    private String date;

    public ShoppingList() {
    }

    public ShoppingList(Long id, String title, String price, String date) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.date = date;
    }

    /**
     * Getter and setter for all the fields
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
