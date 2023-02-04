import{j as l,r as c,A as m,a as e,L as n,l as u,F as N}from"./index-04d025b3.js";import{l as d}from"./apiCalls-9ea21f39.js";import{c as o}from"./createSvgIcon-cd22bc7b.js";const g=o(l("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),v=o(l("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications"),p=o(l("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");const k=()=>{const[s,t]=c.useState(!1),{dispatch:a}=c.useContext(m),i=()=>{t(!s)};return e("div",{className:"Humburger",children:[l("label",{htmlFor:"nav-menu-button",className:"MenuLabel",onClick:i,children:l("span",{className:s?"MenuLabel--icon clicked":"MenuLabel--icon",children:" "})}),l("div",{className:s?"navBackground clicked":"navBackground",children:" "}),l("nav",{className:s?"navigation clicked":"navigation",children:e("ul",{className:"list",children:[l("li",{className:"list--items",children:l(n,{className:"list--items__link",onClick:i,to:"/",children:"Home"})}),l("li",{className:"list--items",children:l(n,{className:"list--items__link",onClick:i,to:"/movies",children:"Movies"})}),l("li",{className:"list--items",children:l(n,{className:"list--items__link",onClick:i,to:"/series",children:"Series"})}),l("li",{className:"list--items",children:l(n,{className:"list--items__link",onClick:i,to:"/setting",children:"Setting"})}),l("li",{className:"list--items logout",children:l(n,{className:"list--items__link logout-link",onClick:()=>{d(a)},to:"/login",children:"Logout"})})]})})]})},S=()=>{const[s,t]=c.useState(!1),{user:a,dispatch:i}=c.useContext(m);window.onscroll=()=>(t(window.scrollY!==0),()=>window.onscroll=null);const r=()=>{d(i)},h=()=>{};return l("div",{className:s?"Navbar activeScroll":"Navbar",children:e("div",{className:"container",children:[e("div",{className:"container__left",children:[l(k,{}),l("img",{src:u,alt:"logo",className:s?"container__left--logo activeScroll":"container__left--logo"})]}),a&&e("div",{className:"container__right",children:[l("input",{type:"text",className:s?"search-input activeScroll":"search-input"}),l(p,{className:"icon"}),l("span",{children:a.username}),l(v,{className:"icon",onClick:h}),l("img",{src:a.profilePic,alt:"profile pic"}),e("div",{className:"profile",children:[l(g,{className:"icon"}),e("div",{className:"options",children:[l("span",{children:l(n,{to:"/setting",children:"settings"})}),l("hr",{}),e("span",{onClick:r,children:[l(n,{to:"/login",children:"logout"})," "]}),a.isAdmin&&e(N,{children:[l("hr",{}),e("span",{children:[l("a",{href:"https://all-anime-admin.netlify.app/",children:"Admin"})," "]})]})]})]})]})]})})};export{S as N};
