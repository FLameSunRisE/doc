# Java 面試題

- [Java 面試題](#java-面試題)
  - [Core](#core)
    - [Q.LocalDateTime 跟 Date 使用時機與比較](#qlocaldatetime-跟-date-使用時機與比較)
    - [Q.Thread 和 Runnable 的區別](#qthread-和-runnable-的區別)
      - [兩者差異](#兩者差異)
      - [兩者實作方式](#兩者實作方式)
    - [Q.深拷贝 vs 浅拷贝](#q深拷贝-vs-浅拷贝)
    - [Q.Interceptor vs filter](#qinterceptor-vs-filter)
      - [Interceptor（攔截器）](#interceptor攔截器)
      - [Filter（過濾器）](#filter過濾器)
    - [Q. LinkedHashMap、ConcurrentHashMap、HashMap 和 TreeMap 區別](#q-linkedhashmapconcurrenthashmaphashmap-和-treemap-區別)
    - [Q.Spring 如何防止 SQL 注入](#qspring-如何防止-sql-注入)
    - [Q. Spring IoC 的流程](#q-spring-ioc-的流程)
    - [Q. BeanFactory 和 FactoryBean 的區別](#q-beanfactory-和-factorybean-的區別)
    - [Q. TreeMap 介紹](#q-treemap-介紹)

---

## Core

### Q.LocalDateTime 跟 Date 使用時機與比較

| 比較           | java.util.Date                   | java.time.LocalDateTime                              |
| -------------- | -------------------------------- | ---------------------------------------------------- |
| 資料型態       | 可變的日期時間物件               | 不可變的日期時間物件                                 |
| 線程安全性     | 不線程安全                       | 線程安全                                             |
| 功能和操作方法 | 有限的功能和操作方法，較舊的 API | 豐富的功能和操作方法，包括計算日期間隔、日期格式化等 |

- 資料型態：

java.util.Date 是在 Java 1.0 中引入的，它是一個可變的日期時間物件，內部使用 long 型態的時間戳記來表示日期和時間。而 java.time.**LocalDateTime** 是在 Java 8 中引入的，它**是不可變的日期時間物件**，以更清晰和強大的方式表示日期和時間。

- 線程安全性：

**java.util.Date 不是線程安全的**，因為它是可變的物件，當多個線程同時訪問或修改時可能會出現問題。而 **java.time.LocalDateTime 是線程安全的**，因為它是不可變的物件，可以在多個線程間安全使用。

- 功能和操作方法：

java.util.Date 提供了一些基本的日期和時間操作方法，但在處理日期和時間的功能上相對較有限。而 java.time.LocalDateTime 提供了許多更豐富和靈活的功能，例如計算日期間隔、日期格式化、時區轉換等，並且有更直觀的 API 設計。

### Q.Thread 和 Runnable 的區別

#### 兩者差異

- **Thread 是一個類別**，**Runnable 是一個介面**。由於 Java 語言中的繼承特性，**介面可以支持多重繼承**，而**類別只能單一繼承**。因此，如果在已存在繼承關係的類別中要實現線程，只能實現 Runnable 介面。

- Runnable 表示一個線程的頂層介面，實際上 Thread 類別是實現了 Runnable 這個介面，因此在使用時我們都需要實現 run 方法。

- **從物件導向的思維來看，Runnable 相當於一個任務，而 Thread 才是真正處理的線程**。因此，我們只需要使用 Runnable 來定義具體的任務，然後交給 Thread 去處理，從而實現了鬆耦合的設計目的。

- 介面表示一種規範或標準，而實現類別表示對這個規範或標準的實現。因此**從線程的角度來看，Thread 才是真正意義上的線程實現。**

- **Runnable 表示線程要執行的任務**，因此在線程池中，提交一個任務所傳遞的類型是 Runnable。

> 資料來源:[
> 跟着 Mic 学架构兒-【Java 面试】Java 工作 0~1 年一定要会的面试题，Thread 和 Runnable 的区别](https://zhuanlan.zhihu.com/p/550594912)

#### 兩者實作方式

- 使用 Thread 類的例子：

```java
public class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

- 使用 Runnable 介面的例子：

```java
public class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        Thread thread = new Thread(runnable);
        thread.start();
    }
}
```

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

#### Interceptor（攔截器）

- 定義
  - 在 Java 開發中，**Interceptor 是 Spring 框架中的一個組件**，用於攔截並處理請求。
  - Interceptor 在 **Spring MVC 中工作在 Controller 層之前和之後**，可以對請求進行前置處理和後置處理。
    Interceptor 提供了更細粒度的攔截和處理能力，可以針對不同的請求進行不同的處理邏輯。
    Interceptor 可以執行額外的業務邏輯，例如驗證請求、記錄日誌、權限檢查等。
- 應用場景
  - 身份驗證和權限控制：Interceptor 可以用於驗證請求的身份和權限，確保只有具有適當權限的用戶可以訪問特定的請求或頁面。
  - 日誌記錄：Interceptor 可以攔截請求並記錄日誌，用於監視和分析系統的運行情況，例如請求的處理時間、IP 地址等。
  - 緩存控制：Interceptor 可以用於緩存的管理，例如檢查是否存在緩存、從緩存中讀取數據或將數據存入緩存。
  - 埋點統計：Interceptor 可以攔截請求，統計用戶的訪問行為和數據，用於分析和改進系統的使用情況。
- 實作方式

  - 創建一個實現 HandlerInterceptor 接口的攔截器類

    ```java
    public class CustomInterceptor implements HandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            // 在處理請求之前執行的邏輯
            return true; // 返回 true 表示允許請求繼續執行，返回 false 將阻止請求的執行
        }

        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
            // 在處理請求之後、在返回響應之前執行的邏輯
        }

        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
            // 在返回響應之後執行的邏輯，可用於執行清理工作
        }
    }
    ```

  - 設定攔截器的配置類，將攔截器添加到配置中

    ```java
    @Configuration
    public class InterceptorConfig implements WebMvcConfigurer {
        @Autowired
        private CustomInterceptor customInterceptor;

        @Override
        public void addInterceptors(InterceptorRegistry registry) {
            registry.addInterceptor(customInterceptor)
                    .addPathPatterns("/**") // 指定攔截的路徑
                    .excludePathPatterns("/public/**"); // 排除不需要攔截的路徑
        }
    }
    ```

#### Filter（過濾器）

- 定義
  - 在 Java 開發中，**Filter 是 Java Servlet 標準規範中的一個組件**，用於攔截和修改請求和響應。
  - Filter 在 Servlet 規範中**工作在 Web 容器級別，可以攔截和處理所有的請求和響應**。
  - Filter 提供了**對請求和響應進行修改的能力，可以讀取請求內容、修改請求頭、過濾響應等**。
  - **Filter 比 Interceptor 層級更低**，它無法針對不同的請求進行不同的處理邏輯，而是對所有請求做統一的處理。
- 應用場景
  - 請求攔截和篩選：Filter 可以攔截請求，並對請求進行篩選和修改。例如，過濾器可以對請求進行過濾，排除一些非法的或不符合要求的請求。
  - 編碼和解碼：Filter 可以對請求進行編碼和解碼，例如對請求的參數進行編碼，或對響應的內容進行解碼。
  - 壓縮和解壓縮：Filter 可以對請求或響應進行壓縮和解壓縮，減少數據的傳輸量，提高性能。
  - 統一字符集處理：Filter 可以處理請求和響應中的字符集，確保它們的一致性和正確性。
- 實作方式

  - 創建一個實現 Filter 接口的過濾器類

    ```java
    public class CustomFilter implements Filter {
        @Override
        public void init(FilterConfig filterConfig) throws ServletException {
            // 初始化操作
        }

        @Override
        public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
            // 過濾器處理邏輯
            chain.doFilter(request, response); // 執行下一個過濾器或目標頁面
        }

        @Override
        public void destroy() {
            // 銷毀操作
        }
    }
    ```

  - 設定過濾器的配置類，將過濾器添加到配置中

    ```java
    @Configuration
    public class FilterConfig {

        @Bean
        public FilterRegistrationBean<CustomFilter> customFilter() {
            FilterRegistrationBean<CustomFilter> registrationBean = new FilterRegistrationBean<>();
            registrationBean.setFilter(new CustomFilter());
            registrationBean.addUrlPatterns("/*"); // 指定過濾的路徑
            registrationBean.setOrder(1); // 設置過濾器的執行順序
            return registrationBean;
        }
    }
    ```

---

### Q. LinkedHashMap、ConcurrentHashMap、HashMap 和 TreeMap 區別

| 實現類            | 保證順序 | 線程安全 | 允許 null 鍵或值 | 操作效能 |
| ----------------- | -------- | -------- | ---------------- | -------- |
| HashMap           | 否       | 否       | 是               | 快速     |
| LinkedHashMap     | 是       | 否       | 是               | 快速     |
| TreeMap           | 是       | 否       | 仅允許 null 值   | 中等     |
| ConcurrentHashMap | 否       | 是       | 否               | 中等     |

- HashMap：
  HashMap 是最常用的 Map 實現類之一。它基於哈希表的原理實現，可以提供快速的插入、查找和刪除操作。HashMap 不保證元素的順序，因此在遍歷時，元素的順序是不確定的。HashMap 允許使用 null 作為鍵和值，但在多線程環境下並不是線程安全的。

- LinkedHashMap：
  LinkedHashMap 繼承自 HashMap，它在 HashMap 的基礎上添加了一個雙向鏈表，用於維護元素的插入順序。因此，遍歷 LinkedHashMap 時，元素的順序是按照插入順序或訪問順序（可以通過構造函數的 accessOrder 參數指定）來確定的。LinkedHashMap 也允許使用 null 作為鍵和值，而且也不是線程安全的。

- TreeMap：
  TreeMap 是基於紅黑樹（自平衡二叉查找樹）實現的，它可以保證元素的有序性。TreeMap 按照鍵的自然順序或者通過自定義比較器來進行排序。因為涉及到排序，所以 TreeMap 的插入、查找和刪除操作的時間複雜度為 O(logN)。TreeMap 不允許使用 null 作為鍵，但允許使用 null 作為值。

- ConcurrentHashMap：
  ConcurrentHashMap 是 Java 並發包提供的線程安全的 HashMap 實現。它採用了分段鎖（Segment）的機制，將整個數據分成多個段（默認為 16 段），每個段都相當於一個小的 HashTable，擁有自己的鎖。這樣多線程操作時，只要鎖住對應的段，不同段之間的操作可以並發進行，提高了並發性能。ConcurrentHashMap 的插入、查找和刪除操作是線程安全的，但在迭代過程中修改集合可能會拋出 ConcurrentModificationException 異常。

---

### Q.Spring 如何防止 SQL 注入

- 使用預編譯的 SQL 語句
  Spring 提供了 JdbcTemplate 和 NamedParameterJdbcTemplate 等類，它們可以使用預編譯的 SQL 語句來處理參數，而不是直接將參數插入到 SQL 語句中。這樣可以確保參數值被當作數據而不是 SQL 代碼來處理，從而防止 SQL 注入攻擊。

- 使用 ORM 框架
  Spring 的 ORM 框架，如 Hibernate 或 MyBatis，提供對象關係映射和參數化查詢的支持。這些框架使用對象模型而不是直接的 SQL 語句，可以有效地防止 SQL 注入攻擊。

- 輸入驗證和參數校驗
  在接收和處理用戶輸入時，進行必要的驗證和校驗。使用 Spring 提供的校驗機制，例如使用@Validated 和相應的驗證註解來驗證輸入的合法性。這樣可以過濾掉不合法的輸入，防止攻擊者利用特殊字符進行 SQL 注入攻擊。

- 使用 ORM 的參數綁定
  如果使用 ORM 框架執行 SQL 查詢，應該使用參數綁定功能來將參數值與 SQL 語句分離，而不是將參數值直接拼接到 SQL 語句中。這樣可以確保參數值被正確地轉義和處理，從而防止 SQL 注入攻擊。

- 安全配置
  在應用程式的安全配置中，確保只有授權的用戶可以執行敏感的 SQL 操作，限制對數據庫的直接訪問權限，並使用安全性較高的連接方式，如使用加密的連接或適當的認證機制。

### Q. Spring IoC 的流程

1. 定義 Bean：首先，需要在 Spring 配置文件（如 XML 配置文件）或使用注解的方式中定義要被 IoC 容器管理的 Bean。Bean 可以是各種類型的 Java 對象，並且可以包含相關的屬性和方法。

   - XML 配置文件

     ```xml
     <bean>
     ```

   - 使用註解:使用相應的註解
     - @Component
     - @Service
     - @Repository

2. 創建容器：接下來，需要創建 Spring 的 IoC 容器。Spring 提供了不同種類的容器實現，如 ClassPathXmlApplicationContext、AnnotationConfigApplicationContext 等。

```java
public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        HelloWorld helloWorld = (HelloWorld) context.getBean("helloWorld");
        helloWorld.printMessage();
    }
}
```

3. 載入配置：IoC 容器將根據配置文件的定義或基於註解的配置，載入並解析相應的配置信息，例如 Bean 的定義、依賴關係等。

   - XML 配置文件

     - 將 XML 配置文件載入到 IoC 容器中，例如使用 ClassPathXmlApplicationContext 的 load 或 refresh 方法。
     - Example:

       - XML 配置文件的示例

       ```xml
       <beans xmlns="http://www.springframework.org/schema/beans"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://www.springframework.org/schema/beans
             http://www.springframework.org/schema/beans/spring-beans.xsd">
           <!-- 定義一個名為 "helloWorld" 的 bean -->
           <bean id="helloWorld" class="com.example.HelloWorld">
               <property name="message" value="Hello, World!" />
           </bean>
       </beans>
       ```

       - 在你的應用程式的入口點中，使用 ClassPathXmlApplicationContext 載入 XML 配置文件並創建 IoC 容器。

       ```java
       import org.springframework.context.ApplicationContext;
       import org.springframework.context.support.ClassPathXmlApplicationContext;

       public class MainApp {
           public static void main(String[] args) {
               ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

               HelloWorld helloWorld = (HelloWorld) context.getBean("helloWorld");
               helloWorld.printMessage();
           }
       }
       ```

   - 使用註解
     - 通過指定配置類（使用 @Configuration 注解）或掃描特定的包（使用 @ComponentScan 注解）來設定 IoC 容器的配置。

4. 創建 Bean 實例：一旦配置文件被載入，IoC 容器將根據配置信息創建 Bean 的實例。這涉及到實例化 Bean 並解析其相應的依賴關係。
5. 注入依賴：在創建 Bean 實例的過程中，IoC 容器將自動注入 Bean 所需的相關依賴。這可以通過設置相應的屬性值或使用建構函式注入等方式實現。
   - 屬性注入：
     - 使用 @Autowired 或 @Resource 注解，或在 XML 配置文件中配置 `<property>` 元素來注入依賴。
   - 建構函式注入
     - 通過建構函式參數來注入依賴。
6. 初始化 Bean：一旦依賴注入完成，IoC 容器將調用 Bean 的初始化方法，例如設置初始化回調函式或執行自定義初始化邏輯。
   - 使用 `@PostConstruct`注解或在 XML 配置文件中配置相應的初始化方法，讓 IoC 容器在創建 Bean 實例後自動調用初始化邏輯。
7. 提供 Bean：一旦 Bean 被初始化，IoC 容器將使它們可供應用程序的其他部分使用。這通常涉及從容器中檢索 Bean 的引用。
8. 銷毀 Bean：當應用程序結束或容器被關閉時，IoC 容器將銷毀被管理的 Bean 實例。這涉及調用 Bean 的銷毀方法，例如設置銷毀回調函式或執行自定義的銷毀邏輯。

### Q. BeanFactory 和 FactoryBean 的區別

> BeanFactory 是 Spring IoC 容器的核心接口，負責管理和提供 Bean 的實例；而 FactoryBean 則是一種特殊的 Bean，用於封裝複雜的 Bean 創建邏輯並返回相應的 Bean 實例。在使用上，開發人員更多地與 BeanFactory 打交道，而 FactoryBean 則在某些情況下用於定制化 Bean 的創建過程。

- BeanFactory（容器）：
  - BeanFactory 是 Spring IoC 容器的核心接口，用於管理和提供 Bean 的實例。
  - BeanFactory 是 IoC 容器的基礎，負責 Bean 的創建、依賴注入、生命周期管理和 Bean 的銷毀等。
  - BeanFactory 提供延遲初始化，只有在需要使用 Bean 時才會實際創建 Bean 的實例。
  - BeanFactory 是一個較輕量級的容器，提供基本的 IoC 功能。
- FactoryBean（工廠 Bean）：
  - FactoryBean 是一個特殊的 Bean，實現了 FactoryBean 接口，用於創建和管理特定類型的 Bean。
  - FactoryBean 本身也是一個 Bean，由 Spring IoC 容器管理和實例化。
  - FactoryBean 的主要作用是封裝複雜的 Bean 創建邏輯，提供一個工廠方法來創建和返回特定的 Bean 實例。
  - FactoryBean 可以定制 Bean 的創建過程，例如根據條件返回不同的實例、返回單例或多例等。
    - 通常，從 FactoryBean 獲取的 Bean 實例是 FactoryBean 本身創建的對象，而不是 FactoryBean 本身。

### Q. TreeMap 介紹

> 是 Java 中的一個基於紅黑樹（Red-Black Tree）實現的有序映射（Sorted Map）。它根據鍵的自然順序或自定義比較器的順序，將鍵值對存儲在樹的節點中，並提供高效的查詢、插入和刪除操作。

TreeMap 的原理如下：

- 紅黑樹結構：TreeMap 使用紅黑樹作為內部數據結構，每個節點表示一個鍵值對。

  - **平衡二叉搜索樹**
    - 具有以下特點：每個節點都有一個顏色（紅色或黑色），根節點是黑色，空節點（葉節點）是黑色，相鄰節點不能都是紅色，從任意節點到其每個葉子節點的所有路徑上的黑色節點數量相同。

- 排序和查詢：由於紅黑樹是**有序的**，TreeMap 可以快速進行節點的插入、查詢和刪除操作。通過比較鍵的值，TreeMap 可以按升序或降序對鍵進行排序，並提供相應的方法來查詢和檢索節點。

- 節點的插入和刪除：當插入新的鍵值對時，TreeMap 會根據紅黑樹的特性進行自平衡，以保持樹的平衡性和排序性。在刪除節點時，也會進行必要的調整以維護紅黑樹的特性。

- 比較器：TreeMap 可以使用自然順序或自定義比較器來進行鍵的排序。如果未提供比較器，則使用鍵的自然順序（即鍵類實現 Comparable 接口）。如果提供了比較器，則使用比較器來進行排序。

- 效能：TreeMap 的插入、查詢和刪除操作的時間複雜度為 O(log n)，其中 n 是樹中鍵值對的數量。由於紅黑樹的平衡性，TreeMap 提供了一致的高效性能。
