import Head from "next/head";

export default ({ dTitle }) => {
    return (<>
        <Head>
            <title>{`文档 | ${dTitle}`}</title>
        </Head>
        <span id="tagid">doc</span>
        <div className="documents">
            <h1 className="display-5 mb-5">文档</h1>

            <h3 className="fw-light">目录</h3>
            <div className="px-4 mulu">
                <a href="#1">首次申请证书</a>
                <div className="ps-5">
                    <a href="#1-1">域名</a>
                    <a href="#1-2">高级选项 - 证书类型(私钥)</a>
                    <a href="#1-3">验证域名所有权</a>
                </div>
                <a href="#2">极速续期：一直继续</a>
                <a href="#3">配置</a>
                <a href="#4">数据迁移 - 在其它浏览器或设备极速续期</a>
            </div>

            <div>
                <h2 id="1"><a href="#1">#</a> 首次申请证书</h2>
                <p>首次申请证书可能相对缓慢，并没有续期时极速颁发的高效率。</p>
                <p>首先，在 <a href="../start/" target="_blank">申请证书</a> 页面，您可能会看到这样的内容：</p>
                <img src="/q/doc/01.webp" />

                <h4 id="1-1"><a href="#1-1">#</a> 域名</h4>
                <p>多个域名以 <qd>英文逗号(,)</qd> 分隔。</p>
                <p>域名填写裸域，比如 <qd>example.org, *.example.org</qd> 即可申请覆盖主域 example.org 及子域 blog.example.org、bbs.example.org 等域名的 TLS/SSL 证书。</p>
                <p>申请通配符证书需要向 DNS 添加 2 个相同主机记录但记录值不同的 TXT 记录。</p>
                <p>您也可以精确匹配，比如只输入 www.example.org 来申请只覆盖 www 的单域名证书，或者输入 example.org, blog.example.org 来申请只覆盖主域名和 Blog 域名的多域名证书，但多域名证书通常直接使用通配符证书。</p>

                <h4 id="1-2"><a href="#1-2">#</a> 高级选项 - 证书类型(私钥)</h4>
                <p>通常选择自动，如果您的服务器是相对较新的版本，支持 ECC 椭圆加密算法，那么应该选择 ECC ，因为它提供更好的安全性和效率。而 RSA 因存在历史较 ECC 更久远，所以 <qd>RSA 的兼容性更强，但效率并不如 ECC</qd> 。</p>

                <h4 id="1-3"><a href="#1-3">#</a> 验证域名所有权</h4>
                <p>以 zeoseven.com, *.zeoseven.com 为例，当在输入信息页面点击 “继续” 按钮后， ZSEncrypt 会输出需要验证的信息详情和选择验证方法。</p>
                <p>不论什么， ZSEncrypt 更推荐使用 DNS 记录验证，因为它通常来说相对其它验证方式更容易。</p>
                <p>输出的信息看起来像这样：</p>
                <img src="/q/doc/02.webp" />
                <p>前往您的域名权威 DNS 服务器中添加 TXT 记录，输出的所有记录值都需要一一添加，但通常申请的通配符域名证书只需要添加两个 TXT 主机记录。</p>
                <p><qd>建议在添加全部 TXT 记录后，不要急于点击开始验证按钮，等待 30 秒左右再点击，以缓解 DNS 传播的延迟。</qd>否则如果至多一个记录验证失败，则验证不通过，需要重新添加新的记录值。</p>
                <p>如果一切顺利，您应该会看到 PEM 和 KEY 的输出页面：</p>
                <img src="/q/doc/03.png" />
                <p>您可以下载 .pem 和 .key 文件安装到服务器上，也可以直接复制源字符串。</p>
            </div>

            <div>
                <h2 id="2"><a href="#2">#</a> 极速续期：一直继续</h2>
                <p>如果您首次申请证书时一切顺利并成功输出 TLS/SSL 证书，而您也<qd>没有删除</qd>首次验证域名所添加的 TXT 记录，那么如果您还在 首次申请证书的浏览器且没有删除浏览器数据 或者 使用了 <a href="#4">数据迁移</a>，那么这时候，您不去修改域名的输入，原封不动的，<qd>您就可以一直点继续</qd>，即便是开始验证阶段，也无需等待直接点击，极速续期来输出 TLS/SSL 证书！</p>
            </div>

            <div>
                <h2 id="3"><a href="#3">#</a> 配置</h2>
                <p>ZSEncrypt 会自动处理 ACME 账户私钥 和在本地浏览器记忆，这包括域名和电子邮箱地址的记忆，您可以在 <a href="../settings/" target="_blank">设置</a> 页面修改它们，但不建议修改 ACME 账户私钥 选项，因为如果您不明白它们的用途设置了无效的值可能会导致 ZSEncrypt 无法工作。</p>
            </div>

            <div>
                <h2 id="4"><a href="#4">#</a> 数据迁移 - 在其它浏览器或设备极速续期</h2>
                <p>ZSEncrypt 使用您浏览器本地的 localStroage 来保存一切数据，所以如果当更换了浏览器、设备或浏览器数据被清除，那么浏览器会为您创建新的 ACME 账户私钥，这就会导致不知道有些域名已经验证过了，就需要添加新的 DNS 记录或文件重新验证，所以只需要在 <a href="../settings/" target="_blank">设置</a> 页面导出数据，在其它浏览器、其它设备或浏览器数据被清除后，仍然可以通过设置导入曾经的数据做到域名所有权验证的记录仍然是曾经的，即可极速续期。</p>
            </div>

        </div>
    </>);
}