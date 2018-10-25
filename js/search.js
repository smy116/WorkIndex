  
  $(document).ready(function(){
    $("input[name='keyword']").val(getUrlParam('keyword'))
    $("input[name='engine']").val(getUrlParam('engine'))
    resetIframe()
  });


  //搜索引擎
  var engineUrl = {
    "baidu":"https://www.baidu.com/s?ie=utf-8&wd=",
    "bing":"https://cn.bing.com/search?form=QBLH&filt=all&q=",
    "qichacha":"https://www.qichacha.com/search?key=",
    "openlaw":"http://openlaw.cn/search/judgement/default?keyword=",
    "cninfo":"http://www.cninfo.com.cn/cninfo-new/fulltextSearch?code=&notautosubmit=&keyWord=",
    "kuaidihelp":"https://m.kuaidihelp.com/express/queryResult?word=",
  };

  //Url参数解析
  function getUrlParam(name){
    var url = window.location.search;
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
  
  //刷新iframe框架
  function resetIframe(){
    var keyword = $("input[name='keyword']").val()
    var engine = $("input[name='engine']").val()

    if (engine == ""){
      engine = "baidu"
    }

    if (keyword == ""){
      return 0
    }

    var searchUrl = engineUrl[engine] + keyword
    $("#iframeDom").attr("src", searchUrl);

  }

  $("a[name='engineSelect']").click(function(){
    $("input[name='engine']").val($(this).attr("engine"))
    $("form").submit()
  });