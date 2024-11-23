import Head from "next/head";

export default ({ dTitle }) => {
    return (<>
        <Head>
            <title>{`更新日志 | ${dTitle}`}</title>
        </Head>
        <span id="tagid">updatelogs</span>
            <div className="updatelogs">
                <h1 className="display-5 mb-5">更新日志</h1>




                <h3>BETA 2
                    <p>2024-11-23 晚</p>
                </h3>
                <p>—— 合并 “秋の工具箱” 的 “自签名证书” 子功能。</p>



                <h3>BETA 1
                    <p>2024-11-23 黄昏</p>
                </h3>
                <p>—— 提供更详尽的文档来进行参照。</p>
                <p>—— 扩展记忆能力，将 ACME 账户私钥 和 证书私钥 全部自动处理并记忆在本地浏览器。</p>
                <p>—— 新增 “设置” 页面，可以查看、删除及输入 ZSEncrypt 的一切可变需存储数据，并支持导出和导入。</p>
                <p>—— 原是 “秋の工具箱” 的一个子功能，现在将其独立出来称为 “ZSEncrypt” ，单独维护，并提供更强的易用性。</p>





            </div>
    </>)
};