import Head from "next/head";
import { useEffect } from "react";

export default ({ dTitle, tanchuang }) => {
    useEffect(() => {

        const userDomain = localStorage.getItem('x-q-domain');
        if (userDomain) {
            document.getElementById("userDomain").value = userDomain;
        };
        document.getElementById("saveUserDomain").addEventListener("click", () => {
            localStorage.setItem("x-q-domain", document.getElementById("userDomain").value);
            tanchuang("保存成功~");
        })

        const userEmail = localStorage.getItem('x-q-email');
        if (userEmail) {
            document.getElementById("userEmail").value = userEmail;
        };
        document.getElementById("saveUserEmail").addEventListener("click", () => {
            localStorage.setItem("x-q-email", document.getElementById("userEmail").value);
            tanchuang("保存成功~");
        });

        const acmeAccountKey = localStorage.getItem('q-acmeAccountKey');
        if (acmeAccountKey) {
            document.getElementById("acmeAccountKey").value = acmeAccountKey;
        };
        document.getElementById("saveAcmeAccountKey").addEventListener("click", () => {
            localStorage.setItem("q-acmeAccountKey", document.getElementById("acmeAccountKey").value);
            tanchuang("保存成功~");
        });

        const manageDataPairs = localStorage.getItem('q-manageDataPairs');
        if (manageDataPairs) {
            document.getElementById("manageDataPairs").value = manageDataPairs;
        };
        document.getElementById("saveManageDataPairs").addEventListener("click", () => {
            localStorage.setItem("q-manageDataPairs", document.getElementById("manageDataPairs").value);
            tanchuang("保存成功~");
        });


        document.getElementById("outLocalStorage").addEventListener("click", () => {
            const data = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (['x-q-domain', 'x-q-email', 'q-acmeAccountKey', 'q-manageDataPairs'].includes(key)) {
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
                        tanchuang('数据导入成功~');
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } catch (error) {
                        tanchuang('数据导入失败 ...' + error);
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
                tanchuang('已完成清除 ... 将在 5 秒后返回首页 ...', 5000);
                setTimeout(() => {
                    window.location.href = '/';
                }, 5000);
            };
        });






    }, [])
    return (<>
        <Head>
            <title>{`设置 | ${dTitle}`}</title>
        </Head>
        <span id="tagid">settings</span>
        <h1 className="display-5 mb-5">设置</h1>
        <div className="mb-5">
            <p className="mb-2">一切数据在本地存储，位于 localStorage ，如果不明白这些是什么，应该不要碰它们。</p>
            <div>
                <a id="outLocalStorage" href="javascript:;">导出数据</a>
                <span> | </span>
                <a id="inLocalStorage" href="javascript:;">导入数据</a>
                <span> | </span>
                <a id="clearStorage" href="javascript:;">清空数据</a>
            </div>
        </div>
        <div className="mb-5">
            <p>域名输入</p>
            <textarea className="form-control q-form" rows="1" id="userDomain" placeholder="..."></textarea>
            <button id="saveUserDomain" className="btn-q mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg><span className="ms-2">保存 ...</span>
            </button>
        </div>
        <div className="mb-5">
            <p>电子邮箱地址</p>
            <textarea className="form-control q-form" rows="1" id="userEmail" placeholder="..."></textarea>
            <button id="saveUserEmail" className="btn-q mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg><span className="ms-2">保存 ...</span>
            </button>
        </div>
        <div className="mb-5">
            <p>高级 - ACME 账户私钥</p>
            <textarea className="form-control q-form" rows="5" id="acmeAccountKey" placeholder="..."></textarea>
            <button id="saveAcmeAccountKey" className="btn-q mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg><span className="ms-2">保存 ...</span>
            </button>
        </div>
        <div className="mb-5">
            <p>高级 - 保存的证书.json</p>
            <textarea className="form-control q-form fs-13" rows="5" id="manageDataPairs" placeholder="..."></textarea>
            <button id="saveManageDataPairs" className="btn-q mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-floppy" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg><span className="ms-2">保存 ...</span>
            </button>
        </div>
    </>)
};