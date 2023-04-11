# Message queue(訊息佇列)

- [Message queue(訊息佇列)](#message-queue訊息佇列)
  - [MQ 使用場景](#mq-使用場景)
    - [核心](#核心)
      - [1. 解耦系統](#1-解耦系統)
      - [2. 異步處理](#2-異步處理)
      - [3. 削峰](#3-削峰)
  - [參考資料](#參考資料)

## MQ 使用場景

### 核心

#### 1. 解耦系統

- 定義
  - 在分散式系統中，不同的服務之間需要進行通訊，使用 message queue 可以讓不同的服務之間解耦，因為每個服務只需要發布和消費自己感興趣的消息，而不需要直接依賴其他服務的實現方式。
  - 在實現解耦系統的過程中，還可以使用 topic exchange 和 routing key 等方式進一步定制消息的傳送方式和範圍，實現更細粒度的消息管理。
- 場景說明
  - 當一個電商網站需要通知用戶買家的訂單已經發貨時，可以通過消息隊列來實現。當訂單發生變化時，訂單系統將消息發送到消息隊列，消息隊列再將消息轉發給通知系統，通知系統再通過電子郵件或短信的方式通知用戶。這樣就實現了訂單系統和通知系統的解耦，減少了系統之間的相互影響，提高了系統的可維護性和擴展性。

#### 2. 異步處理

- 定義
  - 在一些需要長時間處理的任務中，使用消息隊列可以實現異步處理，提高系統的性能和吞吐量。例如，系統需要對大量數據進行處理，這個處理過程可能需要耗費很長時間，使用消息隊列可以將數據的處理過程分成多個步驟，每個步驟都可以單獨進行異步處理，提高了系統的處理速度。
  - 例如
    - 系統需要對大量數據進行處理，這個處理過程可能需要耗費很長時間，使用消息隊列可以將數據的處理過程分成多個步驟，每個步驟都可以單獨進行異步處理，提高了系統的處理速度。
- 解決
  - 通過異步處理可以減去等待所有系統都完成操作後的時間，透過 MQ 將流程區分出需要及時回復與不需要及時處理的操作，
- 場景說明
  - 假設有一個電商網站，在顧客下單後，需要將訂單信息同步到庫存系統和物流系統。如果採用同步方式，當訂單量過大時，每個下單請求都需要等待所有系統完成操作後才能返回給客戶端，這樣會影響用戶體驗和性能。而且，如果任何一個系統出現故障，整個流程都會失敗。
  - 當顧客下單時，電商網站將訂單信息發送到 MQ，庫存系統和物流系統分別訂閱這個主題。當他們收到消息時，可以執行相應的業務邏輯，然後發送一個確認消息給 MQ，表示操作已完成。當 MQ 收到這個確認消息時，就可以認為整個流程已經完成，並將一個成功響應返回給客戶端。

https://github.com/doocs/advanced-java/blob/main/docs/high-concurrency/why-mq.md

#### 3. 削峰

- 定義

- 解決
  - 在系統高峰期，當大量的請求同時進入系統時，使用消息隊列可以實現削峰，減少系統的壓力。例如，一個網站在活動期間可能會面臨大量的訪問請求，使用消息隊列可以將這些訪問請求分散到不同的時間段，減少了系統在高峰期的壓力。
- 範例
  - 場景說明
    - 假設我們有一個網站，當有用戶下訂單時，需要執行一系列的操作，包括庫存減少、支付扣款等等。當有大量的用戶下單時，這些操作可能會導致服務器負載過高。在這種情況下，我們可以使用消息隊列來實現削峰。
  - 如何解決
    - 在一個購物網站中，當某個商品進行限時搶購時，可能會面臨大量的訪問請求。使用消息隊列可以將這些訪問請求分散到不同的時間段，例如限制每個用戶每分鐘只能進行一次訪問，或者限制每秒鐘只能處理一定數量的訪問請求。當超過這個數量時，新的請求就會被加入消息隊列中排隊等待處理。系統會按照順序從消息隊列中取出請求進行處理，這樣就可以避免系統因為過多的請求而崩潰。同時，使用消息隊列也可以保證請求的順序性，避免因為同時處理多個請求而導致結果出現錯誤。


---

## 參考資料

- [why-mq](https://github.com/doocs/advanced-java/blob/main/docs/high-concurrency/why-mq.md)