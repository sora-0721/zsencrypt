import Head from "next/head";
import { useEffect } from "react";
import { tc, dTitle, SmallPage } from '@components/main';

export default () => {
    useEffect(() => {



        const userDomain = localStorage.getItem('x-q-domain');
        const userDomainInput = document.getElementById("userDomain");
        if (userDomain) {
            userDomainInput.value = userDomain;
        };
        userDomainInput.addEventListener("input", () => {
            localStorage.setItem("x-q-domain", userDomainInput.value);
        })



        const userEmail = localStorage.getItem('x-q-email');
        const userEmailInput = document.getElementById("userEmail");
        if (userEmail) {
            userEmailInput.value = userEmail;
        };
        userEmailInput.addEventListener("input", () => {
            localStorage.setItem("x-q-email", userEmailInput.value);
        });



        const acmeAccountKey = localStorage.getItem('q-acmeAccountKey');
        const acmeAccountKeyInput = document.getElementById("acmeAccountKey");
        if (acmeAccountKey) {
            acmeAccountKeyInput.value = acmeAccountKey;
        };
        acmeAccountKeyInput.addEventListener("input", () => {
            localStorage.setItem("q-acmeAccountKey", acmeAccountKeyInput.value);
        });



        const manageDataPairs = localStorage.getItem('q-manageDataPairs');
        const manageDataPairsInput = document.getElementById("manageDataPairs");
        if (manageDataPairs) {
            manageDataPairsInput.value = manageDataPairs;
        };
        manageDataPairsInput.addEventListener("input", () => {
            localStorage.setItem("q-manageDataPairs", manageDataPairsInput.value);
        });



        const domainArray = localStorage.getItem('q-domainArray');
        const domainArrayInput = document.getElementById("domainArray");
        if (domainArray) {
            domainArrayInput.value = domainArray;
        };
        domainArrayInput.addEventListener("input", () => {
            localStorage.setItem("q-domainArray", domainArrayInput.value);
        });



        document.getElementById("outLocalStorage").addEventListener("click", () => {
            const data = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (['x-q-domain', 'x-q-email', 'q-acmeAccountKey', 'q-manageDataPairs', 'q-domainArray'].includes(key)) {
                    data[key] = localStorage.getItem(key);
                }
            };
            const a = document.createElement('a');
            a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
            a.setAttribute('download', 'Certple_Data.json');
            a.click();
        });



        document.getElementById("inLocalStorage").addEventListener("click", () => {
            const i = document.createElement('input');
            i.type = 'file';
            i.accept = '.json';
            i.style.display = 'none';
            i.addEventListener('change', (event) => {
                const file = new FileReader();
                file.onload = (event) => {
                    try {
                        const data = JSON.parse(event.target.result);
                        for (const key in data) {
                            if (data.hasOwnProperty(key)) {
                                localStorage.setItem(key, data[key]);
                            }
                        }
                        tc('数据导入成功~');
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } catch (error) {
                        tc('数据导入失败 ...' + error);
                    };
                };
                file.readAsText(event.target.files[0]);
            });
            document.body.appendChild(i);
            i.click();
            i.addEventListener('change', () => {
                document.body.removeChild(i);
            });
        });



        let clearStorage = document.getElementById('clearStorage');
        clearStorage.addEventListener('click', function (event) {
            event.preventDefault();
            const i = confirm('清空数据可能会解决 Certple 无法正常工作的问题，但是会清空所有数据导致已验证的域名需要重新验证(除非您保存了 ACME 账户私钥)，确定要清空数据吗？');
            if (i) {
                localStorage.clear();
                tc('已完成清除 ... 将在 5 秒后返回首页 ...', 5000);
                setTimeout(() => {
                    window.location.href = '/';
                }, 5000);
            };
        });



    }, [])
    return (<>
        <Head>
            <title>{`设置 - ${dTitle}`}</title>
        </Head>
        <SmallPage name="设置">
            <div className="mb-5">
                <p className="mb-3">一切数据在本地存储，位于 localStorage ，如果不明白这些是什么，应该不要碰它们。</p>
                <div>
                    <button id="outLocalStorage" className="btn q-btn me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg><span className="ms-2">导出数据</span>
                    </button>
                    <button id="inLocalStorage" className="btn q-btn me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                        </svg><span className="ms-2">导入数据</span>
                    </button>
                    <button id="clearStorage" className="btn q-btn me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg><span className="ms-2">清空数据</span>
                    </button>
                </div>
                <p className="text-success fw-bold">* 你的更改会立即被保存。</p>
            </div>
            <div className="mb-4">
                <p>域名 [String]</p>
                <textarea className="form-control q-form" rows="1" id="userDomain" placeholder="..."></textarea>
            </div>
            <div className="mb-4">
                <p>电子邮箱地址 [String]</p>
                <textarea className="form-control q-form" rows="1" id="userEmail" placeholder="..."></textarea>
            </div>
            <div className="mb-4">
                <p>高级 - ACME 账户私钥 [String]</p>
                <textarea className="form-control q-form fs-14" rows="5" id="acmeAccountKey" placeholder="..."></textarea>
            </div>
            <div className="mb-4">
                <p>高级 - 历史域名记忆 [Array]</p>
                <textarea className="form-control q-form fs-14" rows="5" id="domainArray" placeholder="..."></textarea>
            </div>
            <div className="mb-4">
                <p>高级 - 保存的证书 [JSON]</p>
                <textarea className="form-control q-form fs-13" rows="5" id="manageDataPairs" placeholder="..."></textarea>
            </div>
        </SmallPage>
    </>)
};