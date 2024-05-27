package com.codapt.idapp.features.offices;

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
        return repo.save(newOffice);
        
    }

}
