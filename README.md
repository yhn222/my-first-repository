# PhiEdit 2573 Online

## 搭建环境

### 安装依赖

```
npm install
```

### 运行开发服务器

```
npm run serve
```

### 编译为生产环境

```
npm run build
```

## 关于作者 [@程序小袁_2573](https://space.bilibili.com/522248560)  

### 我名字里面那个2573其实是这么来的
好几年前的一天，我翻开了一本关于数学思维的书
- 我翻到了某一页，上面有一个思维游戏：
- **把你的出生日期和你的年龄先这样算，再那样算，最后再这样算，会得到一个数，你把这个数字告诉魔术师，魔术师就能知道你的出生日期和年龄。**
- 具体算法我就不说了，但是我按照这个算法算了一遍之后，得到的数字就是22573
- 我那时还小，不懂得这个游戏背后的原理，所以我就去看了答案
- 答案说，**魔术师用你算出来的数字算一下之后，最后两位就是你的年龄，前面的三位就是出生日期**
- 我算了一下，居然还真是！在现在看来，这不过是一个简单的方程问题而已，但我那时候那么小哪懂啊，我就觉得，好神奇啊，这个数字是不是我的幸运数字啊，于是我就拿这个数做了网名
- 考虑到五位数22573念起来不顺口，我还天真地去掉了一位数，变成了2573（正好跟3473的后两位撞名了，但其实我跟3473一点关系没有）
- 所以，我在此声明：本项目使用了
- $$2024+999+(宫廷玉液酒+大锤+直角+开水)\times(-1)^{
    250814\times122624+122624\times192619+260325\times242517+241320\times122425+102518\times251017+122403\times261808
    }$$ 
- 模拟器

## 关于 PhiEdit 2573 Online

### 创作原因
- RPE的bug太多，有时候不知道干什么就崩了，我猜有一些是作者写代码的时候写错了，还有一些是C++指针的原因
- RPE学习成本太高，就那个什么数值下界数值上界扰动根本看不懂，用JavaScript代码编辑（该功能未实现）就更容易学
- RPE缺少很多方便的功能，比如将一条判定线的note一键转移到另一条判定线

### `src/ts` 目录中各个 Typescript 文件的作用

- `render.ts`: 里面有`render`函数，可以将谱面或编辑器UI界面的某一帧显示到canvas上，也是最核心的功能
- `tools.ts`: 里面有很多杂七杂八的工具函数，应该都能看懂啥意思
- `typeDefinitions.ts`: 一些类型，正在考虑把它分到其他文件里
- `typeCheck.ts`: 为了骗过Typescript的编译器做的一个类型检查的小功能
- `easing.ts`: 缓动函数，至于为什么要单独用一个文件，那可就说来话长了……
    - 我2024年暑假时刚开始做这个项目的时候，因为不知道缓动函数的表达式，没法写出来代码，就卡住不知道怎么办了
    - 然后我就想不是有李纯真模拟器吗，他能做出来肯定知道，于是我就开始扒他的代码
    - 我找到了一段比较“可疑”的代码，但由于代码经过加密，无法看清楚具体逻辑，就又卡住了
    - 卡住之后一段时间我突然想到，不是有文心一言吗，用文心一言肯定能解释出来那些变量的含义呀！
    - 于是我就把那段代码给文心一言复制过去了
    - 那段代码里面有一个神秘的`h`函数，但那段代码没有定义那个函数，文心一言说可能是外部定义的，我上外部一看，诶嘿，真是那个缓动函数
    - 然后我就赶紧复制过来了，心中暗自窃喜，终于知道了哈哈哈，至今都忘不了
    - 你要觉得这个文件可以合并到别的文件里，我也不反对
- `classes`: 里面有很多类
    #### 大多数是谱面以及其中的判定线、note、事件、事件层级类
    - `chart.ts`: 谱面
    - `judgeline.ts`: 判定线
    - `note.ts`: 音符
        - `highlight`: 是否有双押提示
        - `hitSeconds`: 这个note在音乐开始的第几秒被实际击打了（还没击打就是`undefined`，现在只有autoplay模式，所以击打后`hitSeconds`恒等于note开始的秒数）
    - `beats.ts`: 就是那个表示拍数的三元组，用带分数表示拍数
    - `eventLayer.ts`: 事件层，包括普通事件层和特殊事件层
    - `event.ts`: 三大类事件，`NumberEvent` `ColorEvent` `TextEvent`（普通五大事件都是`NumberEvent`，特殊五大事件中颜色事件是`ColorEvent`，文字事件是`TextEvent`，其他都是`NumberEvent`）
    - `chartPackage.ts`: 谱面包，包括谱面、音乐、曲绘、以及可有可无的判定线贴图
    - `resourcePackage.ts`: 资源包，包括note的皮肤、音效和打击特效，还有一大堆配置，里面有几个不支持
    #### 一小部分是为了实现某些功能而定义的类
    - `EditableImage.ts`: 可以对图片进行旋转、切割、缩放、染色等操作
    - `taskQueue.ts`: 任务队列，可以按优先级执行任务
        - 这个类的意义是为了在`render.ts`中不让Hold挡住其他note，导致其他note不可见
        - 用这个就能控制canvas上元素的叠放顺序——背景 < 判定线（按zOrder叠放） < Hold < Drag < Tap < Flick < 打击特效
        - 如果有更好的方法可以试着修改
    - `box.ts`: 盒子类，为了方便canvas上的碰撞检测写的
    - `classExtends.ts`: 给JavaScript自带的类加功能，现只有`FileReaderExtends`一个类

### 一些未修复的bug和未实现的功能（按重要程度排序）
- 编辑谱面的功能很不完全，没有设置BPM、编辑等功能
- 导入没问题，但导出的谱面文件没法兼容其他模拟器（不知道为啥）
- 我打算以后给这个项目做成一个制谱器、谱面播放器、Phigros模拟器三合一的项目
- 向后拖进度条会发出炸裂的打击音效
- 假note碰到判定线不会立即消失，而会穿过去，像miss了一样
- 不支持判定线的bpmfactor、alphaControl、posControl、sizeControl、skewControl、yControl，真想不到有啥用
- 不支持资源包的holdRepeat和holdCompact

### 关于 `src/pages` 的使用方法
- src/pages下面的每个目录是一个页面，`MainPage.vue`是要放到vue-router里面的主组件，其他文件是子组件
- index: 主页面，与RPE页面相似
- about: 关于页面，只有一个链接，通向这个页面
- document: 文档页面，为了解释清楚RPE谱面中的属性，我之前也一直不知道那些属性是啥意思，为了让你们快速知道写的这个页面，如有不清楚欢迎指出