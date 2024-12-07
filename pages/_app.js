import App from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@components/main.css';
import { Header, Footer, zsQ } from '@components/main';

class MyApp extends App {

    componentDidMount() {
        if (typeof window !== 'undefined') {

            if (window.self !== window.top) {
                let iframeDiv = document.createElement('div');
                iframeDiv.innerHTML = `
                    <iframe
                        src="https://zeoseven.com/_const/d/iframe/httpError/?i=no-iframe"
                        frameborder="0"
                        style="
                            position: fixed;
                            width: 100vw;
                            height: 100vh;
                            top: 0px;
                            left: 0px;
                            z-index: 4;
                            background-color: #fff;
                        "
                    ></iframe>
                `;
                document.body.appendChild(iframeDiv);
            };

        };
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>{`${zsQ.title}`}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=0.85" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" href='/favicon.ico' type='image/x-icon' />
                </Head>
                <noscript>
                    <iframe src="https://zeoseven.com/_const/d/iframe/httpError/" frameborder="0" style={{ position: 'fixed', width: '100vw', height: '100vh', top: '0px', left: '0px', zIndex: '4', backgroundColor: '#fff' }}></iframe>
                </noscript>
                <Header />
                <zsQ.Page>
                    <Component {...pageProps} />
                </zsQ.Page>
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

            </>
        );
    }
}

export default MyApp;
