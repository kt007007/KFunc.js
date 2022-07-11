# KFunc.js
前端常用的函数集合。

## 以NPM方式安装

```
npm install kfunc --save
```

<p>在模块中调用（以拷贝文字函数举例）</p>

```
import Kfunc from 'kfunc'

let success = Kfunc.copyText('hello')
```

<p>按需引入</p>

```
import copyText from 'kfunc/copyText'

let success = copyText('hello')
```

## 静态文件引入

```
<script src="kfunc.js"></script>

<script>
    let success = Kfunc.copyText('hello')
    console.log(success)
</script>
```