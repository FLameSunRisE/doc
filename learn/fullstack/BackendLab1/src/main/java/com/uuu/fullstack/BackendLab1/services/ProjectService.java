package com.uuu.fullstack.BackendLab1.services;

import java.util.Locale;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.exceptions.ProjectIdException;
import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

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
            throw new ProjectIdException("Project ID:" + p.getProjectIdentifier().toUpperCase());
        }
    }
}