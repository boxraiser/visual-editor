"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[140],{4140:function(e,l,t){t.r(l);var a=t(3131),o=["--bs-blue","--bs-indigo","--bs-purple","--bs-pink","--bs-red","--bs-orange","--bs-yellow","--bs-green","--bs-teal","--bs-cyan","--bs-white","--bs-gray","--bs-gray-dark","--bs-primary","--bs-secondary","--bs-success","--bs-info","--bs-warning","--bs-danger","--bs-light","--bs-dark"],i=function(e,l){return void 0===e&&(e="image"),void 0===l&&(l="image"),(0,a.ef)(e,{label:l,onBrowse:function(e){return Promise.resolve("https://picsum.photos/425/458")}})},n=function(){return(0,a.X2)([(0,a.xv)("label",{label:"Libell\xe9",default:"Call to action"}),(0,a.xv)("url",{label:"Lien"}),(0,a.Ph)("type",{default:"primary",label:"type",options:[{label:"Primaire",value:"primary"},{label:"Secondaire",value:"secondary"}]})])},r=function(e,l){return(0,a.Il)(e,{label:l,colors:o})},u=function(e,l){return void 0===e&&(e="title"),void 0===l&&(l="Titre"),(0,a.X2)([(0,a.Jv)(e,{default:"Lorem ipsum dolor sit amet",label:l,multiline:!1,colors:o}),(0,a.PH)(e+"Align",{label:"Alignement"})],{columns:"1fr max-content"})},s=function(e,l){return void 0===e&&(e="content"),void 0===l&&(l="Description"),(0,a.Jv)(e,{label:l,default:"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>",multiline:!0,colors:o,variables:{background:"backgroundColor",color:"textColor"}})},b=function(e,l){return void 0===l&&(l=[]),[(0,a.mQ)({label:"Contenu",fields:e},{label:"Apparence",fields:[].concat(l,[(0,a.X2)([r("backgroundColor","Background"),r("textColor","Text"),i("background","Background"),i("backgroundMobile","Background (mobile)")],{columns:"50px 50px 1fr 1fr"}),(0,a.X2)([(0,a.Ph)("backgroundSize",{default:"cover",label:"Size",options:[{label:"Remplir",value:"cover"},{label:"Contenir",value:"contain"},{label:"Original",value:"auto"}]}),(0,a.Ph)("backgroundRepeat",{default:"no-repeat",label:"Repeat",options:[{label:"Aucune",value:"no-repeat"},{label:"x",value:"repeat-x"},{label:"y",value:"repeat-y"},{label:"x & y",value:"repeat"}]}),(0,a.Ph)("backgroundXPosition",{default:"center",label:"Position (X)",options:[{label:"Centrer",value:"center"},{label:"Gauche",value:"left"},{label:"Droite",value:"right"}]}),(0,a.Ph)("backgroundYPosition",{default:"center",label:"Position (Y)",options:[{label:"Centrer",value:"center"},{label:"Haut",value:"top"},{label:"Bas",value:"bottom"}]})]).when("background",(function(e){return e})),(0,a.e6)("padding",{label:"Vertical Padding",default:3})])})]},c=new a.oW;c.registerComponent("hero",{title:"Hero",fields:b([u(),s(),(0,a.ZN)("buttons",{title:"Boutons",addLabel:"Add a button",fields:[n()]})])}),c.registerComponent("pricing",{title:"Pricing",category:"Commerce",fields:b([u(),s(),(0,a.ZN)("prices",{min:1,max:5,collapsed:"title",fields:[(0,a.Jv)("title",{label:"Title",default:"Pro",multiline:!1}),(0,a.xv)("price",{label:"Price",default:"15\u20ac"}),(0,a.xv)("features",{label:"Features",multiline:!0}),n()]})])}),c.registerComponent("icons-columns",{title:"Icons columns",fields:b([(0,a.ZN)("icons",{min:1,max:5,collapsed:"title",fields:[(0,a.xv)("title",{label:"Title",default:"Featured title"}),s()]})])}),c.registerComponent("text",{title:"Formatted text",fields:[s()]}),c.defineElement()}}]);