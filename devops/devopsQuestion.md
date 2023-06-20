# Devops 面試題

- [Devops 面試題](#devops-面試題)
  - [gitlab](#gitlab)
    - [Q.gitlab 如何在 merge code 的時候自動觸發 CICD](#qgitlab-如何在-merge-code-的時候自動觸發-cicd)
      - [設定 gitlab 自動觸發步驟](#設定-gitlab-自動觸發步驟)
      - [自動觸發實作範例](#自動觸發實作範例)
    - [Q.pipline 的 job 代表的涵義](#qpipline-的-job-代表的涵義)
    - [Q.gitlab-runner 跟 gitlab-pipline 的關係](#qgitlab-runner-跟-gitlab-pipline-的關係)
      - [GitLab Runner](#gitlab-runner)
      - [GitLab Pipeline](#gitlab-pipeline)

---

## gitlab

### Q.gitlab 如何在 merge code 的時候自動觸發 CICD

#### 設定 gitlab 自動觸發步驟

1. 創建.gitlab-ci.yml 文件
   在項目的根目錄下創建名為.gitlab-ci.yml 的文件。這是 GitLab CI/CD 的配置文件，用於定義 CI/CD 流程和相關的任務。

2. 定義 CI/CD 流程
   在.gitlab-ci.yml 文件中定義 CI/CD 流程，包括不同的階段（stages）和任務（jobs）。每個任務可以包含一系列的步驟，如編譯代碼、運行測試、構建和部署等。

3. 配置觸發條件
   在.gitlab-ci.yml 文件中，可以定義觸發 CI/CD 流程的條件。可以使用關鍵詞（keywords）和正則表達式（regular expressions）來指定觸發的條件，如在特定分支上進行合併（merge request）或推送（push）時觸發。

4. 啟用 GitLab CI/CD
   確保項目的 CI/CD 功能已啟用。可以在 GitLab 項目的設置中檢查和啟用 CI/CD 功能。

5. 提交和合併代碼
   完成代碼的編寫和提交後，創建一個合併請求（merge request）。當該合併請求被審核並合併到目標分支時，CI/CD 流程將自動觸發並執行相應的任務。

#### 自動觸發實作範例

- 定義了三個階段（build、test、deploy）和相應的任務
- 使用了 rules 關鍵詞來定義觸發條件
  - 當 CI/CD 流程由合併請求事件觸發（即**merge_request_event**）並且代碼庫中的.js 和.css 文件發生變化時，才會執行 CI/CD 流程。

```yml
# 定義CI/CD流程
stages:
  - build
  - test
  - deploy

# 定義任務
build:
  stage: build
  script:
    - echo "Building the code..."

test:
  stage: test
  script:
    - echo "Running tests..."

deploy:
  stage: deploy
  script:
    - echo "Deploying the application..."

# 定義觸發條件
rules:
  - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
    changes:
      - "**/*.js"
      - "**/*.css"
```

---

### Q.pipline 的 job 代表的涵義

> GitLab CI/CD 中的 pipeline 的 job 代表著 CI/CD 流程中的不同任務或步驟。它們是我們在自動化流程中執行的具體操作。每個 job 有一個名稱和一個或多個腳本，腳本定義了該任務的具體操作，例如編譯代碼、運行測試、部署應用程序等。通過 pipeline 的 job，我們可以將整個 CI/CD 流程分解為多個獨立的任務，並按照順序執行它們。

- 獨立性：**每個 job 都是獨立運行的**，相互之間不會影響或干擾。
- 依賴性：job**可以指定依賴關係**，確保在前置 job 完成後才執行後續 job。
- 並行執行：不同的 job**可以並行運行**，提高整個 CI/CD 流程的效率。
- 順序執行：根據依賴關係，job 可以按照指定的順序執行，確保流程的合理性。
- 成功與失敗：**每個 job 的執行結果會被記錄**，如果有任何一個 job 失敗，整個 pipeline 將被標記為失敗。
- 環境隔離：每個 job 運行在自己的環境中，確保了不同 job 之間的隔離性。
- 配置靈活：可以根據需求自定義 job 的配置，包括運行腳本、環境變量、觸發條件等。
- 可視化和監控：pipeline 的 job 的執行過程和結果可以在 GitLab 的介面中進行查看和監控。
- 擴展性：可以根據需要定義多個 job，並根據項目的需求擴展 CI/CD 流程。

---

### Q.gitlab-runner 跟 gitlab-pipline 的關係

> GitLab Runner 是 GitLab CI/CD 的執行代理，負責在適當的**運行環境中執行 CI/CD 任務**
> GitLab Pipeline 則是**定義和管理 CI/CD 流程的結構**。它們共同協作，實現了持續集成和持續部署的自動化流程。

#### GitLab Runner

- GitLab Runner 是一個開源的代理代理程式，運行在項目的運行環境中（例如虛擬機、Docker 容器或實體機），
- **負責接收 GitLab Server 發送的 CI/CD 任務**，並在本地運行這些任務。
- GitLab Runner 通過配置文件中的註冊信息將自己連接到 GitLab Server，這樣 GitLab Server 就可以將 CI/CD 任務派發給相應的 GitLab Runner
- GitLab Runner 還負責報告任務的執行結果給 GitLab Server。

#### GitLab Pipeline

- GitLab Pipeline 則是**定義和管理 CI/CD 流程的結構**。
- 它是**一組按順序執行的階段（Stages）和任務（Jobs）的集合**，用於自動化地執行開發、測試和部署等操作。
- Pipeline 可以在 GitLab 的介面中通過 YAML 配置文件定義，也可以與項目代碼存儲庫關聯，作為項目的一部分。
- 當開發人員提交代碼或者觸發特定事件時，GitLab 會根據 Pipeline 配置自動觸發 CI/CD 流程。
- GitLab Runner 負責執行 Pipeline 中的各個任務，並將執行結果回報給 GitLab Server。

---
