# Spring Question

- [Spring Question](#spring-question)
  - [Core](#core)
    - [Q.Spring 基本註釋差異](#qspring-基本註釋差異)
    - [Q.Spring Boot 常用註釋](#qspring-boot-常用註釋)
    - [Q. Spring Framework 常用的 XML 配置標籤（tags）有哪些](#q-spring-framework-常用的-xml-配置標籤tags有哪些)
    - [Q.如何解決 Spring bean 的循環依賴](#q如何解決-spring-bean-的循環依賴)
      - [解決方案](#解決方案)
      - [範例](#範例)
        - [循環依賴](#循環依賴)
      - [解決方式](#解決方式)
    - [Q.Spring 的 DI 是如何做到的](#qspring-的-di-是如何做到的)
      - [介紹](#介紹)
      - [DI 的實現有三種方式](#di-的實現有三種方式)
  - [Spring Security](#spring-security)
    - [Q. SpringSecurity 執行流程？](#q-springsecurity-執行流程)
    - [Q. SpringSecurity 如何解決跨域問題？](#q-springsecurity-如何解決跨域問題)
    - [Q.SpringSecurity 如何對密碼進行加密？](#qspringsecurity-如何對密碼進行加密)
      - [使用場景](#使用場景)
      - [PasswordEncoder 範例](#passwordencoder-範例)
    - [Q. SpringSecurity 如何優雅更換系統使用的加密算法？](#q-springsecurity-如何優雅更換系統使用的加密算法)
      - [範例 DelegatingPasswordEncoder](#範例-delegatingpasswordencoder)
      - [範例手動](#範例手動)
    - [Q. SpringSecurity 有哪些控制請求訪問權限的方法？](#q-springsecurity-有哪些控制請求訪問權限的方法)
    - [Q.Spring 如何管理过滤器 Filter？](#qspring-如何管理过滤器-filter)
      - [方法一](#方法一)
      - [方法二](#方法二)
    - [Q.Spring security 過濾器鏈中固定了哪些 filter？它們的作用分別是什麼？](#qspring-security-過濾器鏈中固定了哪些-filter它們的作用分別是什麼)
    - [Q.Spring Security 過濾器鏈可以添加或者替換其中的過濾器嗎？](#qspring-security-過濾器鏈可以添加或者替換其中的過濾器嗎)
    - [Q.Spring Security 為什麼需要攔截 url?怎麼攔截 url？](#qspring-security-為什麼需要攔截-url怎麼攔截-url)
    - [Q.Spring Security 您必須按什麼順序編寫多個攔截 url ?](#qspring-security-您必須按什麼順序編寫多個攔截-url-)
    - [Q.安全性是一個橫切關注點嗎?它是如何在內部實現的?](#q安全性是一個橫切關注點嗎它是如何在內部實現的)
    - [Q.什麼是安全上下文 security context?](#q什麼是安全上下文-security-context)
    - [Q.Security 中的 Principal 是如何定義的?](#qsecurity-中的-principal-是如何定義的)
    - [Q. 允許在哪些安全註釋中使用 SpEL?](#q-允許在哪些安全註釋中使用-spel)
      - [SpEL 定義](#spel-定義)
      - [使用 SpEL 表達式場景](#使用-spel-表達式場景)
    - [Q.Spring 安全支持密碼 Hash 嗎?鹽是什麼?](#qspring-安全支持密碼-hash-嗎鹽是什麼)
    - [Q.OAuth2 授權碼授權類型是什麼?Spring boot security 如何實現?](#qoauth2-授權碼授權類型是什麼spring-boot-security-如何實現)
    - [Q.什麼是 JWT ?Spring boot security 如何實現?](#q什麼是-jwt-spring-boot-security-如何實現)
    - [Q. 什麼是 OAuth2 客戶端憑據授權?Spring boot security 如何實現?](#q-什麼是-oauth2-客戶端憑據授權spring-boot-security-如何實現)
    - [Q.@EnableWebSecurity](#qenablewebsecurity)
  - [TODO](#todo)
  - [Ref](#ref)

## Core

### Q.Spring 基本註釋差異

- @Autowired、@Resource 和 @Inject 之間的區別是什麼？
  - @Autowired 是 Spring 提供的註解，用於自動注入依賴。
  - @Resource 是 JavaEE 提供的註解，也用於自動注入依賴。
  - @Inject 是 JavaEE 依賴注入規範（JSR-330）提供的註解，與 @Autowired 功能類似。
- @Component、@Service、@Repository 和 @Controller 之間的區別是什麼？
  - @Component 是通用的組件註解，可以標記任何類別作為 Spring 組件。
  - @Service 是用於標記業務邏輯層的組件。
  - @Repository 是用於標記數據庫訪問層的組件。
  - @Controller 是用於標記控制器層的組件。
- @Configuration 和 @Bean 用於什麼目的？
  - @Configuration 註解標記一個類別為配置類，可在其中定義和設定 Spring bean。
  - @Bean 註解用於定義一個 bean，標記在方法上，該方法的返回值將作為 bean 的實例。
- @RequestMapping 註解的作用是什麼？
  - @RequestMapping 註解用於定義控制器方法的請求映射路徑和其他請求相關的設置。
- @Transactional 註解的作用是什麼？
  - @Transactional 註解用於標記事務管理的方法或類別。它指示 Spring 在方法執行期間應該應用事務管理。
- @Value 和 @PropertySource 用於什麼？
  - @Value 註解用於注入配置文件中的值或表達式到 bean 的屬性中。
  - @PropertySource 註解用於指定要加載的配置文件。

### Q.Spring Boot 常用註釋

- @SpringBootApplication：
  - 用途：標記應用程式的主類，並啟用 Spring Boot 自動配置。
  - 解釋：@SpringBootApplication 是一個組合註釋，它包含了 @Configuration、@EnableAutoConfiguration 和 @ComponentScan 註釋，可用於簡化設定和啟用自動配置。
- @RestController：
  - 用途：標記類別為 RESTful API 控制器。
  - 解釋：@RestController 註釋用於標記類別為 RESTful API 的控制器。該註釋結合了 @Controller 和 @ResponseBody，使得控制器方法的返回值直接作為 HTTP 響應的內容返回。
- @RequestMapping：
  - 用途：定義控制器方法的請求映射路徑。
  - 解釋：@RequestMapping 註釋用於定義控制器方法處理的請求映射路徑。可以使用該註釋來指定請求的 URL 路徑、HTTP 方法、路由變數等。
- @Autowired：
  - 用途：自動注入依賴。
  - 解釋：@Autowired 註釋用於自動注入依賴。當一個類別需要使用其他類別的實例時，可以使用 @Autowired 來讓 Spring 自動尋找並注入相對應的實例。
- @Service：
  - 用途：標記類別為服務層組件。
  - 解釋：@Service 註釋用於標記類別為服務層組件。通常用於標記業務邏輯的實現類別。
- @Repository：
  - 用途：標記類別為數據庫訪問層組件。
  - 解釋：@Repository 註釋用於標記類別為數據庫訪問層組件。通常用於標記數據庫操作的實現類別。
- @ConfigurationProperties：
  - 用途：將配置屬性映射到類別的屬性上。
  - 解釋：@ConfigurationProperties 註釋用於將配置屬性映射到類別的屬性上。通過指定 prefix，可以將配置文件中的特定屬性映射到類別的對應屬性上。

### Q. Spring Framework 常用的 XML 配置標籤（tags）有哪些

- `<beans>`

用途：定義 Spring IoC 容器的根元素。
解釋：在 <beans> 標籤內部，你可以定義各種 bean、bean 的相依關係和其他配置。

- `<bean>`

用途：定義一個 bean。
解釋：<bean> 標籤用於定義和配置 Spring 容器中的 bean。你需要指定 bean 的唯一識別符（id 或 name），以及 bean 的類別或類別名稱。

- `<property>`

用途：設置 bean 的屬性值。
解釋：<property> 標籤用於為 bean 設置屬性值。你可以使用 name 屬性指定要設置的屬性名稱，並使用 value 屬性指定屬性值。

- `<constructor-arg>`

用途：設置 bean 的建構子參數值。
解釋：<constructor-arg> 標籤用於為 bean 的建構子參數設定值。你可以使用 value 屬性指定參數值，或使用其他方式（如引用其他 bean）來設定。

- `<import>`

用途：導入其他配置文件。
解釋：<import> 標籤用於導入其他的 Spring 配置文件，以便在當前配置文件中使用導入的內容。

- `<context:component-scan>`

用途：自動掃描並註冊 bean。
解釋：<context:component-scan> 標籤用於啟用自動掃描，以尋找帶有特定註解的類別（如 @Component）並註冊為 bean。

- `<mvc:annotation-driven>`

用途：啟用基於註解的 Spring MVC 功能。
解釋：<mvc:annotation-driven> 標籤用於啟用 Spring MVC 的基於註解的功能，例如處理器映射、參數解析、視圖解析等。

- `<tx:annotation-driven>`

用途：啟用基於註解的事務管理。
解釋：<tx:annotation-driven> 標籤用於啟用基於註解的事務管理，允許在方法上使用 @Transactional 註解進行事務操作。

---

### Q.如何解決 Spring bean 的循環依賴

指的是當兩個或多個 Bean 彼此依賴時，彼此之間形成了一個循環，導致 Spring 無法決定先創建哪一個 Bean，進而導致 Bean 創建失敗的問題。

#### 解決方案

1. 使用 @Autowired 的構造方法注入
   在 Bean 的構造方法中注入其依賴的 Bean，並使用 @Autowired 注解標記該構造方法，Spring 會自動解決依賴的問題。

2. 使用 setter 方法注入
   在 Bean 中定義一個 setter 方法，注入其依賴的 Bean，並使用 @Autowired 注解標記該方法，Spring 會自動解決依賴的問題。

3. 使用 @Lazy 注解
   在 Bean 定義時，使用 @Lazy 注解標記該 Bean，延遲 Bean 的創建時間，從而解決循環依賴的問題。

4. 使用 @DependsOn 注解
   在 Bean 定義時，使用 @DependsOn 注解標記該 Bean，指定其依賴的 Bean 名稱，從而解決循環依賴的問題。

#### 範例

##### 循環依賴

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

### Q.Spring 的 DI 是如何做到的

當一個 Java 程序運行時，Spring 會創建一個 Spring 容器。這個容器包含了所有需要管理的對象（即 Bean），並維護它們之間的依賴關係。當程序需要某個 Bean 時，Spring 會在容器中查找並返回對應的 Bean。這種方式被稱為 Dependency Injection（依賴注入），

簡單來說，當我們需要使用一個對象時，不需要手動創建它，而是由 Spring 容器自動將對象注入到需要它的地方，這樣就可以實現對象之間的解耦和灵活配置。

#### 介紹

- 通過控制反轉（IoC）實現的
- 在 Spring 中，IoC 意味著將對象的創建和管理交給 Spring 容器，而不是對象自己負責。
- Spring 容器會負責創建對象，維護對象之間的依賴關係，並將對象注入到其他對象中

#### DI 的實現有三種方式

- 基於 setter 方法的依賴注入：
  在類中定義 setter 方法，Spring 容器會自動調用這些方法，將依賴對象注入到類中。
- 基於構造函數的依賴注入：
  在類中定義帶有參數的構造函數，Spring 容器會自動調用這些構造函數，將依賴對象注入到類中。
- 基於字段的依賴注入
  在類中定義帶有 @Autowired 或 @Resource 注解的字段，Spring 容器會自動注入依賴對象到這些字段中。

---

## Spring Security

### Q. SpringSecurity 執行流程？

1. 用戶登錄請求通過 FilterChainProxy 過濾器鏈，進入 UsernamePasswordAuthenticationFilter 過濾器。

2. 過濾器從請求中獲取用戶名和密碼，封裝為 UsernamePasswordAuthenticationToken。

3. AuthenticationManager 通過 AuthenticationProvider 進行身份驗證，如果驗證通過則返回一個被填充了身份驗證信息的 Authentication 對象。

4. 在身份驗證成功之後，過濾器會生成一個會話並使用 SessionRegistry 進行會話管理。

5. 如果身份驗證失敗，AuthenticationEntryPoint 會攔截請求並返回相應的錯誤信息。

6. 如果身份驗證成功，過濾器將 Authentication 對象交給 SecurityContextHolder 進行存儲。

7. 最後，請求通過 FilterChainProxy 過濾器鏈，進入應用程序處理。在這個過程中，訪問控制由許多授權過濾器完成，它們檢查當前用戶是否有訪問所請求資源的權限。

8. 當用戶退出時，LogoutFilter 將請求轉發到 LogoutHandler，並使用 SessionRegistry 註銷用戶的會話。

### Q. SpringSecurity 如何解決跨域問題？

- 使用 CorsConfigurationSource
  - 允許來自 <http://localhost:3000> 的請求，設定允許的方法和標頭等
  - http.cors() 設置啟用 CORS

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors()
            .and()
            .authorizeRequests()
                .antMatchers("/api/**").hasRole("USER")
                .anyRequest().authenticated()
                .and()
            .httpBasic();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setExposedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}

```

- 使用 corsFilter
  - CorsConfiguration 對象的 setAllowCredentials(true) 方法表示允許在跨域請求中發送憑證信息
  - addAllowedOrigin() 方法表示允許訪問的域名，addAllowedHeader("\*") 表示允許發送的請求頭，addAllowedMethod() 表示允許的請求方法。

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors() // 开启跨域请求配置
            .and()
            .authorizeRequests()
                .antMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:8080");
        config.addAllowedHeader("*");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}

```

---

### Q.SpringSecurity 如何對密碼進行加密？

可以使用**PasswordEncoder**對密碼進行加密和驗證。常用的 PasswordEncoder 有以下幾種：

- BCryptPasswordEncoder: 使用 BCrypt 強哈希函數對密碼進行加密，並支持加盐。

- Pbkdf2PasswordEncoder: 使用 PBKDF2 哈希函數對密碼進行加密。

- SCryptPasswordEncoder: 使用 SCrypt 哈希函數對密碼進行加密。

#### 使用場景

使用 PasswordEncoder 可以在應用程序中的以下位置進行密碼加密：

1. 註冊時加密：當用戶註冊時，將密碼進行加密，並將加密後的密碼保存到數據庫中。

2. 登錄時驗證：當用戶登錄時，從數據庫中取出密碼進行解密，然後將用戶輸入的密碼進行加密，並進行驗證。

#### PasswordEncoder 範例

WebSecurityConfigurerAdapter，並覆寫了 configure 方法。在 configure 方法中，我們使用了 UserDetailsServiceImpl 作為 userDetailsService，並調用 passwordEncoder()方法來設置密碼加密方式。在這個範例中，我們使用了 BCryptPasswordEncoder 作為密碼加密方式。

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .httpBasic();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

```

---

### Q. SpringSecurity 如何優雅更換系統使用的加密算法？

可以使用 PasswordEncoder 接口對用戶密碼進行加密。如果需要更改密碼加密算法，可以通過創建新的 PasswordEncoder 實例並將其配置為使用的實現來實現。具體步驟如下：

1. 創建一個新的 PasswordEncoder 實現，例如使用更強的加密算法（例如從 MD5 到 BCrypt）。

2. 將新的 PasswordEncoder 配置到 Spring Security 中，可以通過在 Spring 配置文件中配置一個新的 PasswordEncoder Bean，並將其註入到 Spring Security 配置中。

3. 在更新密碼時，需要使用新的 PasswordEncoder 對現有密碼進行重新編碼。可以通過自定義實現 UserDetailsService 接口並在其中註入新的 PasswordEncoder 實例，然後在重寫的 loadUserByUsername 方法中使用該實例對密碼進行重新編碼。或者，可以通過實現一個自定義的 PasswordEncoder Bean，在其中註入新的和舊的 PasswordEncoder 實例，並使用其判斷密碼是否需要重新編碼，如果需要，則使用新的 PasswordEncoder 進行編碼，否則使用舊的 PasswordEncoder 進行編碼。

通過以上步驟，就可以實現在不影響用戶密碼的情況下，更換系統使用的密碼加密算法。

#### 範例 DelegatingPasswordEncoder

DelegatingPasswordEncoder 是 Spring Security 提供的一個實現了 PasswordEncoder 接口的加密器，它可以根據不同的加密方式委派給對應的 PasswordEncoder 進行加密和校驗，實現了一種靈活的加密方式切換。

使用 DelegatingPasswordEncoder 可以避免代碼修改的繁瑣，並且可以支持多種加密方式的自由切換。

- 指定加密算法與規則

```java
@Bean
public PasswordEncoder passwordEncoder() {
    String encodingId = "bcrypt"; // 使用 bcrypt 算法
    Map<String, PasswordEncoder> encoders = new HashMap<>();
    encoders.put(encodingId, new BCryptPasswordEncoder()); // 设置 bcrypt 的加密规则
    encoders.put("sha256", new StandardPasswordEncoder()); // 设置 sha256 的加密规则
    return new DelegatingPasswordEncoder(encodingId, encoders);
}
```

-

#### 範例手動

MyBCryptPasswordEncoder 實現了 MyPasswordEncoder 接口，並委托給 BCryptPasswordEncoder 來實現加密功能。在 SecurityConfig 類中，使用@Autowired 注入自定義的加密器，並在 configure 方法中將其配置到 AuthenticationManagerBuilder 中。

這樣，當系統需要更換加密算法時，只需要更換 MyBCryptPasswordEncoder 中的實現即可，不需要修改其他地方的代碼。

1. 定義加密介面

```java
public interface MyPasswordEncoder {
    String encode(CharSequence rawPassword);

    boolean matches(CharSequence rawPassword, String encodedPassword);
}
```

2. 實現一個自定義的加密器

```java
public class MyBCryptPasswordEncoder implements MyPasswordEncoder {
    private final BCryptPasswordEncoder delegate = new BCryptPasswordEncoder();

    @Override
    public String encode(CharSequence rawPassword) {
        return delegate.encode(rawPassword);
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        if (encodedPassword == null || encodedPassword.length() == 0) {
            return false;
        }
        try {
            return delegate.matches(rawPassword, encodedPassword);
        } catch (IllegalArgumentException e) {
            throw new IllegalStateException("Invalid encoded password format", e);
        }
    }
}
```

3. 將自定義的加密器配置到 Spring Security 中

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private MyPasswordEncoder myPasswordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService())
            .passwordEncoder(myPasswordEncoder);
    }
}

```

### Q. SpringSecurity 有哪些控制請求訪問權限的方法？

- permitAll() ：無條件允許任何形式訪問，不管你登錄還是沒有登錄。
- anonymous() ：允許匿名訪問，也就是沒有登錄才可以訪問。
- denyAll() ：無條件決絕任何形式的訪問。
- authenticated()：只允許已認證的用戶訪問。
- fullyAuthenticated() ：只允許已經登錄或者通過 remember-me 登錄的用戶訪問。
- hasRole(String) : 只允許指定的角色訪問。
- hasAnyRole(String) : 指定一個或者多個角色，滿足其一的用戶即可訪問。
- hasAuthority(String) ：只允許具有指定權限的用戶訪問
- hasAnyAuthority(String) ：指定一個或者多個權限，滿足其一的用戶即可訪問。
- hasIpAddress(String) : 只允許指定 ip 的用戶訪問。

### Q.Spring 如何管理过滤器 Filter？

#### 方法一

通過 @Bean 註解將過濾器註冊到 Spring 容器中，然後在配置類中通過 @Order 註解指定過濾器的執行順序，從而控製過濾器的調用順序。

```java
@Component
@Order(1)
public class CustomFilter implements Filter {
    // filter 方法实现
}

```

#### 方法二

通過 Spring Security 的配置類來配置和管理過濾器。在 Spring Security 中，可以通過以下兩種方式來配置和管理過濾器：

1. 通過 HttpSecurity 配置類的 addFilterBefore() 和 addFilterAfter() 方法，在指定的過濾器之前或之後添加自定義的過濾器。

例如，將自定義的過濾器 CustomFilter 添加到 Spring Security 的 UsernamePasswordAuthenticationFilter 之前：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.addFilterBefore(new CustomFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    // ...
}
```

2. 通過 @Bean 註解將過濾器註冊到 Spring 容器中，並在配置類中通過 FilterRegistrationBean 配置類來管理過濾器的執行順序和 URL 模式。

例如，以下代碼演示瞭如何將自定義的過濾器 CustomFilter 註冊到 Spring 容器中，並通過 FilterRegistrationBean 配置類指定其執行順序為 1，並將其應用於所有的 URL 模式：

```java
@Configuration
public class AppConfig {

    @Bean
    public CustomFilter customFilter() {
        return new CustomFilter();
    }

    @Bean
    public FilterRegistrationBean<CustomFilter> customFilterRegistration() {
        FilterRegistrationBean<CustomFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(customFilter());
        registration.addUrlPatterns("/*");
        registration.setOrder(1);
        return registration;
    }
}
```

---

### Q.Spring security 過濾器鏈中固定了哪些 filter？它們的作用分別是什麼？

Spring Security 過濾器鏈中固定了一些核心過濾器，它們的作用如下：

- WebAsyncManagerIntegrationFilter：用於將 WebAsyncManager 與 SecurityContext 集成，支持使用 @Async 註解進行異步方法調用。
- SecurityContextPersistenceFilter：用於在請求處理過程中，將 SecurityContext 存儲到特定的位置。在後續的請求中，SecurityContext 可以從該位置獲取，以保證當前用戶的身份信息被正確識別和驗證。
- HeaderWriterFilter：用於添加 HTTP 響應頭，以加強 Web 應用的安全性。
- CorsFilter：用於處理跨域資源共享（CORS）請求。
- CsrfFilter：用於防止跨站請求偽造攻擊（CSRF）。
- LogoutFilter：用於處理用戶註銷操作。
- UsernamePasswordAuthenticationFilter：用於處理用戶名密碼認證。
- DefaultLoginPageGeneratingFilter：用於生成默認的登錄頁面。
- DefaultLogoutPageGeneratingFilter：用於生成默認的註銷頁面。
- BasicAuthenticationFilter：用於處理 HTTP 基本認證。
- RequestCacheAwareFilter：用於支持請求緩存，以支持在用戶登錄之後跳轉到原始請求的位置。
- SecurityContextHolderAwareRequestFilter：用於確保 HttpServletRequest 實例的包裝器類型為 SecurityContextHolderAwareRequestWrapper 類型。
- AnonymousAuthenticationFilter：用於創建匿名用戶認證。
- SessionManagementFilter：用於管理用戶 Session 信息。
- ExceptionTranslationFilter：用於處理認證和授權的異常。
- FilterSecurityInterceptor：用於實現基於 URL 路徑的訪問控制。

---

### Q.Spring Security 過濾器鏈可以添加或者替換其中的過濾器嗎？

是的，Spring Security 過濾器鏈可以添加或者替換其中的過濾器。通過在配置中配置 HttpSecurity 對象，可以添加或者替換過濾器。

具體來說，可以通過 addFilterBefore()和 addFilterAfter()方法在現有的過濾器鏈中添加自定義的過濾器或替換現有的過濾器。 addFilterBefore()方法可以將自定義的過濾器添加到指定過濾器之前，addFilterAfter()方法可以將自定義的過濾器添加到指定過濾器之後。這些方法的參數是自定義的過濾器實例以及要添加或替換的過濾器的 Class 類型。

例如，下面的代碼演示瞭如何添加一個自定義的過濾器到過濾器鏈中：

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 添加自定義的過濾器到過濾器鏈中
        http.addFilterBefore(new MyFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
```

這裡的 MyFilter 是一個自定義的過濾器，UsernamePasswordAuthenticationFilter.class 是要添加到該過濾器之前的過濾器類型。

---

### Q.Spring Security 為什麼需要攔截 url?怎麼攔截 url？

Spring Security 需要攔截 URL 是因為它是一個安全框架，它可以為應用程序提供訪問控制和身份驗證等安全功能，從而保護 Web 應用程序免受惡意攻擊。攔截 URL 的目的是為了在用戶訪問某個 URL 時進行安全檢查，並根據用戶的角色和權限來決定是否允許訪問。

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
            .antMatchers("/public/**").permitAll()
            .antMatchers("/private/**").authenticated()
            .antMatchers("/admin/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
        .formLogin()
            .and()
        .logout()
            .logoutUrl("/logout")
            .logoutSuccessUrl("/login");
}
```

- /public/\*\*的 URL:
  - 允許所有人訪問；對於訪問/private/\*\*的 URL，要求用戶進行身份認證；
- 對於訪問/admin/\*\*的 URL
  - 要求用戶具有 ADMIN 角色才能訪問；對
- 於其他任何 URL

  - 都要求用戶進行身份認證。同時，還配置了表單登錄和退出登錄的相關信息。

- antMatchers()方法指定要攔截的 URL
- 使用 permitAll()方法表示允許所有人訪問
- 使用 authenticated()方法表示要求用戶進行身份認證
- 使用 hasRole()方法表示要求用戶具有指定的角色
- 使用 anyRequest()方法指定對於其他任何 URL 都要進行安全檢查。

---

### Q.Spring Security 您必須按什麼順序編寫多個攔截 url ?

在 Spring Security 中，多個攔截 URL 的順序非常重要，因為它們是按順序執行的。如果兩個攔截器都能夠匹配同一個請求，那麼按照它們在配置中定義的順序執行。

通常情況下，我們會**先放置最嚴格的 URL 規則，然後再放置更寬泛的規則**。這是因為在執行過程中，Spring Security 將首先查看最嚴格的規則並嘗試將其應用於請求。**只有當最嚴格的規則不匹配時，Spring Security 才會繼續查找下一個規則**。

- Ex:

  - 如果您有一個需要用戶登錄才能訪問的 URL 和一個允許所有用戶訪問的 URL，則應首先將登錄 URL 的規則放在配置文件的開頭，然後再放置允許訪問的規則，以確保所有用戶在登錄之前無法訪問敏感的 URL。

  - /login" URL 的規則被放置在了開頭，並被允許所有用戶訪問，而其他需要登錄才能訪問的 URL 規則則被放在了 "anyRequest().authenticated()" 的後面。這樣就確保了在用戶登錄之前無法訪問敏感的 URL。

    ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .authorizeRequests()
                        .antMatchers("/login").permitAll()
                        .anyRequest().authenticated()
                        .and()
                    .formLogin()
                        .loginPage("/login")
                        .defaultSuccessUrl("/home")
                        .permitAll()
                        .and()
                    .logout()
                        .permitAll()
                        .and()
                    .csrf().disable();
        }
    }
    ```

---

### Q.安全性是一個橫切關注點嗎?它是如何在內部實現的?

Spring Security 可以被認為是一個橫切關注點，它與業務邏輯無關，但卻是整個應用程序中非常重要的一部分，確保了應用程序的安全性。 Spring Security 的內部實現主要是通過對過濾器鏈進行配置和處理，對請求進行攔截和驗證，從而確保只有經過身份驗證和授權的用戶才能訪問應用程序中的敏感資源。通過對攔截器鏈的配置，Spring Security 能夠實現多種安全性方案，例如基於表單認證、基於 HTTP Basic 認證、基於 OAuth2 的認證等等。同時，Spring Security 也提供了很多自定義選項，可以根據實際需求進行配置，確保系統能夠滿足特定的安全性要求。

---

### Q.什麼是安全上下文 security context?

安全上下文（Security Context）是 Spring Security 框架中的一個重要概念，用於存儲關於當前安全身份認證的信息，包括當前用戶的身份信息和權限信息等。在程序運行時，可以通過 SecurityContextHolder 獲取當前的安全上下文，並從中獲取相關的信息。

安全上下文可以在用戶身份驗證通過後自動創建，並在整個請求過程中一直保持有效。它的作用是提供一個全局的容器，使得可以隨時獲取當前用戶的身份和權限信息，以進行安全性檢查和控制。例如，在請求處理方法中，可以通過 SecurityContextHolder 獲取當前安全上下文，並從中獲取當前用戶的身份和權限信息，然後根據這些信息來判斷是否有訪問該方法的權限。

總之，安全上下文是 Spring Security 中的一個重要機制，它提供了一個方便的方式來管理當前用戶的身份和權限信息，從而實現安全性的控制。

---

### Q.Security 中的 Principal 是如何定義的?

在 Java 中，Principal 是用於表示在安全上下文中執行操作的實體的接口。它代表一個具有名稱和可選標識符的主體。通常情況下，Principal 代表用戶或程序，表示執行操作的實體。

在 Spring Security 中，**Principal 接口是 Authentication 對象的一部分**，它**代表了通過身份驗證的用戶或者代表應用程序的系統用戶**。 Principal 可以通過 SecurityContextHolder 來訪問，該類提供了一個靜態方法，可以從當前線程中獲取 SecurityContext，然後獲取 Authentication 對象，再從中獲取 Principal。

下面是一個簡單的示例，說明如何使用 SecurityContextHolder 獲取當前 Principal：

```java
Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
if (authentication != null) {
String username = authentication.getName();
// do something with the username
}
```

在上面的代碼中，getAuthentication()方法返回 Authentication 對象，我們可以從中獲取當前用戶的名稱（用戶名）並執行相應的操作。

---

### Q. 允許在哪些安全註釋中使用 SpEL?

#### SpEL 定義

- SpEL 全稱為 Spring Expression Language
- 是 Spring 框架中一個強大的表達式語言，
- 它支持在運行時動態地查詢和操作對像圖。
- SpEL 具有豐富的特性，包括訪問對象屬性、數組元素、方法調用、運算符等，同時也支持條件表達式、正則表達式、集合遍歷、類型轉換等功能。
- 在 Spring 框架中，SpEL 被廣泛應用於各個模塊，如 Spring Security、Spring Data 等。

#### 使用 SpEL 表達式場景

在 Spring Security 中，可以在以下註釋中使用 SpEL 表達式：

- @PreAuthorize：在方法執行之前進行授權驗證。
- @PostAuthorize：在方法執行之後進行授權驗證。
- @PreFilter：對方法參數進行安全過濾。
- @PostFilter：對方法返回結果進行安全過濾。
- @Secured：在方法執行之前進行授權驗證。

使用 SpEL 表達式可以使得安全註釋更加靈活，可以根據需要動態指定授權條件，而不需要在代碼中硬編碼授權條件。

---

### Q.Spring 安全支持密碼 Hash 嗎?鹽是什麼?

1. 是的，Spring 安全提供了密碼哈希的支持。

2. 鹽是用於哈希密碼的額外隨機數據，通常與密碼組合在一起，並與其一起散列。這可以增加密碼的安全性，因為即使兩個用戶具有相同的密碼，它們的哈希值也將不同，從而減少對哈希值的暴力攻擊和彩虹表攻擊的風險。 Spring 安全提供了多種哈希算法和生成鹽的方式來保護密碼。

   - Ex:假設原始密碼為"password123"，我們使用鹽"abcd1234"進行加密，加密過程如下：
   - 過程
     1. 將鹽拼接在原始密碼後面，得到"password123abcd1234"。
     2. 使用哈希算法（如 SHA-256）對拼接後的字符串進行加密，得到加密後的密碼串。
     3. 存儲加密後的密碼串和鹽，用於後續的密碼驗證。

   即使有人知道密碼串和哈希算法，也很難猜測出原始密碼，因為加鹽會增加猜測的難度和時間成本。

---

### Q.OAuth2 授權碼授權類型是什麼?Spring boot security 如何實現?

OAuth2 授權碼授權類型是 OAuth2 中的一種，它通過授權服務器向客戶端提供一個授權碼來獲取訪問令牌，而不是直接向客戶端提供訪問令牌。具體流程如下：

1. 客戶端向授權服務器發起授權請求，請求的授權類型為“authorization_code”。
2. 授權服務器要求用戶進行身份驗證並獲得用戶的授權。
3. 授權服務器生成一個授權碼並將其發送回客戶端。
4. 客戶端使用授權碼向授權服務器發起請求以獲取訪問令牌。
5. 授權服務器驗證授權碼，並將訪問令牌發送回客戶端。

在 Spring Boot 中，可以通過使用 Spring Security OAuth2 來實現 OAuth2 授權碼授權類型。需要在 pom.xml 文件中添加 Spring Security OAuth2 的依賴，並在 Spring Security 配置文件中進行相關配置，如授權服務器的配置、資源服務器的配置以及安全攔截的配置等。具體實現方式可以參考 Spring 官方文檔中的 OAuth2 示例代碼。

---

### Q.什麼是 JWT ?Spring boot security 如何實現?

JWT 是 JSON Web Token 的縮寫，是一種用於身份認證的開放標準。它通過在請求中添加一個經過加密的 JSON 對像作為 token 來實現身份認證，從而避免了服務器端需要存儲用戶信息的麻煩。

JWT 通常包含三部分：頭部、載荷和簽名。頭部用於描述 JWT 的元數據，載荷是 JWT 的主體內容，簽名則是使用密鑰對頭部和載荷進行加密生成的字符串。

在 Spring Boot 中，可以使用 Spring Security 來實現 JWT 的身份認證。需要在 pom.xml 文件中添加 Spring Security 和 JWT 的依賴，並在 Spring Security 配置文件中進行相關配置，如 JWT 的密鑰、過期時間等。具體實現方式可以參考 Spring 官方文檔中的 JWT 示例代碼。

---

### Q. 什麼是 OAuth2 客戶端憑據授權?Spring boot security 如何實現?

OAuth2 客戶端憑據授權是 OAuth2 授權協議中的一種授權類型，它允許客戶端使用自己的憑據（例如客戶端 ID 和客戶端密鑰）來獲取訪問受保護的資源。

在 Spring Boot Security 中，可以使用 Spring Security OAuth2 來實現客戶端憑據授權。需要在 pom.xml 文件中添加 Spring Security OAuth2 的依賴，並在 Spring Security 配置文件中進行相關配置，如授權服務器的配置、資源服務器的配置以及安全攔截的配置等。具體實現方式可以參考 Spring 官方文檔中的 OAuth2 示例代碼。

以下是一個簡單的 Spring Boot Security OAuth2 客戶端憑據授權的配置示例：

```java
@Configuration
@EnableOAuth2Client
public class OAuth2ClientConfig {

    @Value("${oauth2.client.id}")
    private String clientId;

    @Value("${oauth2.client.secret}")
    private String clientSecret;

    @Value("${oauth2.access.token-uri}")
    private String accessTokenUri;

    @Bean
    public OAuth2RestTemplate oauth2RestTemplate(OAuth2ClientContext oauth2ClientContext) {
        OAuth2ProtectedResourceDetails resource = new ClientCredentialsResourceDetails();
        ((ClientCredentialsResourceDetails) resource).setClientId(clientId);
        ((ClientCredentialsResourceDetails) resource).setClientSecret(clientSecret);
        ((ClientCredentialsResourceDetails) resource).setAccessTokenUri(accessTokenUri);
        return new OAuth2RestTemplate(resource, oauth2ClientContext);
    }
}
```

在上述配置中，使用@EnableOAuth2Client 註解啟用 OAuth2 客戶端功能，並創建了一個 OAuth2RestTemplate 的 Bean 來與 OAuth2 授權服務器進行交互。通過設置 ClientCredentialsResourceDetails 的屬性，可以將客戶端 ID 和客戶端密鑰等信息配置到客戶端資源中。

---

### Q.@EnableWebSecurity

- 用於開啟 Web 安全性功能
- 自動注入
  - WebSecurityConfiguration
    - 創建了 FilterChainProxy，處理安全相關的過濾器鏈
  - SpringWebMvcImportSelector
    - 註冊 Spring MVC 相關的安全配置，例如 loginPage、accessDeniedPage 等
  - OAuth2ImportSelector
    - 支持 OAuth2 的安全配置
  - HttpSecurityConfiguration -提供了 http DSL 配置方式，用於配置請求授權、表單登錄、基於 token 的認證等
  - @EnableGlobalAuthentication
    - 用於配置全局身份驗證相關的配置

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Documented
@Import({WebSecurityConfiguration.class, SpringWebMvcImportSelector.class, OAuth2ImportSelector.class, HttpSecurityConfiguration.class})
@EnableGlobalAuthentication
@Configuration
public @interface EnableWebSecurity {
  boolean debug() default false;
}
```

---

## TODO

8.什麼是 OAuth2 密碼授權?Spring boot security 如何實現?

19.spring security 如何集成到 spring boot 上？

20.Spring Boot 如何使用 spring security 的表單登陸？

21.Spring Boot Security 如何創建自定義登陸頁面？

22.Spring Boot Security 如何使用數據庫表進行身份驗證?

23.Spring Security 如何使用內存的身份驗證？

24.匿名登陸使用場景是什麼？

25.Spring MVC 如何使用 Spring Security？

26.在 spring security 中@secure 和@PreAuthorize 有什麼區別?

27.spring security 支持的身份驗證類型。

28.是否有一種方法來設置基本身份驗證和表單登錄在同一個應用程序?

29.如何使用 spring security 限制靜態資源訪問?

30.spring security 有哪些替代方案？

31.OAuth 1 和 OAuth 2 的區別？

32.PKI 是什麼意思?Java 如何支持 PKI 模型?

33.如何註銷在 spring 安全會話?

34.如何在 spring security 中實現“記得我”?

35.spring security 中@PreFilter 和 @PostFilter 的作用是什麼？

36.spring security 中如何使用 hasRole()和 hasAnyRole()?

## Ref

- [spring security 面试题
  ](https://juejin.cn/s/spring%20security%20%E9%9D%A2%E8%AF%95%E9%A2%98)
