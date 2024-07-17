package com.codapt.idapp.features.offices;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codapt.idapp.features.shared.dto.OfficeDTO;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/offices")
public class OfficesController {

    @Autowired
    private OfficeService service;
  
    @PostMapping("/add")
    public Office addOffice(@RequestBody OfficeDTO office) {
        return service.addOffice(office);
    }

    @GetMapping("/all")
    public List<Office> getAll() {
        return service.getAll();
    }

    @GetMapping("/{officeId}")
    public ResponseEntity<Office> getOffice(@PathVariable int officeId) {
        Optional<Office> officeOp = service.getOfficeById(officeId);

        if (officeOp.isPresent()) {
            return ResponseEntity.ok(officeOp.get());
        }

        return ResponseEntity.notFound().build();
    }
    
    
}
