# ZSEncrypt - 简单快速的申请免费 TLS/SSL 证书

ZSEncrypt 的目的是提供一个简单快速申请有效 TLS/SSL 证书的平台，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。

支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> !

## 开始

为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 ZSEncrypt 。

<form action="https://zsencrypt.zeoseven.com" method="GET">
    <input type="text" name="domain">
    <button type="submit"><em>Go!</em></button>
</form>

## 准备好一切

1. 您需要有对 域名权威 DNS 服务器 的访问权限。

    1A. 如果您没有条件 1 ，则需要拥有域名的文件控制权限。

2. 您需要有一个 电子邮箱 来接收域名过期邮件。

3. 三分钟时间。

    3A. 如果在续期阶段使用极速续期，则只需要 30 秒时间。

## 许可证

<a href="./LICENSE">GPLv3</a>

## 文档

使用文档将可以在 <a href="https://zsencrypt.zeoseven.com/documents/">zsencrypt.zeoseven.com/documents</a> 上查阅。

## 使用的开源软件 & 致谢

<p><a href="https://nextjs.org/">Next.js</a><span> Version 14.2.16 - MIT</span></p>
<p><a href="https://getbootstrap.com/">Bootstrap</a><span> Version 5.3.3 - MIT</span></p>
<p><a href="https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client">ACME HTML Web Browser Client</a><span> Version 1.0.230820 - GPLv3</span></p>
<p><a href="https://github.com/digitalbazaar/forge">Forge</a><span> Version 1.3.1 - BSD</span></p>

