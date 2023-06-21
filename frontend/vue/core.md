# 核心知識

- [核心知識](#核心知識)
  - [Core](#core)
    - [MVVM(Model-View-ViewModel)](#mvvmmodel-view-viewmodel)
    - [生命週期](#生命週期)
      - [整體流程](#整體流程)
      - [vue 的生命週期](#vue-的生命週期)
  - [SPA（single-page application）](#spasingle-page-application)
    - [Vue 建構 SPA 的優點](#vue-建構-spa-的優點)
    - [SPA vs MPA](#spa-vs-mpa)
    - [如何實現 SPA](#如何實現-spa)
  - [Diff 算法](#diff-算法)

## Core

### MVVM(Model-View-ViewModel)

1. Model（模型）：
   代表了應用程序中的數據和業務邏輯。在 Vue.js 中，Model 通常是指 Vue 實例中的數據。

```javascript
var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
  },
  // ...
});
```

2. View（視圖）
   是用戶界面的呈現，通常是 HTML 代碼。在 Vue.js 中，View 通常是指 Vue 模板，用於描述界面的外觀和行為。

```javascript
<div id="app">
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email">

    <button type="submit" v-on:click.prevent="submitForm">Submit</button>
  </form>

  <div>
    <h2>Your Information:</h2>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</div>
```

3. ViewModel（視圖模型）：
   是 View 和 Model 之間的中介者，它負責處理 View 的事件，同步更新 Model 的數據。在 Vue.js 中，ViewModel 由 Vue 實例扮演，它控制著 View 和 Model 之間的數據流動。

```javascript
var app = new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
  },
  methods: {
    submitForm: function () {
      // send form data to server
    },
  },
});
```

### 生命週期

#### 整體流程

> vue 官網生命週期流程圖

![vue官網生命週期流程圖](https://static.vue-js.com/44114780-3aca-11eb-85f6-6fac77c0c9b3.png)

#### vue 的生命週期

| 生命周期      | 描述                               |
| ------------- | ---------------------------------- |
| beforeCreate  | 組件實例被創建之初                 |
| created       | 組件實例已經完全創建               |
| beforeMount   | 組件掛載之前                       |
| mounted       | 組件掛載到實例上去之後             |
| beforeUpdate  | 組件數據發生變化，更新之前         |
| updated       | 組件數據更新之後                   |
| beforeDestroy | 組件實例銷毀之前                   |
| destroyed     | 組件實例銷毀之後                   |
| activated     | keep-alive 緩存的組件激活時        |
| deactivated   | keep-alive 緩存的組件停用時調用    |
| errorCaptured | 捕獲一個來自子孫組件的錯誤時被調用 |

- 初始化順序:props、methods、data

1. 創建階段：beforeCreate、created
   在這個階段中，Vue 實例已經被創建出來，但是 data 和 methods 屬性都還未被初始化。這個階段通常用於進行一些初始化的操作，例如設置事件監聽器或初始化非响应式的數據。

   | 比較     | beforeCreate                                         | created                                    |
   | -------- | ---------------------------------------------------- | ------------------------------------------ |
   | 觸發時間 | data 和 methods 屬性都還未被初始化之前觸發           | data 和 methods 屬性都已經被初始化之後觸發 |
   | 使用情境 | 始化的操作，例如設置事件監聽器或初始化非响应式的數據 | 獲取數據、設置計算屬性、設置監聽器         |

2. 掛載階段：beforeMount、mounted
   在這個階段中，Vue 實例已經被創建並初始化完畢，即 data 和 methods 屬性已經被設置好了，但還未被渲染到 DOM 中。這個階段通常用於進行一些 DOM 相關的操作，例如註冊事件監聽器、操作 DOM 元素等。

   | 比較     | beforeMount                                                                  | mounted                                                                                 |
   | -------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
   | 觸發時間 | 模板編譯完成之後，但是尚未被掛載到 DOM 中的時候觸發                          | 模板編譯完成並且已經被掛載到 DOM 中的時候觸發                                           |
   | 使用情境 | 模板渲染成真實 DOM 元素之前進行的操作，例如修改 data 中的數據或操作 DOM 元素 | 需要在模板渲染成真實 DOM 元素之後進行的操作，例如使用 $refs 獲取 DOM 元素、設置監聽器等 |

3. 更新階段：beforeUpdate、updated
   在這個階段中，Vue 實例的數據已經發生了變化，但這些變化還未被渲染到 DOM 中。 這個階段通常用於進行一些數據相關的操作，例如獲取最新的數據、更新狀態等。

   | 比較     | beforeUpdate                                         | beforeUpdate                                         |
   | -------- | ---------------------------------------------------- | ---------------------------------------------------- |
   | 觸發時間 | Vue 實例的數據發生變化之後，模板**重新渲染之前觸發** | Vue 實例的數據發生變化之後，模板**重新渲染之後觸發** |
   | 使用情境 | 操作 DOM 元素或在更新數據之前進行一些校驗            | 操作 DOM 元素、獲取更新後的數據等                    |

4. 銷毀階段：beforeDestroy、destroyed
   在這個階段中，Vue 實例將被銷毀，這意味著 Vue 實例的所有內存和資源都將被釋放，並且該實例也不再被使用。這個階段通常用於進行一些清理工作，例如釋放資源、取消註冊事件等。

   | 比較     | beforeDestroy                                                       | destroyed                                                            |
   | -------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
   | 觸發時間 | 是在 Vue 實例被銷毀之前觸發，這個階段 Vue 實例的 **DOM 元素還存在** | Vue 實例被銷毀之後觸發，這個階段 Vue 實例的 **DOM 元素已經不存在了** |
   | 使用情境 | 清除定時器、取消訂閱等                                              | 清除一些和 DOM 元素相關的事件監聽器、釋放內存等                      |

## SPA（single-page application）

SPA 是指在一個 Web 頁面中載入所有必要的資源和代碼，並在用戶與應用程序交互時動態更新該頁面的部分內容，而不是刷新整個頁面。

### Vue 建構 SPA 的優點

- 更快的頁面載入速度：
  由於所有必要的資源和代碼只需在頁面載入時載入一次，因此 SPA 的頁面載入速度通常比多頁應用程序（MPA）更快。

- 更流暢的用戶體驗
  由於只更新頁面的部分內容，而不刷新整個頁面，因此 SPA 的用戶體驗通常更流暢。

- 更容易構建和維護
  SPA 的結構簡單明確，易於構建和維護。

### SPA vs MPA

| 比較     | SPA（Single-Page Application）                         | MPA（Multi-Page Application）         |
| -------- | ------------------------------------------------------ | ------------------------------------- |
| 組成方式 | 一個主頁面與多個頁面元件                               | 多個主頁面                            |
| 技術     | Vue.js、React、Angular                                 | PHP、Java、Ruby                       |
| 刷新方式 | 局部更新                                               | 整頁更新                              |
| 優點     | 更快的頁面載入速度、更流暢的用戶體驗和更容易構建和維護 | 較好的 SEO 、更容易緩存和更高的安全性 |
| 缺點     | 較長的初始載入時間和 SEO 不友好                        | 較慢的頁面載入速度和較差的用戶體驗    |
| 數據傳遞 | 容易                                                   | url、cookie、localStorage             |

### 如何實現 SPA

## Diff 算法

TODO(jay)


