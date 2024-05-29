package com.codapt.idapp.features.bookings;

import java.time.LocalDate;

import com.codapt.idapp.features.offices.Office;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "bookings")
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false)
    private String code;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String phoneNumber;
    
    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "office_id")
    private Office office; 
} 