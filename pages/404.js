import Head from "next/head"
import { zsQ } from "@components/main"

export default function () {
    return (
        <>
            <Head>
                <title>{`404 Not Found | ${zsQ.title}`}</title>
            </Head>

            <span id="tagid"></span>
            <h1 className='display-5 mb-5 fw-bold text-danger'>404 Not Found</h1>
            <p>未找到页面，它可能已经被弃用或您的输入错误，您可以 <a href="/">返回首页</a> 。</p>

        </>
    )
};