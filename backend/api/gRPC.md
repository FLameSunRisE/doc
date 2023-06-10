# gRPC

- [gRPC](#grpc)
  - [介紹 gRPC](#介紹-grpc)
  - [使用 gRPC](#使用-grpc)
    - [ProtoBuf 定義](#protobuf-定義)
    - [生成程式碼](#生成程式碼)

---

## 介紹 gRPC

gRPC 是一個高效、通用且跨平台的遠程過程呼叫 (RPC) 框架，由 Google 開發並開源。它基於 Protocol Buffers（簡稱 Protobuf）序列化協議和 HTTP/2 作為傳輸協議，並支援多種語言，包括 Java、C++、Python、Go、Ruby 等。

gRPC 提供了許多特性，使得開發者能夠輕鬆地定義服務和消息格式，並自動生成強類型的客戶端和伺服器端程式碼。它採用基於 ProtoBuf 定義的服務和消息的方式來進行通信，並使用 HTTP/2 作為傳輸協議，以實現高效的雙向流式傳輸和壓縮。

- gRPC 支援四種服務型態：
  - Unary：一個請求，一個回應。類似於傳統的同步呼叫。
  - Server Streaming：一個請求，多個回應。
  - Client Streaming：多個請求，一個回應。
  - Bidirectional Streaming：多個請求，多個回應。

使用 gRPC，您可以輕鬆定義服務接口和消息格式，並使用自動生成的程式碼來實現客戶端和伺服器端的互通。這使得開發跨平台的分佈式應用程式變得更簡單和高效。

- gRPC 優點：
  - 高效性：使用二進制的 Protobuf 和 HTTP/2，提供高效的序列化和壓縮，並支援流式傳輸。
  - 簡單易用：透過 Protobuf 定義服務和消息，並自動生成強類型的程式碼。
  - 多語言支援：支援多種語言，如 Java、C++、Python、Go 等。
  - 可擴展性：支援多種擴展點，如拦截器、認證和自訂封包處理器等。
  - 可互通性：與其他基於 Protobuf 和 gRPC 的系統互通。

---

## 使用 gRPC

### ProtoBuf 定義

gRPC 使用 Protocol Buffers（ProtoBuf）作為消息格式的定義語言。ProtoBuf 是一種輕量級、高效的二進制序列化格式，可用於定義結構化的消息格式。您可以使用 .proto 文件定義您的服務和消息。

以下是一個示例的 .proto 文件，定義了一個簡單的問候服務：

```protobuf
syntax = "proto3";

package com.flamesunrises.grpc.demo.api;

service GreetingService {
  rpc SayHello(HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string name = 1;
}

message HelloResponse {
  string message = 1;
}

```

### 生成程式碼

使用 gRPC 的主要優勢之一是它可以自動生成客戶端和伺服器端的程式碼。這些程式碼基於您的 .`proto` 文件，並可在您的應用程式中使用。

您可以使用 `protobuf-maven-plugin` 來生成程式碼。該插件會自動執行 Protobuf 編譯器（protoc），根據您的 `.proto` 文件生成相應的程式碼。
