
$(document).ready(function(){
    //获取搜索引擎列表
    for (let key in engineList) {
        $("select[name='engine']").append("<option value='"+key+"'>"+engineList[key]["name"]+"</option>");
    }
});


//提交快递查询
$("#express-form").submit(function(e) {
    var code = $("input[name='word']").val();

    if (code == "") {
        return false;
    }

    var url = "https://m.kuaidihelp.com/express/queryResult?word=";

    var iWidth = 440; //弹出窗口的宽度; 
    var iHeight = 560; //弹出窗口的高度; 
    //获得窗口的垂直位置 
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    //获得窗口的水平位置 
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    window.open(url + code, "快递信息", 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes,titlebar=no');

    return false;
});


//提交搜索
$("#search-form").submit(function(e) {
    var engine = $("select[name='engine']").val();
    var keyword = encodeURIComponent($("input[name='keyword']").val());
    
    if (keyword == "") {
        return false;
    }
    var url = engineList[engine]["url"] + keyword;
    if (engineList[engine]["isNewTab"] == true){
        window.location.href = url;
        
    }else{
        window.location.href = "/search.html?keyword="+keyword+"&engine="+engine
    }

    return false;

});