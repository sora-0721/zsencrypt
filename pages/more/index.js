import Head from "next/head";
import { SmallPage, dTitle } from "@components/main";

export default function () {

    return (<>
        <Head>
            <title>{`关于 ${dTitle}`}</title>
        </Head>
        <SmallPage name="关于 Certple">
            <div className="mb-5 fw-bold text-center p-5 rounded-5" style={{ backgroundColor: "#00cc0010" }}>
                <p className="mb-2" style={{ color: "#00cc00" }}>Certple</p>
                <p className="h3" style={{ fontFamily: "serif" }}>简单快速的申请免费 TLS/SSL 证书</p>
            </div>
            <div>
                <p className="mb-4">© 2025-2026 qingqiuyao & wxy</p>
                <div className="fs-12 color-9">
                    <p>Next.js: ^16</p>
                    <p>React: ^19</p>
                    <p>ACME HTML Web Browser Client: 1.0.230820</p>
                    <p>Bootstrap: ^5</p>
                </div>
            </div>
        </SmallPage>
    </>);
};