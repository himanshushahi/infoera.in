import{r as c,j as e,_ as d}from"./index-D8IB6ZzZ.js";import{S as m}from"./Spinner-GvIsFU35.js";function u(){const[s,a]=c.useState({name:"",gender:"male",aadhaar:"",pan:"",gst:"",email:"",mobile:"",state:"",district:""}),[n,t]=c.useState(!1),h=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],i=r=>{a({...s,[r.target.name]:r.target.value})},x=async r=>{r.preventDefault();try{t(!0);const l=await(await fetch("https://dashboard.infoera.in/api/co-partners/ibc/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).json();l.success?d.success(l.message):d.error(l.message),a({name:"",gender:"male",aadhaar:"",pan:"",gst:"",email:"",mobile:"",state:"",district:""})}catch(o){console.error("Error submitting form",o)}finally{t(!1)}};return e.jsxs(e.Fragment,{children:[e.jsxs("section",{id:"hero",className:"hero d-flex align-items-center",children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"container aos-init aos-animate","data-aos":"fade-up",children:[e.jsx("header",{className:"section-header",children:e.jsx("h2",{style:{fontSize:13,fontWeight:700,color:"#4154f1",textTransform:"none"}})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6 d-flex flex-column justify-content-center",children:[e.jsxs("h3",{style:{color:"#0c219a",fontWeight:700},children:["What is an IBC",e.jsx("br",{}),"(Individual Business Consultant) ?"]}),e.jsxs("p",{style:{textAlign:"justify"},children:["An IBC (Individual Business Consultant) is a person, who works with ",e.jsx("b",{children:"Info Era Software Services Pvt. Ltd."})," to help every individual’s business, school, hospitals, start up’s entrepreneurs, working professionals and students to grow in their career and their business by giving Info Era Software Services Pvt. Ltd. products & services in the market for a certain amount of commission."]}),e.jsxs("p",{style:{textAlign:"justify"},children:["An IBC (Individual Business Consultant) is a"," ",e.jsx("b",{children:"Mini-Franchise"})," of Info Era Software Services Pvt. Ltd."]}),e.jsx("p",{style:{textAlign:"justify"},children:"You don’t require any office, infrastructure or employees to start IBC Business. You can work from as per your convenience (Part-time or Full-time)."}),e.jsx("p",{style:{textAlign:"justify"},children:"As an IBC (Individual Business Consultant), you work independently and earn commission by consulting or selling products & services of Info Era Software Services Pvt. Ltd."})]}),e.jsx("div",{className:"col-lg-6 hero-img aos-init aos-animate","data-aos":"zoom-out",children:e.jsx("img",{src:"assets/img/ibc-1.gif",className:"img-fluid",alt:"info era software services"})})]})]})]}),e.jsx("section",{id:"Section5",className:"features",children:e.jsxs("form",{onSubmit:x,className:"container aos-init","data-aos":"fade-up",children:[e.jsxs("header",{className:"section-header",children:[e.jsx("h2",{children:"Become a IBC (Individual Business Consultanat)"}),e.jsx("p",{children:"IBC Registration form"})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-4 mt-5 mt-lg-0",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{name:"name",type:"text",id:"name",value:s.name,onChange:i,className:"form-control",placeholder:"Enter Name"}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator1",style:{color:"red",visibility:"hidden"},children:"Name is require"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"gender",children:"Gender"}),e.jsxs("select",{name:"gender",id:"gender",className:"form-control",value:s.gender,onChange:i,children:[e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]}),e.jsx("br",{}),e.jsx("label",{htmlFor:"aadhaar",children:"Adhar No."}),e.jsx("input",{name:"aadhaar",type:"text",id:"aadhaar",value:s.aadhaar,onChange:i,className:"form-control",placeholder:"Enter Adhar no."}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator2",style:{color:"red",visibility:"hidden"},children:"Adhar is require"}),e.jsx("br",{})]}),e.jsxs("div",{className:"col-lg-4",children:[e.jsx("label",{htmlFor:"pan",children:"PAN"}),e.jsx("input",{name:"pan",type:"text",value:s.pan,onChange:i,id:"pan",className:"form-control",placeholder:"Enter PAN"}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator7",style:{color:"red",visibility:"hidden"},children:"PAN is require"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"gst",children:"GST (If available)"}),e.jsx("input",{name:"gst",type:"text",value:s.gst,onChange:i,id:"gst",className:"form-control",placeholder:"Enter GST (If available)"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{name:"email",type:"text",id:"email",value:s.email,onChange:i,className:"form-control",placeholder:"Enter Email"}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator3",style:{color:"red",visibility:"hidden"},children:"Email is require"}),e.jsx("span",{id:"ContentPlaceHolder1_RegularExpressionValidator1",style:{color:"red",visibility:"hidden"},children:"Enter a valid Email ID"}),e.jsx("br",{})]}),e.jsxs("div",{className:"col-lg-4",children:[e.jsx("label",{htmlFor:"mobile",children:"Mobile"}),e.jsx("input",{name:"mobile",type:"text",value:s.mobile,onChange:i,id:"mobile",className:"form-control",placeholder:"Enter Mobile"}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator4",style:{color:"red",visibility:"hidden"},children:"Mobile is require"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"state",children:"Select State"}),e.jsx("select",{name:"state",id:"state",className:"form-control",value:s.state,onChange:i,children:h.map(r=>e.jsx("option",{value:r,children:r},r))}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator5",style:{color:"red",visibility:"hidden"},children:"Email is require"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"district",children:"District"}),e.jsx("input",{name:"district",type:"text",id:"district",value:s.district,onChange:i,className:"form-control",placeholder:"Enter District"}),e.jsx("span",{id:"ContentPlaceHolder1_RequiredFieldValidator6",style:{color:"red",visibility:"hidden"},children:"District is require"}),e.jsx("br",{})]})]}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-12",children:[e.jsx("button",{type:"submit",disabled:n,name:"ctl00$ContentPlaceHolder1$btnsubmit",id:"ContentPlaceHolder1_btnsubmit",className:"btn btn-primary mr-2",children:n?e.jsx(m,{}):"Submit"}),e.jsx("button",{type:"reset",className:"btn btn-danger",children:"Cancel"})]})})]})}),e.jsx("section",{id:"features",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("img",{src:"assets/img/ibc-2.gif",className:"img-fluid",alt:"best software company in bihar"})}),e.jsx("div",{className:"col-lg-6 mt-5 mt-lg-0 d-flex",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"IBC (INDIVIDUAL BUSINESS CONSULTANT)"}),e.jsx("p",{style:{marginTop:7,textAlign:"justify"},children:"The primary responsibility of a IBC is to recommend products & services of Info Era Software Services Pvt. Ltd. to prospective buyers like Start Up’s business, Students, Schools, Hospitals, Businessmen, Working Professionals etc. based on their business requirements."}),e.jsx("p",{style:{marginTop:7,textAlign:"justify"}})]})})]})})}),e.jsx("hr",{}),e.jsx("section",{id:"Section1",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12 mt-5 mt-lg-0 d-flex",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h1",{style:{color:"#012970",fontWeight:700},children:"Why become a IBC?"}),e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"All you need is to know IBC Model."}),e.jsx("div",{className:"col col1",id:"col",children:e.jsx("h5",{children:"1. Earning with Learning"})}),e.jsx("div",{className:"col col2",id:"col",children:e.jsx("h5",{children:"2. Work form home"})}),e.jsx("div",{className:"col col3",id:"col",children:e.jsx("h5",{children:"3. Support"})}),e.jsx("div",{className:"col col4",id:"col",children:e.jsx("h5",{children:"4. Weekly/Monthly Pay Out"})}),e.jsx("div",{className:"col col5",id:"col",children:e.jsx("h5",{children:"5. Tech Support"})})]})})})})}),e.jsx("div",{style:{background:"url(assets/img/handshake.png)",padding:"10rem 0px",backgroundPosition:"center",backgroundAttachment:"fixed",overflowX:"hidden"},className:"container parallax",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 col-md-3"}),e.jsx("div",{className:"col-lg-3 col-md-3",children:e.jsxs("ul",{style:{color:"#fff",fontSize:18},children:[e.jsx("li",{children:"Become your own boss."}),e.jsx("li",{children:"No Restriction."}),e.jsx("li",{children:"No Reporting."})]})}),e.jsx("div",{className:"col-lg-3 col-md-3",children:e.jsxs("ul",{style:{color:"#fff",fontSize:18},children:[e.jsx("li",{children:"Business Skills."}),e.jsx("li",{children:"Consultancy Skills."}),e.jsx("li",{children:"Customer Generation."}),e.jsx("li",{children:"Sales Techniques"})]})}),e.jsx("div",{className:"col-lg-3 col-md-3"}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#fff",textAlign:"center"},children:"Your commission amount will be credited to your account weekly/monthly."})]})}),e.jsx("section",{id:"Section2",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12 mt-5 mt-lg-0",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"Benefits of becoming a IBC"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Start your business with a very low investment."})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"No limit of your earning."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Start earning from your first sale."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Create an additional source of income."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"A business model which is growing even in a recession."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Work part-time or full-time as you please."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Ease of doing business."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"No capping of commission, earn as much as you can."})})]})]})]})})})})}),e.jsx("section",{id:"Section3",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsxs("div",{className:"row",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"Our Products and Services"}),e.jsx("div",{className:"col-lg-6 mt-5 mt-lg-0",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Services"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Website Designing & Development"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Desktop Applications"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Web Applications"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Android & IOS Applications"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"IT Consulting"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Industrial Training"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Cloud Services"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Cyber Security"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Graphics Designing"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Digital Marketing"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Search Engine Optimization (SEO)"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Bulk SMS & E-mail"})})]})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Products"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"School Management System."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Hospitals Management System."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Multi-Level Marketing."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"E-Commerce Management System."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Real Estate Management System."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Hospital Information Management System."})})]})]})})]})})}),e.jsx("section",{id:"Section4",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12 mt-5 mt-lg-0",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"Our Package"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{colSpan:2,scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Plan for 1 year"}),e.jsx("th",{colSpan:2,scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Plan for 3 year"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Investment"}),e.jsx("th",{scope:"row",children:"12,000"}),e.jsx("th",{scope:"row",children:"Investment"}),e.jsx("th",{scope:"row",children:"25,000"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"GST"}),e.jsx("th",{scope:"row",children:"12,000 X 18% = 2,160"}),e.jsx("th",{scope:"row",children:"GST"}),e.jsx("th",{scope:"row",children:"25,000 X 18% = 4,500"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Total Investment"}),e.jsx("th",{scope:"row",children:"14,160"}),e.jsx("th",{scope:"row",children:"Total Investment"}),e.jsx("th",{scope:"row",children:"29,500"})]})]})]})]})})})})}),e.jsx("section",{id:"Section6",className:"features",children:e.jsx("div",{className:"container aos-init","data-aos":"fade-up",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-12 mt-5 mt-lg-0",children:e.jsxs("div",{className:"row align-self-center gy-4",children:[e.jsx("h3",{style:{color:"#012970",fontWeight:700},children:"Our company provides to IBC"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{scope:"col",style:{background:"#4154f1",color:"#fff"},children:"Individual Website"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Co-Partner"})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"Banner of our company."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"30% of investment to join a new IBC with our company."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"25% on sale of per product."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"10% on sale of per service."})}),e.jsx("tr",{children:e.jsx("th",{scope:"row",children:"2 days training"})})]})]})]})})})})})]})}export{u as default};
