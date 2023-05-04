# Design Pattern

- [Design Pattern](#design-pattern)
  - [設計模式(SOLID)](#設計模式solid)
  - [設計模式-創建型模式](#設計模式-創建型模式)
    - [Singleton Pattern (單例模式)](#singleton-pattern-單例模式)
    - [Factor Pattern(工廠模式)](#factor-pattern工廠模式)

## 設計模式(SOLID)

1. Single Responsibility Principle (SRP) 單一職責原則
   一個物件、函數或模組只負責一件事，不要有多個職責，這樣可以提高程式的可讀性和可維護性。

2. Open-Closed Principle (OCP) 開放封閉原則
   軟體實體 (類、模組、函數等) 應該是可以擴展的，但不可修改，這樣可以保證程式的穩定性和可維護性。

3. Liskov Substitution Principle (LSP) 里氏替換原則
   子類應該可以替換父類，並且原有的程序邏輯不受任何影響。這樣可以保證程式的正確性和可靠性。

4. Interface Segregation Principle (ISP) 接口隔離原則
   不應該強迫使用者去依賴他們不需要的方法，這樣可以減少類之間的耦合度，提高程式的可擴展性和可維護性。

5. Dependency Inversion Principle (DIP) 依賴反轉原則
   高層模組不應該依賴低層模組，而是透過抽象介面來依賴，這樣可以避免程式碼的緊密耦合，提高程式的可擴展性和可維護性。

## 設計模式-創建型模式

### Singleton Pattern (單例模式)

- 定義 :
  - 只有一個實例，而且自行實例化並向整個系統提供這個實例
  - 保證一個類別只會產生一個物件，而且要提供存取該物件的統一方法，也被稱為貪婪單例模式(Greed Singleton)，因為一開始就已經建立物件。
- UML:

  ```plantuml
  @startuml
  class Singleton {
    - static instance: Singleton
    - Singleton()
    + static getInstance(): Singleton
  }
  Singleton --|> Object
  @enduml
  ```

  ![DesignPattern](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuKhEIImkLWZEp4lFIIt9prEevb9Gq5K0IfTa9YjavW4PUScfLWW5O6auJqCJoDU6AKzFBV64wj3GHDPJouMmG5Utnax1FoahDRc4oo4rBmNe2000 "DesignPattern")

- 特性:
  - 優點 :
    - 簡單、方便，提供唯一入口操作物件。無需經過繁複的初始化流程即可操作。可以避免多個實例引起的同步問題。
    - 確保資料正確性，例如使用者登入狀態等重要資訊只有一個唯一的實例，可以避免同步問題和資料不一致問題。
  - 缺點 :
    - 應保持單純，不適合放置複雜邏輯。如果 Singleton 包含複雜邏輯，應該考慮使用 Facade pattern 進行封裝。
    - getInstance() 應避免過度使用，應該考慮使用 dependency injection 將需要的類別注入到將要使用的類別，以提高可測性。Singleton 不易進行單元測試。
- 應用情境:
  - 當資源有限，只能有一個客戶端使用該資源時，例如多執行緒中的資源競爭。
  - 當需要限制同一時間內只能有一個實例，例如 Windows 的 Task Manager。
  - 當需要共享且唯一的實例，例如網站計數器。
- 兩種實作方式:

  - 懶漢式

    - DEF
      - 懶漢式是指在第一次調用時才創建單例對象，如果之後再次調用時，仍然返回第一次創建的對象
    - 線程不安全的懶漢式
      - 單例對象在第一次調用時創建，但在多線程的情況下可能會出現多個實例，因此線程不安全。
    - 線程安全的懶漢式：
      - 將實例化的代碼包含在一個 synchronized 块中，保證多線程時只能創建一個實例。但是，這種方式會降低程序的性能。
    - 實作

    ```java
    public class LazySingleton {
        private static LazySingleton instance = null;

        private LazySingleton() {
            // 私有构造方法
        }

        public static LazySingleton getInstance() {
            if (instance == null) {
                instance = new LazySingleton();
            }
            return instance;
        }
    }
    ```

  - 餓漢式

    - DEF
      - 餓漢式是指在類加載時就創建單例對象，不管後面有沒有使用該對象，都會一直存在。餓漢式有一個明顯的缺點：如果單例對象佔用的資源比較多，而一直不被使用，會導致系統資源的浪費。
    - 實作

    ```java
    public class EagerSingleton {
        private static EagerSingleton instance = new EagerSingleton();

        private EagerSingleton() {
            // 私有构造方法
        }

        public static EagerSingleton getInstance() {
            return instance;
        }
    }
    ```

- 應用情境:
  - 外部資源
    - 在我們撰寫多執行緒的時候，一定都會遇到當資源有限的情況下，只能有一個 Client 可以取得該資源時，同一時間我們該如何去判斷只有一位 Client 可以獲取資源。這就是獨體模式。
  - Windows 的 Task Manager（任務管理器）
    - 同一時間內我們無法打開兩個 windows task manager
  - 網站的計數器
- 問題 : 當多執行緒時，有機會產生多個物件
- 解決 :

  - 透過 synchronized，當 getInstance 方法被調用時不會被 lock 住，就可以避免產生兩個物件。

  ```java
  public class Singleton {
      private static Singleton instance;

      private Singleton(){
          // 這裡面跑很了多code，建立物件需要花費很多資源
      }

      // 多執行緒時使用synchronized保證Singleton一定是單一的
      public static synchronized Singleton getInstance(){
          if(instance == null){
              instance = new Singleton();
          }
          return instance;
      }
  }
  ```

  - 上述寫法會導致效能變差，可以將 synchronized 搬到 getInstance 方法內來加快程式的效能。

  ```java
      public class Singleton {
          private static Singleton instance;


          private Singleton(){
              // 這裡面跑很了多code，建立物件需要花費很多資源
          }

          // 多執行緒時，當物件需要被建立時才使用synchronized保證Singleton一定是單一的 ，增加程式校能
          public static Singleton getInstance(){
              if(instance == null){
                  synchronized(Singleton.class){
                      if(instance == null){
                          instance = new Singleton();
                      }
                  }
              }
              return instance;
          }
      }
  ```

  - 但寫法維護性差，因此有了以下寫法

  ```java
  class Singleton {
      private static Singleton instance = new Singleton();

      private Singleton() { }

      public static Singleton getInstance() {
          return instance;
      }
  }
  ```

### Factor Pattern(工廠模式)

![Factory XML](https://www.tutorialspoint.com/design_pattern/images/factory_pattern_uml_diagram.jpg)

- 目的:
  - 提供一個工廠介面，將產生實體的程式碼交由子類別各自實現
  - 定義一個用於建立物品的介面，讓子類決定實體化哪一個類別。工廠方法使一個類別的實例化延遲到其子類別。
- 日常案例：
  當我們在使用工廠模式時，
  你跟工廠說你想要的那種規格的商品，
  而工廠負責製造你想要的那種規格的商品，
  當中可能需要某些組裝或是特殊步驟，
  但是作為消費者你不知道這些組裝方式和步驟，
  你還是可以買到你想要的東西。
- 特性:
  - 優點 :
    - 隱藏物件實例化之過程，若需要調整只需要調整工廠即可
    - 減輕建構子之負擔，使 class 更輕量
  - 缺點 :
    - 需寫大量的 factory，會增加 code 的複雜度。
    - 增加 code 的相依性，影響 trace code 的效率。
- 應用時機:
  - 當你的 class constructor 很擁腫的時候
  - 當你 create object 時需要用到很多「這個 class 不需要知道」的東西
  - 當你不在乎 sub-class，只在乎 super-class 的時候（例如你只要一些 Animal，不在乎 Dog 或 Cat）
  - 當你有很多 sub-classes，而它們的 create 方法大同小異的時候
- 類別圖:

  - ![ Factory Pattern圖解](https://skyyen999.gitbooks.io/-study-design-pattern-in-java/content/image/factory.gif)

| 工廠模式 | 簡單工廠模式                               | 工廠方法模式                                                             | 抽象工廠模式                                             |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| 定義     | 由一個工廠對象創建所有的產品對象           | 由一個工廠類別決定創建哪一種產品類別的實例                               | 定義一個用於創建對象的介面，讓子類決定實例化哪一個類別   |
| 簡單說明 | 所有的產品都由一個工廠製造                 | 有多個工廠,但一個工廠只生產一個產品                                      | 有多個工廠,每個工廠可以生產多種產品                      |
| 優點     | 統一管理創建實例，降低耦合度               | 簡單易懂，創建對象無需額外代碼                                           | 較為靈活，新增產品時只需新增相應的工廠類別               |
| 缺點     | 產品過多時，程式碼過於複雜                 | 擴展性較差，新增產品需要修改工廠類別程式碼                               | 產品種類過多時，工廠程式碼複雜                           |
| 實作方法 | 統一工廠類別，搭配傳入參數決定創建對象類別 | 在工廠類別中實現創建對象的方法，由使用者傳入參數決定創建哪一種類別的對象 | 定義抽象的工廠類別，由具體的工廠類別來實現具體的產品創建 |

- Simple Factory Pattern

  - 免到處製造新 Object（Object instantiation），
  - 統一在工廠（Factory）生產。
  - Client 只能透過工廠製作出想要的 object。
  - UML

    ```plantuml
    @startuml
    interface Product {
        + operation()
    }

    class ConcreteProductA {
        + operation()
    }

    class ConcreteProductB {
        + operation()
    }

    class SimpleFactory {
        + createProduct(String productType) : Product
    }

    SimpleFactory -> Product : Creates >
    SimpleFactory -> ConcreteProductA : Uses >
    SimpleFactory -> ConcreteProductB : Uses >
    @enduml
    ```

- Factory Method Pattern

  - 定義:
    - 屬於創建型模式，
    - 提供一個創建一系列相關或相互依賴的對象接口，無須指定他們具體類
  - UML:

    ```plantuml
    @startuml

    abstract class Creator {
        +abstract createProduct(): Product
    }

    class ConcreteCreator1 {
        +createProduct(): Product
    }

    class ConcreteCreator2 {
        +createProduct(): Product
    }

    interface Product {
        +use(): void
    }

    class ConcreteProduct1 {
        +use(): void
    }

    class ConcreteProduct2 {
        +use(): void
    }

    Creator <|- ConcreteCreator1
    Creator <|- ConcreteCreator2
    Product <|.. ConcreteProduct1
    Product <|.. ConcreteProduct2
    Creator --> Product

    @enduml
    ```

  - 組成:
    - 抽象工廠(AbstractFactory)：包含所以的產品建立的抽象方法
    - 具體工廠(ConcreteFactory)：具體工廠
    - 抽象產品(AbstractProduct)：都有多種不同的實現
    - 具體產品(Product)：為抽象產品的具體實現
  - 優點
    - 抽象工廠模式可以實現高內聚低耦合的設計目的，因此抽象工廠模式被廣泛的應用。
    - 當一個產品族中的多個對象被設計成一起工作時，它能保證客戶端始終使用同一個產品族中的對象。
    - 增加新的具體工廠和產品族很方便，不需要修改已有的系統，符合“開閉原則”。
  - 缺點
    - 在產品族中擴充功能新的產品是很困難的，它需要修改抽象工廠的介面。
    - 增加新的工廠和產品族容易，增加新的產品等級結構麻煩(開閉原則的傾斜性)。

- Abstract Factory Pattern

  - UML

    ```plantuml
    @startuml
    skinparam class {
        BackgroundColor WhiteSmoke
        BorderColor Black
    }
    interface AbstractProductA {
        +methodA()
    }
    interface AbstractProductB {
        +methodB()
    }
    class ProductA1 {
        +methodA()
    }
    class ProductA2 {
        +methodA()
    }
    class ProductB1 {
        +methodB()
    }
    class ProductB2 {
        +methodB()
    }
    AbstractProductA <|.. ProductA1
    AbstractProductA <|.. ProductA2
    AbstractProductB <|.. ProductB1
    AbstractProductB <|.. ProductB2

    interface AbstractFactory {
        +createProductA(): AbstractProductA
        +createProductB(): AbstractProductB
    }
    class ConcreteFactory1 {
        +createProductA(): AbstractProductA
        +createProductB(): AbstractProductB
    }
    class ConcreteFactory2 {
        +createProductA(): AbstractProductA
        +createProductB(): AbstractProductB
    }
    AbstractFactory <|-- ConcreteFactory1
    AbstractFactory <|-- ConcreteFactory2
    ConcreteFactory1 --> ProductA1
    ConcreteFactory1 --> ProductB1
    ConcreteFactory2 --> ProductA2
    ConcreteFactory2 --> ProductB2
    @enduml
    ```

- 範例:

  - ConnectionFactory 建立連線

  ```java
  interface Connection {
      void open();
  }
  public class HTTPConnection implements Connection {
      URL url;
      public HTTPConnection(URL url) {
          this.url = url;
      }
      public void open() {
          // Open url with browser
      }
  }
  public class SSHConnection implements Connection {
      Server destinationServer;
      public SSHConnection(Server destinationServer) {
          this.destinationServer = destinationServer;
      }
      public void open() {
          // Open a terminal and ssh into the destination server
      }
  }

  public void main(){
      ConnectionFactory factory = new ConnectionFactory();
      Connection conn = factory.createConnection(link);
      conn.open();
  }
  ```

- Reference
  - [Chapter 3 抽象工廠模式](https://rongli.gitbooks.io/design-pattern/content/chapter3.html)
  - [工廠模式 Factory Pattern](https://skyyen999.gitbooks.io/-study-design-pattern-in-java/content/factory.html)
  - [Factory Patterns - Factory Method Pattern](https://www.codeproject.com/Articles/1135918/Factory-Patterns-Factory-Method-Pattern)

---
