package com.uuu.fullstack.BackendLab1;

import com.uuu.fullstack.BackendLab1.beans.Project;
import com.uuu.fullstack.BackendLab1.repositories.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Locale;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class ProjectRepositoryTest {
    @Autowired
    private ProjectRepository repository;
    // 1
    @Autowired
    private TestEntityManager manager;
    @Test
    void checkRepositoryValid() {
        assertNotNull(repository);
    }
    @Test
    void checkInsertOneRecord() {
        Project p1 = new Project();
        repository.save(p1);
        assertEquals(1, repository.count());
    }
    @Test
    void checkMultipleRecord() {
        Project p1 = new Project();
        Project p2 = new Project();
        Project p3 = new Project();
        repository.save(p1);
        repository.save(p2);
        repository.save(p3);
        assertEquals(3, repository.count());
    }
    @Test
    void checkProjectIdentifierQuery() {
        Project p1 = new Project();
        String pid = "abcde";
        p1.setProjectIdentifier(pid);
        p1.setProjectName("My super big project");
        manager.persist(p1);
        manager.flush();
        Project queriedProject = repository.findByProjectIdentifier(pid);
        assertThat(queriedProject.getProjectName()).isEqualTo(p1.getProjectName());
        //assertThat(queriedProject.getProjectName()).isEqualTo(p1.getProjectName().toUpperCase(Locale.ROOT));
    }
}