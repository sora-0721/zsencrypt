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
            a.setAttribute('download', 'ZSEncrypt_Data.json');
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
            const i = confirm('清空数据可能会解决 ZSEncrypt 无法正常工作的问题，但是会清空所有数据导致已验证的域名需要重新验证(除非您保存了 ACME 账户私钥)，确定要清空数据吗？');
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
                    <button id="outLocalStorage" className="btn q-btn me-2 mb-2">导出数据</button>
                    <button id="inLocalStorage" className="btn q-btn me-2 mb-2">导入数据</button>
                    <button id="clearStorage" className="btn q-btn me-2 mb-2">清空数据</button>
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