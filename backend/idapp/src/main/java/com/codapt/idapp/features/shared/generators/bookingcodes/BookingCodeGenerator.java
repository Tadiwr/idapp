package com.codapt.idapp.features.shared.generators.bookingcodes;

import org.springframework.stereotype.Service;

import com.codapt.idapp.features.bookings.Booking;

@Service
public interface BookingCodeGenerator {
    
    /** Generates a code for a booking */
    public String  generateCode(Booking booking, int count);

}
