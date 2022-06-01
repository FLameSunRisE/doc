# Javascript
- [Javascript](#javascript)
  - [核心概念](#核心概念)
    - [變數](#變數)
      - [變數傳遞原理](#變數傳遞原理)
        - [pass by value (call by value)](#pass-by-value-call-by-value)
        - [pass by reference (call by reference)](#pass-by-reference-call-by-reference)
        - [pass by sharing](#pass-by-sharing)
    - [Copy](#copy)
      - [深拷貝 (Deep copy)](#深拷貝-deep-copy)
      - [淺拷貝 (Shallow copy)](#淺拷貝-shallow-copy)
  - [參考資料](#參考資料)
    - [變數](#變數-1)
    - [複製](#複製)

## 核心概念
### 變數
    
- 資料型態
  - 基本型別(Primitive type): ```string, number, boolean, null, undefined, symbol ```
    - 複製行為: 直接複製原始值
    - Example: 
        ```js
            let a = 4;
            let b = a;
            console.log(a); // 4
            console.log(b); // 4
            // 更改a值
            a = 10;

            console.log(a); // 10
            console.log(b); // 5 
        ```
    - 
  - 物件型別(Object): ``` object, array, funciton ```
    - 複製行為: 僅複製地址
    -  Example: 
        ```js
        let a = { number: 4 };
        let b = a;

        console.log(a); // { number : 4 }
        console.log(b); // { number : 4 }
        // 更改a值
        a.number = 10;
        // 因是物件因此是複製位置，所以改變的也是位置上的值
        console.log(a); // { number : 10 }
        console.log(b); // { number : 10 } => 跟著 a 改變
        ```

- 基本型別與物件型別差異
    - 儲存在記憶體中的方式不同


#### 變數傳遞原理
##### pass by value (call by value)
- 概念
  - 傳遞變數時，是複製了傳遞進來的「值 (value)」

- 範例
##### pass by reference (call by reference)
- 概念: 
    - 傳遞參數時，僅是複製了參數的位置 (address)
- 範例
    ```js
    function referenceTest(objData) {
    objData.number = 10; // 改變物件內容
    console.log(objData); // { number: 10 }
    }

    let a = { number: 5 }; // Object data
    referenceTest(a);

    console.log(a); // { number: 10 } => 跟著改變
    ```

##### pass by sharing
- 概念: 
    - 類似於call by value, 複製變數後也跟者複製變數真正的值
- 範例
    ```js
    function test(objectData) {
    objectData = { number: 10 }; // 物件重新賦值
    console.log(objectData); // { number: 10 }
    }

    let a = { number: 5 }; // object data
    test(a);

    console.log(a); // { number: 5 }
    ```

### Copy
#### 深拷貝 (Deep copy) 
- 說明:
- 圖示:


#### 淺拷貝 (Shallow copy)





## 參考資料
### 變數
- [JS 變數傳遞探討：pass by value 、 pass by reference 還是 pass by sharing？](https://www.programfarmer.com/articles/javaScript/javascript-pass-by-value-pass-by-reference-pass-by-sharing)
### 複製
- 