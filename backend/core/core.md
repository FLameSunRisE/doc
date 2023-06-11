# 核心知識

- [核心知識](#核心知識)
  - [網路類](#網路類)
    - [**Session、Cookie、Token**](#sessioncookietoken)
        - [Session](#session)
        - [Cookie](#cookie)
        - [Token](#token)

## 網路類

### **<a id="Session-Cookie-Token">Session、Cookie、Token</a>**

##### Session

- 定義:
  - Server 端保存的一種數據結構，用來追蹤用戶狀態
- 產生過程:
  - 用戶第一次登陸網站後,brower 會將用戶資料發送至 Server, Server 會為該用戶建立一個 SessionId, 並在 response 內容(Cookie)中將 SessionId 一併返回 browers,並保存在用戶的 local。 因此當用戶再次發出請求時,brower 會將上次儲存的資料(SessionID...)一併傳送至 Server，Server 在接收到請求後,會根據 SessionId 判斷是哪位用戶,並根據 SessionId 在 Session 庫中取得用戶資訊並返回給 brower

##### Cookie

- 定義:
  - Client 端保存用戶的一種機制,用來記錄用戶的資訊,也是實現 Session 的一種方式
  - Cookie 儲存空間有限

##### Token

- 定義:
  - Token 主要是某一個唯一值(userId)透過一些加密算法產生的一個字串稱之為 Token
- 原理:
  - 為了避免每次用戶登入時都需要頻繁的與 DB 查詢帳戶資料與密碼而誕生了 Token,其主要是透過使用者的唯一識別值透過加密生成的唯一值(Token)並返回 Client 端並保存起來,在下次請求時只需要帶入 Token 便能去驗證識別該用戶了。
