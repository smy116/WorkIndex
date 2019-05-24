//在新的窗口不带referer打开连接，适用于主流浏览器，Chrome、Firefox、IE等

//判断是否是IE
function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}

//ie不带referer打开url，url要打开的链接，blankurl指向一个空页面
function ieNorefererOpen(url, blankurl) {
    if (blankurl === undefined) {
        //blankurl = null;
        blankurl = "js/wyq/noreferer/Blank.html";
    }

    var win = window.open(blankurl, '_blank');
    var doc = win.document;
    doc.clear();
    doc.write('<html><head><meta http-equiv="Refresh" content="0; URL=' + url + '"/></head><body></body></html>');
    doc.close();
}

//在新的窗口不带referer打开链接，a超链接对象，full_link要打开的链接
function openNewWindowNoreferrer(a, full_link) {
    if (isIE()) {
        a.rel = "noreferrer";
        a.target = "_self";
        ieNorefererOpen(full_link);
    } else {
        a.rel = "noreferrer";
        a.target = "_blank";
        a.href = full_link;
    }
}

//示例： <a href="javascript:void(0)" onclick="openNewWindowNoreferrer(this,'http://xxx/xxx.html')">Test</a>