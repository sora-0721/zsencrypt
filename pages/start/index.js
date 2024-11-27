import { useEffect } from 'react';
import Head from 'next/head';

export default ({ copy, dTitle, getQuery }) => {
    useEffect(() => {

        // 首页到开始的域名填充
        const domain = getQuery('domain');
        const type = getQuery('type');
        if (domain && type) {
            const domainOut = domain.replace(/^(https?:\/\/)?/, '');
            let domainValue = '';
            if (type === '1') {
                domainValue = `*.${domainOut},${domainOut}`;
            } else {
                domainValue = domainOut;
            }
            setTimeout(() => {
                document.querySelector('#x-q-domain').value = domainValue;
            }, 100);
        };



        // 前往设置后，如果发生改变，立即重新输入账户私钥值
        window.addEventListener('storage', function(event) {
            if (event.key === 'q-acmeAccountKey') {
                document.querySelector('.in_accountKey').value = event.newValue;
            };
        });
        // 自动创建填充和记忆账户私钥
        const storageAccountKey = localStorage.getItem('q-acmeAccountKey');
        const accountKey = document.querySelector('.in_accountKey');
        if (!storageAccountKey && storageAccountKey === '') {
            document.querySelector('input[name="choice_accountKey"][value="generateECC"]').click();
            const trySet = setInterval(() => {
                if (accountKey.value) {
                    localStorage.setItem('q-acmeAccountKey', accountKey.value);
                    clearInterval(trySet);
                };
            }, 100);
        } else {
            document.querySelector('input[name="choice_accountKey"][value="manual"]').click();
            setTimeout(function () {
                accountKey.value = storageAccountKey;
            }, 500);
        };



        // 自动创建和监听证书类型
        const privateKey = document.getElementById('q-privateKey-userInput');
        setTimeout(() => {
            document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click();
        }, 1000);
        document.getElementById('q-privateKey-auto').addEventListener('change', function () {
            document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click();
            privateKey.style.display = 'none';
        });
        document.getElementById('q-privateKey-ecc').addEventListener('change', function () {
            document.querySelector('input[name="choice_privateKey"][value="generateECC"]').click();
            privateKey.style.display = 'none';
        });
        document.getElementById('q-privateKey-rsa').addEventListener('change', function () {
            document.querySelector('input[name="choice_privateKey"][value="generateRSA"]').click();
            privateKey.style.display = 'none';
        });
        document.getElementById('q-privateKey-user').addEventListener('change', function () {
            document.querySelector('input[name="choice_privateKey"][value="manual"]').click();
            privateKey.style.display = '';
            privateKey.addEventListener('blur', function () {
                setTimeout(() => {
                    document.querySelector('.in_privateKey').value = privateKey.value;
                }, 50);
            });
        });





        let userStart = false;
        document.querySelectorAll('input').forEach(function (input) {
            input.addEventListener('input', function () {
                userStart = true;
            });
        });
        window.addEventListener('beforeunload', function (e) {
            if (userStart) {
                (e || window.event).returnValue = '你所做的更改可能未保存。';
            };
        });

        const XqiuInputs = document.querySelectorAll('#x-q-domain, #x-q-email');
        function XqiuSaveInputData() {
            XqiuInputs.forEach(input => {
                localStorage.setItem(input.id, input.value);
            });
        };
        function XqiuFillInputData() {
            XqiuInputs.forEach(input => {
                input.value = localStorage.getItem(input.id) || '';
            });
        };
        XqiuFillInputData();
        setInterval(XqiuSaveInputData, 2000);
        XqiuInputs.forEach(input => {
            input.addEventListener('input', () => {
                localStorage.setItem(input.id, input.value);
            });
        });

        document.getElementById('x-q-copy-textpem').addEventListener('click', function () {
            copy(document.querySelector('.txt_downloadCert').value);
        });
        document.getElementById('x-q-copy-textkey').addEventListener('click', function () {
            copy(document.querySelector('.txt_downloadKey').value);
        });

    }, []);

    const PageInfo = `
<script src="/q/start/load.js"></script>
<div id="q-steps1">
    <div class="d-none">
        <div>
            <label><input type="radio" name="choice_acmeURL" value="https://acme-v02.api.letsencrypt.org/directory"
                    desckey="descLetsEncrypt">Let's Encrypt</label>
        </div>
        <div class="input-group">
            <input class="in_acmeURL inputLang form-control q-form" placeholder-cn="请填写证书颁发机构 ACME 服务 URL"
                style="border: #9914ff 1px solid;">
            <button class="mainBtn mainBtnMin btn-q" onclick="acmeReadDirClick()"><span
                    class="langCN">重新检测</span></button>
        </div>
    </div>
    <p class="spinner-border text-dark spinner-border-sm mb-4" role="status"></p>
    <div class="acmeReadDirState"></div>
    <script src="/q/start/steps1.js"></script>
</div>



<div id="q-steps2" style="display: none;">
    <div class="step2Hide step1Show">
        <div><span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span><span>等待中...</span>
        </div>
    </div>
    <div class="step1Hide step2Show">

<div class="mb-4">
    <label for="x-q-domain">域名</label>
    <textarea id="x-q-domain" class="in_domains inputLang form-control q-form" rows="1"
        placeholder-cn="example.org, *.example.org"></textarea>
</div>


        <div class="form-check d-none">
            <input class="form-check-input choice_domains_store" type="checkbox" id="q-steps2-checkbox1">
            <label class="form-check-label" for="q-steps2-checkbox1">
                在此浏览器记住输入的域名
            </label>
        </div>


<div class="d-none">
                        <label>
                            <input type="radio" name="choice_accountKey" value="generateRSA">
                            <span>立即创建账户 RSA 私钥</span>
                        </label>
                        <label>
                            <input type="radio" name="choice_accountKey" value="generateECC">
                            <span>立即创建账户 ECC 私钥</span>
                        </label>
                        <label>
                            <input type="radio" name="choice_accountKey" value="manual">
                            <span class="ms-2">输入账户私钥</span>
                        </label>
                <div class="accountKeyBox mb-2">
                    <textarea class="in_accountKey inputLang"
                        placeholder-cn="..."></textarea>
                </div>
                <div class="accountKeyState fs-12 d-none"></div>

                                <label>
                            <input type="radio" name="choice_privateKey" value="generateRSA">
                            <span class="ms-2">创建 RSA 证书私钥</span>
                        </label>
                        <label>
                            <input type="radio" name="choice_privateKey" value="generateECC">
                            <span class="ms-2">创建 ECC 证书私钥</span>
                        </label>
                        <label>
                            <input type="radio" name="choice_privateKey" value="manual">
                            <span class="ms-2">输入证书私钥</span>
                        </label>
                <div class="privateKeyBox mb-2">
                    <textarea class="in_privateKey inputLang"placeholder-cn="..."></textarea>
                </div>
                <div class="privateKeyState fs-12 d-none"></div>
</div>





        <div class="mb-4">
            <label for="x-q-email">电子邮箱地址</label>
            <div class="FlexBox">
                <div class="FlexItem">
                    <input class="in_email inputLang form-control q-form" id="x-q-email"
                        placeholder-cn="name@example.org">
                    <div class="form-check d-none">
                        <input class="form-check-input choice_email_store" type="checkbox" id="q-steps2-checkbox4">
                        <label class="form-check-label" for="q-steps2-checkbox4">记住邮箱地址</label>
                    </div>
                </div>
                <p class="fs-12">这用于 Let's Encrypt 为你发送证书即将过期的邮件。</p>
            </div>
        </div>


<p class="no-a">
  <a data-bs-toggle="collapse" href="#g" role="button" aria-expanded="false" aria-controls="g">
    高级选项
  </a>
</p>
<div class="collapse" id="g">
<div class="mt-3">


    <p>证书类型(私钥)</p>

    <input type="radio" name="q-privateKey" id="q-privateKey-auto" value="auto" class="d-none" checked>
    <label for="q-privateKey-auto" class="label-radio">自动</label>

    <input type="radio" name="q-privateKey" id="q-privateKey-ecc" value="ecc" class="d-none">
    <label for="q-privateKey-ecc" class="label-radio">ECC<span class="fs-12"> (效率推荐)</span></label>

    <input type="radio" name="q-privateKey" id="q-privateKey-rsa" value="rsa" class="d-none">
    <label for="q-privateKey-rsa" class="label-radio">RSA<span class="fs-12"> (兼容性推荐)</span></label>

    <input type="radio" name="q-privateKey" id="q-privateKey-user" value="rsa" class="d-none">
    <label for="q-privateKey-user" class="label-radio">自定义</label>
    <div class="mt-2 mb-3">
        <textarea style="display: none;" id="q-privateKey-userInput" class="form-control q-form fs-12" rows="3" placeholder="输入证书私钥 ..."></textarea>
    </div>


    <p>ACME 账户私钥</p>

    <input type="radio" id="q-accountKey-auto" class="d-none" checked>
    <label for="q-accountKey-auto" class="label-radio">自动</label>

    <a href="../settings/" target="_blank" class="label-radio">
        <span>前往设置 </span>
        <span class="fs-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </span>
    </a>

</div>
</div>



        <div class="itemBox eabShow d-none">
            <div class="pd Bold"><span class="langCN">EAB 凭据：</span><span class="langEN">EAB Credentials:</span></div>
            <div class="pd" style="font-size:13px;color:#aaa"><span class="langCN">当前 ACME 服务要求提供外部账号绑定凭据 (External
                    Account Binding)，比如 ZeroSSL ：你可以在 ZeroSSL 的管理控制台的 Developer 中获得此凭据，所以你需要先注册一个 ZeroSSL
                    的账号。</span><span class="langEN">The current ACME service requires external account binding
                    credentials, such as ZeroSSL: You can obtain this credentials in the Developer of the ZeroSSL
                    management console, so you need to register a ZeroSSL account first.</span></div>
            <div class="FlexBox" style="line-height:30px">
                <div><i class="must">*</i>EAB KID:</div>
                <div class="FlexItem" style="padding:0 50px 0 6px"><input class="in_eab_kid inputLang"
                        style="width:100%" placeholder-cn="请填写EAB KID" placeholder-en="Please fill in EAB KID"></div>
                <div style="padding:0 6px 0 0"><i class="must">*</i>HMAC KEY:</div>
                <div class="FlexItem"><input class="in_eab_key inputLang" style="width:100%"
                        placeholder-cn="请填写EAB HMAC KEY" placeholder-en="Please fill in EAB HMAC KEY"></div>
            </div>
        </div>
        <div class="pd termsAgreeBox d-none"><label><input type="checkbox" class="choice_termsAgree" checked><span
                    class="termsAgreeTips"></span></label></div>



        <div class="Center text-end mt-5">
            <button class="mainBtn btn btn-q" onclick="configStepClick()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
                </svg><span class="ms-2">继续 <em>Go!</em></span>
            </button>
            <div class="fs-12">
                <span>点击继续后代表你同意 </span><a href="https://letsencrypt.org/documents/LE-SA-v1.4-April-3-2024.pdf"
                    target="_blank" rel="nofollow noreferrer noopener">Let's Encrypt 使用条款</a> 。
                <p>来自 <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> 的 90 天 TLS 证书。</p>
            </div>
        </div>



        <div class="configStepState fw-bold mt-2 fs-14"></div>

    </div>
</div>



<div id="q-steps3" style="display: none;">
    <h2 class="fw-light mb-2">最后一步，验证域名所有权</h4>
    <div class="step3Hide step2Show step1Show">
        <div class="itemBox mt-2" style="color:#999">
            <span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span>
            <span class="langCN">载入 ...</span>
        </div>
    </div>
    <div class="step1Hide step2Hide step3Show">
        <div class="verifyBox"></div>
        <script src="/q/start/steps3.js"></script>
        <div class="itemBox">
            <div class="Center text-center">
                <span class="mainBtn verifyStepBtn btn btn-q fw-bold me-3" onclick="verifyStepClick()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                    </svg><span class="ms-2 langCN">开始验证！</span>
                </span>
                <span class="mainBtn verifyRunStopBtn btn btn-red fw-bold me-3" onclick="verifyRunStopClick()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg><span class="ms-2 langCN">取消 ...</span>
                </span>
                <button class="mainBtn btn btn-red fw-bold me-3" onclick="configStepClick()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                    </svg><span class="ms-2">重试 ...</span>
                </button>
                <div class="alert alert-warning mt-3 fs-14" role="alert">
                    <p>开始验证前请确保所有 DNS 记录或文件都已准备就绪，建议准备就绪后等待 30 秒后再点击。</p>
                    <p>重试将刷新验证所需信息，需要重新设置 DNS 记录或文件。</p>
                </div>
            </div>
            <div class="verifyStepState fw-bold mt-2"></div>
        </div>
    </div>
</div>


<div id="q-steps4" style="display: none;">
    <div class="step4Hide step3Show step2Show step1Show">
        <div class="itemBox" style="color:#999">
            <span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span>
            <span class="langCN">继续 ...</span>
        </div>
    </div>
    <div class="step1Hide step2Hide step3Hide step4Show">



<div class="row">
    <div class="col-12 mb-3">
        <h2 class="fw-light mb-4">结果输出</h2>
        <p class="mb-3">你需要立即复制或下载， ZeoSeven 的服务器不会保存它，它只会显示这一次。</p>
    </div>
    <div class="col-6 mb-4">
        <p class="fw-bold m-0">PEM</p>
        <textarea class="txt_downloadCert form-control q-form mb-2 fs-14" rows="5" readonly></textarea>
        <a href="javascript:;" class="mainBtn" onclick="downloadBtnClick('Cert')">下载 .pem</a>
        <span class="mx-2">|</span>
        <a href="javascript:;" id="x-q-copy-textpem">复制 PEM</a>
    </div>
    <div class="col-6 mb-4">
        <p class="fw-bold m-0">KEY</p>
        <textarea class="txt_downloadKey form-control q-form mb-2 fs-14" rows="5" readonly></textarea>
        <a href="javascript:;" class="mainBtn" onclick="downloadBtnClick('Key')">下载 .key</a>
        <span class="mx-2">|</span>
        <a href="javascript:;" id="x-q-copy-textkey">复制 KEY</a>
    </div>
    <div class="col-12 mt-5">
        <p class="text-center"><button onclick="window.location.reload();" class="btn-q fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg><span class="ms-2">再申请一张！</span>
            </button></p>
    </div>
</div>



        <div class="itemBox d-none">
            <div class="pd Bold"><i class="must">*</i><span class="langCN">保存记录 LOG 文件：</span></div>
            <div class="pd" style="font-size:13px;color:#aaa"><span class="langCN">建议下载保存此文件，本记录文件包含了所有数据，包括：证书 PEM
                    文本、证书私钥PEM文本、账户私钥 PEM 文本、所有配置参数。下次你需要续签新证书时，可以将本记录文件直接拖拽进本页面，会自动填写所有参数。</span></div>
            <div class="FlexBox">
                <div class="FlexItem"><textarea class="txt_downloadLog" style="width:100%;height:80px"
                        readonly></textarea></div>
                <div style="padding-left:10px;line-height:30px;font-size:13px;color:#aaa">
                    <div class="mainBtn" onclick="downloadBtnClick('Log')"><span class="langCN">下载保存</span><span
                            class="langEN">Download</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
    return (
        <>
            <Head>
                <title>{`申请证书 | ${dTitle}`}</title>
            </Head>
            <span id="tagid">start</span>
            <span id='_zsApi_no#'></span>
            <h1 className='display-5 mb-2'>申请证书</h1>
            <p className='mb-5 fs-14'>需要帮助吗？ ZeoSeven 提供了 <a href='../documents/' target='_blank'>参考文档</a> 。</p>
            <div dangerouslySetInnerHTML={{ __html: PageInfo }} />
            <script src="/q/start/api.js"></script>
            <script src="/q/start/depend/a.js"></script>
            <script src="/q/start/depend/b.js"></script>
            <script src="/q/start/depend/c.js"></script>
            <script src="/q/start/depend/d.js"></script>
        </>
    )
};