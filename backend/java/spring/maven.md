# Maven 知識

- [Maven 知識](#maven-知識)
  - [實作遇到的問題](#實作遇到的問題)
    - [為什麼 Maven 找不到要運行的 JUnit 測試](#為什麼-maven-找不到要運行的-junit-測試)
    - [maven 下載檔案時無法下載](#maven-下載檔案時無法下載)

## 實作遇到的問題

### 為什麼 Maven 找不到要運行的 JUnit 測試

- 問題說明:
  JUnit 測試在構建期間無法運行。 Maven 可能找不到要運行的 JUnit 測試有多種原因。
  執行`mvn clean install`時會無法抓到要測試的項目

- 解決辦法

  1. 命名問題

     - 依照 Surefire plugin 規範如下
       - `**/Test*.java`:包括其所有子目錄和所有`Test`開頭的 Java 文件名
       - `**/*Test.java`:包括其所有子目錄和所有`Test`結尾的 Java 文件名
       - `**/*Tests.java`:包括其所有子目錄和所有`Tests`結尾的 Java 文件名
       - `**/*TestCase.java`:包括其所有子目錄和所有`TestCase`結尾的 Java 文件名
     - 也可以客製化設定

       - Example

         - `<configuration>`元素是用來設定 Maven Surefire Plugin 的運行時配置
         - `<include>`元素指定了要包含在測試中的所有\*Test.java 類
         - `<exclude>`元素指定了要排除的測試類，例如 Cucumber 和步驟類

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

     - 使用 junit5 時需要添加一個 TestEngine 如下

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
  4. 測試方法須加`public`

---

### maven 下載檔案時無法下載

- issue

    ```log
    Connection failed! sun.security.validator.ValidatorException: PKIX path building failed:sun.security.provider.certpath.SunCertPathBuilderExceptions: unable to find certification path to requested target.
    ```

- 錯誤原因

  - SSL/TLS 通訊協定相關的錯誤
    - 伺服器會傳回其證書以驗證其身份。如果沒有適當的證書鏈可供驗證伺服器證書，就會引發這個錯誤。
  - 通常是由於缺少驗證伺服器證書的合法性而引起的

- 解決方式

  1. 若以 maven 憑證為例:
     - 至[repo.maven](https://repo.maven.apache.org/)網站
       - Click on lock icon and choose "View Certificate"
       - Go to the "Details" tab and choose "Save to File"
       - Choose type "Base 64(.CER)" and save it somewhere
  2. 找到 java 目錄並進入 cmd

     - 目錄位置:C:\Program Files\Zulu\zulu-8\jre\lib\security
     - 執行 cmd
     - 新增金鑰

        ```cmd
        keytool -import -trustcacerts -noprompt -keystore ${keystore.file} -storepass ${keystore.pass} -alias ${cert.alias} -file
        keytool -import -trustcacerts -noprompt -keystore cacerts -storepass changeit -alias ContrastMavenRepoServer -file
        ```

- 其他使用到指令

    ```cmd!
    <!-- 刪除-->
    keytool -delete -noprompt -alias ${cert.alias}  -keystore ${keystore.file} -storepass ${keystore.pass}
    <!-- 寫入 -->
    keytool -import -trustcacerts -noprompt -keystore cacerts -storepass changeit -alias ContrastMavenRepoServer -file D:/maven/key/repo.maven.apache.org.crt
    <!-- 查詢 -->
    keytool -list -keystore cacerts -alias ContrastMavenRepoServer
    ```

- 參考資料:
  - [IntelliJ Plugin: Connection failed, unable to find certification path to requested target.](https://support.contrastsecurity.com/hc/en-us/articles/360043545072-IntelliJ-Plugin-Connection-failed-unable-to-find-certification-path-to-requested-target-)
  - [Problems using Maven and SSL behind proxy](https://stackoverflow.com/questions/25911623/problems-using-maven-and-ssl-behind-proxy)
