"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[697],{8434:function(e,n,i){i.d(n,{Z:function(){return y}});var t=i(9439),o=i(1889),r=i(7621),a=i(2169),s=i(9504),l=i(890),c=i(2363),d=i(4294),x=i(2791),p=i(7256),h=i(9434),g=i(6062),u=i(7237),m=i(7488),f=i(5193),b=i(1653),j=i(9823),v="ModalWindow_TitleSecond__YJMdw",Z="ModalWindow_Conditions__278S0",S="ModalWindow_ConditionsSecond__j7SpC",C=i(184),w=function(e){var n=e.isOpen,i=e.onClose,t=e.data,o=(0,f.Z)("max-width:833px")?"50%":"541px",s=t.address?t.address.split(","):[],x=s.length>0?s[s.length-1].trim():"",p=s.length>1?s[s.length-2].trim():"";return(0,C.jsx)("div",{children:(0,C.jsx)(b.Z,{open:n,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsxs)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:o,borderRadius:"24px",bgcolor:"rgba(255, 255, 255, 1)",boxShadow:24,p:"40px"},children:[(0,C.jsx)(a.Z,{component:"img",image:t.img,alt:t.make,sx:{height:"268px",borderRadius:"14px",mb:"14px"}}),(0,C.jsxs)(l.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{fontWeight:"500px",fontSize:"18px",lineHeight:"1.33",color:" rgba(18, 20, 23)",mb:"8px"},children:[(0,C.jsxs)("span",{children:[t.make," "]}),(0,C.jsx)("span",{className:v,children:t.model}),",",t.year]}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",mb:"4px"},children:[p,"\u2002|\u2002",x,"\u2002|\u2002Id:",t.id,"\u2002|\u2002Year:",t.year,"\u2002|\u2002Type:",t.type]}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",mb:"14px"},children:["Fuel Consumption:",t.fuelConsumption,"\u2002|\u2002Engine Size:",t.engineSize]}),(0,C.jsx)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"14px",lineHeight:"1.43",color:" rgba(18, 20, 23)",mb:"24px"},children:t.description}),(0,C.jsx)(l.Z,{variant:"h6",component:"h3",sx:{fontWeight:"500px",fontSize:"14px",lineHeight:"1.43",color:" rgba(18, 20, 23)",mb:"8px"},children:"Accessories and functionalities:"}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"500px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",mb:"4px"},children:[t.accessories[0],"\u2002|\u2002",t.accessories[1],"\u2002|\u2002",t.accessories[2]]}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",mb:"24px"},children:[t.functionalities[0],"\u2002|\u2002",t.functionalities[1],"\u2002|\u2002",t.functionalities[2]]}),(0,C.jsx)(l.Z,{variant:"h6",component:"h3",sx:{fontWeight:"500px",fontSize:"14px",lineHeight:"1.43",color:" rgba(18, 20, 23)",mb:"15px"},children:"Rental Conditions:"}),(0,C.jsxs)(l.Z,{variant:"h6",component:"h3",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23)",mb:"22px"},children:[(0,C.jsx)("span",{children:"Minimum age :"}),(0,C.jsx)("span",{className:Z,children:" 25"}),(0,C.jsx)("span",{children:"Valid driver\u2019s license"})]}),(0,C.jsxs)(l.Z,{variant:"h6",component:"h3",sx:{fontWeight:"400px",fontSize:"14px",lineHeight:"1.43",color:" rgba(18, 20, 23)",mb:"31px"},children:[(0,C.jsxs)("span",{className:S,children:["Security deposite required"," "]}),(0,C.jsx)("span",{children:"Mileage:"}),(0,C.jsx)("span",{className:Z,children:t.mileage}),(0,C.jsx)("span",{children:"Price:"}),(0,C.jsxs)("span",{className:Z,children:[" ",t.rentalPrice]})]}),(0,C.jsxs)(c.Z,{sx:{padding:"0"},children:[(0,C.jsx)("a",{href:"tel:".concat("+380730000000"),style:{textDecoration:"none",width:"100%"},children:(0,C.jsx)(d.Z,{variant:"contained",sx:{width:"168px",height:"44px",borderRadius:"12px",fontWeight:"600",fontSize:"14px",lineHeight:"1.43",textTransform:"none"},children:"Rental car"})}),(0,C.jsx)(d.Z,{variant:"text",onClick:i,sx:{position:"absolute",top:"16px",right:"16px",width:"18px",height:"18px",padding:"0px",margin:"0px",minWidth:"0px"},children:(0,C.jsx)(j.Z,{sx:{color:"black"}})})]})]})})})},y=function(e){var n=e.img,i=e.make,f=e.year,b=e.rentalPrice,j=e.address,v=e.rentalCompany,Z=e.type,S=e.accessories,y=e.mileage,z=e.model,W=e.id,H=e.fuelConsumption,k=e.engineSize,_=e.description,N=e.functionalities,P=(0,x.useState)(!1),R=(0,t.Z)(P,2),M=R[0],L=R[1],O=j?j.split(","):[],T=O.length>0?O[O.length-1].trim():"",F=O.length>1?O[O.length-2].trim():"",I=n||p,Y=(0,h.v9)((function(e){return e.favoriteCards.favoriteCards.some((function(e){return e.id===W}))})),q=(0,h.I0)();return(0,C.jsxs)(o.ZP,{item:!0,xs:12,md:3,children:[(0,C.jsxs)(r.Z,{sx:{position:"relative",backgroundColor:"transparent",color:"transparent",boxShadow:"none"},children:[(0,C.jsx)(a.Z,{component:"img",image:I,alt:i,sx:{height:"268px",borderRadius:"14px",mb:"14px"}}),(0,C.jsxs)(s.Z,{sx:{padding:"0",mb:"28px"},children:[(0,C.jsxs)(l.Z,{variant:"h6",component:"h2",sx:{position:"relative",fontWeight:"500px",fontSize:"16px",lineHeight:"1.5",color:"#121417",mb:"8px"},children:["".concat(i,", ").concat(f),(0,C.jsx)("span",{style:{position:"absolute",right:0},children:b})]}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",mb:"4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[F,"\u2002|\u2002",T,"\u2002|\u2002",v]}),(0,C.jsxs)(l.Z,{variant:"body1",sx:{fontWeight:"400px",fontSize:"12px",lineHeight:"1.5",color:" rgba(18, 20, 23, 0.5)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[Z,"\u2002|\u2002",i,"\u2002|\u2002",Number(y).toLocaleString("en"),"\u2002|\u2002",S[0]]})]}),(0,C.jsxs)(c.Z,{sx:{padding:"0"},children:[(0,C.jsx)(d.Z,{variant:"contained",onClick:function(){L(!0)},sx:{width:"100%",height:"44px",borderRadius:"12px",fontWeight:"600",fontSize:"14px",lineHeight:"1.43",textTransform:"none"},children:"Learn more"}),(0,C.jsx)(d.Z,{variant:"text",onClick:function(){q((0,g.mN)({id:W}))},sx:{position:"absolute",top:"14px",right:"14px",width:"18px",height:"18px",padding:"0px",margin:"0px",minWidth:"0px"},data:{make:i,year:f,rentalPrice:b,address:j,rentalCompany:v,type:Z,accessories:S,mileage:y,model:z,id:W,fuelConsumption:H,engineSize:k,description:_,functionalities:N,img:n},children:Y?(0,C.jsx)(u.Z,{}):(0,C.jsx)(m.Z,{sx:{color:"white"}})})]})]}),(0,C.jsx)(w,{isOpen:M,onClose:function(){return L(!1)},data:{make:i,year:f,rentalPrice:b,address:j,rentalCompany:v,type:Z,accessories:S,mileage:y,model:z,id:W,fuelConsumption:H,engineSize:k,description:_,functionalities:N,img:n}})]})}},5697:function(e,n,i){i.r(n);var t=i(1413),o=(i(2791),i(9434)),r=i(2580),a=i(8434),s=i(1889),l=i(184);n.default=function(){var e=(0,o.v9)(r.up),n=(0,o.v9)(r.ce);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Favorites"}),(0,l.jsx)(s.ZP,{container:!0,rowSpacing:6.25,columnSpacing:3.75,mt:1,children:function(e,n){return e.filter((function(e){return n.some((function(n){return e.id===n.id}))}))}(n,e).map((function(e){return(0,l.jsx)(a.Z,(0,t.Z)({},e),e.id)}))})]})}},2580:function(e,n,i){i.d(n,{QH:function(){return r},ce:function(){return t},up:function(){return o},xU:function(){return a},zh:function(){return s}});var t=function(e){return e.catalogs.items},o=function(e){return e.favoriteCards.favoriteCards},r=function(e){var n=e.catalogs.items,i=e.filter;return i?n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})):n},a=function(e){return e.catalogs.isLoading},s=function(e){return e.catalogs.error}},7256:function(e,n,i){e.exports=i.p+"static/media/CarOut.2ce44f1786929163aac7.png"}}]);
//# sourceMappingURL=697.306d8f11.chunk.js.map