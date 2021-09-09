(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),o=c(11),a=c.n(o),i=(c(83),c(29)),l=c(12),r=(c(64),c(40)),d=c(16),j=c(36),u=(c(84),c(69)),b=c(44),m=c.n(b),h=c(65),O=c(3),x=function(e){var t=e.setInputText,c=e.todos,s=e.setTodos,n=e.inputText,o=e.setStatus;return Object(O.jsx)("div",{className:m.a.divstyle,children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{value:n,onChange:function(e){t(e.target.value)},type:"text",className:m.a.inputs,placeholder:"Enter yourTodo"}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),s([].concat(Object(u.a)(c),[{item:n,isCompleted:!1,id:1e3*Math.random()}])),t("")},type:"submit",className:m.a.submitBtn,children:Object(O.jsx)(h.a,{})}),Object(O.jsxs)("select",{onChange:function(e){o(e.target.value)},name:"todos",className:m.a.option,children:[Object(O.jsx)("option",{value:"all",children:"View All"}),Object(O.jsx)("option",{value:"completed",children:"Completed"}),Object(O.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})})},p=c(31),v=c.n(p),f=function(e){var t=e.item,c=e.todo,s=e.todos,n=e.setTodos,o=e.disabled,a=e.key;return Object(O.jsxs)("div",{className:v.a.divstyle,children:[Object(O.jsxs)("li",{className:"".concat(v.a.listi," ").concat(c.isCompleted?v.a.completed:""),children:[" ",t," "]}),Object(O.jsx)("button",{onClick:function(){n(s.map((function(e){return e.id===c.id?Object(r.a)(Object(r.a)({},e),{},{isCompleted:!e.isCompleted}):e})))},className:"".concat(v.a.completeBtn," ").concat(o?v.a.hide:""),disabled:o,children:Object(O.jsx)(j.b,{})}),Object(O.jsx)("button",{onClick:function(){n(s.filter((function(e){return e.id!==c.id})))},className:"".concat(v.a.deleteBtn," ").concat(o?v.a.hide:""),disabled:o,children:Object(O.jsx)(j.a,{})})]},a)},_=function(e){var t=e.todos,c=e.setTodos,s=e.filterTodos;return Object(O.jsx)("div",{className:"todo-container",children:Object(O.jsx)("ul",{className:"todo-list",children:s.map((function(e){return Object(O.jsx)(f,{setTodos:c,todos:t,item:e.item,todo:e},e.id)}))})})},g=c(45),y=c.n(g);var N=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)([]),a=Object(d.a)(o,2),i=a[0],l=a[1],u=Object(s.useState)(""),b=Object(d.a)(u,2),m=b[0],h=b[1],p=Object(s.useState)([]),v=Object(d.a)(p,2),f=v[0],g=v[1];return Object(s.useEffect)((function(){!function(){switch(m){case"completed":g(i.filter((function(e){return!0===e.isCompleted})));break;case"uncompleted":g(i.filter((function(e){return!1===e.isCompleted})));break;default:g(i)}}()}),[i,m]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"wel-text",children:" List all your work and manage them "}),Object(O.jsx)("div",{className:y.a.divstyle,children:Object(O.jsx)(x,{inputText:c,todos:i,setTodos:l,setInputText:n,setStatus:h})}),Object(O.jsx)("div",{className:y.a.divstyle,children:Object(O.jsx)(_,{todos:i,setTodos:l,filterTodos:f})}),Object(O.jsx)("div",{className:y.a.divBtn,children:Object(O.jsxs)("button",{onClick:function(e){e.preventDefault();var t=localStorage.getItem("uuid"),c=localStorage.getItem("uname"),s=i.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{uuid:t,uname:c})}));fetch("http://localhost:8000/todos/create",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){console.log(e),alert("Your Todo List is saved")})).catch((function(e){console.error(e),alert("error in saving")}))},type:"submit",className:y.a.subButton,children:["Save",Object(O.jsx)(j.c,{})]})})]})},w=c(59),T=c.n(w),S=c(66),C=c(68),B=c.n(C),k=function(){var e=Object(l.f)(),t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],o=c[1],a=Object(s.useState)(void 0),i=Object(d.a)(a,2),r=i[0],j=i[1];return console.log(e.uname),Object(s.useEffect)((function(){Object(S.a)(T.a.mark((function t(){var c,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/todos/listByName/".concat(e.uname),{method:"GET",mode:"cors"});case 3:return c=t.sent,console.log(c),t.next=7,c.json();case 7:s=t.sent,j(s.length),console.log(s),console.log({length:r}),o(s),t.next=17;break;case 14:throw t.prev=14,t.t0=t.catch(0),t.t0;case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))()}),[r,e.uname]),void 0===r?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"wel-text",children:" You are doing great!"}),Object(O.jsxs)("h3",{className:"head-text",children:[" Loading ... ",Object(O.jsx)(B.a,{className:"head-text"})]})]}):0===r?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"wel-text",children:"  You are doing great!"}),Object(O.jsx)("h3",{className:"head-text",children:" Error! something went wrong "})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"wel-text",children:" You are doing great!"}),n.map((function(e){return Object(O.jsx)(f,{setTodos:o,todos:n,item:e.item,todo:e,disabled:!0,length:r},e._id)})),Object(O.jsx)("h5",{className:"home-text",children:" Don't forget to love yourself :) "})]})},F=c(55),I=c.n(F);var U=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h5",{className:"wel-text",children:" View your progress"}),Object(O.jsxs)("div",{className:I.a.divstyle,children:[Object(O.jsx)("input",{value:c,onChange:function(e){n(e.target.value)},type:"text",className:"".concat(I.a.inputs),placeholder:"enter uname"}),Object(O.jsx)(i.b,{to:"/view/".concat(c),className:I.a.submitBtn,children:"ok"})]})]})},E=c(144),Y=c(143),D=c(146),L=c(142),W=c(140),J=c(141),P=c(139);function V(e){var t=e.setUname,c=n.a.useState(!1),s=Object(d.a)(c,2),o=s[0],a=s[1],i="",l=function(){localStorage.setItem("uname",i),a(!1),t(i),console.log(i)};return Object(O.jsxs)("div",{className:"wel-text",children:[Object(O.jsx)(E.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)},children:"Set User Id"}),Object(O.jsxs)(D.a,{open:o,onClose:l,"aria-labelledby":"form-dialog-title",children:[Object(O.jsx)(P.a,{id:"form-dialog-title",children:"Set User Id"}),Object(O.jsxs)(W.a,{children:[Object(O.jsx)(J.a,{children:"If you are a new user please set your UserId. You will later use it to view your todos."}),Object(O.jsx)(Y.a,{autoFocus:!0,margin:"dense",id:"name",label:"Enter your Userid",type:"string",fullWidth:!0,onChange:function(e){i=e.target.value}})]}),Object(O.jsxs)(L.a,{children:[Object(O.jsx)(E.a,{onClick:l,color:"primary",children:"Cancel"}),Object(O.jsx)(E.a,{onClick:l,color:"primary",children:"Set"})]})]})]})}var A=function(){var e=Object(s.useState)("Your"),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){null!==localStorage.getItem("uname")&&n(localStorage.getItem("uname"))}),[c]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{className:"head-text",children:[c,"'s ToDo List"]}),Object(O.jsx)("h5",{className:"wel-text",children:" What would you like to do today ?"}),Object(O.jsx)(V,{setUname:n})]})},M=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"linkss",children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/",className:"cardh",children:" Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/create",className:"card",children:" Create Todos "})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/view",className:"cardv",children:" View Todos"})})]})}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",children:Object(O.jsx)(A,{})}),Object(O.jsx)(l.a,{exact:!0,path:"/create",children:Object(O.jsx)(N,{})}),Object(O.jsx)(l.a,{path:"/view/:uname",children:Object(O.jsx)(k,{})}),Object(O.jsx)(l.a,{exact:!0,path:"/view",children:Object(O.jsx)(U,{})})]})]})})};a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root"))},31:function(e,t,c){e.exports={divstyle:"Todo_divstyle__2AP0k",completeBtn:"Todo_completeBtn__1iM3P",deleteBtn:"Todo_deleteBtn__3gbn9",listi:"Todo_listi__1tSP8",completed:"Todo_completed__3J65l",hide:"Todo_hide__mwZuF"}},44:function(e,t,c){e.exports={divstyle:"Form_divstyle__3g0n8",submitBtn:"Form_submitBtn__3V2RR",inputs:"Form_inputs__3qUdD",option:"Form_option__11fLh"}},45:function(e,t,c){e.exports={subButton:"createTodo_subButton__lYnC4",divstyle:"createTodo_divstyle__91e8D",divBtn:"createTodo_divBtn__t2OHE"}},55:function(e,t,c){e.exports={submitBtn:"viewUuid_submitBtn__3We5A",inputs:"viewUuid_inputs__2YONW",divstyle:"viewUuid_divstyle__wY-r7",invalid:"viewUuid_invalid__39W95"}},64:function(e,t,c){},83:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.11c656ef.chunk.js.map