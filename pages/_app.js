import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@components/main.css';





function copyDiv(message) {
    var toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '20vh';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#000';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.zIndex = '3';
    toast.style.fontSize = '14px';
    toast.style.opacity = '0';
    toast.style.border = '1px solid #ccc';
    toast.style.transition = 'opacity 0.5s';
    toast.style.boxShadow = '0 0 7px #00000050';

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.opacity = '1';
    }, 100);

    setTimeout(function () {
        toast.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(toast);
        }, 500);
    }, 2000);
};

export const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        copyDiv("已复制~");
    }).catch(err => {
        copyDiv(err);
    });
};

export const tanchuang = (i) => {
    copyDiv(i);
};





const Header = () => {
    const [tagid, setTagid] = useState('');
    useEffect(() => {
        var tagid = document.getElementById('tagid');
        if (tagid) {
            setTagid(tagid.textContent.trim());
        }
    }, []);
    return (<>
        <div className='daohang-top d-none'></div>
        <header className="seven0daohanglan">
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" href="/">
                        <img src='https://zeoseven.com/_const/s/logo/zsencrypt/logoa-v2.png' className='logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#daohanginfo" aria-controls="daohanginfo" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="mt-3 mb-2 px-4 mt-md-0 mb-md-0 px-md-0 collapse navbar-collapse" id="daohanginfo">
                        <ul className="navbar-nav mx-auto">
                            <li className='nav-item'>
                                <a className={`nav-link${tagid === 'home' ? ' active' : ''}`} href='/'>
                                    首页
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${tagid === 'start' ? ' active' : ''}`} href='/start/'>
                                    申请证书
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${tagid === 'self-signed' ? ' active' : ''}`} href='/self-signed/'>
                                    自签名
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${tagid === 'doc' ? ' active' : ''}`} href='/documents/'>
                                    文档
                                </a>
                            </li>
                            <div className='d-flex'>
                                <li className='nav-item'>
                                    <a className={`nav-link${tagid === 'settings' ? ' active' : ''}`} href='/settings/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className={`nav-link${tagid === 'updatelogs' ||
                                        tagid === 'open' ? ' active' : ''
                                        }`} href="javascript:;" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <div className="dropdown-div">
                                            <li><a className={`dropdown-item${tagid === 'updatelogs' ? ' active' : ''}`} href="/info/UpdateLogs/">更新日志</a></li>
                                            <li><a className={`dropdown-item${tagid === 'open' ? ' active' : ''}`} href='/info/open/'>开源</a></li>
                                        </div>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <button id="_zsApi_goTop" data-border-color="#00ff6e90" data-background-color="#00ff6e75" style={{ display: 'none' }}></button>
    </>);
};

const Footer = () => {
    return (
        <footer className="footer-div p-5">
            <p>© 2024 ZeoSeven | GPLv3</p>
            <div>
                <img src="https://zeoseven.com/_const/s/beian.icon-v1.png" className="icp-beian" /> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41130302000659" rel="noreferrer" target="_blank">豫公网安备41130302000659号</a>
                <span> | </span>
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备2024064405号</a>
            </div>
        </footer>
    );
};




const getQuery = function (i) {
    return (new URLSearchParams(window.location.search)).get(i);
};




const WhitePage = ({ children }) => {
    return (
        <div className='container pt-5 px-4'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 bg-white p-5'>
                    {children}
                </div>
            </div>
        </div>
    );
};





const dTitle = "ZSEncrypt - 简单快速的申请免费 TLS/SSL 证书";




class MyApp extends App {

    componentDidMount() {
        if (typeof window !== 'undefined') {

            document.addEventListener('dragstart', function (e) {
                e.preventDefault();
            });

        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>{`${dTitle}`}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=0.85" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="icon" href='/favicon.ico' type='image/x-icon' />
                </Head>
                <Header />
                <WhitePage>
                    <main>
                        <Component
                            {...pageProps}
                            copy={copy}
                            WhitePage={WhitePage}
                            dTitle={dTitle}
                            tanchuang={tanchuang}
                            getQuery={getQuery}
                        />
                    </main>
                </WhitePage>
                <Footer />

                {/*
                    api.min.js 是 ZeoSeven 的几乎每个网页都会载入的文件，
                    它可删除，
                    主要加载在线服务，如 前端框架的加载和冗余、网页统计、通用函数（优化的锚点定位、回到顶部按钮）等。
                    您可以将它替换为 bootstrap.bundle.min.js （仅加载 Bootstrap 框架的 Bundle JS 文件）即可正常工作。
                */}
                <Script src="https://zeoseven.com/_const/api.min.js" async></Script>

            </>
        );
    }
}

export default MyApp;
