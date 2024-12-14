import App from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@components/main.css';
import { Header, Footer, zsQ } from '@components/main';

class main extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (<>
            <Head>
                <title>{`${zsQ.title}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.85" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <link rel="icon" href='/favicon.ico' type='image/x-icon' />
            </Head>
            <noscript>
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 4,
                    backgroundColor: '#ffffff70',
                    paddingTop: '33vh',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)'
                }}><h1 style={{ color: '#cc0000', fontWeight: '300' }}>ZSEncrypt 需要 JavaScript 才能正常工作。</h1>
                </div>
            </noscript>
            <Header />
            <Component {...pageProps} />
            <button id="_zsApi-goTop" data-border-color="#00ff6e90" data-background-color="#00ff6e75" style={{ display: 'none' }}></button>
            <Footer />

            {
                /*
                 * api.min.js 是 ZeoSeven 的几乎每个网页都会载入的文件，
                 * 它可删除，
                 * 主要加载在线服务，如 前端框架的加载和冗余、网页统计、通用函数（优化的锚点定位、回到顶部按钮）等。
                 * 您可以将它替换为 bootstrap.bundle.min.js （仅加载 Bootstrap 框架的 Bundle JS 文件）即可正常工作。
                 */
            }
            <Script src="https://zeoseven.com/_const/api.min.js" defer></Script>

        </>);
    }
}

export default main;
