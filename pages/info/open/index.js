import Head from "next/head";
import { zsQ, Page } from '@components/main';

export default () => {
    return (<>
        <Head>
            <title>{`开源 | ${zsQ.title}`}</title>
        </Head>
        <Page>
            <span id="tagid">open</span>
            <h1 className="display-5 mb-5">开源</h1>
            <div className="mb-5">
                <p>ZSEncrypt 基于 GPLv3 发布，整个站点源代码可以在 <a href="https://github.com/zeoseven/zsencrypt" target="_blank" rel="nofollow noopener noreferrer">GitHub</a> 上找到。</p>
            </div>
            <div>
                <h2 className="fw-light mb-3">使用的开源软件</h2>
                <p>
                    <a href="https://nextjs.org/" target="_blank" rel="nofollow noopener noreferrer">Next.js</a>
                    <span> Version 14.2.16 - MIT</span>
                </p>
                <p>
                    <a href="https://getbootstrap.com/" target="_blank" rel="nofollow noopener noreferrer">Bootstrap</a>
                    <span> Version 5.3.3 - MIT</span>
                </p>
                <p>
                    <a href="https://github.com/xiangyuecn/ACME-HTML-Web-Browser-Client"
                        target="_blank" rel="nofollow noopener noreferrer"
                    >ACME HTML Web Browser Client</a><span> Version 1.0.230820 - GPLv3</span>
                </p>
            </div>
        </Page>
    </>)
};