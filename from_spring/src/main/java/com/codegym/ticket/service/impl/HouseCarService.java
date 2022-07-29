package com.codegym.ticket.service.impl;

import com.codegym.ticket.model.HouseCar;
import com.codegym.ticket.repository.IHouseCarRepository;
import com.codegym.ticket.service.IHouseCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseCarService implements IHouseCarService {

    @Autowired
    private IHouseCarRepository iHouseCarRepository;

    @Override
    public List<HouseCar> findAll() {
        return iHouseCarRepository.findAll();
    }

    @Override
    public void save(HouseCar houseCar) {
        iHouseCarRepository.save(houseCar);
    }

    @Override
    public HouseCar findById(int id) {
        return iHouseCarRepository.findById(id).orElse(null);
    }

    @Override
    public void update(HouseCar houseCar) {

    }

    @Override
    public void remove(int id) {

    }
}
