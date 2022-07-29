package com.codegym.ticket.service;

import com.codegym.ticket.model.HouseCar;

import java.util.List;

public interface IHouseCarService {
    List<HouseCar> findAll();

    void save(HouseCar houseCar);

    HouseCar findById(int id);

    void update(HouseCar houseCar);

    void remove(int id);
}
