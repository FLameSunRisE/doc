# Java Core

- [Java Core](#java-core)
  - [基本介紹](#基本介紹)
      - [**String Intro**](#string-intro)
      - [**buffer pool 緩衝池**](#buffer-pool-緩衝池)
    - [**String Pool**](#string-pool)
  - [Reference](#reference)

## 基本介紹

#### **<a id="backend_java_core_string_intro">String Intro</a>**

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
| ------------- | ------------------ | ------------------------------------------ |
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

#### **<a id="backend_java_core_buffer_pool">buffer pool 緩衝池</a>**

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

### **<a id="backend_java_core_string_pool">String Pool</a>**

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

## Reference

- [Why String is immutable in Java?](https://www.programcreek.com/2013/04/why-string-is-immutable-in-java/)
[跳轉指定位置](#divtop)
- [淺談「String Pool」
](https://medium.com/rick-x-coding/%E6%B7%BA%E8%AB%87-string-pool-42c37db41322)
- [Java基礎-String Pool](https://github.com/CyC2018/CS-Notes/blob/master/notes/Java%20%E5%9F%BA%E7%A1%80.md#string-pool)
