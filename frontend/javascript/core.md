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

## 核心概念

### 變數

- 資料型態

  - 基本型別(Primitive type): `string, number, boolean, null, undefined, symbol `

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

  - 物件型別(Object): `object, array, funciton`

    - 複製行為: 僅複製地址
    - Example:

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
  - 類似於 call by value, 複製變數後也跟者複製變數真正的值
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

![copy](/src/img/frontend/javascript/core_copy_sumary.png)

#### 深拷貝 (Deep copy)

- 說明:
  - 是兩個完全獨立，每一層的資料地址都不同，相互不影響的深層物件
- 範例:
  1. JSON.stringify/parse
  2. Lodash cloneDeep()
  3. Recursive deepCopyFunction

#### 淺拷貝 (Shallow copy)

- 說明:
  - 有任何一層的資料地址相同，背後指向的值相同，兩個物件的操作會互相影響
- 範例:

  1. 直接複製

     - 說明: original 與 clone 會互相影響

       ```js
       const originalData = {
         firstLayerNum: 10,
         obj: {
           secondLayerNum: 100,
         },
       };
       const clonedData = originalData;

       clonedData.firstLayerNum = 20;
       clonedData.obj.secondLayerNum = 200;

       console.log(originalData.firstLayerNum);
       // 20 => 第一層有被 clonedData 影響而改變
       console.log(originalData.obj.secondLayerNum);
       // 200 => 第二層有被 clonedData 影響而改變
       ```

  2. 複製第一層物件

     - 說明

       ```js
       function shadowCopy(originalObj) {
         let clonedObj = {};
         for (const key in originalObj) {
           clonedObj[key] = originalObj[key];
         }
         return clonedObj;
       }

       const originalData = {
         firstLayerNum: 10,
         obj: {
           secondLayerNum: 100,
         },
       };
       const clonedData = shadowCopy(originalData);

       clonedData.firstLayerNum = 20;
       clonedData.obj.secondLayerNum = 200;

       console.log(originalData.firstLayerNum);
       // 10 => 第一層沒有被 clonedData 影響
       console.log(originalData.obj.secondLayerNum);
       // 200 => 第二層被 clonedData 影響而改變
       ```

  3. Object.assign

     - 說明

       ```js
       const originalData = {
         firstLayerNum: 10,
         obj: {
           secondLayerNum: 100,
         },
       };
       const clonedData = Object.assign({}, originalData);

       clonedData.firstLayerNum = 20;
       clonedData.obj.secondLayerNum = 200;

       console.log(originalData.firstLayerNum);
       // 10 => 第一層沒有被 clonedData 影響
       console.log(originalData.obj.secondLayerNum);
       // 200 => 第二層被 clonedData 影響而改變
       ```

  4. Spread operator

     ```js
     const originalData = {
       firstLayerNum: 10,
       obj: {
         secondLayerNum: 100,
       },
     };
     const clonedData = { ...originalData };

     clonedData.firstLayerNum = 20;
     clonedData.obj.secondLayerNum = 200;

     console.log(originalData.firstLayerNum);
     // 10 => 第一層沒有被 clonedData 影響
     console.log(originalData.obj.secondLayerNum);
     // 200 => 第二層被 clonedData 影響而改變
     ```

  5. 部分 Array 方法，如：slice()、from() 等

     ```js
     const originalData = [10, { secondLayerNum: 100 }];
     const clonedData = originalData.slice();

     clonedData[0] = 20;
     clonedData[1].secondLayerNum = 200;

     console.log(originalData[0]);
     // 10 => 第一層沒有被 clonedData 影響
     console.log(originalData[1].secondLayerNum);
     // 200 => 第二層被 clonedData 影響而改變
     ```

## 參考資料

### 變數

- [JS 變數傳遞探討：pass by value 、 pass by reference 還是 pass by sharing？](https://www.programfarmer.com/articles/javaScript/javascript-pass-by-value-pass-by-reference-pass-by-sharing)

- [JS 中的淺拷貝 (Shallow copy) 與深拷貝 (Deep copy) 原理與實作](https://www.programfarmer.com/articles/javaScript/javascript-shallow-copy-deep-copy)
