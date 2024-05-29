package com.codapt.idapp.features.offices;

import java.util.List;

import com.codapt.idapp.features.bookings.Booking;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "offices")
@Entity
@Data

public class Office {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String officeName;

    @Column
    private String shortName;

    @JsonIgnore
    @OneToMany(mappedBy = "office")
    private List<Booking> bookings;

}
