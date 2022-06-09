- [優化系列](#優化系列)
  - [寫法優化](#寫法優化)
    - [Local variables](#local-variables)
    - [Reuse DOM with v-show](#reuse-dom-with-v-show)
- [參考資料](#參考資料)


# 優化系列

## 寫法優化
### Local variables
  - [DEMO](https://vue-9-perf-secrets.netlify.app/bench/local-var)
    ![localVariables_9_performance_secrets_revealed](/src/img/frontend/vue/optimal/localVariables_9_performance_secrets_revealed.png)
    > 圖片出處: https://slides.com/akryum/vueconfus-2019#/5/0/3
  - 說明:
    - result()中的this.base的取用方式
      - 效能差異: 每次訪問this.base時會觸發他的getter，當執行次數變多時會一次更新大量的component，導致觸發```computed```重新計算，倒置效能下降
    - 透過local variable使this.base僅訪問一次，其餘都是透過base變數進行取得資料，便不會觸發getter了。
  - 應用場景:
    - 大量loop時的場景可使用


### Reuse DOM with v-show
  - [DEMO](https://vue-9-perf-secrets.netlify.app/bench/hide)
    
    ![dom_reuse_9_performance_secrets_revealed](/src/img/frontend/vue/optimal/dom_reuse_9_performance_secrets_revealed.JPG)
    > 圖片出處: https://slides.com/akryum/vueconfus-2019#/5/0/3

  - 說明:
    - ```v-if``` 與 ```v-show```差異
      - 使用場景:
        - 初始化: ```v-if```
          - 原因: 
            - ```v-if```僅會render一個分支
            - ```v-show``` 會更新兩個
        - 更新頻率高: ```v-show```

      - ```v-if```
        - 在編譯階段會compile成一個條件(三元)運算符
        ```js
        function render() {
            with(this) {
                return _c('div', {
                staticClass: "cell"
                }, [(props.value) ? _c('div', {
                staticClass: "on"
                }, [_c('Heavy', {
                attrs: {
                    "n": 10000
                }
                })], 1) : _c('section', {
                staticClass: "off"
                }, [_c('Heavy', {
                attrs: {
                    "n": 10000
                }
                })], 1)])
            }
        }
        ```
        - 當```prop.value```改變時觸發component更新
          - ```v-if```由於新舊節點的vnode不一致，在核心diff算法中，會移除舊的vnode，並建立新的。
          - 因此就會建立```Heavy```組件重新初始化、render vnode、 patch等過程
          - 因此越多使用到```v-if```或是頻繁更新，自然會造成效能的壓力
      - ```v-show```
        - 在編譯後的render方法
            ```js
            function render() {
                with(this) {
                    return _c('div', {
                    staticClass: "cell"
                    }, [(props.value) ? _c('div', {
                    staticClass: "on"
                    }, [_c('Heavy', {
                    attrs: {
                        "n": 10000
                    }
                    })], 1) : _c('section', {
                    staticClass: "off"
                    }, [_c('Heavy', {
                    attrs: {
                        "n": 10000
                    }
                    })], 1)])
                }
            }
            ```
        - 當```prop.value```改變時觸發component更新
          - ```vnode```新舊一致，因此只需要一直```patchVnode```
            - patchVnode過程:
              - 內部會對執行v-show對應的Hook函數 update,並根據```v-show```指令綁定的值來設置DOM中的```style.display```進行顯示隱藏的控制

# 參考資料
- 性能優化
  - [9 performance secrets revealed](https://github.com/Akryum/vue-9-perf-secrets/)
    - [PPT- 9 performance secrets revealed](https://slides.com/akryum/vueconfus-2019)
    - [DEMO- 9 performance secrets revealed](https://vue-9-perf-secrets.netlify.app/)
  - [揭秘 Vue.js 九个性能优化技巧-黄轶](https://juejin.cn/post/6922641008106668045)