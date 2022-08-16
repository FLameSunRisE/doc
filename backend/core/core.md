# 核心知識
- [核心知識](#核心知識)
  - [網路類](#網路類)
    - [**<a id="Session-Cookie-Token">Session、Cookie、Token</a>**](#sessioncookietoken)
        - [Session](#session)
        - [Cookie](#cookie)
        - [Token](#token)



## 網路類
### **<a id="Session-Cookie-Token">Session、Cookie、Token</a>**
##### Session
- 定義:
    - Server端保存的一種數據結構，用來追蹤用戶狀態
- 產生過程:
    - 用戶第一次登陸網站後,brower會將用戶資料發送至Server, Server會為該用戶建立一個SessionId, 並在response內容(Cookie)中將SessionId一併返回browers,並保存在用戶的local。 因此當用戶再次發出請求時,brower會將上次儲存的資料(SessionID...)一併傳送至Server，Server在接收到請求後,會根據SessionId判斷是哪位用戶,並根據SessionId在Session庫中取得用戶資訊並返回給brower

##### Cookie
- 定義:
    - Client端保存用戶的一種機制,用來記錄用戶的資訊,也是實現Session的一種方式
    - Cookie儲存空間有限
##### Token
- 定義:
    - Token主要是某一個唯一值(userId)透過一些加密算法產生的一個字串稱之為Token
- 原理:
    - 為了避免每次用戶登入時都需要頻繁的與DB查詢帳戶資料與密碼而誕生了Token,其主要是透過使用者的唯一識別值透過加密生成的唯一值(Token)並返回Client端並保存起來,在下次請求時只需要帶入Token便能去驗證識別該用戶了。