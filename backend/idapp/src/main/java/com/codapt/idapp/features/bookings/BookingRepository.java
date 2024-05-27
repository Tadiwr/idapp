package com.codapt.idapp.features.bookings;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Long> {
    
    public List<Booking> findByDate(LocalDate date); 

}
