package com.codapt.idapp.features.shared.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class BookingDayDTO {
    
    /** The generated day for the booking */
    private LocalDate date;

    /** The bookings number within the bookings for a specific day */
    private int count;

}
