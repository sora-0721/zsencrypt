(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{7955:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/start",function(){return a(4189)}])},4189:function(e,n,a){"use strict";a.r(n);var s=a(5893),t=a(7294),l=a(9008),i=a.n(l);a(8841),n.default=e=>{let{copy:n,dTitle:a,getQuery:l}=e;return(0,t.useEffect)(()=>{let e=l("domain"),a=l("type")||"1";if(e&&a){let n=e.replace(/^(https?:\/\/)?/,""),s="";if("1"===a){let e=n.split(",")[0];s="*.".concat(e,", ").concat(e)}else s=n;setTimeout(()=>{document.querySelector("#x-q-domain").value=s},100)}window.addEventListener("storage",function(e){"q-acmeAccountKey"===e.key&&(document.querySelector(".in_accountKey").value=e.newValue)});let s=localStorage.getItem("q-acmeAccountKey"),t=document.querySelector(".in_accountKey");if(s||""!==s)document.querySelector('input[name="choice_accountKey"][value="manual"]').click(),setTimeout(function(){t.value=s},500);else{document.querySelector('input[name="choice_accountKey"][value="generateECC"]').click();let e=setInterval(()=>{t.value&&(localStorage.setItem("q-acmeAccountKey",t.value),clearInterval(e))},100)}let i=document.getElementById("q-privateKey-userInput");setTimeout(()=>{document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click()},1e3),document.getElementById("q-privateKey-auto").addEventListener("change",function(){document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click(),i.style.display="none"}),document.getElementById("q-privateKey-ecc").addEventListener("change",function(){document.querySelector('input[name="choice_privateKey"][value="generateECC"]').click(),i.style.display="none"}),document.getElementById("q-privateKey-rsa").addEventListener("change",function(){document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click(),i.style.display="none"}),document.getElementById("q-privateKey-user").addEventListener("change",function(){document.querySelector('input[name="choice_privateKey"][value="manual"]').click(),i.style.display="",i.addEventListener("blur",function(){setTimeout(()=>{document.querySelector(".in_privateKey").value=i.value},50)})});let c=!1;document.querySelectorAll("input").forEach(function(e){e.addEventListener("input",function(){c=!0})}),window.addEventListener("beforeunload",function(e){c&&((e||window.event).returnValue="你所做的更改可能未保存。")});let o=document.querySelectorAll("#x-q-domain, #x-q-email");o.forEach(e=>{e.value=localStorage.getItem(e.id)||""}),setInterval(function(){o.forEach(e=>{localStorage.setItem(e.id,e.value)})},2e3),o.forEach(e=>{e.addEventListener("input",()=>{localStorage.setItem(e.id,e.value)})});let r=document.querySelector(".txt_downloadKey"),d=document.querySelector(".txt_downloadCert");document.getElementById("x-q-copy-textpem").addEventListener("click",function(){n(d.value)}),document.getElementById("x-q-copy-textkey").addEventListener("click",function(){n(r.value)})},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:"申请证书 | ".concat(a)})}),(0,s.jsx)("span",{id:"tagid",children:"start"}),(0,s.jsx)("h1",{className:"display-5 mb-2",children:"申请证书"}),(0,s.jsxs)("p",{className:"mb-5 fs-14",children:["需要帮助吗？ ZeoSeven 提供了 ",(0,s.jsx)("a",{href:"../documents/",target:"_blank",children:"文档"})," 。"]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:'\n<script>\n    const Version = "1.0.230820";\n    console.log("LICENSE: GPL-3.0, https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client/blob/main/LICENSE");\n</script>\n\n<div id="q-steps1">\n    <div class="d-none">\n        <div>\n            <label><input type="radio" name="choice_acmeURL" value="https://acme-v02.api.letsencrypt.org/directory"\n                    desckey="descLetsEncrypt">Let\'s Encrypt</label>\n        </div>\n        <div class="input-group">\n            <input class="in_acmeURL inputLang form-control q-form" placeholder-cn="请填写证书颁发机构 ACME 服务 URL"\n                style="border: #9914ff 1px solid;">\n            <button class="mainBtn mainBtnMin btn-q" onclick="acmeReadDirClick()"><span\n                    class="langCN">重新检测</span></button>\n        </div>\n    </div>\n    <p class="spinner-border text-dark spinner-border-sm mb-4" role="status"></p>\n    <div class="acmeReadDirState"></div>\n    <script src="/q/start/steps1.js"></script>\n</div>\n\n\n\n<div id="q-steps2" style="display: none;">\n    <div class="step2Hide step1Show">\n        <div><span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span><span>等待中...</span>\n        </div>\n    </div>\n    <div class="step1Hide step2Show">\n\n<div class="mb-4">\n    <label for="x-q-domain">域名</label>\n    <textarea id="x-q-domain" class="in_domains inputLang form-control q-form" rows="1"\n        placeholder-cn="example.org, *.example.org"></textarea>\n    <p class="fs-12">多域名证书或其它域名输入问题可参阅 <a href="../documents/#1-1" target="_blank">文档 - 域名</a> 。</p>\n</div>\n\n\n        <div class="form-check d-none">\n            <input class="form-check-input choice_domains_store" type="checkbox" id="q-steps2-checkbox1">\n            <label class="form-check-label" for="q-steps2-checkbox1">\n                在此浏览器记住输入的域名\n            </label>\n        </div>\n\n\n<div class="d-none">\n                        <label>\n                            <input type="radio" name="choice_accountKey" value="generateRSA">\n                            <span>立即创建账户 RSA 私钥</span>\n                        </label>\n                        <label>\n                            <input type="radio" name="choice_accountKey" value="generateECC">\n                            <span>立即创建账户 ECC 私钥</span>\n                        </label>\n                        <label>\n                            <input type="radio" name="choice_accountKey" value="manual">\n                            <span class="ms-2">输入账户私钥</span>\n                        </label>\n                <div class="accountKeyBox mb-2">\n                    <textarea class="in_accountKey inputLang"\n                        placeholder-cn="..."></textarea>\n                </div>\n                <div class="accountKeyState fs-12 d-none"></div>\n\n                                <label>\n                            <input type="radio" name="choice_privateKey" value="generateRSA">\n                            <span class="ms-2">创建 RSA 证书私钥</span>\n                        </label>\n                        <label>\n                            <input type="radio" name="choice_privateKey" value="generateECC">\n                            <span class="ms-2">创建 ECC 证书私钥</span>\n                        </label>\n                        <label>\n                            <input type="radio" name="choice_privateKey" value="manual">\n                            <span class="ms-2">输入证书私钥</span>\n                        </label>\n                <div class="privateKeyBox mb-2">\n                    <textarea class="in_privateKey inputLang"placeholder-cn="..."></textarea>\n                </div>\n                <div class="privateKeyState fs-12 d-none"></div>\n</div>\n\n\n\n\n\n        <div class="mb-4">\n            <label for="x-q-email">电子邮箱地址</label>\n            <div class="FlexBox">\n                <div class="FlexItem">\n                    <input class="in_email inputLang form-control q-form" id="x-q-email"\n                        placeholder-cn="name@example.org">\n                    <div class="form-check d-none">\n                        <input class="form-check-input choice_email_store" type="checkbox" id="q-steps2-checkbox4">\n                        <label class="form-check-label" for="q-steps2-checkbox4">记住邮箱地址</label>\n                    </div>\n                </div>\n                <p class="fs-12">这用于 Let\'s Encrypt 为你发送证书即将过期的邮件。</p>\n            </div>\n        </div>\n\n\n<p class="no-a">\n  <a data-bs-toggle="collapse" href="#g" role="button" aria-expanded="false" aria-controls="g">\n    高级选项\n  </a>\n</p>\n<div class="collapse" id="g">\n<div class="mt-3">\n\n\n    <p>证书类型(私钥)</p>\n\n    <input type="radio" name="q-privateKey" id="q-privateKey-auto" value="auto" class="d-none" checked>\n    <label for="q-privateKey-auto" class="label-radio">自动</label>\n\n    <input type="radio" name="q-privateKey" id="q-privateKey-ecc" value="ecc" class="d-none">\n    <label for="q-privateKey-ecc" class="label-radio">ECC<span class="fs-12"> (效率推荐)</span></label>\n\n    <input type="radio" name="q-privateKey" id="q-privateKey-rsa" value="rsa" class="d-none">\n    <label for="q-privateKey-rsa" class="label-radio">RSA<span class="fs-12"> (兼容性推荐)</span></label>\n\n    <input type="radio" name="q-privateKey" id="q-privateKey-user" value="rsa" class="d-none">\n    <label for="q-privateKey-user" class="label-radio">自定义</label>\n    <div class="mt-2 mb-3">\n        <textarea style="display: none;" id="q-privateKey-userInput" class="form-control q-form fs-14" rows="5" placeholder="输入证书私钥 ..."></textarea>\n    </div>\n\n\n    <p>ACME 账户私钥</p>\n\n    <input type="radio" id="q-accountKey-auto" class="d-none" checked>\n    <label for="q-accountKey-auto" class="label-radio">自动</label>\n\n    <a href="../settings/" target="_blank" class="label-radio">\n        <span>前往设置 </span>\n        <span class="fs-12">\n            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">\n                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>\n                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>\n            </svg>\n        </span>\n    </a>\n\n</div>\n</div>\n\n\n\n        <div class="itemBox eabShow d-none">\n            <div class="pd Bold"><span class="langCN">EAB 凭据：</span><span class="langEN"></span></div>\n            <div class="pd" style="font-size:13px;color:#aaa"><span class="langCN">当前 ACME 服务要求提供外部账号绑定凭据 (External\n                    Account Binding)，比如 ZeroSSL ：你可以在 ZeroSSL 的管理控制台的 Developer 中获得此凭据，所以你需要先注册一个 ZeroSSL\n                    的账号。</span><span class="langEN"></span></div>\n            <div class="FlexBox" style="line-height:30px">\n                <div><i class="must">*</i>EAB KID:</div>\n                <div class="FlexItem" style="padding:0 50px 0 6px"><input class="in_eab_kid inputLang"\n                        style="width:100%" placeholder-cn="请填写EAB KID" placeholder-en="Please fill in EAB KID"></div>\n                <div style="padding:0 6px 0 0"><i class="must">*</i>HMAC KEY:</div>\n                <div class="FlexItem"><input class="in_eab_key inputLang" style="width:100%"\n                        placeholder-cn="请填写EAB HMAC KEY" placeholder-en="Please fill in EAB HMAC KEY"></div>\n            </div>\n        </div>\n        <div class="pd termsAgreeBox d-none"><label><input type="checkbox" class="choice_termsAgree" checked><span\n                    class="termsAgreeTips"></span></label></div>\n\n\n\n        <div class="Center text-end mt-5">\n            <button class="mainBtn btn btn-q step1-main-btn" onclick="configStepClick()">\n                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">\n                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>\n                </svg><span class="ms-2">继续 <em>Go!</em></span>\n            </button>\n            <div class="fs-12">\n                <span>点击继续后代表你同意 </span><a href="https://letsencrypt.org/documents/LE-SA-v1.4-April-3-2024.pdf"\n                    target="_blank" rel="nofollow noreferrer noopener">Let\'s Encrypt 使用条款</a> 。\n                <p>来自 <a href="https://letsencrypt.org/" target="_blank">Let\'s Encrypt</a> 的 90 天 TLS 证书。</p>\n            </div>\n        </div>\n\n\n\n        <div class="configStepState fw-bold mt-2 fs-14"></div>\n\n    </div>\n</div>\n\n\n\n<div id="q-steps3" style="display: none;">\n    <h2 class="fw-light mb-2">最后一步，验证域名所有权</h4>\n    <div class="step3Hide step2Show step1Show">\n        <div class="itemBox mt-2" style="color:#999">\n            <span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span>\n            <span class="langCN">载入 ...</span>\n        </div>\n    </div>\n    <div class="step1Hide step2Hide step3Show">\n        <div class="verifyBox"></div>\n        <script src="/q/start/steps3.js"></script>\n        <div class="itemBox">\n            <div class="Center text-center">\n                <span class="mainBtn verifyStepBtn btn btn-q fw-bold me-3" onclick="verifyStepClick()">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">\n                        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />\n                    </svg><span class="ms-2 langCN">开始验证！</span>\n                </span>\n                <span class="mainBtn verifyRunStopBtn btn btn-red fw-bold me-3" onclick="verifyRunStopClick()">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">\n                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>\n                    </svg><span class="ms-2 langCN">取消 ...</span>\n                </span>\n                <button class="mainBtn btn btn-red fw-bold me-3" onclick="configStepClick()">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">\n                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>\n                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>\n                    </svg><span class="ms-2">重试 ...</span>\n                </button>\n                <div class="alert alert-warning mt-3 fs-13" role="alert">\n                    <p>开始验证前请确保所有 DNS 记录或文件都已准备就绪，建议准备就绪后等待 30 秒后再点击。</p>\n                    <p>重试将刷新验证所需信息，需要重新设置 DNS 记录或文件。</p>\n                </div>\n            </div>\n            <div class="verifyStepState fw-bold mt-2"></div>\n        </div>\n    </div>\n</div>\n\n\n<div id="q-steps4" style="display: none;">\n    <div class="step4Hide step3Show step2Show step1Show">\n        <div class="itemBox" style="color:#999">\n            <span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span>\n            <span class="langCN">继续 ...</span>\n        </div>\n    </div>\n    <div class="step1Hide step2Hide step3Hide step4Show">\n\n\n\n<div class="row">\n    <div class="col-12 mb-3">\n        <h2 class="fw-light mb-4">结果输出</h2>\n        <p class="mb-3 fs-14">证书的 PEM 和 KEY 已经保存到 <a href="../manage/">证书管理</a>，您可能需要：<a href="../documents/#5">文档 - 安装在服务器 或 CDN</a></p>\n    </div>\n    <div class="col-6 mb-4">\n        <p class="fw-bold m-0">PEM</p>\n        <textarea class="txt_downloadCert form-control q-form mb-2 fs-14" rows="5" readonly></textarea>\n        <a href="javascript:;" class="mainBtn" onclick="downloadBtnClick(\'Cert\')">下载 .pem</a>\n        <span class="mx-2">|</span>\n        <a href="javascript:;" id="x-q-copy-textpem">复制 PEM</a>\n    </div>\n    <div class="col-6 mb-4">\n        <p class="fw-bold m-0">KEY</p>\n        <textarea class="txt_downloadKey form-control q-form mb-2 fs-14" rows="5" readonly></textarea>\n        <a href="javascript:;" class="mainBtn" onclick="downloadBtnClick(\'Key\')">下载 .key</a>\n        <span class="mx-2">|</span>\n        <a href="javascript:;" id="x-q-copy-textkey">复制 KEY</a>\n    </div>\n    <div class="col-12 mt-5">\n        <p class="text-center"><button onclick="window.location.reload();" class="btn-q fw-bold">\n                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">\n                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />\n                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />\n                </svg><span class="ms-2">再申请一张！</span>\n            </button></p>\n    </div>\n</div>\n\n\n\n        <div class="itemBox d-none">\n            <div class="pd Bold"><i class="must">*</i><span class="langCN">保存记录 LOG 文件：</span></div>\n            <div class="pd" style="font-size:13px;color:#aaa"><span class="langCN">建议下载保存此文件，本记录文件包含了所有数据，包括：证书 PEM\n                    文本、证书私钥PEM文本、账户私钥 PEM 文本、所有配置参数。下次你需要续签新证书时，可以将本记录文件直接拖拽进本页面，会自动填写所有参数。</span></div>\n            <div class="FlexBox">\n                <div class="FlexItem"><textarea class="txt_downloadLog" style="width:100%;height:80px"\n                        readonly></textarea></div>\n                <div style="padding-left:10px;line-height:30px;font-size:13px;color:#aaa">\n                    <div class="mainBtn" onclick="downloadBtnClick(\'Log\')"><span class="langCN">下载保存</span><span\n                            class="langEN"></span></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n    '}}),(0,s.jsx)("script",{src:"/q/start/api.js"}),(0,s.jsx)("script",{src:"/q/start/depend.js"})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7955)}),_N_E=e.O()}]);