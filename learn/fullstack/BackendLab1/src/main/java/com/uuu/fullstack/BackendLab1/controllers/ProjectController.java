package com.uuu.fullstack.BackendLab1.controllers;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/project")
@Slf4j
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<Project> createNewProject(@Valid @RequestBody Project p,
            BindingResult result) {
        if (result.hasErrors()) {
            log.info("got some errors...");
        }
        Project newProject = projectService.saveOrUpdateProject(p);
        // return new ResponseEntity<>(newProject, HttpStatus.OK);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);

    }
}