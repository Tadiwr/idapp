package com.codapt.idapp.features.shared.schedulers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codapt.idapp.features.bookings.BookingRepository;
import com.codapt.idapp.features.offices.Office;
import com.codapt.idapp.features.shared.dto.BookingDayDTO;
import com.codapt.idapp.features.bookings.Booking;

@Service
public class FisrtComeFirstServe implements Scheduler {

    @Autowired
    private BookingRepository bookingsRepo;

    @Override
    public BookingDayDTO generateDay(Office office) {

        LocalDate firstDay = LocalDate.now().plusDays(1);
        List<Booking> allBookings = bookingsRepo.findByDateAndOffice(firstDay, office);

        while (allBookings.size() == office.getCapacity()) {
            firstDay = firstDay.plusDays(1);
            allBookings = bookingsRepo.findByDateAndOffice(firstDay, office);
        }

        int count = allBookings.size() + 1;

        BookingDayDTO bookingDay = new BookingDayDTO();

        bookingDay.setDate(firstDay);
        bookingDay.setCount(count);

        return bookingDay;
    }
     
}
