# Css 面試題

[TOC]

---

## 基本題

### Q.請說明 CSS 選擇器的優先級

### Q.CSS 選擇器的優先級是如何計算的？

在 CSS 中，當多個規則應用到同一個元素時，瀏覽器需要確定哪個規則的樣式優先應用。這就是優先級計算的概念。優先級是基於選擇器的特殊性（Specificity）和 !important 標記的使用來計算的。

#### 優先級排序

```
!important > 行內樣式 > id > class = 偽元素 > 型態選擇器 = 偽類 > 通用
```

#### 1. 特殊性（Specificity）

- 特殊性是一個由四個部分組成的值，用來描述選擇器的特殊性級別：

  - 1000s 位數：內聯樣式（inline styles）的數量。
  - 100s 位數：ID 選擇器的數量。
  - 10s 位數：類別選擇器、屬性選擇器和偽類選擇器的數量。
  - 1s 位數：元素選擇器和偽元素選擇器的數量。

- 特殊性值的計算示例：

  - p 元素選擇器的特殊性是 0,0,0,1。
  - .class 類別選擇器的特殊性是 0,0,1,0。
  - #id ID 選擇器的特殊性是 0,1,0,0。
  - style 內聯樣式的特殊性是 1,0,0,0。

![選擇器分數](https://explainthis.s3-ap-northeast-1.amazonaws.com/c816898f1e834c149f02810d711ef3d8.png)

> 圖片來源:https://www.explainthis.io/zh-hant/interview-guides/frontend/css-specificity

#### 2. !important 標記

如果一個樣式規則帶有 !important 標記，則該樣式**具有最高的優先級**，無論其特殊性如何。

- 計算優先級
  - 計算優先級時，特殊性的每個部分相對應的位數進行比較。例如，一個選擇器的特殊性值是 0,2,1,0，而另一個選擇器的特殊性值是 0,1,3,0，則前者的優先級較高。
  - 如果兩個規則的特殊性相同，則根據它們出現在樣式表中的**順序來確定優先級**。**後面定義的規則將較早定義的規則覆蓋**。

綜合來看，理解特殊性、選擇器類型以及 !important 標記的使用方式，可以幫助我們預測和控制樣式在元素上的應用順序。這有助於創建可預測和可維護的樣式表。

#### 參考資料

- [explainthis-請說明 CSS 選擇器的優先級](https://www.explainthis.io/zh-hant/interview-guides/frontend/css-specificity)

---

### Q.CSS 盒模型是什麼？

盒模型是描述在網頁排版中，每個元素的佈局方式的一種模型。它由內容區域（content）、內邊距（padding）、邊框（border）和外邊距（margin）組成。在回答這個問題時，解釋盒模型的各個部分，以及如何計算一個元素的實際寬度和高度。

![developer.mozilla-The_box_model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

---

### Q.CSS Flexbox 和 Grid 布局有什麼區別？

Flexbox 和 Grid 都是用來實現網頁佈局的 CSS 技術，但它們有不同的用途和特點。Flexbox 是一個單維佈局系統，用於處理行或列的佈局，非常適合處理一維排列的情況。Grid 布局則是一個雙維佈局系統，可以創建更複雜的佈局結構，同時處理行和列的佈局。在回答這個問題時，請解釋兩者的用途、特點和在哪些情境下使用哪一種更適合。
