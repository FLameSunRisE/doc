# Daily Learn

- [Daily Learn](#daily-learn)
  - [Schedule](#schedule)
  - [開發遇到的問題](#開發遇到的問題)
  - [前端](#前端)
  - [實作過程](#實作過程)
  - [問題整理](#問題整理)
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
| 2023-03-22  | 演算法   | [Algo](./algo/)                               | [Moore voting algorithm](./algo//algo.md)                                                        |
| 2023-03-23  | 網站內容 | [Refactor](./refactiror/)                     | [翻譯 refactor.guru 網站內容](./book/refactor.md)                                                |
| 2023-03-24  | 理論     | [Backend Spring](./backend/java/spring/)      | [常見的依賴注入 (DI) 的方式](./backend/interview/SpringQuestion.md#q常見的依賴注入-di-的方式)    |
| 2023-03-25  | 網路     | [API](./backend/api/api.md)                   | [RESTful API](./backend/api/api.md#restful-api---representational-state-transfer-表現層狀態轉移) |
| 2023-03-26  | 理論     | [MessageQueue](./backend/mq/message-queue.md) | [MessageQueue 介紹](./backend/mq/message-queue.md)                                               |
| 2023-04-01  | 演算法   | [Algo](./algo/)                               | [Euclidean algorithm](./algo/algo.md#輾轉相除法歐幾里得算法)                                     |
| 2023-04-11  | 理論     | [Backend Spring](./backend/java/spring/)      | [XXXX](./backend/java/spring/)                                                                   |
| 2023-03-XX  | 理論     | [Backend Spring](./backend/java/spring/)      | [XXXX](./backend/java/spring/)                                                                   |

---

## 開發遇到的問題

| Date       | Category          | Title                                                                                                                       |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 2023-01-20 | [Spring](#spring) | [Spring Security-WebSecurityConfigurerAdapter 棄用問題](backend/java/spring/devlog.md#websecurityconfigureradapter棄用問題) |
| 2023-03-22 | [Maven](#Maven)   | [maven-下載檔案時無法下載](backend/java/spring/maven.md#maven-下載檔案時無法下載)                                           |
| 2023-03-27 | [Devops](#Azure)  | [azure board 如何快速新增 work items](devops/azure/azureDevops.md)                                                          |
| 2023-03-29 | [Spring](#Spring) | [Spring boot 僅執行 junit 方式](backend/java/spring/test/junit.md#spring-boot-僅執行-junit-方式)                            |

---

## 前端

| Date       | Category                | Title                                                                                         |
| ---------- | ----------------------- | --------------------------------------------------------------------------------------------- |
| 2023-04-15 | [frontend](./frontend/) | [第三方 Cookie 為何要取得使用者資料](./frontend/basic.md#q第三方-cookie-為何要取得使用者資料) |

---

## 實作過程

| Date        | Category                                            | Title                                                                                    |
| ----------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 2023-03-28  | [ActiveMq](./backend/mq/)                           | [實作 activeMQ](./backend/mq/activeMQ.md)                                                |
| 2023-03-29  | [Spring](./backend/java/spring)                     | [Spring boot 如何使用排程](./backend/java/spring/task.md)                                |
| 2023-04-07  | [Spring](./backend/java/spring)                     | [Spring boot 如何使用排程](./backend/java/spring/task.md)                                |
| 2023-04-014 | [mongodb + spring boot 實作](./backend/java/spring) | [mongodb + spring boot 實作](./backend/java/spring/impl/mongodb.md#mongodb--spring-實作) |

---

## 問題整理

| Date       | Category                         | Title                                                                                                |
| ---------- | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 2023-03-28 | [ActiveMq](./backend/mq/)        | [MQ-使用 MQ 的場景](./backend/mq/mqQuestion.md#q1-使用-mq-的場景)                                    |
| 2023-04-11 | [Database](./db/)                | [樂觀鎖和悲觀鎖是什麼](./db/question.md#q樂觀鎖和悲觀鎖是什麼)                                       |
| 2023-04-11 | [Database](./db/)                | [悲觀鎖是否會發生 dirty read](./db/question.md#q悲觀鎖是否會發生-dirty-read)                         |
| 2023-04-11 | [System](./system/)              | [分散式系統如何收集 log](./system/systemQuestion.md#q分散式系統如何收集-log)                         |
| 2023-04-11 | [Spring](./backend/java/spring/) | [Spring 的 DI 是如何做到的](./backend/java/spring/springQuestion.md#qspring的di是如何做到的)         |
| 2023-04-11 | [情境問題](./backend/interview)  | [第三方登入機制如何運作 oauth](./backend/interview/situationQuestion.md#第三方登入機制如何運作oauth) |
| 2023-03-28 | [MQ](./backend/mq/)              | [MQ-為何要選用 Kafka,它的優點是?](./backend/mq/mqQuestion.md#q2-為何要選用-kafka它的優點是)                                |

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
