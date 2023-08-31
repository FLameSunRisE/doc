# Daily Learn

- [Daily Learn](#daily-learn)
  - [Schedule](#schedule)
  - [演算法](#演算法)
  - [開發遇到的問題](#開發遇到的問題)
  - [後端](#後端)
    - [後端知識 - 設計模式](#後端知識---設計模式)
    - [後端實作](#後端實作)
    - [後端面試題](#後端面試題)
  - [前端](#前端)
  - [| 2023-08-31 | css   | Css float                                          |](#-2023-08-31--css----css-float------------------------------------------)
    - [前端面試題](#前端面試題)
  - [前端實作](#前端實作)
  - [| 2023-08-31 | Frontend、css         | LAB-金魚腦課程學習                      |](#-2023-08-31--frontendcss----------lab-金魚腦課程學習----------------------)
  - [問題整理](#問題整理)
  - [TODO 待整理學習的問題](#todo-待整理學習的問題)

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
| 2023-03-23  | 網站內容 | [Refactor](./refactiror/)                     | [翻譯 refactor.guru 網站內容](./book/refactor.md)                                                |
| 2023-03-24  | 理論     | [Backend Spring](./backend/java/spring/)      | [常見的依賴注入 (DI) 的方式](./backend/interview/SpringQuestion.md#q常見的依賴注入-di-的方式)    |
| 2023-03-25  | 網路     | [API](./backend/api/api.md)                   | [RESTful API](./backend/api/api.md#restful-api---representational-state-transfer-表現層狀態轉移) |
| 2023-03-26  | 理論     | [MessageQueue](./backend/mq/message-queue.md) | [MessageQueue 介紹](./backend/mq/message-queue.md)                                               |
| 2023-04-01  | 演算法   | [Algo](./algo/)                               | [Euclidean algorithm](./algo/algo.md#輾轉相除法歐幾里得算法)                                     |
| 2023-06-29  | API      | [API](./backend/api)                          | [同步呼叫與非同步呼叫](./algo/algo.md#輾轉相除法歐幾里得算法)                                    |

---

## 演算法

| Date       | Type            | Tech Category              | Title                                     |
| ---------- | --------------- | -------------------------- | ----------------------------------------- |
| 2023-03-22 | [Algo](./algo/) | [基本演算法](./algo/)      | [Moore voting algorithm](./algo//algo.md) |
| 2023-06-08 | [Algo](./algo/) | [排序演算法](./algo/sort/) | [Quickselect 算法](./algo/algo.md)        |

---

## 開發遇到的問題

| Date       | Category          | Title                                                                                                                       |
| ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 2023-01-20 | [Spring](#spring) | [Spring Security-WebSecurityConfigurerAdapter 棄用問題](backend/java/spring/devlog.md#websecurityconfigureradapter棄用問題) |
| 2023-03-22 | [Maven](#Maven)   | [maven-下載檔案時無法下載](backend/java/spring/maven.md#maven-下載檔案時無法下載)                                           |
| 2023-03-27 | [Devops](#Azure)  | [azure board 如何快速新增 work items](devops/azure/azureDevops.md)                                                          |
| 2023-03-29 | [Spring](#Spring) | [Spring boot 僅執行 junit 方式](backend/java/spring/test/junit.md#spring-boot-僅執行-junit-方式)                            |

---

## 後端

### 後端知識 - 設計模式

| Date       | Category                                         | Title                                                                                                  |
| ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 2023-04-28 | [Design Pattern](./system/designPattern/read.md) | [SOLID(設計模式)](./system/designPattern/read.md#design-pattern)                                       |
| 2023-05-03 | [Design Pattern](./system/designPattern/read.md) | [Factor Pattern(工廠模式)](./system/designPattern/creationalPattern/factory.md#factor-pattern工廠模式) |
| 2023-05-04 | [Design Pattern](./system/designPattern/read.md) | [Singleton Pattern (單例模式)](./system/designPattern/creationalPattern/singleton.md)                  |
| 2023-05-06 | [Design Pattern](./system/designPattern/read.md) | [Builder（建造者模式）](./system/designPattern/builderPattern.md)                                      |
| 2023-05-07 | [Design Pattern](./system/designPattern/read.md) | [Proxy Pattern（代理模式）](./system/designPattern/proxyPattern.md)                                    |

### 後端實作

| Date       | Category                                         | Title                                                                                                            |
| ---------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 2023-03-28 | [Message Queue](./backend/mq/)                   | [實作 activeMQ](./backend/mq/activeMQ.md)                                                                        |
| 2023-03-29 | [Spring](./backend/java/spring)                  | [Spring boot 如何使用排程](./backend/java/spring/task.md)                                                        |
| 2023-04-14 | [Spring](./backend/java/spring)                  | [mongodb + spring boot 實作](./backend/java/spring/impl/mongodb.md#mongodb--spring-實作)                         |
| 2023-06-05 | [Design Pattern](./system/designPattern/read.md) | [Design Pattern-lab1-File-writer-lab](https://github.com/FLameSunRisE/design-pattern-learning#1-file-writer-lab) |
| 2023-06-10 | [gRPC](./backend/api/gRPC.md)                    | [gRPC lab1-gRPC Demo 專案](https://github.com/FLameSunRisE/grpc-lab/blob/main/doc/lab1_grpc_demo_simple.md)      |
| 2023-06-22 | [Spring](./backend/java/spring)                  | [LAB1- TODO LIST(api))](https://github.com/FLameSunRisE/cloud-lab/tree/main/lab/lab1)                            |
| 2023-07-17 | [Spring](./backend/java/spring)                  | [lab - Spring security + jwt)](https://github.com/FLameSunRisE/)                                                 |

### 後端面試題

| Date       | Category                       | Title                                                                                                                                               |
| ---------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2023-04-28 | [Backend](./backend/)          | [深拷贝 vs 浅拷贝](./backend/java/javaQuestion.md#q深拷贝-vs-浅拷贝)                                                                                |
| 2023-04-30 | [Backend](./backend/)          | [Interceptor vs filter](./backend/java/javaQuestion.md#qinterceptor-vs-filter)                                                                      |
| 2023-04-30 | [Backend](./backend/)          | [SQL、NOSQL、Redis 應用場景](./db/question.md#qsqlnosqlredis-應用場景)                                                                              |
| 2023-06-11 | [Backend-Java](./backend/java) | [LinkedHashMap、ConcurrentHashMap、HashMap 和 TreeMap 區別](./backend/java/javaQuestion.md#q-linkedhashmapconcurrenthashmaphashmap-和-treemap-區別) |
| 2023-06-12 | [Backend-Java](./backend/java) | [Spring 如何防止 SQL 注入](./backend/java/javaQuestion.md#qspring-如何防止-sql-注入)                                                                |
| 2023-06-12 | [Backend-Java](./backend/java) | [Spring IoC 的流程](./backend/java/javaQuestion.md)                                                                                                 |
| 2023-06-12 | [Backend-Java](./backend/java) | [BeanFactory 和 FactoryBean 的區別](./backend/java/javaQuestion.md)                                                                                 |
| 2023-06-12 | [Backend-Java](./backend/java) | [TreeMap 介紹](./backend/java/javaQuestion.md)                                                                                                      |
| 2023-06-19 | [DB](./db/)                    | [為何不能使用 select \*](./db/question#q-為何不能使用-select)                                                                                       |
| 2023-06-19 | [DB](./db/)                    | [SQL 的最左匹配原则](./db/core.md#sql-的最左匹配原则)                                                                                               |
| 2023-06-19 | [DB](./db/)                    | [如何解讀 explain 的資料](./db/core.md#如何解讀-explain-的資料)                                                                                     |
| 2023-06-19 | [DB](./db/)                    | [聚集索引和非聚集索引(clustered index and secondary index)](./db/core.md#聚集索引和非聚集索引clustered-index-and-secondary-index)                   |
| 2023-06-20 | [Devops](./devops/)            | [gitlab 如何在 merge code 的時候自動觸發 CICD](./devops/devopsQuestion.md#qgitlab-如何在-merge-code-的時候自動觸發-cicd)                            |
| 2023-06-20 | [Devops](./devops/)            | [pipline 的 job 代表的涵義](./devops/devopsQuestion.md#qpipline-的-job-代表的涵義)                                                                  |
| 2023-06-20 | [Devops](./devops/)            | [gitlab-runner 跟 gitlab-pipline 的關係](./devops/devopsQuestion.md#qgitlab-runner-跟-gitlab-pipline-的關係)                                        |
| 2023-06-20 | [Backend-Java](./backend/java) | [Thread 和 Runnable 的區別](./backend/java/javaQuestion.md#qthread-和-runnable-的區別)                                                              |
| 2023-07-11 | [Backend-Java](./backend/java) | [LocalDateTime 跟 Date 使用時機與比較](./backend/java/javaQuestion.md#qlocaldatetime-跟-date-使用時機與比較)                                        |

---

## 前端

| Date       | Category                | Title                                                                                         |
| ---------- | ----------------------- | --------------------------------------------------------------------------------------------- |
| 2023-04-15 | [frontend](./frontend/) | [第三方 Cookie 為何要取得使用者資料](./frontend/basic.md#q第三方-cookie-為何要取得使用者資料) |
| 2023-04-20 | [vue](./frontend/vue/)  | [MVVM(Model-View-ViewModel)](./frontend/vue/core.md#mvvmmodel-view-viewmodel)                 |
| 2023-04-21 | [vue](./frontend/vue/)  | [生命週期](./frontend/vue/core.md#生命週期)                                                   |
| 2023-08-30 | [css](./frontend/css)   | [Css specificity](./frontend/css/basic/css_basic_specificity.md)                              |
| 2023-08-30 | [css](./frontend/css)   | [Css model](./frontend/css/basic/css_basic_boxmodel.md)                                       |
| 2023-08-31 | [css](./frontend/css)   | [Css float](./frontend/css/basic/css_basic_float.md)                                          |
---

### 前端面試題

| Date       | Category              | Title                                                                                                   |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| 2023-08-30 | [css](./frontend/css) | [Css 選擇器的優先級是如何計算的](./frontend/interview/css_interview.md#qcss-選擇器的優先級是如何計算的) |
| 2023-08-30 | [css](./frontend/css) | [Box model 是什麼](./frontend/interview/css_interview.md#qcss-盒模型是什麼)                             |

---

## 前端實作

| Date       | Category                                       | Title                                                                                                                                    |
| ---------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 2023-06-22 | [Frontend](./frontend/), [Image Recognition]() | [OpenCV 魔術棒邊緣檢測(nextjs-opencv-lab1)](https://github.com/FLameSunRisE/image-recognition-lab/tree/main/frontend/nextjs-opencv-lab1) |
| 2023-06-22 | [Frontend](./frontend/)、[React]()             | [LAB1- TODO LIST(Nextjs))](https://github.com/FLameSunRisE/cloud-lab/tree/main/lab/lab1)                                                 |
| 2023-08-31 | [Frontend](./frontend/)、[css](./css/)         | [LAB-金魚腦課程學習](https://github.com/FLameSunRisE/frontend-lab/blob/main/css/css-lab/goldfish-css-lab/readme.md)                      |
---

## 問題整理

| Date       | Category                           | Title                                                                                                                     |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 2023-03-28 | [ActiveMq](./backend/mq/)          | [MQ-使用 MQ 的場景](./backend/mq/mqQuestion.md#q-使用-mq-的場景)                                                          |
| 2023-04-11 | [Database](./db/)                  | [樂觀鎖和悲觀鎖是什麼](./db/question.md#q樂觀鎖和悲觀鎖是什麼)                                                            |
| 2023-04-11 | [Database](./db/)                  | [悲觀鎖是否會發生 dirty read](./db/question.md#q悲觀鎖是否會發生-dirty-read)                                              |
| 2023-04-11 | [System](./system/)                | [分散式系統如何收集 log](./system/systemQuestion.md#q分散式系統如何收集-log)                                              |
| 2023-04-11 | [Spring](./backend/java/spring/)   | [Spring 的 DI 是如何做到的](./backend/java/spring/springQuestion.md#qspring的di是如何做到的)                              |
| 2023-04-11 | [情境問題](./backend/interview)    | [第三方登入機制如何運作 oauth](./backend/interview/situationQuestion.md#第三方登入機制如何運作oauth)                      |
| 2023-03-28 | [MQ](./backend/mq/)                | [MQ-為何要選用 Kafka,它的優點是?](./backend/mq/mqQuestion.md#q-為何要選用-kafka它的優點是)                                |
| 2023-04-18 | [Thread](./backend/java/thread.md) | [Thread-concurrency(併發)](./backend/java/thread.md#q-thread-concurrency併發)                                             |
| 2023-04-18 | [Thread](./backend/java/thread.md) | [Thread 中如何使用 Lock](./backend/java/thread.md#q-thread-中如何使用-lock)                                               |
| 2023-04-19 | [Database](./db/)                  | [SQL 如何優化](./db/question.md#qsql-如何優化)                                                                            |
| 2023-04-20 | [Vue](./frontend/vue/)             | [v-show vs v-if](./frontend/vue/question.md#qv-show-vs-v-if)                                                              |
| 2023-04-20 | [Vue](./frontend/vue/)             | [Vue 實例掛載過程](./frontend/vue/question.md#q-vue-實例掛載過程)                                                         |
| 2023-04-21 | [MQ](./backend/mq/)                | [MQ-Kafka 效率上為何比 RabbitMQ 高嗎?](./backend/mq/mqQuestion.md#q3kafka效率上為何比rabbitmq高嗎)                        |
| 2023-04-21 | [MQ](./backend/mq/)                | [MQ-Kafka 分佈式的消息系統架構](./backend/mq/mqQuestion.md#q-kafka-分佈式的消息系統架構)                                  |
| 2023-04-21 | [MQ](./backend/mq/)                | [MQ 掛掉時如何避免資料遺失](./backend/mq/MessageQueue.md#mq-掛掉時如何避免資料遺失)                                       |
| 2023-04-22 | [Database](./db/)                  | [sql index 的種類(Cluster index / non-cluster index)](./db/question.md#qsql-index-的種類cluster-index--non-cluster-index) |

---

## TODO 待整理學習的問題

1. java- PriorityQueue 用法

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
