// 项目的js组织方式之一 命名空间组织方式
// 可拔插式的模块化机制
spa.shell = (function () {
  var configMap = {
    main_html: `
    <div class="spa-shell-head">
        <div class="spa-shell-head-logo"></div>
        <div class="spa-shell-head-acct"></div>
        <div class="spa-shell-head-search"></div>
    </div>
    <div class="spa-shell-main">
        <div class="spa-shell-main-nav"></div>
        <div class="spa-shell-main-content"></div>
    </div>
    <div class="spa-shell-foot"></div>
    <div class="spa-shell-chat"></div>
    <div class="spa-shell-modal"></div>
    `,
    chat_retracted_title: 'Click to extend',
    chat_extended_title: 'Click to retract',
    chat_extend_height: 400,
    chat_retract_height: 15
  }
  var stateMap = {
    $container: null,
    // is_chat_restracted: true
  }
  var jqueryMap = {};
  // private method私有方法
  function toggleChat () {
    // 在没有css3之前 动画用animate()
    // jqueryMap.$chat.animate({
    //   height: 500,
    // }, 2000, function () {
    //   console.log('运动完了');
    // })
    // 获取元素的高度
    // .height() 一定可以得到元素高度
    var px_chat_ht =jqueryMap.$chat.height();
    var is_open = px_chat_ht === configMap.chat_extended_height;
    var is_close = px_chat_ht === configMap.chat_retract_height;
    // if (stateMap.is_chat_restracted == true) {
    //   jqueryMap.$chat.animate({
    //     height: configMap.chat_extend_height
    //   }, 200, function () {
    //     jqueryMap.$chat.attr('title', configMap.chat_extended_title);
    //     stateMap.is_chat_restracted = false
    //   })
    // }
    // else if (stateMap.is_chat_restracted == false) {
    //   jqueryMap.$chat.animate({
    //     height: configMap.chat_retract_height
    //   }, 200, function () {
    //     jqueryMap.$chat.attr('title', configMap.chat_retracted_title);
    //     stateMap.is_chat_restracted = true
    //   })
    // }
    jqueryMap.$chat.animate(
    {
        height: stateMap.is_chat_restracted
            ?configMap.chat_extend_height
            :configMap.chat_retract_height
    },
    200,
    function() {
        jqueryMap.$chat.attr(
            'title', configMap.chat_extended_title
        );
        stateMap.is_chat_restracted =
         !stateMap.is_chat_restracted
    }
    )
    console.log(px_chat_ht)
  }
  function setJqueryMap () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container: $container,
      $chat: $container.find('.spa-shell-chat')
    }
  }
  function onClickChat () {
    toggleChat();
    return false;
  }
  function initModule ($container) {
    // $container.html(`
    //   <h1 style="display:inline-block;margin:25px">hello</h1>
    //   `)
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
    // console.log(jqueryMap);
    // setTimeout(function () {
    //   toggleChat(true);
    // }, 3000);
    jqueryMap.$chat.attr('title', configMap.chat_retracted_title)
    // .html('点击展开聊天窗口')
    .click(onClickChat)
  }
  return {
    initModule: initModule
  }
})();
