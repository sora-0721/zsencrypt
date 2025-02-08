import Head from "next/head";
import { SmallPage, dTitle } from "@components/main";

export default function () {
    return (<>
        <Head>
            <title>{`关于 ${dTitle}`}</title>
        </Head>
        <SmallPage name="关于 Certple">
            <div className="post mb-5">
                <p>最早之前， <a href="https://www.zeoseven.com" target="_blank">ZeoSeven</a> 对 Next.js 的熟练度实际上并不怎么样，制作出的页面样式还不错但功能实际上过度依赖 useEffect 来使用客户端 JS 。</p>
                <p>2024 年 9 月， <qd>秋</qd> 开发并发布了 <qd>秋的工具箱</qd> ，当然，那只是一通鱼龙混杂的在线工具来练习 React 。</p>
                <p>2024 年 9 月末， 苦恼于 <qd>ZSFT</qd> 项目 CDN 的 TLS 证书没有特别简单的申请方式，而基于命令行的证书申请方式实在是看不懂一点。开始尝试自己开发一个 TLS 证书的在线申请，虽然已经可以正常工作，但甚至是 ACME 账户私钥都需要手动输入，这仍然不够好。</p>
                <p>2024 年 11 月， <qd>秋的工具箱</qd> 在 ZeoSeven 官网消失不见，但其中的 <qd>Let's Encrypt 证书申请</qd> 功能被独立了出来，称为 <qd>ZSEncrypt</qd>。证书管理 和 自动化信息处理 功能也在这时被加入。</p>
                <p>2024 年那时 16 岁，因为很多事情导致 ZSEncrypt 持续的被搁置，并一直由 <qd>wxy</qd> 维护，而且页面样式也几乎是复制了自己第一个站点 <qd>ZSFT</qd> 的 CSS 。</p>
                <p>直到 2025 年 2 月，将 ZSEncrypt 更名为 <qd>Certple</qd> ，因为 <qd>Cert(证书) + Simple(简单)</qd> 比旧名字更能够传达其功能和目的。布局完全重构，从直列式改变为侧边栏式布局。不过 Certple 的 <qd>简单</qd> 指的是开始申请的过程门槛更低。</p>
            </div>
            <div>
                <div className="fs-14 mb-4">
                    <p>© 2025 瑶清秋 & 温魏</p>
                    <div className="d-flex align-items-center">
                        <img className="icp-beian" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII=" />
                        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41130302000659" rel="noreferrer" target="_blank">豫公网安备41130302000659号</a>
                        <span className="px-2"> | </span>
                        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备2024064405号</a>
                    </div>
                </div>
                <div className="fs-12 color-9">
                    <p>Next.js: 14.2.23</p>
                    <p>Bootstrap: 5.3.3</p>
                    <p>Fonts: Geist & Geist Mono 1.401</p>
                    <p>React: 18.3.1</p>
                    <p>ACME HTML Web Browser Client: 1.0.230820</p>
                </div>
            </div>
        </SmallPage>
    </>);
};