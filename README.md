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

## 以静态文件方式引入

```
<script src="kfunc.js"></script>

<script>
    let success = Kfunc.copyText('hello')
    console.log(success)
</script>
```

## 函数列表

### copyText(string)
##### 复制文本到剪贴板
#### 接收的参数
* \<string> 传入要复制的字符串
#### 返回
* \<bool> 成功或失败的布尔值