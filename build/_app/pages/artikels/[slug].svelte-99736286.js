import{S as e,i as s,s as t,e as a,k as r,t as i,c as l,a as c,d as n,n as o,g,b as h,f,F as m,h as u,G as p,L as d,j as v,M as w,m as L,o as $,v as b,r as y,w as E,H as R,I as U,N as j}from"../../chunks/vendor-5c855ff4.js";import{H}from"../../chunks/Header-60d582a3.js";function I(e,s,t){const a=e.slice();return a[1]=s[t],a}function x(e){let s,t,p,d,v,w,L,$=e[1].title+"",b=e[1].author+"";return{c(){s=a("a"),t=a("h3"),p=r(),d=a("div"),v=i(b),w=r(),this.h()},l(e){s=l(e,"A",{class:!0,href:!0});var a=c(s);t=l(a,"H3",{class:!0}),c(t).forEach(n),p=o(a),d=l(a,"DIV",{class:!0});var r=c(d);v=g(r,b),r.forEach(n),w=o(a),a.forEach(n),this.h()},h(){h(t,"class","svelte-1bnalxq"),h(d,"class","author svelte-1bnalxq"),h(s,"class","article svelte-1bnalxq"),h(s,"href",L="/artikels/"+e[1].slug)},m(e,a){f(e,s,a),m(s,t),t.innerHTML=$,m(s,p),m(s,d),m(d,v),m(s,w)},p(e,a){1&a&&$!==($=e[1].title+"")&&(t.innerHTML=$),1&a&&b!==(b=e[1].author+"")&&u(v,b),1&a&&L!==(L="/artikels/"+e[1].slug)&&h(s,"href",L)},d(e){e&&n(s)}}}function M(e){let s,t,u,v,w=e[0],L=[];for(let a=0;a<w.length;a+=1)L[a]=x(I(e,w,a));return{c(){s=a("section"),t=a("h2"),u=i("Lees Verder"),v=r();for(let e=0;e<L.length;e+=1)L[e].c();this.h()},l(e){s=l(e,"SECTION",{class:!0});var a=c(s);t=l(a,"H2",{class:!0});var r=c(t);u=g(r,"Lees Verder"),r.forEach(n),v=o(a);for(let s=0;s<L.length;s+=1)L[s].l(a);a.forEach(n),this.h()},h(){h(t,"class","heading svelte-1bnalxq"),h(s,"class","svelte-1bnalxq")},m(e,a){f(e,s,a),m(s,t),m(t,u),m(s,v);for(let t=0;t<L.length;t+=1)L[t].m(s,null)},p(e,[t]){if(1&t){let a;for(w=e[0],a=0;a<w.length;a+=1){const r=I(e,w,a);L[a]?L[a].p(r,t):(L[a]=x(r),L[a].c(),L[a].m(s,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=w.length}},i:p,o:p,d(e){e&&n(s),d(L,e)}}}function k(e,s,t){let{articles:a=[]}=s;return e.$$set=e=>{"articles"in e&&t(0,a=e.articles)},[a]}class T extends e{constructor(e){super(),s(this,e,k,M,t,{articles:0})}}function V(e){let s,t,p,d,I,x,M,k,V,C,A,D,q,S,F,N,O,G,P,z,B,J,K,Q,W,X,Y,Z,_,ee,se,te=e[0].title+"",ae=e[0].author+"",re=(e[0].imageCredit||"Verskaf")+"",ie=e[0].html+"";return document.title=s=e[0].title.replace("<i>","").replace("</i>","")+" - Die Herout",d=new H({}),ee=new T({props:{articles:e[1]}}),{c(){t=a("meta"),p=r(),v(d.$$.fragment),I=r(),x=a("main"),M=a("div"),k=a("h1"),V=r(),C=a("div"),A=i(ae),D=r(),q=a("picture"),S=a("source"),N=r(),O=a("source"),P=r(),z=a("img"),K=r(),Q=a("div"),W=i("Foto: "),X=i(re),Y=r(),Z=a("div"),_=r(),v(ee.$$.fragment),this.h()},l(e){const s=w('[data-svelte="svelte-14ng0h2"]',document.head);t=l(s,"META",{name:!0,content:!0}),s.forEach(n),p=o(e),L(d.$$.fragment,e),I=o(e),x=l(e,"MAIN",{class:!0});var a=c(x);M=l(a,"DIV",{class:!0});var r=c(M);k=l(r,"H1",{class:!0}),c(k).forEach(n),V=o(r),C=l(r,"DIV",{class:!0});var i=c(C);A=g(i,ae),i.forEach(n),r.forEach(n),D=o(a),q=l(a,"PICTURE",{});var h=c(q);S=l(h,"SOURCE",{srcset:!0,type:!0}),N=o(h),O=l(h,"SOURCE",{srcset:!0,type:!0}),P=o(h),z=l(h,"IMG",{class:!0,src:!0,alt:!0}),h.forEach(n),K=o(a),Q=l(a,"DIV",{class:!0});var f=c(Q);W=g(f,"Foto: "),X=g(f,re),f.forEach(n),Y=o(a),Z=l(a,"DIV",{class:!0}),c(Z).forEach(n),a.forEach(n),_=o(e),L(ee.$$.fragment,e),this.h()},h(){h(t,"name","robots"),h(t,"content","noindex"),h(k,"class","svelte-1ibyygf"),h(C,"class","author svelte-1ibyygf"),h(M,"class","articleInfo svelte-1ibyygf"),h(S,"srcset",F="/i/720/"+e[0].imageURL+".webp 1125w, /i/480/"+e[0].imageURL+".webp 750w, /i/240/"+e[0].imageURL+".webp 375w"),h(S,"type","image/webp"),h(O,"srcset",G="/i/720/"+e[0].imageURL+".jpg 1125w, /i/480/"+e[0].imageURL+".jpg 750w, /i/240/"+e[0].imageURL+".jpg 375w"),h(O,"type","image/jpeg"),h(z,"class","heroImg svelte-1ibyygf"),z.src!==(B="/i/720/"+e[0].imageURL+".jpg")&&h(z,"src",B),h(z,"alt",""),h(Q,"class","imgCaption svelte-1ibyygf"),h(Z,"class","content articleContent svelte-1ibyygf"),h(x,"class","svelte-1ibyygf")},m(e,s){m(document.head,t),f(e,p,s),$(d,e,s),f(e,I,s),f(e,x,s),m(x,M),m(M,k),k.innerHTML=te,m(M,V),m(M,C),m(C,A),m(x,D),m(x,q),m(q,S),m(q,N),m(q,O),m(q,P),m(q,z),m(x,K),m(x,Q),m(Q,W),m(Q,X),m(x,Y),m(x,Z),Z.innerHTML=ie,f(e,_,s),$(ee,e,s),se=!0},p(e,[t]){(!se||1&t)&&s!==(s=e[0].title.replace("<i>","").replace("</i>","")+" - Die Herout")&&(document.title=s),(!se||1&t)&&te!==(te=e[0].title+"")&&(k.innerHTML=te),(!se||1&t)&&ae!==(ae=e[0].author+"")&&u(A,ae),(!se||1&t&&F!==(F="/i/720/"+e[0].imageURL+".webp 1125w, /i/480/"+e[0].imageURL+".webp 750w, /i/240/"+e[0].imageURL+".webp 375w"))&&h(S,"srcset",F),(!se||1&t&&G!==(G="/i/720/"+e[0].imageURL+".jpg 1125w, /i/480/"+e[0].imageURL+".jpg 750w, /i/240/"+e[0].imageURL+".jpg 375w"))&&h(O,"srcset",G),(!se||1&t&&z.src!==(B="/i/720/"+e[0].imageURL+".jpg"))&&h(z,"src",B),(!se||1&t)&&re!==(re=(e[0].imageCredit||"Verskaf")+"")&&u(X,re),(!se||1&t)&&ie!==(ie=e[0].html+"")&&(Z.innerHTML=ie);const a={};2&t&&(a.articles=e[1]),ee.$set(a)},i(e){se||(b(d.$$.fragment,e),J||R((()=>{J=U(z,j,{duration:300}),J.start()})),b(ee.$$.fragment,e),se=!0)},o(e){y(d.$$.fragment,e),y(ee.$$.fragment,e),se=!1},d(e){n(t),e&&n(p),E(d,e),e&&n(I),e&&n(x),e&&n(_),E(ee,e)}}}async function C({page:e,fetch:s}){const t=`/artikels/${e.params.slug}.json`,a=await s(t);if(a.ok)return{props:await a.json()}}function A(e,s,t){let{article:a}=s,{suggestedArticles:r}=s;return e.$$set=e=>{"article"in e&&t(0,a=e.article),"suggestedArticles"in e&&t(1,r=e.suggestedArticles)},[a,r]}export default class extends e{constructor(e){super(),s(this,e,A,V,t,{article:0,suggestedArticles:1})}}export{C as load};