"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[678],{8678:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(2791),r=n(9439),i=n(184),o=n(7256),s=function(){var e=(0,a.useState)(0),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,a.useEffect)((function(){var e=setInterval((function(){s((function(e){return e+1}))}),1),t=setInterval((function(){s(0)}),5e3);return function(){clearInterval(e),clearInterval(t)}}),[]),(0,i.jsx)("div",{style:{position:"relative",width:"100%",height:"100px"},children:(0,i.jsx)("img",{src:o,alt:"Car",style:{position:"absolute",left:"".concat(n,"px"),transition:"left 0.1s"}})})},d=n(1614),c=n(890),l=n(1889),u=n(3366),p=n(7462),m=n(3733),v=n(4419),y=n(6934),f=n(1402);var x=a.createContext({}),g=n(5878),h=n(1217);function b(e){return(0,h.Z)("MuiList",e)}(0,g.Z)("MuiList",["root","padding","dense","subheader"]);var Z=["children","className","component","dense","disablePadding","subheader"],j=(0,y.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,p.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),I=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiList"}),r=n.children,o=n.className,s=n.component,d=void 0===s?"ul":s,c=n.dense,l=void 0!==c&&c,y=n.disablePadding,g=void 0!==y&&y,h=n.subheader,I=(0,u.Z)(n,Z),S=a.useMemo((function(){return{dense:l}}),[l]),C=(0,p.Z)({},n,{component:d,dense:l,disablePadding:g}),P=function(e){var t=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,v.Z)(n,b,t)}(C);return(0,i.jsx)(x.Provider,{value:S,children:(0,i.jsxs)(j,(0,p.Z)({as:d,className:(0,m.Z)(P.root,o),ref:t,ownerState:C},I,{children:[h,r]}))})})),S=n(4942),C=n(627),P=n(2065),w=n(1781),L=n(9103),M=n(162),N=n(2071);function k(e){return(0,h.Z)("MuiListItem",e)}var R=(0,g.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var A=(0,g.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function T(e){return(0,h.Z)("MuiListItemSecondaryAction",e)}(0,g.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var F=["className"],G=(0,y.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,p.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),O=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,o=(0,u.Z)(n,F),s=a.useContext(x),d=(0,p.Z)({},n,{disableGutters:s.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,v.Z)(a,T,n)}(d);return(0,i.jsx)(G,(0,p.Z)({className:(0,m.Z)(c.root,r),ownerState:d,ref:t},o))}));O.muiName="ListItemSecondaryAction";var V=O,B=["className"],q=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],_=(0,y.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,p.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,p.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,S.Z)({},"& > .".concat(A.root),{paddingRight:48}),(t={},(0,S.Z)(t,"&.".concat(R.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,S.Z)(t,"&.".concat(R.selected),(0,S.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(R.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,S.Z)(t,"&.".concat(R.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,S.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(R.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),E=(0,y.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),U=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,o=void 0===r?"center":r,s=n.autoFocus,d=void 0!==s&&s,c=n.button,l=void 0!==c&&c,y=n.children,g=n.className,h=n.component,b=n.components,Z=void 0===b?{}:b,j=n.componentsProps,I=void 0===j?{}:j,S=n.ContainerComponent,P=void 0===S?"li":S,A=n.ContainerProps,T=(void 0===A?{}:A).className,F=n.dense,G=void 0!==F&&F,O=n.disabled,U=void 0!==O&&O,W=n.disableGutters,z=void 0!==W&&W,D=n.disablePadding,X=void 0!==D&&D,Y=n.divider,H=void 0!==Y&&Y,J=n.focusVisibleClassName,K=n.secondaryAction,Q=n.selected,$=void 0!==Q&&Q,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,u.Z)(n.ContainerProps,B),ie=(0,u.Z)(n,q),oe=a.useContext(x),se=a.useMemo((function(){return{dense:G||oe.dense||!1,alignItems:o,disableGutters:z}}),[o,oe.dense,G,z]),de=a.useRef(null);(0,M.Z)((function(){d&&de.current&&de.current.focus()}),[d]);var ce=a.Children.toArray(y),le=ce.length&&(0,L.Z)(ce[ce.length-1],["ListItemSecondaryAction"]),ue=(0,p.Z)({},n,{alignItems:o,autoFocus:d,button:l,dense:se.dense,disabled:U,disableGutters:z,disablePadding:X,divider:H,hasSecondaryAction:le,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,i=e.disabled,o={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,v.Z)(o,k,a)}(ue),me=(0,N.Z)(de,t),ve=ae.root||Z.Root||_,ye=te.root||I.root||{},fe=(0,p.Z)({className:(0,m.Z)(pe.root,ye.className,g),disabled:U},ie),xe=h||"li";return l&&(fe.component=h||"div",fe.focusVisibleClassName=(0,m.Z)(R.focusVisible,J),xe=w.Z),le?(xe=fe.component||h?xe:"div","li"===P&&("li"===xe?xe="div":"li"===fe.component&&(fe.component="div")),(0,i.jsx)(x.Provider,{value:se,children:(0,i.jsxs)(E,(0,p.Z)({as:P,className:(0,m.Z)(pe.container,T),ref:me,ownerState:ue},re,{children:[(0,i.jsx)(ve,(0,p.Z)({},ye,!(0,C.X)(ve)&&{as:xe,ownerState:(0,p.Z)({},ue,ye.ownerState)},fe,{children:ce})),ce.pop()]}))})):(0,i.jsx)(x.Provider,{value:se,children:(0,i.jsxs)(ve,(0,p.Z)({},ye,{as:xe,ref:me},!(0,C.X)(ve)&&{ownerState:(0,p.Z)({},ue,ye.ownerState)},fe,{children:[ce,K&&(0,i.jsx)(V,{children:K})]}))})}));function W(e){return(0,h.Z)("MuiListItemIcon",e)}(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var z=["className"],D=(0,y.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return(0,p.Z)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),X=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemIcon"}),r=n.className,o=(0,u.Z)(n,z),s=a.useContext(x),d=(0,p.Z)({},n,{alignItems:s.alignItems}),c=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,v.Z)(a,W,n)}(d);return(0,i.jsx)(D,(0,p.Z)({className:(0,m.Z)(c.root,r),ownerState:d,ref:t},o))}));function Y(e){return(0,h.Z)("MuiListItemText",e)}var H=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),J=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],K=(0,y.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,S.Z)({},"& .".concat(H.primary),t.primary),(0,S.Z)({},"& .".concat(H.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,p.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),Q=a.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiListItemText"}),r=n.children,o=n.className,s=n.disableTypography,d=void 0!==s&&s,l=n.inset,y=void 0!==l&&l,g=n.primary,h=n.primaryTypographyProps,b=n.secondary,Z=n.secondaryTypographyProps,j=(0,u.Z)(n,J),I=a.useContext(x).dense,S=null!=g?g:r,C=b,P=(0,p.Z)({},n,{disableTypography:d,inset:y,primary:!!S,secondary:!!C,dense:I}),w=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,i={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,v.Z)(i,Y,t)}(P);return null==S||S.type===c.Z||d||(S=(0,i.jsx)(c.Z,(0,p.Z)({variant:I?"body2":"body1",className:w.primary,component:null!=h&&h.variant?void 0:"span",display:"block"},h,{children:S}))),null==C||C.type===c.Z||d||(C=(0,i.jsx)(c.Z,(0,p.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},Z,{children:C}))),(0,i.jsxs)(K,(0,p.Z)({className:(0,m.Z)(w.root,o),ownerState:P,ref:t},j,{children:[S,C]}))})),$=n(872),ee=function(){return(0,i.jsxs)(d.Z,{sx:{p:"15px"},children:[(0,i.jsx)(c.Z,{variant:"h4",align:"center",sx:{mb:"15px"},children:"Are you looking for convenient and reliable transportation in Ukraine?"}),(0,i.jsxs)(l.ZP,{container:!0,spacing:3,sx:{mt:"15px"},children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Wide selection of high-quality vehicles."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Flexible rental options to suit your needs."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Competitive pricing and special offers."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"24/7 customer support for a hassle-free experience."})]})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,i.jsxs)(I,{children:[(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Convenient pick-up and drop-off locations throughout Ukraine."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Easy online booking and reservation management."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Safe and well-maintained vehicles for your peace of mind."})]}),(0,i.jsxs)(U,{children:[(0,i.jsx)(X,{children:(0,i.jsx)($.Z,{})}),(0,i.jsx)(Q,{primary:"Explore Ukraine at your own pace and on your own schedule."})]})]})})]}),(0,i.jsx)(s,{})]})}},872:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),i=n(184),o=(0,r.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=o},7256:function(e,t,n){e.exports=n.p+"static/media/CarOut.2ce44f1786929163aac7.png"}}]);
//# sourceMappingURL=678.5e3b1972.chunk.js.map