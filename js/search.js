  $(document).ready(function () {
      //获取搜索引擎列表
      for (let key in engineList) {
          $("#engineList").append('<li class="nav-item active"><a engine="' + key + '" name="engineSelect" class="nav-link" href="#">' + engineList[key]["name"] + '</a></li>');
      }

      $("input[name='keyword']").val(getUrlParam('keyword'));
      $("input[name='engine']").val(getUrlParam('engine'));
      resetIframe();
  });

  //Url参数解析
  function getUrlParam(name) {
      var url = window.location.search;
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var result = url.substr(1).match(reg);
      return result ? decodeURIComponent(result[2]) : null;
  }

  //刷新iframe框架
  function resetIframe() {
      var keyword = encodeURIComponent($("input[name='keyword']").val());
      var engine = $("input[name='engine']").val();

      if (engine == "") {
          engine = "baidu";
      }

      if (keyword == "") {
          return false;
      }

      var searchUrl = engineList[engine]["url"] + keyword;

      if (engineList[engine]["isNewTab"] == true) {
          window.open(searchUrl, "_blank");
      } else {
          $("#iframeDom").attr("src", searchUrl);
      }

      return false;


  }
  $("#engineList ").on("click", "a[name='engineSelect']", function () {
      $("input[name='engine']").val($(this).attr("engine"));
      $("#search-form").submit();
  });


  $("#search-form").submit(function (e) {
      var engine = $("input[name='engine']").val();
      var keyword = encodeURIComponent($("input[name='keyword']").val());

      if (keyword == "") {
          return false;
      }

      window.location.href = "/search.html?keyword=" + keyword + "&engine=" + engine

      return false;

  });