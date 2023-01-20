# 開發紀錄

- [開發紀錄](#開發紀錄)
  - [Spring Security](#spring-security)
    - [WebSecurityConfigurerAdapter棄用問題](#websecurityconfigureradapter棄用問題)
  - [參考資料](#參考資料)

## Spring Security

### WebSecurityConfigurerAdapter棄用問題

- Spring官方

> below we follow best practice by using the Spring Security lambda DSL and the method HttpSecurity#authorizeHttpRequests to define our authorization rules

- 原因:
  - 因Spring Security5.7開始棄用```WebSecurityConfigurerAdapter棄用問題```, Spring官方鼓勵使用```component-based```的安全配置
  - 棄用WebSecurityConfigurerAdapter步驟
    - 刪除WebSecurityConfigurerAdapter
    - 刪除WebSecurityConfigurerAdapter的所有override
    - 使用SecurityFilterChain並配置HttpSecurity,使用WebSecurityCustomizer配置WebSecurity
 
- 解法:
  - 原先使用方式: WebSecurityConfigurerAdapter
  
  ```java
    @Configuration
    @EnableWebSecurity
    public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            // configure HTTP security...
        }
        @Override
        public void configure(WebSecurity web) throws Exception {
            // configure Web security...
        }      
    }
  ```

  - 棄用後寫法 : component-based
  
  ```java
    @Configuration
    public class SecurityConfiguration {
        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        }
        @Bean
        public WebSecurityCustomizer webSecurityCustomizer() {
        }
    }
  ```

## 參考資料

- Spring Security
  - WebSecurityConfigurerAdapter
    - [Spring Security without the WebSecurityConfigurerAdapter官方文件](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter)
    - [Spring Security 替换WebSecurityConfigurerAdapter (Deprecated)的方法](https://blog.csdn.net/allway2/article/details/127781632)
- Other
