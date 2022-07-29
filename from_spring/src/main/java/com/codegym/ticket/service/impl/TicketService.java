package com.codegym.ticket.service.impl;

import com.codegym.ticket.model.Ticket;
import com.codegym.ticket.repository.ITicketRepository;
import com.codegym.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService implements ITicketService {
    @Autowired
    private ITicketRepository iTicketRepository;

    @Override
    public List<Ticket> findAll() {
        return iTicketRepository.findAll();
    }

    @Override
    public void save(Ticket ticket) {
        iTicketRepository.save(ticket);
    }

    @Override
    public Ticket findById(int id) {
        return iTicketRepository.findById(id).orElse(null);
    }

    @Override
    public List<Ticket> searchByStart(String keyWord) {
        return iTicketRepository.searchByStart("%"+keyWord+"%");
    }

    @Override
    public void update(Ticket ticket) {

    }

    @Override
    public void remove(int id) {

    }
}
