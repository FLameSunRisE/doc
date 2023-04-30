# Java 面試題

- [Java 面試題](#java-面試題)
  - [Core](#core)
    - [Q.深拷贝 vs 浅拷贝](#q深拷贝-vs-浅拷贝)
    - [Q.Interceptor vs filter](#qinterceptor-vs-filter)

---

## Core

### Q.深拷贝 vs 浅拷贝

- 浅拷贝
  - 只複製對象本身和對象的基本屬性，不複製對象中的引用對象，而是複製引用對象的地址。
- 深拷貝
  - 指複製對象以及對象中的所有引用對象。這樣，當原始對象或其引用對象發生變化時，複製後的對象不會受到影響。

```java
    // 浅拷贝
    public static void main(String[] args) throws CloneNotSupportedException {
        Address address = new Address("123 Main St", "Anytown");
        Person person1 = new Person("John Doe", address);
        Person person2 = (Person) person1.clone();

        // This will output true because person1 and person2 reference the same Address object
        System.out.println(person1.getAddress() == person2.getAddress()); // true

        // Let's change the street address on person1
        person1.getAddress().setStreet("456 Oak Ave");

        // Both person1 and person2 will now have the same street address, because they share the same Address object
        System.out.println(person1.getAddress().getStreet()); // "456 Oak Ave"
        System.out.println(person2.getAddress().getStreet()); // "456 Oak Ave"
    }
    // 使用深拷貝
    Address address = new Address("123 Main St", "Anytown");
    Person person = new Person("John Doe", address);
    try {
        Person clonedPerson = (Person) person.clone();
        clonedPerson.getAddress().setStreet("456 Second St");

        System.out.println("Original person address: " + person.getAddress().getStreet()); // 123 Main St
        System.out.println("Cloned person address: " + clonedPerson.getAddress().getStreet()); // 456 Second St
    } catch (CloneNotSupportedException e) {
        e.printStackTrace();
    }
```

### Q.Interceptor vs filter

|                       | Interceptor                                                | Filter                                                |
| --------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| 使用場景              | 攔截器可以用於全局攔截，例如身份驗證、日誌記錄、性能測量等 | 過濾器可以用於 HTTP 請求、響應攔截、編碼轉換等        |
| 運行順序              | 可以在 HandlerMethod 執行之前和之後進行攔截                | 可以在 Servlet 容器接收請求之前和響應返回之後進行過濾 |
| 是否依賴 Servlet 容器 | 不依賴 Servlet 容器，可以應用於多種框架                    | 依賴 Servlet 容器，只能應用於 Java Web 應用程序       |
| 需要手動配置          | 需要手動配置攔截路徑                                       | 需要手動配置過濾路徑                                  |
| 主要操作對象          | 主要操作 HandlerMethod                                     | 主要操作 ServletRequest 和 ServletResponse            |
| 優點                  | 更加靈活，可以處理更細粒度的請求攔截                       | 更加通用，可以處理所有的 HTTP 請求和響應              |
| 缺點                  | 不支持 Servlet API，不能進行 Session 操作等                | 攔截範圍廣泛，可能會產生一些副作用                    |
