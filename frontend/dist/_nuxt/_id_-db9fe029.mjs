var x=Object.defineProperty;var g=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(s,o,e)=>o in s?x(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,p=(s,o)=>{for(var e in o||(o={}))b.call(o,e)&&f(s,e,o[e]);if(g)for(var e of g(o))y.call(o,e)&&f(s,e,o[e]);return s};import{u as v,i as h,d as w,j,_ as k,w as C,c as m,a as i,t as u,m as M,o as _}from"./entry-79d26098.mjs";import{u as S}from"./useGetMedia-98ad263f.mjs";const B=async()=>{const s=v(),o=h(),{data:e,error:t}=await w("products_by_id",()=>fetch(`${s.STORE_URL}/products/${o.params.id}`).then(a=>a.json())),r=e,n=j(()=>r.value.Custom_field.map(({title:a,required:d,options:c})=>({name:a,required:d,options:c})).map((a,d)=>Object.entries(a).map(([c,l])=>({[`data-item-custom${d+1}-${c.toString().toLowerCase()}`]:l}))).reduce((a,d)=>a.concat(d),[]).reduce((a,d)=>p(p({},a),d)));return{product:r,error:t,customFields:n}},P={async setup(s,{expose:o}){o();let e,t;const r=h(),{product:n,error:a,customFields:d}=([e,t]=C(()=>B()),e=await e,t(),e),{getMedia:c}=S(),l={route:r,product:n,error:a,customFields:d,getMedia:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},R={key:0},A={class:"m-6 mt-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8"},F={class:"rounded-t-lg pt-2 pb-2"},O=["src"],D={class:"w-full p-5 flex flex-col justify-between"},E={class:"mt-1 font-semibold text-lg leading-tight truncate text-gray-700"},G={class:"mt-1 text-gray-600"},L=["data-item-id","data-item-price","data-item-url","data-item-description","data-item-image","data-item-name"],T={key:1,class:"text-center mr-10 mb-1"},I=i("div",{class:"p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",role:"alert"},[i("span",{class:"flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"},"Coming soon..."),i("span",{class:"font-semibold mr-2 text-left flex-auto"},"This article is not available yet.")],-1),N=[I],U={key:1};function V(s,o,e,t,r,n){return t.product?(_(),m("div",R,[i("div",A,[i("div",F,[i("img",{src:`${t.getMedia(t.product.image.formats.thumbnail.url)}`,class:"m-auto"},null,8,O)]),i("div",D,[i("div",null,[i("h4",E,u(t.product.title)+" - $"+u(t.product.price),1),i("div",G,u(t.product.description),1)]),t.product.status==="published"?(_(),m("button",M({key:0,class:"snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow","data-item-id":t.product.id,"data-item-price":t.product.price,"data-item-url":`${t.route.fullPath}`,"data-item-description":t.product.description,"data-item-image":`${t.getMedia(t.product.image.formats.thumbnail.url)}`,"data-item-name":t.product.title},t.customFields)," Add to cart ",16,L)):(_(),m("div",T,N))])])])):(_(),m("div",U,u(t.error),1))}var J=k(P,[["render",V]]);export{J as default};