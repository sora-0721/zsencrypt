import Head from "next/head";
import { useEffect } from "react";

export default function () {

    useEffect(() => {
        window.location.href = "/home/";
    }, []);

    return (
        <Head>
            <meta name="robots" content="noindex" />
        </Head>
    );

};