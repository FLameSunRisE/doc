# Css pseudo用法

- [Css pseudo用法](#css-pseudo用法)

---

## 偽類 (pseudo-classes) 和偽元素 (pseudo-elements) 

偽類（pseudo-classes）和偽元素（pseudo-elements）是 CSS 中的特殊選擇器，**用於選擇不同於一般元素的元素狀態或位置**。它們允許開發者針對特定的狀態或位置應用樣式，從而實現更豐富的設計效果。

### 偽類（pseudo-classes）
偽類是用於選擇元素的某些特定狀態或行為的 CSS 選擇器。它們以冒號（:）開頭，並附加到選擇器的末尾。

- 常用範例
  - 動作類
    - 類別
      - :hover(選擇了被鼠標指向的元素)
      - :active(選擇被點擊的元素)
      - :focus(選擇獲得焦點的元素)
    - Example:

    ```css
    a:hover {
       color: red;
    }

    input:focus {
        border: 2px solid blue;
    }
    ```

  - 連結類
    - 類別
      - :link(調整使用者還未瀏覽過的連結樣式)
      - :visited(改變使用者已瀏覽過的連結樣式)
    - Example:

    ```html
    <a href="#">XXX.com</a> <a href="#">google.com</a>
    <style>
    a:link {
        color: blue;
    }

    a:visited {
        color: red;
    }
    </style>
    ```

  - 狀態類 
    - 類別
      - :disabled
      - :enabled
    - Example:

    ```html
    <button disabled>Disabled Button</button>
    <button>Enabled Button</button>
    ```

  - 查找第一個或最後一個項目
    - 類別
      - :first-child(第一個)
      - :last-child(最後一個項目)
    - Example:

    ```html
    <ul>
        <li class="first">First Item</li>
        <li>Second Item</li>
        <li class="last">Last Item</li>
    </ul>
    ```

---

### 偽元素（pseudo-elements）
偽元素是用於選擇元素的某些特定部分或生成的內容的 CSS 選擇器。它們以兩個冒號（::）開頭，並附加到選擇器的末尾。偽元素可以用來在元素的內容前或內容後插入額外的內容，從而實現更多的設計效果。

常見的偽元素包括 ::before（在元素內容前插入內容）和 ::after（在元素內容後插入內容）。這些偽元素可以用來創建各種效果，如添加圖標、裝飾元素等。

- 常用範例
  - 狀態類
    - 類別
      - ::before（在元素內容前插入內容）
      - ::after（在元素內容後插入內容）
    - Example

    ```html
    <p>This is a paragraph with some text.</p>
    <style>
    p::before {
        content: "Before ";
        font-weight: bold;
    }

    p::after {
        content: " After";
        font-style: italic;
    }

    </style>
    ```


總結來說，偽類和偽元素是 CSS 中的強大工具，用於選擇元素的不同狀態和生成特定的內容。它們通常用於實現交互性和設計效果，幫助開發者更精準地控制元素的外觀和行為。

## Ref

- [explainthis-偽類 (pseudo-classes) 和偽元素 (pseudo-elements) 是什麼？](https://www.explainthis.io/zh-hant/interview-guides/frontend/pseudo-classes-and-pseudo-elements)