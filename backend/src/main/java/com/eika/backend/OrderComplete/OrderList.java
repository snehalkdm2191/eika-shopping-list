package com.eika.backend.OrderComplete;

import javax.persistence.*;
import java.util.List;

@Entity
public class OrderList {
    @Id
    //@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "list_generator")
    //@SequenceGenerator(name = "list_generator", sequenceName = "list_seq")
    private Long id;
    // All fields for ShoppingList
    private String title;
    private Integer price;
    private String imageUrl;
    private Integer qty;

    public OrderList() {
    }

    public OrderList(Long id, String title, Integer price, String imageUrl, Integer qty) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.qty = qty;
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

    public Integer getPrice() { return price; }

    public void setPrice(Integer price) { this.price = price; }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getQty() { return qty; }

    public void setQty(Integer qty) { this.qty = qty; }

}
