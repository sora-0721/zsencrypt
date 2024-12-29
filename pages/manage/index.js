import { useEffect } from 'react';
import Head from 'next/head';
import { zsQ, Page } from '@components/main';

export default () => {

    useEffect(() => {

        const dataDiv = document.getElementById('dataDiv');

        const data = JSON.parse(localStorage.getItem('q-manageDataPairs')) || [];

        if (data.length !== 0) {
            dataDiv.innerHTML = "";
            data.forEach((d, i) => {
                const notFound = '未知'
                const pem = d.cert || notFound;
                const key = d.key || notFound;
                const domain = d.domains || notFound;
                const index = i + 1;

                const item = `
                    <tr>
                        <td># ${index}</td>
                        <td>${domain}</td>
                        <td class="guoqi-time" data-time="${d.time}"></td>
                        <td>
                            <a href="#" class="downPem" data-id="${index}">下载 .pem</a>
                            <span> | </span>
                            <a href="#" class="downKey" data-id="${index}">下载 .key</a>
                            <span> | </span>
                            <a href="#" class="delete" data-id="${i}">删除</a>
                            <span> | </span>
                            <a href="#" class="update" data-id="${index}">续期</a>
                        </td>
                    </tr>
                    <pre id="td-pem-${index}" class="d-none">${pem}</pre>
                    <pre id="td-key-${index}" class="d-none">${key}</pre>
                    <pre id="td-domain-${index}" class="d-none">${domain}</pre>
                `;
                dataDiv.innerHTML += item;
            });
        } else {
            document.querySelector('.q-table').innerHTML = "<p>您还没有申请任何一个证书，请前往 <a href='../apply/'>申请证书</a> 页面开始~</p>";
        };



        const guoqiTimes = document.querySelectorAll('.guoqi-time');
        function updateGuoqiTimes() {
            guoqiTimes.forEach(i => {
                const now = new Date();
                let time = (new Date((new Date(i.getAttribute('data-time'))).getTime() + 90 * 24 * 60 * 60 * 1000)) - now;
                if (time < 0 || time === 0) {
                    i.textContent = '已过期';
                } else {
                    const days = Math.floor(time / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((time % (1000 * 60)) / 1000);
                    const timeOut = `${days}天 ${hours}小时 ${minutes}分${seconds}`;
                    i.textContent = timeOut;
                };
            });
        }
        setInterval(updateGuoqiTimes, 1000);
        updateGuoqiTimes();



        const downPemA = document.querySelectorAll('a.downPem');
        downPemA.forEach(function (i) {
            i.addEventListener('click', function (event) {
                event.preventDefault();
                const dataId = this.getAttribute('data-id');
                const pemPre = document.getElementById('td-pem-' + dataId);
                const domainPre = document.getElementById('td-domain-' + dataId);

                const domains = domainPre.textContent || domainPre.innerText;
                const pem = pemPre.textContent || pemPre.innerText;
                const blob = new Blob([pem], { type: 'application/x-pem-file' });
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'ZSencrypt_' + domains + '.pem';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                window.URL.revokeObjectURL(downloadLink.href);
            });
        });

        const downKeyA = document.querySelectorAll('a.downKey');
        downKeyA.forEach(function (i) {
            i.addEventListener('click', function (event) {
                event.preventDefault();
                const dataId = this.getAttribute('data-id');
                const keyPre = document.getElementById('td-key-' + dataId);
                const domainPre = document.getElementById('td-domain-' + dataId);

                const domains = domainPre.textContent || domainPre.innerText;
                const pem = keyPre.textContent || keyPre.innerText;
                const blob = new Blob([pem], { type: 'application/x-key-file' });
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = 'ZSencrypt_' + domains + '.key';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                window.URL.revokeObjectURL(downloadLink.href);
            });
        });

        const deleteLinks = document.querySelectorAll('.delete');
        deleteLinks.forEach(i => {
            i.addEventListener('click', function (event) {
                event.preventDefault();
                const dataIndex = this.getAttribute('data-id');
                if (confirm('您确定要删除吗？此操作将不可逆 ...')) {
                    data.splice(dataIndex, 1);
                    localStorage.setItem('q-manageDataPairs', JSON.stringify(data));
                    zsQ.tc('正在删除 ...', 1000);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                };
            });
        });

        const updateLinks = document.querySelectorAll('.update');
        updateLinks.forEach(i => {
            i.addEventListener('click', function (event) {
                event.preventDefault();
                const dataIndex = this.getAttribute('data-id');
                const domainPre = document.getElementById('td-domain-' + dataIndex);

                const domains = domainPre.textContent || domainPre.innerText;
                window.location.href = `/apply/?domain=${domains}&type=0`;
            });
        });

    }, []);

    return (<>

        <Head>
            <title>{`证书管理 | ${zsQ.title}`}</title>
        </Head>
        <Page type='w100'>
            <span id='tagid'>manage</span>
            <h1 className='display-5 mb-5'>证书管理</h1>
            <div className='q-table'>
                <table className="table table-bordered m-0 p-0">
                    <thead>
                        <tr>
                            <td>序号</td>
                            <td>域名</td>
                            <td>预计到期时间</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody id="dataDiv"></tbody>
                </table>
            </div>
        </Page>

    </>)
};
