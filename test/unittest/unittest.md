# Unit Test

- [Unit Test](#unit-test)
  - [什麼是 Unit Test?](#什麼是-unit-test)
    - [Unit Test 特性 - FIRST](#unit-test-特性---first)
  - [為何要投資 Unit Test(Why invest in unit testing)](#為何要投資-unit-testwhy-invest-in-unit-testing)
    - [導入效益](#導入效益)
    - [**Shift Left** approach](#shift-left-approach)
  - [Best Practice](#best-practice)
  - [該如何進行?](#該如何進行)
    - [進行方向](#進行方向)
    - [針對新需求/新 code 的 Unit Test 開發的範例](#針對新需求新-code-的-unit-test-開發的範例)
  - [補充說明](#補充說明)
  - [參考來源](#參考來源)

## 什麼是 Unit Test?

- 維基百科

  > [the unit test is] “a procedure to verify **the proper functioning** of **a specific part of a software** program or portion of a program (referred to as a “unit” or “module”)”.
  > [單元測試是]“驗證軟件程序的特定部分或程序的一部分（稱為“單元”或“模塊”）是否正常運行的程序”。

  - 名詞解釋
    - The proper functioning
      - 通常是業務邏輯或是功能行為是否正確
        `should do XXXX when XXXX`
    - A specific part of a piece of software
      - 驗證目標行為的最少 Code
        - A method
        - Several methods
        - One class
        - Several classes
        - etc.

### Unit Test 特性 - FIRST

- Fast 快速
  建議 500 毫秒以內，當你的專案中有上千個測試程式時，整體效能才不會太慢。要做到這樣的速度，一定要讓你的被測程式與外在物件相依性為零。
- Independent 獨立
  - 隔離的好處:
    - 執行速度快
    - 關注點分離
    - 單一職責
- Repeatable 重複
  - 可重複執行且每次執行的結果都相同 => 測試程式不依賴運行環境，不會因為正式環境或測試環境導致結果不同
- Self-Validating 自我驗證
  1. 測試程式要有驗證(Assert)功能，確保功能與期待吻合。不需要再手動去其他地方（DB、UI、檔案...）觀察程式狀態是否如你預期的變化。
  2. 當出現紅燈時，能馬上知道錯在哪裡。要達到這個目標，只測試一件事與給測試案例一目了然的命名就變成非常重要。
- Timely 及時
  測試程式與 production code 要同時完成

---

## 為何要投資 Unit Test(Why invest in unit testing)

### 導入效益

- Risk management(風險管理)
  - 提早的測試可以盡早的掌握風險
- Individual responsibility(個人責任)

  - Question
    - 如何確保你寫的程式正常運作?
    - 如何為下一位接手的人提供一組確保可以安全的重購或維護？
    - **自豪感**和**責任感**是開發人員工作中的兩個重要特徵
      - 確保產品代碼正常工作，而不委託其他人承擔此責任（測試人員、產品負責人、另一個團隊、其他公司（第三方軟件測試）......）
      - 確保整個產品的質量水平產品的壽命
  - Development comfort(開發舒適度)
    - 擁有良好的單元測試意味著避免未來的緊急情況、需要在壓力下快速修復的錯誤。
    - 是減少`Debugging`所花費的時間
      - 尋找 bug 需要分析以追溯有問題的 code
    - Production 總是會有缺陷的
      - 目標:限制 bug 的數量與影響
      - 發現問題:補上 unit test 的機會
  - Cost optimisation(成本優化)
    ![Optimising the ROI of our testing process](https://miro.medium.com/max/786/0*0EnFvvScO0yi64cE.jpg)
    <!-- ![Planning/FeedBack Loops](https://miro.medium.com/max/640/0*sLtfF9kfFadQJ0pH.png) -->

- 盡早的投資可以降低成本

  ![盡早的投資可以降低成本](https://miro.medium.com/max/786/0*Cl4KlbifW1Kw8VgA.png)

  - 越往上成本增加原因
    - 設置測試
    - 維護測試到位
    - 執行測試的成本（機器時間、服務器……）
    - 獲得測試結果所需的時間
    - 檢測到錯誤時的分析時間

---

### **Shift Left** approach

![Shift Left2](https://miro.medium.com/max/786/0*FUn1zhsApi9PbDkc.gif)

- 為了減少成本,可以發現提早發現問題(Shift Left)可以減少成本的浪費

---

## Best Practice

- 撰寫`UnitTest`須遵守的

  - 限制測試（在其功能範圍內）
    不要嘗試在單個測試中驗證多件事情。
  - 必須快速運行
    建議 500 毫秒以內。
  - 必須是自動化的
    不需要手動執行單元測試。
  - 測試可以在開發人員的環境上運行：
    必須能夠獲得單元測試的狀態，而不必實現複雜的部署/服務器啟動機制等。
  - 1 test = 1 use case。
    - 一個測試案例只測一件事:
      這使得當測試出錯時可以立即知道什麼是錯誤的
  - 單元測試的結果必須隨著時間的推移保持穩定
  - 測試必須是隔離和獨立的
    每個測試都必須能夠單獨執行，並且可以在任何其他測試之後或之前執行。它的正常運行不應依賴於另一個測試提供的上下文(context)。

- 避免
  - 在單元測試中驗證實現細節
  - 為單元測試加入**太多 Code**
    這通常取決於 Code 的設計，加載太多代碼通常表示 Code 太複雜或解耦結構太少。
  - 依賴外部服務
    - 依賴外部服務會導致測試有時出錯，有時不出錯
    - 最好使用模擬（stub、spy、fake、mock）來避免這種情況。
  - 使用 try...catch
    在單元測試中，我們期望這個或那個特定的錯誤。我們更喜歡（當框架允許時）正確觸發錯誤的斷言。

<!-- ## What is the test coverage?

### 甚麼是Test coverage -->

<!-- ### 何時該停止? -->

---

## 該如何進行?

### 進行方向

- 針對 production 的 bug 補足測試案例
  - 補足先前未覆蓋的 code
- 針對新需求進行測試案例的撰寫(SA、SD)
  - TODO: 找出 SOP??
- 長期測試舒適度管理
  - 針對重要功能進行測試項目的補足(ex:申裝、購買...等)減少風險。
- 團隊判斷:Code review
  - 從 unitTest 成本圖中可以得知 PairPrograming 是最早降低成本的方法之一
  - 在團隊中進行 Code review 期間，單元測試也會被 review，可以盡早了解 code 的架構與邏輯是否正確。

### 針對新需求/新 code 的 Unit Test 開發的範例

- [UnitTest demo 文件](unit_test_demo.md)
  - TODO(jay), 待補充

<!-- 1. 列出工作項目的期望行為/預計行為
   - 以故事及其項目接受標準為基礎。
   - 定義輸入數據集(dataset)和預期結果。
2. 定義每個行為或業務邏輯定義一組測試案例(use cases)

   - Passing cases
   - Error case
   - Borderline cases

   - 可以使用不同的技術來設計範例，
     - 決策樹(decision trees):遍歷測試用例中的所有路徑
     - 等價關係(equivalence classes):避免多次測試同一事物

3.設計能夠測試這些行為的代碼（可測試代碼）。 -->

<!-- ### 針對 Existing code 的 Unit Test 開發目前問題 -->

---

## 補充說明

- Acceptance Criteria(AC,驗收準則)
  - 甚麼是 AC:
    - 用來說明某一個 user story，系統在特定情況下應該完成什麼樣功能，以及針對某一些輸入，應該具備怎樣的輸出結果。
  - WHY USE:
    - 提供「完成」(done)的定義:
      - 衡量團隊的產出進度與預期是否有落差
      - 迅速找出問題
  - WHO (誰該撰寫):
    - Product Owner(PO)定義好 user story
    - 分析人員、測試人員、開發人員與使用者共同定義該怎麼驗收這個 user story
- Test Cases(TC)
    ![AC和TC關係](./img/2022-10-26%2010_21_unit_test_ac_tc.png)

  - Example:
    開發某個郵箱 aaa 發送郵件功能的 AC1：作為一個 aaa 郵箱普通用戶，我想要編寫郵件發送給我的朋友 Jerry，郵件發送成功。
    轉換為 Given-（and）-When-（and）-Then 的描述方式如下：

    - AC:

    ```log
    Scenario 1：收件人地址正確，郵件發送成功
      Given 普通用戶userA登錄aaa郵箱成功
      When 用戶userA編寫郵件，郵件內容不為空
          and 在“收件人”輸入Jerry郵箱地址，郵箱地址存在
          and 點擊“發送”
      Then 提示“郵件發送成功”
    ```

    - TC

    ![TC](https://upload-images.jianshu.io/upload_images/6993402-9cc3146b1721dffd.png?imageMogr2/auto-orient/strip|imageView2/2/w/577/format/webp)

- 針對 Existing code 的 Unit Test 開發目前問題

    ![legacy code](https://miro.medium.com/max/786/0*1Dng1zUOsr2hnmWX.jpg)

    - 困難點:
    - 無法在現有代碼（legacy code）全面的了解
    - 缺少單元測試時添加單元測試是危險的
        - 因為無法了解全貌

## 參考來源

- [【文思不藏私】敏捷小班～驗收條件](https://medium.com/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81/%E6%96%87%E6%80%9D%E4%B8%8D%E8%97%8F%E7%A7%81-%E6%95%8F%E6%8D%B7%E5%B0%8F%E7%8F%AD-%E9%A9%97%E6%94%B6%E6%A2%9D%E4%BB%B6-193a59298947)
- [关于敏捷测试中 AC 和 TC 的那些事儿](https://www.jianshu.com/p/56199d10f910)
- [Why Invest in Unit Testing](https://medium.com/swlh/why-invest-in-unit-testing-8f1bdc2d688e)
