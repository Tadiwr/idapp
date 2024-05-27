package com.codapt.idapp.features.shared.schedulers;

import com.codapt.idapp.features.shared.dto.BookingDayDTO;

public interface Scheduler {
    
    public BookingDayDTO generateDay();

}
