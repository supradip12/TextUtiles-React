(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),r=a.n(s),l=(a(10),a(2)),o=(a(11),a(4)),i=a.n(o),b=a(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function u(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){console.log("On Change"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white"},id:"mybox",rows:"8"})}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("HandelUp ho gaya","Success")},children:"Convert to uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Handeldown ho gaya","Success")},children:"Convert to lowercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=navigator.clipboard.writeText(c);console.log(t),alert("text copied successfully"),e.showAlert("Copy ho gaya","Success")},children:"Copy Text"}),Object(b.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.split(" ").map((function(e){return e[0].toUpperCase()+e.slice(1)}));s(t.join(" ")),e.showAlert("Fupper ho gaya","Success")},children:"first letter uppercase"})]}),Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h1",{children:"Your text Summerry"}),Object(b.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(b.jsxs)("p",{children:[.008*c.split(" ").length," minutes of read"]})]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:c.length>0?c:"Enter your Text"})]})}d.prototype={title:i.a.string.isRequired,about:i.a.string},d.defaultProps={title:"Set title here",about:"About text here"};var h=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})};var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),o=r[0],i=r[1],j=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),2e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"loda",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.background="#042743",document.body.style.color="white",j("Dark mode has been enable","success"),document.title="TextUtiles - Dark Mode"):(c("light"),document.body.style.background="white",document.body.style.color="black",i("Light mode has been enable","Success"),document.title="TextUtiles - Light Mode")}}),Object(b.jsx)(h,{alert:o}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsx)(u,{showAlert:j,heading:"Enter the text to analyze below",mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.a5c233d4.chunk.js.map