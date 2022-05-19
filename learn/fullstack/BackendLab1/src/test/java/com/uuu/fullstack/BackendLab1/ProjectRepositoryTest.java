package com.uuu.fullstack.BackendLab1;

import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;
import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class ProjectRepositoryTest {
    @Autowired
    private ProjectRepository repository;

    @Test
    void checkRepositoryValid() {
        assertNotNull(repository);
    }
}