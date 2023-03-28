# Daily Learn

- [Daily Learn](#daily-learn)
  - [Schedule](#schedule)
  - [開發遇到的問題](#開發遇到的問題)
  - [實作過程](#實作過程)
  - [TODO](#todo)

## Schedule

| Date        | Type     | Tech Category                                 | Title                                                                                            |
| ----------- | -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 2022-07-25  | 理論     | [Backend](#Backend)                           | [Session、Cookie、Token](./backend/core/core.md#Session-Cookie-Token)                            |
| 2022-07-25  | 理論     | [Frontend Question](#Frontend)                | [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#backend_q_1)                  |
| 2022-07-26  | 理論     | [Backend Learn](#Backend-Learn)               | [buffer pool 緩衝池](./backend/java/core.md#backend_java_core_buffer_pool)                       |
| 2022-07-27  | 理論     | [Java core](./backend/java/core.md)           | [Java String 介紹](./backend/java/core.md#backend_java_core_string_intro)                        |
| 2022-07-27  | 理論     | [Java core](./backend/java/core.md)           | [String Pool](./backend/java/core.md#backend_java_core_string_pool)                              |
| 2022-07-28  | 理論     | [Java core](./backend/java/core.md)           | [OAuth](#OAuth)                                                                                  |
| 2023-01-19  | 理論     | [Backend](#Backend),[Spring](#Spring)         | [Spring Security](#Spring_Security)                                                              |
| 2023-01-TBD | Devops   | [CICD](#CICD)                                 | [Gitlab-runner](#)                                                                               |
| 2023-01-21  | 實作     | [Backend Spring](./backend/java/spring/)      | [Spring boot + thymeleaf](./backend/java/spring/devlog.md#spring-boot-thymeleaf實作)             |
| 2023-03-21  | 理論     | [Backend Spring](./backend/java/spring/)      | [Cucumber 介紹](./backend/java/spring/test/cucumber.md)                                          |
| 2023-03-22  | 演算法   | [Backend Spring](./algo/)                     | [Moore voting algorithm](./algo//algo.md)                                                        |
| 2023-03-23  | 網站內容 | [Refactor](./refactiror/)                     | [翻譯 refactor.guru 網站內容](./book/refactor.md)                                                |
| 2023-03-24  | 理論     | [Backend Spring](./backend/java/spring/)      | [常見的依賴注入 (DI) 的方式](./backend/interview/SpringQuestion.md#q常見的依賴注入-di-的方式)    |
| 2023-03-25  | 網路     | [API](./backend/api/api.md)                   | [RESTful API](./backend/api/api.md#restful-api---representational-state-transfer-表現層狀態轉移) |
| 2023-03-XX  | 理論     | [MessageQueue](./backend/mq/message-queue.md) | [MessageQueue 介紹](./backend/mq/message-queue.md)                                               |
| 2023-03-XX  | 理論     | [Backend Spring](./backend/java/spring/)      | [XXXX](./backend/java/spring/)                                                                   |

---

## 開發遇到的問題

| Date       | Category          | Title                                                                                                                       |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 2023-01-20 | [Spring](#spring) | [Spring Security-WebSecurityConfigurerAdapter 棄用問題](backend/java/spring/devlog.md#websecurityconfigureradapter棄用問題) |
| 2023-03-22 | [Maven](#Maven)   | [maven-下載檔案時無法下載](backend/java/spring/maven.md#maven-下載檔案時無法下載)                                           |
| 2023-03-27 | [Devops](#Azure)  | [azure board 如何快速新增 work items](devops/azure/azureDevops.md)                                                          |

---

## 實作過程

| Date       | Category                  | Title                                     |
| ---------- | ------------------------- | ----------------------------------------- |
| 2023-03-28 | [ActiveMq](./backend/mq/) | [實作 activeMQ](./backend/mq/activeMQ.md) |

## TODO

<!--
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
    `docker rmi $(docker images -a -q)` -->
