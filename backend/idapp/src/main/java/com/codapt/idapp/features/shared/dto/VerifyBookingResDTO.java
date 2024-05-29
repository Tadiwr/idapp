package com.codapt.idapp.features.shared.dto;

import java.util.Optional;

import com.codapt.idapp.features.bookings.Booking;

import lombok.Data;

@Data
public class VerifyBookingResDTO {
    
    private Optional<Booking> booking;
    private Boolean isValid;

}
