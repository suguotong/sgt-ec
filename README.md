# 构建及发布流程
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## config.js文件配置
- 买五金、饶商会、大平台(/config.js)
``` js
module.exports = {
  // apiServer: 'http://mwjwxtest.buywujin.com', // 买五金正式环境接口地址
  apiServer: 'http://mwjapp.buywujin.com', // 买五金支付测试地址
  // apiServer: 'http://mwjapp.irddtest.cn', // 买五金测试接口/买五金灰度接口
  // apiServer: 'http://192.168.2.5:8089', // 买五金开发接口
  // apiServer: 'http://mwjapp.irddtest.com', // 买五金灰度接口
  // apiServer: 'http://192.168.1.253:8086',
  // apiServer: 'http://app.irddtest.cn', // 大平台测试接口
  // imgServer: 'http://mwjapp.irddtest.com:8001/' // 买五金灰度图片服务器地址
  imgServer: 'http://mwj.irddtest.cn:8001/' // 买五金测试图片服务器地址
  // imgServer: 'http://192.168.2.5:8000/' // 买五金正式图片服务器地址
  // imgServer: 'http://buywujin.com/' // 买五金正式图片服务器地址
}
```
- 箱盒汇(/src/config/env.js)
``` js
if (process.env.NODE_ENV === 'development') {
  localUrl = '//hbdapp.irddtest.cn/'
  imgBaseUrl = '//hbd.irddtest.com:8001/'
  ApiUrl = '//hbdapp.irddtest.cn/'
  // ApiUrl = 'http://192.168.1.56:8082/'
} else if (process.env.NODE_ENV === 'production') {
  localUrl = '//heapi.he1618.com/'
  imgBaseUrl = '//www.he1618.com/'
  ApiUrl = '//heapi.he1618.com/'
}
```
## 更改package.json 版本号(/package.json)
### 常规：完全的版本号定义，分三项：：<主版本号>.<次版本号>.<修订版本号>，如 1.0.0
- 主版本号：当功能模块有较大的变动，比如增加多个模块或者整体架构发生变化。此版本号由项目决定是否修改。
- 次版本号：当功能有一定的增加或变化，比如增加了对权限控制、增加自定义视图等功能。此版本号由项目决定是否修改。
- 订版本号：一般是 Bug 修复或是一些小的变动，要经常发布修订版，时间间隔不限，修复一个严重的bug即可发布一个修订版。此版本号由项目经理决定是否修改。
## 确认index.html 是否存在禁止缓存的meta标签，由于部分浏览器会强制缓存页面导致，发布版本后页面访问出现异常(/index.html)
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>买五金</title>
    <meta charset="utf-8">
    <meta http-equiv="Expires" content="0">
    <!--禁止缓存-->
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta http-equiv="Cache" content="no-cache">
    <!--end 禁止缓存-->
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="yes" name="apple-touch-fullscreen">
    <meta name="format-detection" content="telephone=no, email=no"/>
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符"/>

    <!-- 页面关键词 -->
    <meta name="keywords" content=""/>

    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow"/>

    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">

    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- 不让百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp"/>

    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">

    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">

    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->

    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->

    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script type="text/javascript">
      (function (doc, win) {
        var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    </script>
    <!--<link rel="apple-touch-icon" href="favicon.png">
    <link rel="Shortcut Icon" href="favicon.png" type="image/x-icon">-->
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```
## 确认ico图片是否添加
目前发布流程是基于vue的spa单页面应用发布，因此ico图片是不需要考虑的，但后期如若，采用pwa方式实现再处理，前期可以直接将其删除掉或者注释即可
## 打包编译
- npm run build

## 问题汇总及总结
- 公众号确认是否自定义配置菜单，如果是后台配置则交由后台配置，否则前端自己配置
- 在“公众号设置->功能设置”配置相关域名（如： 业务域名、js接口安全域名、网页授权域名、图片水印等）
- 如微信公众号开发中用到微信支付，则需要配置微信支付授权目录
- 如微商城用的微信支付则需要用到微信中h5支付进行开发，同时需要注意的是，微信回调目前不管成功失败，无法将订单状态返回到回调页面，同时支付完成后返回订单列表页部分浏览器页面无刷新等问题。
 目前解决方案是有，在回调页面加定时器，去请求接口，校验当前订单是否支付成功，然后再去进行后续操作，我们也参考了京东，美团等都是基于此方案实现的。
- 微信无法直接调用支付宝，现在的解决方案通过打开浏览器实现的，具体可参考箱盒汇-微信-支付宝支付，在这里不做详细介绍
- 与后端确认上传图片地址及图片服务器地址等是否正确，因为这些会导致项目发布后无法上传或图片无法显示等问题
- 图片验证码错误原因。
  原因一：跨域导致session丢失，目前这个后端仍然没有解决方案，现在是放到同一域下
  原因二：由于后端架构采用分布式，故需要支持session共享
  13、一些链接4g的无法访问，原因可以考虑是否后端人员屏蔽外网访问导致

