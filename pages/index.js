import Head from "next/head";
import { Page } from "@components/main";

export default () => {
    return (<>
        <Head>
            <meta name="keywords" content="ZSEncrypt,SSL,证书,免费证书,单域名证书,多域名证书,通配符证书,SSL证书申请,免费SSL证书,TLS证书,https证书,DV证书" />
        </Head>
        <Page>
            <span id="tagid">home</span>
            <h1 className="display-5 mb-5 fw-bold">ZSEncrypt</h1>
            <div className="mb-3">
                <p className="mb-3">ZSEncrypt 的目的是提供一个简单快速申请有效 TLS/SSL 证书的平台，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。</p>
                <p>支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> !</p>
            </div>
            <div className="mb-5">
                <p className="fw-bold">如果您感到困惑，还可以观看 ZSEncrypt 申请证书的全过程(2分钟)视频。</p>
                <a href="https://www.bilibili.com/video/BV1KRBuYrEjo/" rel="noopener" target="_blank" style={{ position: "relative", display: "inline-block" }}>
                    <img src="/q/homeVideo.webp" style={{ width: "100%", height: "auto", display: "block", filter: "brightness(0.9)" }} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                    </svg>
                </a>
            </div>
            <div className="mb-4">
                <h2 className="fw-light mb-3" id="开始">开始</h2>
                <p>为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 ZSEncrypt 。</p>
            </div>
            <div className="mb-5">
                <form action="./apply/" method="get">
                    <div>
                        <p>输入您的域名，不要带 http(s):// 或 www 。</p>
                        <input name="domain" className="form-control q-form" placeholder="example.org" required />
                    </div>
                    <div className="mt-3 mb-2">
                        <input type="radio" name="type" id="q-private1" value="1" className="d-none" defaultChecked />
                        <label htmlFor="q-private1" className="label-radio">通配符(泛域名)证书</label>
                        <input type="radio" name="type" id="q-private0" value="0" className="d-none" />
                        <label htmlFor="q-private0" className="label-radio">单域名证书</label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-q">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg><span className="ms-2">开始！</span>
                        </button>
                    </div>
                </form>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">准备好一切</h2>
                <p className="dl">1. 您需要有对 <qd>域名权威 DNS 服务器</qd> 的访问权限 或 <qd>文件控制</qd> 权限。因为 CA 需要验证您对域名的所有权，这是必须的。</p>
                <p className="dl">2. 一个 <qd>电子邮箱</qd> 来接收域名过期邮件。</p>
            </div>
            <div className="mb-5">
                <h4 className="fw-light mb-3">您可能想了解</h4>
                <a href="./documents/#极速续期：一直继续">极速续期</a>
                <span> | </span>
                <a href="./documents/#域名格式示例">域名输入格式示例</a>
                <span> | </span>
                <a href="./manage/">证书管理</a>
                <span> | </span>
                <a href="https://zeoseven.com/" target="_blank">关于 ZeoSeven</a>
            </div>
            <hr className="my-5 mx-0 p-0" />
            <div className="mb-5">
                <h2 className="fw-light mb-3">免费</h2>
                <p>ZSEncrypt 从不提供商业证书，只提供简单的 Let's Encrypt DV 证书。</p>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">简单而快速</h2>
                <p className="mb-3">只需使用 DNS 方式 或 文件方式 验证域名所有权并提供一个电子邮箱获取域名过期邮件即可。 ACME 账户私钥、证书私钥 等都将自动生成、记忆和处理。</p>
            </div>
            <div className="mb-5">
                <h2 className="fw-light mb-3">安全</h2>
                <p>一切数据通过本地的 localStorage 存储，不会上传到 ZeoSeven 的服务器，可通过 <a href="./settings/">设置</a> 查阅。</p>
            </div>
        </Page>
    </>)
};