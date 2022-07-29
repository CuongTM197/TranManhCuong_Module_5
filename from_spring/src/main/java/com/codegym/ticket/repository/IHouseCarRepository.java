package com.codegym.ticket.repository;

import com.codegym.ticket.model.HouseCar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IHouseCarRepository extends JpaRepository<HouseCar, Integer> {
}
