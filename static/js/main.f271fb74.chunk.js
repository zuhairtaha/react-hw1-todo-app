(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(333)},160:function(e,t,a){},250:function(e,t,a){},252:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=(a(160),a(16)),i=a(34),u=a(19),s=a(17),m=a(20),d=a(152),p=a(131),f=a(23),h=a(135),b=a.n(h),E=a(136),g=a.n(E),v=a(61),y=a.n(v),O=a(27),j=a.n(O),k=a(35),w=a.n(k),C=a(137),x=a.n(C);var A=Object(f.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(y.a,{variant:"h6",color:"inherit",className:t.grow},"ToDo App"),r.a.createElement(j.a,{href:"https://hackyourfuture.dk/",target:"_blank",color:"inherit"},"hyf"))))}),S=a(44),N=a.n(S),B=(a(250),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement(N.a,{className:"footer",square:!0},r.a.createElement("footer",null,r.a.createElement("p",null,"First MERN stack application (todo list web application)"),r.a.createElement("p",null,"Front-end: React, Material UI, Apollo GraphQl ",r.a.createElement("br",null),"Back-end: Node.js, ExpressJs, MongoDB, Apollo GraphQl ",r.a.createElement("br",null),"\u26a0\ufe0f Just reading from mongoDB is working currently. another CRUD operations are under construction")))},a}return Object(m.a)(t,e),t}(r.a.Component)),W=a(87),D=a.n(W),F=(a(252),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("div",{className:"center-container"},r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(N.a,{className:"center"},a.props.children))))},a}return Object(m.a)(t,e),t}(r.a.Component)),M=a(153),T=a(82),I=a.n(T),G=a(83),R=a.n(G),_=a(140),q=a.n(_),J=a(139),L=a.n(J),P=a(138),U=a.n(P),Q=a(141),V=a.n(Q),H=a(142),$=a.n(H),z=a(143),K=a.n(z),X=a(65),Y=a(88),Z=a(45),ee=a.n(Z);function te(){var e=Object(Y.a)(["\n  {\n    categories {\n      _id\n      title\n    }\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(Y.a)(["\n  {\n    tasks {\n      _id\n      categoryid\n      description\n      deadline\n      done\n      important\n      createdAt\n      updatedAt\n    }\n  }\n"]);return ae=function(){return e},e}var ne=ee()(ae()),re=ee()(te()),le=a(89),oe=a.n(le),ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={completed:0,buffer:10},a.progress=function(){var e=a.state.completed;if(e>100)a.setState({completed:0,buffer:10});else{var t=10*Math.random(),n=10*Math.random();a.setState({completed:e+t,buffer:e+t+n})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.completed,n=t.buffer;return r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{variant:"buffer",value:a,valueBuffer:n}),r.a.createElement("br",null),r.a.createElement(oe.a,{color:"secondary",variant:"buffer",value:a,valueBuffer:n}))}}]),t}(r.a.Component),ie=Object(f.withStyles)({root:{flexGrow:1}})(ce),ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={checked:[0],todos:[]},a.handleToggle=function(e){return function(){var t=a.state.checked,n=t.indexOf(e),r=Object(M.a)(t);-1===n?r.push(e):r.splice(n,1),a.setState({checked:r})}},a.setTodos=function(e){return a.setState({todos:e})},a.render=function(){return r.a.createElement(I.a,null,r.a.createElement(X.a,{query:ne},function(e){var t=e.loading,n=e.error,l=e.data;return t?r.a.createElement(ie,null):n?r.a.createElement("p",null,"Error ",n.message):l.tasks.map(function(e){var t=e.description,n=(e.deadline,e.important),l=e._id,o=(e.done,e.createdAt);return r.a.createElement(R.a,{key:l,role:void 0,dense:!0,button:!0,onClick:a.handleToggle(t)},r.a.createElement(U.a,{checked:-1!==a.state.checked.indexOf(t),tabIndex:-1}),r.a.createElement(L.a,{primary:t,secondary:o}),r.a.createElement(q.a,null,r.a.createElement(w.a,{"aria-label":"Comments"},r.a.createElement(V.a,null)),r.a.createElement(w.a,{"aria-label":"Comments"},n?r.a.createElement($.a,null):r.a.createElement(K.a,null))))})}))},a}return Object(m.a)(t,e),t}(r.a.Component),se=a(64),me=a.n(se),de=a(146),pe=a.n(de),fe=a(149),he=a.n(fe),be=a(148),Ee=a.n(be),ge=a(147),ve=a.n(ge),ye=a(144),Oe=a.n(ye);var je=Object(f.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,position:"relative",minHeight:200},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(j.a,{variant:"fab",color:"secondary",onClick:e.openDialog,"aria-label":"Add",className:t.fab},r.a.createElement(Oe.a,null))}),ke=a(150),we=a.n(ke),Ce=a(145),xe=a(85),Ae=a.n(xe),Se=a(90),Ne=a.n(Se),Be=a(84),We=a.n(Be),De=a(86),Fe=a.n(De),Me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={category:"",open:!1},a.handleChange=function(e){a.setState(Object(Ce.a)({},e.target.name,e.target.value))},a.handleClose=function(){a.setState({open:!1})},a.handleOpen=function(){a.setState({open:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(X.a,{query:re},function(a){var n=a.loading,l=a.error,o=a.data;return n?"loading...":l?r.a.createElement("span",null,"Error ",l.message):r.a.createElement("form",{autoComplete:"off"},r.a.createElement(We.a,{fullWidth:!0,className:t.formControl},r.a.createElement(Ae.a,{htmlFor:"demo-controlled-open-select"},"Select Category"),r.a.createElement(Fe.a,{open:e.state.open,onClose:e.handleClose,onOpen:e.handleOpen,value:e.state.category,onChange:e.handleChange,inputProps:{name:"category",id:"demo-controlled-open-select"}},r.a.createElement(Ne.a,{value:""}),o.categories.map(function(e){var t=e._id,a=e.title;return r.a.createElement(Ne.a,{key:t,value:t},a)}))))})}}]),t}(r.a.Component),Te=Object(f.withStyles)(function(e){return{button:{display:"block",marginTop:2*e.spacing.unit},formControl:{margin:e.spacing.unit}}})(Me);var Ie=Object(f.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("form",{className:t.container,noValidate:!0},r.a.createElement(me.a,{fullWidth:!0,id:"datetime-local",label:"Next appointment",type:"datetime-local",defaultValue:"2017-05-24T10:30",className:t.textField,InputLabelProps:{shrink:!0}}))}),Ge=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(je,{openDialog:a.handleClickOpen}),r.a.createElement(pe.a,{fullWidth:!0,maxWidth:"md",open:a.state.open,onClose:a.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(ve.a,{id:"form-dialog-title"},"Add new todo"),r.a.createElement(Ee.a,null,r.a.createElement(Te,null),r.a.createElement(me.a,{autoFocus:!0,margin:"dense",id:"name",label:"Task description",type:"email",fullWidth:!0}),r.a.createElement(Ie,null)),r.a.createElement(he.a,null,r.a.createElement(j.a,{variant:"contained",onClick:a.handleClose,color:"default"},"Cancel"),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:a.handleClose},"add",r.a.createElement(we.a,{style:{marginLeft:10}})))))},a}return Object(m.a)(t,e),t}(r.a.Component),Re=new d.a({uri:"https://todos-hyf.herokuapp.com/graphql"}),_e=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(A,null),r.a.createElement(F,null,r.a.createElement(p.ApolloProvider,{client:Re},r.a.createElement(ue,null),r.a.createElement(Ge,null))),r.a.createElement(B,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,2,1]]]);
//# sourceMappingURL=main.f271fb74.chunk.js.map