(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{153:function(e,t,s){},154:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),n=s(16),a=s.n(n),o=(s(98),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,182)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))}),i=(s(99),s(100),s(101),s(102),s(103),s(21)),l=s(22),j=s(24),d=s(23),m=s(155),h=s(156),b=s(157),u=s(158),O=s(159),p=s(160),x=s(11),f=s(0),g=function(){return Object(f.jsxs)("div",{className:"col",children:[Object(f.jsx)("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(f.jsx)("p",{children:"Loading..."})]})},N="https://my-json-server.typicode.com/mnajjar2008/jsonserver/",v="https://raw.githubusercontent.com/mnajjar2008/jsonserver/master/public/";function y(e){var t=e.campsite;return Object(f.jsx)(m.a,{children:Object(f.jsxs)(x.b,{to:"/directory/".concat(t.id),children:[Object(f.jsx)(h.a,{width:"100%",src:v+t.image,alt:t.name}),Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{children:t.name})})]})})}var w=function(e){var t=e.campsites.campsites.map((function(e){return Object(f.jsx)("div",{className:"col-md-5 m-1",children:Object(f.jsx)(y,{campsite:e})},e.id)}));return e.campsites.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(g,{})})}):e.campsites.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("h4",{children:e.campsites.errMess})})})}):Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(p.a,{children:Object(f.jsx)(x.b,{to:"/home",children:"Home"})}),Object(f.jsx)(p.a,{active:!0,children:"Directory"})]}),Object(f.jsx)("h2",{children:"Directory"}),Object(f.jsx)("hr",{})]})}),Object(f.jsx)("div",{className:"row",children:t})]})},M=s(20),k=s(181),L=s(161),C=s(162),F=s(163),S=s(164),E=s(165),T=s(166),A=s(10),I=s(29),D=function(e){return function(t){return!t||t.length<=e}},P=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={isModalOpen:!1},c.toggleModal=c.toggleModal.bind(Object(M.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(M.a)(c)),c}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.author,e.text)}},{key:"render",value:function(){var e,t=this;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsxs)(k.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(L.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(f.jsx)(C.a,{children:Object(f.jsxs)(A.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"rating",children:"Rating"}),Object(f.jsxs)(A.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control",children:[Object(f.jsx)("option",{children:"1"}),Object(f.jsx)("option",{children:"2"}),Object(f.jsx)("option",{children:"3"}),Object(f.jsx)("option",{children:"4"}),Object(f.jsx)("option",{children:"5"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"author",children:"Your Name"}),Object(f.jsx)(A.Control.text,{model:".author",id:"author",name:"author",className:"form-control",validators:{minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:D(15)}}),Object(f.jsx)(A.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"text",children:"Comment"}),Object(f.jsx)(A.Control.textarea,{model:".text",id:"text",name:"text",rows:"4",className:"form-control"})]}),Object(f.jsx)(S.a,{type:"submit",color:"primary",children:"Submit Comment"})]})})]}),Object(f.jsxs)(S.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("i",{className:"fa fa-lg fa-pencil"})," Submit Comment"]})]})}}]),s}(c.Component);function R(e){return Object(f.jsx)("div",{className:"col-md-5 m-1",children:Object(f.jsx)(I.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{top:!0,src:v+e.campsite.image,alt:e.campsite.name}),Object(f.jsx)(E.a,{children:Object(f.jsx)(T.a,{children:e.campsite.description})})]})})})}function q(e){var t=e.comments,s=e.postComment,c=e.campsiteId;if(t)return Object(f.jsxs)("div",{className:"col-md-5 m-1",children:[Object(f.jsx)("h4",{children:"Comments"}),Object(f.jsx)(I.Stagger,{in:!0,children:t.map((function(e){return Object(f.jsx)(I.Fade,{in:!0,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:e.text}),Object(f.jsxs)("p",{children:["-- ",e.author," ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]})},e.id)}))}),Object(f.jsx)(P,{campsiteId:c,postComment:s})]})}var _=function(e){return e.isLoading?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)(g,{})})}):e.errMess?Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsx)("h4",{children:e.errMess})})})}):e.campsite?Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(p.a,{children:Object(f.jsx)(x.b,{to:"/directory",children:"Directory"})}),Object(f.jsx)(p.a,{active:!0,children:e.campsite.name})]}),Object(f.jsx)("h2",{children:e.campsite.name}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)(R,{campsite:e.campsite}),Object(f.jsx)(q,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id})]})]}):Object(f.jsx)("div",{})},W=s(167),U=s(168),B=s(169),H=s(170),J=s(171),Y=s(172),G=s(173),Z=s(174),z=s(175),$=s(176),K=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.handleLogin=c.handleLogin.bind(Object(M.a)(c)),c.toggleModal=c.toggleModal.bind(Object(M.a)(c)),c.toggleNav=c.toggleNav.bind(Object(M.a)(c)),c}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(W.a,{fluid:!0,children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsx)("h1",{children:"NuCamp"}),Object(f.jsx)("h2",{children:"a better way to camp"})]})})})}),Object(f.jsx)(U.a,{dark:!0,sticky:"top",expand:"md",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(B.a,{className:"mr-auto",href:"/",children:Object(f.jsx)("img",{src:v+"images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})}),Object(f.jsx)(H.a,{onClick:this.toggleNav}),Object(f.jsxs)(J.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(f.jsxs)(Y.a,{navbar:!0,children:[Object(f.jsx)(G.a,{children:Object(f.jsxs)(x.c,{className:"nav-link",to:"/home",children:[Object(f.jsx)("i",{className:"fa fa-home fa-lg"})," Home"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(x.c,{className:"nav-link",to:"/directory",children:[Object(f.jsx)("i",{className:"fa fa-list fa-lg"})," Directory"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(x.c,{className:"nav-link",to:"/aboutus",children:[Object(f.jsx)("i",{className:"fa fa-info fa-lg"})," About"]})}),Object(f.jsx)(G.a,{children:Object(f.jsxs)(x.c,{className:"nav-link",to:"/contactus",children:[Object(f.jsx)("i",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(f.jsx)("span",{className:"navbar-text ml-auto",children:Object(f.jsxs)(S.a,{outline:!0,onClick:this.toggleModal,children:[Object(f.jsx)("i",{className:"fa fa-sign-in fa-lg"})," Login"]})})]})]})}),Object(f.jsxs)(k.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(f.jsx)(L.a,{toggle:this.toggleModal,children:"Login"}),Object(f.jsx)(C.a,{children:Object(f.jsxs)(Z.a,{onSubmit:this.handleLogin,children:[Object(f.jsxs)(z.a,{children:[Object(f.jsx)(F.a,{htmlFor:"username",children:"Username"}),Object(f.jsx)($.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)(F.a,{htmlFor:"password",children:"Password"}),Object(f.jsx)($.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(f.jsx)(z.a,{check:!0,children:Object(f.jsxs)(F.a,{check:!0,children:[Object(f.jsx)($.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(f.jsx)(S.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(c.Component);var Q=function(e){return Object(f.jsx)("footer",{className:"site-footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-4 col-sm-2 offset-1",children:[Object(f.jsx)("h5",{children:"Links"}),Object(f.jsxs)("ul",{className:"list-unstyled",children:[Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/directory",children:"Directory"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/aboutus",children:"About"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/contactus",children:"Contact"})})]})]}),Object(f.jsxs)("div",{className:"col-6 col-sm-3 text-center",children:[Object(f.jsx)("h5",{children:"Social"}),Object(f.jsx)("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/",children:Object(f.jsx)("i",{className:"fa fa-instagram"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/",children:Object(f.jsx)("i",{className:"fa fa-facebook"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(f.jsx)("i",{className:"fa fa-twitter"})})," ",Object(f.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(f.jsx)("i",{className:"fa fa-youtube"})})]}),Object(f.jsxs)("div",{className:"col-sm-4 text-center",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]})})})};function V(e){var t=e.item,s=e.isLoading,c=e.errMess;return s?Object(f.jsx)(g,{}):c?Object(f.jsx)("h4",{children:c}):Object(f.jsx)(I.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"},children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{src:v+t.image,alt:t.name}),Object(f.jsxs)(E.a,{children:[Object(f.jsx)(u.a,{children:t.name}),Object(f.jsx)(T.a,{children:t.description})]})]})})}var X=function(e){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(V,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})}),Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(V,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})}),Object(f.jsx)("div",{className:"col-md m-1",children:Object(f.jsx)(V,{item:e.partner,isLoading:e.partnerLoading,errMess:e.partnerErrMess})})]})})},ee=s(177),te=s(178),se=function(e){return e&&e.length},ce=function(e){return function(t){return!t||t.length<=e}},re=function(e){return function(t){return t&&t.length>=e}},ne=function(e){return!isNaN(+e)},ae=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},oe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},c.handleSubmit=c.handleSubmit.bind(Object(M.a)(c)),c}return Object(l.a)(s,[{key:"handleSubmit",value:function(e){this.props.postfeedBack(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(p.a,{children:Object(f.jsx)(x.b,{to:"/home",children:"Home"})}),Object(f.jsx)(p.a,{active:!0,children:"Contact Us"})]}),Object(f.jsx)("h2",{children:"Contact Us"}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row row-content align-items-center",children:[Object(f.jsxs)("div",{className:"col-sm-4",children:[Object(f.jsx)("h5",{children:"Our Address"}),Object(f.jsxs)("address",{children:["1 Nucamp Way",Object(f.jsx)("br",{}),"Seattle, WA 98001",Object(f.jsx)("br",{}),"U.S.A."]})]}),Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234",children:[Object(f.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(f.jsx)("br",{}),Object(f.jsxs)("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co",children:[Object(f.jsx)("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"]})]})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("h2",{children:"Send us your Feedback"}),Object(f.jsx)("hr",{})]}),Object(f.jsx)("div",{className:"col-md-10",children:Object(f.jsxs)(A.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"firstName",md:2,children:"First Name"}),Object(f.jsxs)(te.a,{md:10,children:[Object(f.jsx)(A.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:se,minLength:re(2),maxLength:ce(15)}}),Object(f.jsx)(A.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"lastName",md:2,children:"Last Name"}),Object(f.jsxs)(te.a,{md:10,children:[Object(f.jsx)(A.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:se,minLength:re(2),maxLength:ce(15)}}),Object(f.jsx)(A.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"phoneNum",md:2,children:"Phone"}),Object(f.jsxs)(te.a,{md:10,children:[Object(f.jsx)(A.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:se,minLength:re(10),maxLength:ce(15),isNumber:ne}}),Object(f.jsx)(A.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"email",md:2,children:"Email"}),Object(f.jsxs)(te.a,{md:10,children:[Object(f.jsx)(A.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:se,validEmail:ae}}),Object(f.jsx)(A.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}})]})]}),Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(te.a,{md:{size:4,offset:2},children:Object(f.jsx)("div",{className:"form-check",children:Object(f.jsxs)(F.a,{check:!0,children:[Object(f.jsx)(A.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",Object(f.jsx)("strong",{children:"May we contact you?"})]})})}),Object(f.jsx)(te.a,{md:4,children:Object(f.jsxs)(A.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(f.jsx)("option",{children:"By Phone"}),Object(f.jsx)("option",{children:"By Email"})]})})]}),Object(f.jsxs)(ee.a,{className:"form-group",children:[Object(f.jsx)(F.a,{htmlFor:"feedback",md:2,children:"Your Feedback"}),Object(f.jsx)(te.a,{md:10,children:Object(f.jsx)(A.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"})})]}),Object(f.jsx)(ee.a,{className:"form-group",children:Object(f.jsx)(te.a,{md:{size:10,offset:2},children:Object(f.jsx)(S.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(c.Component),ie=s(179),le=s(180);function je(e){var t=e.partner;return t?Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(ie.a,{object:!0,src:v+t.image,alt:t.name,width:"150"}),Object(f.jsxs)(ie.a,{className:"ml-5 mb-4",body:!0,children:[t.description,Object(f.jsx)(ie.a,{heading:!0,children:t.name})]})]}):Object(f.jsx)("div",{})}function de(e){if(e.partners.isLoading)return Object(f.jsx)(g,{});if(e.partners.errMess)return Object(f.jsx)("h4",{children:e.partners.errMess});var t=e.partners.partners.map((function(e){return Object(f.jsx)(I.Fade,{in:!0,children:Object(f.jsx)(ie.a,{tag:"li",children:Object(f.jsx)(je,{partner:e})})},e.id)}));return Object(f.jsx)("div",{className:"col mt-4",children:Object(f.jsx)(ie.a,{list:!0,children:Object(f.jsx)(I.Stagger,{in:!0,children:t})})})}var me=function(e){return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col",children:[Object(f.jsxs)(O.a,{children:[Object(f.jsx)(p.a,{children:Object(f.jsx)(x.b,{to:"/home",children:"Home"})}),Object(f.jsx)(p.a,{active:!0,children:"About Us"})]}),Object(f.jsx)("h2",{children:"About Us"}),Object(f.jsx)("hr",{})]})}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsxs)("div",{className:"col-sm-6",children:[Object(f.jsx)("h3",{children:"Our Mission"}),Object(f.jsx)("p",{children:"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other."})]}),Object(f.jsx)("div",{className:"col-sm-6",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(le.a,{className:"bg-primary text-white",children:Object(f.jsx)("h3",{children:"Facts At a Glance"})}),Object(f.jsx)(E.a,{children:Object(f.jsxs)("dl",{className:"row",children:[Object(f.jsx)("dt",{className:"col-6",children:"Founded"}),Object(f.jsx)("dd",{className:"col-6",children:"February 3, 2016"}),Object(f.jsx)("dt",{className:"col-6",children:"No. of Campsites in 2019"}),Object(f.jsx)("dd",{className:"col-6",children:"563"}),Object(f.jsx)("dt",{className:"col-6",children:"No. of Reviews in 2019"}),Object(f.jsx)("dd",{className:"col-6",children:"4388"}),Object(f.jsx)("dt",{className:"col-6",children:"Employees"}),Object(f.jsx)("dd",{className:"col-6",children:"42"})]})})]})}),Object(f.jsx)("div",{className:"col",children:Object(f.jsx)(m.a,{className:"bg-light mt-3",children:Object(f.jsx)(E.a,{children:Object(f.jsxs)("blockquote",{className:"blockquote",children:[Object(f.jsx)("p",{className:"mb-0",children:"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."}),Object(f.jsxs)("footer",{className:"blockquote-footer",children:["Muriel Strode, ",Object(f.jsx)("cite",{title:"Source Title",children:'"Wind-Wafted Wild Flowers" - The Open Court, 1903'})]})]})})})})]}),Object(f.jsxs)("div",{className:"row row-content",children:[Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("h3",{children:"Community Partners"})}),Object(f.jsx)(de,{partners:e.partners})]})]})},he=s(12),be=s(27),ue="ADD_COMMENT",Oe="CAMPSITES_LOADING",pe="CAMPSITES_FAILED",xe="ADD_CAMPSITES",fe="ADD_COMMENTS",ge="COMMENTS_FAILED",Ne="PROMOTIONS_LOADING",ve="ADD_PROMOTIONS",ye="PROMOTIONS_FAILED",we="PARTNERS_LOADING",Me="ADD_PARTNERS",ke="PARTNERS_FAILED",Le=function(){return{type:Oe}},Ce=function(e){return{type:pe,payload:e}},Fe=function(e){return{type:xe,payload:e}},Se=function(e,t,s,c){return function(r){var n={campsiteId:e,rating:t,author:s,text:c};return n.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r({type:ue,payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},Ee=function(e){return{type:ge,payload:e}},Te=function(e){return{type:fe,payload:e}},Ae=function(){return{type:Ne}},Ie=function(e){return{type:ye,payload:e}},De=function(e){return{type:ve,payload:e}},Pe=function(){return function(e){return e({type:we}),fetch(N+"partners").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(function(e){return{type:Me,payload:e}}(t))})).catch((function(t){return e((s=t.message,{type:ke,payload:s}));var s}))}},Re=s(57),qe=s(89),_e={postComment:function(e,t,s,c){return Se(e,t,s,c)},fetchCampsites:function(){return function(e){return e(Le()),fetch(N+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Fe(t))})).catch((function(t){return e(Ce(t.message))}))}},resetFeedbackForm:function(){return A.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Te(t))})).catch((function(t){return e(Ee(t.message))}))}},fetchPromotions:function(){return function(e){return e(Ae()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(De(t))})).catch((function(t){return e(Ie(t.message))}))}},fetchPartners:function(){return Pe()},postFeedback:function(e){return function(e){return function(t){return fetch(N+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback:"+JSON.stringify(e))})).catch((function(e){return console.log(e)}))}}(e)}},We=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.props.fetchCampsites()}),3e3),setTimeout((function(){return e.props.fetchComments()}),3e3),setTimeout((function(){return e.props.fetchPromotions()}),3e3),setTimeout((function(){return e.props.fetchPartners()}),3e3)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(K,{}),Object(f.jsx)(Re.a,{children:Object(f.jsx)(qe.a,{classNames:"page",timeout:300,children:Object(f.jsxs)(he.d,{children:[Object(f.jsx)(he.b,{path:"/home",component:function(){return Object(f.jsx)(X,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partnerLoading:e.props.partners.isLoading,partnerErrMess:e.props.partners.errMess,partner:e.props.partners.partners.filter((function(e){return e.featured}))[0]})}}),Object(f.jsx)(he.b,{exact:!0,path:"/directory",render:function(){return Object(f.jsx)(w,{campsites:e.props.campsites})}}),Object(f.jsx)(he.b,{path:"/directory/:campsiteId",component:function(t){return Object(f.jsx)(_,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+t.match.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+t.match.params.campsiteId})),postComment:e.props.postComment,commentsErrMess:e.props.comments.errMess})}}),Object(f.jsx)(he.b,{exact:!0,path:"/contactus",render:function(){return Object(f.jsx)(oe,{resetFeedbackForm:e.props.resetFeedbackForm,postfeedBack:e.props.postFeedback})}}),Object(f.jsx)(he.b,{exact:!0,path:"/aboutus",render:function(){return Object(f.jsx)(me,{partners:e.props.partners})}}),Object(f.jsx)(he.a,{to:"/home"})]})},this.props.location.key)}),Object(f.jsx)(Q,{})]})}}]),s}(c.Component),Ue=Object(he.g)(Object(be.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions}}),_e)(We)),Be=s(8),He=s(28),Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:null,campsites:t.payload});case Oe:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!0,errMess:null,campsites:[]});case pe:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(Be.a)(Object(Be.a)({},e),{},{errMess:null,comments:t.payload});case ge:return Object(Be.a)(Object(Be.a)({},e),{},{errMess:t.payload});case ue:var s=t.payload;return Object(Be.a)(Object(Be.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,partners:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:null,partners:t.payload});case we:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!0,errMess:null,partners:[]});case ke:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case Ne:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case ye:return Object(Be.a)(Object(Be.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ze=s(92),$e=(s(152),{firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""}),Ke=(s(153),Object(He.createStore)(Object(He.combineReducers)(Object(Be.a)({campsites:Je,comments:Ye,partners:Ge,promotions:Ze},Object(A.createForms)({feedbackForm:$e}))),Object(He.applyMiddleware)(ze.a))),Qe=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(f.jsx)(be.Provider,{store:Ke,children:Object(f.jsx)(x.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(Ue,{})})})})}}]),s}(c.Component);a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Qe,{})}),document.getElementById("root")),o()},98:function(e,t,s){}},[[154,1,2]]]);
//# sourceMappingURL=main.175fa47b.chunk.js.map