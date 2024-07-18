package com.codapt.idapp.features.bookings;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codapt.idapp.features.offices.Office;
import com.codapt.idapp.features.offices.OfficeService;
import com.codapt.idapp.features.shared.dto.BookingDayDTO;
import com.codapt.idapp.features.shared.dto.BookingsDTO;
import com.codapt.idapp.features.shared.dto.VerifyBookingDTO;
import com.codapt.idapp.features.shared.dto.VerifyBookingResDTO;
import com.codapt.idapp.features.shared.generators.bookingcodes.BookingCodeGenerator;
import com.codapt.idapp.features.shared.schedulers.FisrtComeFirstServe;

import jakarta.transaction.Transactional;

@Service
public class BookingsService {
    
    @Autowired
    BookingRepository repo;

    @Autowired
    FisrtComeFirstServe schedueler;

    @Autowired
    BookingCodeGenerator codeGenerator;

    @Autowired
    OfficeService officeService;

    @Transactional
    public Booking make(BookingsDTO booking) {

        Booking newBooking = new Booking();
        
        Office office = officeService.getOfficeById(booking.getOfficeId()).get();
        BookingDayDTO bookingDay = schedueler.generateDay(office);
        
        newBooking.setFirstName(booking.getFirstName());
        newBooking.setLastName(booking.getLastName());
        newBooking.setPhoneNumber(booking.getPhoneNumber());
        newBooking.setOffice(office);
        newBooking.setDate(bookingDay.getDate());

        String bookingCode = codeGenerator.generateCode(newBooking, bookingDay.getCount());
        newBooking.setCode(bookingCode);
        
        return repo.save(newBooking);

    }

    public List<Booking> getAll() {
        return (List<Booking>) repo.findAll();
    }

    public List<Booking> getAllForOffice(int id) {

        Optional<Office> officeOptional = officeService.getOfficeById(id);

        if (officeOptional.isPresent()) {
            return (List<Booking>) repo.findByOffice(officeOptional.get());
        } else {
            return new ArrayList<>();
        }

    }

    public VerifyBookingResDTO verifyBooking(String bookingCode) {
        Optional<Booking> booking = repo.findByCode(bookingCode);
        VerifyBookingResDTO res = new VerifyBookingResDTO();

        res.setBooking(booking);
        res.setIsValid(booking.isPresent());

        return res;
    }

    public Optional<Booking> getById(int id) {
        return repo.findById(1L * id);
    }

    public Long countAll() {
        return  repo.count();
    }

    public List<Booking> getAllForDate(LocalDate date) {
        return repo.findByDate(date);
    }

    public List<Booking> getAllForToday(LocalDate date) {
        return repo.findByDate(LocalDate.now());
    }


}
