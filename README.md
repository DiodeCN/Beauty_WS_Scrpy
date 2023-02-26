# Beauty_WS_Scrpy

更好看且好用的 [NetrisTV/ws-scrcpy](https://github.com/NetrisTV/ws-scrcpy)

## 要求

客户:
* 先进的浏览器

伺服:
* Node.js v10+
* node-gyp ([installation](https://github.com/nodejs/node-gyp#installation))
* PATH直接可用的`adb` 可执行文件

被控:
* Android 5.0+ (API 21+)
* 启用 [adb debugging](https://developer.android.com/studio/command-line/adb.html#Enabling)
* 在某些设备上，您还需要
[启用一个附加选项](https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323)
来使用键盘和鼠标来控制它 
* 特别地，推荐安卓9.0版本的夜神模拟器，在网络中设置桥接并通过' adb connect 127.0.0.1:62001 '以连接

## 构建并开始

确保你已经安装了 [node.js](https://nodejs.org/en/download/),
[node-gyp](https://github.com/nodejs/node-gyp) and
[build tools](https://github.com/nodejs/node-gyp#installation)
```shell
git clone https://github.com/DiodeCN/Beauty_WS_Scrpy.git
cd Beauty_WS_Scrpy

## For stable version find latest tag and switch to it:
# git tag -l
# git checkout vX.Y.Z

npm install
npm start
```
## 功能与特性
* 详见[官方文档](https://github.com/NetrisTV/ws-scrcpy/blob/master/README.md)
* 注意，本分项目在[build.config.override.json](https://github.com/DiodeCN/Beauty_WS_Scrpy/blob/main/build.config.override.json)禁用了某些功能
