# 核心知識

- [核心知識](#核心知識)
  - [Core](#core)
    - [MVVM(Model-View-ViewModel)](#mvvmmodel-view-viewmodel)
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

## Diff 算法

TODO(jay)
