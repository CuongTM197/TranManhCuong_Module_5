package com.codegym.ticket.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "house_car")
public class HouseCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "houseCar_id")
    private int id;
    @Column(name = "houseCar_name")
    private String name;

    @OneToMany(mappedBy = "houseCar", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<Ticket> tickets;

    public HouseCar() {

    }

    public HouseCar(int id, String name, Set<Ticket> tickets) {
        this.id = id;
        this.name = name;
        this.tickets = tickets;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(Set<Ticket> tickets) {
        this.tickets = tickets;
    }
}

