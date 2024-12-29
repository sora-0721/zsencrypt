import Head from "next/head"
import { zsQ, Page } from "@components/main"

export default function () {
    return (<>
        <Head>
            <title>{`404 Not Found | ${zsQ.title}`}</title>
        </Head>
        <Page>
            <span id="tagid"></span>
            <h1 className='display-5 mb-5 fw-bold text-danger'>404 Not Found</h1>
            <p>未找到页面或文件，它可能已经被弃用或 URL 输入错误，您也可以 <a href="/">返回首页</a> 。</p>
        </Page>
    </>)
};