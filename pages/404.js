import Head from "next/head"

export default function () {
    return (
        <>
            <Head>
                <title>{`404 Not Found | ZeoSeven`}</title>
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