# ZSEncrypt - 简单快速的申请免费 TLS/SSL 证书

ZSEncrypt 的目的是提供一个简单快速申请有效 TLS/SSL 证书的平台，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。

支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/">Let's Encrypt</a> !

## 开始

为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 ZSEncrypt 。

<a href="https://zsencrypt.zeoseven.com/#开始">前往 zsencrypt.zeoseven.com 开始申请！</a>

## 准备好一切

1. 您需要有对 域名权威 DNS 服务器 的访问权限 或 文件控制 权限。因为 CA 需要验证您对域名的所有权，这是必须的。

2. 一个 电子邮箱 来接收域名过期邮件。

## 许可证

<a href="./LICENSE">GPLv3</a>

## 文档

使用文档可以在 <a href="https://zsencrypt.zeoseven.com/documents/">zsencrypt.zeoseven.com/documents</a> 上查阅。

## 使用的开源软件 & 致谢

<p><a href="https://nextjs.org/">Next.js</a><span> Version 14.x - MIT</span></p>
<p><a href="https://getbootstrap.com/">Bootstrap</a><span> Version 5.3.3 - MIT</span></p>
<p><a href="https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client">ACME HTML Web Browser Client</a><span> Version 1.0.230820 - GPLv3</span></p>

