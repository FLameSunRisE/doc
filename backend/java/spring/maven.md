# Maven知識

- [Maven知識](#maven知識)
  - [實作遇到的問題](#實作遇到的問題)
    - [為什麼 Maven 找不到要運行的 JUnit 測試](#為什麼-maven-找不到要運行的-junit-測試)

## 實作遇到的問題

### 為什麼 Maven 找不到要運行的 JUnit 測試

- 問題說明:
JUnit 測試在構建期間無法運行。 Maven 可能找不到要運行的 JUnit 測試有多種原因。
執行```mvn clean install```時會無法抓到要測試的項目

- 解決辦法

    1. 命名問題
        - 依照Surefire plugin規範如下
          - ```**/Test*.java```:包括其所有子目錄和所有```Test```開頭的 Java 文件名
          - ```**/*Test.java```:包括其所有子目錄和所有```Test```結尾的 Java 文件名
          - ```**/*Tests.java```:包括其所有子目錄和所有```Tests```結尾的 Java 文件名
          - ```**/*TestCase.java```:包括其所有子目錄和所有```TestCase```結尾的Java文件名
        - 也可以客製化設定
          - Example
            - ```<configuration>```元素是用來設定Maven Surefire Plugin的運行時配置
            - ```<include>```元素指定了要包含在測試中的所有*Test.java類
            - ```<exclude>```元素指定了要排除的測試類，例如Cucumber和步驟類

            ```xml
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M7</version>
                <dependencies>
                    <dependency>
                        <groupId>org.junit.jupiter</groupId>
                        <artifactId>junit-jupiter-engine</artifactId>
                        <version>5.8.2</version>
                    </dependency>
                </dependencies>
                <configuration>
                    <includes>
                        <include>**/*Test.java</include>
                    </includes>
                    <excludes>
                        <exclude>com/flame/stockor/cucumber/**</exclude>
                        <exclude>com/flame/stockor/steps/**</exclude>
                    </excludes>
                </configuration>
            </plugin>
            ```

    2. 不正確的依賴

        - 使用junit5時需要添加一個TestEngine如下

        ```xml
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-engine</artifactId>
                <version>5.8.2</version>
            </dependency>
        </dependencies>
        ```

    3. 資料夾路徑問題
        - path:
          - src/test/java/...
          - src/test/resource/...
    4. 測試方法須加```public```