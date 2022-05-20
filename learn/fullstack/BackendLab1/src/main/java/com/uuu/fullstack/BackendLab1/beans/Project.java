package com.uuu.fullstack.BackendLab1.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "project name is required")
    private String projectName;
    @NotBlank(message = "project identifier is required")
    @Size(min = 6, max = 16, message = "identifier should between 6 to 16 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;
    @NotBlank(message = "description is required")
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date startDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date endDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date updateAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updateAt = new Date();
    }
}