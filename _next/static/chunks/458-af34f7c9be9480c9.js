(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{609:function(t,e,i){"use strict";e.__esModule=!0;var n=i(655),o=i(5893),a=(0,n.__importDefault)(i(9008)),r=function(t){var e=t.url,i=t.type,n=t.title,r=t.description,l=t.image;return(0,o.jsxs)(a.default,{children:[e&&(0,o.jsx)("meta",{property:"og:url",content:e},"og:url"),i&&(0,o.jsx)("meta",{property:"og:type",content:i},"og:type"),n&&(0,o.jsx)("meta",{property:"og:title",content:n},"og:title"),r&&(0,o.jsx)("meta",{property:"og:description",content:r},"og:description"),l&&(0,o.jsx)("meta",{property:"og:image",content:l},"og:image")]},void 0)};e.default=r},4485:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=i(655),o=i(609);(0,n.__createBinding)(e,o,"default"),(0,n.__exportStar)(i(609),e)},1867:function(t,e,i){"use strict";e.__esModule=!0;var n=i(655),o=i(5893),a=(0,n.__importDefault)(i(9008)),r=function(t){var e=t.title,i=t.description,n=t.keywords,r=t.icon,l=t.themeColor,c=t.colorScheme;return(0,o.jsxs)(a.default,{children:[e&&(0,o.jsx)("title",{children:e},"title"),i&&(0,o.jsx)("meta",{name:"description",content:i},"description"),n&&(0,o.jsx)("meta",{name:"keywords",content:n.join(", ")},"keywords"),r&&(0,o.jsx)("link",{rel:"icon",href:r},"icon"),l&&(0,o.jsx)("meta",{name:"theme-color",content:l},"themeColor"),c&&(0,o.jsx)("meta",{name:"color-scheme",content:c},"color-scheme")]},void 0)};e.default=r},5327:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=i(655),o=i(1867);(0,n.__createBinding)(e,o,"default"),(0,n.__exportStar)(i(1867),e)},9812:function(t,e,i){"use strict";e.__esModule=!0;var n=i(655),o=i(5893),a=(0,n.__importDefault)(i(4485)),r=(0,n.__importDefault)(i(5327)),l=(0,n.__importDefault)(i(8276)),c=function(t){var e=t.title,i=t.description,n=t.keywords,c=t.icon,s=t.themeColor,d=t.colorScheme,u=t.facebook,f=t.twitter;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.default,{title:e,description:i,keywords:n,icon:c,themeColor:s,colorScheme:d},void 0),(0,o.jsx)(a.default,{title:e,description:i,image:null==u?void 0:u.image,url:null==u?void 0:u.url,type:null==u?void 0:u.type},void 0),(0,o.jsx)(l.default,{title:e,description:i,image:null==f?void 0:f.image,site:null==f?void 0:f.site,card:null==f?void 0:f.card},void 0)]},void 0)};e.default=c},1063:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=i(655),o=i(9812);(0,n.__createBinding)(e,o,"default"),(0,n.__exportStar)(i(9812),e)},6117:function(t,e,i){"use strict";e.__esModule=!0;var n=i(655),o=i(5893),a=(0,n.__importDefault)(i(9008)),r=function(t){var e=t.card,i=t.site,n=t.title,r=t.description,l=t.image;return(0,o.jsxs)(a.default,{children:[e&&(0,o.jsx)("meta",{name:"twitter:card",content:e},"twitter:card"),i&&(0,o.jsx)("meta",{name:"twitter:site",content:i},"twitter:site"),n&&(0,o.jsx)("meta",{name:"twitter:title",content:n},"twitter:title"),r&&(0,o.jsx)("meta",{name:"twitter:description",content:r},"twitter:description"),l&&(0,o.jsx)("meta",{name:"twitter:image",content:l},"twitter:image")]},void 0)};e.default=r},8276:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=i(655),o=i(6117);(0,n.__createBinding)(e,o,"default"),(0,n.__exportStar)(i(6117),e)},6531:function(t,e,i){"use strict";e.__esModule=!0,e.default=void 0;var n=i(655),o=i(1063);(0,n.__createBinding)(e,o,"default"),(0,n.__exportStar)(i(1063),e)},9361:function(t,e){"use strict";e.Z=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},8045:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,i,l=t.src,c=t.sizes,g=t.unoptimized,p=void 0!==g&&g,w=t.priority,z=void 0!==w&&w,A=t.loading,k=t.lazyRoot,E=t.lazyBoundary,I=t.className,C=t.quality,L=t.width,R=t.height,q=t.style,M=t.objectFit,B=t.objectPosition,D=t.onLoadingComplete,P=t.placeholder,N=void 0===P?"empty":P,W=t.blurDataURL,Z=s(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=d.useContext(m.ImageConfigContext),V=d.useMemo(function(){var t=h||F||f.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort(function(t,e){return t-e}),i=t.deviceSizes.sort(function(t,e){return t-e});return r({},t,{allSizes:e,deviceSizes:i})},[F]),H=Z,U=c?"responsive":"intrinsic";"layout"in H&&(H.layout&&(U=H.layout),delete H.layout);var G=S;if("loader"in H){if(H.loader){var T=H.loader;G=function(t){t.config;var e=s(t,["config"]);return T(e)}}delete H.loader}var O,Q,J="";if(O=l,"object"==typeof O&&(b(O)||void 0!==(Q=O).src)){var K=b(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(W=W||K.blurDataURL,J=K.src,(!U||"fill"!==U)&&(R=R||K.height,L=L||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}l="string"==typeof l?l:J;var X=!z&&("lazy"===A||void 0===A);(l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,X=!1),v.has(l)&&(X=!1),V.unoptimized&&(p=!0);var Y=o(d.useState(!1),2),tt=Y[0],te=Y[1],ti=o($.useIntersection({rootRef:void 0===k?null:k,rootMargin:E||"200px",disabled:!X}),3),tn=ti[0],to=ti[1],ta=ti[2],tr=!X||to,tl={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},tc={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ts=!1,td=x(L),tu=x(R),tf=x(C),t$=Object.assign({},q,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:B}),tm="blur"!==N||tt?{}:{backgroundSize:M||"cover",backgroundPosition:B||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===U)tl.display="block",tl.position="absolute",tl.top=0,tl.left=0,tl.bottom=0,tl.right=0;else if(void 0!==td&&void 0!==tu){var tg=tu/td,tp=isNaN(tg)?"100%":"".concat(100*tg,"%");"responsive"===U?(tl.display="block",tl.position="relative",ts=!0,tc.paddingTop=tp):"intrinsic"===U?(tl.display="inline-block",tl.position="relative",tl.maxWidth="100%",ts=!0,tc.maxWidth="100%",e="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(td,"%27%20height=%27").concat(tu,"%27/%3e")):"fixed"===U&&(tl.display="inline-block",tl.position="relative",tl.width=td,tl.height=tu)}var th={src:y,srcSet:void 0,sizes:void 0};tr&&(th=_({config:V,src:l,unoptimized:p,layout:U,width:td,quality:tf,sizes:c,loader:G}));var tv=l,ty="imagesizes";ty="imageSizes";var tw=(n(i={},"imageSrcSet",th.srcSet),n(i,ty,th.sizes),i),tb=d.default.useLayoutEffect,t8=d.useRef(D),t_=d.useRef(l);d.useEffect(function(){t8.current=D},[D]),tb(function(){t_.current!==l&&(ta(),t_.current=l)},[ta,l]);var tx=r({isLazy:X,imgAttributes:th,heightInt:tu,widthInt:td,qualityInt:tf,layout:U,className:I,imgStyle:t$,blurStyle:tm,loading:A,config:V,unoptimized:p,placeholder:N,loader:G,srcString:tv,onLoadingCompleteRef:t8,setBlurComplete:te,setIntersection:tn,isVisible:tr,noscriptSizes:c},H);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:tl},ts?d.default.createElement("span",{style:tc},e?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:e}):null):null,d.default.createElement(j,Object.assign({},tx))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+th.src+th.srcSet+th.sizes,rel:"preload",as:"image",href:th.srcSet?void 0:th.src},tw))):null)};var r=i(6495).Z,l=i(2648).Z,c=i(1598).Z,s=i(7273).Z,d=c(i(7294)),u=l(i(5443)),f=i(9309),$=i(7190),m=i(9977);i(3794);var g=i(2392);function p(t){return"/"===t[0]?t.slice(1):t}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality;return i.endsWith(".svg")&&!e.dangerouslyAllowSVG?i:"".concat(g.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(t){var e=t.config,i=t.src,n=t.width,o=t.quality,a=new URL("".concat(e.path).concat(p(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(t){var e,i=t.config,n=t.src,o=t.width,a=["f_auto","c_limit","w_"+o,"q_"+(t.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(a).concat(p(n))}],["akamai",function(t){var e=t.config,i=t.src,n=t.width;return"".concat(e.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function b(t){return void 0!==t.default}function _(t){var e=t.config,i=t.src,n=t.unoptimized,o=t.layout,r=t.width,l=t.quality,c=t.sizes,s=t.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(t,e,i,n){var o=t.deviceSizes,r=t.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var s,d,u=.01*(d=Math).min.apply(d,a(c));return{widths:r.filter(function(t){return t>=o[0]*u}),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof e||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([e,2*e].map(function(t){return r.find(function(e){return e>=t})||r[r.length-1]}))),kind:"x"}}(e,r,o,c),u=d.widths,f=d.kind,$=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map(function(t,n){return"".concat(s({config:e,src:i,quality:l,width:t})," ").concat("w"===f?t:n+1).concat(f)}).join(", "),src:s({config:e,src:i,quality:l,width:u[$]})}}function x(t){return"number"==typeof t?t:"string"==typeof t?parseInt(t,10):void 0}function S(t){var e,i=(null==(e=t.config)?void 0:e.loader)||"default",n=w.get(i);if(n)return n(t);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function z(t,e,i,n,o,a){t&&t.src!==y&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode&&(v.add(e),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=t.naturalWidth,r=t.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}}))}var j=function(t){var e=t.imgAttributes,i=(t.heightInt,t.widthInt),n=t.qualityInt,o=t.layout,a=t.className,l=t.imgStyle,c=t.blurStyle,u=t.isLazy,f=t.placeholder,$=t.loading,m=t.srcString,g=t.config,p=t.unoptimized,h=t.loader,v=t.onLoadingCompleteRef,y=t.setBlurComplete,w=t.setIntersection,b=t.onLoad,x=t.onError,S=(t.isVisible,t.noscriptSizes),j=s(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return $=u?"lazy":$,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},j,e,{decoding:"async","data-nimg":o,className:a,style:r({},l,c),ref:d.useCallback(function(t){w(t),(null==t?void 0:t.complete)&&z(t,m,o,f,v,y)},[w,m,o,f,v,y,]),onLoad:function(t){z(t.currentTarget,m,o,f,v,y),b&&b(t)},onError:function(t){"blur"===f&&y(!0),x&&x(t)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},j,_({config:g,src:m,unoptimized:p,layout:o,width:i,quality:n,sizes:S,loader:h}),{decoding:"async","data-nimg":o,style:l,className:a,loading:$}))))};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},5675:function(t,e,i){t.exports=i(8045)},1163:function(t,e,i){t.exports=i(387)}}]);