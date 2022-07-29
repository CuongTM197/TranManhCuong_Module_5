package com.codegym.ticket.repository;

import com.codegym.ticket.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ITicketRepository extends JpaRepository<Ticket, Integer> {
    @Query(value = "select * from ticket where starting_point Like :keyWord", nativeQuery = true)
    List<Ticket> searchByStart(@Param("keyWord") String keyWord);

}
