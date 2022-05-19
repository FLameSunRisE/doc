package com.uuu.fullstack.BackendLab1.repositories;

import com.uuu.fullstack.BackendLab1.beans.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
}
