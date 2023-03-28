# ActiveMQ

## 如何安裝

### 透過 Docker 安裝 ActiveMQ

- 拉取 Image

```shell
docker pull rmohr/activemq
```

- 執行 Image

  - 指令說明:
    - -p 61616:61616 ：將 Container 的 61616 Port 映射到主機的 61616 Port (前面代表主機，後面代表容器)
    - -p 8161:8161 ：將 Container 的 8161 Port 映射到主機的 8161 Port (前面代表主機，後面代表容器)
    - -d :後台執行 Container
    - rmohr/activemq ：指定安裝的鏡像 rmohr/activemq

```shell!
# 基本執行cmd
docker run -p 61616:61616 -p 8161:8161 rmohr/activemq
# 設定container name
docker run --name myactivemq -p 61616:61616 -p 8161:8161 -d rmohr/activemq
# 設定客製化登入帳號密碼
docker run -d --name myactivemq -p 61616:61616 -p 8161:8161 -e ACTIVEMQ_ADMIN_LOGIN=admin -e ACTIVEMQ_ADMIN_PASSWORD=custompwd webcenter/activemq

```

### 如何登入介面

- 登入管理介面
  - 登入路徑: http://localhost:8161/admin
    - 預設用戶帳號:admin
    - 預設用戶密碼:admin

---

## 參考資料

- [Docker - 第七章 | 安裝 ActiveMQ | J.J.'s Blogs](https://morosedog.gitlab.io/docker-20190425-docker7/)
