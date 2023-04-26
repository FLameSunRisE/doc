# 基本觀念

- [基本觀念](#基本觀念)
  - [常見專有名詞](#常見專有名詞)
    - [同源政策 (Same-Origin Policy)](#同源政策-same-origin-policy)
    - [跨來源資源共用（CORS）](#跨來源資源共用cors)
      - [為什麼需要跨來源資源共用（CORS）](#為什麼需要跨來源資源共用cors)
      - [CORS 原理](#cors-原理)
      - [CORS 中的概念](#cors-中的概念)
    - [如何實現 CORS](#如何實現-cors)
      - [Spring boot 實作 CORS](#spring-boot-實作-cors)
    - [CSRF( Cross Site Request Forgery( 跨站請求偽造))](#csrf-cross-site-request-forgery-跨站請求偽造)
      - [CSRF 案例](#csrf-案例)
      - [CSRF 防範](#csrf-防範)
      - [VUE](#vue)
    - [最佳實踐，例如只允許特定的來源訪問 API，以及限制跨來源訪問時可以傳遞的 HTTP 方法和標頭等。](#最佳實踐例如只允許特定的來源訪問-api以及限制跨來源訪問時可以傳遞的-http-方法和標頭等)
  - [網頁類](#網頁類)
    - [Q.第三方 Cookie 為何要取得使用者資料](#q第三方-cookie-為何要取得使用者資料)

---

## 常見專有名詞

### 同源政策 (Same-Origin Policy)

同源政策（Same-Origin Policy）是一個安全策略，主要限制了瀏覽器從一個源加載的文檔或腳本如何與來自另一個源的資源進行交互。源（Origin）是由協議（protocol）、主機名（host）和端口號（port）組成的。

- 原則

  - 相同的通訊協定(protocol)
    - ex:http/https
  - 相同的網域(domain)
    - ex: http://google.com
  - 相同的通訊埠(port)
    - ex: 8080

- 範例
  例如，如果一個網站（例如 http://example.com）加載了一張圖片或一段 JavaScript 代碼，這段代碼就可以訪問該網站下的 cookie 和 localStorage 等資源。但是，如果這個網站加載了一個來自其他網站（例如 http://attacker.com）的資源，那麼瀏覽器就會禁止這個資源與該網站的交互，因為它們不同源。

同源政策的存在可以有效地保護用戶的隱私和安全，防止惡意網站通過跨站攻擊（如跨站腳本攻擊 XSS）竊取用戶的信息或利用用戶的身份進行非法操作。

在 Web 開發中，常常**需要通過跨域請求來獲取或傳遞數據，這時可以通過跨域資源共享（CORS）或 JSONP 等機制來繞過同源政策的限制**。

---

### 跨來源資源共用（CORS）

#### 為什麼需要跨來源資源共用（CORS）

是因為網路應用程式通常會使用不同的網域（domain）或埠（port）之間進行資源共用。瀏覽器基於安全考慮，將同源政策限制在網路應用程式的安全範圍內，預設情況下，瀏覽器不允許跨域請求，也就是不允許從不同的網域或埠請求資源。

CORS 機制通過添加額外的 HTTP 首部欄位，讓服務端能夠告訴瀏覽器是否允許這個請求跨域進行資源共用。通過 CORS 機制，網路應用程式可以在安全範圍內與不同網域或埠之間進行資源共用。

#### CORS 原理

CORS 的原理是通過在服務器端發送響應頭來告知瀏覽器允許哪些域名訪問該資源。當瀏覽器發現請求的資源不在當前網頁的域名、端口、協議範圍內時，**會先發送一個預檢請求（Preflight Request），詢問服務器是否允許該跨域請求**。如果服務器允許，瀏覽器才會發送正式的請求，否則就會拒絕。

#### CORS 中的概念

- 預檢請求（Preflighted request）

  - 定義
  - 說明
    - 當使用 AJAX 等方式進行跨域請求時，會觸發瀏覽器的預檢機制，即**先發送一個 HTTP 方法為 OPTIONS 的請求**，詢問該跨域請求是否安全，是否允許該請求進行。只有在服務端回應了確認訊息（HTTP Status 200），瀏覽器才會發送真正的跨域請求。
  - 目的
    - 為了保障跨來源資源共用的安全性，避免未授權的請求對服務端造成攻擊，同時也保障了瀏覽器的安全。
  - 設置方法

    - 在設置 CORS 時，可以使用網站的後端程式來控制跨來源資源共用的權限，設置方法主要包括：

      1. 在後端程式中返回 Access-Control-Allow-Origin 標頭，用於指定哪些網站可以訪問該資源。
      2. 可以使用 Access-Control-Allow-Methods 標頭來指定允許的 HTTP 方法。
      3. 可以使用 Access-Control-Allow-Headers 標頭來指定允許的自定義請求標頭。
      4. 可以使用 Access-Control-Max-Age 標頭來指定預檢請求的有效時間。
      5. 可以使用 Access-Control-Allow-Credentials 標頭來指定是否允許發送 Cookie。
      6. 可以使用 Access-Control-Expose-Headers 標頭來指定哪些標頭可以被瀏覽器讀取。
         以上這些設置都是為了保障跨來源資源共用的安全性和可控性。

    - 圖示
      > 圖片出處:[developer.mozilla.org](https://developer.mozilla.org/) > ![cors_option](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png)

- 簡單請求（Simple request）。

  1. 請求方法只能是以下方法之一：GET、HEAD、POST。
  2. HTTP 頭信息只能是以下幾種：
     - Accept
     - Accept-Language
     - Content-Language
     - Content-Type（只限以下三種值：application/x-www-form-urlencoded、multipart/form-data、text/plain）
  3. Content-Type 的值必須為以下之一：
     - text/plain
     - multipart/form-data
     - application/x-www-form-urlencoded

  如果以上條件都符合，瀏覽器就會發送簡單請求，並且不需要進行預檢請求，CORS 機制會自動允許請求。

  簡單請求的好處是瀏覽器可以直接進行請求，省去了預檢請求的時間，減少了請求的延遲。

### 如何實現 CORS

#### Spring boot 實作 CORS

在 Spring Boot 中，可以通過添加 CORS Filter 來設置 CORS，步驟如下：

1. 添加依賴，在 pom.xml 中添加以下依賴：

```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

2. 創建一個 CORS 過濾器，如下所示：

```java
@Component
public class CorsFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletRequest request= (HttpServletRequest) servletRequest;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
        chain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    public void destroy() {}
}
```

3. 將過濾器添加到 Spring Boot 配置文件中，如下所示：

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private CorsFilter corsFilter;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD")
            .allowCredentials(false).maxAge(3600);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(corsFilter);
    }
}
```

### CSRF( Cross Site Request Forgery( 跨站請求偽造))

攻擊者通過跨站請求偽造攻擊（也稱為 One-Click Attack 或者 Session Riding），在受害者不知情的情況下，以受害者名義完成非法的操作，比如修改用戶資料、發送郵件、購買商品等等。

攻擊成功需要滿足三個條件：

1. 受害者必須已經登錄了受信任網站
2. 攻擊者需要知道受信任網站的某些操作請求方式
3. 攻擊者能夠構造一個可以被受信任網站接受的請求。為了防止此類攻擊，通常會使用 CSRF Token 的機制。

#### CSRF 案例

假設使用者已經在網站 A 上登入並取得了驗證權杖 token。而該網站設計不良，沒有使用 CSRF 防護機制。

那麼攻擊者可以通過以下方式利用 CSRF 攻擊：

1. 攻擊者在網站 B 上建立一個惡意網頁，該網頁上有一個表單，且表單的目標地址是網站 A 上的某個接口，例如修改密碼的接口。

2. 攻擊者將惡意網頁的網址通過電子郵件、社交媒體等方式發送給使用者。

3. 使用者在不知情的情況下訪問了攻擊者提供的惡意網頁，並提交了表單，這會觸發向網站 A 的接口發送修改密碼請求，因為表單中包含了使用者在網站 A 上的驗證權杖 token。

4. 當網站 A 收到該請求時，並不會判斷該請求是否來自該網站，因為該網站沒有使用 CSRF 防護機制。所以網站 A 將修改密碼的請求視為合法，並成功修改了使用者的密碼，而使用者卻毫不知情。

#### CSRF 防範

防禦 CSRF 的方法：

- 驗證來源站點（Referer 驗證）：
  在 HTTP 頭中添加 Referer 字段，告訴伺服器當前請求的來源是哪個站點。但是，Referer 字段並不是絕對可靠的，有些瀏覽器和網路安全軟體可能會屏蔽或篡改該字段。此外，如果您的網站同時支援 HTTP 和 HTTPS，那麼 HTTP 請求中的 Referer 字段就是空的，因此需要在伺服器端進行一些特殊處理。

- 添加 token 驗證機制
  伺服器向客戶端返回一個 token，客戶端每次提交請求時都將 token 值作為參數發送給伺服器，伺服器在接收到請求後，首先驗證 token 的有效性，如果驗證不通過，則拒絕請求。這種方式也被稱為 Synchronizer Token Pattern，是目前應用比較廣泛的一種 CSRF 防禦機制。

- 利用 SameSite 屬性
  在 Cookie 中設置 SameSite 屬性，限制 Cookie 只能作為同站點請求的一部分被發送，從而有效地防止跨站點請求偽造攻擊。不過，SameSite 屬性需要瀏覽器的支持，目前還沒有被所有主流瀏覽器廣泛支持。

- 利用驗證碼
  在敏感操作中加入驗證碼，要求用戶輸入正確的驗證碼才能提交請求，從而有效防止 CSRF 攻擊。

- 利用 HTTPOnly 和 Secure 屬性
  在 Cookie 中設置 HTTPOnly 和 Secure 屬性，HTTPOnly 屬性可以防止 XSS 攻擊，Secure 屬性可以防止網路監聽攻擊，但它們都無法直接防止 CSRF 攻擊，只能降低攻擊的成功率。

通常，使用 token 驗證機制配合 Referer 驗證是最常見的方式，可以有效地防止 CSRF 攻擊。

---

#### VUE

### 最佳實踐，例如只允許特定的來源訪問 API，以及限制跨來源訪問時可以傳遞的 HTTP 方法和標頭等。

---

## 網頁類

### Q.第三方 Cookie 為何要取得使用者資料

- 何謂 Cookie

  - 是一種在用戶端（即瀏覽器）中存儲的小文件，它包含了有關用戶和他們與網站的互動的信息。
  - 資訊內容包括:
    - 設備類型、首選語言、訪問日期和時間以及其他類似的數據

- 可以取得的資料

  1. 記住用戶設置和首選項目：Cookie 可以幫助第三方網站記住用戶的設置和首選項目，如語言偏好和訪問歷史記錄。這樣可以使用戶在下一次訪問該網站時，體驗更加流暢和個性化。

  2. 優化網站性能：Cookie 可以幫助第三方網站優化其性能，例如通過記住用戶設置來減少請求次數，或通過記住用戶首選項目來減少頁面加載時間。

  3. 統計和分析用戶行為：Cookie 可以幫助第三方網站收集有關用戶行為和趨勢的數據。這些數據可以幫助網站更好地了解其用戶，以制定更好的營銷策略、優化產品和服務，並改進用戶體驗。

  4. 用於廣告投放：Cookie 可以幫助第三方網站了解用戶的興趣和行為，以便更好地投放廣告。這些廣告可以更好地適應用戶的需求和興趣，以提供更好的用戶體驗。

- 舉例
  - 為何 stackoverflow 這個網頁而言 為何他會需要使用者的 cookie
    - 原因:
      - Stack Overflow 依賴於 cookie 來提供更好的用戶體驗和功能。以下是幾個使用者 cookie 的原因：
        - 身份驗證和授權：在 Stack Overflow 上註冊並登錄後，用戶的身份信息將被存儲在 cookie 中。每次用戶在 Stack Overflow 上進行操作時，都需要驗證其身份和授權，以確保用戶具有足夠的權限執行該操作。
        - 個性化體驗：Stack Overflow 可以使用 cookie 存儲用戶的首選項、歷史記錄和其他信息，以提供更個性化的體驗。例如，Stack Overflow 可以使用 cookie 記錄用戶的瀏覽歷史和搜索歷史，以提供更相關的問題和答案。
        - 分析和優化：Stack Overflow 使用 cookie 來收集匿名的統計信息，以了解用戶如何使用網站並優化其功能。例如，Stack Overflow 可以使用 cookie 收集用戶的瀏覽器類型和操作系統信息，以確定應該優化哪些功能和頁面。

```

```
