package com.uuu.fullstack.BackendLab1;

import com.uuu.fullstack.BackendLab1.beans.Project;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

public class BeanValidateTest {
    private static Validator validator;

    @BeforeAll
    static void beforeAll() {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Test
    void testEmptyBean() {
        Project p = new Project();
        Set<ConstraintViolation<Project>> violations = validator.validate(p);
        assertThat(violations.size()).isEqualTo(3);
    }

    @Test
    void testBeanIdentifier() {
        Project p = new Project();
        p.setProjectIdentifier("abc");
        Set<ConstraintViolation<Project>> violations = validator.validate(p);
        assertThat(violations.size()).isEqualTo(3);
    }

    @Test
    void testBeanValid() {
        Project p = new Project();
        p.setProjectName("hello project");
        p.setDescription("xxxzzzzz");
        p.setProjectIdentifier("abc123123");
        Set<ConstraintViolation<Project>> violations = validator.validate(p);
        assertThat(violations.size()).isEqualTo(0);

    }
}