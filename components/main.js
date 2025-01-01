import React, { useState, useEffect } from 'react';



export const Header = () => {
    const [id, setId] = useState('');
    useEffect(() => {
        const tagid = document.getElementById('tagid');
        tagid && setId(tagid.textContent.trim());
    }, []);
    const s = 'md', b = 'lg';
    return (<>
        {`<div className='daohang-top'></div>`}
        <header className="seven0daohanglan">
            <nav className={`navbar navbar-expand-${s}`}>
                <div className={`container-fluid fs-14 px-${b}-5`}>
                    <a className="navbar-brand me-5" href="/">
                        <img src='https://webstatic.zeoseven.com/static/logo/zsencrypt/logoa-v2.png' className='logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#daohanginfo" aria-controls="daohanginfo" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`mt-3 mb-2 px-4 mt-${s}-0 mb-${s}-0 px-${s}-0 px-${b}-5 collapse navbar-collapse`} id="daohanginfo">
                        <ul className="navbar-nav ms-auto">
                            <li className='nav-item'>
                                <a className={`nav-link${id === 'home' ? ' active' : ''}`} href='/'>
                                    首页
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${id === 'apply' ? ' active' : ''}`} href='/apply/'>
                                    申请证书
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${id === 'manage' ? ' active' : ''}`} href='/manage/'>
                                    证书管理
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link${id === 'doc' ? ' active' : ''}`} href='/documents/'>
                                    文档
                                </a>
                            </li>
                            <div className='d-flex'>
                                <li className='nav-item'>
                                    <a className={`nav-link${id === 'settings' ? ' active' : ''}`} href='/settings/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href='#' className={`nav-link${id === 'updatelogs' ||
                                        id === 'open' ? ' active' : ''
                                        }`} data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <div className="dropdown-div">
                                            <li><a className={`dropdown-item${id === 'updatelogs' ? ' active' : ''}`} href="/info/UpdateLogs/">更新日志</a></li>
                                            <li><a className={`dropdown-item${id === 'open' ? ' active' : ''}`} href='/info/open/'>开源</a></li>
                                            <li><a className="dropdown-item" href='https://zeoseven.com/message/feedback/' target="_blank">错误反馈</a></li>
                                        </div>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>);
};



export const Footer = () => {
    return (
        <footer className="footer-div p-5">
            <p>如果 ZSEncrypt 无法正常工作，可前往 <a href='/settings/' target="_blank">设置</a> 清空数据或 <a src="https://zeoseven.instatus.com/" target='_blank'>查看状态页面</a> 。</p>
            <p className='my-2'>{`© 2024-${new Date().getFullYear()} ZeoSeven | GPLv3`}</p>
            <div>
                <img src="https://webstatic.zeoseven.com/static/beian.icon-v1.png" className="icp-beian" /> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41130302000659" rel="noreferrer" target="_blank">豫公网安备41130302000659号</a>
                <span> | </span>
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">豫ICP备2024064405号</a>
            </div>
        </footer>
    );
};



function toast(i, time) {
    const t = time || 2000;
    let toast = document.createElement('div');
    toast.textContent = i;
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
    }, t);
};



export const Page = ({ type, children }) => {
    return (
        <main className='container pt-5 px-sm-4'>
            <div className='row justify-content-center'>
                <div className={`col-12${type === 'w100' ? '' : ' col-lg-8'} bg-white py-5 px-4 px-sm-5`}>
                    {children}
                </div>
            </div>
        </main>
    );
};



export const zsQ = {

    getQuery: function (i) {
        return (new URLSearchParams(window.location.search)).get(i);
    },

    title: "ZSEncrypt - 简单快速的申请免费 TLS/SSL 证书",

    Loading: ({ text }) => {
        const t = text || '载入 ...';
        return (
            <div className="q-font text-center my-5">
                <span className="spinner-border spinner-border-sm text-danger"></span>
                <span className="ms-3">{t}</span>
            </div>
        );
    },

    copy: (text) => {
        navigator.clipboard.writeText(text).then(() => {
            toast("已复制~");
        }).catch(err => {
            toast(err);
        });
    },

    tc: (i, t) => {
        toast(i, t);
    }

};
