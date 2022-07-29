package com.codegym.ticket.service;

import com.codegym.ticket.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ITicketService {
    List<Ticket> findAll();

    void save(Ticket ticket);

    Ticket findById(int id);

    List<Ticket> searchByStart(String name);

    void update(Ticket ticket);

    void remove(int id);
}
