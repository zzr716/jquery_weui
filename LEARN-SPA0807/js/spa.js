// Single Page Application单页应用
// 单页？ 在一页中动态加载内容
// 用户感觉不到浏览器的刷新
// 命名空间
// 立即执行函数 可以用于构建对象和类
// 私有数据
var spa = (function () {
  // 闭合的空间
  // 私有变量
  // var _selfA = 1;
  var initModule = function ($container) {
    // $container.html(`
    //   <h1 style="display:inline-block;margin:25px">hello${_selfA}</h1>
    //   `)
    spa.shell.initModule($container)
  }
  return {
    initModule: initModule
  }
})()
