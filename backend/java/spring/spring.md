# Spring學習之路


## 基本名詞介紹

1. 控制反轉 (IOC)
   - 說明:
     - 是一種物件導向程式中的設計原則，用來降低code之間的耦合度
     - 基本理念: 借助第三方實現物件之間具有依賴關係的解耦
       - 以Spring為例子就是透過BeanFactory(Interface)為spring Ioc容器中的核心接口
       - Object之間的關係由容器建立與維護，將開發者做的事給容器做，就是IOC
    - 圖示:
      - IOC前
        - ![before IOC](/src/img/backend/java/sprinng/java_spring_proper_1_beforeIoc.jpg)
      - ICO後
        - ![after IOC](/src/img/backend/java/sprinng/java_spring_proper_1_afterIoc.jpg)
   - Ref : 
     - [控制反转（IoC）与依赖注入（DI）](https://www.jianshu.com/p/07af9dbbbc4b)
     - [什么是控制反转（IOC），什么是依赖注入（DI）](https://www.w3cschool.cn/fisug/fisug-5pot2g5k.html)


2. 依賴注入 (DI)