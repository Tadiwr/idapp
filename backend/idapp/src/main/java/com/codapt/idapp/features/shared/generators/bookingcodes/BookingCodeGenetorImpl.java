package com.codapt.idapp.features.shared.generators.bookingcodes;

import org.springframework.stereotype.Service;

import com.codapt.idapp.features.bookings.Booking;
import com.codapt.idapp.features.shared.utils.HexUtil;

@Service
public class BookingCodeGenetorImpl implements BookingCodeGenerator {

    @Override
    public String generateCode(Booking booking, int count) {
        String cityCode = "" + booking.getOffice().getShortName();
        String day = "" + booking.getDate().getDayOfMonth();

        if (day.length() == 1) {
            day = "0" + day;
        }

        String month = "" + booking.getDate().getMonthValue();

        if (month.length() == 1) {
            month = "0" + month;
        }

        String year = "" + booking.getDate().getYear();
        String countHex = new HexUtil().toHex(count);
        
        return cityCode + "-" + day + month + year + "-" + countHex;
    }
    
}
