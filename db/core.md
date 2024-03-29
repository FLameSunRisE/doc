# DB 相關

- [DB 相關](#db-相關)
  - [核心](#核心)
    - [SQL 的最左匹配原则](#sql-的最左匹配原则)
      - [最左匹配原则介紹](#最左匹配原则介紹)
      - [最左匹配原则要點](#最左匹配原则要點)
      - [範例](#範例)
      - [ref](#ref)
    - [聚集索引和非聚集索引(clustered index and secondary index)](#聚集索引和非聚集索引clustered-index-and-secondary-index)
      - [聚集索引（Clustered Index）](#聚集索引clustered-index)
      - [非聚集索引（Secondary Index）](#非聚集索引secondary-index)
      - [兩者差異(Clustered Index vs Secondary Index)](#兩者差異clustered-index-vs-secondary-index)
      - [總結](#總結)
    - [如何解讀 explain 的資料](#如何解讀-explain-的資料)
      - [type](#type)
      - [rows 字段](#rows-字段)
      - [key 字段](#key-字段)
      - [Extra 字段](#extra-字段)
      - [possible\_keys 字段和 key 字段](#possible_keys-字段和-key-字段)
      - [Using filesort 和 Using temporary 字段](#using-filesort-和-using-temporary-字段)
      - [key\_len 字段](#key_len-字段)
      - [ref 字段](#ref-字段)

---

## 核心

### SQL 的最左匹配原则

#### 最左匹配原则介紹

是指在使用索引進行查詢時，索引的最左前綴會優先匹配查詢條件。這意味著如果一個索引包含多個列，查詢條件中必須包含該索引的最左前綴列，才能充分利用索引進行查詢優化。

#### 最左匹配原则要點

- 最左優先：以最左邊的列作為起點進行匹配。
- 連續匹配：查詢條件中的列必須按照索引定義的順序從左到右連續出現。
- 範圍查詢停止匹配：當遇到範圍查詢（>、<、between、like）時，後續列的匹配會停止。

#### 範例

假設有一個名為"users"的表，包含以下列：id、first_name、last_name、age。我們創建了一個聯合索引 (first_name, last_name)。

根據最左匹配原則，以下查詢可以充分利用索引：

- case1:

  - 這個查詢中，查詢條件正好按照索引的最左前綴列進行匹配，所以數據庫系統可以有效地使用索引進行查詢。
  - 然而，如果查詢條件改變，索引的最左前綴列沒有被包含在查詢中，最左匹配原則將無法應用：
  - code

    ```sql
    SELECT * FROM users WHERE first_name = 'John' AND last_name = 'Doe';
    ```

- case2:

  - 如果查詢條件改變，索引的最左前綴列沒有被包含在查詢中，最左匹配原則將無法應用：
  - code

    ```sql
    SELECT * FROM users WHERE last_name = 'Doe';
    ```

在這個查詢中，查詢條件只包含了索引的第二個列"last_name"，而沒有包含第一個列"first_name"。根據最左匹配原則，索引將無法有效地被使用，可能導致性能下降。

因此，索引的最左匹配原則要求我們在設計索引時，要根據實際的查詢需求和使用頻率，選擇適當的列作為索引的最左前綴，以提高查詢效率和性能。

#### ref

- [MySQL 索引最左匹配原则是什么](https://worktile.com/kb/p/24047)
- [MySQL 遵循最左前缀匹配原则！面试官：回去等通知吧](https://www.51cto.com/article/741503.html)

---

### 聚集索引和非聚集索引(clustered index and secondary index)

> 聚集索引是表中數據的物理排序方式，它決定了數據在磁盤上的物理存儲順序。聚集索引通常是主鍵索引，它的葉子節點包含完整的行記錄。非聚集索引是額外創建的索引，用於加快特定列的查詢速度，它的葉子節點存儲索引列的值和數據行指針。一個表只能有一個聚集索引，但可以有多個非聚集索引。

#### 聚集索引（Clustered Index）

- 聚集索引是數據庫表的**物理排序方式**，決定了表中數據的物理存儲順序。
- 每個表只能有一個聚集索引，通常是主鍵索引，但如果表沒有主鍵，則會選擇一個唯一索引作為聚集索引。
- 聚集索引的葉子節點包含了完整的行記錄，因此聚集索引的葉子節點存儲了數據行的實際數據。
- 聚集索引對於頻繁的範圍查詢和排序操作非常高效，因為相關的數據行在物理上相鄰存儲。

#### 非聚集索引（Secondary Index）

- 非聚集索引是在表中**創建的額外索引**，用於**加快特定列的查詢速度**。
- **一個表可以有多個非聚集索引**，它們可以包含一個或多個列。
- 非聚集索引的葉子節點不存儲實際的行記錄，而是**存儲索引列的值和指向對應數據行的指針**。
- 當使用非聚集索引進行查詢時，數據庫系統**首先在索引中找到匹配的值，然後根據指針找到實際的數據行**。

#### 兩者差異(Clustered Index vs Secondary Index)

| 項目     | 聚集索引                   | 非聚集索引                 |
| -------- | -------------------------- | -------------------------- |
| 定義     | 表中數據的物理排序方式     | 額外創建的索引             |
| 數量     | 每個表只能有一個聚集索引   | 一個表可以有多個非聚集索引 |
| 葉子節點 | 包含完整的行記錄           | 存儲索引列的值和數據行指針 |
| 數據存儲 | 存儲實際的行數據           | 不存儲實際的行數據         |
| 查詢速度 | 範圍查詢和排序效率高       | 加快特定列的查詢速度       |
| 物理順序 | 決定表中數據的物理存儲順序 | 與表的物理存儲順序無關     |

- 聚集索引決定了表中數據的物理存儲順序，而非聚集索引是在聚集索引之外創建的，其存儲結構與表的物理存儲順序無關。
- 聚集索引的葉子節點存儲了完整的行記錄，而非聚集索引的葉子節點存儲的是索引列的值和指向數據行的指針。
- 聚集索引通常是表的主鍵索引，對於頻繁的範圍查詢和排序操作具有高效性能。非聚集索引用於加快特定列的查詢速度。

#### 總結

聚集索引和非聚集索引是數據庫中常用的索引類型。聚集索引**決定了表中數據的物理存儲順序**，並提供了快速範圍查詢和排序的能力；非聚集索引用於**加快特定列的查詢速度**，其葉子節點存儲了索引列的值和指向數據行的指針。根據具體的查詢需求和表結構，可以選擇合適的索引類型來優化數據庫的查詢性能。

---

### 如何解讀 explain 的資料

| 參數            | 解釋                                                                           |
| --------------- | ------------------------------------------------------------------------------ |
| type            | 訪問表的方式，從最好到最差的順序為：const > eq_ref > ref > range > index > all |
| rows            | 查詢時掃描的行數，該值越小越好，表示查詢的效率越高                             |
| key             | 使用的索引，如果為 NULL，則表示沒有使用索引                                    |
| Extra           | 額外的信息，如是否使用了臨時表、文件排序等                                     |
| possible_keys   | 可能使用的索引                                                                 |
| key_len         | 索引的長度，值越小越好                                                         |
| ref             | 連接的條件，通常是索引字段                                                     |
| Using filesort  | 是否需要進行文件排序                                                           |
| Using temporary | 是否使用臨時表                                                                 |

#### type

> 最好到最差的顺序为：const > eq_ref > ref > range > index > all。

| Type   | 含義                              |
| ------ | --------------------------------- |
| const  | 表中最多只有一行匹配              |
| eq_ref | 使用唯一索引或主鍵進行連接        |
| ref    | 使用非唯一索引進行連接            |
| system | 表只有一行，這是 const 類型的特例 |
| range  | 使用索引範圍掃描進行連接          |
| index  | 使用索引進行全表掃描              |
| all    | 全表掃描                          |
| null   | 無效或空查詢結果                  |

- const：表示表中最多只有一行匹配。通常在使用主键或唯一索引进行精确查找时出现。例如，根据主键查询单个用户信息的查询语句。

  ```sql
  SELECT * FROM users WHERE id = 1;
  ```

- eq_ref：表示使用唯一索引或主键进行连接。通常在连接操作中使用唯一索引进行关联查询时出现。例如，根据外键进行关联查询的语句。

  ```sql
  SELECT * FROM orders o JOIN customers c ON o.customer_id = c.id;
  ```

- ref：表示使用非唯一索引进行连接。通常在连接操作中使用非唯一索引进行关联查询时出现。例如，根据非唯一索引字段进行关联查询的语句。

  ```sql
  SELECT * FROM products p JOIN categories c ON p.category_id = c.id;
  ```

- system：表示表只有一行，是 const 类型的特例。通常在查询系统表或静态表时出现。

  ```sql
  SELECT * FROM information_schema.tables WHERE table_name = 'users';
  ```

- range：表示使用索引范围扫描进行连接。通常在使用范围查询（>、<、between 等）时出现。

  ```sql
  SELECT * FROM orders WHERE order_date BETWEEN '2022-01-01' AND '2022-12-31';
  ```

- index：表示使用索引进行全表扫描。通常在没有更好的索引选择时出现。

  ```sql
  SELECT * FROM products WHERE price > 1000;
  ```

- all：表示全表扫描，即没有使用索引。通常在没有合适的索引可用时出现。

  ```sql
  SELECT * FROM users;
  ```

- null：表示无效或空查询结果。

  ```sql
  SELECT * FROM users WHERE 1 = 0;
  ```

#### rows 字段

表示查詢時掃描的行數，該值越小越好，表示查詢的效率越高。

#### key 字段

表示使用的索引，如果該字段為 NULL，則表示沒有使用索引。

#### Extra 字段

表示額外的信息，如是否使用了臨時表、文件排序等。可以根據具體的 Extra 信息來判斷是否存在性能問題。

#### possible_keys 字段和 key 字段

表示可能使用的索引和實際使用的索引。如果 possible_keys 中的索引未被選擇，可能需要優化查詢語句或創建適當的索引。

#### Using filesort 和 Using temporary 字段

表示是否需要進行文件排序或使用臨時表。這些操作可能會影響查詢的性能。

#### key_len 字段

表示索引的長度，值越小越好。

#### ref 字段

表示連接的條件，通常是索引字段。
