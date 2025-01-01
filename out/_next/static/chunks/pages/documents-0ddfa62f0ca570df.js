(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{6710:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents",function(){return n(3711)}])},3711:function(e,s,n){"use strict";n.r(s);var c=n(5893),r=n(9008),l=n.n(r),d=n(8841);s.default=()=>{let e=e=>{let{children:s}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("h2",{id:s,children:[(0,c.jsx)("a",{href:"#".concat(s),children:"#"}),(0,c.jsx)("span",{className:"ms-2",children:s})]})})},s=e=>{let{children:s}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("h4",{id:s,children:[(0,c.jsx)("a",{href:"#".concat(s),children:"#"}),(0,c.jsx)("span",{className:"ms-2",children:s})]})})},n=e=>{let{children:s}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("a",{href:"#".concat(s),children:s})})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l(),{children:(0,c.jsx)("title",{children:"文档 | ".concat(d.c0.title)})}),(0,c.jsxs)(d.T3,{children:[(0,c.jsx)("span",{id:"tagid",children:"doc"}),(0,c.jsxs)("div",{className:"documents",children:[(0,c.jsx)("h1",{className:"display-5 mb-3",children:"文档"}),(0,c.jsxs)("div",{className:"mb-5",children:["ZSEncrypt 中的一切高级方法和限制都基于 ZSEncrypt 的证书颁发机构 Let's Encrypt 的 ",(0,c.jsx)("a",{href:"https://letsencrypt.org/zh-cn/docs/#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener nofollow",children:"高级用户信息"})," 和 ",(0,c.jsx)("a",{href:"https://letsencrypt.org/zh-cn/docs/rate-limits/",target:"_blank",rel:"noopener nofollow",children:"速率限制"})," ，这是不可避免的防止滥用措施。"]}),(0,c.jsx)("h3",{className:"fw-light",children:"目录"}),(0,c.jsxs)("div",{className:"px-4 mulu",children:[(0,c.jsx)(n,{children:"首次申请证书"}),(0,c.jsxs)("div",{className:"ps-4",children:[(0,c.jsx)(n,{children:"域名"}),(0,c.jsx)(n,{children:"域名格式示例"}),(0,c.jsx)(n,{children:"三级域名 (以 .com.cn, .org.cn, .eu.org 等结尾) 的格式示例"}),(0,c.jsx)(n,{children:"高级选项 - 证书类型(私钥)"}),(0,c.jsx)(n,{children:"验证域名所有权"})]}),(0,c.jsx)(n,{children:"主机记录格式"}),(0,c.jsx)("div",{className:"ps-4",children:(0,c.jsx)(n,{children:"原理"})}),(0,c.jsx)(n,{children:"极速续期：一直继续"}),(0,c.jsx)("div",{className:"ps-4",children:(0,c.jsx)(n,{children:"原理"})}),(0,c.jsx)(n,{children:"配置"}),(0,c.jsx)(n,{children:"数据迁移 - 在其它浏览器或设备极速续期"}),(0,c.jsx)(n,{children:"安装在服务器 或 CDN"}),(0,c.jsx)("div",{className:"ps-4",children:(0,c.jsx)(n,{children:"以 1Panel 为例"})})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"首次申请证书"}),(0,c.jsx)("p",{children:"首次申请证书可能相对缓慢，并没有续期时极速颁发的高效率。"}),(0,c.jsxs)("p",{children:["首先，在 ",(0,c.jsx)("a",{href:"../apply/",target:"_blank",children:"申请证书"})," 页面，您可能会看到这样的内容："]}),(0,c.jsx)("img",{src:"/q/documents/01.webp"}),(0,c.jsx)(s,{children:"域名"}),(0,c.jsxs)("p",{children:["多个域名以 ",(0,c.jsx)("qd",{children:"英文逗号(,)"})," 分隔。"]}),(0,c.jsx)("p",{children:(0,c.jsx)("qd",{children:"您输入的域名越多，需要提供的验证凭据越多，因为它们需要逐个验证，所以如果不是特殊需求而使用多域名证书，则更推荐通配符证书，因为通配符证书只需要提供两个凭据。"})}),(0,c.jsxs)("p",{children:["域名填写裸域，比如 ",(0,c.jsx)("qd",{children:"example.org, *.example.org"})," 即可申请覆盖主域 example.org 及子域 blog.example.org、bbs.example.org 等域名的 TLS/SSL 证书。"]}),(0,c.jsx)("p",{children:"申请通配符证书需要向 DNS 添加 2 个相同主机记录但记录值不同的 TXT 记录。"}),(0,c.jsx)("p",{children:"您也可以精确匹配，比如只输入 www.example.org 来申请只覆盖 www 的单域名证书，或者输入 example.org, blog.example.org 来申请只覆盖主域名和 Blog 域名的多域名证书，但多域名证书通常直接使用通配符证书。"}),(0,c.jsx)(s,{children:"域名格式示例"}),(0,c.jsxs)("p",{children:["比如 ZeoSeven 的主站域名是 ",(0,c.jsx)("qd",{children:"zeoseven.com"})," ，而 ZSEncrypt 的域名是",(0,c.jsx)("qd",{children:"zsencrypt.zeoseven.com"})," ，它是 zeoseven.com 的子域名，那么如果我想要只覆盖它们，就可以在域名框中输入："]}),(0,c.jsx)("pre",{children:"zeoseven.com, zsencrypt.zeoseven.com"}),(0,c.jsxs)("p",{children:["那么这时候问题来了， ZeoSeven 还有一个 ",(0,c.jsx)("qd",{children:"fonts.zeoseven.com"})," ，如果想要覆盖它们，可以填写："]}),(0,c.jsx)("pre",{children:"zeoseven.com, zsencrypt.zeoseven.com, fonts.zeoseven.com"}),(0,c.jsx)("p",{children:"这时候问题又来了，通配符证书只需要添加两个 TXT 记录或文件，而这样则需要添加三个，如果子域名特别多呢？不可能一个一个验证，那样实在是过于麻烦，那么可以用 通配符(*) 。"}),(0,c.jsx)("pre",{children:"zeoseven.com, *.zeoseven.com"}),(0,c.jsx)("p",{children:"这样以来，即可覆盖包括 zeoseven.com, www.zeoseven.com, zsencrypt.zeoseven.com, fonts.zeoseven.com ，甚至不使用的 bbs.zeoseven.com, api.zeoseven.com, blog.zeoseven.com 等一切子域名都可使用同一个 PEM 和 KEY 来开启 HTTPS 。"}),(0,c.jsxs)("p",{children:["当然，因为 通配符(*) 匹配任何字符的特性，可以更方便的覆盖所有子域，但如果是 *.zeoseven.com ，则实际上只匹配 .zeoseven.com 前面任何英文字母和连字符，但如果遇到",(0,c.jsx)("qd",{children:"子域名的子域名"})," ，如："]}),(0,c.jsx)("pre",{children:"pan.blog.zeoseven.com"}),(0,c.jsx)("p",{children:"那么它将不会被匹配，因为通配符(*) 只匹配到 zeoseven.com 前面，而不会匹配到 blog.zeoseven.com 前面，所以需要添加："}),(0,c.jsx)("pre",{children:"zeoseven.com, *.zeoseven.com, *.blog.zeoseven.com"}),(0,c.jsxs)("p",{children:["想象力是非常强大的，那么可不可以直接使用 ",(0,c.jsx)("qd",{children:"*.*.zeoseven.com"})," 不就完美解决？"]}),(0,c.jsx)("p",{children:(0,c.jsx)("em",{children:"很遗憾，证书中的 通配符(*) 每 1 段域名或子域名只能使用 1 个。"})}),(0,c.jsx)(s,{children:"三级域名 (以 .com.cn, .org.cn, .eu.org 等结尾) 的格式示例"}),(0,c.jsxs)("p",{children:["实际上，它们和常见的域名申请证书的方式是一样的，包括通配符，比如您的 裸域名(不带 www) 是 ",(0,c.jsx)("qd",{children:"example.org.cn"})," ，那么可以填写："]}),(0,c.jsx)("pre",{children:"example.org.cn"}),(0,c.jsx)("p",{children:"包括 Blog :"}),(0,c.jsx)("pre",{children:"example.org.cn, blog.example.org.cn"}),(0,c.jsx)("p",{children:"包括 通配符(*) :"}),(0,c.jsx)("pre",{children:"example.org.cn, *.example.org.cn"}),(0,c.jsx)("p",{}),(0,c.jsx)(s,{children:"高级选项 - 证书类型(私钥)"}),(0,c.jsxs)("p",{children:["通常选择自动，如果您的服务器是相对较新的版本，支持 ECC 椭圆加密算法，那么应该选择 ECC ，因为它提供更好的安全性和效率。而 RSA 因存在历史较 ECC 更久远，所以 ",(0,c.jsx)("qd",{children:"RSA 的兼容性更强，但效率并不如 ECC"})," 。"]}),(0,c.jsx)(s,{children:"验证域名所有权"}),(0,c.jsx)("p",{children:"以 zsencrypt.zeoseven.com 为例，当在输入信息页面点击 “继续” 按钮后， ZSEncrypt 会输出需要验证的信息详情和选择验证方法。"}),(0,c.jsx)("p",{children:"不论什么， ZSEncrypt 更推荐使用 DNS 记录验证，因为它通常来说相对其它验证方式更容易。"}),(0,c.jsx)("p",{children:"输出的信息看起来像这样："}),(0,c.jsx)("img",{src:"/q/documents/02.webp"}),(0,c.jsxs)("p",{children:["请先阅读 ",(0,c.jsx)(n,{children:"主机记录格式"})," 了解添加规则，",(0,c.jsx)("qd",{children:"否则可能在不够智能的 DNS 控制台中导致隐性错误。"})]}),(0,c.jsx)("p",{children:"前往您的域名权威 DNS 服务器中添加 TXT 记录，输出的所有记录值都需要逐个添加，但通常申请的通配符域名证书只需要添加两个 TXT 主机记录。"}),(0,c.jsxs)("p",{children:[(0,c.jsx)("qd",{children:"建议在添加全部 TXT 记录后，不要急于点击开始验证按钮，等待 30 秒左右再点击，以缓解 DNS 传播的延迟。"}),"否则如果至多一个记录验证失败，则验证不通过，需要重新添加新的记录值。"]}),(0,c.jsx)("p",{children:"如果一切顺利，您应该会看到 PEM 和 KEY 的输出页面："}),(0,c.jsx)("img",{src:"/q/documents/03.webp"}),(0,c.jsx)("p",{children:"您可以下载 .pem 和 .key 文件安装到服务器上，也可以直接复制源字符串。"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"主机记录格式"}),(0,c.jsx)("p",{children:"ZSEncrypt 无法智能的猜到一切裸域名，因为它们可能是多级的，所以需要输出完整主机记录，否则可能导致提供的记录缺失。"}),(0,c.jsx)("p",{children:(0,c.jsx)("b",{children:"固定规则公式："})}),(0,c.jsx)("pre",{children:"需要验证的 TXT 主机记录 - 结尾的您注册的域名 = 最终添加到 DNS 的主机记录"}),(0,c.jsxs)("p",{children:["比如您看到的需要验证主机记录是 ",(0,c.jsx)("b",{children:"_acme-challenge.zeoseven.com"})," ，则去除注册的 zeoseven.com 后应该添加的 TXT 记录为："]}),(0,c.jsx)("pre",{children:"_acme-challenge"}),(0,c.jsxs)("p",{children:["如果是子域，如 www.zeoseven.com ，那么您看到的需要验证主机记录会是 ",(0,c.jsx)("b",{children:"_acme-challenge.www.zeoseven.com"})," ，去除注册的 zeoseven.com 后应该添加的 TXT 记录为："]}),(0,c.jsx)("pre",{children:"_acme-challenge.www"}),(0,c.jsxs)("p",{children:["这不是固定的，还存在多级域，如错误率最高的 ",(0,c.jsx)("b",{children:"www.example.org.cn"})," ，它需要验证的主机记录是 ",(0,c.jsx)("b",{children:"_acme-challenge.www.example.org.cn"})," ，很明显，如果添加为 ",(0,c.jsx)("b",{children:"_acme-challenge.www.example"})," ，那将是错误的，正确的去除是 example.org.cn ，因为 example.org.cn 是注册的域名，正确的 TXT 记录应为："]}),(0,c.jsx)("pre",{children:"_acme-challenge.www"}),(0,c.jsx)(s,{children:"原理"}),(0,c.jsx)("p",{children:"在域名注册商注册域名后通常会提供一个权威 DNS 服务器，它用于控制您注册的域名的 DNS 解析。"}),(0,c.jsx)("p",{children:"和添加 A / AAAA 记录一样，主机记录只需要添加 www 即可解析为 www.example.org ，那么 TXT 记录同理。"}),(0,c.jsxs)("p",{children:["经对热门权威 DNS 控制台的测试， Cloudflare\xae 和 阿里云\xae 的权威 DNS 服务器控制台相对智能，如果您直接添加需要验证的完整 TXT 主机记录，它们会自动去除或提醒。而 腾讯云\xae 的权威 DNS 服务器控制台 相对自由，它不会去除或合并，那么就需要注意，否则添加完整 TXT 主机记录可能解析为 ",(0,c.jsx)("b",{children:"_acme-challenge.example.org.example.org"})," ，而导致验证 ",(0,c.jsx)("b",{children:"_acme-challenge.example.org"})," 记录失败。"]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"极速续期：一直继续"}),(0,c.jsxs)("p",{children:["如果您首次申请证书时一切顺利并成功输出 TLS/SSL 证书，而您也",(0,c.jsx)("qd",{children:"没有删除"}),"首次验证域名所添加的 TXT 记录，并且您还在 首次申请证书的浏览器且没有删除浏览器数据 或者 使用了 ",(0,c.jsx)("a",{href:"#数据迁移 - 在其它浏览器或设备极速续期",children:"数据迁移"}),"，那么这时候，您不去修改域名的输入，原封不动的，",(0,c.jsx)("qd",{children:"您就可以一直点继续"}),"，即便是开始验证阶段，也无需等待直接点击，极速续期来输出 TLS/SSL 证书！"]}),(0,c.jsx)(s,{children:"原理"}),(0,c.jsxs)("p",{children:["如果您查阅过 ",(0,c.jsx)("a",{href:"../settings/",children:"设置"})," 页面，您可能会注意到一个叫做 “ACME 账户私钥” 的数据，它可以被看作是 Let's Encrypt 账户。"]}),(0,c.jsxs)("p",{children:["比如我在 账户 A 中验证了域名 zeoseven.com 和 *.zeoseven.com 的所有权(成功颁发证书) ，那么 Let's Encrypt 账户会记住，",(0,c.jsx)("qd",{children:"并在续期时要求和申请时一样的验证凭据"}),"，通常是 ",(0,c.jsx)("qd",{children:"DNS 中使用相同的 TXT 记录值"})," 。"]}),(0,c.jsxs)("p",{children:["但如果清除了浏览器数据或者更换了设备或浏览器，虽然 ZSEncrypt 会自动在没有账户的浏览器中再创建一个新的 账户 B ，但即便在 账户 A 验证的所有权，在 账户 B 也不会存在，不过可以使用 ",(0,c.jsx)("a",{href:"#数据迁移 - 在其它浏览器或设备极速续期",children:"数据迁移"})," 来做到。"]}),(0,c.jsx)("p",{children:"所以，既然续期时要求和申请时一样的验证凭据，那么如果不删除申请证书时的 凭据(如申请时添加的用于验证所有权的 DNS 记录) ，再申请相同域名时，就可以省去包括 DNS 传播延迟、 DNS 添加步骤 等的等待时间，直接 三连点(继续、开始验证 和 复制或下载) 即可快速颁发。"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"配置"}),(0,c.jsxs)("p",{children:["ZSEncrypt 会自动处理 ACME 账户私钥 和在本地浏览器记忆，这包括域名和电子邮箱地址的记忆，您可以在 ",(0,c.jsx)("a",{href:"../settings/",target:"_blank",children:"设置"})," 页面修改它们，但不建议修改 ACME 账户私钥 选项，因为如果您不明白它们的用途设置了无效的值可能会导致 ZSEncrypt 无法工作。"]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"数据迁移 - 在其它浏览器或设备极速续期"}),(0,c.jsxs)("p",{children:["ZSEncrypt 使用您浏览器本地的 localStroage 来保存一切数据，所以如果当更换了浏览器、设备或浏览器数据被清除，那么浏览器会为您创建新的 ACME 账户私钥，这就会导致不知道有些域名已经验证过了，就需要添加新的 DNS 记录或文件重新验证，所以只需要在 ",(0,c.jsx)("a",{href:"../settings/",target:"_blank",children:"设置"})," 页面导出数据，在其它浏览器、其它设备或浏览器数据被清除后，仍然可以通过设置导入曾经的数据做到域名所有权验证的记录仍然是曾经的，即可极速续期。"]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(e,{children:"安装在服务器 或 CDN"}),(0,c.jsx)("p",{children:"当成功验证所有权时，您通常会看到输出的 PEM 和 KEY ，它们对应 “证书” 和 “私钥” ，有时候 PEM 也会被不严谨的称为 “公钥” 。"}),(0,c.jsx)("p",{children:"CDN 的安装可能千奇百怪，但通常是上传 证书 和 私钥 文件，有时候还会提供直接输入 证书 和 私钥 源字符串来安装。"}),(0,c.jsx)(s,{children:"以 1Panel 为例"}),(0,c.jsx)("p",{children:"很明显， 1Panel 面板对于证书的上传提供了两种方式："}),(0,c.jsx)("p",{children:"页面位置(v1.10.21-lts)：网站 - 证书 - 上传证书"}),(0,c.jsx)("img",{src:"/q/documents/04.webp"}),(0,c.jsx)("p",{children:"以及直接上传 .pem 和 .key 文件。"}),(0,c.jsx)("img",{src:"/q/documents/05.webp"}),(0,c.jsx)("p",{children:"其中的 私钥文件 和 私钥(KEY) 对应输出在右侧的 KEY ，而另一个就是 PEM 啦~"}),(0,c.jsx)("p",{children:"粘贴代码 也可以称作 粘贴源字符串，可以在输出页面直接复制它们得到的就是源字符串。"}),(0,c.jsx)("p",{children:"最后，在网站配置中选择上传的证书即可。"}),(0,c.jsx)("p",{children:"页面位置(v1.10.21-lts)：网站 - 配置 - HTTPS"}),(0,c.jsx)("img",{src:"/q/documents/06.webp"})]})]})]})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=6710)}),_N_E=e.O()}]);