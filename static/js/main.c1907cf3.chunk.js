(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),o=n.n(i),a=n(2),r=(n(9),n(0)),l={Group:function(e){var t=e.children;return Object(r.jsx)("div",{className:"list-group",children:t})},Option:function(e){var t=e.cardTitle,n=e.cardId,s=e.todoRemover,i=Object(c.useState)(!0),o=Object(a.a)(i,2),l=o[0],d=o[1],u=Object(c.useRef)(null);return Object(r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(r.jsx)("input",{ref:u,value:t,onBlur:function(){return d(!0)},disabled:l,className:"todo-edit-input",onKeyPress:function(e){13===e.charCode&&u.current.blur()}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"btn btn-outline-primary me-3",onClick:function(){d(!1),u.current.focus()},children:"Edit"}),Object(r.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return s(n)},children:"Remove"})]})]})}};var d=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),o=Object(a.a)(i,2),d=o[0],u=o[1],j=function(e){var t=d.findIndex((function(t){return t.id===e}));d.splice(t,1),window.localStorage.setItem("todoList",JSON.stringify(d)),u(JSON.parse(window.localStorage.getItem("todoList")))};return Object(c.useEffect)((function(){window.localStorage.getItem("todoList")&&u(JSON.parse(window.localStorage.getItem("todoList")))}),[]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-3"}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"card mt-5",children:[Object(r.jsx)("div",{className:"card-header",children:Object(r.jsxs)("h1",{children:["All elements: ",d.length]})}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("form",{className:"d-flex my-3",onSubmit:function(e){d.push({id:d.length>0?d[d.length-1].id+1:0,title:n}),console.log(d),s(""),e.preventDefault()},children:[Object(r.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{className:"btn btn-success",type:"submit",children:"Add"})]}),Object(r.jsx)(l.Group,{children:d.map((function(e,t){return Object(r.jsx)(l.Option,{cardTitle:e.title,cardId:e.id,todoRemover:j},t)}))})]}),Object(r.jsxs)("div",{className:"card-footer d-flex justify-content-end",children:[Object(r.jsx)("button",{className:"btn btn-danger me-3",onClick:function(){u([]),window.localStorage.removeItem("todoList")},children:"Discard"}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){window.localStorage.setItem("todoList",JSON.stringify(d)),alert("Muvaffaqiyatli saqlandi!")},children:"Save"})]})]})}),Object(r.jsx)("div",{className:"col-md-3"})]})})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.c1907cf3.chunk.js.map