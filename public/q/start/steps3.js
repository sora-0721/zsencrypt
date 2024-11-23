//=================================================
//================= UI functions ==================
//=================================================
//LICENSE: GPL-3.0, https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client

// ===========================================
// ===== Modified by: Qiu (zeoseven.com) =====
// ===========================================

var verifyBoxShow = function () {
    "use strict";
    var boxEl = $(".verifyBox").html("");
    var auths = JSON.parse(JSON.stringify(ACME.StepData.auths));//避免改动原始数据
    var domains = ACME.StepData.config.domains;
    for (var i0 = 0; i0 < domains.length; i0++) {
        var domain = domains[i0], auth = auths[domain]

        var challs = auth.challenges;
        for (var i = 0; i < challs.length; i++) {//排序，dns排前面
            var o = challs[i];
            o.challIdx = i;
            o.name = ACME.ChallName(o);
            o._sort = ACME.ChallSort(o);
        }
        challs.sort(function (a, b) { return a._sort.localeCompare(b._sort) });
        var choiceHtml = "";
        for (var i = 0; i < challs.length; i++) {
            var chall = challs[i];
            choiceHtml += `
<label>
<input type="radio" name="choice_authItem_${i0}"
class="form-check-input choice_authChall choice_authChall_${i0} choice_authChall_${i0}_${i}"
value="${i0}_${i}" challidx="${chall.challIdx}">&nbsp;${chall.name}
</label><br>
`;
        }

        boxEl.append(`
<div class="itemBox my-5" style="border: #ccc 1px solid; border-radius: 10px;">
<div class="pd FlexBox">
            <div style="background-color: #00ff6e25; border: none; padding: 16px; border-radius: 10px 10px 0px 0px;" class="mb-3 fw-bold">域名：${domain}</div>
            <div class="FlexItem px-3">${choiceHtml}</div>
            </div>
            <div class="verifyItemBox_${i0} px-3"></div>
            <div class="verifyItemState_${i0} px-3 pb-3"></div>
            </div>
`);
    };
    LangReview(boxEl);

    $(".choice_authChall").bind("click", function (e) {
        var el = e.target, vals = el.value.split("_"), i0 = +vals[0], i2 = +vals[1];
        var domain = domains[i0], auth = auths[domain], chall = auth.challenges[i2];
        var html = ['<div class="mt-1" style="font-size:14px;color:#aaa">'];
        var nameCss = 'color: #333;';
        if (chall.type == "dns-01") {
            html.push(Lang('前往域名权威 DNS 服务器中添加以下 TXT 记录。在 添加 DNS 记录 后强烈建议等待 30 秒后再点击开始验证。因为如果验证失败，需要重新提交信息。', ' ') + '</div>');
            html.push(`<div class="pd FlexBox my-3">
<div style="${nameCss}">${Lang('主机记录：', 'Sub Domain')}</div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="_acme-challenge.${auth.identifier.value}" />
</div>
</div>
<div class="pd FlexBox mb-3">
<div style="${nameCss}">${Lang('TXT 记录值：', 'TXT Record')}</div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="${chall.authTxtSHA256}" />
</div>
</div>`);
        } else if (chall.type == "http-01") {
            html.push(Lang('在网站根目录中创建 <b>/.well-known/acme-challenge/</b> 目录，目录内创建 <b>' + FormatText(chall.token) + '</b> 文件，文件内保存下面的文件内容，保存好后 <a href="http://' + auth.identifier.value + '/.well-known/acme-challenge/' + FormatText(chall.token) + '" target="_blank">打开验证文件</a> 测试能否能够正常访问。这个文件 URL 必须是 80 端口，并且公网可以访问，否则 ACME 无法访问到此地址将会验证失败。Windows 操作提示： Windows 中用 <b>.well-known.</b> 作为文件夹名称就能创建 <b>.well-known</b> 文件夹； IIS 可能需在此文件夹下的 MIME 类型中给 <b>.</b> 添加 <b>text/plain</b> 。', ' ') + '</div>');
            html.push(`<div class="pd FlexBox my-3">
<div style="${nameCss}">${Lang('文件路径：', 'File URL')}</div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="http://${auth.identifier.value}/.well-known/acme-challenge/${FormatText(chall.token)}" />
</div>
</div>
<div class="pd FlexBox mb-3">
<div style="${nameCss}">${Lang('文件内容：', 'File Content')}</div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="${chall.authTxt}" />
</div>
</div>`);
        } else {
            html.push(Lang('非预定义验证类型，请使用 <b>Key Authorizations (Token+.+指纹)</b> 自行处理，<b>Digest</b> 为 Key Authorizations 的 SHA-256 Base64 值。', 'For non-predefined authentication types, please use <i class="i">Key Authorizations (Token+.+Thumbprint)</i> to handle it yourself. <i class="i">Digest</i> is the SHA-256 Base64 value of Key Authorizations.') + '</div>');
            html.push(`<div class="pd FlexBox my-3">
<div style="${nameCss}">Key Authorizations: </div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="${chall.authTxt}" />
</div>
</div>
<div class="pd FlexBox mb-3">
<div style="${nameCss}">Digest (SHA-256 Base64): </div>
<div class="FlexItem">
<input class="form-control q-form" readonly value="${chall.authTxtSHA256Base64}" />
</div>
</div>`);
        }
        $(".verifyItemBox_" + i0).html(html.join('\n'));
    });
    for (var i0 = 0; i0 < domains.length; i0++) {
        var el = $(".choice_authChall_" + i0 + "_0");
        el[0] && el[0].click(); //默认选中每个域名的第一个
    }
};