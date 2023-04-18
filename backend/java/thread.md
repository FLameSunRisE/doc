# Thread

- [Thread](#thread)
  - [Thread 介紹](#thread-介紹)
    - [基本功能](#基本功能)
      - [1.創建 Thread](#1創建-thread)
      - [2.執行 Thread](#2執行-thread)
      - [3.執行緒的 run()方法](#3執行緒的-run方法)
      - [4.停止 Thread](#4停止-thread)
  - [Thread 常見問題](#thread-常見問題)
    - [Q. Thread concurrency(併發)](#q-thread-concurrency併發)
  - [Q. Thread 中如何使用 Lock](#q-thread-中如何使用-lock)

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

## Thread 常見問題

### Q. Thread concurrency(併發)

- Def:
  指 Java 程式中多個任務（thread）同時執行的能力。在 Java 中，可以透過多線程（multithreading）實現並行處理，以提高系統效率和性能。

- 產生的問題
  - 競態條件（Race condition）：多個線程同時訪問和修改共享資源，導致結果不可預測，甚至出現錯誤。
    - Ex:多個線程同時對一個計數器進行加 1 操作，導致計數器值不可預測。
  - 死鎖（Deadlock）：兩個或多個線程互相等待對方釋放資源，導致程序無法繼續執行。
    - EX:假設有兩個線程 A 和 B，A 獲得了資源 X 並等待資源 Y，B 獲得了資源 Y 並等待資源 X，此時 A 和 B 都無法繼續執行，出現死鎖。
  - 資源耗盡（Resource starvation）：某些線程長時間佔用共享資源，導致其他線程無法獲取資源而無法正常運行。
    - EX:假設有一個共享資源被多個線程長時間佔用，而其他線程無法獲取資源，導致其他線程無法正常運行。
  - 線程阻塞（Thread blocking）：當線程等待一個操作完成時，會被阻塞住，無法執行其他操作。
    - EX:當一個線程等待一個阻塞的系統調用完成時，該線程會被阻塞，無法執行其他操作，例如等待網絡請求響應。
  - 競爭（Contention）：多個線程競爭同一資源時，可能會出現性能下降的情況。
    - EX:多個線程競爭同一資源時，可能會出現性能下降的情況，例如多個線程競爭同一 CPU 時，可能會導致 CPU 利用率下降。

## Q. Thread 中如何使用 Lock

定義一個 Lock 對象，可以使用 ReentrantLock 類來實現。

在需要同步的代碼區塊中獲取鎖，可以使用 Lock 的 lock() 方法進行鎖定。

使用 try-finally 確保鎖的釋放，因為如果出現異常或例外情況，需要確保鎖的正常釋放。可以在 finally 區塊中使用 unlock() 方法來釋放鎖。

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class MyThread extends Thread {
    private Lock lock = new ReentrantLock();
    private int count = 0;

    public void run() {
        try {
            lock.lock();
            for (int i = 0; i < 10; i++) {
                count++;
                System.out.println(Thread.currentThread().getName() + ": " + count);
                Thread.sleep(100);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }
}
public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}

```
