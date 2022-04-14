"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{1635:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(2208),l=a(4159),r=a(1506),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(7948).default,theme:o};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},p=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=c({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=c({},a,{backgroundColor:null}),l};function v(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?p(e.theme,e.language):void 0;return t.themeDict=a})),s(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=c({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?c({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),s(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},i=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(i))}})),s(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=c({},v(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?c({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),s(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,i=[],s=[i];o>-1;){for(;(r=n[o]++)<l[o];){var c=void 0,p=t[o],v=a[o][r];if("string"==typeof v?(p=o>0?p:["plain"],c=v):(p=u(p,v.type),v.alias&&(p=u(p,v.alias)),c=v.content),"string"==typeof c){var g=c.split(m),h=g.length;i.push({types:p,content:g[0]});for(var f=1;f<h;f++)d(i),s.push(i=[]),i.push({types:p,content:g[f]})}else o++,t.push(p),a.push(c),n.push(0),l.push(c.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return d(i),s}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),h=g,f=a(5710);var b=a(8927),E="copyButton_AB9I",y="copyButtonCopied_tnLf",k="copyButtonIcons_wpAW",N="copyButtonIcon_QgIo",Z="copyButtonSuccessIcon_dULR";function L(e){var t=e.code,a=(0,l.useState)(!1),n=a[0],o=a[1],i=(0,l.useRef)(void 0),s=(0,l.useCallback)((function(){!function(e,t){var a=(void 0===t?{}:t).target,n=void 0===a?document.body:a,l=document.createElement("textarea"),r=document.activeElement;l.value=e,l.setAttribute("readonly",""),l.style.contain="strict",l.style.position="absolute",l.style.left="-9999px",l.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),n.append(l),l.select(),l.selectionStart=0,l.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(c){}l.remove(),i&&(o.removeAllRanges(),o.addRange(i)),r&&r.focus()}(t),o(!0),i.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,l.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),l.createElement("button",{type:"button","aria-label":n?(0,b.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,b.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)(E,"clean-btn",n&&y),onClick:s},l.createElement("span",{className:k,"aria-hidden":"true"},l.createElement("svg",{className:N,viewBox:"0 0 24 24"},l.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),l.createElement("svg",{className:Z,viewBox:"0 0 24 24"},l.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var _="codeBlockContainer_XSIE",T="codeBlockContent_ZE8i",C="codeBlockTitle_CZww",U="codeBlock_q_ln",w="codeBlockStandalone_QzPy",x="codeBlockLines_vXBm";function A(e){var t,a=e.children,o=e.className,s=void 0===o?"":o,c=e.metastring,m=e.title,d=e.language,u=(0,f.LU)().prism,p=(0,l.useState)(!1),v=p[0],g=p[1];(0,l.useEffect)((function(){g(!0)}),[]);var b=(0,f.bc)(c)||m,E=(0,f.pJ)();if(l.Children.toArray(a).some((function(e){return(0,l.isValidElement)(e)})))return l.createElement(h,(0,n.Z)({},i,{key:String(v),theme:E,code:"",language:"text"}),(function(e){var t=e.className,n=e.style;return l.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,w,"thin-scrollbar",_,s,f.kM.common.codeBlock),style:n},l.createElement("code",{className:x},a))}));var y=Array.isArray(a)?a.join(""):a,k=null!=(t=null!=d?d:(0,f.Vo)(s))?t:u.defaultLanguage,N=(0,f.nZ)(y,c,k),Z=N.highlightLines,A=N.code;return l.createElement(h,(0,n.Z)({},i,{key:String(v),theme:E,code:A,language:null!=k?k:"text"}),(function(e){var t,a=e.className,o=e.style,i=e.tokens,c=e.getLineProps,m=e.getTokenProps;return l.createElement("div",{className:(0,r.Z)(_,s,(t={},t["language-"+k]=k&&!s.includes("language-"+k),t),f.kM.common.codeBlock)},b&&l.createElement("div",{style:o,className:C},b),l.createElement("div",{className:T,style:o},l.createElement("pre",{tabIndex:0,className:(0,r.Z)(a,U,"thin-scrollbar")},l.createElement("code",{className:x},i.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var a=c({line:e,key:t});return Z.includes(t)&&(a.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,n.Z)({key:t},a),e.map((function(e,t){return l.createElement("span",(0,n.Z)({key:t},m({token:e,key:t})))})),l.createElement("br",null))})))),l.createElement(L,{code:A})))}))}},5862:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ne}});var n=a(4159),l=a(1506),r=a(2208),o=a(8927),i=a(8744);function s(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function c(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,(0,r.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,(0,r.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var m=a(4269),d=a(3096),u=a(5710);var p={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=p[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,r=e.versionMetadata,o=(0,m.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,s=(0,u.J)(i).savePreferredVersionName,c=(0,d.Jo)(i),p=c.latestDocSuggestion,h=c.latestVersionSuggestion,f=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:o,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:h.label,to:f.path,onClick:function(){return s(h.name)}})))}function f(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(9161),Z="iconEdit_g8Vl",L=["className"];function _(e){var t=e.className,a=(0,N.Z)(e,L);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(_,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C="tag_F_SU",U="tagRegular_IMkK",w="tagWithCount_LJIn";function x(e){var t=e.permalink,a=e.name,r=e.count;return n.createElement(i.Z,{href:t,className:(0,l.Z)(C,r?w:U)},a,r&&n.createElement("span",null,r))}var A="tags_lxEg",B="tag_Bybs";function M(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:B},n.createElement(x,{name:t,permalink:a}))}))))}var S="lastUpdated_csUb";function H(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function P(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,s=t.tags,c=s.length>0,m=!!(a||r||i);return c||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(H,{tags:s}),m&&n.createElement(I,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:o})):null}var O=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function V(e){var t=e.toc,a=e.className,l=e.linkClassName,r=e.isChild;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(V,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function D(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,i=void 0===o?"table-of-contents__link":o,s=e.linkActiveClassName,c=void 0===s?void 0:s,m=e.minHeadingLevel,d=e.maxHeadingLevel,p=(0,N.Z)(e,O),v=(0,u.LU)(),g=null!=m?m:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,f=(0,u.b9)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),b=(0,n.useMemo)((function(){if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:h}}),[i,c,g,h]);return(0,u.Si)(b),n.createElement(V,(0,r.Z)({toc:f,className:l,linkClassName:i},p))}var j="tableOfContents_X8bI",z=["className"];function F(e){var t=e.className,a=(0,N.Z)(e,z);return n.createElement("div",{className:(0,l.Z)(j,"thin-scrollbar",t)},n.createElement(D,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var R="tocCollapsible_u4MD",W="tocCollapsibleButton_BefW",q="tocCollapsibleContent_KCvi",J="tocCollapsibleExpanded_avLZ";function X(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,u.uR)({initialState:!0}),c=s.collapsed,m=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(R,!c&&J,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",W),onClick:m},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:q,collapsed:c},n.createElement(D,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var K="anchorWithStickyNavbar_j5g6",Q="anchorWithHideOnScrollNavbar_ve3W",G=["as","id"],Y=["as"];function $(e){var t=e.as,a=e.id,i=(0,N.Z)(e,G),s=(0,u.LU)().navbar.hideOnScroll;return a?n.createElement(t,(0,r.Z)({},i,{className:(0,l.Z)("anchor",s?Q:K),id:a}),i.children,n.createElement("a",{className:"hash-link",href:"#"+a,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(t,i)}function ee(e){var t=e.as,a=(0,N.Z)(e,Y);return"h1"===t?n.createElement("h1",(0,r.Z)({},a,{id:void 0}),a.children):n.createElement($,(0,r.Z)({as:t},a))}var te="docItemContainer_wVf7",ae="docItemCol_qxqP",ne="tocMobile_wqm0",le={breadcrumbsContainer:"breadcrumbsContainer_kwsM"},re=a(2158);function oe(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function ie(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function se(){var e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,l.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ce(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(se,null),e.map((function(t,a){return n.createElement(ie,{key:a,active:a===e.length-1,index:a},n.createElement(oe,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var me=a(4758),de=a(5546),ue=["mdxType","originalType"];var pe=a(1635);var ve="details_kdUd";function ge(e){var t=Object.assign({},e);return n.createElement(u.PO,(0,r.Z)({},t,{className:(0,l.Z)("alert alert--info",ve,t.className)}))}function he(e){return n.createElement(ee,e)}var fe="img_vgOs";var be={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,r=(l.mdxType,l.originalType,(0,N.Z)(l,ue));return n.createElement(e.props.originalType,r)}return e}(e)}));return n.createElement(de.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(pe.Z,e)},a:function(e){return n.createElement(i.Z,e)},pre:function(e){var t;return n.createElement(pe.Z,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(ge,(0,r.Z)({},e,{summary:a}),l)},ul:function(e){return n.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,l.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_CDwZ"))}));var t},img:function(e){return n.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,fe))}));var t},h1:function(e){return n.createElement(he,(0,r.Z)({as:"h1"},e))},h2:function(e){return n.createElement(he,(0,r.Z)({as:"h2"},e))},h3:function(e){return n.createElement(he,(0,r.Z)({as:"h3"},e))},h4:function(e){return n.createElement(he,(0,r.Z)({as:"h4"},e))},h5:function(e){return n.createElement(he,(0,r.Z)({as:"h5"},e))},h6:function(e){return n.createElement(he,(0,r.Z)({as:"h6"},e))}};function Ee(e){var t=e.children;return n.createElement(me.Zo,{components:be},t)}function ye(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,o=a.assets,i=r.keywords,s=l.description,c=l.title,m=null!=(t=o.image)?t:r.image;return n.createElement(u.d,{title:c,description:s,keywords:i,image:m})}function ke(e){var t=e.content,a=t.metadata,r=t.frontMatter,o=r.hide_title,i=r.hide_table_of_contents,s=r.toc_min_heading_level,m=r.toc_max_heading_level,d=a.title,p=!o&&void 0===t.contentTitle,v=(0,u.iP)(),g=!i&&t.toc&&t.toc.length>0,h=g&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&ae)},n.createElement(f,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement(ce,null),n.createElement(b,null),g&&n.createElement(X,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:(0,l.Z)(u.kM.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(ee,{as:"h1"},d)),n.createElement(Ee,null,n.createElement(t,null))),n.createElement(P,e)),n.createElement(c,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(F,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:m,className:u.kM.docs.docTocDesktop})))}function Ne(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(ye,e),n.createElement(ke,e))}}}]);