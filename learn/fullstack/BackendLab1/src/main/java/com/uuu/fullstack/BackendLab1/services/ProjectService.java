package com.uuu.fullstack.BackendLab1.services;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repository;

    public Project saveOrUpdateProject(Project p){
        return repository.save(p);
    }
}