(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{4421:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return n(4980)}])},4980:function(e,t,n){"use strict";n.r(t);var a=n(5893),c=n(7294),d=n(9008),o=n.n(d),i=n(8841);t.default=()=>((0,c.useEffect)(()=>{let e=document.getElementById("dataDiv"),t=JSON.parse(localStorage.getItem("q-manageDataPairs"))||[];0!==t.length?(e.innerHTML="",t.forEach((t,n)=>{let a="未知",c=t.cert||a,d=t.key||a,o=t.domains||a,i=n+1,l="\n                    <tr>\n                        <td># ".concat(i,"</td>\n                        <td>").concat(o,'</td>\n                        <td class="guoqi-time" data-time="').concat(t.time,'"></td>\n                        <td>\n                            <a href="#" class="downPem" data-id="').concat(i,'">下载 .pem</a>\n                            <span> | </span>\n                            <a href="#" class="downKey" data-id="').concat(i,'">下载 .key</a>\n                            <span> | </span>\n                            <a href="#" class="delete" data-id="').concat(n,'">删除</a>\n                            <span> | </span>\n                            <a href="#" class="update" data-id="').concat(i,'">续期</a>\n                        </td>\n                    </tr>\n                    <pre id="td-pem-').concat(i,'" class="d-none">').concat(c,'</pre>\n                    <pre id="td-key-').concat(i,'" class="d-none">').concat(d,'</pre>\n                    <pre id="td-domain-').concat(i,'" class="d-none">').concat(o,"</pre>\n                ");e.innerHTML+=l})):document.querySelector(".q-table").innerHTML="<p>您还没有申请任何一个证书，请前往 <a href='../apply/'>申请证书</a> 页面开始~</p>";let n=document.querySelectorAll(".guoqi-time");function a(){n.forEach(e=>{let t=new Date,n=new Date(new Date(e.getAttribute("data-time")).getTime()+7776e6)-t;if(n<0||0===n)e.textContent="已过期";else{let t="".concat(Math.floor(n/864e5),"天 ").concat(Math.floor(n%864e5/36e5),"小时 ").concat(Math.floor(n%36e5/6e4),"分").concat(Math.floor(n%6e4/1e3));e.textContent=t}})}setInterval(a,1e3),a(),document.querySelectorAll("a.downPem").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("data-id"),n=document.getElementById("td-pem-"+t),a=document.getElementById("td-domain-"+t),c=a.textContent||a.innerText,d=new Blob([n.textContent||n.innerText],{type:"application/x-pem-file"}),o=document.createElement("a");o.href=window.URL.createObjectURL(d),o.download="ZSencrypt_"+c+".pem",document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(o.href)})}),document.querySelectorAll("a.downKey").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("data-id"),n=document.getElementById("td-key-"+t),a=document.getElementById("td-domain-"+t),c=a.textContent||a.innerText,d=new Blob([n.textContent||n.innerText],{type:"application/x-key-file"}),o=document.createElement("a");o.href=window.URL.createObjectURL(d),o.download="ZSencrypt_"+c+".key",document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(o.href)})}),document.querySelectorAll(".delete").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let n=this.getAttribute("data-id");confirm("您确定要删除吗？此操作将不可逆 ...")&&(t.splice(n,1),localStorage.setItem("q-manageDataPairs",JSON.stringify(t)),i.c0.tc("正在删除 ...",1e3),setTimeout(()=>{window.location.reload()},1500))})}),document.querySelectorAll(".update").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("data-id"),n=document.getElementById("td-domain-"+t),a=n.textContent||n.innerText;window.location.href="/apply/?domain=".concat(a,"&type=0")})})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"证书管理 | ".concat(i.c0.title)})}),(0,a.jsxs)(i.T3,{type:"w100",children:[(0,a.jsx)("span",{id:"tagid",children:"manage"}),(0,a.jsx)("h1",{className:"display-5 mb-5",children:"证书管理"}),(0,a.jsx)("div",{className:"q-table",children:(0,a.jsxs)("table",{className:"table table-bordered m-0 p-0",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"序号"}),(0,a.jsx)("td",{children:"域名"}),(0,a.jsx)("td",{children:"预计到期时间"}),(0,a.jsx)("td",{children:"操作"})]})}),(0,a.jsx)("tbody",{id:"dataDiv"})]})})]})]}))}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4421)}),_N_E=e.O()}]);