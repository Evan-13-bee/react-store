(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports={errorInput:"SuperInputText_errorInput__2jhA1",error:"SuperInputText_error__1STYY",form:"SuperInputText_form__20X4y",contentName:"SuperInputText_contentName__2PGV5",labelName:"SuperInputText_labelName__3nsj9"}},,function(e,a,n){e.exports={message:"Message_message__3Ruqf",HW1:"Message_HW1__1H6wV",photo:"Message_photo__2gg9O",profileInfo:"Message_profileInfo__18TRw",angle:"Message_angle__3rMCU",time:"Message_time__28XHD"}},,,,function(e,a,n){e.exports={rangedDiv:"SuperDoubleRange_rangedDiv__Wq86z",rangeValue:"SuperDoubleRange_rangeValue__30g8v",range:"SuperDoubleRange_range__25ZHJ",wrapper:"SuperDoubleRange_wrapper__swyFO"}},,,,,,function(e,a,n){e.exports={box:"Loading_box__2w1wT",lightbar:"Loading_lightbar__3bqZg",animatelightbar:"Loading_animatelightbar__16Fdk",topLayer:"Loading_topLayer__1BTBX",animatetopLayer:"Loading_animatetopLayer__51dog"}},function(e,a,n){e.exports={rangedDiv:"SuperRange_rangedDiv__165HU",rangeValue:"SuperRange_rangeValue__1Dz97",range:"SuperRange_range__1MWws",range2:"SuperRange_range2__2kYb7"}},function(e,a,n){e.exports={container:"AlternativeSuperRadio_container__3PN5b",awesomeIcon:"AlternativeSuperRadio_awesomeIcon__1cbDg"}},function(e,a,n){e.exports={rangedDiv:"MyRangeComponent_rangedDiv__ydWDo",rangeValue:"MyRangeComponent_rangeValue__1sSrw",range:"MyRangeComponent_range__3L4Gz"}},,function(e,a,n){e.exports={f:"SuperButton_f__3yCPG",spanni:"SuperButton_spanni__22gfV",animate:"SuperButton_animate__1fD8D"}},function(e,a,n){e.exports={wrapper:"HW11_wrapper__2PsNy"}},function(e,a,n){e.exports={blue:"HW4_blue__2Oo57",column:"HW4_column__21DJY",testSpanError:"HW4_testSpanError__QKYGv"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__2KwkL",spanClassName:"SuperCheckbox_spanClassName__1i5qW"}},,,,,,function(e,a,n){e.exports={App:"App_App__2sCxP"}},,,function(e,a,n){e.exports={someClass:"Greeting_someClass__3L1-D",error:"Greeting_error__KR9H-"}},function(e,a,n){},function(e,a,n){e.exports={wraperEditableSpan:"HW6_wraperEditableSpan__3OaeX"}},,function(e,a,n){e.exports=n(54)},,,,,,,,function(e,a,n){},,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(17),c=n.n(l),o=n(13),u=(n(49),n(34)),i=n.n(u),m=n(7),s=n(3);var p=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},E=n(2),g=n(4),d=n(25),f=n.n(d),v=function(e){var a=e.text,n=Object(g.a)(e,["text"]),l=Object(t.useState)(),c=Object(E.a)(l,2),o=c[0],u=c[1],i=!1;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({className:f.a.f,onMouseEnter:function(e){if(!0!==i){i=!0;var a=e.target.getBoundingClientRect(),n=e.clientX-a.left,t=e.clientY-a.top,l=r.a.createElement("span",{className:f.a.spanni,style:{left:"".concat(n,"px"),top:"".concat(t,"px")}});u(l),setTimeout((function(){u(null),i=!1}),1e3)}}},n),o,a||"button"))},h=n(40),_={loading:!1},b=n(20),C=n.n(b),O=function(){return r.a.createElement("div",{className:C.a.box},r.a.createElement("div",{className:C.a.lightbar}),r.a.createElement("div",{className:C.a.topLayer}),r.a.createElement("h2",null,"Loading"))};var y=function(){var e=Object(o.c)((function(e){return e.loading})),a=Object(o.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e.loading?r.a.createElement(O,null):r.a.createElement("div",null,r.a.createElement(v,{text:"set loading...",onClick:function(){a({type:"changeLoadStatus"}),setTimeout((function(){a({type:"changeLoadStatus"})}),1e3),console.log("loading...")}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=n(21),j=n.n(N),k=function(e){e.type;var a=e.onChange,n=e.onChangeRange,t=(e.className,e.value),l=Object(g.a)(e,["type","onChange","onChangeRange","className","value"]);return r.a.createElement("div",{className:j.a.rangedDiv},r.a.createElement("span",{id:j.a.rangeValue},t),r.a.createElement("input",Object.assign({className:j.a.range,onChange:function(e){a&&a(e),n&&n(+e.currentTarget.value)},type:"range",name:"",value:t,min:0,max:1e3},l)))},x=n(14),S=n.n(x),w=function(e){var a=e.onChangeRange,n=e.value1,t=(e.onChange,Object(g.a)(e,["onChangeRange","value1","onChange"]));return r.a.createElement("div",{className:S.a.rangedDiv},r.a.createElement("span",{id:S.a.rangeValue},n[1]),r.a.createElement("input",Object.assign({className:S.a.range,onChange:function(e){return a([+e.currentTarget.value,n[1]])},type:"range",name:"",value:n[0],min:0,max:1e3},t)),r.a.createElement("input",Object.assign({className:S.a.range,onChange:function(e){return a([n[0],+e.currentTarget.value])},type:"range",name:"",value:n[1],min:0,max:1e3},t)))},D=n(26),T=n.n(D);var R=function(){var e=Object(t.useState)(0),a=Object(E.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(100),o=Object(E.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",{className:T.a.wrapper},r.a.createElement(k,{onChangeRange:l,value:n})),r.a.createElement("div",{className:T.a.wrapper},r.a.createElement(w,{value1:[n,u],onChangeRange:function(e){e[1]<=e[0]||(l(e[0]),i(e[1]))}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=function(e){var a=e.options,n=(e.onChange,e.onChangeOption),t=Object(g.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:"".concat(e," - ").concat(a)},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.currentTarget.value)}},t),l)},L=(n(36),n(35),n(22)),M=n.n(L),W=function(e){e.type,e.name;var a=e.options,n=(e.value,e.onChange,e.onChangeOption,Object(g.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement("div",{className:M.a.container},n)},P=["x","y","z"];var A=function(){var e=Object(t.useState)(P[1]),a=Object(E.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(I,{options:P,value:n,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(W,{name:"radio",options:P,value:n,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=n(9),H=function(e,a){switch(a.type){case"sort":switch(a.payload){case"up":var n=Object(F.a)(e);return n.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})),n;case"down":var t=Object(F.a)(e);return t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})),t.reverse()}case"check":return Object(F.a)(e).filter((function(e){return e.age>=a.payload}));default:return e}},B=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var J=function(){var e=Object(t.useState)(B),a=Object(E.a)(e,2),n=a[0],l=a[1],c=n.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name)," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(v,{text:"sort up",onClick:function(){console.log("im here"),l(H(B,{type:"sort",payload:"up"}))}}),r.a.createElement(v,{text:"sort down",onClick:function(){console.log("im here"),l(H(B,{type:"sort",payload:"down"}))}}),r.a.createElement(v,{text:"check 18",onClick:function(){console.log("im here"),l(H(B,{type:"check",payload:18}))}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var U=function(){var e=Object(t.useState)(0),a=Object(E.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(new Date),o=Object(E.a)(c,2),u=o[0],i=o[1],m=Object(t.useState)(!1),s=Object(E.a)(m,2),p=s[0],g=s[1],d=function(){clearInterval(n)},f=u.toLocaleTimeString(),h=u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)}},f),p?r.a.createElement("div",null,h):r.a.createElement("br",null),r.a.createElement(v,{text:"start",onClick:function(){d(),i(new Date);var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}}),r.a.createElement(v,{text:"stop",onClick:d}))};var V=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(U,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,"Junior",r.a.createElement(A,null),r.a.createElement(J,null),r.a.createElement(V,null),r.a.createElement(y,null),r.a.createElement(R,null))};var G=function(){return r.a.createElement("div",null,"Junior Plus")},K=n(23),X=n.n(K),q=function(){var e=Object(t.useState)(0),a=Object(E.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",{className:X.a.rangedDiv},r.a.createElement("span",{id:X.a.rangeValue},n),r.a.createElement("input",{className:X.a.range,onChange:function(e){console.log(e.currentTarget),l(+e.currentTarget.value)},type:"range",name:"",value:n,min:0,max:1e3}))},z=function(){return r.a.createElement("div",null,r.a.createElement(q,null))},Z=n(10),Q=n.n(Z),$=function(e){return r.a.createElement("div",{className:Q.a.HW1},r.a.createElement("img",{className:Q.a.photo,src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:Q.a.angle}),r.a.createElement("div",{className:Q.a.profileInfo},r.a.createElement("div",{style:{wordBreak:"break-word"}},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("p",{className:Q.a.time},e.time)))},ee="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",ae="Some Name",ne="some realy long textfff fffffffffffff fffffffffff",te="22:00";var re=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement($,{avatar:ee,name:ae,message:ne,time:te}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var le=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.affair.name," ",r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var ce=function(e){var a=e.data.map((function(a){return r.a.createElement(le,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},oe=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var ue=function(){var e=Object(t.useState)(oe),a=Object(E.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(E.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority==a}))}(n,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(ce,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},ie=n(56),me=n(37),se=n.n(me),pe=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o="Its empty"==l?se.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:n,className:o}),r.a.createElement("span",{style:{color:"red"}},l),r.a.createElement("button",{onClick:t},"add"),r.a.createElement("span",null,c))},Ee=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(E.a)(l,2),o=c[0],u=c[1],i=Object(t.useState)(!1),m=Object(E.a)(i,2),s=m[0],p=m[1],g=a.length;return r.a.createElement(pe,{name:o,setNameCallback:function(e){"Its empty"==s&&p(!1),u(e.currentTarget.value)},addUser:function(){""!==o?(n(o),alert(o),u(""),"Its empty"==s&&p(!1)):""==o&&p("Its empty")},error:s,totalUsers:g})};var ge=function(){var e=Object(t.useState)([]),a=Object(E.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(Ee,{users:n,addUserCallback:function(e){var a={_id:Object(ie.a)(),name:e};l([a].concat(Object(F.a)(n)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=n(8),fe=n.n(de),ve=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),u=e.labelName,i=Object(g.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","labelName"]),m="".concat(fe.a.error," ").concat(o||""),s="".concat(c?fe.a.errorInput:fe.a.superInput);return r.a.createElement("div",{className:fe.a.form},r.a.createElement("input",Object.assign({autoComplete:"off",type:"text",name:"name",required:!0,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),l&&"Enter"===e.key&&l()},className:s},i)),r.a.createElement("label",{htmlFor:"name",className:fe.a.labelName},r.a.createElement("span",{className:fe.a.contentName},u)),c&&r.a.createElement("span",{className:m},c))},he=n(27),_e=n.n(he),be=n(28),Ce=n.n(be),Oe=function(e){e.type,e.onChange;var a=e.onChangeChecked,n=e.className,t=(e.spanClassName,e.children),l=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(Ce.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked)},className:c},l)),t&&r.a.createElement("span",{className:Ce.a.spanClassName},t))};var ye=function(){var e=Object(t.useState)(""),a=Object(E.a)(e,2),n=a[0],l=a[1],c=n?"":"error",o=Object(t.useState)(!1),u=Object(E.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:_e.a.column},r.a.createElement(ve,{value:n,onChangeText:l,onEnter:function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},error:c,labelName:"Type text here"}),r.a.createElement(ve,{className:_e.a.blue,labelName:"Type text here"}),r.a.createElement(v,null),r.a.createElement(v,null),r.a.createElement(v,null),r.a.createElement(Oe,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(Oe,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ne=n(38),je=n.n(Ne),ke=function(e){e.autoFocus;var a=e.onBlur,n=e.onEnter,l=e.spanProps,c=Object(g.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(t.useState)(!1),u=Object(E.a)(o,2),i=u[0],m=u[1],s=l||{},p=s.children,d=s.onDoubleClick,f=s.className,v=Object(g.a)(s,["children","onDoubleClick","className"]),h="".concat(je.a.styleForSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(ve,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),n&&n()},labelName:"Type text here"},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:h},v),"\u270e ",p||c.value))};function xe(e,a){var n=JSON.stringify(a);localStorage.setItem(e,n)}function Se(e,a){var n=a,t=localStorage.getItem(e);return null!==t&&(n=JSON.parse(t)),n}xe("test",{x:"A",y:1});Se("test",{x:"",y:0});var we=n(39),De=n.n(we);var Te=function(){var e=Object(t.useState)(Se("editable-span-value","")),a=Object(E.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:De.a.wraperEditableSpan},r.a.createElement(ke,{value:n,onChangeText:l,spanProps:{children:n?void 0:"enter text..."}})),r.a.createElement(v,{text:"save",onClick:function(){xe("editable-span-value",n)}},"save"),r.a.createElement(v,{text:"restore",onClick:function(){l(Se("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Re=function(){return r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ue,null),r.a.createElement(ge,null),r.a.createElement(ye,null),r.a.createElement(Te,null))},Ie="/pre-junior",Le="/junior",Me="/junior-plus",We="/my-works";var Pe=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:Ie})}}),r.a.createElement(s.b,{path:Ie,render:function(){return r.a.createElement(Re,null)}}),r.a.createElement(s.b,{path:Le,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(s.b,{path:Me,render:function(){return r.a.createElement(G,null)}}),r.a.createElement(s.b,{path:We,render:function(){return r.a.createElement(z,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(p,null)}})))};var Ae=function(){return r.a.createElement("div",null,"// add NavLinks",r.a.createElement("div",null,r.a.createElement(m.b,{style:{textDecoration:"none",color:"red"},to:Ie},"PRE_JUNIOR")),r.a.createElement("div",null,r.a.createElement(m.b,{style:{textDecoration:"none",color:"red"},to:Le},"JUNIOR")),r.a.createElement("div",null,r.a.createElement(m.b,{style:{textDecoration:"none",color:"red"},to:Me},"JUNIOR_PLUS")),r.a.createElement("div",null,r.a.createElement(m.b,{style:{textDecoration:"none",color:"red"},to:We},"MY_WORKS")))};var Fe=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(Ae,null),r.a.createElement(Pe,null)))};var He=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Fe,null))},Be=n(31),Je=Object(Be.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"changeLoadStatus":var n=!e.loading,t=Object(h.a)({},e,{loading:n});return t;default:return e}}}),Ue=Object(Be.b)(Je),Ve=Ue;window.store=Ue;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Ve},r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[41,1,2]]]);
//# sourceMappingURL=main.2d0e7a6b.chunk.js.map