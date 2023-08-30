# Css specificity

- [Css specificity](#css-specificity)
  - [specificity scoring(特殊性評分)](#specificity-scoring特殊性評分)
  - [Scoring each selector type](#scoring-each-selector-type)
    - [Universal selector](#universal-selector)
    - [Element or pseudo-element selector](#element-or-pseudo-element-selector)
    - [Class, pseudo-class, or attribute selector](#class-pseudo-class-or-attribute-selector)
    - [Practice specificity score](#practice-specificity-score)
  - [Ref](#ref)

---

## specificity scoring(特殊性評分)

這種評分方式用於確定每個選擇器規則的優先級，以便在樣式應用時進行競爭。可以將特殊性想像成一個總分，而每種選擇器類型則為這個總分增加相應的分數。最終，具有最高分數的選擇器將獲勝，其樣式將應用到元素上。

![選擇器分數](https://explainthis.s3-ap-northeast-1.amazonaws.com/c816898f1e834c149f02810d711ef3d8.png)

> 圖片來源:https://www.explainthis.io/zh-hant/interview-guides/frontend/css-specificity

## Scoring each selector type

### Universal selector

- universal selector (\*)

  - point: 0

    ```css
    * {
      color: red;
    }
    ```

### Element or pseudo-element selector

- Type selector

  - point: 1

    ```css
    div {
      color: red;
    }
    ```

- Pseudo-element selector

  - point: 1

    ```css
    ::selection {
      color: red;
    }
    ```

### Class, pseudo-class, or attribute selector

- Class selector

  - point: 10

    ```css

    ```

- Pseudo-class selector

  - point: 10

    ```css
    :hover {
      color: red;
    }
    ```

- Attribute selector

  - point: 10

    ```css
    [href="#"] {
      color: red;
    }
    ```

- ID selector #

  - point: 100

    ```css
    #myID {
      color: red;
    }
    ```

- Inline style attribute #

  - point: 1000

    ```css
    <div style="color: red"></div>
    ```

- !important rule #

  - point: 10,000 highest

    ```css
    .my-class {
      color: red !important; /* 10,000 points */
      background: white; /* 10 points */
    }
    ```

---

### Practice specificity score

![web-dev-css-Visualizing specificity](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/McrFhjqHXMznUzXbRuJ6.svg)

> 圖片來源:https://web.dev/learn/css/specificity/

- Practice

```css
/* 0-4-1 
a（元素選擇器）：0-0-1
.my-class（類別選擇器）：0-1-0
.another-class（類別選擇器）：0-1-0
[href]（屬性選擇器）：0-1-0
:hover（偽類選擇器）：0-1-0
*/
a.my-class.another-class[href]:hover {
  color: lightgrey;
}

/* 1-2-1 
#specialty（ID 選擇器）：1-0-0
:hover（偽類選擇器）：0-1-0
li（元素選擇器）：0-0-1
.dark（類別選擇器）：0-1-0
*/
#specialty: hover li.dark;
```

## Ref

- [web.dev-specificity](https://web.dev/learn/css/specificity/)
