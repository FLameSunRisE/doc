# Thread

- [Thread](#thread)
  - [Thread 介紹](#thread-介紹)
    - [基本功能](#基本功能)
      - [1.創建 Thread](#1創建-thread)
      - [2.執行 Thread](#2執行-thread)
      - [3.執行緒的 run()方法](#3執行緒的-run方法)
      - [4.停止 Thread](#4停止-thread)

## Thread 介紹

### 基本功能

#### 1.創建 Thread

我們可以使用 Thread 類別的建構子來創建一個新的執行緒。例如：

```java
Thread myThread = new Thread();
```

#### 2.執行 Thread

當我們創建一個新的 Thread 物件後，我們需要呼叫 Thread 物件的 start()方法來開始執行該執行緒。

```java
myThread.start();

```

#### 3.執行緒的 run()方法

每個 Java Thread 物件都有一個 run()方法，該方法定義了執行緒的主體程式碼。我們需要在該方法中定義我們想要該執行緒執行的程式碼。

```java
public void run() {
    // 執行緒的主體程式碼
}
```

#### 4.停止 Thread

我們可以使用 Thread 物件的 stop()方法來停止一個執行緒，但是不建議使用此方法，因為它可能會導致一些問題。我們通常使用一個 boolean 變數來控制一個執行緒的停止。

```java
myThread.stop(); // 不建議使用
```

- Java Thread 還提供了一些其他的方法和屬性，例如：
  - getName()和 setName()方法可以設置和獲取執行緒的名稱。
  - isAlive()方法可以檢查一個執行緒是否還在運行。
  - setPriority()和 getPriority()方法可以設置和獲取執行緒的優先級。
  - sleep()方法可以讓執行緒暫停一段時間，讓其他執行緒有機會運行。
