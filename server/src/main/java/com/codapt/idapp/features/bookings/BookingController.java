package com.codapt.idapp.features.bookings;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codapt.idapp.features.shared.dto.BookingsDTO;
import com.codapt.idapp.features.shared.dto.VerifyBookingDTO;
import com.codapt.idapp.features.shared.dto.VerifyBookingResDTO;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    BookingsService service;
    
    @PostMapping("/make")
    public Booking makeBooking(@RequestBody BookingsDTO booking) {
        return service.make(booking);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/all/office/{id}")
    public ResponseEntity<List<Booking>> getAllForOffice(@PathVariable(name="id") int officeId) {
        return ResponseEntity.ok(service.getAllForOffice(officeId));
    }

    @PostMapping("/verify")
    public ResponseEntity<VerifyBookingResDTO> verifyBooking(@RequestBody VerifyBookingDTO dto) {
        return ResponseEntity.ok(service.verifyBooking(dto.getBookingCode()));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getSingleBookingById(@PathVariable(name="id") int bookingId) {
        Optional<Booking> booking = service.getById(bookingId);

        if (booking.isPresent()) {
            return ResponseEntity.ok(booking.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/setregistered")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    

}
