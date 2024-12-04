import { useEffect } from 'react'

export default ({ error }) => {

    useEffect(() => {

        const msg = error ? error.message || '' : '';
        const dig = error ? ` _dig: ${error.digest}` || '' : '';

        window.location.href = "/info/errorPage/?type=appError&msg=" + msg + dig;

    }, [])

};