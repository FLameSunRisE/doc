# Daily Learn

- [Daily Learn](#daily-learn)
  - [Schedule](#schedule)
  - [開發遇到的問題](#開發遇到的問題)
  - [TODO](#todo)
      - [GitLab](#gitlab)
        - [Gitlab-runner](#gitlab-runner)

## Schedule

| Date        | Type   | Tech Category                            | Title                                                                                 |
| ----------- | ------ | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 2022-07-25  | 理論   | [Backend](#Backend)                      | [Session、Cookie、Token](./backend/core/core.md#Session-Cookie-Token)                 |
| 2022-07-25  | 理論   | [Frontend Question](#Frontend)           | [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#backend_q_1)       |
| 2022-07-26  | 理論   | [Backend Learn](#Backend-Learn)          | [buffer pool 緩衝池](./backend/java/core.md#backend_java_core_buffer_pool)            |
| 2022-07-27  | 理論   | [Java core](./backend/java/core.md)      | [Java String 介紹](./backend/java/core.md#backend_java_core_string_intro)             |
| 2022-07-27  | 理論   | [Java core](./backend/java/core.md)      | [String Pool](./backend/java/core.md#backend_java_core_string_pool)                   |
| 2022-07-28  | 理論   | [Java core](./backend/java/core.md)      | [OAuth](#OAuth)                                                                       |
| 2023-01-19  | 理論   | [Backend](#Backend),[Spring](#Spring)    | [Spring Security](#Spring_Security)                                                   |
| 2023-01-TBD |        | [CICD](#CICD)                            | [Gitlab-runner](#)                                                                    |
| 2023-01-21  | 實作   | [Backend Spring](./backend/java/spring/) | [Spring boot + thymeleaf ](./backend/java/spring/devlog.md#spring-boot-thymeleaf實作) |
| 2023-03-21  | 理論   | [Backend Spring](./backend/java/spring/) | [Cucumber 介紹 ](./backend/java/spring/test/cucumber.md)                              |
| 2023-03-22  | 演算法 | [Backend Spring](./backend/java/spring/) | [Moore voting algorithm](./backend/java/spring/)                                      |
| 2023-03-XX  | 理論   | [Backend Spring](./backend/java/spring/) | [XXXX](./backend/java/spring/)                                                        |

---

## 開發遇到的問題

| Date       | Category          | Title                                                                                                                       |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 2023-01-20 | [Spring](#spring) | [Spring Security-WebSecurityConfigurerAdapter 棄用問題](backend/java/spring/devlog.md#websecurityconfigureradapter棄用問題) |

---

## TODO

#### [GitLab](#gitlab)

##### Gitlab-runner

- docker 指令

  - 查詢現在運行的 container
    `docker ps -a`

  - Remove container

    - Stop all containers
      `docker stop $(docker ps -a -q)`
    - Remove all containers
      `docker rm $(docker ps -a -q)`

  - 移除所有未使用的 Docker 項目
    `docker system prune`

  - remove 所有 image
    `docker rmi $(docker images -a -q)`
