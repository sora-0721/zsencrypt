import Head from "next/head"
import { dTitle } from "@components/main"

export default function () {
    return (
        <>
            <Head>
                <title>{`404 Not Found | ${dTitle}`}</title>
            </Head>

            <span id="tagid"></span>
            <div className='px-sm-5 pt-5'>
                <iframe src={`https://zeoseven.com/_const/d/iframe/httpError/?i=404`}
                    style={{ width: '100%', height: '100vh' }}
                ></iframe>
            </div>

        </>
    )
};