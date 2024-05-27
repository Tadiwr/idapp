package com.codapt.idapp.features.bookings;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class BookingController {

    
    @GetMapping("/helloworld")
    public String helloWorld() {
        return "Hello world";
    }

}
