# Spring Security

- [Spring Security](#spring-security)
  - [## 專有名詞說明](#-專有名詞說明)
    - [JWT (JSON Web Token)](#jwt-json-web-token)
    - [OAuth](#oauth)
  - [Reference](#reference)

## 專有名詞說明
---
### JWT (JSON Web Token)
- 定義:
    - 是由 Auth0 所提構出的一個新 Token 想法
    - 是一個非常輕巧的規範,允許我們使用JWT在用戶和sever之間傳遞安全可靠的資訊
    - 使用 JWT 不僅能夠節省伺服端的資料庫連線開銷，又能夠在資料分享上變得更加便利。
    - JWT取代了傳統的TOKEN
        > 你能夠直接在 JWT 中存放資料，而不用額外呼叫資料庫。
        - 比較:
        
        | Compare        | JWT                               | Token                                     |
        |----------------|-----------------------------------|-------------------------------------------|
        | 如何驗證使用者 | 直接把使用者資料存放在「Token」中 | 需要呼叫資料庫並且比對這一個 Token 是誰的 |

    - Token取代了原先常使用的Session 
      - 原因: 具狀態性（Stateful）還有容易受跨網域請求偽造攻擊（CSRF Attack）
        -  具狀態性:
           -  當透過Load Balancer進行附載平衡時,會有多台機器,每部server內的session的狀態並不會同步,也因此如下圖所示,若在A機器登入,B機器並不會知道使用者有登入

            ![jwt1_stateful_problem](/src/img/backend/java/security/jwt1_stateful_problem.png)


        -  易受跨網域請求偽造攻擊:
           -  由於Session是存在Server的,這意味者客戶端在發送請求時幾乎不用提供什麼資訊,若有人發送一個刪除文章的連結給你,可能會在不知情的情況下刪除。

- JWT組成方式:
    - 一個JWT是一個String, 由Header、Payload、簽名組成
    
        ![JWT組成](/src/img/backend/java/security/jwt_flow.png)

    - Header(標頭)
      - 包含了加密類型（alg）、定義類型（typ）兩部分
        ```
        {
        "alg": "HS256",
        "typ": "JWT"
        }
        ```
      - 並通過```base64``` 轉化得到第一段字串
        ```
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        ```
    - Payload(內容)
      - 此部分沒有被加密,因此盡量不要放機敏資料, 也會透過```base64``` 轉化得到第二段字串
        ```
        {
        "sub": "1234567890",
        "name": "John Doe",
        "admin": true
        }
        ```
    - 簽名
        - 要發JWT時,會用一組密碼來當簽名,避免被串改內容
        - 算法方式:
          - 是由上方兩個區塊的 Base64 以點（.）符號組合起來，並以密碼（在這裡是 secret）加密。
            ```
            HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), "secret") 
            ```
        - 由於 ```secret``` 這個密碼是儲存在伺服端的，所以沒有人知道（除非暴力破解
        - 任何人都可以修改 JWT 的內容，但是當他簽發的時候並不知道密碼，所以會有不對的簽名，伺服端也就自然不會接受這個錯誤的 JWT。

- Token 解決了什麼:
  - 無狀態性:
    - Token 本身是不帶資訊的且無狀態性的（Stateless），當伺服器接收到 Token 時，會主動去對應使用者的資料表，接著就能夠知道這個 Token 代表著哪個使用者，然****後抓出相關的資訊來使用。
    - 注意 : Token 不可以被別人知道，否則別人就能夠擁有你的身份、偽造成你
  - 安全性提高:
    - 須主動提供 Token，也順帶解決了跨網域請求偽造攻擊

---

### OAuth

- 簡介


---
## Reference
- 專有名詞
  - JWT
    - [jwt官網](https://jwt.io/)
    - [以 JSON Web Token 替代傳統 Token](https://yami.io/jwt/)
  - OAuth
    - [OAuth 2.0 筆記 (1) 世界觀](https://blog.yorkxin.org/posts/oauth2-1-introduction.html)