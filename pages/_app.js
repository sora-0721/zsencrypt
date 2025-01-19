import Head from 'next/head';
import Script from 'next/script';
import '@components/main.css';
// import { useEffect } from 'react';
import { Header, Footer, zsQ } from '@components/main';

export default function ({ Component, pageProps }) {

    /*
        useEffect(() => {
            const bsDropdowns = document.querySelectorAll('.dropdown');
            bsDropdowns && bsDropdowns.forEach(i => {
                const menu = i.querySelector('.dropdown-menu');
                let timeout = null;
                function add() {
                    if (menu) {
                        clearTimeout(timeout);
                        menu.classList.add('show');
                        menu.setAttribute('data-bs-popper', 'static');
                        setTimeout(() => {
                            menu.style.opacity = 1;
                        }, 0);
                    };
                };
                function remove() {
                    if (menu) {
                        menu.style.opacity = 0;
                        timeout = setTimeout(() => {
                            menu.classList.remove('show');
                            menu.removeAttribute('data-bs-popper');
                        }, 300);
                    };
                };
                i.addEventListener('mouseenter', add);
                i.addEventListener('click', add);
                i.addEventListener('mouseleave', remove);
                document.addEventListener('click', function (event) {
                    !i.contains(event.target) && remove();
                });
                document.addEventListener('touchstart', function (event) {
                    !i.contains(event.target) && remove();
                });
            });
        }, []);
     */

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
            }}>
                <div style={{ padding: '0 5vw' }}>
                    <h1 style={{ color: '#cc0000', fontWeight: '700' }}>ZSEncrypt 需要 JavaScript 才能正常工作。</h1>
                    <h2 style={{ color: '#000000', fontWeight: '300' }}>请开启 JavaScript 后刷新页面。</h2>
                </div>
            </div>
        </noscript>
        <Header />
        <Component {...pageProps} />
        <button id="_zsApi-goTop" data-border-color="#00ff6e90" data-background-color="#00ff6e75" style={{ display: 'none' }}></button>
        <Footer />

        {
            /*
             * main.js 是 ZeoSeven 的几乎每个网页都会载入的文件，
             * 它可删除，
             * 主要加载在线服务，如 前端框架的加载和冗余、网页统计、通用函数（优化的锚点定位、回到顶部按钮）等。
             * 您可以将它替换为 bootstrap.bundle.min.js （仅加载 Bootstrap 框架的 Bundle JS 文件）即可正常工作。
             */
        }
        <Script src="https://webstatic.zeoseven.com/main.js" defer></Script>

    </>);
}
