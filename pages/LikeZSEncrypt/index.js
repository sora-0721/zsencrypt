import Head from "next/head";
import { Page, zsQ } from "@components/main";

export default () => {

    return (<>

        <Head>
            <title>{`捐助 ZSEncrypt | ${zsQ.title}`}</title>
        </Head>
        <Page>
            <span id="tagid">like</span>

            <div className="mb-5">
                <h1 className="display-5 mb-4">捐助 ZSEncrypt</h1>
                <div className="fs-14">
                    <p className="mb-2">ZSEncrypt 将始终免费地提供无限量的 Let's Encrypt SSL/TLS 证书申请。</p>
                    <p className="mb-4">如果 ZSEncrypt 帮助了您，可选择性地考虑捐赠支持 ZeoSeven ，那将使 ZeoSeven 不必担心资金问题地始终开发和完善 ZSEncrypt 。 <a href="https://zeoseven.com/#关于" target="_blank">关于 ZeoSeven</a></p>
                </div>
            </div>

            <div className="mb-5 like-img text-center">
                <div className="row row-cols-2 row-cols-lg-3 justify-content-center">

                    <div className="col p-4">
                        <img src="https://zeoseven.com/_const/s/pay/wechat-v1.webp" />
                        <p className="fs-14">使用 微信®</p>
                    </div>

                    <div className="col p-4">
                        <img src="https://zeoseven.com/_const/s/pay/alipay-v1.webp" />
                        <p className="fs-14">使用 支付宝®</p>
                    </div>

                </div>
                <div className="fs-12">
                    Or use <a href="https://www.paypal.com/paypalme/zeoseven" target="_blank">PayPal</a>.
                </div>
            </div>
        </Page>

    </>)

};
