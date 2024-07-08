package com.codapt.idapp.features.offices;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficesRepository extends CrudRepository<Office, Long> {

    public List<Office> findByShortName(String shortName);
    
}
