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

## [設計模式-創建型模式](./creationalPattern/)

### [Singleton Pattern (單例模式)](./creationalPattern/singleton.md)

### Factory Pattern(工廠模式)
---
