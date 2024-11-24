import React, { useState } from 'react';
import Head from 'next/head';
import forge from 'node-forge';

export default ({ dTitle, copy }) => {
    const [domain, setDomain] = useState(null);
    const [certificate, setCertificate] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('d-none');
    const [validityPeriod, setValidityPeriod] = useState(1);
    const [rsaKeySize, setRsaKeySize] = useState(2048);

    const generateCertificate = async () => {
        setLoading('');
        setTimeout(() => {
            try {
                const keys = forge.pki.rsa.generateKeyPair(rsaKeySize);
                const privateKeyPem = forge.pki.privateKeyToPem(keys.privateKey);
                const publicKeyPem = forge.pki.publicKeyToPem(keys.publicKey);
                const cert = forge.pki.createCertificate();
                cert.publicKey = keys.publicKey;
                cert.serialNumber = '01';
                cert.validity.notBefore = new Date();
                cert.validity.notAfter = new Date();
                cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + validityPeriod);
                const attrs = [
                    {
                        name: 'commonName',
                        value: domain,
                    },
                    {
                        name: 'countryName',
                        value: 'US',
                    },
                ];
                cert.setSubject(attrs);
                cert.setIssuer([
                    {
                        name: 'commonName',
                        value: domain,
                    },
                    {
                        name: 'countryName',
                        value: 'US',
                    },
                ]);

                cert.setExtensions([
                    {
                        name: 'basicConstraints',
                        cA: false,
                    },
                    {
                        name: 'keyUsage',
                        digitalSignature: true,
                        keyEncipherment: true,
                        dataEncipherment: true,
                    },
                    {
                        name: 'extKeyUsage',
                        serverAuth: true,
                    },
                    {
                        name: 'subjectAltName',
                        altNames: [
                            {
                                type: 2,
                                value: domain,
                            },
                        ],
                    },
                ]);
                cert.sign(forge.pki.privateKeyFromPem(privateKeyPem), forge.md.sha256.create());
                const pemCert = forge.pki.certificateToPem(cert);
                setLoading('d-none');
                setCertificate(pemCert);
                setPrivateKey(privateKeyPem);
            } catch (err) {
                setLoading('d-none');
                setError(err.message);
            }
        }, 500);
    };

    return (<>
        <Head>
            <title>{`自签名证书 | ${dTitle}`}</title>
        </Head>
        <span id='tagid'>self-signed</span>
        <h1 className='display-5 mb-5'>自签名证书</h1>
        <p className='mb-5'>自签名证书不建议用于公开站点 TLS/SSL 加密，因为它不会被浏览器所信任。</p>

        <div className='mb-3'>
            <div className='mb-3'>
                <input
                    type="text"
                    value={domain}
                    className='form-control q-form'
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="输入域名 ..."
                />
            </div>
            <div className='input-group mb-3'>
                <select value={validityPeriod} className='form-control q-form' onChange={(e) => setValidityPeriod(parseInt(e.target.value, 10))}>
                    <option value={1}>1 年</option>
                    <option value={2}>2 年</option>
                    <option value={3}>3 年</option>
                    <option value={5}>5 年</option>
                    <option value={10}>10 年</option>
                    <option value={15}>15 年</option>
                    <option value={20}>20 年</option>
                    <option value={25}>25 年</option>
                    <option value={30}>30 年</option>
                    <option value={40}>40 年</option>
                    <option value={50}>50 年</option>
                    <option value={75}>75 年</option>
                </select>
                <select value={rsaKeySize} className='form-control q-form' onChange={(e) => setRsaKeySize(parseInt(e.target.value, 10))}>
                    <option value={512}>RSA 512</option>
                    <option value={1024}>RSA 1024</option>
                    <option value={2048}>RSA 2048</option>
                    <option value={3072}>RSA 3072</option>
                    <option value={4096}>RSA 4096</option>
                    <option value={8192}>RSA 8192</option>
                </select>
            </div>
            <div className='text-end'>
                <button onClick={generateCertificate} className='btn-q'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                    </svg><span className='ms-2'>生成证书 <em>Go!</em></span>
                </button>
            </div>
        </div>

        <div className={`${loading} mb-3`}>
            <span class="spinner-border text-dark spinner-border-sm me-2" role="status"></span>
        </div>

        <div className='mb-3' style={{ color: '#cc0000', fontWeight: '700' }}>
            {error && !certificate && !privateKey ? <p>{
                error === "Cannot read properties of null (reading 'length')" ? "域名输入不能为空 ..." :
                    error
            }</p> : null}
        </div>

        <div className='row mb-4'>
            <div className='col-6'>
                {certificate &&
                    <>
                        <textarea value={certificate} readOnly rows="10" className='form-control q-form fs-14'></textarea>
                        <p className='mt-2 text-end'>
                            <a href='javascript:;' onClick={() => copy(certificate)}>复制证书</a>
                        </p>
                    </>
                }
            </div>
            <div className='col-6'>
                {privateKey &&
                    <>
                        <textarea value={privateKey} readOnly rows="10" className='form-control q-form fs-14'></textarea>
                        <p className='mt-2 text-start'>
                            <a href='javascript:;' onClick={() => copy(privateKey)}>复制私钥</a>
                        </p>
                    </>
                }
            </div>
        </div>
        {
            certificate && privateKey ?
                <div className='text-center'>
                    <button onClick={() => window.location.reload()} className="btn-q fw-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg><span className="ms-2">再申请一张！</span>
                    </button>
                </div>
            : null
        }

    </>);
};

