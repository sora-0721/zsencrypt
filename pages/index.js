import Head from "next/head";

export default () => {
    return (<>
        <Head>
            <meta name="description" content="ZSEncrypt 是一个简单快速免费申请有效 TLS/SSL 证书的平台，为了更快，无需注册任何账户，支持 单域名证书、多域名证书 和 通配符证书，一切来自 Let's Encrypt !" />
            <meta name="keywords" content="ZSEncrypt,SSL,证书,免费证书,单域名证书,多域名证书,通配符证书,SSL证书申请,免费SSL证书,TLS证书,https证书,DV证书" />
        </Head>
        <span id="tagid">home</span>
        <h1 className="display-5 mb-5">ZSEncrypt</h1>
        <div className="mb-5">
            <p className="mb-3">ZSEncrypt 的目的是提供一个简单快速申请有效 TLS/SSL 证书的平台，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。</p>
            <p>支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> !</p>
        </div>
        <div className="mb-4">
            <h2 className="fw-light mb-3">开始</h2>
            <p>为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 ZSEncrypt 。</p>
        </div>
        <div className="mb-5">
            <p>输入您的裸域名，不要带 http(s):// 或 www 。</p>
            <form action="./start/" method="get">
                <div>
                    <input name="domain" className="form-control form-control-sm q-form" placeholder="example.org" required />
                </div>
                <div className="mt-3 mb-2">
                    <input type="radio" name="type" id="q-private1" value="1" className="d-none" defaultChecked />
                    <label htmlFor="q-private1" className="label-radio">通配符证书</label>
                    <input type="radio" name="type" id="q-private0" value="0" className="d-none" />
                    <label htmlFor="q-private0" className="label-radio">单域名证书</label>
                </div>
                <div>
                    <button type="submit" className="btn btn-lg btn-q">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg><span className="ms-2">开始！</span>
                    </button>
                </div>
            </form>
        </div>
        <div className="mb-5">
            <h2 className="fw-light mb-3">准备好一切</h2>
            <p>1. 您需要有对 <qd>域名权威 DNS 服务器</qd> 的访问权限。</p>
            <p className="ms-4">1A. 如果您没有条件 1 ，则需要拥有域名的文件控制权限。</p>
            <p>2. 您需要有一个 <qd>电子邮箱</qd> 来接收域名过期邮件。</p>
            <p>3. 三分钟时间。</p>
            <p className="ms-4">3A. 如果在续期阶段使用<a href="./documents/#2">极速续期</a>，则只需要 30 秒时间。</p>
        </div>
        <hr className="my-5 mx-0 p-0" />
        <div className="mb-5">
            <h2 className="fw-light mb-3">免费</h2>
            <p>ZSEncrypt 从不提供商业证书，只提供简单的 Let's Encrypt DV 证书。</p>
        </div>
        <div className="mb-5">
            <h2 className="fw-light mb-3">快速</h2>
            <p className="mb-3">只需使用 DNS 方式 或 文件方式 验证域名所有权并提供一个电子邮箱获取域名过期邮件即可。 ACME 账户私钥、证书私钥 等都将自动生成、记忆和处理。</p>
            <p>内网等环境可能不必使用可信的 TLS/SSL 证书来加密， ZSEncrypt 也提供 <a href="./self-signed/">自签名证书</a> ，只需要填写域名和有效期即可颁发！</p>
        </div>
        <div className="mb-5">
            <h2 className="fw-light mb-3">易用</h2>
            <p>ZSEncrypt 应该以极致的易用和快速申请而闻名， ZSEncrypt 的目的也正是如此。</p>
        </div>
        <div className="mb-5">
            <h2 className="fw-light mb-3">安全</h2>
            <p>一切数据通过本地的 localStorage 存储，不会上传到 ZeoSeven 的服务器，可通过 <a href="./settings/">设置</a> 查阅。</p>
        </div>
    </>)
};