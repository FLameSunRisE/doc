# Spring Question

- [Spring Question](#spring-question)
  - [Q.如何解決 Spring bean 的循環依賴](#q如何解決-spring-bean-的循環依賴)
  - [Q.Spring 的 DI 是如何做到的](#qspring-的-di-是如何做到的)

## Q.如何解決 Spring bean 的循環依賴

指的是當兩個或多個 Bean 彼此依賴時，彼此之間形成了一個循環，導致 Spring 無法決定先創建哪一個 Bean，進而導致 Bean 創建失敗的問題。

1. 使用 @Autowired 的構造方法注入
   在 Bean 的構造方法中注入其依賴的 Bean，並使用 @Autowired 注解標記該構造方法，Spring 會自動解決依賴的問題。

2. 使用 setter 方法注入
   在 Bean 中定義一個 setter 方法，注入其依賴的 Bean，並使用 @Autowired 注解標記該方法，Spring 會自動解決依賴的問題。

3. 使用 @Lazy 注解
   在 Bean 定義時，使用 @Lazy 注解標記該 Bean，延遲 Bean 的創建時間，從而解決循環依賴的問題。

4. 使用 @DependsOn 注解
   在 Bean 定義時，使用 @DependsOn 注解標記該 Bean，指定其依賴的 Bean 名稱，從而解決循環依賴的問題。

## Q.Spring 的 DI 是如何做到的

- 通過控制反轉（IoC）實現的
- 在 Spring 中，IoC 意味著將對象的創建和管理交給 Spring 容器，而不是對象自己負責。
- Spring 容器會負責創建對象，維護對象之間的依賴關係，並將對象注入到其他對象中

- DI 的實現有三種方式
  - 基於 setter 方法的依賴注入：
    在類中定義 setter 方法，Spring 容器會自動調用這些方法，將依賴對象注入到類中。
  - 基於構造函數的依賴注入：
    在類中定義帶有參數的構造函數，Spring 容器會自動調用這些構造函數，將依賴對象注入到類中。
  - 基於字段的依賴注入
    在類中定義帶有 @Autowired 或 @Resource 注解的字段，Spring 容器會自動注入依賴對象到這些字段中。
