(this.webpackJsonpstats=this.webpackJsonpstats||[]).push([[0],{38:function(e,t,n){},68:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t){},82:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),s=n(56),a=n.n(s),i=(n(68),n(23)),o=n(15),d=(n(38),n(17)),j=n(1),l=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1],a=Object(r.useRef)(!1);return Object(r.useEffect)((function(){if(null===e||void 0===e?void 0:e.tokenId)return fetch("https://us-central1-universal-stats-326006.cloudfunctions.net/metadata?tokenId=".concat(e.tokenId)).then((function(e){return e.json()})).then((function(e){a.current||s(e.image)})),function(){a.current=!0}})),Object(j.jsxs)("div",{className:"nft",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("code",{children:["Batch ",e.tokenId.substring(65)," | Type ",e.tokenId.substring(0,8).toUpperCase()]})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:c,alt:"",width:"200px"})})]})},b=function(e){return Object(j.jsx)("div",{className:"nft-collection",children:e.tokenIds.map((function(e,t){return Object(j.jsx)(i.b,{to:"/nfts/".concat(e),children:Object(j.jsx)(l,{tokenId:e})},t)}))})},h=["0xb9ef5bf760b707b31dd44b7bc312e87404c96ebc2e7ff9bb38601faacc65cde0","0xca643a81877592fe6931e3c8ec0a507203c710573f458bae16b69b8b640c40d0","0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"];function u(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"center center-text",children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)("a",{href:"https://discord.gg/u89tDPVXHx",target:"_blank",rel:"noreferrer",children:"Discord"})," ",Object(j.jsx)("a",{href:"https://twitter.com/HansKeebler",target:"_blank",rel:"noreferrer",children:"Twitter"})," ",Object(j.jsx)("a",{href:"https://opensea.io/collection/universal-stats",target:"_blank",rel:"noreferrer",children:"OpenSea"})]}),Object(j.jsx)("h2",{children:"Scalable and Useful Multi-Purpose NFT"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{children:"A unique NFT that uses pseudo-random token ID as its metadata value. This token does not assume or enforce any particular usage scenarios. We facilitate countless integration opportunities."}),Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{children:["For more information, read the ",Object(j.jsx)("a",{href:"/#/docs",children:"docs"}),"."]}),Object(j.jsx)("h1",{children:Object(j.jsx)(i.b,{to:"/nfts",className:"mint-link",children:"Mint a New One"})}),Object(j.jsx)("h3",{children:"Usage Examples"}),Object(j.jsx)(b,{tokenIds:h})]})})}var x=n(3),O=n.n(x),f=n(33),p=n(28),m=new(n(63).a)({supportedChainIds:[1,4]});function v(){var e=Object(p.b)(),t=e.activate,n=e.active,r=e.deactivate,c=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(m);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(j.jsx)("button",{onClick:s,children:"Disconnect"}):Object(j.jsx)("button",{onClick:c,children:"Connect"})}n(79);function w(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:Object(j.jsx)("a",{href:"/",children:"Universal Stats"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/nfts",children:"NFTs"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/docs",children:"Docs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/stattz/stattz.github.io",rel:"noreferrer",target:"_blank",children:"GitHub"})}),Object(j.jsx)("li",{children:Object(j.jsx)(v,{})})]})]})}var g={1:"0x8c7d1d8f4b84e70de2b409a897568175955610cf",4:"0x947de6015D04c9c59FFF36c48D52D1d9E29392D0"},k=["0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"];function y(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Introduction"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Universal Stats NFT"})," is a project that aims to solve a fundamental issue in how to integrate NFTs into different applications and make them more useful."]}),Object(j.jsx)("p",{children:"Universal Stats is not an art project. It is a framework that allows developers to build new experiences and enrich existing ones for users that hold this token."}),Object(j.jsxs)("h4",{children:["Contract can be inspected ",Object(j.jsx)("a",{href:"https://etherscan.io/address/".concat(g[1]),target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(j.jsx)("h2",{children:"How Does It Work"}),Object(j.jsxs)("h4",{children:[Object(j.jsx)("b",{children:"Universal Stats"})," separates the token state from state representation."]}),Object(j.jsxs)("p",{children:["With most NFTs when you call mint function, ",Object(j.jsx)("b",{children:"token ID"})," is incremented by one, and the state representation gets stored in the token URI field. Token URI ends up being something specific, either a URL to a 3rd party resource or some implementation-specific bag-of-words-like magic string."]}),Object(j.jsxs)("p",{children:["That is where Universal Stats differ. When a new token gets minted, ",Object(j.jsx)("b",{children:"token ID"})," gets generated pseudo-randomly. We end up with a unique ",Object(j.jsx)("code",{children:"256-bit"})," representation of the NFT. This ",Object(j.jsx)("b",{children:"token ID"})," can then be represented by a hexadecimal string:"]}),Object(j.jsx)("pre",{children:Object(j.jsx)("code",{children:"0x9a390d7a5aef2f5f7f3302bfcdc721bc1f9c4c2c1a752b9677eb7ad2c5e5a340"})}),Object(j.jsxs)("p",{children:["Each string starts with ",Object(j.jsx)("code",{children:"0x"}),", followed by ",Object(j.jsx)("code",{children:"64 nibbles (or characters)"})," representing ",Object(j.jsx)("b",{children:"4 bits each"}),". "]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Note"})," that we do not encode any random words or require anyone to visit some URI. Each token holder has this unique ",Object(j.jsx)("code",{children:"256-bit"})," ",Object(j.jsx)("b",{children:"token ID"})," that is theirs and can be easily retrieved."]}),Object(j.jsx)("h2",{children:"Use Cases"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Universal Stats"})," framework allows participants to build new, never-before-seen experiences."]}),Object(j.jsx)("h4",{children:"Here is an example token representation:"}),Object(j.jsx)(b,{tokenIds:k}),Object(j.jsxs)("p",{children:["In the example above, we just took chunks of the ",Object(j.jsx)("b",{children:"token ID"}),", for example, the first 6 nibbles, represent a type property, nibbles 7-8 represent the base strength of the character so on and so forth. If you are interested to see the whole calculation have a look ",Object(j.jsx)("a",{href:"https://github.com/stattz/generator/blob/master/json_generator.py",target:"_blank",rel:"noreferrer",children:"here"}),". Note that these rules on how to divide ",Object(j.jsx)("b",{children:"token ID"})," are arbitrary and we could have gone with a completely different theme e.g. space robots or medieval pets."]}),Object(j.jsx)("h3",{children:"Random Ideas"}),Object(j.jsxs)("p",{children:["Are you building a ",Object(j.jsx)("code",{children:"MMORPG"}),", and want to let users have unique traits, items, inventory, or what have you? Just do it!"]}),Object(j.jsxs)("p",{children:["Are you building a ",Object(j.jsx)("code",{children:"FPS"})," game and want to add unique attack modifiers so users can feel appreciated and unique in your game? That is a great idea!"]}),Object(j.jsx)("p",{children:"Are you an artist that wants to build a contract on top of Universal Stats and generate some outer space character for each token based on some predefined traits encoded? Absolutely possible!"}),Object(j.jsxs)("p",{children:["Are you a chess game developer and want to give users unique 8x8 board color schemes based on their Universal Stats NFT where each of the 64 squares maps to each nibble in their ",Object(j.jsx)("b",{children:"token ID"})," to customize their unique board colors? Go for it!"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Universal Stats"})," can be leveraged in numerous gaming, arts, or other entertainment applications. The possibilities are endless, and we want to hear more about your unique idea or project."]}),Object(j.jsxs)("h3",{children:["Please join the community on our ",Object(j.jsx)("a",{href:"https://discord.gg/u89tDPVXHx",target:"_blank",rel:"noreferrer",children:"Discord"})," or ",Object(j.jsx)("a",{href:"https://twitter.com/HansKeebler",target:"_blank",rel:"noreferrer",children:"Twitter"}),"."]}),Object(j.jsx)("h2",{children:"Distribution of Tokens"}),Object(j.jsxs)("p",{children:["Universal Stats tokens are unique, however, it would be unfair if they were too scarce for the majority of people to enjoy them. That is why we introduced a special token creation flow. We will be releasing tokens in batches starting from ",Object(j.jsx)("code",{children:"Batch 0"})," and will go all the way up to ",Object(j.jsx)("code",{children:"Batch 15"}),". The last nibble in your ",Object(j.jsx)("b",{children:"token ID"})," represents which batch the token is from. So for the first ",Object(j.jsx)("code",{children:"20000 tokens"}),", the last nibble will always be ",Object(j.jsx)("code",{children:"0"}),", when ",Object(j.jsx)("code",{children:"Batch 1"})," is released the last nibble will be ",Object(j.jsx)("code",{children:"1"}),", and so on."]}),Object(j.jsx)("h4",{children:"Each batch will have a limited quantity that can not be increased!"}),Object(j.jsxs)("p",{children:["We want to work with our community to decide when to release new batches and are excited about the possibilities this functionality brings. For example, you could only allow users from ",Object(j.jsx)("code",{children:"Batch 0"})," to early access your game, or give them some legendary item, etc."]}),Object(j.jsx)("h2",{children:"How is This Different from Other NFTs"}),Object(j.jsx)("p",{children:"Most NFTs take one of the following routes:"}),Object(j.jsxs)("p",{children:["By pointing Token URI to a 3rd party storage solution like ",Object(j.jsx)("b",{children:"IPFS"})," and having all the NFT data stored there. The problem with this approach is that for a game creator or application developer to integrate with this token, they need to do one of the following:"]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"store some internal mapping and encode predefined knowledge about all possible minted tokens in their game or application;"}),Object(j.jsxs)("li",{children:["or make additional network calls. In the case of ",Object(j.jsx)("b",{children:"IPFS"}),", different communication protocols need to be recognized or implemented, thus increasing the application bloat;"]})]}),Object(j.jsxs)("p",{children:["By encoding metadata string in Token URI directly. The real problem here is that there is no standard on how this data should be formatted. That is why it is error-prone to interact with such NFTs where data could be encoded using arbitrary ",Object(j.jsx)("code",{children:"magic strings"}),", some messy ",Object(j.jsx)("code",{children:"SVG files"}),", or random ",Object(j.jsx)("code",{children:"base64 encoded byte blobs"}),"."]}),Object(j.jsx)("h2",{children:"Get Involved"}),Object(j.jsxs)("p",{children:["All of the code for this project is free and open source, feel free to joint our community. We welcome new members to our ",Object(j.jsx)("a",{href:"https://discord.gg/u89tDPVXHx",target:"_blank",rel:"noreferrer",children:"Discord"})," channel also ",Object(j.jsx)("a",{href:"https://github.com/stattz",target:"_blank",rel:"noreferrer",children:"GitHub"})," issues or pull requests are always appreciated!"]})]})}var I=n(96),N=function(e){var t=Object(p.b)(),n=t.active,c=t.activate,s=Object(r.useState)(!1),a=Object(d.a)(s,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){m.isAuthorized().then((function(e){i||!e||n||c(m),o(!0)})).catch((function(){o(!0)}))}),[i,c,n]),i?e.children:Object(j.jsx)(j.Fragment,{})},S=n(29),T=n(0),F=n(50);n(80);function D(){return Object(j.jsx)("div",{className:"loader",children:"Loading..."})}var U=["function symbol() view returns (string)","function name() view returns (string)","function currentLimit() view returns (uint256)","function mintFee() view returns (uint256)","function currentBatch() view returns (uint256)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)","function mint() payable"];function q(){var e=Object(p.b)(),t=e.chainId,n=e.account,c=e.library,s=e.active,a=Object(r.useState)(""),i=Object(d.a)(a,2),o=i[0],l=i[1],h=Object(r.useState)(""),u=Object(d.a)(h,2),x=u[0],m=u[1],w=Object(r.useState)(S.a.from("0")),k=Object(d.a)(w,2),y=k[0],I=k[1],N=Object(r.useState)(S.a.from("0")),q=Object(d.a)(N,2),B=q[0],_=q[1],H=Object(r.useState)(S.a.from("0")),C=Object(d.a)(H,2),E=C[0],M=C[1],R=Object(r.useState)(S.a.from("0")),P=Object(d.a)(R,2),W=P[0],A=P[1],z=Object(r.useState)([]),G=Object(d.a)(z,2),L=G[0],V=G[1],J=Object(r.useState)(!1),X=Object(d.a)(J,2),K=X[0],Q=X[1],Y=Object(r.useState)(!0),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1],te=g[4];void 0!==t&&(te=g[t]),Object(r.useEffect)((function(){ne()}));var ne=function(){var e=Object(f.a)(O.a.mark((function e(){var t,r,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K||!s||!c){e.next=49;break}return Q(!0),ee(!1),t=new F.a(te,U,c.getSigner()),e.t0=l,e.next=7,t.symbol();case 7:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=m,e.next=12,t.name();case 12:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=_,e.next=17,t.currentLimit();case 17:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=I,e.next=22,t.mintFee();case 22:return e.t7=e.sent,(0,e.t6)(e.t7),e.t8=M,e.next=27,t.currentBatch();case 27:return e.t9=e.sent,(0,e.t8)(e.t9),e.t10=A,e.next=32,t.totalSupply();case 32:return e.t11=e.sent,(0,e.t10)(e.t11),e.next=36,t.balanceOf(n);case 36:r=e.sent,a=[],i=0;case 39:if(!(i<r.toNumber())){e.next=47;break}return e.next=42,t.tokenOfOwnerByIndex(n,i);case 42:o=e.sent,a.push(Object(T.g)(o.toHexString(),32));case 44:i++,e.next=39;break;case 47:V(a),ee(!0);case 49:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K){e.next=11;break}return t=new F.a(te,U,null===c||void 0===c?void 0:c.getSigner()),e.next=4,t.mint({value:y});case 4:return n=e.sent,ee(!1),e.next=8,n.wait();case 8:return e.next=10,ne();case 10:ee(!0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!s)return Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h2",{children:"Come On In"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("small",{className:"center-text",children:[Object(j.jsx)("b",{children:"Note:"})," We recommend using MetaMask ",Object(j.jsx)("br",{}),"or similar injected wallet."]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"connect-button-p",children:Object(j.jsx)(v,{})})]});if(1!==t&&4!==t)return Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("h2",{children:"Only Miannet and Rinkeby are supported"})});if(!$)return Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h3",{children:"One Moment Please"}),Object(j.jsx)(D,{})]});return Object(j.jsxs)("div",{className:"center",children:[Object(j.jsxs)("div",{className:"center",children:[Object(j.jsxs)("h2",{children:[x," (",o,") currently ",W.toNumber()," out of ",B.toNumber()," tokens minted"]}),Object(j.jsxs)("h3",{children:["Current on Batch ",E.toNumber()]}),Object(j.jsx)("br",{}),Object(j.jsxs)("small",{className:"center-text",children:[Object(j.jsx)("b",{children:"Note:"})," In case you do not see your token after minting,",Object(j.jsx)("br",{})," please allow the Ethereum network to catch up and refresh the page."]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:re,disabled:B.toNumber()<=W.toNumber(),className:"claim-button",children:"Mint NFT Token"}),Object(j.jsx)("br",{})]}),Object(j.jsx)(b,{tokenIds:L})]})}var B=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)([]),i=Object(d.a)(a,2),o=i[0],l=i[1],b=Object(r.useRef)(!1);Object(r.useEffect)((function(){if(null===e||void 0===e?void 0:e.tokenId)return fetch("https://us-central1-universal-stats-326006.cloudfunctions.net/metadata?tokenId=".concat(e.tokenId)).then((function(e){return e.json()})).then((function(e){b.current||(s(e.image),l(e.attributes))})),function(){b.current=!0}}));return Object(j.jsxs)("div",{className:"nft",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("code",{children:["Batch ",e.tokenId.substring(65)," | Type ",e.tokenId.substring(0,8).toUpperCase()]})}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:c,alt:"",width:"100%"})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Token state: ",Object(j.jsx)("code",{className:"word-breaker",children:e.tokenId})]})}),Object(j.jsx)("p",{children:"Showcase stats for this NFT:"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Value"})]})}),Object(j.jsx)("tbody",{children:o.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.trait_type}),Object(j.jsx)("td",{children:Object(j.jsxs)("code",{children:[e.value,e.max_value?"/".concat(e.max_value):""]})})]},t)}))})]})]})};function _(){var e=Object(o.f)().tokenId;return Object(j.jsx)(B,{tokenId:e})}function H(e){var t=new I.a(e);return t.pollingInterval=12e3,t}function C(){return Object(j.jsx)(i.a,{children:Object(j.jsx)(p.a,{getLibrary:H,children:Object(j.jsx)(N,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(w,{}),Object(j.jsx)("div",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,children:Object(j.jsx)(u,{})}),Object(j.jsx)(o.a,{path:"/nfts",exact:!0,children:Object(j.jsx)(q,{})}),Object(j.jsx)(o.a,{path:"/nfts/:tokenId",children:Object(j.jsx)(_,{})}),Object(j.jsx)(o.a,{path:"/docs",children:Object(j.jsx)(y,{})})]})})]})})})})}a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.4ed733a9.chunk.js.map