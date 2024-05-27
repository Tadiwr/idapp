package com.codapt.idapp.features.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codapt.idapp.features.shared.dto.BookingsDTO;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingsService service;
    
    @PostMapping("/make")
    public Booking makeBooking(@RequestBody BookingsDTO booking) {
        return service.make(booking);
    }

}
