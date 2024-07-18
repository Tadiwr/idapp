package com.codapt.idapp.features.statisitics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codapt.idapp.features.bookings.BookingsService;
import com.codapt.idapp.features.offices.OfficeService;

@Service
public class StatisticsService {
    
    @Autowired
    private BookingsService bookingService; 

    @Autowired
    private OfficeService officeService;


    public Long getBookingsCount() {
        return bookingService.countAll();
    }

    public Long getOfficesCount() {
        return officeService.countAll();
    }
}
