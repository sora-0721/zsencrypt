# ZSEncrypt - 简单快速的申请免费 TLS/SSL 证书

ZSEncrypt 的目的是提供一个简单快速申请有效 TLS/SSL 证书的平台，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。

支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/">Let's Encrypt</a> !

## 立即开始

为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 ZSEncrypt 。

<a href="https://zsencrypt.zeoseven.com/#开始">前往 zsencrypt.zeoseven.com 开始申请！</a>

## 私有化部署

你可以直接前往 <a href="./releases">Release</a> 直接下载稳定的预构建静态文件，当然，除非你想要使用最新版本。

首先将位于 `pages/_app.js` 中的 `<Script src="https://webstatic.zeoseven.com/main.js" defer></Script>` 替换为 CDN 可用或位于你服务器本地的 `bootstrap.bundle.min.js` 即可正常工作，推荐使用 v5.3.3 版本，更改后再将 `pages/_app.js` 中被注释的 `useEffect` 取消注释以使它们工作。

如果需要的话，将 `components/main.css` 中的 CDN 目标全部修改为指向你本地的可用版本，这样以来， ZSEncrypt 就完全脱离 ZeoSeven 和公共 CDN ，成为完全私有的 ZSEncrypt 。

需要： Node.js 18.17 及以上。

```
npm i
```

```
npm run b
```
在这之后，构建文件将出现在 `out/` 文件夹。

当然，如果你并不喜欢等待构建的过程，那么可以直接在启动生产服务器：
```
npm run s
```
这将更快的在 localhost:3000 可用。

你可以编辑 ZSEncrypt （使用 `npm run d` 启动开发服务器），只要那符合 GPLv3 LICENSE。

## 许可证

<a href="./LICENSE">GPLv3</a>

## 文档

使用文档可以在 <a href="https://zsencrypt.zeoseven.com/documents/">zsencrypt.zeoseven.com/documents</a> 上查阅。

## 使用的开源软件 & 致谢

<p><a href="https://nextjs.org/">Next.js</a><span> Version 14.x - MIT</span></p>
<p><a href="https://getbootstrap.com/">Bootstrap</a><span> Version 5.3.3 - MIT</span></p>
<p><a href="https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client">ACME HTML Web Browser Client</a><span> Version 1.0.230820 - GPLv3</span></p>

