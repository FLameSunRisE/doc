# Spring boot security implements

- [Spring boot security implements](#spring-boot-security-implements)
  - [lab - Spring security + jwt](#lab---spring-security--jwt)
    - [lab1-實作功能](#lab1-實作功能)
      - [1. 用戶註冊和登入](#1-用戶註冊和登入)
      - [2. 生成 JWT](#2-生成-jwt)
      - [3. JWT 驗證](#3-jwt-驗證)
      - [4. 基於角色的訪問控制](#4-基於角色的訪問控制)
      - [5. 安全防護](#5-安全防護)
    - [lab1-實作細節](#lab1-實作細節)

---

## lab - Spring security + jwt

### lab1-實作功能

#### 1. 用戶註冊和登入

我們實現了用戶註冊和登入功能。使用者可以提供他們的使用者名稱和密碼進行註冊，並在之後使用這些資料進行登入。

- 在用戶註冊時，我們會使用 Spring Security 提供的 PasswordEncoder 進行密碼的加密處理，以保護用戶的密碼不被直接讀取。
- 在用戶登入時，我們會根據提供的使用者名稱和密碼進行驗證，驗證通過後我們將產生 JWT。

#### 2. 生成 JWT

當用戶成功登入後，我們的服務會產生一個 JWT 並回傳給用戶。這個令牌包含了用戶的身份信息，並被我們的服務端使用秘鑰簽名。

- JWT 的產生主要使用了 Jwts.builder()方法，我們設定了 JWT 的主要內容包含發行者、主題、發行日期、到期日期等資訊。
- 生成的 JWT 將作為對登入用戶回應的一部分，客戶端可以在後續的請求中使用這個令牌進行身份驗證。

#### 3. JWT 驗證

我們的服務會解析和驗證所有附帶 JWT 的進入請求。驗證成功後，我們會從 JWT 中取出用戶的身份信息，並授予用戶進行後續操作的權限。

- 我們使用 JwtRequestFilter 來攔截並處理所有附帶 JWT 的進入請求，對 JWT 進行驗證，並從中提取出用戶資訊。
- 若 JWT 有效，我們會使用 UsernamePasswordAuthenticationToken 產生一個已驗證的身份，並將其設定到 SecurityContextHolder 中，以便後續的請求可以使用。

#### 4. 基於角色的訪問控制

我們使用了 Spring Security 的角色基礎訪問控制功能。不同的用戶擁有不同的角色，並根據其角色具有不同的訪問權限。

- 我們在配置 Spring Security 的時候，對不同的 API 路徑設定了不同的角色訪問限制。
- 在驗證 JWT 的時候，我們也會驗證用戶的角色是否符合訪問該 API 的權限。

#### 5. 安全防護

我們也實現了一些基本的安全防護措施，包括防止跨站請求偽造（CSRF）攻擊，以及進行敏感數據的加密處理。

- 使用了 Spring Security 的內建功能來防止 CSRF 攻擊。
- 使用 PasswordEncoder 來進行敏感數據的加密處理，確保敏感資訊不會被直接讀取。

### lab1-實作細節

- repo : 待更新

---
