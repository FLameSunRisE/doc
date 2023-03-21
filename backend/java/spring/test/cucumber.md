# Cucumber

- [Cucumber](#cucumber)
  - [I. BDD \& TDD 與的關係](#i-bdd--tdd-與的關係)
    - [基本介紹](#基本介紹)
      - [BDD (Behavior-Driven Development)](#bdd-behavior-driven-development)
      - [TDD (Test-Driven Development)](#tdd-test-driven-development)
  - [II. Cucumber 簡介](#ii-cucumber-簡介)
    - [BDD 簡介(Behaviour-Driven Development)](#bdd-簡介behaviour-driven-development)
    - [Cucumber 框架概述](#cucumber-框架概述)
    - [Cucumber 優點](#cucumber-優點)
  - [III. Spring 與 Cucumber 整合](#iii-spring-與-cucumber-整合)
    - [建立 SpringBoot 專案](#建立-springboot-專案)
    - [導入 Cucumber 相關依賴](#導入-cucumber-相關依賴)
    - [編寫 Cucumber 測試](#編寫-cucumber-測試)
    - [執行 Cucumber 測試](#執行-cucumber-測試)

<!--
## ChatGPT

Cucumber報告的概述：介紹什麼是Cucumber報告，它的作用和使用場景。

導入Cucumber報告的必要性：解釋為什麼需要導入Cucumber報告，以及它可以帶來什麼好處。

Cucumber報告的配置方法：介紹如何在Spring應用程序中配置Cucumber報告，包括必要的依賴項、配置文件和插件等。

Cucumber報告的使用方法：介紹如何使用Cucumber報告來生成測試報告，以及如何設置報告的格式、樣式和輸出方式。

Cucumber報告的優化方法：介紹如何優化Cucumber報告的內容和格式，使其更易讀、更具可讀性和可操作性。

常見的問題和解決方法：列舉在使用Cucumber報告時可能遇到的常見問題和解決方法，以便用戶能夠更好地解決問題。
-->

## I. BDD & TDD 與的關係

### 基本介紹

在介紹 Cucumber 之前需要先介紹一下 BDD 與 TDD, 兩種常見的軟體開發方法論，其主要目的是透過測試來確保程式碼的品質。

| 項目/方法論 | BDD                                            | TDD                              |
| ----------- | ---------------------------------------------- | -------------------------------- |
| 方法論      | 軟體開發的敏捷方法論                           | 測試驅動的開發方法論             |
| 特點        | 從應用程式的行為和使用者的角度來定義和測試功能 | 調在編寫程式碼之前先編寫測試案例 |
| 設計方式    | 注重行為和使用者                               | 注重方法和屬性                   |
| 單位        | Scenarios（場景）                              | Test Cases（測試案例）           |
| 測試框架    | `Cucumber` 或 `JBehave`                        | `JUnit` 或 `TestNG`              |

#### BDD (Behavior-Driven Development)

- 用於軟體開發的敏捷方法論
  - 強調從應用程式的行為和使用者的角度來定義和測試功能
- 通常使用自然語言來描述系統的行為
  - 讓開發人員和非技術人員更容易理解。
- Spring 框架:
  - 通常使用 `Cucumber` 或 `JBehave` 等框架來實現。

#### TDD (Test-Driven Development)

- 用於測試驅動的開發方法論
  - 強調在編寫程式碼之前先編寫測試案例
- Spring 框架:
  - 通常使用 `JUnit` 或 `TestNG` 等單元測試框架來實現

<!-- #### 軟體生命週期的影響性

- RA 階段
  - 目的:幫助團隊更好地理解和確定系統需求。
  - BDD
    - 通常使用自然語言來描述系統的行為，並且侧重於測試系統行為的各個方面。
    - 通過使用 BDD，開發人員可以更好地理解使用者的需求，並確保開發的系統能夠正確地實現這些需求。
  - TDD
    - 則著重於在開發過程中自動化測試，從而保證在實現需求的同時，確保程式碼的正確性和可測試性。
- SA 階段
  - 目的:隊更好地理解系統架構和設計
  - BDD
    可用於驗證整個系統的行為
  - TDD
    幫助開發人員在開發過程中更好地理解系統的組件和關係。 -->

---

## II. Cucumber 簡介

### BDD 簡介(Behaviour-Driven Development)

- 在寫測試前先寫測試規格書
- 用更接近人類語意的自然語言來描述軟體功能和測試案例
- 是一份「可以被執行的規格」=> 可以轉換成自動化測試

Notes: 與 TDD 比較:TDD 是實作前先寫測試

### Cucumber 框架概述

Cucumber 是一個支援 BDD 的工具

- 能描寫明確可執行的規格書 (Specification)，具備人類語意可讀性，同時 Cucumber 也能解析。
- 能透過 Cucumber 進行自動化測試，驗證軟體是否符合規格書的描述。
- 能透過規格書，將軟體的功能行為文件化

![cucumber.io overview](https://cucumber.io/img/single-source-of-truth-256x256.png)

### Cucumber 優點

1. 易讀性高：Cucumber 的測試腳本使用自然語言，可以使非技術人員也能夠理解測試過程和結果。

2. 開發效率高：Cucumber 可以自動化執行測試，節省了手動測試的時間和人力成本。

3. 測試覆蓋面廣：Cucumber 可以測試各種不同的場景和用例，從而提高應用程式的測試覆蓋率。

4. 易於整合：Cucumber 可以輕鬆整合到現有的測試框架中，如 JUnit 和 TestNG 等。

---

## III. Spring 與 Cucumber 整合

### 建立 SpringBoot 專案

使用 Spring Initializr (https://start.spring.io/) 或使用 IDE 內置的 Spring Boot Starter Project 工具來創建

### 導入 Cucumber 相關依賴

```pom
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>7.8.1</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-spring</artifactId>
    <version>7.8.1</version>
    <scope>test</scope>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <version>2.7.5</version>
    <scope>test</scope>
</dependency>
```

- plugin 設定

  - spring-boot-maven-plugin
    是 Spring Boot 專案的 Maven plugin，用於將 Spring Boot 專案打包成可執行的 Jar 或 War 檔案。
  - maven-surefire-plugin:
    是用於執行測試的 Maven plugin，可以在 Maven 專案中運行 JUnit 或 TestNG 測試

  ```xml
  <build>
      <plugins>
        <plugin>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-surefire-plugin</artifactId>
          <version>2.22.2</version>
          <configuration>
            <argLine>-Dfile.encoding=UTF-8</argLine>
          </configuration>
          <dependencies>
            <dependency>
              <groupId>org.apache.maven.surefire</groupId>
              <artifactId>surefire-junit4</artifactId>
              <version>2.22.2</version>
            </dependency>
          </dependencies>
        </plugin>
      </plugins>
    </build>
  ```

### 編寫 Cucumber 測試

1. 建立 features 目錄

   - 位置:src/test/resources/features
   - 檔名: Registration.feature
   - 內容:

     ```feature
     Feature: 檢查數字是否為偶數

       Scenario: 檢查數字是否為偶數
         Given 我有一個數字 10
         When 我檢查這個數字是否為偶數
         Then 我得到結果 true
     ```

2. 建立 stepDefine 檔案

   - 位置:
     `src/test/java/com/XXX/definitions/RegistrationSteps.java`
   - 檔名:RegistrationStepDefinitions
   - 內容:

   ```java
   public class RegistrationStepDefs {

       @Given("I am on the registration page")
       public void i_am_on_the_registration_page() {
           // Write code to navigate to the registration page
       }

       @When("I enter valid details")
       public void i_enter_valid_details() {
           // Write code to enter valid details in the registration form
       }

       @When("I enter invalid email")
       public void i_enter_invalid_email() {
           // Write code to enter invalid email in the registration form
       }

       @When("I click on the register button")
       public void i_click_on_the_register_button() {
           // Write code to click on the register button in the registration form
       }

       @Then("I should see a success message")
       public void i_should_see_a_success_message() {
           // Write code to verify that a success message is displayed
       }

       @Then("I should see an error message")
       public void i_should_see_an_error_message() {
           // Write code to verify that an error message is displayed
       }
   }
   ```

### 執行 Cucumber 測試

- 執行測試方式

  1. maven

     ```shell
     mvn clean test
     ```

  2. 執行特定測試項目

     - 在 feature 檔案

     ```feature
     @DemoTest
     Feature: User Registration
       As a user
       I want to register for the application
       So that I can access the application features

       Scenario: User registration with valid details
         Given I am on the registration page
         When I enter valid details
         And I click on the register button
         Then I should see a success message

       Scenario: User registration with invalid email
         Given I am on the registration page
         When I enter invalid email
         And I click on the register button
         Then I should see an error message
     ```

     - 執行 shell

     ```shell
     clean test "-Dcucumber.filter.tags=@DemoTest"
     ```

  3. 執行結果:

     - console:

     ```txt
     2 Scenarios (2 passed)
     8 Steps (8 passed)
     0m9.064s
     ```

     - report: target/cucumber.html

<!-- ## IV.XXX
## V. 實例演示 -->
