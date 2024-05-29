package com.codapt.idapp.features.shared.schedulers;

import org.springframework.stereotype.Service;

import com.codapt.idapp.features.offices.Office;
import com.codapt.idapp.features.shared.dto.BookingDayDTO;

@Service
public interface Scheduler {
    
    public BookingDayDTO generateDay(Office office);

}
