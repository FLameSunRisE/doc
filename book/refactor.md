# Refactor

- [Refactor](#refactor)
  - [Clean code](#clean-code)
  - [技術債務](#技術債務)
    - [Causes of technical debt](#causes-of-technical-debt)

---

此篇為翻譯[refactoring.guru](https://refactoring.guru/)網站經典內容

## Clean code

打擊技術債務。它將一個混亂的程式碼轉變成乾淨的程式碼和簡單的設計。

- Core
  - Clean code is obvious for other programmers.
    乾淨的程式碼對其他程式設計師是顯而易見的。
    我不是在談論超級複雜的演算法。糟糕的變數命名、膨脹的類和方法、神奇數字 - 你名字的都會使程式碼變得混亂且難以理解。
  - Clean code doesn’t contain duplication.
    乾淨的程式碼不包含重複。
    每次你必須在重複的程式碼中進行更改時，你都必須記住對每個實例進行相同的更改。這增加了認知負荷並減慢了進展。
  - Clean code contains a minimal number of classes and other moving parts.
    乾淨的程式碼包含最少的類和其他移動部分。
    少的程式碼意味著少的東西要記住。少的程式碼意味著少的維護。少的程式碼意味著更少的錯誤。程式碼是一種負擔，保持它短小簡單。
  - Clean code passes all tests.
    乾淨的程式碼通過所有測試。
    當只有95％的測試通過時，你知道你的程式碼很髒。當你的測試覆蓋率為0％時，你知道你完了。

## 技術債務

> Ward Cunningham提出的

- 舉例:
如果你從銀行借款，這可以讓你更快地購買物品。你需要支付額外的費用以加快這個過程 - 你不僅要償還本金，還要支付額外的利息。不用說，你甚至可能累積了太多的利息，以至於利息超過了你的總收入，使得全額償還不可能。

### Causes of technical debt

#### Business pressure(業務壓力)

業務情況可能會迫使你在功能完全完成之前推出它們。在這種情況下，程式碼中會出現補丁和不完整部分的修補，以隱藏項目的未完成部分。

#### Lack of understanding of the consequences of technical debt(對技術債務後果的理解不足)

有時候，你的雇主可能不理解技術債務的“利息”，即隨著債務累積而減緩開發進度。這可能會使得專注於重構的團隊時間太過困難，因為管理層看不到它的價值。

#### Failing to combat the strict coherence of components(無法對抗元件的嚴格一致性)

這是當項目類似於單體而不是個別模塊的產物時。在這種情況下，對項目的任何更改都會影響其他部分。團隊開發變得更加困難，因為很難隔離個別成員的工作。

#### Lack of tests

缺乏即時反饋會鼓勵快速但風險較高的解決方案或補救措施。在最糟糕的情況下，這些更改會被實施並直接部署到生產環境中，而沒有進行任何先前的測試。後果可能是災難性的。例如，一個看似無害的熱修補可能會向成千上萬的客戶發送奇怪的測試電子郵件，甚至更糟的是，清空或損壞整個數據庫。

#### Lack of documentation

使新人介入項目變得緩慢，如果關鍵人離開項目，項目的開發甚至可能停滯不前。

#### Lack of interaction between team members

如果知識不在公司內部分佈，人們最終將使用過時的流程和項目信息進行工作。當初級開發人員受到其導師的錯誤培訓時，這種情況可能會加劇。

#### Long term simultaneous development in several branches

會導致技術債務的積累，並在合併更改時增加技術債務。在隔離狀態下進行的更改越多，總技術債務就越大。

#### Delayed refactoring

項目的要求不斷變化，到某個時候，代碼的某些部分已經過時，變得繁瑣，必須重新設計以滿足新的要求。
另一方面，項目的程序員每天都在編寫與過時部分相匹配的新代碼。因此，重構被延遲的時間越長，未來就越依賴於代碼需要重新工作。

#### Lack of compliance monitoring

這發生在每個參與項目的人按照他們的意願撰寫代碼的情況下（即按照他們上次項目的方式）。

#### Incompetence

這是指開發人員根本不知道如何撰寫良好的代碼。
