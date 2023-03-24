# Spring 面試題整理

- [Spring 面試題整理](#spring-面試題整理)
  - [Spring 核心知識](#spring-核心知識)
    - [Q.常見的依賴注入 (DI) 的方式](#q常見的依賴注入-di-的方式)

---

## Spring 核心知識

### Q.常見的依賴注入 (DI) 的方式

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
