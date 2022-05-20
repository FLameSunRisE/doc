package com.uuu.fullstack.BackendLab1.handler;

import java.util.HashMap;
import java.util.Map;

import com.uuu.fullstack.BackendLab1.beans.Project;

import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapValidationError {
    public static ResponseEntity<Map<String, String>> getMapResponseEntity(Project p, BindingResult result) {
        Logger.info("Project{}", p);
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError e : result.getFieldErrors()) {
                log.info("error:{},{}", e.getField(), e.getDefaultMessage());
                errorMap.put(e.getField(), e.getDefaultMessage());
            }

            // should not proceed
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}