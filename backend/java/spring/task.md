# Spring Task

- [Spring Task](#spring-task)
  - [Spring boot 如何使用排程](#spring-boot-如何使用排程)
    - [實作步驟](#實作步驟)
  - [@Scheduled annotations 介紹](#scheduled-annotations-介紹)
  - [常見案例](#常見案例)
  - [cron 表示式](#cron-表示式)
  - [補充:特殊參數](#補充特殊參數)
  - [Ref](#ref)

---

## Spring boot 如何使用排程

### 實作步驟

- 需在 Spring Boot 的 `@SpringBootApplication` 主類上加上 `@EnableScheduling` 註解，啟用定時任務的支持。

  ```java
  @SpringBootApplication
  @EnableScheduling
  public class SpringBootApplication {
      // ...
  }
  ```

- 在需要定時的方法上加上`@Scheduled` 設定定時的時間間隔或特定時間點

  ```java
  @Service
  public class XXXService {
      // 每天上午6點執行任務
      @Scheduled(cron = "0 0 6 * * ?")
      public void fetchData() {
          // 在這裡編寫取得資料的邏輯
      }
  }

  ```

## @Scheduled annotations 介紹

- 相關參數使用
  - cron: cron 表達式，可以指定任務在特定時間執行，格式為"秒 分 小時 日 月 星期"；
  - fixedDelay: 表示上一次任務執行完成後多久再次執行，
    - 引數型別為 long，單位 ms；
    - Example:
      - @Scheduled(fixedDelay = 5000)，表示上一次任務執行完成後 5 秒再次執行；
  - fixedDelayString: 與 fixedDelay 含義一樣
    - 引數型別變為 String；
    - Example:
      - @Scheduled(fixedDelayString = "5000")，表示上一次任務執行完成後 5 秒再次執行；
  - fixedRate: 表示按一定的頻率執行任務，
    - 引數型別為 long，單位 ms；
    - Example:
      - @Scheduled(fixedRate = 5000)，表示任務每 5 秒執行一次；
  - fixedRateString: 與 fixedRate 的含義一樣
    - 引數型別變為 String；
    - Example:
      - @Scheduled(fixedRateString = "5000")，表示任務每 5 秒執行一次；
  - initialDelay: 表示延遲多久再第一次執行任務，
    - 引數型別為 long，單位 ms；
    - Example:
      - @Scheduled(initialDelay = 1000, fixedRate = 5000)，表示延遲 1 秒後第一次執行，之後每 5 秒執行一次；
  - initialDelayString: 與 initialDelay 的含義一樣
    - 引數型別變為 String 單位 ms；
    - Example:
      - @Scheduled(initialDelayString = "1000", fixedRateString = "5000")，表示延遲 1 秒後第一次執行，之後每 5 秒執行一次。
  - zone: 時區，預設為當前時區，一般沒有用到。

## 常見案例

| 使用場景             | cron 表達式     | spring 實作                                            | 備註                                                            |
| -------------------- | --------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
| 每天固定時間執行     | "0 0 1 \* \* ?" | @Scheduled(cron = "0 0 1 \* \* ?")                     | 每天的凌晨 1 點執行任務                                         |
| 延遲一段時間後執行   | N/A             | @Scheduled(initialDelay = 10000, fixedRate = 1000)     | 在延遲了 10 秒之後開始執行任務，並且每隔 1 秒執行一次           |
| 每隔一段時間執行     | 0 _/5_ \* \* \* | @Scheduled(fixedRate = 30000)                          | \*/30 表示每隔 30 秒执行一次                                    |
| 動態設定 Cron 表示式 | N/A             | @Scheduled(cron = "#{@myService.getCronExpression()}") | myService 的 getCronExpression() 方法返回的 Cron 表示式執行任務 |

## cron 表示式

cron 表示式是用來設定定時任務的一種方式，它是一個字符串，由 5 或 6 個空格分隔的時間和日期欄位組成，表示任務執行的時間。

```txt
 ┌───────────── second 秒（0-59）
 │ ┌───────────── minute 分鐘（0-59）
 │ │ ┌───────────── hour 小時（0-23）
 │ │ │ ┌───────────── day of the month 日（1-31）
 │ │ │ │ ┌───────────── month 月份（1-12或JAN-DEC）
 │ │ │ │ │ ┌───────────── day of the week 星期幾
 │ │ │ │ │ │            （0-7或SUN-SAT，0和7表示周日）
 │ │ │ │ │ │
 * * * * * *
```

---

## 補充:特殊參數

| 字元 | 意義                                                                                                        |
| ---- | ----------------------------------------------------------------------------------------------------------- |
| \*   | 表達任意值                                                                                                  |
| ?    | 只用在 日 跟 周 的值域，有點表達 don’t care 的概念                                                          |
| -    | 指定範圍，前後接數字: 10-12                                                                                 |
| ,    | 指定離散的選項: 1,5,6,8                                                                                     |
| /    | 指定增量，表達 每 的概念: 0/5 意旨從 0 開始每 5 單位                                                        |
| L    | 用在 月 跟 周 的值域。在月的話表達最後一天，在周的話前面可以加上數字 3L 表示該月最後一個星期二              |
| LW   | 用在日的值域，表示最後一周的工作日                                                                          |
| #    | 用在周的值域，指定特定周的特定日: “4#2” 表示第二周的星期三                                                  |
| C    | 用在日跟周的值域，指某特定個日期的後一天: 在日中寫 3C 指該月 3 號的後一天，在周中寫 2C 指該周星期一的後一天 |

## Ref

- [Spring Boot Scheduling Tasks 定時任務排程器及 Cron 表示式](https://polinwei.com/spring-boot-scheduling-tasks/)
- [Spring 上的 @Scheduled 以及 cron 表示式](https://bingdoal.github.io/backend/2020/11/spring-scheduled-and-cron-expression/)
