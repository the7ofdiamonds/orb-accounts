"use strict";(self.webpackChunkorb_accounts=self.webpackChunkorb_accounts||[]).push([[16,914,40],{2008:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});const a=function(e){const{error:t}=e;return React.createElement("main",{className:"error"},React.createElement("div",{className:"status-bar card error"},React.createElement("span",null,t)))}},8914:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});const a=function(){return React.createElement("div",{className:"loading"},React.createElement("h1",null,"Loading......"))}},5016:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var a=l(7294),n=l(5998),r=l(2047),c=l(6550),u=l(8914),s=l(2008);const m=function(){const e=(0,n.I0)(),{user_email:t,stripe_customer_id:l}=(0,n.v9)((e=>e.accountsUsers)),{quoteLoading:m,quoteError:o,quotes:E,pdf:d}=(0,n.v9)((e=>e.accountsQuote));if((0,a.useEffect)((()=>{t&&e((0,r.PR)())}),[t,e]),(0,a.useEffect)((()=>{l&&e((0,c.kS)())}),[l,e]),m)return a.createElement(u.default,null);if(o)return a.createElement(s.default,{error:o});const i=(new Date).getTime();let h=[];return Array.isArray(E)&&(h=E.slice().sort(((e,t)=>Math.abs(e.expires_at-i)-Math.abs(t.expires_at-i)))),a.createElement(a.Fragment,null,a.createElement("section",{className:"quotes"},a.createElement("h2",{className:"title"},"Quotes"),Array.isArray(h)&&h.length>0?a.createElement("div",{className:"card quote"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,a.createElement("h4",null,"Quote ID")),a.createElement("th",null,a.createElement("h4",null,"Status")),a.createElement("th",null,a.createElement("h4",null,"Total")),a.createElement("th",null,a.createElement("h4",null,"Page")))),a.createElement("tbody",null,h.map((e=>a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",null,e.id),a.createElement("td",null,e.status),a.createElement("td",null,new Intl.NumberFormat("us",{style:"currency",currency:"USD"}).format(e.amount_total)),a.createElement("td",null,"accepted"===e.status?a.createElement("h5",null,"Accepted"):"canceled"===e.status?a.createElement("h5",null,"Canceled"):a.createElement("a",{href:`/services/quote/${e.id}`},a.createElement("h5",null,"Confirm")))))))))):""))}}}]);