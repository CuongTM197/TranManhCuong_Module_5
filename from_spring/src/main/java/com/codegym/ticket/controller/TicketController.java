package com.codegym.ticket.controller;

import com.codegym.ticket.model.HouseCar;
import com.codegym.ticket.model.Ticket;
import com.codegym.ticket.service.IHouseCarService;
import com.codegym.ticket.service.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class TicketController {
    @Autowired
    private ITicketService iTicketService;
    @Autowired
    private IHouseCarService iHouseCarService;

    @GetMapping("/get-list-ticket")
    public ResponseEntity<?> getListTicket() {
        List<Ticket> ticketList = iTicketService.findAll();
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }

    @GetMapping("/get-list-houseCar")
    public ResponseEntity<?> getListHouseCar() {
        List<HouseCar> houseCarList = iHouseCarService.findAll();
        return new ResponseEntity<>(houseCarList, HttpStatus.OK);
    }

    @GetMapping("/find-id-ticket")
    public ResponseEntity<Ticket> findById(@PathVariable Integer id) {
        Ticket ticket = iTicketService.findById(id);
        return new ResponseEntity<>(ticket, HttpStatus.OK);
    }

    @PostMapping("/add-ticket")
    public ResponseEntity<Ticket> save(@RequestBody Ticket ticket) {
        iTicketService.save(ticket);
        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
    }

    @PutMapping("order-ticket")
    public ResponseEntity<?> orderTicket(@RequestBody Ticket ticket) {
        iTicketService.save(ticket);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search-ticket")
    public ResponseEntity<?> search(@RequestParam String keyWord) {
        List<Ticket> tickets = iTicketService.searchByStart(keyWord);
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @DeleteMapping("/delete-ticket/{id}")
    public ResponseEntity<?> remove(@PathVariable Integer id) {
        iTicketService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
