# Box model

- [Box model](#box-model)
  - [Basic intro](#basic-intro)
  - [Structure](#structure)
  - [屬性](#屬性)
  - [盒子模型類型](#盒子模型類型)
  - [Other](#other)
    - [外在尺寸（Extrinsic Sizing） vs 內在尺寸（Intrinsic Sizing）](#外在尺寸extrinsic-sizing-vs-內在尺寸intrinsic-sizing)
    - [外在尺寸（Extrinsic Sizing）](#外在尺寸extrinsic-sizing)
    - [內在尺寸（Intrinsic Sizing）](#內在尺寸intrinsic-sizing)
  - [Ref](#ref)

---

## Basic intro

盒模型是描述在網頁排版中，每個元素的佈局方式的一種模型。它由內容區域（content）、內邊距（padding）、邊框（border）和外邊距（margin）組成。在回答這個問題時，解釋盒模型的各個部分，以及如何計算

![web-dev-box-model](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/ECuEOJEGnudhXW5JEFih.svg)

> source:web.dev

## Structure

- 內容（Content）： 盒子內部實際包含的內容，如文字、圖像等。

- 內邊距（Padding）： 內邊距位於內容和邊框之間，用於控制內容與邊框之間的距離。

- 邊框（Border）： 邊框圍繞著內容和內邊距，可以設定線條的寬度、顏色和樣式。

- 外邊距（Margin）： 外邊距位於盒子與其他元素之間的區域，用於控制元素之間的間距。

## 屬性

在 CSS 中，你可以使用以下屬性來控制盒子模型的各個部分：

- width：設定盒子的寬度，包括內容和內邊距，但不包括邊框和外邊距。

- height：設定盒子的高度，同樣包括內容和內邊距。

- padding：設定內邊距，控制內容與邊框之間的空間。

- border：設定邊框，包括寬度、顏色和樣式。

- margin：設定外邊距，控制元素之間的間距。

## 盒子模型類型

有兩種主要的盒子模型：標準盒子模型和 IE 盒子模型。

- 標準盒子模型（Content Box）： 在標準盒子模型中，width 和 height 屬性僅指定內容的寬度和高度，不包括內邊距、邊框和外邊距。這是 W3C 標準模型。

- IE 盒子模型（Border Box）： 在 IE 盒子模型中，width 和 height 屬性包括內容、內邊距和邊框的總寬度和高度。這對於控制元素的外觀和佈局更為方便。

## Other

### 外在尺寸（Extrinsic Sizing） vs 內在尺寸（Intrinsic Sizing）

| 特點         | 外在尺寸（Extrinsic Sizing）               | 內在尺寸（Intrinsic Sizing）         |
| ------------ | ------------------------------------------ | ------------------------------------ |
| 定義         | 基於容器元素的尺寸，使用百分比或固定單位。 | 基於元素內容的實際大小。             |
| 主要屬性     | width、height                              | max-width、max-height                |
| 影響因素     | 父元素的尺寸、佈局和外部容器。             | 元素內部的內容、文本、圖像等。       |
| 使用場景     | 調整元素位置、佈局，實現響應式設計。       | 保持內容完整性，避免變形或過度拉伸。 |
| 保持內容大小 | 當父元素縮小時，可能導致內容壓縮或溢出。   | 元素內容保持原始大小。               |
| 主要應用     | 適合調整外在容器中元素的位置和佈局。       | 適合保持內容的完整性和一致性。       |

### 外在尺寸（Extrinsic Sizing）

外在尺寸是指元素的尺寸是基於其父元素或容器元素的尺寸而定的。這種尺寸通常使用百分比（%）或固定單位（像素）來表示。外在尺寸的設定影響了元素在其容器中的位置和佈局。

- 主要的外在尺寸屬性包括：

  - width：元素的寬度。可以是固定寬度（如 200px）或相對於父元素寬度的百分比（如 50%）。
  - height：元素的高度。同樣可以是固定高度或相對於父元素高度的百分比。

外在尺寸通常用於調整元素的位置和佈局，以及實現響應式設計。

### 內在尺寸（Intrinsic Sizing）

內在尺寸是元素內容本身的尺寸，基於元素內部的內容、文本、圖像等的大小而定。內在尺寸的一個重要應用是在排版過程中保持元素內容的完整性和一致性，而不會因為外在容器的尺寸變化而改變。

- 主要的內在尺寸屬性包括：

  - max-width：元素的最大寬度。當元素內容不足以填充指定的寬度時，元素將保持其內容的大小。
  - max-height：元素的最大高度。同樣地，元素將保持其內容的大小，並避免過度拉伸。

內在尺寸可以確保元素的內容在不同情況下都能保持其原始大小，這對於提供一致的使用者體驗非常重要。

---

## Ref

- [web.dev](https://web.dev/learn/css/box-model/)
