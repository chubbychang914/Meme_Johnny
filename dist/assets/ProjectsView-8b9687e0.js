import{_ as l,l as j,o as r,c as d,a as t,d as i,p as h,e as b,m as w,t as m,j as x,f,k as y}from"./index-2f048aa2.js";/* empty css                                                                     */const _=e=>(h("data-v-84c2ba64"),e=e(),b(),e),$={id:"FooterLayout"},S=_(()=>t("div",{class:"title"},"Github",-1)),k={class:"icon"},P=_(()=>t("div",{class:"title"},"LinkedIn",-1)),I={class:"icon"},O=_(()=>t("div",{class:"title"},"Email",-1)),B={class:"icon"},C=_(()=>t("div",{class:"title"},"Phone",-1)),V={class:"icon"},T={__name:"FooterLayout",setup(e){const o=c=>{window.open(c,"_blank")};return(c,s)=>{const n=j("font-awesome-icon");return r(),d("ul",$,[t("li",{class:"contact-box",onClick:s[0]||(s[0]=a=>o("https://github.com/chubbychang914"))},[S,t("div",k,[i(n,{icon:"fa-brands fa-github"})])]),t("li",{class:"contact-box",onClick:s[1]||(s[1]=a=>o("https://www.linkedin.com/in/johnny-chang-b6b609204/"))},[P,t("div",I,[i(n,{icon:"fa-brands fa-linkedin"})])]),t("li",{class:"contact-box",onClick:s[2]||(s[2]=a=>o("mailto:johnny22375@gmail.com"))},[O,t("div",B,[i(n,{icon:"fa-solid fa-envelope"})])]),t("li",{class:"contact-box",onClick:s[3]||(s[3]=a=>o("tel:+886981093375"))},[C,t("div",V,[i(n,{icon:"fa-solid fa-mobile-screen-button"})])])])}}},A=l(T,[["__scopeId","data-v-84c2ba64"]]);const p=e=>(h("data-v-6ddbe010"),e=e(),b(),e),L={class:"btn-txt"},D=p(()=>t("span",null,null,-1)),G=p(()=>t("span",null,null,-1)),U=p(()=>t("span",null,null,-1)),F=p(()=>t("span",null,null,-1)),R={__name:"DrawButton",props:{btnText:{type:String,default:"Button"}},emits:["on-draw-click"],setup(e,{emit:o}){const c=e,s=()=>o("on-draw-click");return(n,a)=>(r(),d("div",{id:"DrawButton",onClick:s},[t("div",L,[w(m(c.btnText)+" ",1),D,G,U,F])]))}},N=l(R,[["__scopeId","data-v-6ddbe010"]]);const E=e=>(h("data-v-4e56e8d5"),e=e(),b(),e),J={id:"ProjectsTemplate"},M={class:"imgBox"},z={class:"projectPic"},H=["src"],q={class:"txtBox"},K={class:"projectDesc"},Q={class:"title"},W={class:"text"},X=E(()=>t("div",{class:"btn"},null,-1)),Y={__name:"ProjectsTemplate",props:{infoObj:{type:Object,default:()=>({})}},setup(e){const o=e,c=()=>{window.open(o.infoObj.url)};return(s,n)=>(r(),d("div",J,[t("div",M,[t("div",z,[t("img",{src:o.infoObj.imgUrl},null,8,H)])]),t("div",q,[t("div",K,[t("div",Q,[i(N,{btnText:o.infoObj.title,onOnDrawClick:n[0]||(n[0]=a=>c(o.infoObj.url))},null,8,["btnText"])]),t("div",W,[t("p",null,m(o.infoObj.description),1)]),X])])]))}},u=l(Y,[["__scopeId","data-v-4e56e8d5"]]);const Z={class:"footer"},tt={__name:"ProjectsView",setup(e){const{proxy:{$gsapPack:o}}=x(),c=f(null),s=f(null);let n=null;const a={title:"Portfolio",imgUrl:"src/assets/imgs/projects/PortFolioScreenShot.png",description:"Built a personal website using Vue 3 Composition API and GSAP. Implemented features such as scroll-triggered animations and responsive design.",reverseLayout:!1,url:"https://github.com/chubbychang914/Meme_Johnny"},v={title:"Select Go",imgUrl:"src/assets/imgs/projects/SelectGoScreenShot.png",description:"Developed a fully functional e-commerce website using React and Laravel. Implemented features such as user authentication, shopping cart, and product listing.",reverseLayout:!0,url:"https://github.com/chubbychang914/Select-Go-Final"},g={title:"Arcane",imgUrl:"src/assets/imgs/projects/ArcaneScreenShot.png",description:"Created a website based on the popular Netflix series Arcane using HTML, CSS and JavaScript. Utilized GSAP to trigger scroll-related animations.",reverseLayout:!1,url:"https://chubbychang914.github.io/Arcane/"};return y(()=>{n=o.gsap.timeline({paused:!0,defaults:{repeat:-1}}),n.to(c.value,{duration:60,backgroundPosition:"10000px 0px",ease:"linear"}),n.play()}),(et,ot)=>(r(),d("div",{id:"ProjectsView",ref_key:"projectsViewRef",ref:c},[t("div",{class:"content",ref_key:"contentRef",ref:s},[i(u,{infoObj:a,reactive:""}),i(u,{infoObj:v}),i(u,{infoObj:g})],512),t("footer",Z,[i(A)])],512))}},ct=l(tt,[["__scopeId","data-v-7d135570"]]);export{ct as default};
