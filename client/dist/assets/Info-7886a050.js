import{d as t,j as i,F as s,a as e,L as c}from"./index-6a12e5f9.js";import{N as r}from"./Navbar-cd22db2f.js";import"./apiCalls-6352b8c1.js";import"./createSvgIcon-58d8a4a8.js";const g=()=>{var n;const a=(n=t().state)==null?void 0:n.movie;return i(s,{children:e("div",{className:"info-main-page",children:[i(r,{}),i("main",{children:e("div",{className:"landing-page",children:[i("img",{src:a.img,alt:""}),e("div",{className:"landing-text-inner",children:[i("h1",{children:a.title}),e("div",{className:"bottom-info",children:[i("h4",{children:a.year}),i("h4",{children:a.genre}),e("h4",{children:[a.Agelimit,"+"]}),i("h4",{children:a.duration})]}),e("h3",{className:"sub-title",children:['"',a.desc,'"']}),i(c,{to:"/watch",state:{movie:a},children:i("p",{className:"btn",children:"Watch Now"})})]})]})})]})})};export{g as default};
