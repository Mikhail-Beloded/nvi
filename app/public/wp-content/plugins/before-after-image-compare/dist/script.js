!function(){"use strict";var t=React,e=ReactDOM,n=function(t){var e=t||{},n=e.width,o=void 0===n?"0px":n,a=e.style,c=void 0===a?"solid":a,i=e.color,l=void 0===i?"#0000":i,r=e.side,d=void 0===r?"all":r,s=e.radius,u=void 0===s?"0px":s,v=function(t){var e=null==d?void 0:d.toLowerCase();return(null==e?void 0:e.includes("all"))||(null==e?void 0:e.includes(t))},m="0px"===o||!o,f="".concat(o," ").concat(c," ").concat(l),g="\n\t\t".concat(m?"":["top","right","bottom","left"].map((function(t){return v(t)?"border-".concat(t,": ").concat(f,";"):""})).join(""),"\n\t\t").concat(u?"border-radius: ".concat(u,";"):"","\n\t");return g},o=function(t){var e=t||{},n=e.color,o=void 0===n?"#333":n,a=e.bgType,c=void 0===a?"solid":a,i=e.bg,l=void 0===i?"#0000":i,r=e.gradient,d=void 0===r?"linear-gradient(135deg, #4527a4, #8344c5)":r;return"\n\t\t".concat(o?"color: ".concat(o,";"):"","\n\t\t").concat(d||l?"background: ".concat("gradient"===c?d:l,";"):"","\n\t")},a=function(t){var e=t||{},n=e.side,o=void 0===n?2:n,a=e.vertical,c=void 0===a?"0px":a,i=e.horizontal,l=void 0===i?"0px":i,r=e.top,d=void 0===r?"0px":r,s=e.right,u=void 0===s?"0px":s,v=e.bottom,m=void 0===v?"0px":v,f=e.left,g=void 0===f?"0px":f;return 2===o?"".concat(c," ").concat(l):"".concat(d," ").concat(u," ").concat(m," ").concat(g)},c=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e||{},a=o.fontFamily,c=void 0===a?"Default":a,i=o.fontCategory,l=void 0===i?"sans-serif":i,r=o.fontVariant,d=void 0===r?400:r,s=o.fontWeight,u=void 0===s?400:s,v=o.isUploadFont,m=void 0===v||v,f=o.fontSize,g=void 0===f?{desktop:15,tablet:15,mobile:15}:f,p=o.fontStyle,b=void 0===p?"normal":p,h=o.textTransform,y=void 0===h?"none":h,R=o.textDecoration,w=void 0===R?"auto":R,x=o.lineHeight,E=void 0===x?"135%":x,L=o.letterSpace,C=void 0===L?"0px":L,I=function(t,e){return t?"".concat(e,": ").concat(t,";"):""},z=!n||!c||"Default"===c,D=(null==g?void 0:g.desktop)||g,N=(null==g?void 0:g.tablet)||D,S=(null==g?void 0:g.mobile)||N,T="\n\t\t".concat(z?"":"font-family: '".concat(c,"', ").concat(l,";"),"\n\t\t").concat(I(u,"font-weight"),"\n\t\t","font-size: ".concat(D,"px;"),"\n\t\t").concat(I(b,"font-style"),"\n\t\t").concat(I(y,"text-transform"),"\n\t\t").concat(I(w,"text-decoration"),"\n\t\t").concat(I(E,"line-height"),"\n\t\t").concat(I(C,"letter-spacing"),"\n\t"),_=d&&400!==d?"400i"===d?":ital@1":null!=d&&d.includes("00i")?": ital, wght@1, ".concat(null==d?void 0:d.replace("00i","00")," "):": wght@".concat(d," "):"",k=z?"":"https://fonts.googleapis.com/css2?family=".concat(null==c?void 0:c.split(" ").join("+")).concat(_.replace(/ /g,""),"&display=swap");return{googleFontLink:!m||z?"":"@import url(".concat(k,");"),styles:"".concat(t,"{\n\t\t\t").concat(T,"\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(N,"px;"),"\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t").concat(t,"{\n\t\t\t\t","font-size: ".concat(S,"px;"),"\n\t\t\t}\n\t\t}").replace(/\s+/g," ").trim()}},i=function(t){var e,i,l,r,d=t.attributes,s=t.clientId,u=d.alignment,v=d.width,m=d.border,f=d.labelTypo,g=d.labelColors,p=d.labelPadding,b=d.capTypo,h=d.capColors,y=d.capPadding,R="#icbImageCompare-".concat(s),w="".concat(R," .icbImageCompare");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(null===(e=c("",f))||void 0===e?void 0:e.googleFontLink,"\n\t\t").concat(null===(i=c("",b))||void 0===i?void 0:i.googleFontLink,"\n\t\t").concat(null===(l=c("".concat(w," .overlay"),f))||void 0===l?void 0:l.styles,"\n\t\t").concat(null===(r=c("".concat(w," .caption"),b))||void 0===r?void 0:r.styles,"\n\n\t\t#icbImageCompare-").concat(s,"{\n\t\t\ttext-align: ").concat(u,";\n\t\t}\n\t\t").concat(w,"{\n\t\t\twidth: ").concat(v,";\n\t\t\t").concat(n(m),";\n\t\t}\n\t\t").concat(w," .overlay{\n\t\t\t").concat(o(g),"\n\t\t\tpadding: ").concat(a(p),";\n\t\t}\n\t\t").concat(w," .caption{\n\t\t\t").concat(o(h),"\n\t\t\tpadding: ").concat(a(y),";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},l=jQuery,r=jQuery;document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-icb-image-compare").forEach((function(t){var n=JSON.parse(t.dataset.attributes);(0,e.render)(React.createElement(React.Fragment,null,React.createElement(i,{attributes:n,clientId:n.cId}),React.createElement(d,{attributes:n})),t),null==t||t.removeAttribute("data-attributes")}))}));var d=function(e){var n=e.attributes,o=n.beforeImg,a=n.afterImg,c=n.isLabel,i=n.beforeLabel,d=n.afterLabel,s=n.isCap,u=n.cap,v=(0,t.useRef)(null),m=(0,t.useRef)(null),f=(0,t.useRef)(null),g=(0,t.useRef)(null);return(0,t.useEffect)((function(){var t,e=null===(t=v.current)||void 0===t?void 0:t.clientWidth,n=function(){return t="".concat(e,"px"),g.current.style.width=t,void(g.current.style.minWidth=t);var t},o=new ResizeObserver(n);return v.current&&(o.observe(v.current),setTimeout((function(){var t,e,o,a;v.current&&(n(),t=r(m.current),e=r(f.current),o=r(v.current),a=!1,window.addEventListener("touchstart",(function(){a=!0})),window.addEventListener("touchend",(function(){a=!1})),t.on("mousedown touchstart",(function(n){t.addClass("icDraggable"),e.addClass("icResizable");var c=n.pageX?n.pageX:n.originalEvent.touches[0].pageX,i=t.outerWidth(),r=t.offset().left+i-c,d=o.offset().left,s=o.outerWidth(),u=d+10,v=d+s-i-10;t.parents().on("mousemove touchmove",(function(t){var n,o;!1===a&&t.preventDefault();var c=(t.pageX?t.pageX:null===(n=t.originalEvent)||void 0===n||null===(o=n.touches)||void 0===o?void 0:o[0].pageX)+r-i;c<u?c=u:c>v&&(c=v);var m=100*(c+i/2-d)/s+"%";l(".icDraggable").css("left",m).on("mouseup touchend touchcancel",(function(){l(this).removeClass("icDraggable"),e.removeClass("icResizable")})),l(".icResizable").css("width",m)})).on("mouseup touchend touchcancel",(function(){t.removeClass("icDraggable"),e.removeClass("icResizable")}))})).on("mouseup touchend touchcancel",(function(){t.removeClass("icDraggable"),e.removeClass("icResizable")})),window.addEventListener("resize",n))}),0)),function(){o.disconnect(),window.removeEventListener("resize",n)}}),[r]),React.createElement("div",{className:"icbImageCompare",ref:v},React.createElement("div",{className:"comparison-slider"},c&&d&&React.createElement("div",{className:"overlay afterLabel",dangerouslySetInnerHTML:{__html:d}}),React.createElement("img",{className:"afterImg",src:null==a?void 0:a.url,alt:null==a?void 0:a.alt}),React.createElement("div",{className:"resize",ref:f},c&&i&&React.createElement("div",{className:"overlay beforeLabel",dangerouslySetInnerHTML:{__html:i}}),React.createElement("img",{className:"beforeImg",src:null==o?void 0:o.url,alt:null==o?void 0:o.alt,ref:g})),React.createElement("div",{className:"divider",ref:m})),s&&u&&React.createElement("div",{className:"caption",dangerouslySetInnerHTML:{__html:u}}))}}();
//# sourceMappingURL=script.js.map