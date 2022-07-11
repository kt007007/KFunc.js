# KFunc.js
前端常用的工具函数。

## 开始使用

### 以NPM方式安装

```
npm install kfunc --save
```

<p>在模块中调用（以拷贝文字函数举例）</p>

```
import Kfunc from 'kfunc'

Kfunc.copyText('hello')
```

<p>按需引入</p>

```
import copyText from 'kfunc/copyText'

copyText('hello')
```