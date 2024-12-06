import Head from "next/head";
import { zsQ } from '@components/main';

export default () => {
    return (<>
        <Head>
            <title>{`文档 | ${zsQ.title}`}</title>
        </Head>
        <span id="tagid">doc</span>
        <div className="documents">
            <h1 className="display-5 mb-5">文档</h1>

            <h3 className="fw-light">目录</h3>
            <div className="px-4 mulu">
                <a href="#1">首次申请证书</a>
                <div className="ps-5">
                    <a href="#1-1">域名</a>
                    <a href="#1-1-1">域名格式示例</a>
                    <a href="#1-1-2">二级域名 (以 .com.cn, .org.cn, .eu.org 等结尾) 的格式示例</a>
                    <a href="#1-2">高级选项 - 证书类型(私钥)</a>
                    <a href="#1-3">验证域名所有权</a>
                </div>
                <a href="#6">验证凭据</a>
                <a href="#2">极速续期：一直继续</a>
                <div className="ps-5">
                    <a href="#2-1">原理</a>
                </div>
                <a href="#3">配置</a>
                <a href="#4">数据迁移 - 在其它浏览器或设备极速续期</a>
                <a href="#5">安装在服务器 或 CDN</a>
                <div className="ps-5">
                    <a href="#5-1">以 1Panel 为例</a>
                </div>
            </div>

            <div>
                <h2 id="1"><a href="#1">#</a> 首次申请证书</h2>
                <p>首次申请证书可能相对缓慢，并没有续期时极速颁发的高效率。</p>
                <p>首先，在 <a href="../apply/" target="_blank">申请证书</a> 页面，您可能会看到这样的内容：</p>
                <img src="/q/documents/01.webp" />

                <h4 id="1-1"><a href="#1-1">#</a> 域名</h4>
                <p>多个域名以 <qd>英文逗号(,)</qd> 分隔。</p>
                <p><qd>您输入的域名越多，需要提供的验证凭据越多，因为它们需要逐个验证，所以如果不是特殊需求而使用多域名证书，则更推荐通配符证书，因为通配符证书只需要提供两个凭据。</qd></p>
                <p>域名填写裸域，比如 <qd>example.org, *.example.org</qd> 即可申请覆盖主域 example.org 及子域 blog.example.org、bbs.example.org 等域名的 TLS/SSL 证书。</p>
                <p>申请通配符证书需要向 DNS 添加 2 个相同主机记录但记录值不同的 TXT 记录。</p>
                <p>您也可以精确匹配，比如只输入 www.example.org 来申请只覆盖 www 的单域名证书，或者输入 example.org, blog.example.org 来申请只覆盖主域名和 Blog 域名的多域名证书，但多域名证书通常直接使用通配符证书。</p>

                <h4 id="1-1-1"><a href="#1-1-1">#</a> 域名格式示例</h4>
                <p>比如 ZeoSeven 的主站域名是 <qd>zeoseven.com</qd> ，而 ZSEncrypt 的域名是<qd>zsencrypt.zeoseven.com</qd> ，它是 zeoseven.com 的子域名，那么如果我想要只覆盖它们，就可以在域名框中输入：</p>
                <pre>zeoseven.com, zsencrypt.zeoseven.com</pre>
                <p>那么这时候问题来了， ZeoSeven 还有一个 <qd>fonts.zeoseven.com</qd> ，如果想要覆盖它们，可以填写：</p>
                <pre>zeoseven.com, zsencrypt.zeoseven.com, fonts.zeoseven.com</pre>
                <p>这时候问题又来了，通配符证书只需要添加两个 TXT 记录或文件，而这样则需要添加三个，如果子域名特别多呢？不可能一个一个验证，那样实在是过于麻烦，那么可以用 通配符(*) 。</p>
                <pre>zeoseven.com, *.zeoseven.com</pre>
                <p>这样以来，即可覆盖包括 zeoseven.com, www.zeoseven.com, zsencrypt.zeoseven.com, fonts.zeoseven.com ，甚至不使用的 bbs.zeoseven.com, api.zeoseven.com, blog.zeoseven.com 等一切子域名都可使用同一个 PEM 和 KEY 来开启 HTTPS 。</p>
                <p>当然，因为 通配符(*) 匹配任何字符的特性，可以更方便的覆盖所有子域，但如果是 *.zeoseven.com ，则实际上只匹配 .zeoseven.com 前面任何英文字母和连字符，但如果遇到<qd>子域名的子域名</qd> ，如：</p>
                <pre>pan.blog.zeoseven.com</pre>
                <p>那么它将不会被匹配，因为通配符(*) 只匹配到 zeoseven.com 前面，而不会匹配到 blog.zeoseven.com 前面，所以需要添加：</p>
                <pre>zeoseven.com, *.zeoseven.com, *.blog.zeoseven.com</pre>
                <p>想象力是非常强大的，那么可不可以直接使用 <qd>*.*.zeoseven.com</qd> 不就完美解决？</p>
                <p><em>很遗憾，证书中的 通配符(*) 每 1 段域名或子域名只能使用 1 个。</em></p>

                <h4 id="1-1-2"><a href="#1-1-2">#</a> 三级域名 (以 .com.cn, .org.cn, .eu.org 等结尾) 的格式示例</h4>
                <p>实际上，它们和常见的域名申请证书的方式是一样的，包括通配符，比如您的 裸域名(不带 www) 是 <qd>example.org.cn</qd> ，那么可以填写：</p>
                <pre>example.org.cn</pre>
                <p>包括 Blog :</p>
                <pre>example.org.cn, blog.example.org.cn</pre>
                <p>包括 通配符(*) :</p>
                <pre>example.org.cn, *.example.org.cn</pre>
                <p></p>

                <h4 id="1-2"><a href="#1-2">#</a> 高级选项 - 证书类型(私钥)</h4>
                <p>通常选择自动，如果您的服务器是相对较新的版本，支持 ECC 椭圆加密算法，那么应该选择 ECC ，因为它提供更好的安全性和效率。而 RSA 因存在历史较 ECC 更久远，所以 <qd>RSA 的兼容性更强，但效率并不如 ECC</qd> 。</p>

                <h4 id="1-3"><a href="#1-3">#</a> 验证域名所有权</h4>
                <p>以 zsencrypt.zeoseven.com 为例，当在输入信息页面点击 “继续” 按钮后， ZSEncrypt 会输出需要验证的信息详情和选择验证方法。</p>
                <p>不论什么， ZSEncrypt 更推荐使用 DNS 记录验证，因为它通常来说相对其它验证方式更容易。</p>
                <p>输出的信息看起来像这样：</p>
                <img src="/q/documents/02.webp" />
                <p>前往您的域名权威 DNS 服务器中添加 TXT 记录，输出的所有记录值都需要一一添加，但通常申请的通配符域名证书只需要添加两个 TXT 主机记录。</p>
                <p><qd>建议在添加全部 TXT 记录后，不要急于点击开始验证按钮，等待 30 秒左右再点击，以缓解 DNS 传播的延迟。</qd>否则如果至多一个记录验证失败，则验证不通过，需要重新添加新的记录值。</p>
                <p>如果一切顺利，您应该会看到 PEM 和 KEY 的输出页面：</p>
                <img src="/q/documents/03.webp" />
                <p>您可以下载 .pem 和 .key 文件安装到服务器上，也可以直接复制源字符串。</p>
            </div>

            <div>
                <h2 id="2"><a href="#2">#</a> 极速续期：一直继续</h2>
                <p>如果您首次申请证书时一切顺利并成功输出 TLS/SSL 证书，而您也<qd>没有删除</qd>首次验证域名所添加的 TXT 记录，并且您还在 首次申请证书的浏览器且没有删除浏览器数据 或者 使用了 <a href="#4">数据迁移</a>，那么这时候，您不去修改域名的输入，原封不动的，<qd>您就可以一直点继续</qd>，即便是开始验证阶段，也无需等待直接点击，极速续期来输出 TLS/SSL 证书！</p>
                <h4 id="2-1"><a href="#2-1">#</a> 原理</h4>
                <p>如果您查阅过 <a href="../settings/">设置</a> 页面，您可能会注意到一个叫做 “ACME 账户私钥” 的数据，它可以被看作是 Let's Encrypt 账户。</p>
                <p>比如我在 账户 A 中验证了域名 zeoseven.com 和 *.zeoseven.com 的所有权(成功颁发证书) ，那么 Let's Encrypt 账户会记住，<qd>并在续期时要求和申请时一样的验证凭据</qd>，通常是 <qd>DNS 中使用相同的 TXT 记录值</qd> 。</p>
                <p>但如果清除了浏览器数据或者更换了设备或浏览器，虽然 ZSEncrypt 会自动在没有账户的浏览器中再创建一个新的 账户 B ，但即便在 账户 A 验证的所有权，在 账户 B 也不会存在，不过可以使用 <a href="#4">数据迁移</a> 来做到。</p>
                <p>所以，既然续期时要求和申请时一样的验证凭据，那么如果不删除申请证书时的 凭据(如申请时添加的用于验证所有权的 DNS 记录) ，再申请相同域名时，就可以省去包括 DNS 传播延迟、 DNS 添加步骤 等的等待时间，直接 三连点(继续、开始验证 和 复制或下载) 即可快速颁发。</p>
            </div>

            <div>
                <h2 id="3"><a href="#3">#</a> 配置</h2>
                <p>ZSEncrypt 会自动处理 ACME 账户私钥 和在本地浏览器记忆，这包括域名和电子邮箱地址的记忆，您可以在 <a href="../settings/" target="_blank">设置</a> 页面修改它们，但不建议修改 ACME 账户私钥 选项，因为如果您不明白它们的用途设置了无效的值可能会导致 ZSEncrypt 无法工作。</p>
            </div>

            <div>
                <h2 id="4"><a href="#4">#</a> 数据迁移 - 在其它浏览器或设备极速续期</h2>
                <p>ZSEncrypt 使用您浏览器本地的 localStroage 来保存一切数据，所以如果当更换了浏览器、设备或浏览器数据被清除，那么浏览器会为您创建新的 ACME 账户私钥，这就会导致不知道有些域名已经验证过了，就需要添加新的 DNS 记录或文件重新验证，所以只需要在 <a href="../settings/" target="_blank">设置</a> 页面导出数据，在其它浏览器、其它设备或浏览器数据被清除后，仍然可以通过设置导入曾经的数据做到域名所有权验证的记录仍然是曾经的，即可极速续期。</p>
            </div>

            <div>
                <h2 id="5"><a href="#5">#</a> 安装在服务器 或 CDN</h2>
                <p>当成功验证所有权时，您通常会看到输出的 PEM 和 KEY ，它们对应 “证书” 和 “私钥” ，有时候 PEM 也会被不严谨的称为 “公钥” 。</p>
                <p>CDN 的安装可能千奇百怪，但通常是上传 证书 和 私钥 文件，有时候还会提供直接输入 证书 和 私钥 源字符串来安装。</p>

                <h4 id="5-1"><a href="#5-1">#</a> 以 1Panel 为例</h4>
                <p>很明显， 1Panel 面板对于证书的上传提供了两种方式：</p>
                <p>页面位置(v1.10.21-lts)：网站 - 证书 - 上传证书</p>
                <img src="/q/documents/04.webp" />
                <p>以及直接上传 .pem 和 .key 文件。</p>
                <img src="/q/documents/05.webp" />
                <p>其中的 私钥文件 和 私钥(KEY) 对应输出在右侧的 KEY ，而另一个就是 PEM 啦~</p>
                <p>粘贴代码 也可以称作 粘贴源字符串，可以在输出页面直接复制它们得到的就是源字符串。</p>
                <p>最后，在网站配置中选择上传的证书即可。</p>
                <p>页面位置(v1.10.21-lts)：网站 - 配置 - HTTPS</p>
                <img src="/q/documents/06.webp" />

            </div>

        </div>
    </>);
}