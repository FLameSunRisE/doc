package com.uuu.fullstack.BackendLab1.controllers;

import java.util.Map;

import javax.validation.Valid;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.handler.MapValidationError;
import com.uuu.fullstack.BackendLab1.services.ProjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/project")
@CrossOrigin
@Slf4j
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project p,
            BindingResult result) {
        ResponseEntity<Map<String, String>> errorMap = MapValidationError.getMapResponseEntity(p, result);
        if (errorMap != null) {
            return errorMap;
        }
        Project newProject = projectService.saveOrUpdateProject(p);
        // return new ResponseEntity<>(newProject, HttpStatus.OK);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/id/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project p = projectService.findProjectByIdentifier(projectId.toUpperCase());
        return new ResponseEntity<>(p, HttpStatus.OK);

    }

    @DeleteMapping("/id/{projectId}")
    public ResponseEntity<?> deleteProjectByProjectId(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<>(String.format("Project id:%s was deleted", projectId), HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects() {
        return projectService.findAllProject();
    }
}