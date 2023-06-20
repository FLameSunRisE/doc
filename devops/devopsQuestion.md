# Devops 面試題

- [Devops 面試題](#devops-面試題)
  - [gitlab](#gitlab)
    - [Q.gitlab 如何在 merge code 的時候自動觸發 CICD](#qgitlab-如何在-merge-code-的時候自動觸發-cicd)
      - [設定 gitlab 自動觸發步驟](#設定-gitlab-自動觸發步驟)
      - [自動觸發實作範例](#自動觸發實作範例)

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