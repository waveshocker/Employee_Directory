(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"key":"t1","data":{"name":"James","info":"Software Development","contact":{"office":"781-000-002","mobile":"087-321-0292","sms":"617-000-002","email":"jtaylor@company.ie"}}},{"key":"t2","data":{"name":"Chris","info":"Human Resources","contact":{"office":"781-000-201","mobile":"087-627-2122","sms":"617-002-2023","email":"chris@company.ie"}}},{"key":"t3","data":{"name":"Frank","info":"Business Analyst","contact":{"office":"781-000-021","mobile":"085-521-6122","sms":"617-001-272","email":"frank@company.ie"}}},{"key":"t4","data":{"name":"Paul","info":"Software Development","contact":{"office":"781-000-003","mobile":"084-671-4322","sms":"617-000-176","email":"paul@company.ie"}}},{"key":"t5","data":{"name":"Thomas","info":"Quality Assurance","contact":{"office":"781-000-957","mobile":"087-871-0222","sms":"617-000-992","email":"thomas@company.ie"}}},{"key":"t6","data":{"name":"Thomas","info":"Quality Assurance","contact":{"office":"781-000-957","mobile":"087-871-0222","sms":"617-000-992","email":"thomas@company.ie"}}},{"key":"t7","data":{"name":"Model","info":"Manager","contact":{"office":"1111-1111-11","mobile":"22-222-222","sms":"333-333-33","email":"Model@company.ie"}}},{"key":"t8","data":{"name":"Sarah","info":"UI/UX Designer","contact":{"office":"781-000-012","mobile":"086-321-1752","sms":"617-000-012","email":"swhite@company.ie"}}}]')},35:function(e,t,a){e.exports=a(53)},40:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(27),r=a.n(l),c=(a(40),a(4)),i=a(5),m=a(8),s=a(7),p=a(54),u=a(23),y=a(57),f=a(12),h=a(11),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onClick=function(){e.props.onEmployeeClick(e.props.employee)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.employee,t=e.name,a=e.info,n="images/"+t+".jpg";return o.a.createElement("div",{className:"employee-item",sstyle:this.props.style,onClick:this.onClick},o.a.createElement("img",{src:n}),o.a.createElement("div",{className:"employee-item-text"},o.a.createElement("h2",null,t),o.a.createElement("p",null,a)))}}]),a}(o.a.Component),b=a(56),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).getDefaultStyles=function(){return e.props.employeeData.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{style:{height:0,opacity:1}})}))},e.getStyles=function(){return e.props.employeeData.map((function(e,t){return Object(f.a)(Object(f.a)({},e),{},{style:{height:Object(h.spring)(125,h.presets.gentle),opacity:Object(h.spring)(1,h.presets.gentle)}})}))},e}return Object(i.a)(a,[{key:"willEnter",value:function(){return{height:0,opacity:1}}},{key:"willLeave",value:function(){return{height:0,opacity:1}}},{key:"render",value:function(){var e=this;return o.a.createElement(h.TransitionMotion,{defaultStyles:this.getDefaultStyles(),styles:this.getStyles,willLeave:this.willLeave,willEnter:this.willEnter},(function(t){return o.a.createElement(b.a,null,t.map((function(t){var a=t.key,n=t.style,l=t.data;return o.a.createElement(E,{key:a,style:n,employee:l,onEmployeeClick:e.props.onEmployeeClick})})))}))}}]),a}(o.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onChange=function(t){return e.props.onSearch(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"home-container"},o.a.createElement("h1",null,"Employee Directory"),o.a.createElement(y.a,{onChange:this.onChange}),o.a.createElement(d,{employeeData:this.props.employeeData,onEmployeeClick:this.props.onEmployeeClick}))}}]),a}(o.a.Component),j=a(55),O=a(33),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.employee,t=e.name,a=e.info;return o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("h2",null,a))}}]),a}(o.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=o.a.createElement(k,{employee:this.props.employee}),t=this.props.employee.contact;return o.a.createElement(j.a,{bsClass:"employee-card",header:e},o.a.createElement(b.a,null,o.a.createElement(O.a,null,t.office),o.a.createElement(O.a,null,t.mobile),o.a.createElement(O.a,null,t.sms),o.a.createElement(O.a,null,t.email)))}}]),a}(o.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.selectedEmployee;return o.a.createElement("div",{className:"employee-container"},o.a.createElement("h1",{style:{marginleft:"20px"}},"Employee"),o.a.createElement(g,{employee:e}))}}]),a}(o.a.Component),w=function(e,t){return u.filter((function(t){return!!t.data.name.toLowerCase().includes(e.toLowerCase())})).slice(0,t)},S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSearch=function(t){e.setState({filteredEmployee:w(t.target.value,4)})},e.onEmployeeClick=function(t){e.setState({selectedEmployee:{name:t.name,info:t.info,contact:t.contact}})},e.state={selectedEmployee:u[0].data,filteredEmployee:w("",4)},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,{lg:8,md:7,sm:4,lgOffset:2},o.a.createElement(p.a,{lg:6},o.a.createElement(v,{onSearch:this.onSearch,employeeData:this.state.filteredEmployee,onEmployeeClick:this.onEmployeeClick})),o.a.createElement(p.a,{lg:6},o.a.createElement(C,{selectedEmployee:this.state.selectedEmployee})))}}]),a}(o.a.Component);r.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c79bf1b1.chunk.js.map