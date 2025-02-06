# Certple - 简单快速的申请免费 TLS/SSL 证书

Certple 的目的是提供一个简单快速申请有效 TLS/SSL 证书的客户端，快速为您的站点提供 HTTPS 协议访问，而不是 ACME 自动化。

支持 单域名证书、多域名证书 和 通配符证书，一切来自 <a href="https://letsencrypt.org/">Let's Encrypt</a> !

## 立即开始

为了更快，您无需注册任何账户，只需要提供一些 DNS 记录来验证您对域名的所有权，剩下的一切交给 Certple 。

<a href="https://certple.zeoseven.com/home/#开始">前往 certple.zeoseven.com 开始申请！</a>

## 私有化

需要： Node.js 18.17 及以上。

### 私有化部署

你可以前往 <a href="https://github.com/zeoseven/certple/releases">Releases</a> 直接下载 **Certple_Private-Build.zip** 即可获得已经构建好的**私有化版本**，它是**完全静态的**，你可以开设一个本地服务器来运行它，就像：

```
npm i serve -g
```

```
serve
```

保留了其中的文档，并且核心资源都将在本地获取，当然，除非你想要使用最新版本。

### 私有化构建

将位于 `pages/_app.js` 中的 `<Script src="https://webstatic.zeoseven.com/main.js" defer></Script>` 删除，即可获得完全私有化的 Certple 客户端。

```
npm i
```

```
npm run b
```
在这之后，构建文件将出现在 `out/` 文件夹。

当然，如果你并不喜欢等待部署的过程，那么可以直接在启动生产服务器：
```
npm run s
```
这将更快的在 localhost:3000 可用。

你可以更改 Certple （使用 `npm run d` 启动开发服务器），只要那符合 GPLv3 LICENSE。

## 许可证

<a href="./LICENSE">GPLv3</a>

## 文档

使用文档可以在 <a href="https://certple.zeoseven.com/docs/">certple.zeoseven.com/docs</a> 上查阅。

## 使用的开源软件 & 致谢

使用的所有开源软件可以在 <a href="https://certple.zeoseven.com/more/">certple.zeoseven.com/more</a> 上查阅。

