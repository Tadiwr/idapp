package com.codapt.idapp.features.bookings;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "booking")
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false)
    private String code;

    @Column
    private Long officeId;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String phoneNumber;
    
    @Column
    private LocalDate date;
} 