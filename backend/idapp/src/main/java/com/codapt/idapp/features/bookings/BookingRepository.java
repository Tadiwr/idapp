package com.codapt.idapp.features.bookings;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.codapt.idapp.features.offices.Office;

public interface BookingRepository extends CrudRepository<Booking, Long> {
    
    public List<Booking> findByDate(LocalDate date); 
    public List<Booking> findByDateAndOffice(LocalDate date, Office office); 
    public List<Booking> findByOffice(Office office);
    public Optional<Booking> findByCode(String code);




}
