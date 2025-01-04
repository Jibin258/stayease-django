"use strict";(self.webpackChunkstayease=self.webpackChunkstayease||[]).push([[641],{9885:(e,s,l)=>{l.r(s),l.d(s,{default:()=>N});var a=l(5043),t=l(579);const i=e=>{let{iframeLink:s}=e;return(0,t.jsx)("div",{className:"flex justify-center mt-10",children:(0,t.jsx)("iframe",{className:"w-[90vw] h-[35vh] md:h-[70vh]",src:s,allowFullScreen:"",loading:"lazy",title:"Location_Map"})})};var o=l(5394),r=l(7196),m=l(9698),n=l(6720),c=l(184),d=l(3156),x=l(397),h=l(2639),p=l(1462),u=l(8973),g=l(1355);const b=()=>{const e=(0,a.useRef)(null),s=[{id:1,icon:(0,t.jsx)(o.StT,{}),iconName:"Prime Location"},{id:2,icon:(0,t.jsx)(r.StS,{}),iconName:"Fully Furnished"},{id:3,icon:(0,t.jsx)(m.sG,{}),iconName:"Parking Space"},{id:4,icon:(0,t.jsx)(n.DHF,{}),iconName:"Regular Housekeeping"},{id:5,icon:(0,t.jsx)(c.z5x,{}),iconName:"Free Wi-Fi"},{id:6,icon:(0,t.jsx)(d.Elu,{}),iconName:"Modular Kitchen"},{id:7,icon:(0,t.jsx)(x.LlK,{}),iconName:"CCTV Surveillance"},{id:8,icon:(0,t.jsx)(h.rmc,{}),iconName:"Washing Machine"},{id:9,icon:(0,t.jsx)(p.eCE,{}),iconName:"Workspace Setup"},{id:10,icon:(0,t.jsx)(u.kLp,{}),iconName:"Common Area"},{id:11,icon:(0,t.jsx)(d.ppC,{}),iconName:"Digital Lock Access"},{id:12,icon:(0,t.jsx)(c.F3G,{}),iconName:"Water Purifier"},{id:13,icon:(0,t.jsx)(n.Md6,{}),iconName:"OTT Subscriptions"},{id:14,icon:(0,t.jsx)(g.ezH,{}),iconName:"Community Intercom"}];return(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold my-5",children:"Our Offerings & Amenities"}),(0,t.jsx)("button",{className:"absolute left-[-3.5%] top-1/2 transform -translate-y-1/2 text-2xl font-bold hidden md:block",onClick:()=>{e.current.scrollBy({top:0,left:-200,behavior:"smooth"})},children:"\u276e"}),(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsx)("div",{ref:e,className:"flex space-x-4 overflow-x-auto md:overflow-x-hidden h-[28vh] lg:h-[30vh] pt-5 px-2 lg:px-3",children:s.map((e=>(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"relative w-[7rem] md:w-[10vw] lg:w-[7vw] h-[13vh] lg:h-[14vh] transition duration-500 text-center shadow-custom",children:(0,t.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border border-white rounded-lg size-20",children:(0,t.jsx)("span",{className:"text-[#f7b600] text-5xl",children:e.icon})})}),(0,t.jsx)("div",{className:"absolute top-[73%] lg:top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",children:e.iconName})]},e.id)))})}),(0,t.jsx)("button",{className:"absolute right-[-3.5%] top-1/2 transform -translate-y-1/2 text-2xl font-bold hidden md:block",onClick:()=>{e.current.scrollBy({top:0,left:200,behavior:"smooth"})},children:"\u276f"})]})};var v=l(2382);l(4430),l(9078);const f=e=>{let{property:s}=e;const[l,o]=(0,a.useState)(1),r={infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,dots:!1},m=[["/static/img/community/community_img1.webp","/static/img/community/community_img2.webp","/static/img/community/community_img3.webp"],["/static/img/community/community_img4.webp","/static/img/community/community_img5.webp","/static/img/community/community_img6.webp"],["/static/img/community/community_img7.webp","/static/img/community/community_img8.webp","/static/img/community/community_img9.webp"]],[n,c]=(0,a.useState)({name:"",phone:"",email:""});let d=0,x=0;const h=e=>o(e),p=(0,a.useCallback)((e=>o((l=>(l-1+e+s[0].propertyImages.length)%s[0].propertyImages.length+1))),[s]);(0,a.useEffect)((()=>{const e=setInterval((()=>{p(1)}),3e3);return()=>clearInterval(e)}),[p]);const u=e=>{const{name:s,value:l}=e.target;c({...n,[s]:l})},g=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex justify-between p-3 border border-[#eba312]",children:[(0,t.jsx)("div",{className:"font-semibold",children:"1 RK Shared Room"}),(0,t.jsx)("div",{className:"font-semibold",children:"Rs. 14500/mo*"})]}),(0,t.jsxs)("div",{className:"flex justify-between p-3 border border-[#eba312] mt-3",children:[(0,t.jsx)("div",{className:"font-semibold",children:"1 RK Private Room"}),(0,t.jsx)("div",{className:"font-semibold",children:"Rs. 14500/mo*"})]})]}),f=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:"Book Your Visit Today"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("Form submitted:",n),c({name:"",phone:"",email:""})},className:"text-left mt-3",children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-2",htmlFor:"name",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:n.name,onChange:u,required:!0,className:"border rounded w-full py-2 px-3"})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-2",htmlFor:"phone",children:"Phone"}),(0,t.jsx)("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:u,required:!0,className:"border rounded w-full py-2 px-3"})]}),(0,t.jsxs)("div",{className:"mb-5",children:[(0,t.jsx)("label",{className:"block text-sm font-medium mb-2",htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:n.email,onChange:u,required:!0,className:"border rounded w-full py-2 px-3"})]}),(0,t.jsx)("button",{type:"submit",className:"bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600",children:"Submit"})]})]});return(0,t.jsx)("section",{className:"pt-20 md:pt-[6rem]",children:(0,t.jsxs)("div",{className:"mx-auto text-center py-10 md:p-[4rem]",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:space-x-20 lg:mx-5",children:[(0,t.jsxs)("div",{className:"relative w-full overflow-hidden group",onTouchStart:e=>{d=e.targetTouches[0].clientX},onTouchMove:e=>{x=e.targetTouches[0].clientX},onTouchEnd:()=>{d-x>50?p(1):x-d>50&&p(-1)},children:[(0,t.jsx)("div",{className:"relative w-full h-[50vh] md:h-[75vh]",children:s[0].propertyImages.map(((e,a)=>(0,t.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out "+(l===a+1?"opacity-100":"opacity-0"),children:[(0,t.jsx)("img",{src:e,alt:`property_img${a}`,className:"w-full h-full object-cover",loading:"eager"}),(0,t.jsxs)("div",{className:"numbertext absolute top-0 left-0 text-white p-2 text-sm opacity-0 group-hover:opacity-90",children:[a+1," / ",s[0].propertyImages.length]})]},a)))}),(0,t.jsx)("button",{className:"prev absolute top-[50%] left-0 transform -translate-y-1/2 text-4xl text-white py-2 px-4 hidden md:block opacity-0 group-hover:opacity-90 transition-opacity duration-300",onClick:()=>p(-1),children:"\u276e"}),(0,t.jsx)("button",{className:"next absolute top-[50%] right-0 transform -translate-y-1/2 text-4xl text-white py-2 px-4 hidden md:block opacity-0 group-hover:opacity-90 transition-opacity duration-300",onClick:()=>p(1),children:"\u276f"})]}),(0,t.jsx)("div",{className:"flex justify-center hidden lg:block",children:s[0].propertyImages.map(((e,s)=>(0,t.jsx)("div",{className:"",children:(0,t.jsx)("img",{className:"demo cursor-pointer w-full h-[8vh] lg:h-[15vh] object-cover "+(l===s+1?"opacity-100":"opacity-60"),src:e,alt:`thumb_img${s}`,onClick:()=>h(s+1),loading:"eager"})},s)))})]}),(0,t.jsx)("div",{className:"flex justify-center mt-[2rem] md:mb-[2rem] lg:mb-[4rem]",children:s[0].propertyImages.map(((e,s)=>(0,t.jsx)("span",{className:"dot cursor-pointer w-2 h-2 mx-1 rounded-full "+(l===s+1?"bg-amber-500":"bg-gray-300"),onClick:()=>h(s+1)},s)))}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row md:space-x-10",children:[(0,t.jsxs)("div",{className:"lg:w-[55vw]",children:[(0,t.jsxs)("div",{className:"p-3 lg:p-8 text-left rounded-lg lg:border md:border-slate-200 md:mt-0 m-5",children:[(0,t.jsxs)("h3",{className:"text-2xl font-semibold my-3",children:[s[0].name," (",s[0].location,")"]}),(0,t.jsx)("p",{children:"We go beyond just offering stylish, fully furnished rooms and apartments. We provide a comprehensive package of offerings and amenities designed to simplify your living experience at Stayease. These are just a few of the offerings that set us apart. We're committed to providing you with everything you need to live at complete convenience."})]}),(0,t.jsx)("div",{className:"p-8 md:p-10 border border-[#eba312] rounded-lg m-5 lg:hidden",children:g}),(0,t.jsxs)("div",{className:"p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold my-5",children:"Address"}),(0,t.jsx)("p",{children:s[0].address}),(0,t.jsx)(i,{iframeLink:s[0].iframeLink})]}),(0,t.jsx)("div",{className:"p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5",children:(0,t.jsx)(b,{})}),(0,t.jsxs)("div",{className:"p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold my-5",children:"About StayEase Community"}),(0,t.jsxs)("ul",{className:"mt-[3.5rem]",children:[(0,t.jsxs)("li",{className:"mb-[3rem] md:mb-[5rem] lg:mb-[4rem] xl:mb-20 flex flex-col md:flex-row lg:flex-col xl:flex-row md:space-x-10 lg:space-x-1 xl:space-x-10",children:[(0,t.jsx)(v.A,{...r,className:"md:w-[40vw] lg:w-[100%] xl:w-[25vw]",children:m[0].map(((e,s)=>(0,t.jsx)("img",{src:e,alt:`Slide_${s+1}`,className:"md:w-full lg:w-full xl:w-full h-[40%] md:h-[45vh] xl:h-[40vh] object-cover",loading:"lazy"},s)))}),(0,t.jsxs)("div",{className:"md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[45vw] xl:w-[100vw] mt-8 md:mt-8 lg:mt-8 xl:mt-9",children:[(0,t.jsx)("h3",{className:"md:text-[1.8vw] lg:text-lg font-semibold mb-5 font-semibold mb-5",children:"A Spectrum Of Experiences"}),"StayEase isn\u2019t just a place to live, it\u2019s a vibrant community where different backgrounds and perspectives come together. Experience the richness of diverse lives in our coliving spaces. StayEase offers more than just a room - it\u2019s a gateway to a colorful community."]})]}),(0,t.jsxs)("li",{className:"mb-[3rem] md:mb-[5rem] lg:mb-[4rem] xl:mb-20 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row md:space-x-5 lg:space-x-1 xl:space-x-10",children:[(0,t.jsxs)("div",{className:"md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[100%] xl:w-[100vw] mt-8 md:mt-8 lg:mt-8 xl:mt-9",children:[(0,t.jsx)("h3",{className:"md:text-[1.8vw] lg:text-lg font-semibold mb-5",children:"Connect & Collaborate"}),"Our shared spaces are the heart and soul of StayEase. More than just functional areas, our common areas and communal lounges are where connections are forged. Whether you're sharing a coffee or a competitive game night, these are the places where our community truly comes alive."]}),(0,t.jsx)(v.A,{...r,className:"md:w-[40vw] lg:w-[100%] xl:w-[25vw]",children:m[1].map(((e,s)=>(0,t.jsx)("img",{src:e,alt:`Slide_${s+1}`,className:"md:w-full lg:w-full xl:w-full h-[40%] md:h-[45vh] xl:h-[40vh] object-cover",loading:"lazy"},s)))})]}),(0,t.jsxs)("li",{className:"mb-5 flex flex-col md:flex-row lg:flex-col xl:flex-row md:space-x-5 lg:space-x-1 xl:space-x-10",children:[(0,t.jsx)(v.A,{...r,className:"md:w-[40vw] lg:w-[100%] xl:w-[25vw]",children:m[2].map(((e,s)=>(0,t.jsx)("img",{src:e,alt:`Slide_${s+1}`,className:"md:w-full lg:w-full xl:w-full h-[40%] md:h-[45vh] xl:h-[40vh] object-cover",loading:"lazy"},s)))}),(0,t.jsxs)("div",{className:"md:text-[1.5vw] lg:text-base md:w-[100vw] lg:w-[100%] xl:w-[100vw] mt-8 md:mt-0 lg:mt-8 xl:mt-6",children:[(0,t.jsx)("h3",{className:"md:text-[1.8vw] lg:text-lg font-semibold mb-5",children:"Build Long Lasting Bondings"}),s[0].desc]})]})]})]}),(0,t.jsxs)("div",{className:"p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold my-5",children:"Neighbourhood from Harmonia"}),(0,t.jsxs)("div",{className:"flex flex-wrap md:justify-center mb-5",children:[(0,t.jsxs)("div",{className:"p-1 w-1/2 sm:w-1/2 md:w-1/4",children:[(0,t.jsx)("img",{src:s[0].neighbourhoodImages[0],alt:"Image_1",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"}),(0,t.jsx)("img",{src:s[0].neighbourhoodImages[1],alt:"Image_2",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"})]}),(0,t.jsxs)("div",{className:"p-1 w-1/2 sm:w-1/2 md:w-1/4",children:[(0,t.jsx)("img",{src:s[0].neighbourhoodImages[2],alt:"Image_3",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"}),(0,t.jsx)("img",{src:s[0].neighbourhoodImages[3],alt:"Image_4",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"})]}),(0,t.jsxs)("div",{className:"p-1 w-1/2 sm:w-1/2 md:w-1/4",children:[(0,t.jsx)("img",{src:s[0].neighbourhoodImages[4],alt:"Image_5",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"}),(0,t.jsx)("img",{src:s[0].neighbourhoodImages[5],alt:"Image_6",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"})]}),(0,t.jsxs)("div",{className:"p-1 w-1/2 sm:w-1/2 md:w-1/4",children:[(0,t.jsx)("img",{src:s[0].neighbourhoodImages[6],alt:"Image_7",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"}),(0,t.jsx)("img",{src:s[0].neighbourhoodImages[7],alt:"Image_8",className:"w-full h-[50%] mt-2 object-cover",loading:"lazy"})]})]})]}),(0,t.jsxs)("div",{className:"p-8 text-left rounded-lg border md:border-slate-200 md:mt-8 m-5",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold my-5",children:"Basic House Rules For Comfortable Stay"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"mb-5",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Move-in/Move-out:"}),"\xa0 Move-in is permitted after 3:00 PM and move-out must be completed before 10:00 AM. Keep valuables locked. Management is not responsible for lost or stolen items. CCTV footage for common areas is available upon request (up to 10 days). Delivery personnel are not allowed inside."]}),(0,t.jsxs)("li",{className:"mb-5",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Guest Policy:"}),"\xa0 Only single or full occupancy is allowed, subject to approval and as outlined in the agreement. Guests are strictly prohibited in double or shared occupancy.Conserve water and electricity. Maintain cleanliness in your room and common areas."]}),(0,t.jsxs)("li",{className:"mb-5",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Repairs & Electricity:"}),"\xa0 A cool-off period applies before repair costs become your responsibility (see agreement). Costs are shared for shared accommodations. Electricity is pay-as-you-go with smart meters, including power backup. Report maintenance issues immediately."]}),(0,t.jsxs)("li",{className:"mb-5",children:[(0,t.jsx)("span",{className:"font-semibold",children:"Noise & Substances:"}),"\xa0 Maintain low noise levels in rooms and common areas. Smoking and drinking are prohibited in common areas with a \u20b91000 fine for the first offense and potential eviction for repeated violations. Drugs are strictly prohibited, resulting in eviction and police reporting."]})]})]}),(0,t.jsx)("div",{className:"p-10 rounded-lg border border-[#eba312] m-5 lg:hidden",children:f})]}),(0,t.jsx)("div",{className:"relative md:m-0 hidden lg:block lg:w-[40vw]",children:(0,t.jsxs)("div",{className:"sticky top-10 pb-5",children:[(0,t.jsx)("div",{className:"p-10 border border-[#eba312] rounded-lg mb-10",children:g}),(0,t.jsx)("div",{className:"p-10 border border-[#eba312] rounded-lg shadow-custom",children:f})]})})]})]})})};var j=l(2706),w=l(3582),y=l(3216);const N=()=>{const e=(0,y.zy)(),s=(0,w.A)();return(0,t.jsxs)("div",{children:[(0,t.jsx)(f,{property:s.filter((s=>s.pathname===e.pathname))}),(0,t.jsx)(j.A,{heading:"Similar Properties",pathname:e.pathname})]})}},2706:(e,s,l)=>{l.d(s,{A:()=>d});var a=l(5043),t=l(2382),i=(l(4430),l(9078),l(184)),o=l(5475),r=l(3582),m=l(579);const n=e=>{const{onClick:s}=e;return(0,m.jsx)("div",{className:"hidden bg-white text-black hover:bg-amber-500 hover:text-white md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 cursor-pointer",onClick:s,children:(0,m.jsx)(i.QVr,{})})},c=e=>{const{onClick:s}=e;return(0,m.jsx)("div",{className:"hidden bg-white text-black hover:bg-amber-500 hover:text-white md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full z-10 text-xl text-black opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 cursor-pointer",onClick:s,children:(0,m.jsx)(i.Z0P,{})})},d=e=>{let{marginTop:s,heading:l,pathname:i}=e;const d=(0,r.A)(),[x,h]=(0,a.useState)(0),[p,u]=(0,a.useState)(3),g={dots:!0,customPaging:e=>(0,m.jsx)("div",{className:"w-2 h-2 rounded-full transition-all duration-300 "+(e===Math.floor(x/p)?"bg-[#eba312]":"bg-white")}),afterChange:e=>{h(e)},infinite:!0,speed:500,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:3e3,prevArrow:(0,m.jsx)(n,{}),nextArrow:(0,m.jsx)(c,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,beforeChange:()=>u(2)}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,beforeChange:()=>u(1)}}]};return(0,m.jsxs)("div",{className:`${s||l?s:"mt-[17rem]"} md:mt-0 ${l?"mb-14":"md:py-5 lg:py-14"} px-3 md:px-[4rem] lg:px-24`,children:[(0,m.jsx)("div",{className:"mb-10 text-center",children:(0,m.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold my-5",children:"Featured Properties"})}),(0,m.jsx)("div",{className:""+(s?"hidden":""),children:(0,m.jsx)(t.A,{...g,className:"relative group",children:d.map(((e,s)=>i===e.pathname?"":(0,m.jsx)("div",{className:"w-[calc((100vw-60px)/3)] mb-5 px-3 md:px-5",children:(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsx)("div",{className:"overflow-hidden rounded-lg",children:(0,m.jsxs)("div",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300",children:[(0,m.jsx)("img",{src:e.productImg,alt:"PropertyImg",className:"w-full h-[40vh] h-[45vh] object-cover",loading:"lazy"}),(0,m.jsx)(o.N_,{to:e.pathname,className:"absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm",type:"button",children:"BOOK NOW"})]})}),(0,m.jsxs)("div",{className:"text-center mt-3 px-5 py-3 border border-white rounded-lg",children:[(0,m.jsx)("p",{className:"font-semibold text-[#eba312]",children:e.name}),(0,m.jsx)("p",{className:"mt-1 text-sm",children:e.location}),(0,m.jsxs)("p",{className:"text-sm",children:["Price Per Night: \u20b9",e.price]})]})]})},s)))})}),(0,m.jsx)("div",{className:""+(s?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 md:px-5":"hidden"),children:d.map(((e,s)=>(0,m.jsxs)("div",{className:"relative mb-5",children:[(0,m.jsx)("div",{className:"overflow-hidden rounded-lg",children:(0,m.jsxs)("div",{className:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300",children:[(0,m.jsx)("img",{src:e.productImg,alt:"PropertyImg",className:"w-full md:h-[45vh]"}),(0,m.jsx)(o.N_,{to:e.pathname,className:"absolute top-8 right-5 bg-[#eba312] text-white px-3 py-1 text-sm",type:"button",children:"BOOK NOW"})]})}),(0,m.jsxs)("div",{className:"text-center mt-3 px-5 py-3 border border-white rounded-lg",children:[(0,m.jsx)("p",{className:"font-semibold",children:e.name}),(0,m.jsx)("p",{className:"mt-1 text-sm",children:e.location}),(0,m.jsxs)("p",{className:"text-sm",children:["Price Per Night: \u20b9",e.price]})]})]},s)))})]})}}}]);
//# sourceMappingURL=641.84da5be2.chunk.js.map