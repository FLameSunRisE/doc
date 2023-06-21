# Spring boot 與 ELK 整合日誌資料

- [Spring boot 與 ELK 整合日誌資料](#spring-boot-與-elk-整合日誌資料)
  - [前置準備](#前置準備)
    - [ELK 環境設定](#elk-環境設定)
    - [spring boot 專案設定](#spring-boot-專案設定)
      - [1. pom.xml 設定](#1-pomxml-設定)
      - [2. application.properties 設定](#2-applicationproperties-設定)
      - [3. logback.xml 設定](#3-logbackxml-設定)
    - [Windows](#windows)
  - [Elasticsearch 如何使用](#elasticsearch-如何使用)
    - [常用工具](#常用工具)
    - [Elasticsearch 的 REST API](#elasticsearch-的-rest-api)
  - [遇到的問題](#遇到的問題)
    - [1.0 ELK 環境設定](#10-elk-環境設定)
      - [執行 logstash.bat 會出現以下問題](#執行-logstashbat-會出現以下問題)
    - [yaml 設定問題](#yaml-設定問題)
    - [spring boot 與 logstash 連線問題](#spring-boot-與-logstash-連線問題)

---

## 前置準備

### ELK 環境設定

- 下載相關檔案
  - Elasticsearch
    - [7.17.1](https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-17-1)
    - 安装中文分詞器
      - 下載,版本需與 Elasticsearch 相同
        - <https://github.com/medcl/elasticsearch-analysis-ik/releases>
      - 將解壓縮的檔案丟入 Elasticsearch 的 plugins
        - ex: `elasticsearch-7.17.1\plugins\elasticsearch-analysis-ik-7.17.1`
  - Kibana
    - [7.17.1](https://www.elastic.co/cn/downloads/past-releases/kibana-7-17-1)
  - Logstash
    - [7.17.1](https://www.elastic.co/cn/downloads/past-releases/logstash-7-17-1)

### spring boot 專案設定

#### 1. pom.xml 設定

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
    <version>2.7.5</version>
</dependency>
<dependency>
    <groupId>net.logstash.logback</groupId>
    <artifactId>logstash-logback-encoder</artifactId>
    <version>6.6</version>
</dependency>
```

#### 2. application.properties 設定

```properties
# ELK
elasticsearch.repositories.enabled=true
elasticsearch.cluster-nodes=127.0.0.1:9300
elasticsearch.cluster-name=elasticsearch
#Logstash
logging.file=C:/Users/jay/Documents/developer/logs/app.log
logging.level.root=debug
logging.config=classpath:log/logback.xml
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n
logging.pattern.file={"@timestamp":"%d{ISO8601}","@version":"1","message":"%msg","logger_name":"%logger","thread_name":"%thread","level":"%level","level_value":%levelInt}%n
#Rolling file appender
logging.file.type=file
logging.file.name=app.log
logging.file.path=C:/Users/jay/Documents/developer/logs/
logging.file.clean-history-on-start=true
logging.file.cleaner.enabled=true
logging.file.max-size=10MB
logging.file.max-history=10
logging.file.total-size-cap=10GB
logging.file.buffered=true
logging.file.buffer-size=128KB
logging.file.buffer-file-count=10
logging.file.buffer-flush-interval=10
logging.file.flush-interval=1
logging.file.layout.pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"
logging.file.layout.contentType=text/plain
logging.file.layout.includeCallerData=false
# Console appender
logging.console.enabled=true
logging.console.format=%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n
```

#### 3. logback.xml 設定

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
    </encoder>
  </appender>
  <appender name="logstash" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
    <destination>localhost:5044</destination>
    <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>
  </appender>
  <appender name="file" class="ch.qos.logback.core.FileAppender">
    <file>C:/Users/jay/Documents/developer/logs/app.log</file>
    <encoder>
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
    </encoder>
  </appender>
  <root level="debug">
    <appender-ref ref="console"/>
    <appender-ref ref="file"/>
    <appender-ref ref="logstash"/>
  </root>
</configuration>
```

### Windows

<!-- ### Docker容器化 -->
<!-- TODO(jay),代辦清單 -->

---

## Elasticsearch 如何使用

### 常用工具

1. 列出 Elasticsearch 中所有的 indices
    - 包括名稱、document 數量、儲存使用的 disk space 等資訊

    ```bash
    curl -XGET 'http://localhost:9200/_cat/indices?v'
    curl -XGET 'http://localhost:9200/<index-name>'
    ```

### Elasticsearch 的 REST API

1. 使用 curl 指令查詢 index

    ```bash
    curl -XGET 'http://localhost:9200/stockor-index-name'
    ```

2. 使用 curl 指令查詢 index 中的 documents

    ```bash
    curl -XGET 'http://localhost:9200/stockor-index-name/_search?pretty=true&q=*:*'
    ```

---

## 遇到的問題

### 1.0 ELK 環境設定

#### 執行 logstash.bat 會出現以下問題

- 問題

```log
Using JAVA_HOME defined java: C:\Users\jay\.jdks\azul-11.0.17
WARNING: Using JAVA_HOME while Logstash distribution comes with a bundled JDK.
DEPRECATION: The use of JAVA_HOME is now deprecated and will be removed starting from 8.0. Please configure LS_JAVA_HOME instead.
OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.
```

- 說明

Logstash 檢測到您正在使用 JAVA_HOME 設置，但 Logstash 實際上附帶了一個捆綁的 JDK，因此建議不要使用 JAVA_HOME。

- 解決方式

  - 在`logstash-7.17.1\bin`的`logstash.bat`檔案中加入

    - 設定為預設 JDK

      ```bat
      set JAVA_HOME=
      ....
      ```

  - 執行指令

    ```bash
    # windows
    >logstash.bat --debug

    # linux
    >bin/logstash --debug -f config_file.conf
    ```

### yaml 設定問題

- 問題描述

  - Pipelines YAML file is empty

    ```log
    [2023-04-06T18:17:26,267][DEBUG][logstash.config.source.multilocal] Reading pipeline configurations from YAML {:location=>"C:/Users/Documents/developer/env/ELK/7.17.1/logstash-7.17.1/config/pipelines.yml"}
    ERROR: Pipelines YAML file is empty. Location: C:/Users/Documents/developer/env/ELK/7.17.1/logstash-7.17.1/config/pipelines.yml
    usage:
    bin/logstash -f CONFIG_PATH [-t] [-r] [] [-w COUNT] [-l LOG]
    bin/logstash --modules MODULE_NAME [-M "MODULE_NAME.var.PLUGIN_TYPE.PLUGIN_NAME.VARIABLE_NAME=VALUE"] [-t] [-w COUNT] [-l LOG]
    bin/logstash -e CONFIG_STR [-t] [--log.level fatal|error|warn|info|debug|trace] [-w COUNT] [-l LOG]
    bin/logstash -i SHELL [--log.level fatal|error|warn|info|debug|trace]
    bin/logstash -V [--log.level fatal|error|warn|info|debug|trace]
    bin/logstash --help
    [2023-04-06T18:17:26,280][FATAL][org.logstash.Logstash    ] Logstash stopped processing because of an error: (SystemExit) exit
    org.jruby.exceptions.SystemExit: (SystemExit) exit
            at org.jruby.RubyKernel.exit(org/jruby/RubyKernel.java:747) ~[jruby-complete-9.2.20.1.jar:?]
            at org.jruby.RubyKernel.exit(org/jruby/RubyKernel.java:710) ~[jruby-complete-9.2.20.1.jar:?]
            at C_3a_.Users.jay.Documents.developer.env.ELK.$7_dot_17_dot_1.logstash_minus_7_dot_17_dot_1.lib.bootstrap.environment.<main>(C:\Users\jay\Documents\developer\env\ELK\7.17.1\logstash-7.17.1\lib\bootstrap\environment.rb:94) ~[?:?]
    ```

- 說明
  - pipelines.yml 為空,因此須建立 pipelines.yml 檔案並且要指定 conf
- 解決方法

  - 在 piplines.yml 加入以下指令

    ```yml
    - pipeline.id: my_pipeline
     path.config: "./logstash.conf"
    ```

### spring boot 與 logstash 連線問題

- 問題

```log
19:24:36,802 |-WARN in net.logstash.logback.appender.LogstashTcpSocketAppender[logstash] - Log destination localhost:4560: connection failed. java.net.ConnectException: Connection refused: connect at java.net.ConnectException: Connection refused: connect
```

- 說明
  - 客戶端發送的 HTTP 請求未能成功解析而引起的。這可能是由於請求格式不正確或客戶端中斷了請求。
- 解決

  - 通過發送測試事件驗證

    - nc 指令可能需要透過第三方工具來安裝

      ```bash
      # windows
      echo "hello world" | nc localhost 4560
      nc -v your_logstash_host 5044
      # Linux
      telnet your_logstash_host 5044
      $ powershell
      Test-NetConnection localhost -Port 5044
      ```

  - stdout 輸出除錯訊息

    - logstash.conf 加入輸出設定

    ```conf
        output {
            stdout {
                codec => rubydebug
            }
        }
    ```

  - 查詢TCP是否有被占用

    ```bash
    netstat -ano | findstr :5044
    TCP    127.0.0.1:5044         0.0.0.0:0              LISTENING       12345

    ```

<!-- ## Template

- 問題
- 說明
- 解決

## Template1

- 問題
- 說明
- 解決 -->
