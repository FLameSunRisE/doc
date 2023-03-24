# Spring 學習之路

- [Spring 學習之路](#spring-學習之路)
  - [核心概念](#核心概念)
    - [Spring Module 介紹](#spring-module-介紹)
      - [Spring Core](#spring-core)
      - [Spring AOP (Aspect Orientation Programming)](#spring-aop-aspect-orientation-programming)
    - [控制反轉 (IOC)與依賴注入 (DI)關係](#控制反轉-ioc與依賴注入-di關係)
      - [控制反轉 (IOC)](#控制反轉-ioc)
      - [依賴注入 (DI)](#依賴注入-di)
        - [Q:可以使用那些方式進行依賴注入 (DI)](#q可以使用那些方式進行依賴注入-di)
    - [Bean](#bean)
      - [介紹](#介紹)
      - [如何配置](#如何配置)
    - [資料來源](#資料來源)

## 核心概念

### Spring Module 介紹

![Overview of the Spring Framework](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/images/spring-overview.png)

#### Spring Core

> Spring core 是核心層，擁有這 BeanFactory 這個強大的工廠，是所有 bean 的管理器； 而 spring context 是上下文執行環境，基於 spring core 之上的一個架構， 它之上是 spring web，這下明白了吧，主要應用就是 web 的一個初始化上下文環境；

- 組成:
  - jar:
    - spring-core
      - 提供 IoC 和 DI（Dependency Injection）的主要 jar 包
    - spring-beans
      - 提供 BeanFactory，是一個工廠模式(Factory Pattern)的一個經典實現
      - 所有代管對象皆為 Bean。
    - spring-context
      - 建立在 Core 和 Beans 模組的基礎上
      - 採用 JNDI 技術讀取 bean 物件
      - ApplicationContext 的主要支援庫
        - 無論採用何種方式取得 Bean，都須透過 BeanFactory 的子接口 ApplicationContext 來實現
        - 讀取 beans.xml 配置檔案和快取 bean 物件等
    - spring-context-support
      - 提供第三方框架向 Application Context 中進行預載入和快取。
        - 高速緩存(EhCache、JCache)
        - 任務調度(CommonJ、Quartz)
        - 事務調度(Spring-JPA、Spring-data-mongodb 及 Spring-boot-starter-redis)
    - spring-expression
      - 提供強大的表達式語言去支持運作時查詢和操作對象
      - 該語言支持設置和獲取屬性值、屬性配置、方法調用、訪問數據、集合和索引氣的內容、邏輯和算數邏輯、變量命名及 Spring 的 IoC 容器中以名稱檢索對象。

#### Spring AOP (Aspect Orientation Programming)

> 提供一個符合ＡＯＰ要求的面向式切面的編譯實例，允許定義方法攔截器的切入點。將代碼按照功能進行分離，已變乾淨的分開各類程式邏輯區段，降低耦合性。

- 介紹
  - 目的 : 是將許多方法的共同行為抽離出來
- 應用場景:
  - 針對重複性質的工作進行處理: 紀錄 log, 安全檢查
    - 從原方法中分離出來
- Module
  - Spring-aspects 模組
    - 提供了 AspectJ 的整合功能
      - AspectJ 是一個基於 Java 語言的 AOP 框架
      - 行為:
        - Before
        - After Returning
        - Around
        - After Throwing
        - After
        - Declare parents
  - Spring-instrument 模組
    - 提供類植入(Instrumentation)支持和類別加載器的實現，可在特定的應用服務器中使用。

<!-- **Spring Aspects ** ： 該模塊為與AspectJ的集成提供支持。
Spring AOP ：提供了面向方面的編程實現。
Spring JDBC : Java數據庫連接。
Spring JMS ：Java消息服務。
Spring ORM : 用於支持Hibernate等ORM工具。
Spring Web : 為創建Web應用程序提供支持。
Spring Test : 提供了對 JUnit 和 TestNG 測試的支持。 -->

---

### 控制反轉 (IOC)與依賴注入 (DI)關係

- 控制反轉 :
  - 目標
    - 一種解耦合的思想
    - 控制權授予容器(由容器決定注入的物件)
- 依赖注入 :
  - 設計模式(實現 IOC 的手段)

#### 控制反轉 (IOC)

- 說明:
  - 是一種物件導向程式中的設計原則，用來降低 code 之間的耦合度
  - 核心思想:
    - 借助第三方實現物件之間具有依賴關係的解耦
    - 將對象的創建和對象之間的關係交給外部容器負責，從而達到解耦的效果。
  - Example:
    - 以 Spring 為例子就是透過 BeanFactory(Interface)為 spring Ioc 容器中的核心接口
    - Object 之間的關係由容器建立與維護，將開發者做的事給容器做，就是 IOC

- 優點:
  - 最小化應用程式的code量
  - 使應用程式易於測試，因為它不需要單元測試用例中的任何單例或 JNDI 查找機制
  - 以最小的影響和侵入機制促進解耦合
  - 支持及時實例化和延遲加載服務

- 如何使用

  通過一個容器來控制對象的生命週期。容器可以通過配置文件、注解等方式來決定對象的創建和管理方式，從而達到對系統進行可配置、可擴展的設計效果。

- 圖示

  - IOC 前
    - ![afterIoc](/src/img/backend/java/sprinng/java_spring_proper_1_afterIoc.jpg)
    - ![before IOC](/src/img/backend/java/sprinng/java_spring_proper_1_beforeIoc.jpg)
  - ICO 後
    - ![after IOC](/src/img/backend/java/sprinng/java_spring_proper_1_afterIoc.jpg)

- 舉例:
  - BeanFactory
    - 包含 bean 集合的工廠，會在被要求時 implement bean
  - ApplicationContext
    - ApplicationContext 拓展了 BeanFactory 接口

---

#### 依賴注入 (DI)

- 說明:

  - 將實例變數傳入物件中(Dependency injection means giving an object its instance variables)
- 核心思想
  - 將對象的依賴關係通過外部容器來注入。
  - 對象不再負責自己依賴對象的創建和管理，而是通過外部容器來進行依賴的注入。
  - 通常有三種：setter注入、構造函數注入和接口注入。
- 常見的依賴注入 (DI) 的方式
  - 建構子注入(Constructor Injection)：透過建構子注入物件所需的相依性
    - Example1:
      - 將 father 作為 constructor 的參數傳入，在使用 Human 的 constructor 方法之前就需要初始化 father 這個物件。
      - 非自己主動初始化依賴，而通過外部傳入依賴的方式稱為依賴注入

        ```java
        public class Human {
            ...
            Father father;
            ...
            public Human(Father father) {
                this.father = father;
            }
        }
        ```

    - Example2:
      - 假設有一個 Service 類別，需要使用到一個 Repository 類別，可以透過建構子注入 Repository 類別的實例

        ```java
        public class Service {
          private Repository repository;
          
          public Service(Repository repository) {
              this.repository = repository;
          }
        }
        ```
  
  - 屬性注入(Property Injection)：透過屬性的方式注入相依性。
    - Example: 假設有一個 Service 類別，需要使用到一個 Repository 類別，可以透過屬性注入 Repository 類別的實例

      ```java
      public class Service {
          @Autowired
          private Repository repository;
          
          // ...
      }
      ```

  - 方法注入(Method Injection)：透過方法的方式注入相依性。
    - Example:假設有一個 Service 類別，需要使用到一個 Repository 類別，可以透過方法注入 Repository 類別的實例

      ```java
      public class Service {
          private Repository repository;
          
          @Autowired
          public void setRepository(Repository repository) {
              this.repository = repository;
          }
          // ...
      }
      ```

  - 接口注入(Interface Injection)：透過介面的方式注入相依性。
    - Example:假設有一個 Service 類別，需要使用到一個 Repository 類別，可以透過一個介面 IRepo，並在 Service 類別中實作該介面

      ```java
      public interface IRepo {
          // ...
      }

      public class Repository implements IRepo {
          // ...
      }

      public class Service implements IRepo {
          private IRepo repo;
          
          public void setRepo(IRepo repo) {
              this.repo = repo;
          }
          
          // ...
      }
      ```

  - 補充
    - 容器通過 set 方式或 constructor 來建立物件之間的依賴關係
    - Example1
      1. 根據 xml 產稱 ApplicationContent (IOC 容器)
      2. 透過容器取得實例

        ```java
        public void testWithSpring() throws Exception {
            ApplicationContext ctx = new FileSystemXmlApplicationContext("spring.xml");//1
            MovieLister lister = (MovieLister) ctx.getBean("MovieLister");//2
            Movie[] movies = lister.moviesDirectedBy("Sergio Leone");
            assertEquals("Once Upon a Time in the West", movies[0].getTitle());
        }
        ```



---

### Bean

#### 介紹

- 構成 application 主幹的 object
- bean 由 Spring IoC 容器管理
- 由 spring IoC 容器實例化、配置、裝配、管理
- Bean 是基於用戶提供給容器的配置所建立的

#### 如何配置

- xml

### 資料來源

- 核心概念
  - spring module - [spring-framework 官方文件](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/overview.html) - spring core - [Spring 框架（一）簡單介紹
    ](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/527319/) - spring aop - [【Spring Boot】第 20 課－切面導向程式設計（AOP）](https://chikuwa-tech-study.blogspot.com/2021/06/spring-boot-aop-introduction.html) - other: - [Spring Framework Introduction](https://ithelp.ithome.com.tw/articles/10266484)
  - IOC/DI
    - [控制反转（IoC）与依赖注入（DI）](https://www.jianshu.com/p/07af9dbbbc4b)
    - [什么是控制反转（IOC），什么是依赖注入（DI）](https://www.w3cschool.cn/fisug/fisug-5pot2g5k.html)
