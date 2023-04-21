# Spring Question

- [Spring Question](#spring-question)
  - [Q.如何解決 Spring bean 的循環依賴](#q如何解決-spring-bean-的循環依賴)
    - [解決方案](#解決方案)
    - [範例](#範例)
      - [循環依賴](#循環依賴)
      - [解決方式](#解決方式)
  - [Q.Spring 的 DI 是如何做到的](#qspring-的-di-是如何做到的)
    - [介紹](#介紹)
    - [DI 的實現有三種方式](#di-的實現有三種方式)

## Q.如何解決 Spring bean 的循環依賴

指的是當兩個或多個 Bean 彼此依賴時，彼此之間形成了一個循環，導致 Spring 無法決定先創建哪一個 Bean，進而導致 Bean 創建失敗的問題。

### 解決方案

1. 使用 @Autowired 的構造方法注入
   在 Bean 的構造方法中注入其依賴的 Bean，並使用 @Autowired 注解標記該構造方法，Spring 會自動解決依賴的問題。

2. 使用 setter 方法注入
   在 Bean 中定義一個 setter 方法，注入其依賴的 Bean，並使用 @Autowired 注解標記該方法，Spring 會自動解決依賴的問題。

3. 使用 @Lazy 注解
   在 Bean 定義時，使用 @Lazy 注解標記該 Bean，延遲 Bean 的創建時間，從而解決循環依賴的問題。

4. 使用 @DependsOn 注解
   在 Bean 定義時，使用 @DependsOn 注解標記該 Bean，指定其依賴的 Bean 名稱，從而解決循環依賴的問題。

### 範例

#### 循環依賴

BeanA 依賴於 BeanB，而 BeanB 依賴於 BeanA，它們彼此形成循環依賴。這將導致在 Spring 容器啟動時出現錯誤。

```java
@Component
public class BeanA {
   private final BeanB beanB;

   @Autowired
   public BeanA(BeanB beanB) {
      this.beanB = beanB;
   }
}

@Component
public class BeanB {
   private final BeanA beanA;

   @Autowired
   public BeanB(BeanA beanA) {
      this.beanA = beanA;
   }
}
```

#### 解決方式

```java
@Component
public class BeanA {
    private BeanB beanB;
    public void setBeanB(BeanB beanB) {
        this.beanB = beanB;
    }
}
@Component
public class BeanB {
    private BeanA beanA;
    public void setBeanA(BeanA beanA) {
        this.beanA = beanA;
    }
}
```

---

## Q.Spring 的 DI 是如何做到的

當一個 Java 程序運行時，Spring 會創建一個 Spring 容器。這個容器包含了所有需要管理的對象（即 Bean），並維護它們之間的依賴關係。當程序需要某個 Bean 時，Spring 會在容器中查找並返回對應的 Bean。這種方式被稱為 Dependency Injection（依賴注入），

簡單來說，當我們需要使用一個對象時，不需要手動創建它，而是由 Spring 容器自動將對象注入到需要它的地方，這樣就可以實現對象之間的解耦和灵活配置。

### 介紹

- 通過控制反轉（IoC）實現的
- 在 Spring 中，IoC 意味著將對象的創建和管理交給 Spring 容器，而不是對象自己負責。
- Spring 容器會負責創建對象，維護對象之間的依賴關係，並將對象注入到其他對象中

### DI 的實現有三種方式

- 基於 setter 方法的依賴注入：
  在類中定義 setter 方法，Spring 容器會自動調用這些方法，將依賴對象注入到類中。
- 基於構造函數的依賴注入：
  在類中定義帶有參數的構造函數，Spring 容器會自動調用這些構造函數，將依賴對象注入到類中。
- 基於字段的依賴注入
  在類中定義帶有 @Autowired 或 @Resource 注解的字段，Spring 容器會自動注入依賴對象到這些字段中。

---
