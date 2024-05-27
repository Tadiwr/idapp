package com.codapt.idapp.features.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codapt.idapp.features.shared.dto.BookingDayDTO;
import com.codapt.idapp.features.shared.dto.BookingsDTO;
import com.codapt.idapp.features.shared.schedulers.FisrtComeFirstServe;

@Service
public class BookingsService {
    
    @Autowired
    BookingRepository repo;

    @Autowired
    FisrtComeFirstServe schedueler;

    public Booking make(BookingsDTO booking) {

        Booking newBooking = new Booking();
        String bookingCode = "";
        BookingDayDTO bookingDay = schedueler.generateDay();

        newBooking.setFirstName(booking.getFirstName());
        newBooking.setLastName(booking.getLastName());
        newBooking.setPhoneNumber(booking.getPhoneNumber());
        newBooking.setOfficeId(booking.getOfficeId());
        newBooking.setCode(bookingCode);
        newBooking.setDate(bookingDay.getDate());

        return repo.save(newBooking);

    }


}
