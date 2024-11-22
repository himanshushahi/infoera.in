import{j as e}from"./index-DRGuCwgi.js";import{m as c,c as S,u as k,S as C,A,P as M,a as d}from"./index-4PCxPrSx.js";import"./index-CoywOHWg.js";function I(j){let{swiper:s,extendParams:b,on:o,emit:p}=j;b({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),s.navigation={nextEl:null,prevEl:null};function u(a){let i;return a&&typeof a=="string"&&s.isElement&&(i=s.el.querySelector(a)||s.hostEl.querySelector(a),i)?i:(a&&(typeof a=="string"&&(i=[...document.querySelectorAll(a)]),s.params.uniqueNavElements&&typeof a=="string"&&i&&i.length>1&&s.el.querySelectorAll(a).length===1?i=s.el.querySelector(a):i&&i.length===1&&(i=i[0])),a&&!i?a:i)}function g(a,i){const l=s.params.navigation;a=c(a),a.forEach(n=>{n&&(n.classList[i?"add":"remove"](...l.disabledClass.split(" ")),n.tagName==="BUTTON"&&(n.disabled=i),s.params.watchOverflow&&s.enabled&&n.classList[s.isLocked?"add":"remove"](l.lockClass))})}function h(){const{nextEl:a,prevEl:i}=s.navigation;if(s.params.loop){g(i,!1),g(a,!1);return}g(i,s.isBeginning&&!s.params.rewind),g(a,s.isEnd&&!s.params.rewind)}function f(a){a.preventDefault(),!(s.isBeginning&&!s.params.loop&&!s.params.rewind)&&(s.slidePrev(),p("navigationPrev"))}function y(a){a.preventDefault(),!(s.isEnd&&!s.params.loop&&!s.params.rewind)&&(s.slideNext(),p("navigationNext"))}function v(){const a=s.params.navigation;if(s.params.navigation=S(s,s.originalParams.navigation,s.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let i=u(a.nextEl),l=u(a.prevEl);Object.assign(s.navigation,{nextEl:i,prevEl:l}),i=c(i),l=c(l);const n=(r,x)=>{r&&r.addEventListener("click",x==="next"?y:f),!s.enabled&&r&&r.classList.add(...a.lockClass.split(" "))};i.forEach(r=>n(r,"next")),l.forEach(r=>n(r,"prev"))}function N(){let{nextEl:a,prevEl:i}=s.navigation;a=c(a),i=c(i);const l=(n,r)=>{n.removeEventListener("click",r==="next"?y:f),n.classList.remove(...s.params.navigation.disabledClass.split(" "))};a.forEach(n=>l(n,"next")),i.forEach(n=>l(n,"prev"))}o("init",()=>{s.params.navigation.enabled===!1?w():(v(),h())}),o("toEdge fromEdge lock unlock",()=>{h()}),o("destroy",()=>{N()}),o("enable disable",()=>{let{nextEl:a,prevEl:i}=s.navigation;if(a=c(a),i=c(i),s.enabled){h();return}[...a,...i].filter(l=>!!l).forEach(l=>l.classList.add(s.params.navigation.lockClass))}),o("click",(a,i)=>{let{nextEl:l,prevEl:n}=s.navigation;l=c(l),n=c(n);const r=i.target;let x=n.includes(r)||l.includes(r);if(s.isElement&&!x){const t=i.path||i.composedPath&&i.composedPath();t&&(x=t.find(m=>l.includes(m)||n.includes(m)))}if(s.params.navigation.hideOnClick&&!x){if(s.pagination&&s.params.pagination&&s.params.pagination.clickable&&(s.pagination.el===r||s.pagination.el.contains(r)))return;let t;l.length?t=l[0].classList.contains(s.params.navigation.hiddenClass):n.length&&(t=n[0].classList.contains(s.params.navigation.hiddenClass)),p(t===!0?"navigationShow":"navigationHide"),[...l,...n].filter(m=>!!m).forEach(m=>m.classList.toggle(s.params.navigation.hiddenClass))}});const E=()=>{s.el.classList.remove(...s.params.navigation.navigationDisabledClass.split(" ")),v(),h()},w=()=>{s.el.classList.add(...s.params.navigation.navigationDisabledClass.split(" ")),N()};Object.assign(s.navigation,{enable:E,disable:w,update:h,init:v,destroy:N})}const D=()=>{const j=k({query:"(min-width: 1224px)"});return e.jsxs(C,{style:{width:"70%",display:"flex",justifyContent:"center",padding:"2rem 0rem"},spaceBetween:10,slidesPerView:j?3:1,autoplay:{delay:3e3},modules:[A,I,M],pagination:{clickable:!0,dynamicBullets:!0},children:[e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide swiper-slide-duplicate","data-swiper-slide-index":5,role:"group","aria-label":"6 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/rohitkumar.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Rohit Kumar"}),e.jsx("p",{className:"description",children:"Digital Marketing Executive"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide swiper-slide-duplicate","data-swiper-slide-index":6,role:"group","aria-label":"7 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/nawab.jpg",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Md Nawab"}),e.jsx("p",{className:"description",children:"Software Engineer"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide swiper-slide-duplicate swiper-slide-prev","data-swiper-slide-index":7,role:"group","aria-label":"8 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/soni.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Soni Kumari"}),e.jsx("p",{className:"description",children:"BOE"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide swiper-slide-active","data-swiper-slide-index":0,role:"group","aria-label":"1 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/aman.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Aman Soben"}),e.jsx("p",{className:"description",children:"Software Developer"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide swiper-slide-next","data-swiper-slide-index":1,role:"group","aria-label":"2 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/kunal.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Kishan Kunal"}),e.jsx("p",{className:"description",children:"Software Engineer"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide","data-swiper-slide-index":2,role:"group","aria-label":"3 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/himanshu.jpg",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Himanshu Shekhar"}),e.jsx("p",{className:"description",children:"Software Engineer"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide","data-swiper-slide-index":3,role:"group","aria-label":"4 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/gauravverma.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Gaurav Verma"}),e.jsx("p",{className:"description",children:"Software Engineer"})]})]})}),e.jsx(d,{children:e.jsxs("div",{className:"card swiper-slide","data-swiper-slide-index":4,role:"group","aria-label":"5 / 8",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/images/samir.png",alt:"",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Samir Ansari"}),e.jsx("p",{className:"description",children:"Software Developer"})]})]})}),e.jsx("div",{className:"custom-pagination"})]})};function P(){return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("section",{"data-aos":"fade-up",id:"hero",className:"hero d-flex align-items-center",children:e.jsx("div",{className:"container aos-init aos-animate","data-aos":"fade-up",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-8 d-flex flex-column justify-content-center",children:[e.jsx("h3",{style:{color:"#0c219a",fontWeight:700},children:"From the Desk of the CEO"}),e.jsx("p",{style:{textAlign:"justify"},children:"Since we began our journey in 2014, we have been a growing startup. I started this IT mission to revolutionize the IT industry in Bihar and Odisha. We started work on our mission from “Odisha”. We keep growing and now we have our offices in different states of India."}),e.jsxs("p",{style:{textAlign:"justify"},children:["In my college days an idea struck into my mind to begin my own path by starting my own software company that today is known as “",e.jsx("strong",{children:"Info Era Software Services Private Limited"}),"”."]})]}),e.jsx("div",{className:"col-lg-4 hero-img aos-init aos-animate","data-aos":"zoom-out",children:e.jsx("img",{src:"assets/img/ceo.png",className:"img-fluid",alt:"ceo image",style:{width:300}})})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4",children:[e.jsx("img",{src:"assets/teamSlider/img-02-ceo.png",className:"img-fluid",style:{padding:5,borderRadius:10}}),e.jsx("img",{src:"assets/teamSlider/img-04-ceo.png",className:"img-fluid",style:{padding:5,borderRadius:10}})]}),e.jsx("div",{className:"col-md-4",children:e.jsx("img",{src:"assets/teamSlider/img-01-ceo.png",className:"img-fluid",style:{padding:1,borderRadius:10}})}),e.jsxs("div",{className:"col-md-4",children:[e.jsx("img",{src:"assets/teamSlider/img-03-ceo.png",className:"img-fluid",style:{padding:5,borderRadius:10}}),e.jsx("br",{}),e.jsx("img",{src:"assets/teamSlider/img-05-ceo.png",className:"img-fluid",style:{padding:5,borderRadius:10}})]})]})})]})})}),e.jsx("br",{}),e.jsxs("div",{className:"container",children:[e.jsx("br",{}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-3",style:{padding:20},children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/niraj-sir.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Niraj Vinod Sinha"}),e.jsx("p",{children:"Mentor"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"MBA,IT (IIM Calcutta) "})})}),e.jsx("p",{className:"description",children:"More than 15+ years of Experience in IT Domain"})]})]})}),e.jsx("div",{className:"col-md-3",style:{padding:20},children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/pkrao.png",className:"card-img",alt:"Mr. P. K. Rao"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Mr. P. K. Rao"}),e.jsx("p",{children:"Training & Placement Expert"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"DSTTE-BIHAR "})})}),e.jsx("p",{className:"description",children:"More than 15+ years of Experience"})]})]})}),e.jsx("div",{className:"col-md-3",style:{padding:20},children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/ambar_kumar.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Ambar Kumar"}),e.jsx("p",{className:"description",children:"Manager HR & IR"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"MBA from BHU"})})}),e.jsx("p",{className:"description",children:"More than 17+ years of Experience in Core Domain"})]})]})}),e.jsx("div",{className:"col-md-3",style:{padding:20},children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/ayush_dev.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Ayush Dev"}),e.jsx("p",{children:"AI engineer and Consultant"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"BSc Artificial intelligence & Physics, Virginia tech USA"})})}),e.jsx("p",{className:"description",children:"More than 5+ years of Experience."})]})]})}),e.jsx("div",{className:"col-md-3",style:{padding:20},children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/ridhima-madam.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Ridhima Srivastava"}),e.jsx("p",{children:"Senior Advisor"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"MBA- HR & IT"})})}),e.jsx("p",{className:"description",children:"More than 15+ years of Experience in IT Domain"})]})]})})]})]}),e.jsx("div",{className:"clearfix",children:e.jsx("br",{})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/shubham.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Shubham Raj"}),e.jsx("p",{className:"description",children:"CMO"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"Graduate"})})}),e.jsx("p",{className:"description",children:"More than 7+ years of Experience in IT Domain"})]})]})}),e.jsx("div",{className:"col-md-3",children:e.jsxs("div",{className:"card swiper-slide",children:[e.jsxs("div",{className:"image-content",children:[e.jsx("span",{className:"overlay"}),e.jsx("div",{className:"card-image",children:e.jsx("img",{src:"assets/teamSlider/HR-InfoEra.png",className:"card-img"})})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h2",{className:"name",children:"Anjali Kumari"}),e.jsx("p",{children:"HR Manager"}),e.jsx("p",{children:e.jsx("b",{children:e.jsx("i",{children:"Post Graduate"})})}),e.jsx("p",{className:"description",children:"More than 2+ years of Experience in IT Domain"})]})]})})]})}),e.jsx("div",{className:"mt-4 w-full mx-auto d-flex justify-content-center",children:e.jsx("div",{className:"d-flex flex-column align-items-center gap-3 w-100",children:e.jsx(D,{})})}),e.jsx("main",{id:"main",children:e.jsx("section",{id:"features",className:"features",children:e.jsxs("div",{className:"container aos-init","data-aos":"fade-up",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6 order-md-2",children:e.jsx("img",{src:"assets/img/team-img.png",className:"img-fluid",alt:""})}),e.jsx("div",{className:"col-lg-6 mt-5 mt-lg-0 d-flex order-md-1",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"Successfully running since 9 years"}),e.jsx("p",{style:{marginTop:7,textAlign:"justify"},children:"We are an established company running successfully for 9 years with a great team of Web Developers, Marketing Executive, Assistant Manager and HR. In this journey of rising power we are spreading happiness by connecting people to the digital world. As a Company we have taken the initiative to transform Digitalization and Software Management Systems."}),e.jsx("p",{style:{marginTop:7,textAlign:"justify"},children:"We led our exponential growth in the past years by connecting foreign clients into our business. We have 1000+ clients in India and across the globe. We are growing and people are growing with us. We are helping people achieve their digital Goals and provide them with their digital Needs."})]})})]})," "]})})})]})})}export{P as default};
