package com.codapt.idapp.features.offices;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codapt.idapp.features.shared.dto.OfficeDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/offices")
public class OfficesController {

    @Autowired
    private OfficeService service;
  
    @PostMapping("/add")
    public Office addOffice(@RequestBody OfficeDTO office) {
        return service.addOffice(office);
    }
    
    
}
