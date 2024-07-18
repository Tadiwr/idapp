package com.codapt.idapp.features.statisitics;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/stats")
public class StatisticsController {
    
    @Autowired
    private StatisticsService service;

    @GetMapping("/summary")
    public SummaryDTO getSummaryStats() {

        SummaryDTO summary = new SummaryDTO();
        Long bookingsCount = service.getBookingsCount();
        Long OfficeCount = service.getOfficesCount();

        summary.setBookingCount(bookingsCount);
        summary.setOfficeCount(OfficeCount);

        return summary;
    }
    

}


@Data
class SummaryDTO {
    private Long bookingCount;
    private Long OfficeCount;
}