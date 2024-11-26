import { useEffect } from 'react';
import Head from 'next/head';

export default ({ dTitle, getQuery }) => {

    useEffect(() => {

        const getMsg = getQuery('msg');
        const msgDiv = document.getElementById('msg');

        const msgMap = {
            'no-https': '正在使用非 https:// 的不安全协议访问，无法启用 Crypto 。',
            'browser-old-version': '您的浏览器版本过低，请更新浏览器或使用推荐的 Google® Chrome 。',
            'no-crypto': '您的浏览器不支持 Web Cryptography API ，请更新浏览器或使用推荐的 Google® Chrome 。',
        };

        if (msgMap[getMsg]) {
            msgDiv.innerHTML = msgMap[getMsg];
        } else {
            msgDiv.innerHTML = '未知错误';
        };

    }, []);

    return (
        <>
            <Head>  
                <title>{`出现错误 | ${dTitle}`}</title>
            </Head>
            <h1 className='display-5 mb-5'>出现错误</h1>
            <div id='msg'></div>
        </>
    )
}
