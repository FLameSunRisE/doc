# Spring Question

- [Spring Question](#spring-question)
  - [Q.如何解決 Spring bean 的循環依賴](#q如何解決-spring-bean-的循環依賴)

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
