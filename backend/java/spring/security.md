# Spring Security

- [Spring Security](#spring-security)
  - [概念](#概念)
  - [核心功能](#核心功能)
  - [專有名詞說明](#專有名詞說明)
    - [JWT (JSON Web Token)](#jwt-json-web-token)
    - [OAuth](#oauth)
  - [Reference](#reference)

---

## 概念

Spring Security 的底層主要是 基於 Spring AOP 和 Servlet 過濾器 來實現安全控制，它提供了一個全面的安全性解決方案，用於身份驗證、授權和其他安全性任務。

Spring Security 基於 Servlet 範圍的應用程序，提供了可重用的 Java 安全性模型，允許使用者自定義身份驗證和授權策略。

Spring Security 支持多種身份驗證方式，包括基於表單、HTTP 基本身份驗證、OpenID、LDAP 等方式，使得開發者能夠靈活地配置和使用安全性功能。此外，Spring Security 還提供了防止攻擊的功能，例如跨站請求攻擊（CSRF）防護和 HTTP 標頭攔截，以及其他安全性增強功能，例如加密和數字簽名等。

---

## 核心功能

- 身份驗證（Authentication）：驗證用戶的身份，確認用戶是誰。

- 授權（Authorization）：控制用戶對資源的訪問權限，決定用戶能夠做什麼。

- 攻擊防護（Protection against attacks）：保護應用程序不受常見的攻擊，如跨站點腳本（XSS）、跨站點請求偽造（CSRF）等。

- 會話管理（Session management）：管理用戶的會話狀態，包括創建、銷毀、獲取用戶信息等。

- 集成其他安全框架：Spring Security 可以集成其他安全框架，如 OAuth2、LDAP、CAS 等。

- 記錄和審計（Logging and auditing）：記錄安全事件和審計信息，方便進行安全審計和監控。

---

## 專有名詞說明

---

### JWT (JSON Web Token)

- 定義:

  - 是由 Auth0 所提構出的一個新 Token 想法
  - 是一個非常輕巧的規範,允許我們使用 JWT 在用戶和 sever 之間傳遞安全可靠的資訊
  - 使用 JWT 不僅能夠節省伺服端的資料庫連線開銷，又能夠在資料分享上變得更加便利。
  - JWT 取代了傳統的 TOKEN

    > 你能夠直接在 JWT 中存放資料，而不用額外呼叫資料庫。

    - 比較:

    | Compare        | JWT                               | Token                                     |
    | -------------- | --------------------------------- | ----------------------------------------- |
    | 如何驗證使用者 | 直接把使用者資料存放在「Token」中 | 需要呼叫資料庫並且比對這一個 Token 是誰的 |

  - Token 取代了原先常使用的 Session

    - 原因: 具狀態性（Stateful）還有容易受跨網域請求偽造攻擊（CSRF Attack）

      - 具狀態性:

        - 當透過 Load Balancer 進行附載平衡時,會有多台機器,每部 server 內的 session 的狀態並不會同步,也因此如下圖所示,若在 A 機器登入,B 機器並不會知道使用者有登入

        ![jwt1_stateful_problem](/src/img/backend/java/security/jwt1_stateful_problem.png)

      - 易受跨網域請求偽造攻擊:
        - 由於 Session 是存在 Server 的,這意味者客戶端在發送請求時幾乎不用提供什麼資訊,若有人發送一個刪除文章的連結給你,可能會在不知情的情況下刪除。

- JWT 組成方式:

  - 一個 JWT 是一個 String, 由 Header、Payload、簽名組成

    ![JWT組成](/src/img/backend/java/security/jwt_flow.png)

  - Header(標頭)
    - 包含了加密類型（alg）、定義類型（typ）兩部分
      ```
      {
      "alg": "HS256",
      "typ": "JWT"
      }
      ```
    - 並通過`base64` 轉化得到第一段字串
      ```
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
      ```
  - Payload(內容)
    - 此部分沒有被加密,因此盡量不要放機敏資料, 也會透過`base64` 轉化得到第二段字串
      ```
      {
      "sub": "1234567890",
      "name": "John Doe",
      "admin": true
      }
      ```
  - 簽名
    - 要發 JWT 時,會用一組密碼來當簽名,避免被串改內容
    - 算法方式:
      - 是由上方兩個區塊的 Base64 以點（.）符號組合起來，並以密碼（在這裡是 secret）加密。
        ```
        HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), "secret")
        ```
    - 由於 `secret` 這個密碼是儲存在伺服端的，所以沒有人知道（除非暴力破解
    - 任何人都可以修改 JWT 的內容，但是當他簽發的時候並不知道密碼，所以會有不對的簽名，伺服端也就自然不會接受這個錯誤的 JWT。

---

### OAuth

- 簡介

---

## Reference

- 專有名詞

  - JWT
    - [jwt 官網](https://jwt.io/)
    - [以 JSON Web Token 替代傳統 Token](https://yami.io/jwt/)
  - OAuth
    - [OAuth 2.0 筆記 (1) 世界觀](https://blog.yorkxin.org/posts/oauth2-1-introduction.html)

- 區分 Overloading method?
  :::success
  :bulb: **方法參數列:**
  :::
- Java class 有幾個 constructor?
  a. 0
  b. 1
  c. 2
  d. 3
  :::warning
  :bulb: **答案:1**
