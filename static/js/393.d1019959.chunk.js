(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[393],{421:(e,t,n)=>{"use strict";n.d(t,{D:()=>l,u:()=>i});var o=n(7313),r=n(9176),s=n(5281),a=n(6417);const i=o.forwardRef(((e,t)=>{let{sx:n,color:o,...s}=e;return(0,a.jsx)(r.Z,{color:null!==o&&void 0!==o?o:"inherit",sx:{m:1,height:5,borderRadius:5,...n},ref:t,...s})})),l=o.forwardRef(((e,t)=>{let{sx:n,color:o,...r}=e;return(0,a.jsx)(s.Z,{color:null!==o&&void 0!==o?o:"inherit",sx:{m:1,...n},ref:t,...r})}))},8747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(8310),r=n(1660),s=n(7313),a=n(4511),i=n(8016),l=n(6060),c=n(3135);var u=n(6417);const d=e=>{let{stops:t}=e;const n=(e=>{const{db:{holidays:t,routeList:n,stopList:o,serviceDayMap:r},isVisible:u,refreshInterval:d,isRouteFilter:p}=(0,s.useContext)(l.ZP),x=(0,s.useCallback)((e=>(0,c.HD)(t,e)),[t]),g=(0,s.useMemo)((()=>e.reduce(((e,t)=>{let[n]=t;return"lightRail"===n}),!1)),[e]),h=(0,s.useMemo)((()=>Object.entries(n).reduce(((t,n)=>{let[o,{stops:s,freq:a}]=n;return p&&!(0,c.x4)(o,a,x(new Date),r)||e.forEach((e=>{var n;let[r,a]=e;null===(n=s[r])||void 0===n||n.forEach(((e,n)=>{e===a&&t.push([o,n])}))})),t}),[]).map((e=>e.join("|"))).filter(((e,t,n)=>n.indexOf(e)===t)).map((e=>e.split("|")))),[e,n,p,x,r]),[m,f]=(0,s.useState)([]),{i18n:{language:j}}=(0,a.$)(),b=(0,s.useRef)(!1),v=(0,s.useCallback)((()=>u&&"prerendering"!==navigator.userAgent?Promise.all(h.map((e=>{let[t,r]=e;return(0,i.Gx)({...n[t],seq:parseInt(r,10),stopList:o,language:j})}))).then((e=>{b.current&&f(e.map(((e,t)=>[h[t].join("/"),e.filter((e=>{let{co:o,dest:r}=e;return"mtr"!==o||r.zh===n[h[t][0]].dest.zh}))])).sort(((e,t)=>{let[n,o]=e,[r,s]=t;return 0===o.length?1:0===s.length?-1:g?o[0].remark.zh===s[0].remark.zh?o[0].eta<s[0].eta?-1:1:o[0].remark.zh<s[0].remark.zh?-1:1:o[0].eta===s[0].eta?n<r?-1:1:o[0].eta<s[0].eta?-1:1})))})):(f([]),new Promise((e=>e([]))))),[u,j,n,o,h,g]);return(0,s.useEffect)((()=>{b.current=!0;const e=setInterval((()=>{v()}),d);return v(),()=>{b.current=!1,clearInterval(e)}}),[v,d]),m})(t);return(0,u.jsx)(o.Z,{children:n.map((e=>{let[t,n]=e;return(0,u.jsx)(r.Z,{routeId:t,etas:n},t)}))})}},3310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(7313),r=n(1806),s=n(1113),a=n(4511),i=n(6060),l=n(9119),c=n(421),u=n(5823),d=n(6417);const p=e=>{let{eta:{eta:t,remark:n,co:l,dest:c},routeDests:u,showCompany:p}=e;const{t:g,i18n:{language:m}}=(0,a.$)(),{etaFormat:f}=(0,o.useContext)(i.ZP),j=(0,o.useMemo)((()=>{for(const e of u){if(e.en.toLowerCase()===c.en.toLowerCase())return!1;if(e.zh===c.zh)return!1}return!0}),[u,c]),b=Math.round((new Date(t).getTime()-(new Date).getTime())/60/1e3),v=(0,d.jsx)(r.Z,{component:"span",sx:"exact"!==f?{fontSize:"0.9em"}:{},children:t.slice(11,16)}),Z=(0,d.jsxs)(r.Z,{component:"span",children:[(0,d.jsx)(r.Z,{component:"span",sx:{...h,color:e=>e.palette.warning.main},children:b<1?" - ":"".concat(b," ")}),(0,d.jsx)(r.Z,{component:"span",sx:{fontSize:"0.8em"},children:g("\u5206\u9418")})]});return(0,d.jsxs)(s.Z,{variant:"subtitle1",children:["diff"===f&&Z,"exact"===f&&v,"mixed"===f&&(0,d.jsxs)(d.Fragment,{children:[v,"\u2003",Z]}),"\u2003-\xa0",(0,d.jsxs)(r.Z,{component:"span",sx:{fontSize:"0.8em",textOverflow:"ellipsis"},children:[p&&(0,d.jsxs)(d.Fragment,{children:["\u2003",g(l)]}),"\u2003",x(n[m],m),"\u2003",j&&c[m]]})]})},x=(e,t)=>{if(null===e)return"";const n=[...e.matchAll("zh"===t?/(\d+)\u865f\u6708\u53f0/g:/Platform (\d+)/g)][0]||[];return 2===n.length&&n[1].length&&(e=u.iw[n[1]]),"zh"===t?e.replace(/\u25ad\u25ad/g,"\u96d9\u5361").replace(/\u25ad/g,"\u55ae\u5361"):e.replace(/\u25ad\u25ad/g,"Duel").replace(/\u25ad/g,"Single")},g=e=>{let{routeId:t,seq:n,containerSx:u,showStopName:x=!1}=e;const{t:g,i18n:{language:h}}=(0,a.$)(),{db:{routeList:m,stopList:f}}=(0,o.useContext)(i.ZP),j=(0,l.e)("".concat(t,"/").concat(n)),b=Object.values(m[t].stops)[0][n],v=(0,o.useMemo)((()=>Object.values(m[t].stops).map((e=>f[e[e.length-1]].name)).concat(m[t].dest)),[m,t,f]);return null==j?(0,d.jsx)(r.Z,{sx:u,children:(0,d.jsx)(c.u,{})}):(0,d.jsxs)(r.Z,{sx:u,children:[x&&(0,d.jsx)(s.Z,{variant:"caption",children:f[b].name[h]}),0===j.length&&g("\u672a\u6709\u73ed\u6b21\u8cc7\u6599"),j.length>0&&j.map(((e,n)=>(0,d.jsx)(p,{eta:e,routeDests:v,showCompany:m[t].co.length>1},"route-".concat(n))))]})},h={fontWeight:"700",color:"#088bce"}},9393:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ce});var o=n(7313),r=n(8467),s=n(334),a=n(501),i=n(1113),l=n(1806),c=n(9530),u=n(5823),d=n(4511),p=n(6060),x=n(9536),g=n(1095),h=n(1171),m=n(6417);const f=(0,h.Z)((0,m.jsx)("path",{d:"m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"}),"SyncAlt");var j=n(3135);const b=e=>{let{routeId:t}=e;const{t:n,i18n:s}=(0,d.$)(),{db:{routeList:a,holidays:i,stopList:l,serviceDayMap:c},vibrateDuration:h}=(0,o.useContext)(p.ZP),{route:b,stops:C,co:k}=a[t],w=(0,r.s0)(),M=(0,o.useMemo)((()=>(0,j.HD)(i,new Date)),[i]),y=(0,o.useMemo)((()=>Object.entries(a).reduce(((e,n)=>{let[o,r]=n;if(o===t)return e;const{co:s,route:a}=r;return a===b&&JSON.stringify(k)===JSON.stringify(s)?[...e,[o,r]]:e}),[]).sort(((e,t)=>{let[,n]=e,[,o]=t;const r=(0,j.x4)(n.route,n.freq,M,c),s=(0,j.x4)(o.route,o.freq,M,c);if(r===s){const e=l[Object.values(C)[0][0]],t=l[Object.values(C)[0].slice(-1)[0]],r=l[Object.values(n.stops)[0][0]],s=l[Object.values(n.stops)[0].slice(-1)[0]],a=(0,u.Sp)(r.location,t.location)+(0,u.Sp)(e.location,s.location),i=l[Object.values(o.stops)[0][0]],c=l[Object.values(o.stops)[0].slice(-1)[0]];return a<(0,u.Sp)(i.location,t.location)+(0,u.Sp)(e.location,c.location)?-1:1}return r>s?-1:1})).map((e=>{let[t]=e;return t})).filter((e=>e.toLowerCase()!==t))),[b,k,a,l,M,t,C,c]),I=(0,o.useCallback)((e=>{e.preventDefault(),(0,u.tp)(h),setTimeout((()=>{w("/".concat(s.language,"/route/").concat(y[0].toLowerCase()))}),0)}),[y,w,s.language,h]);return y.length>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{orientation:"vertical",sx:v}),(0,m.jsx)(g.Z,{variant:"text","aria-label":"open-timetable",sx:Z,size:"small",startIcon:(0,m.jsx)(f,{}),onClick:I,children:n("\u5c0d\u982d\u7dda")})]})},v={position:"absolute",top:"0",left:"calc(64px + 2%)"},Z={color:e=>e.palette.getContrastText(e.palette.background.default),position:"absolute",top:"0",left:"2%",flexDirection:"column",justifyContent:"center","& > .MuiButton-label":{flexDirection:"column",justifyContent:"center"},"& > .MuiButton-startIcon":{margin:0}};var C=n(736),k=n(7216),w=n(3947),M=n(8310);const y=e=>{let{freq:t,jt:n,open:r,onClose:s}=e;const{t:a}=(0,d.$)(),c=(0,o.useMemo)((()=>Object.entries(t).map((e=>{let[t,n]=e;return(0,m.jsxs)(k.ZP,{sx:z,children:[(0,m.jsx)(i.Z,{variant:"subtitle1",children:a(I[t])}),Object.entries(n).sort(((e,t)=>e[0]<t[0]?-1:1)).map((e=>{let[n,o]=e;return(0,m.jsxs)(l.Z,{sx:D,children:[(0,m.jsxs)(i.Z,{variant:"body1",children:[n," ",o?"- ".concat(o[0]):""]}),o?(0,m.jsxs)(i.Z,{variant:"body1",children:[parseInt(o[1],10)/60,a("\u5206\u9418")]}):(0,m.jsx)(m.Fragment,{})]},"".concat(t,"-").concat(n))}))]},"".concat(t))}))),[t,a]),u=(0,o.useMemo)((()=>({onClose:()=>{s()}})),[s]),p=(0,o.useMemo)((()=>({sx:L})),[]);return(0,m.jsxs)(w.ZP,{open:r,ModalProps:u,PaperProps:p,anchor:"right",children:[n?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k.ZP,{sx:z,children:(0,m.jsxs)(l.Z,{sx:S,children:[(0,m.jsx)(i.Z,{variant:"subtitle1",children:a("\u8eca\u7a0b")}),(0,m.jsxs)(i.Z,{variant:"subtitle1",children:[Math.round(n),a("\u5206\u9418")]})]})}),(0,m.jsx)(x.Z,{sx:{width:"80%"}})]}):null,(0,m.jsx)(M.Z,{children:c})]})},I={31:"\u661f\u671f\u4e00\u81f3\u4e94",287:"\u661f\u671f\u4e00\u81f3\u4e94",415:"\u661f\u671f\u4e00\u81f3\u4e94",63:"\u661f\u671f\u4e00\u81f3\u516d",319:"\u661f\u671f\u4e00\u81f3\u516d",447:"\u661f\u671f\u4e00\u81f3\u516d",416:"\u661f\u671f\u516d\u81f3\u65e5",480:"\u661f\u671f\u516d\u81f3\u65e5",266:"\u661f\u671f\u4e8c\u81f3\u56db",271:"\u661f\u671f\u4e00\u81f3\u56db",272:"\u661f\u671f\u4e94",288:"\u661f\u671f\u516d",320:"\u661f\u671f\u65e5\u53ca\u516c\u773e\u5047\u671f",448:"\u661f\u671f\u65e5\u53ca\u516c\u773e\u5047\u671f",511:"\u6240\u6709\u65e5\u5b50",111:"\u9664\u661f\u671f\u4e09\u5916",1:"\u661f\u671f\u4e00",2:"\u661f\u671f\u4e8c",4:"\u661f\u671f\u4e09",8:"\u661f\u671f\u56db",16:"\u661f\u671f\u4e94",32:"\u661f\u671f\u516d",64:"\u661f\u671f\u65e5",257:"\u661f\u671f\u4e00",258:"\u661f\u671f\u4e8c",260:"\u661f\u671f\u4e09",264:"\u661f\u671f\u56db",999:"\u672a\u77e5\u65e5\u5b50"},L={height:"100vh",width:"80%",maxWidth:"320px",paddingTop:"56px",paddingLeft:"20px",backgroundColor:e=>"dark"===e.palette.mode?e.palette.background.default:e.palette.primary.main,backgroundImage:"none"},z={flexDirection:"column",alignItems:"flex-start"},S={display:"flex",justifyContent:"space-between",width:"80%"},D={display:"flex",justifyContent:"space-between",width:"80%"},P=e=>{let{routeId:t}=e;const[n,r]=(0,o.useState)(!1),{t:s}=(0,d.$)(),{db:{routeList:a}}=(0,o.useContext)(p.ZP),{freq:i,jt:l}=a[t];return i&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.Z,{orientation:"vertical",sx:O}),(0,m.jsx)(g.Z,{variant:"text","aria-label":"open-timetable",sx:E,size:"small",startIcon:(0,m.jsx)(C.Z,{}),onClick:()=>r(!0),children:s("\u6642\u9593\u8868")}),(0,m.jsx)(y,{freq:i,jt:l,open:n,onClose:()=>r(!1)})]})},O={position:"absolute",top:"0",right:"calc(64px + 2%)"},E={color:e=>e.palette.getContrastText(e.palette.background.default),flexDirection:"column",justifyContent:"center","& > .MuiButton-label":{flexDirection:"column",justifyContent:"center"},"& > .MuiButton-startIcon":{margin:0}};var T=n(7131),F=n(6584);const R=(0,h.Z)((0,m.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined"),A=e=>{let{routeId:t}=e;const{savedEtas:n,setCollectionDrawerRoute:r}=(0,o.useContext)(p.ZP);return(0,m.jsx)(T.Z,{sx:B,size:"small",onClick:()=>{const e="".concat(t.toUpperCase());r(e)},children:n.includes(t)?(0,m.jsx)(F.Z,{}):(0,m.jsx)(R,{})})},B={color:e=>e.palette.getContrastText(e.palette.background.default),flexDirection:"column",justifyContent:"center","& > .MuiButton-label":{flexDirection:"column",justifyContent:"center"},"& > .MuiButton-startIcon":{margin:0}},H=e=>{let{routeId:t}=e;const{t:n,i18n:r}=(0,d.$)(),{db:{routeList:s}}=(0,o.useContext)(p.ZP),{route:x,orig:g,dest:h,nlbId:f}=s[t];return(0,m.jsxs)(a.Z,{id:"route-eta-header",sx:U,elevation:0,children:[(0,m.jsx)(c.Z,{routeNo:x,component:"h1",align:"center"}),(0,m.jsxs)(i.Z,{component:"h2",variant:"caption",align:"center",children:[n("\u5f80")," ",(0,u.iF)(h[r.language])," ",f?n("\u7531")+" "+(0,u.iF)(g[r.language]):""]}),(0,m.jsx)(b,{routeId:t}),(0,m.jsxs)(l.Z,{sx:$,children:[(0,m.jsx)(A,{routeId:t}),(0,m.jsx)(P,{routeId:t})]})]})},U={textAlign:"center",background:"transparent",position:"relative"},$={position:"absolute",top:"0",right:"2%"};var q=n(3171),N=n(8492),_=n(1872),V=n(1422),W=n(2576),J=n(8816),X=n(8941),Y=n(3973),G=n(3310),K=n(6845);const Q=(0,s.ZP)((()=>n.e(776).then(n.bind(n,6776)))),ee=e=>{let{routeId:t,stopIdx:n,expanded:r,routeListEntry:s,stopListExtracted:a,handleChange:c,onStopInfo:x}=e;const g=t,{savedEtas:h,setCollectionDrawerRoute:f}=(0,o.useContext)(p.ZP),[j,b]=(0,o.useState)(!1),[v,Z]=(0,o.useState)(null),{route:C,dest:k,fares:w,faresHoliday:M,stops:y}=s,{t:I,i18n:L}=(0,d.$)(),z=(0,o.useRef)([]);(0,o.useEffect)((()=>{if(r&&z.current[n]){const e=setTimeout((()=>{var e;null===(e=z.current[n])||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center"})}),50);return()=>{clearTimeout(e)}}}),[r,n]);const S=(0,o.useMemo)((()=>a.map(((e,t)=>(0,m.jsxs)(q.Z,{id:"stop-".concat(t),expanded:n===t&&r,onChange:(e,n)=>{c(t,n)},TransitionProps:{unmountOnExit:!0},ref:e=>{e instanceof HTMLElement&&(z.current[t]=e,n===t&&e.scrollIntoView({behavior:"smooth",block:"nearest"}))},sx:ne,children:[(0,m.jsxs)(N.Z,{sx:oe,children:[(0,m.jsxs)(i.Z,{component:"h3",variant:"body1",sx:{fontWeight:700},children:[t+1,". ",(0,u.iF)(e.name[L.language])]}),(0,m.jsxs)(i.Z,{variant:"body2",children:[w&&w[t]?I("\u8eca\u8cbb")+": $"+w[t]:"",M&&M[t]?"\u3000\u3000\u3000\u3000"+I("\u5047\u65e5\u8eca\u8cbb")+": $"+M[t]:""]})]}),(0,m.jsxs)(_.Z,{sx:re,children:[(0,m.jsx)(G.Z,{containerSx:se,routeId:"".concat(g.toUpperCase()),seq:t}),(0,m.jsxs)(l.Z,{children:[(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(T.Z,{"aria-label":"direction",onClick:()=>{const{lat:t,lng:n}=e.location;window.open("https://www.google.com/maps/dir/?api=1&destination=".concat(t,",").concat(n,"&travelmode=walking"))},style:{background:"transparent"},size:"large",children:(0,m.jsx)(W.Z,{})}),(0,m.jsx)(T.Z,{"aria-label":"stop-info",onClick:x,style:{background:"transparent"},size:"large",children:(0,m.jsx)(Y.Z,{})})]}),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(T.Z,{"aria-label":"share",onClick:n=>{Z({id:g,route:C,dest:k,idx:t,stopId:y[Object.keys(y)[0]][t],setIsCopied:b,stop:e,event:n})},style:{backgroundColor:"transparent"},size:"large",children:(0,m.jsx)(K.Z,{})}),(0,m.jsx)(T.Z,{"aria-label":"favourite",onClick:()=>{const e="".concat(g.toUpperCase(),"/").concat(t);f(e)},style:{backgroundColor:"transparent"},size:"large",children:h.includes("".concat(g.toUpperCase(),"/").concat(t))?(0,m.jsx)(J.Z,{sx:ae}):(0,m.jsx)(X.Z,{})})]})]})]})]},"stop-"+t)))),[k,r,w,M,c,L.language,g,C,h,Z,n,a,y,I,f,x]);return(0,m.jsxs)(l.Z,{sx:te,children:[S,v&&(0,m.jsx)(Q,{...v}),(0,m.jsx)(V.Z,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:j,autoHideDuration:1500,onClose:()=>{b(!1)},message:I("\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f")})]})},te={overflowY:"scroll"},ne={border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&.Mui-expanded":{margin:"auto"}},oe={backgroundColor:e=>"dark"===e.palette.mode?e.palette.background.default:"rgba(0, 0, 0, .03)","&.Mui-expanded":{borderBottom:"1px solid rgba(0, 0, 0, .125)",minHeight:44},minHeight:44,"& .MuiAccordionSummary-content":{margin:"8px 0",flexDirection:"column","&.Mui-expanded":{margin:"8px 0"}}},re={display:"flex",alignItems:"center",pl:2,pr:1,py:1,justifyContent:"space-between"},se={flex:1},ae={color:e=>"dark"===e.palette.mode?e.palette.primary.main:"inherit"};var ie=n(4469),le=n(3604),ce=n(6467),ue=n(7943),de=n(3795),pe=n(8747);const xe={"& .MuiPaper-root":{width:"100%",marginTop:"90px",height:"calc(100vh - 100px)"},"& .MuiDialogContent-root":{padding:0}},ge={backgroundColor:e=>"dark"===e.palette.mode?e.palette.background.default:e.palette.primary.main,color:e=>"dark"===e.palette.mode?e.palette.primary.main:e.palette.text.primary},he=e=>{let{open:t,stops:n,handleClose:r}=e;const{db:{stopList:s},savedStops:a,updateSavedStops:i}=(0,o.useContext)(p.ZP),{i18n:l}=(0,d.$)(),c=(0,o.useMemo)((()=>n.reduce(((e,t)=>e||a.includes(t.join("|"))),!1)),[n,a]);return(0,m.jsxs)(ie.Z,{open:t,onClose:r,sx:xe,children:[(0,m.jsxs)(le.Z,{sx:ge,children:[(0,m.jsx)(T.Z,{onClick:()=>i(n[0].join("|")),children:c?(0,m.jsx)(ue.Z,{}):(0,m.jsx)(de.Z,{})}),s[n[0][1]].name[l.language]]}),(0,m.jsx)(ce.Z,{children:(0,m.jsx)(pe.Z,{stops:n})})]})};var me=n(5875),fe=n.n(me);const je=(0,s.ZP)((()=>Promise.all([n.e(506),n.e(742)]).then(n.bind(n,6742)))),be=(e,t)=>{if(void 0!==t[e])return e;const n=e.split("-")[0];return fe().findBestMatch(e.toUpperCase(),Object.keys(t).filter((e=>e.startsWith(n)))).bestMatch.target},ve=(e,t)=>{for(let n=0;n<e.length;++n)if(e[n]in t)return t[e[n]];return[]},Ze=(e,t,n,o)=>{for(let r=0;r<e.length;++r)if(e[r]in t)return[[e[r],t[e[r]][o]]].concat(n[t[e[r]][o]]||[])},Ce=()=>{const{id:e,panel:t}=(0,r.UO)(),{AppTitle:n,db:{routeList:s,stopList:a,stopMap:i},updateSelectedRoute:l,energyMode:c,workbox:x,geoPermission:g,geolocation:h}=(0,o.useContext)(p.ZP),f=be(e.toUpperCase(),s),j=s[f],{route:b,stops:v,co:Z,orig:C,dest:k,fares:w,gtfsId:M,bound:y}=j,I=(0,o.useMemo)((()=>ve(Z,v).map((e=>a[e])).filter((e=>null!==e&&void 0!==e))),[Z,a,v]),L=(0,o.useMemo)((()=>{if(void 0!==t){const[e,n]=t.split(",");if(void 0===e||void 0===n)return parseInt(t,10);{const t=parseInt(n,10);let o=0,r=9999999;for(let n in v){let s=v[n].reduce(((t,n,o)=>(n===e&&t.push(o),t)),[]);for(let e of s)if(e>=0){let n=Math.abs(e-t);n<r&&(o=e,r=n)}}return o}}if("granted"===g){const e=I.map(((e,t)=>[t,(0,u.Sp)(h,e.location)])).sort(((e,t)=>e[1]-t[1]))[0];if(e.length>0)return e[0]}return 0}),[t,g,I,h,v]),[z,S]=(0,o.useState)(!0),[D,P]=(0,o.useState)(!1),O=(0,o.useMemo)((()=>Ze(Z,v,i,String(L))),[Z,L,i,v]),{t:E,i18n:T}=(0,d.$)(),F=(0,r.s0)(),R=(0,o.useCallback)(((t,n)=>{if(n&&L!==t){let n=v[Object.keys(v).sort()[0]][t];F("/".concat(T.language,"/route/").concat(e,"/").concat(n,"%2C").concat(t),{replace:!0})}L!==t||n?S(n):P(!0)}),[F,T.language,e,L,v]),A=(0,o.useCallback)((t=>{L===t&&P(!0),F("/".concat(T.language,"/route/").concat(e,"/").concat(t),{replace:!0})}),[F,T.language,e,L]),B=(0,o.useCallback)((()=>{P(!0)}),[P]),U=(0,o.useCallback)((()=>{P(!1)}),[P]);return(0,o.useEffect)((()=>{P(!1),document.getElementById(e).setAttribute("value",e),l(e)}),[e,l]),(0,o.useEffect)((()=>{e.toUpperCase()!==f.toUpperCase()&&(console.log(e,f),F("/".concat(T.language,"/route/").concat(f.toLowerCase())))}),[e,f,T.language,F]),(0,o.useEffect)((()=>{(0,u.ND)({title:b+" "+E("\u5f80")+" "+(0,u.iF)(k[T.language])+" - "+E(n),description:(()=>{const e=w?w.filter(((e,t,n)=>n.indexOf(e)===t)).map((e=>"$".concat(e))):[];return"zh"===T.language?"\u8def\u7dda".concat(b)+"\u7531".concat(C.zh,"\u51fa\u767c\uff0c\u4ee5").concat(k.zh,"\u70ba\u7d42\u9ede\uff0c")+(e.length?"\u5206\u6bb5\u8eca\u8cbb\u70ba".concat(e.join("\u3001"),"\uff0c"):"")+"\u9014\u7d93".concat(I.map((e=>e.name.zh)).join("\u3001"),"\u3002"):"Route ".concat(b," ")+"is from ".concat((0,u.iF)(C.en)," to ").concat((0,u.iF)(k.en))+(e.length?", section fees are ".concat(e.join(", "),". "):". ")+"Stops: "+(0,u.iF)(I.map((e=>e.name.en)).join(", "))+". "})(),lang:T.language})}),[n,k,w,T.language,C.en,C.zh,b,I,E]),(0,o.useEffect)((()=>{if(!c&&"prerendering"!==navigator.userAgent){const e={type:"WARN_UP_MAP_CACHE",retinaDisplay:(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,zoomLevels:[14,15,16,17,18],stopList:ve(Z,v).map((e=>a[e])).filter((e=>null!==e&&void 0!==e))};null===x||void 0===x||x.messageSW(e)}}),[Z,c,a,v,x]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",{hidden:!0,id:e}),(0,m.jsx)(H,{routeId:f}),!c&&"prerendering"!==navigator.userAgent&&(0,m.jsx)(je,{gtfsId:M,bound:y[Z[0]],stops:I,stopIdx:L,onMarkerClick:A}),(0,m.jsx)(ee,{routeId:f,stopIdx:L,routeListEntry:j,stopListExtracted:I,expanded:z&&"prerendering"!==navigator.userAgent,handleChange:R,onStopInfo:B}),(0,m.jsx)(he,{open:D,stops:O,handleClose:U})]})}},3135:(e,t,n)=>{"use strict";n.d(t,{HD:()=>r,x4:()=>s});const o=(e,t)=>{let n=24*e*60;return n+=60*parseInt(t.slice(0,2),10)+parseInt(t.slice(2),10),n},r=(e,t)=>e.includes("".concat(t.getFullYear()).concat(("0"+(t.getMonth()+1)).slice(-2)).concat(("0"+t.getDate()).slice(-2))),s=(e,t,n,r)=>{if(!t)return!0;let s=!1,a=new Date;a.setTime(a.getTime()+288e5);let i=o(n?0:a.getUTCDay(),("0"+a.getUTCHours()).slice(-2)+("0"+a.getUTCMinutes()).slice(-2));return Object.entries(t).forEach((t=>{let[n,a]=t;try{r[n].forEach(((e,t)=>{e&&Object.entries(a).forEach((e=>{let[n,r]=e,a=o(t,n),l=o(t,r?r[0]:n);var c,u,d;s=s||(u=l,(c=a)-60<=(d=i)&&d<=u+60||c-60<=d+10080&&d+10080<=u+60)}))}))}catch(l){console.log(e+" has unknown service ID"),s=!0}})),s}},2576:(e,t,n)=>{"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5045)),s=n(6417),a=(0,r.default)((0,s.jsx)("path",{d:"m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"}),"Directions");t.Z=a},3973:(e,t,n)=>{"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5045)),s=n(6417),a=(0,r.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=a},6845:(e,t,n)=>{"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5045)),s=n(6417),a=(0,r.default)((0,s.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");t.Z=a},8816:(e,t,n)=>{"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5045)),s=n(6417),a=(0,r.default)((0,s.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.Z=a},8941:(e,t,n)=>{"use strict";var o=n(4836);t.Z=void 0;var r=o(n(5045)),s=n(6417),a=(0,r.default)((0,s.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.Z=a},6584:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(1171),r=n(6417);const s=(0,o.Z)((0,r.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star")},3604:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(7462),r=n(3366),s=n(7313),a=n(4146),i=n(1921),l=n(1113),c=n(7592),u=n(7342),d=n(3174),p=n(3909),x=n(6417);const g=["className","id"],h=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),m=s.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=n,m=(0,r.Z)(n,g),f=n,j=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},d.a,t)})(f),{titleId:b=c}=s.useContext(p.Z);return(0,x.jsx)(h,(0,o.Z)({component:"h2",className:(0,a.Z)(j.root,l),ownerState:f,ref:t,variant:"h6",id:null!=c?c:b},m))}))},5875:e=>{function t(e,t){if((e=e.replace(/\s+/g,""))===(t=t.replace(/\s+/g,"")))return 1;if(e.length<2||t.length<2)return 0;let n=new Map;for(let r=0;r<e.length-1;r++){const t=e.substring(r,r+2),o=n.has(t)?n.get(t)+1:1;n.set(t,o)}let o=0;for(let r=0;r<t.length-1;r++){const e=t.substring(r,r+2),s=n.has(e)?n.get(e):0;s>0&&(n.set(e,s-1),o++)}return 2*o/(e.length+t.length-2)}e.exports={compareTwoStrings:t,findBestMatch:function(e,n){if(!function(e,t){return"string"===typeof e&&(!!Array.isArray(t)&&(!!t.length&&!t.find((function(e){return"string"!==typeof e}))))}(e,n))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const o=[];let r=0;for(let a=0;a<n.length;a++){const s=n[a],i=t(e,s);o.push({target:s,rating:i}),i>o[r].rating&&(r=a)}const s=o[r];return{ratings:o,bestMatch:s,bestMatchIndex:r}}}}}]);