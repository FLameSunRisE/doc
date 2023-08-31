# Javascript基本介紹

- [Javascript基本介紹](#javascript基本介紹)
  - [Basic](#basic)
    - [Scope 作用域](#scope-作用域)
      - [Scope定義](#scope定義)
      - [全局作用域](#全局作用域)
      - [區域作用域](#區域作用域)
      - [嵌套作用域](#嵌套作用域)
      - [作用域鏈](#作用域鏈)
      - [作用域的重要性](#作用域的重要性)

---

## Basic

### Scope 作用域

#### Scope定義
作用域（Scope） 指的是一段程式碼中變數或函式的可見性和可訪問性範圍。作用域確定了在哪些地方可以訪問或操作特定的變數、函式或其他資源。

#### 全局作用域
全局作用域 是指在整個程式中都可以訪問的作用域範圍。在全局作用域中聲明的變數和函式可以在程式的任何位置被訪問，除非在其他作用域中有相同名稱的變數或函式覆蓋了它們。

```javascript
// 全局作用域範例
var globalVariable = 10;

function globalFunction() {
  return "This is a global function.";
}
```

#### 區域作用域
區域作用域 是指在特定程式區塊中定義的作用域範圍。這些變數和函式只能在該區塊內部被訪問，而在區塊之外則無法訪問。

```javascript
// 區域作用域範例
function localScopeExample() {
  var localVar = 20; // 被限制在函式內部的作用域
  console.log(localVar);
}
// 此處無法訪問 localVar

// ouput
// 20
// undefined
```

#### 嵌套作用域
在某個作用域內部可以包含另一個作用域，稱為嵌套作用域。內部作用域可以訪問外部作用域中的變數，但外部作用域無法訪問內部作用域的變數。

```javascript
// 嵌套作用域範例
function outerScope() {
  var outerVar = "Outer";
  
  function innerScope() {
    var innerVar = "Inner"; // 僅在內部作用域中可訪問
    console.log(outerVar + " - " + innerVar);
  }
  
  innerScope();
}

outerScope();

// ouput
// Outer - Inner
// undefined
```

#### 作用域鏈
作用域鏈（Scope Chain） 是指在嵌套作用域中查找變數時，程式會按照層級逐步向上搜索外部作用域，直到找到該變數或達到全局作用域。

```javascript
var globalVar = "Global";

function outerFunction() {
  var outerVar = "Outer";
  
  function innerFunction() {
    var innerVar = "Inner";
    console.log(globalVar + " - " + outerVar + " - " + innerVar);
  }
  
  innerFunction();
}

outerFunction();

// ouput
// Global - Outer - Inner
// undefined
```

#### 作用域的重要性
正確的作用域管理對於避免變數名稱衝突、提高代碼可讀性以及確保程式碼的可維護性至關重要。理解作用域的原則可以幫助開發者在程式中建立有組織、清晰且可靠的變數和函式使用方式。