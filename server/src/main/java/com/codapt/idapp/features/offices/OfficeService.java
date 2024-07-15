package com.codapt.idapp.features.offices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codapt.idapp.features.shared.dto.OfficeDTO;

@Service
public class OfficeService {
    
    @Autowired
    private OfficesRepository repo;

    public Office addOffice(OfficeDTO office) {
        Office newOffice = new Office();

        newOffice.setOfficeName(office.getName());
        newOffice.setShortName(office.getShortName()); 
        newOffice.setCapacity(office.getCapacity());
        return repo.save(newOffice);
    }

    public Optional<Office> getOfficeById(Long id) {
        return repo.findById(id);
    }

    public Optional<Office> getOfficeById(int id) {
        return repo.findById(1L * id);
    }

    public List<Office> getAll() {
        return  (List<Office>) repo.findAll();
    }
}
