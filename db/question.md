# Question

- [Question](#question)
  - [Q.樂觀鎖和悲觀鎖是什麼](#q樂觀鎖和悲觀鎖是什麼)
    - [定義](#定義)
  - [Q.悲觀鎖是否會發生 dirty read](#q悲觀鎖是否會發生-dirty-read)
  - [Q.SQL 如何優化](#qsql-如何優化)
  - [Q.sql index 的種類(Cluster index / non-cluster index)](#qsql-index-的種類cluster-index--non-cluster-index)

## Q.樂觀鎖和悲觀鎖是什麼

- 悲觀鎖（Pessimistic Lock）是一種並發控制策略，核心理念是認為資料非常不安全。當一個事務訪問資料時，假設其他事務也會訪問同一筆資料並且可能修改資料，因此在訪問資料之前，會將資料鎖定，以避免其他事務訪問或修改該資料。

- 樂觀鎖（Optimistic Lock）是另一種並發控制策略，核心理念是資料變動頻率低，因此允許多個 SQL 動作。使用版本控制實現，每次修改資料時會增加一個版本號，當事務訪問資料時，會比較版本號是否一致，以判斷資料是否被修改過。如果該資料在事務執行期間被修改，事務會檢測到並回滾操作。因此，在事務訪問資料時，不會將資料鎖定，只有在確定資料未被修改後才進行操作。

### 定義

- 悲觀鎖 —Pessimistic Lock
  - 核心理念: 認為 table 的 data 非常不安全
    - 指當一個事務正在訪問資料時，假設其他事務也會訪問同一筆資料並且可能修改資料，因此在訪問資料之前，會將資料鎖定，以避免其他事務訪問或修改該資料。
  - 優缺點
    - 優點：使用資料庫 Transaction 機制強迫執行的順序
    - 缺點：會導致交易阻塞,執行時間過長會造成體驗不良並造成系統吞吐量下降
  - 範例:
    - 假設有一個銀行系統，其中一個功能是轉帳，轉帳需要從一個帳戶扣款，並將款項轉移到另一個帳戶。如果兩個事務同時嘗試從同一個帳戶扣款，則可能會出現錯誤或數據不一致的情況。
    - 如何解決
      - 在這種情況下，可以使用**悲觀鎖來保護資料的一致性**。當一個事務開始進行轉帳操作時，可以鎖定轉出帳戶，以確保其他事務無法訪問該帳戶，直到該事務完成轉帳操作並釋放鎖為止。這樣可以確保同一時間只有一個事務可以訪問該帳戶，從而保證數據的一致性。
- 樂觀鎖 — Optimistic Lock

  - 核心理念: 資料變動頻率低,因此允許多個 sql 動作
    - 使用版本控制實現，每次修改資料時會增加一個版本號
      - 當事務訪問資料時，會比較版本號是否一致，以判斷資料是否被修改過。
    - 是指當一個事務正在訪問資料時，假設其他事務不會修改資料，因此不會將資料鎖定
      - 如果該資料在事務執行期間被修改，事務會檢測到並回滾操作。
  - 優缺點
    - 優點：只有更新資料時才會做驗證
    - 缺點：開發人員實現的,可能會有其他 side effect
  - 範例:
    - 假設有一個博客系統，其中一個功能是多個用戶可以編輯同一篇博客文章。如果兩個用戶同時編輯同一篇文章，則可能會出現數據不一致的情況。
    - 如何解決:使用樂觀鎖來保護資料的一致性。
      - 當一個用戶開始編輯文章時，可以讀取該文章的版本號。當用戶提交更改時，系統將比較提交的版本號是否與當前文章的版本號相同。
      - 版本號不同
        - 則表示該文章已被其他用戶更改，此時用戶需要重新讀取文章並進行必要的更改。
      - 版本號相同
        - 則表示該文章未被更改，系統將接受用戶提交的更改並更新文章。

- Ref
  - [理解資料庫『悲觀鎖』和『樂觀鎖』的觀念](https://medium.com/dean-lin/%E7%9C%9F%E6%AD%A3%E7%90%86%E8%A7%A3%E8%B3%87%E6%96%99%E5%BA%AB%E7%9A%84%E6%82%B2%E8%A7%80%E9%8E%96-vs-%E6%A8%82%E8%A7%80%E9%8E%96-2cabb858726d)

## Q.悲觀鎖是否會發生 dirty read

悲觀鎖通常不會發生 dirty read 的情況，因為當一個事務鎖定資料時，其他事務無法訪問或修改該資料，因此不會出現其他事務讀取到未提交的資料的情況。但悲觀鎖可能會導致阻塞的問題，因為其他事務需要等待該鎖釋放，才能進行訪問或修改資料。

- 範例:
  假設有兩個事務同時訪問同一個帳戶資料，其中一個事務正在修改該帳戶的餘額，而另一個事務試圖讀取該帳戶的餘額：

```sql!
-- 事務1
BEGIN TRANSACTION;
SELECT balance FROM account WHERE id = 123 FOR UPDATE;
-- 進行餘額修改操作
UPDATE account SET balance = balance - 100 WHERE id = 123;
COMMIT;

-- 事務2
BEGIN TRANSACTION;
SELECT balance FROM account WHERE id = 123 FOR UPDATE;
-- 讀取餘額
SELECT balance FROM account WHERE id = 123;
COMMIT;

```

## Q.SQL 如何優化

- 使用索引
  索引可以大大提高數據庫的查詢速度。在 MySQL 中，可以使用 CREATE INDEX 命令添加索引。請確保索引建立在最常被查詢的欄位上，並且使用適當的索引類型。

  - Example

    - 假設有一個表 orders，存儲了訂單信息，其中包括 id、user_id、product_id 和 order_time 等欄位，現在需要優化以下查詢語句：

    ```sql
    SELECT * FROM orders WHERE user_id = 1001 AND order_time > '2022-01-01';
    ```

    - 建立一個複合索引，包括 user_id 和 order_time 兩個欄位。這樣，MySQL 就可以通過這個索引快速地找到符合條件的數據，而不必進行全表掃描。

    ```sql
    CREATE INDEX idx_user_time ON orders (user_id, order_time);
    ```

- 適當地使用 JOIN
  JOIN 操作是 SQL 中很常用的操作，但是如果 JOIN 操作過多或不適當，會大大降低數據庫的效能。請確保 JOIN 操作使用適當的 JOIN 類型，並且限制 JOIN 操作的數量。

- 避免使用 SELECT *
  使用 SELECT*會讓 MySQL 從磁盤中讀取整個表的所有欄位，這會消耗大量的資源。請盡量只查詢需要的欄位，並且使用 LIMIT 語句限制查詢結果的數量。

- 使用分區表
  MySQL 支持分區表，可以將大表分成多個小表，進一步提高數據庫的查詢速度。 - Example:
  假設有一個表 logs，存儲了每天的日誌信息，其中包括 id、log_time、level 和 message 等欄位。現在需要查詢某一個月的日誌信息，查詢語句如下： - 分區方式 - 建立分區表:

  ```sql
      SELECT * FROM logs WHERE log_time >= '2022-01-01' AND log_time < '2022-02-01';
  ```

- 將數據插入到分區表中

  ```sql
      CREATE TABLE logs_part (
        id INT NOT NULL AUTO_INCREMENT,
        log_time DATETIME NOT NULL,
        level VARCHAR(10) NOT NULL,
        message VARCHAR(255) NOT NULL,
        PRIMARY KEY (id, log_time)
      ) ENGINE=InnoDB
      PARTITION BY RANGE(TO_DAYS(log_time)) (
        PARTITION p1 VALUES LESS THAN (TO_DAYS('2022-02-01')),
        PARTITION p2 VALUES LESS THAN (TO_DAYS('2022-03-01')),
        PARTITION p3 VALUES LESS THAN (TO_DAYS('2022-04-01')),
        PARTITION p4 VALUES LESS THAN (TO_DAYS('2022-05-01'))
      );
  ```

- 使用 EXPLAIN 命令
  使用 EXPLAIN 命令可以查詢 SQL 查詢的執行計劃，從而找到 SQL 語句的瓶頸，進一步優化 SQL 語句。 - Example:假設有一個表 orders，存儲了訂單信息，其中包括 id、user_id、product_id 和 order_time 等欄位，現在需要優化以下查詢語句：

  - 如何操作:

    1. 透過`EXPLAIN`找出 sql 查詢頻頸

    ```sql
        EXPLAIN SELECT * FROM orders WHERE user_id = 1001 AND order_time > '2022-01-01';
    ```

    2. 分析執行計劃，找到瓶頸

       - type 欄位：顯示 MySQL 使用的查詢類型，包括 const、eq_ref、ref、range、index、all 等。一般來說，類型越好，效率越高。
       - key 欄位：顯示 MySQL 使用的索引，如果顯示為 NULL，則表示 MySQL 沒有使用索引。
       - rows 欄位：顯示 MySQL 查詢時需要讀取的行數，這個數字越大，效率越低。

    3. 針對弱項進行優化
       - 如果 type 欄位顯示為 ALL，表示 MySQL 正在對整個表進行全表掃描，可以建立 index 進行優化

- 定期優化表
  定期優化表可以清理表中不必要的數據，並且重建索引，進一步提高數據庫效能。可以使用 OPTIMIZE TABLE 命令進行表的優化。

```sql
OPTIMIZE TABLE user_logs;
```

---

## Q.sql index 的種類(Cluster index / non-cluster index)

- 比較

  | 項目/index      | Clustered Index                                         | Non-Clustered Index                      |
  | --------------- | ------------------------------------------------------- | ---------------------------------------- |
  | 定義            | 完整資料(包含所有 column）在 Storage 中實際上的排序依據 | 跟完整資料分開來放的欄位子集合的排序依據 |
  | 資料結構        | B-Tree                                                  | Heap                                     |
  | 代表 DB         | MySQL                                                   | PostgreSQL                               |
  | 適合場景        | 快速查詢和排序的場景、提高主鍵查詢的效率                | 快速查詢但不需要排序的場景               |
  | 缺點            | 主鍵更新時會重新排序導致效能開銷                        | 查詢時需要先查詢索引表才會查詢元表       |
  | 每個 Table 數量 | 1 個                                                    | 多個                                     |

- 聚簇索引（Clustered Index）

  - 定義:
    聚簇索引也被稱為**主索引**，它是通過將數據物理上存儲在索引欄位上的一種索引方式。聚簇索引會將表中的數據按照索引欄位的值進行排序，並且物理上存儲在索引欄位上，因此查詢速度非常快。但是，由於聚簇索引需要將數據物理上存儲在索引欄位上，因**此當數據發生變化時，需要重新排序**，這會帶來一定的性能開銷。

- 非聚簇索引（Non-clustered Index）

  - 定義:
    非聚簇索引是通過建立一個索引表，將索引欄位和對應數據的記錄指標存儲在這個表中的一種索引方式。非聚簇索引可以**加快查詢速度，而且不會帶來重排序的開銷**。但是，非聚簇索引需要**額外的空間存儲索引表，並且查詢時需要先查詢索引表**，再查詢原表，因此會帶來一定的性能開銷。

- Ref
  - [[食譜好菜] Clustered Index 與 Non-Clustered Index 不同之處](https://dotblogs.com.tw/supershowwei/2016/01/25/155054)
