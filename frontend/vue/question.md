# Vue Question

- [Vue Question](#vue-question)
  - [Question](#question)
    - [Q. Vue 實例掛載過程](#q-vue-實例掛載過程)
      - [簡單說明](#簡單說明)
      - [過程](#過程)
    - [Q. v-if 、 v-for 為何不建議一起使用](#q-v-if--v-for-為何不建議一起使用)
    - [解決方法](#解決方法)
      - [範例](#範例)
    - [Q1 : 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#q1--写-react--vue-项目时为什么要在列表组件中写-key其作用是什么)
    - [Q.v-show vs v-if](#qv-show-vs-v-if)
      - [應用場景](#應用場景)
      - [差異](#差異)
      - [原理分析](#原理分析)
    - [Q? : 問題](#q--問題)
  - [參考文件](#參考文件)

## Question

### Q. Vue 實例掛載過程

#### 簡單說明

Vue 實例掛載過程是將 Vue 實例和模板轉換為真實的 DOM 元素的過程，它包含了兩個主要步驟：模板編譯和元素掛載。在模板編譯過程中，Vue 將模板轉換為一個渲染函數，這個函數用於將 Vue 實例的數據渲染到真實的 DOM 元素上；在元素掛載過程中，Vue 將編譯後的渲染函數和 Vue 實例所包含的數據進行結合，然後將結果渲染到指定的元素上。當數據發生變化時，Vue 會重新渲染模板，並更新 DOM 元素，從而實現數據的雙向綁定和動態更新。

#### 過程

1. Vue 會創建一個 Vue 實例，然後通過 new Vue() 傳入一個選項對象，這個對象包含了 Vue 實例需要的選項，如 data、methods、computed、watch 等。

- 舉例: 創建了一個 Vue 實例，將其掛載到 id 為 app 的元素上，並定義了一個數據對象 data，裡面包含了一個 count 屬性，以及一個方法對象 methods，裡面定義了一個 increment 方法
- code:

```javascript
var app = new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    increment: function () {
      this.count++;
    },
  },
});
```

2. Vue 實例創建完畢後，會調用其 $mount 方法，開始進行模板編譯和元素掛載的過程。如果 Vue 實例在創建時沒有指定 el 屬性，則可以在 $mount 方法中指定要掛載的元素，例如：$mount('#app')。

```javascript
app.$mount("#app");
```

3. 接下來，Vue 會將模板編譯成渲染函數，即將模板轉換為一個渲染函數，這個函數用於將 Vue 實例的數據渲染到真實的 DOM 元素上。在編譯的過程中，Vue 會將模板轉換為抽象語法樹（AST），然後生成一個渲染函數。

```javascript
<div>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increment</button>
</div>
```

4. 編譯完成後，Vue 會開始掛載元素，它首先會創建一個根 Vue 實例的渲染上下文（renderContext），這個上下文包含了當前 Vue 實例的數據、計算屬性、方法等信息，然後透過這個渲染上下文將渲染函數轉換為真實的 DOM 元素。

5. 最後，Vue 實例完成掛載，可以正常運行，當數據發生變化時，Vue 會重新渲染模板，並更新 DOM 元素。

---

### Q. v-if 、 v-for 為何不建議一起使用

當你使用 v-for 和 v-if 同時時，v-for 比 v-if 具有更高的優先級，這意味著 v-if 將在每次迭代中運行。如果這不是您所期望的，請將 v-if 放置在外層元素（或容器元素）上，以避免運行 v-if 的代價。

### 解決方法

1. v-if 放在父層級

```vue
<template v-if="isShow">
  <div v-for="item in items"></div>
</template>
```

2. 使用 computed 過濾不需要的資料

#### 範例

```vue
<template>
  <div id="app">
    <p v-if="isShow" v-for="item in items">
      {{ item.title }}
    </p>
  </div>
</template>
<script>
const app = new Vue({
  el: "#app",
  data() {
    return {
      items: [{ title: "foo" }, { title: "baz" }],
    };
  },
  computed: {
    isShow() {
      return this.items && this.items.length > 0;
    },
  },
});
</script>
```

---

### <a id="frontent_vue_q_1" href="">Q1</a> : [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)

- Key 的作用:
  - Key 是給每一個 vnode 的唯一值(id),可以依靠 key,準確且快速的拿到 oldVnode 中對應的 vnode 節點
  - 準確 : 根據 sameNode 函數針對 a.key === b.key 比對可避免複用的情況
  - 快速: 利用 key 唯一性 map 對象來獲取對應的 node,會 traversal 的方式更快速(map 比 traversal 快)
- 效能面比較:

  - 不帶 key:
    - 採用默認模式
    - 針對節點進行就地復用
  - 帶 key:
    - 根據 key 去進行交叉比對,從而找出相對應的舊節點

  ```js
  vm.dataList = [4, 1, 3, 5, 2][ // 数据位置替换
    // 没有key的情况， 节点位置不变，但是节点innerText内容更新了
    ("<div>4</div>", // id： A
    "<div>1</div>", // id:  B
    "<div>3</div>", // id:  C
    "<div>5</div>", // id:  D
    "<div>2</div>") // id:  E
  ][
    // 有key的情况，dom节点位置进行了交换，但是内容没有更新
    // <div v-for="i in dataList" :key='i'>{{ i }}</div>
    ("<div>4</div>", // id： D
    "<div>1</div>", // id:  A
    "<div>3</div>", // id:  C
    "<div>5</div>", // id:  E
    "<div>2</div>") // id:  B
  ];
  ```

### Q.v-show vs v-if

v-show 是一個基於 CSS 屬性的條件渲染指令，它控制元素的顯示和隱藏，但是元素始終存在於 DOM 中；而 v-if 是一個基於元素的條件渲染指令，它創建或刪除元素來控制元素的顯示和隱藏。因此，如果需要頻繁切換顯示和隱藏的元素，可以使用 v-show；如果需要根據條件動態創建或摧毀元素，可以使用 v-if。

簡單來說頻繁的切使用 v-show; 不常的情形使用 v-if

#### 應用場景

- 頻繁的切換: v-show
- 條件很少改變: v-if

#### 差異

| diff         | v-show                                                               | v-if                                                                               |
| ------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 控制         | 隱藏元素時是為該元素添加 CSS 屬性 display: none，但 DOM 元素依然存在 | 根據條件動態創建或摧毀 DOM 元素                                                    |
| 編譯過程     | 是簡單地基於 CSS 切換                                                | 切換有一個局部編譯/卸載的過程，切換過程中合適地銷毀和重建內部的事件監聽和子組件    |
| 編譯條件     | 不會觸發                                                             | 真正的條件渲染，它會確保在切換過程中條件块內的事件監聽器和子組件適當地被銷毀和重建 |
| 性能消耗不同 | 更高的初始渲染消耗                                                   | 更高的切換消耗                                                                     |

- 生命週期說明
  - v-show
    - v-show 由 false 變為 true 的時候不會觸發組件的生命週期
  - v-if
    - 由 false -> true
      - 會觸發組件的 beforeCreate、created、beforeMount、mounted 鉤子，
    - 由 true -> false
      - 會觸發組件的 beforeDestory、destoryed 方法。

#### 原理分析

### <a id="frontent_vue_q_?" href="">Q?</a> : [問題](網址)

## 參考文件

- [Advanced-Frontend](https://github.com/Advanced-Frontend/Daily-Interview-Question)
- [web 前端面试 - 面试官系列](https://vue3js.cn/interview/vue/show_if.html#%E4%B8%80%E3%80%81v-show%E4%B8%8Ev-if%E7%9A%84%E5%85%B1%E5%90%8C%E7%82%B9)
