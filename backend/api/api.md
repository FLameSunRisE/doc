# Api設計規範

- [Api設計規範](#api設計規範)
  - [RESTful API -  Representational State Transfer( 表現層狀態轉移)](#restful-api----representational-state-transfer-表現層狀態轉移)
    - [定義](#定義)
    - [三種組成方式](#三種組成方式)
    - [使用方式](#使用方式)
    - [主要特點](#主要特點)
    - [與一般API的差異](#與一般api的差異)
    - [舉例](#舉例)
  - [Ref](#ref)

---

## RESTful API -  Representational State Transfer( 表現層狀態轉移)

### 定義

- RESTful API 是一種設計風格，
- 是以資源為中心的架構，讓伺服器提供的功能（例如：新增、查詢、修改、刪除）成為一個或多個 RESTful 資源，並透過 HTTP 的方式進行通訊

### 三種組成方式

1. Nouns 名詞：定義資源位置的 URL，每個資源在網路上都會有唯一的位置，就如每戶人家都有唯一的地址一樣。
2. Verbs 動詞：對資源要做的動作。
3. Content Types 資源呈現方式：API 資源可以以多種方式表現，最常用的是 JSON，較輕，也較好處理。

### 使用方式

- GET：用於```讀取```資源，通常用於查詢、檢視等操作。
- POST：用於```新增```資源，通常用於創建、提交等操作。
- PUT：用於```更新```資源，通常用於修改、覆蓋等操作。
- DELETE：用於```刪除```資源，通常用於刪除操作。.

### 主要特點

1. 資源導向：每一個資源都有一個唯一的識別 URI，用來標識該資源。

2. 無狀態：服務器不會保留客戶端的狀態。每次請求必須包含所有的必要資訊，以便伺服器能夠理解請求。

3. 廣泛使用的 HTTP 方法：使用 HTTP 協議中的方法

   - 例如：GET、POST、PUT、DELETE

4. 支援多種格式：RESTful API 可以支援多種請求和回應的格式，如 JSON、XML、HTML 等。

5. 安全性：RESTful API 可以實現安全性機制，如 HTTPS、OAuth 等，以保護伺服器和客戶端之間的通訊安全

### 與一般API的差異

- 一般

  ```txt
  獲得資料GET    /getData
  新增資料POST   /createData
  刪除資料DELETE /deleteData/1
  ```

- RESTful API

  ```txt
  獲得資料GET     /data
  新增資料POST    /data
  刪除資料DELETE  /data/1
  ```



### 舉例

>假設有一個資料庫儲存了某個電子商務網站的產品清單，需要透過 RESTful API 來提供使用者存取產品清單。

1. GET /products

   - 描述：取得所有產品清單。
   - 方法：GET
   - 路徑：/products
   - 回傳：所有產品清單的 JSON 格式。

2. GET /products/{id}

   - 描述：取得指定產品的詳細資料。
   - 方法：GET
   - 路徑：/products/{id}，其中 {id} 代表產品的唯一識  別-  碼。
   - 回傳：指定產品的詳細資料，以 JSON 格式回傳。

3. POST /products

   - 描述：新增一筆產品。
   - 方法：POST
   - 路徑：/products
   - 輸入：欲新增的產品資料，以 JSON 格式傳送。
   - 回傳：新增成功的產品資料，以 JSON 格式回傳。

4. PUT /products/{id}

   - 描述：更新指定產品的資料。
   - 方法：PUT
   - 路徑：/products/{id}，其中 {id} 代表欲更新產品的  唯-  一識別碼。
   - 輸入：欲更新的產品資料，以 JSON 格式傳送。
   - 回傳：更新成功的產品資料，以 JSON 格式回傳。

5. DELETE /products/{id}

   - 描述：刪除指定產品。
   - 方法：DELETE
   - 路徑：/products/{id}，其中 {id} 代表欲刪除產品的  唯-  一識別碼。
   - 回傳：成功刪除訊息。

---

## Ref

- [API 是什麼? RESTful API 又是什麼?
](https://medium.com/itsems-frontend/api-%E6%98%AF%E4%BB%80%E9%BA%BC-restful-api-%E5%8F%88%E6%98%AF%E4%BB%80%E9%BA%BC-a001a85ab638)