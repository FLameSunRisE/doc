package com.uuu.fullstack.BackendLab1.services;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
@Slf4j
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project p) {
        try {
            p.setProjectIdentifier(p.getProjectIdentifier().toUpperCase(Locale.ROOT));
            return repository.save(p);
        } catch (Exception e) {
            log.info("project id={}", p.getProjectIdentifier());
            log.info("project repo got some error:{}", e.getMessage());
        }
        return p;
    }
}