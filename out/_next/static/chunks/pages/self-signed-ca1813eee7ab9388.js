(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{2175:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/self-signed",function(){return n(8722)}])},8722:function(e,s,n){"use strict";n.r(s);var a=n(5893),l=n(7294),t=n(9008),i=n.n(t),r=n(2079),c=n.n(r);s.default=e=>{let{dTitle:s,copy:n}=e,[t,r]=(0,l.useState)(null),[o,d]=(0,l.useState)(""),[m,u]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),[p,j]=(0,l.useState)("d-none"),[v,f]=(0,l.useState)(1),[N,g]=(0,l.useState)(2048),b=async()=>{j(""),setTimeout(()=>{try{let e=c().pki.rsa.generateKeyPair(N),s=c().pki.privateKeyToPem(e.privateKey);c().pki.publicKeyToPem(e.publicKey);let n=c().pki.createCertificate();n.publicKey=e.publicKey,n.serialNumber="01",n.validity.notBefore=new Date,n.validity.notAfter=new Date,n.validity.notAfter.setFullYear(n.validity.notBefore.getFullYear()+v);let a=[{name:"commonName",value:t},{name:"countryName",value:"US"}];n.setSubject(a),n.setIssuer([{name:"commonName",value:t},{name:"countryName",value:"US"}]),n.setExtensions([{name:"basicConstraints",cA:!1},{name:"keyUsage",digitalSignature:!0,keyEncipherment:!0,dataEncipherment:!0},{name:"extKeyUsage",serverAuth:!0},{name:"subjectAltName",altNames:[{type:2,value:t}]}]),n.sign(c().pki.privateKeyFromPem(s),c().md.sha256.create());let l=c().pki.certificateToPem(n);j("d-none"),d(l),u(s)}catch(e){j("d-none"),x(e.message)}},1)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"自签名证书 | ".concat(s)})}),(0,a.jsx)("span",{id:"tagid",children:"self-signed"}),(0,a.jsx)("h1",{className:"display-5 mb-5",children:"自签名证书"}),(0,a.jsx)("p",{className:"mb-5",children:"自签名证书不建议用于公开站点 TLS/SSL 加密，因为它不会被浏览器所信任。"}),(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("div",{className:"mb-3",children:(0,a.jsx)("input",{type:"text",value:t,className:"form-control q-form",onChange:e=>r(e.target.value),placeholder:"输入域名 ..."})}),(0,a.jsxs)("div",{className:"input-group mb-3",children:[(0,a.jsxs)("select",{value:v,className:"form-control q-form",onChange:e=>f(parseInt(e.target.value,10)),children:[(0,a.jsx)("option",{value:1,children:"1 年"}),(0,a.jsx)("option",{value:2,children:"2 年"}),(0,a.jsx)("option",{value:3,children:"3 年"}),(0,a.jsx)("option",{value:5,children:"5 年"}),(0,a.jsx)("option",{value:10,children:"10 年"}),(0,a.jsx)("option",{value:15,children:"15 年"}),(0,a.jsx)("option",{value:20,children:"20 年"}),(0,a.jsx)("option",{value:25,children:"25 年"}),(0,a.jsx)("option",{value:30,children:"30 年"}),(0,a.jsx)("option",{value:40,children:"40 年"}),(0,a.jsx)("option",{value:50,children:"50 年"}),(0,a.jsx)("option",{value:75,children:"75 年"})]}),(0,a.jsxs)("select",{value:N,className:"form-control q-form",onChange:e=>g(parseInt(e.target.value,10)),children:[(0,a.jsx)("option",{value:512,children:"RSA 512"}),(0,a.jsx)("option",{value:1024,children:"RSA 1024"}),(0,a.jsx)("option",{value:2048,children:"RSA 2048"}),(0,a.jsx)("option",{value:3072,children:"RSA 3072"}),(0,a.jsx)("option",{value:4096,children:"RSA 4096"}),(0,a.jsx)("option",{value:8192,children:"RSA 8192"})]})]}),(0,a.jsx)("div",{className:"text-end",children:(0,a.jsxs)("button",{onClick:b,className:"btn-q",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-lightning-fill",viewBox:"0 0 16 16",children:(0,a.jsx)("path",{d:"M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"})}),(0,a.jsxs)("span",{className:"ms-2",children:["生成证书 ",(0,a.jsx)("em",{children:"Go!"})]})]})})]}),(0,a.jsx)("div",{className:"".concat(p," mb-3"),children:(0,a.jsx)("span",{class:"spinner-border text-dark spinner-border-sm me-2",role:"status"})}),(0,a.jsx)("div",{className:"mb-3",style:{color:"#cc0000",fontWeight:"700"},children:!h||o||m?null:(0,a.jsx)("p",{children:"Cannot read properties of null (reading 'length')"===h?"域名输入不能为空 ...":h})}),(0,a.jsxs)("div",{className:"row mb-4",children:[(0,a.jsx)("div",{className:"col-6",children:o&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",{value:o,readOnly:!0,rows:"10",className:"form-control q-form fs-14"}),(0,a.jsx)("p",{className:"mt-2 text-end",children:(0,a.jsx)("a",{href:"javascript:;",onClick:()=>n(o),children:"复制证书"})})]})}),(0,a.jsx)("div",{className:"col-6",children:m&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("textarea",{value:m,readOnly:!0,rows:"10",className:"form-control q-form fs-14"}),(0,a.jsx)("p",{className:"mt-2 text-start",children:(0,a.jsx)("a",{href:"javascript:;",onClick:()=>n(m),children:"复制私钥"})})]})})]}),o&&m?(0,a.jsx)("div",{className:"text-center",children:(0,a.jsxs)("button",{onClick:()=>window.location.reload(),className:"btn-q fw-bold",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-clockwise",viewBox:"0 0 16 16",children:[(0,a.jsx)("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),(0,a.jsx)("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})]}),(0,a.jsx)("span",{className:"ms-2",children:"再申请一张！"})]})}):null]})}},2678:function(){},5819:function(){},4112:function(){}},function(e){e.O(0,[79,888,774,179],function(){return e(e.s=2175)}),_N_E=e.O()}]);