import{S as r,i as s,s as a,e as t,t as e,c,a as n,g as o,d as u,f,F as l,h as p,k as d,l as m,n as i,G as h}from"./chunks/vendor-e8d0d0cb.js";function E(r){let s,a,d=r[1].frame+"";return{c(){s=t("pre"),a=e(d)},l(r){s=c(r,"PRE",{});var t=n(s);a=o(t,d),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&d!==(d=r[1].frame+"")&&p(a,d)},d(r){r&&u(s)}}}function k(r){let s,a,d=r[1].stack+"";return{c(){s=t("pre"),a=e(d)},l(r){s=c(r,"PRE",{});var t=n(s);a=o(t,d),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&d!==(d=r[1].stack+"")&&p(a,d)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,x,P,R,N,$=r[1].message+"",b=r[1].frame&&E(r),j=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=d(),g=t("pre"),x=e($),P=d(),b&&b.c(),R=d(),j&&j.c(),N=m()},l(t){s=c(t,"H1",{});var e=n(s);a=o(e,r[0]),e.forEach(u),v=i(t),g=c(t,"PRE",{});var f=n(g);x=o(f,$),f.forEach(u),P=i(t),b&&b.l(t),R=i(t),j&&j.l(t),N=m()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,x),f(r,P,t),b&&b.m(r,t),f(r,R,t),j&&j.m(r,t),f(r,N,t)},p(r,[s]){1&s&&p(a,r[0]),2&s&&$!==($=r[1].message+"")&&p(x,$),r[1].frame?b?b.p(r,s):(b=E(r),b.c(),b.m(R.parentNode,R)):b&&(b.d(1),b=null),r[1].stack?j?j.p(r,s):(j=k(r),j.c(),j.m(N.parentNode,N)):j&&(j.d(1),j=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(P),b&&b.d(r),r&&u(R),j&&j.d(r),r&&u(N)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function x(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}export default class extends r{constructor(r){super(),s(this,r,x,v,a,{status:0,error:1})}}export{g as load};