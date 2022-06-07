# Spring學習之路
- [Spring學習之路](#spring學習之路)
  - [核心概念](#核心概念)
    - [Spring Module介紹](#spring-module介紹)
      - [Spring Core：](#spring-core)
      - [Spring AOP (Aspect Orientation Programming)](#spring-aop-aspect-orientation-programming)
    - [控制反轉 (IOC)與依賴注入 (DI)關係](#控制反轉-ioc與依賴注入-di關係)
    - [控制反轉 (IOC)](#控制反轉-ioc)
    - [依賴注入 (DI)](#依賴注入-di)
    - [資料來源:](#資料來源)

## 核心概念

### Spring Module介紹

![Overview of the Spring Framework](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/images/spring-overview.png)
#### Spring Core： 
>Spring core是核心層，擁有這BeanFactory這個強大的工廠，是所有bean的管理器； 而spring context是上下文執行環境，基於spring core之上的一個架構， 它之上是spring web，這下明白了吧，主要應用就是web的一個初始化上下文環境；

- 組成:
  - jar:
    - spring-core
      - 提供IoC和DI（Dependency Injection）的主要jar包
    - spring-beans
      - 提供BeanFactory，是一個工廠模式(Factory Pattern)的一個經典實現
      - 所有代管對象皆為Bean。
    - spring-context
      - 建立在Core和Beans模組的基礎上
      - 採用JNDI技術讀取bean物件
      - ApplicationContext的主要支援庫
        - 無論採用何種方式取得Bean，都須透過BeanFactory的子接口ApplicationContext來實現
        - 讀取beans.xml配置檔案和快取bean物件等
    - spring-context-support
      - 提供第三方框架向Application Context中進行預載入和快取。
        - 高速緩存(EhCache、JCache)
        - 任務調度(CommonJ、Quartz)
        - 事務調度(Spring-JPA、Spring-data-mongodb及Spring-boot-starter-redis)
    - spring-expression
      - 提供強大的表達式語言去支持運作時查詢和操作對象
      - 該語言支持設置和獲取屬性值、屬性配置、方法調用、訪問數據、集合和索引氣的內容、邏輯和算數邏輯、變量命名及Spring的IoC容器中以名稱檢索對象。


#### Spring AOP (Aspect Orientation Programming)
> 提供一個符合ＡＯＰ要求的面向式切面的編譯實例，允許定義方法攔截器的切入點。將代碼按照功能進行分離，已變乾淨的分開各類程式邏輯區段，降低耦合性。

- 介紹
  - 目的 : 是將許多方法的共同行為抽離出來
- 應用場景:
  - 針對重複性質的工作進行處理: 紀錄log, 安全檢查
    - 從原方法中分離出來
- Module
  -  Spring-aspects模組
     - 提供了AspectJ的整合功能
       - AspectJ是一個基於Java語言的AOP框架
       - 行為: 
         - Before
         - After Returning
         - Around
         - After Throwing
         - After
         - Declare parents
  -  Spring-instrument模組
     -  提供類植入(Instrumentation)支持和類別加載器的實現，可在特定的應用服務器中使用。



<!-- **Spring Aspects ** ： 該模塊為與AspectJ的集成提供支持。
Spring AOP ：提供了面向方面的編程實現。
Spring JDBC : Java數據庫連接。
Spring JMS ：Java消息服務。
Spring ORM : 用於支持Hibernate等ORM工具。
Spring Web : 為創建Web應用程序提供支持。
Spring Test : 提供了對 JUnit 和 TestNG 測試的支持。 -->

### 控制反轉 (IOC)與依賴注入 (DI)關係

- 控制反轉 :
  - 目標
  - 一種解耦合的思想
  - 控制權授予容器(由容器決定注入的物件)
- 依赖注入 : 
  - 設計模式(實現IOC的手段)

### 控制反轉 (IOC)
   - 說明:
     - 是一種物件導向程式中的設計原則，用來降低code之間的耦合度
     - 基本理念: 借助第三方實現物件之間具有依賴關係的解耦
       - 以Spring為例子就是透過BeanFactory(Interface)為spring Ioc容器中的核心接口
       - Object之間的關係由容器建立與維護，將開發者做的事給容器做，就是IOC
    - 圖示:
      - IOC前
        - ![before IOC](/src/img/backend/java/sprinng/java_spring_proper_1_beforeIoc.jpg)
      - ICO後
        - ![after IOC](/src/img/backend/java/sprinng/java_spring_proper_1_afterIoc.jpg)
    

### 依賴注入 (DI)

   - 說明:
     - 將實例變數傳入物件中(Dependency injection means giving an object its instance variables)

   - 使用場景
     - Spring
       - 容器通過set方式或constructor來建立物件之間的依賴關係
       - 範例
         1. 根據xml產稱ApplicationContent (IOC容器)
         2. 透過容器取得實例
          ```java
          public void testWithSpring() throws Exception {
              ApplicationContext ctx = new FileSystemXmlApplicationContext("spring.xml");//1
              MovieLister lister = (MovieLister) ctx.getBean("MovieLister");//2
              Movie[] movies = lister.moviesDirectedBy("Sergio Leone");
              assertEquals("Once Upon a Time in the West", movies[0].getTitle());
          }
          ```
     - 非Spring
       - 範例:
          - 將father作為constructor的參數傳入，在使用Human的constructor方法之前就需要初始化father這個物件。
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


### 資料來源:
- 核心概念
  - spring module
    - [spring-framework官方文件](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/overview.html)
    - spring core
      - [Spring框架（一）簡單介紹
](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/527319/)
    - spring aop
      - [【Spring Boot】第20課－切面導向程式設計（AOP）](https://chikuwa-tech-study.blogspot.com/2021/06/spring-boot-aop-introduction.html)
    - other:
      - [Spring Framework Introduction](https://ithelp.ithome.com.tw/articles/10266484)
  - IOC/DI
    - [控制反转（IoC）与依赖注入（DI）](https://www.jianshu.com/p/07af9dbbbc4b)
    - [什么是控制反转（IOC），什么是依赖注入（DI）](https://www.w3cschool.cn/fisug/fisug-5pot2g5k.html)
