(this["webpackJsonpnear-storage-basic-demo"]=this["webpackJsonpnear-storage-basic-demo"]||[]).push([[0],{101:function(e,t){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(66),c=n(62),i=n(65),s=n(19),l=(n(40),n(7)),u=n(0);function d(e){var t=e.onSubmit;return Object(u.jsx)("form",{children:Object(u.jsx)("button",{type:"button",name:"deposit",onClick:function(e){e.preventDefault(),t()},children:"Deposit"})})}function h(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["This app demonstrates the client-side usage of ",Object(u.jsx)("a",{href:"https://near.storage",target:"_blank",rel:"noreferrer",children:"the NEAR to Filecoin bridge"}),", allowing ",Object(u.jsx)("a",{href:"https://near.org",target:"_blank",rel:"noreferrer",children:"NEAR"})," users to store data on the ",Object(u.jsx)("a",{href:"https://filecoin.io",target:"_blank",rel:"noreferrer",children:"Filecoin"})," network."]}),Object(u.jsxs)("p",{children:['This is version 0 of the demo app. You can deposit and release funds, query for the status of a "file" or deal, and more. This is a beta release demo, do not store personal, encrypted, or illegal data. Data will not be available permanently on either Filecoin or IPFS. See the ',Object(u.jsx)("a",{href:"https://near.storage/terms",target:"_blank",rel:"noreferrer",children:"terms of service"})," before using the demo."]}),Object(u.jsx)("p",{children:"Go ahead and sign in to try it out!"})]})}function b(e){var t=e.onSubmit,n=Object(l.useState)(),r=Object(s.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{children:Object(u.jsxs)("fieldset",{id:"fieldset",children:[Object(u.jsx)("input",{type:"file",name:"file",onChange:function(e){e.target.files&&o(e.target.files[0])}}),Object(u.jsx)("button",{type:"button",name:"upload",onClick:function(e){e.preventDefault(),a&&t(a),o(void 0)},children:"Upload"})]})})}var p=n(30),f=function(e){var t=e.api,n=e.currentUser,r=Object(l.useState)([]),a=Object(s.a)(r,2),o=a[0],c=a[1],f=Object(l.useState)(!1),j=Object(s.a)(f,2),O=j[0],g=j[1];Object(l.useEffect)((function(){n&&t.hasDeposit().then(g)}),[n,t]);var m=n&&n.accountId;return Object(u.jsxs)("main",{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Textile Near Storage Demo"}),m?Object(u.jsx)("button",{onClick:function(){t.signOut(),window.location.replace(window.location.origin+window.location.pathname)},children:"Log out"}):Object(u.jsx)("button",{onClick:function(){t.requestSignIn({})},children:"Log in"})]}),Object(u.jsx)("p",{children:O?"You got \u24c3 in here!":"Deposit some funds, ".concat(m,"!")}),m?Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{onSubmit:function(){t.addDeposit().then((function(){return g(!0)})).catch((function(e){return alert(e.message)}))}}),O?Object(u.jsx)(b,{onSubmit:function(e){t.store(e).then((function(e){c([].concat(Object(i.a)(o),[e])),alert("Your file is available via IPFS:\n".concat(e.cid["/"]))})).catch((function(e){return alert(e.message)}))}}):null,Object(u.jsx)("button",{type:"button",name:"release",onClick:function(e){e.preventDefault(),t.releaseDeposits().then((function(){alert("check your wallet in case of released funds"),window.location.reload()})).catch((function(e){return alert(e.message)}))},children:"Release"}),Object(u.jsx)("br",{}),o&&Object(u.jsx)("h2",{children:"Your uploads"}),o.map((function(e){return Object(u.jsxs)("p",{children:[e.cid["/"],Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"button",name:"copy",onClick:function(t){t.preventDefault(),navigator.clipboard.writeText(e.cid["/"])},children:"Copy CID"}),Object(u.jsx)("button",{type:"button",name:"status",onClick:function(n){var r;n.preventDefault(),(r=e.id)?t.status(r).then((function(e){var t=e.request;alert('Your file status is currently: "'.concat(p.Status[t.status_code],'"!'))})).catch((function(e){return alert(e.message)})):console.warn("no 'active' file, upload a file first")},children:"Status"}),Object(u.jsx)("br",{})]})}))]}):Object(u.jsx)(h,{})]})},j=n(63),O=n.n(j),g=n(64),m=n.n(g),x=n(18),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},v=(n(133),Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}));function S(){return(S=Object(c.a)(a.a.mark((function e(){var t,n,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m()(v.NODE_ENV||"testnet"),e.next=3,Object(x.connect)(Object(o.a)({deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}},t));case 3:return n=e.sent,r=new x.WalletConnection(n,null),e.next=7,Object(p.init)(r,{contractName:"filecoin-bridge-edge"});case 7:if(c=e.sent,!r.getAccountId()){e.next=14;break}return e.t0=r.getAccountId(),e.next=12,r.account().state();case 12:e.t1=e.sent.amount,i={accountId:e.t0,balance:e.t1};case 14:return e.abrupt("return",{currentUser:i,api:c});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return S.apply(this,arguments)}().then((function(e){var t=e.api,n=e.currentUser;O.a.render(Object(u.jsx)(f,{api:t,currentUser:n}),document.getElementById("root"))})),w()},64:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=n.CONTRACT_NAME||"filecoin-bridge.testnet";e.exports=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:r,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"production":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:r,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:r,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(n.HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:r};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:r,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:r,masterAccount:"test.near"};default:throw Error("Misconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},77:function(e,t){},84:function(e,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.524af8c6.chunk.js.map