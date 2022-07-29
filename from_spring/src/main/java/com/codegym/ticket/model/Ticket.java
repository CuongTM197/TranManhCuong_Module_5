package com.codegym.ticket.model;

import javax.persistence.*;

@Entity(name = "ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private int id;
    @Column(name = "starting_point")
    private String start;
    @Column(name = "ends")
    private String end;
    @Column(name = "ticket_price")
    private Double price;
    @Column(name = "start_day")
    private String startDay;
    @Column(name = "start_time")
    private String startTime;
    @Column(name = "ticket_count")
    private int count;
    @ManyToOne
    @JoinColumn(name = "houseCar_id", referencedColumnName = "houseCar_id")
    private HouseCar houseCar;

    public Ticket() {
    }

    public Ticket(int id,
                  String start,
                  String end,
                  Double price,
                  String startDay,
                  String startTime,
                  int count,
                  HouseCar houseCar) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.price = price;
        this.startDay = startDay;
        this.startTime = startTime;
        this.count = count;
        this.houseCar = houseCar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public HouseCar getHouseCar() {
        return houseCar;
    }

    public void setHouseCar(HouseCar houseCar) {
        this.houseCar = houseCar;
    }
}
