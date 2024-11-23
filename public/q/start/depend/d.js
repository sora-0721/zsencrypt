//===========================================
//================= Launch ==================
//===========================================
//LICENSE: GPL-3.0, https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client

// ===========================================
// ===== Modified by: Qiu (zeoseven.com) =====
// ===========================================

(function () {
    "use strict";

    var msg = "";
    try {
        window.PageRawHTML = window.PageRawHTML || document.documentElement.outerHTML;
        var SupportCrypto = false;
        eval('SupportCrypto=!!crypto.subtle.sign');
        eval('``;(async function(){class a{}})');
    } catch (e) {
        if (!msg && !SupportCrypto && window.isSecureContext === false) {
          msg = "no-https"
        }
        if (!msg) {
          msg = SupportCrypto ? "browser-old-version" : "no-crypto";
        }
        window.location.href = '/info/errorPage/?msg=' + encodeURIComponent(msg);
        return;
    }
    $(".main").html($(".main").html()); //彻底干掉输入框自动完成
    $("input,textarea,select").attr("autocomplete", "off");

    $(".main-load").hide();
    $(".main").show();
    LangClick(LangCur);

    initMainUI();

})();