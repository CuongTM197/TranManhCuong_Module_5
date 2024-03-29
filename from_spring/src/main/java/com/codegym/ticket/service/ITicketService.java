package com.codegym.ticket.service;

import com.codegym.ticket.model.Ticket;
import java.util.List;

public interface ITicketService {
    List<Ticket> findAll();

    void save(Ticket ticket);

    Ticket findById(int id);

    List<Ticket> searchByStart(String keyWord);


    void update(Ticket ticket);

    void remove(int id);
}
