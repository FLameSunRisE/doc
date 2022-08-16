# Daily Learn

- [Daily Learn](#daily-learn)
  - [Schedule](#schedule)
  - [Backend](#backend)
    - [Question](#question)
  - [### <a id="Backend-Learn">Learn</a>](#-learn)
      - [**<a id="Session-Cookie-Token">1. Session、Cookie、Token</a>**](#1-sessioncookietoken)
        - [Session](#session)
        - [Cookie](#cookie)
        - [Token](#token)
      - [buffer pool 緩衝池](#buffer-pool-緩衝池)
          - [tags: `java`](#tags-java)
      - [**<a id="java_string_intro">2. Java String Intro</a>**](#2-java-string-intro)
      - [**<a id="backend_learn_string_pool">3. String Pool</a>**](#3-string-pool)
      - [OAuth](#oauth)
      - [GitLab](#gitlab)
        - [Gitlab-runner](#gitlab-runner)
  - [Frontend](#frontend)
    - [Question](#question-1)
    - [Learn](#learn)
      - [Diff算法 (vue)原理](#diff算法-vue原理)
  - [Reference](#reference)

## Schedule


| Date       | Category                        | Title                                                                           |
|------------|---------------------------------|---------------------------------------------------------------------------------|
| 2022-07-25 | [Backend](#Backend)             | [Session、Cookie、Token](#Session-Cookie-Token)                                 |
| 2022-07-25 | [Frontend Question](#Frontend)  | [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#backend_q_1) |
| 2022-07-26 | [Backend Learn](#Backend-Learn) | [buffer pool 緩衝池](#buffer-pool-緩衝池)                                       |
| 2022-07-27 | [Backend](#Backend)             | [Java String 介紹](#java_string_intro)                                          |
| 2022-07-27 | [Backend](#Backend)             | [String Pool](#backend_learn_string_pool)                                       |
| 2022-07-28 | [Backend](#Backend)             | [OAuth](#OAuth)                                                                 |


## [Backend](#Backend)

### Question

---
### <a id="Backend-Learn">Learn</a>
---

#### **<a id="Session-Cookie-Token">1. Session、Cookie、Token</a>**
##### Session
- 定義:
    - Server端保存的一種數據結構，用來追蹤用戶狀態
- 產生過程:
    - 用戶第一次登陸網站後,brower會將用戶資料發送至Server, Server會為該用戶建立一個SessionId, 並在response內容(Cookie)中將SessionId一併返回browers,並保存在用戶的local。 因此當用戶再次發出請求時,brower會將上次儲存的資料(SessionID...)一併傳送至Server，Server在接收到請求後,會根據SessionId判斷是哪位用戶,並根據SessionId在Session庫中取得用戶資訊並返回給brower

##### Cookie
- 定義:
    - Client端保存用戶的一種機制,用來記錄用戶的資訊,也是實現Session的一種方式
    - Cookie儲存空間有限
##### Token
- 定義:
    - Token主要是某一個唯一值(userId)透過一些加密算法產生的一個字串稱之為Token
- 原理:
    - 為了避免每次用戶登入時都需要頻繁的與DB查詢帳戶資料與密碼而誕生了Token,其主要是透過使用者的唯一識別值透過加密生成的唯一值(Token)並返回Client端並保存起來,在下次請求時只需要帶入Token便能去驗證識別該用戶了。

---
#### [buffer pool 緩衝池](#buffer-pool-緩衝池)

###### tags: `java`
- new Integer(XXX) VS Integer.valueOf(XXX)
    - 比較
        - new Integer(123) :每次都會新建一個對象
        - Integer.valueOf(123) :會使用緩存池中的對象，多次調用會取得同一個對象的引用。
    - 案例
    ```java
        Integer x = new Integer(123);
        Integer y = new Integer(123);
        System.out.println(x == y);    // false
        Integer z = Integer.valueOf(123);
        Integer k = Integer.valueOf(123);
        System.out.println(z == k);   // true
    ```
---
#### **<a id="java_string_intro">2. Java String Intro</a>**
- 特性:
    - 不可變 : 因使用```final```
        - 可以緩存```hash```值 : 不可變的特性使hash的key值也不可變,只需進行一次計算
            - Example:
                - Code:
                ```java
                String string1 = "abcd";
                String string2 = "abcd";
                ```
                ![heap pic](https://www.programcreek.com/wp-content/uploads/2013/07/java-string-pool.jpeg?ezimgfmt=rs:400x260/rscb13/ng:webp/ngcb13)
                
        - String Pool的需要: 如果一個String被建立後,便會透過String pool中取得引用。
        - Security : 確保參數不可變可避免當網路連線、打開文件等等若參數被改變,會導致安全威脅
        - Immutable objects are naturally thread-safe: 
            - 因為```Immutable```不可變所以可已在多個執行緒中自由的共享,因此避免了同步的需求。

- String, StringBuffer and StringBuilder

| String比較    | 可變性(Mutability) | 執行緒安全(Thread-Safety)                  |
|---------------|--------------------|--------------------------------------------|
| String        | 不可變             | 不可變,因此為安全的                        |
| StringBuilder | 可變               | 不安全                                     |
| StringBuffer  | 可變               | 內部使用synchronized 進行同步,因此為安全的 |


- 版本差異:
    - Java 8: 內部儲存方式為```char```,並使用```final```不可被继承
    - Java 9: 內部儲存方式為```byte```且透過```coder```來辨識其編碼,並使用```final```不可被继承
- Reference
    - [Why String is immutable in Java?](https://www.programcreek.com/2013/04/why-string-is-immutable-in-java/)
    - [Java基礎-String](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#%E4%BA%8Cstring)
    - [String, StringBuffer, and StringBuilder](https://stackoverflow.com/questions/2971315/string-stringbuffer-and-stringbuilder)

---
#### **<a id="backend_learn_string_pool">3. String Pool</a>**

- 目的:
> 字串池機制存在的目的就是為了降低「當字串重覆使用」時所消耗的資源成本。
- 機制:
    - 只有以「Literal」形式，也就是藉由「雙引號」所產生的字串會被放在「字串池」中
        - Eample1:
            ```java
            // New String
            String s1 = "ABC"; //放入spring pool
            String s3 = new String("ABC"); // Heap
            System.out.println(s1 == s3); // false
            ```
        - Eample2:
            ```java
            String s1 = "ABC"; // line 1

            String literalStr = "A" + "B" + "C";
            System.out.println(s1 == literalStr); // true

            String a = "A";
            String b = "B";
            String c = "C";
            String variableStr = a + b + c;
            System.out.println(s1 == variableStr); // false
            System.out.println(variableStr == literalStr); // false
            ```
            
            1. ```s1 == variableStr``` => false
            
                - 牽扯到「Literal」的產生機制與方法：「String#intern()」:
                - 「intern()」會根據字串池是否有「相同字串」，若有，它就會將記憶體指向該位置
                ```JAVA
                String s1 = "ABC";
                String s3 = new String("ABC");
                String s4 = s3.intern();
                System.out.println(s1 == s3); // false
                System.out.println(s1 == s4); // false ????? check
                ```
                ![stringMemory](https://miro.medium.com/max/640/0*PPdgAWNxZvqtHnkG.png)

            
            3. ```variableStr == literalStr``` => false
                - literalStr編譯過程
                    - 故「s1」與「literalStr」所指向的位址皆是「字串池」中的「ABC」
                - 而「新字串」與「字串池中的相同內容字串」自然不是同一個物件

---
#### [OAuth](#OAuth)



---
#### [GitLab](#gitLab)

##### Gitlab-runner

- docker指令
    - 查詢現在運行的container
        ```docker ps -a```
    
    - Remove container
        - Stop all containers
    	```docker stop $(docker ps -a -q) ```
        - Remove all containers
    	```docker rm $(docker ps -a -q)```

    - 移除所有未使用的 Docker 項目
        ```docker system prune```

    - remove所有image
        ```docker rmi $(docker images -a -q)```

- Reference
    - 


---

- Reference
    - [淺談「String Pool」
](https://medium.com/rick-x-coding/%E6%B7%BA%E8%AB%87-string-pool-42c37db41322)
    - [Java基礎-String Pool](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#string-pool)



---

## [Frontend](#Frontend)

### Question

- <a id="backend_q_1" href="">Q1</a> : [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)
    - Key的作用:
        - Key是給每一個vnode的唯一值(id),可以依靠key,準確且快速的拿到oldVnode中對應的vnode節點
        - 準確 : 根據sameNode函數針對a.key === b.key 比對可避免複用的情況
        - 快速: 利用key唯一性map對象來獲取對應的node,會traversal的方式更快速(map比traversal快)
    - 效能面比較:
        - 不帶key:
            -  採用默認模式
            -  針對節點進行就地復用
        - 帶key:
            - 根據key去進行交叉比對,從而找出相對應的舊節點
        ```js
        vm.dataList = [4, 1, 3, 5, 2] // 数据位置替换

         // 没有key的情况， 节点位置不变，但是节点innerText内容更新了
          [
            '<div>4</div>', // id： A
            '<div>1</div>', // id:  B
            '<div>3</div>', // id:  C
            '<div>5</div>', // id:  D
            '<div>2</div>'  // id:  E
          ]

          // 有key的情况，dom节点位置进行了交换，但是内容没有更新
          // <div v-for="i in dataList" :key='i'>{{ i }}</div>
          [
            '<div>4</div>', // id： D
            '<div>1</div>', // id:  A
            '<div>3</div>', // id:  C
            '<div>5</div>', // id:  E
            '<div>2</div>'  // id:  B
          ]
        ```

### Learn

#### Diff算法 (vue)原理


## Reference
- [Advanced-Frontend](https://github.com/Advanced-Frontend/Daily-Interview-Question)
- [Why String is immutable in Java?](https://www.programcreek.com/2013/04/why-string-is-immutable-in-java/)
[跳轉指定位置](#divtop)