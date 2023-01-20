# Vue Question

- [Vue Question](#vue-question)
  - [Question](#question)
    - [Q1 : 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#q1--写-react--vue-项目时为什么要在列表组件中写-key其作用是什么)
    - [Q? : 問題](#q--問題)
  - [參考文件](#參考文件)


## Question

### <a id="frontent_vue_q_1" href="">Q1</a> : [写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](#https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1)
- Key的作用:
    - Key是給每一個vnode的唯一值(id),可以依靠key,準確且快速的拿到oldVnode中對應的vnode節點
    - 準確 : 根據sameNode函數針對a.key === b.key 比對可避免複用的情況
    - 快速: 利用key唯一性map對象來獲取對應的node,會traversal的方式更快速(map比traversal快)
- 效能面比較:
    - 不帶key:
        -  採用默認模式
        -  針對節點進行就地復用
    - 帶key:
        - 根據key去進行交叉比對,從而找出相對應的舊節點
    ```js
    vm.dataList = [4, 1, 3, 5, 2] // 数据位置替换

     // 没有key的情况， 节点位置不变，但是节点innerText内容更新了
      [
        '<div>4</div>', // id： A
        '<div>1</div>', // id:  B
        '<div>3</div>', // id:  C
        '<div>5</div>', // id:  D
        '<div>2</div>'  // id:  E
      ]

      // 有key的情况，dom节点位置进行了交换，但是内容没有更新
      // <div v-for="i in dataList" :key='i'>{{ i }}</div>
      [
        '<div>4</div>', // id： D
        '<div>1</div>', // id:  A
        '<div>3</div>', // id:  C
        '<div>5</div>', // id:  E
        '<div>2</div>'  // id:  B
      ]
    ```



### <a id="frontent_vue_q_?" href="">Q?</a> : [問題](網址)



## 參考文件
- [Advanced-Frontend](https://github.com/Advanced-Frontend/Daily-Interview-Question)