webpackJsonp([3],{"+szZ":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".container[data-v-49a4e2e2]{margin-top:32px;margin-top:2rem;padding:64px;padding:4rem;height:64px;height:4rem;background:#ece9e6;background:-webkit-gradient(linear,left top,right top,from(#fff),to(#ece9e6));background:linear-gradient(90deg,#fff,#ece9e6)}@media only screen and (max-width:840px){.container[data-v-49a4e2e2]{margin-top:1rem;padding-left:1rem;padding-right:1rem}}",""])},"1//B":function(t,e,a){"use strict";function i(t){a("acLI")}var r=a("Us50"),n=a("Hjmz"),s=a("VU/8"),o=i,c=s(r.a,n.a,!1,o,"data-v-49a4e2e2",null);e.a=c.exports},"3EpW":function(t,e,a){"use strict";function i(t){a("il7z")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("6k+x"),n=a("ZGM0"),s=a("VU/8"),o=i,c=s(r.a,n.a,!1,o,null,null);e.default=c.exports},"6RqR":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".text--user{font-size:14px}[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:16px;font-size:1rem;width:64px;width:4rem;height:64px;height:4rem;line-height:64px;line-height:4rem;text-align:center;border-radius:50%;background:plum;vertical-align:middle;color:#fff}.menu{min-height:800px!important}.btn-cta{font-size:16px;text-transform:uppercase;color:#fff!important;letter-spacing:1.2px;text-shadow:0 1px 2px rgba(0,0,0,.18);line-height:1.5;padding:.5em,2em;border:none;background-image:-webkit-gradient(linear,left top,left bottom,from(#e0d0ff),to(#a78bde));background-image:linear-gradient(-180deg,#e0d0ff,#a78bde);-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 2px 8px 0 rgba(0,0,0,.14);box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 2px 8px 0 rgba(0,0,0,.14);border-radius:6px;-webkit-transition:.5s;transition:.5s}.btn-cta:hover{color:#a78bde!important;text-shadow:none;-webkit-box-shadow:0 2px 16spx 0 rgba(0,0,0,.2);box-shadow:0 2px 16spx 0 rgba(0,0,0,.2)}.topbar{height:8px;height:.5rem;background:-webkit-gradient(linear,left top,right top,from(#a78bde),to(#a78bde));background:linear-gradient(left,#a78bde,#a78bde)}.centeerr{margin-right:auto;margin-left:auto}",""])},"6k+x":function(t,e,a){"use strict";var i=a("Xxa5"),r=a.n(i),n=a("exGp"),s=a.n(n),o=a("mtWM"),c=a.n(o),d=a("HeVo"),l=a("1//B");a("Nhrj");e.a={asyncData:function(){function t(t){return e.apply(this,arguments)}var e=s()(r.a.mark(function t(e){var a,i,n,s=e.params;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=s.username,i="https://mycoo.link/api/u/"+a,t.next=5,c.a.get(i);case 5:if(n=t.sent,!(n.data&&n.data.length>0)){t.next=10;break}return t.abrupt("return",{page:a,top:n.data.filter(function(t,e){return 0===e||1===e}),links:n.data.filter(function(t,e){return 0!==e&&1!==e})});case 10:return t.abrupt("return",{page:a,top:[],links:[]});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.message);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return t}(),head:function(){return{title:"@"+this.page+"'s links",meta:[{hid:"description",name:"description",content:"@"+this.page+"'s links"}]}},data:function(){return{}},mounted:function(){void 0==this.page&&window.location.replace("/404")},components:{CustomHeader:d.a,CustomFooter:l.a}}},"7SDA":function(t,e,a){var i=a("Nk50");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("3ab04c4d",i,!0)},"8m1x":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"topbar"}),a("ul",{staticClass:"menu"},[t._m(0),a("li",{staticClass:"menu-item centeerr"},[a("div",{staticClass:"centeerr text-center",attrs:{"data-letters":t.$store.state.authUser.email.substr(0,1).toUpperCase()}}),a("p",{staticClass:"centeerr text-center text--user"},[t._v(t._s(t.$store.state.authUser.email))])]),a("li",{staticClass:"divider",attrs:{"data-content":"MENU"}}),t._m(1),a("li",{staticClass:"divider",attrs:{"data-content":"ADD"}}),t._m(2),t._m(3),a("li",{staticClass:"divider"}),t._m(4),a("li",{staticClass:"divider"}),a("li",{staticClass:"menu-item"},[t.$store.state.authUser?a("a",{staticClass:"btn btn-cta",on:{click:t.logout}},[t._v("Sign out")]):t._e()])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"menu-item centeerr"},[i("a",{staticClass:"text-center",attrs:{href:"/"}},[i("img",{attrs:{src:a("iPC3"),width:"110"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"/dashboard"}},[t._v("\n        Dashboard\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"/dashboard/add-collection"}},[t._v("\n        Add collection\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"/dashboard/add-link"}},[t._v("\n        Add link\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#"}},[t._v("\n        Settings\n      ")])])}],n={render:i,staticRenderFns:r};e.a=n},HeVo:function(t,e,a){"use strict";function i(t){a("7SDA")}var r=a("hj3c"),n=a("IwSH"),s=a("VU/8"),o=i,c=s(r.a,n.a,!1,o,null,null);e.a=c.exports},Hjmz:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container bottomDiv"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3"},[t._v("\n      © 2017, All Rights Reserved.\n    ")]),a("div",{staticClass:"column is-4"}),a("div",{staticClass:"column is-5"})])])}],n={render:i,staticRenderFns:r};e.a=n},IwSH:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("section",{staticClass:"topbar"}),a("section",{staticClass:"header--padding"},[a("header",{staticClass:"navbar"},[t._m(0),a("section",{staticClass:"navbar-section"},[t.$store.state.authUser?a("a",{staticClass:"btn btn-cta",attrs:{href:"/dashboard"}},[t._v("Dashboard")]):a("a",{staticClass:"btn btn-cta",attrs:{href:"/login"}},[t._v("Sign in")])])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"navbar-section"},[a("a",{attrs:{href:"/"}},[t._v("\n          LinksPro\n        ")])])}],n={render:i,staticRenderFns:r};e.a=n},Nhrj:function(t,e,a){"use strict";function i(t){a("o+J7")}var r=a("woaG"),n=a("8m1x"),s=a("VU/8"),o=i,c=s(r.a,n.a,!1,o,null,null);e.a=c.exports},Nk50:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".navbar{min-height:64px;min-height:4rem}.header--padding{padding-left:64px;padding-left:4rem;padding-right:64px;padding-right:4rem}.btn-cta{font-size:16px;text-transform:uppercase;color:#fff;letter-spacing:1.2px;text-shadow:0 1px 2px rgba(0,0,0,.18);line-height:1.5;padding:.5em,2em;border:none;background-image:-webkit-gradient(linear,left top,left bottom,from(#e0d0ff),to(#a78bde));background-image:linear-gradient(-180deg,#e0d0ff,#a78bde);-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 2px 8px 0 rgba(0,0,0,.14);box-shadow:0 1px 2px 0 rgba(0,0,0,.14),0 2px 8px 0 rgba(0,0,0,.14);border-radius:6px;-webkit-transition:.5s;transition:.5s}.btn-cta:hover{color:#a78bde;text-shadow:none;-webkit-box-shadow:0 2px 16spx 0 rgba(0,0,0,.2);box-shadow:0 2px 16spx 0 rgba(0,0,0,.2)}.topbar{height:8px;height:.5rem;background:-webkit-gradient(linear,left top,right top,from(#a78bde),to(#ec5d59));background:linear-gradient(left,#a78bde,#ec5d59)}@media only screen and (max-width:840px){.header--padding{padding-left:1rem;padding-right:1rem}}",""])},Us50:function(t,e,a){"use strict";e.a={name:"CustomFooter"}},ZGM0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("custom-header"),a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-8 col-mx-auto col-md-12"},[t.top.length>0?a("div",{},[a("div",{staticClass:"text-center"},[a("p",{attrs:{"data-letters":t.page.substr(0,1).toUpperCase()}}),a("p",{staticClass:"empty-subtitle text-center"},[t._v(t._s("@"+t.page+"'s links"))])]),a("div",{staticClass:"columns"},t._l(t.top,function(e){return a("div",{key:e._id,staticClass:"column col-6 col-md-12"},[a("a",{attrs:{href:e.url}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("img",{staticClass:"img-responsive",attrs:{src:e.meta.image}})]),a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title h5"},[t._v(t._s(e.meta.title))])]),a("div",{staticClass:"card-body"},[t._v("\n                    "+t._s(e.meta.description)+"\n                  ")])])])])})),t._m(0),t.links.length>0?a("div",{staticClass:"columns"},t._l(t.links,function(e){return a("div",{key:e._id,staticClass:"column col-6 col-md-12"},[a("a",{attrs:{href:e.url}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title h5"},[t._v(t._s(e.meta.title||"Title"))]),a("div",{staticClass:"card-subtitle text-gray"},[t._v(t._s(e.meta.description))])])])])])})):t._e()]):a("div",{staticClass:"empty"},[a("p",{staticClass:"empty-subtitle"},[t._v("You have not added any link yet")]),t._m(1)])])])]),a("custom-footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty-action"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"/dashboard/add-links"}},[t._v("Add a link")])])}],n={render:i,staticRenderFns:r};e.a=n},acLI:function(t,e,a){var i=a("+szZ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("774f1478",i,!0)},hj3c:function(t,e,a){"use strict";e.a={name:"CustomHeader"}},iPC3:function(t,e,a){t.exports=a.p+"img/logo.9b6de72.png"},il7z:function(t,e,a){var i=a("lQ1x");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("46c0ca34",i,!0)},lQ1x:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".container{padding-left:4em;padding-right:4em;padding-top:16px;padding-top:1rem}.card-image>img{min-width:100%;height:300px}.card{width:100%;background-clip:padding-box;border-radius:6px;background-color:#fff;-webkit-box-shadow:0 2px 25px 0 rgba(0,0,0,.1);box-shadow:0 2px 25px 0 rgba(0,0,0,.1)}.card,.card:hover{text-decoration:none}.card:hover{-webkit-box-shadow:0 2px 25px 0 rgba(0,0,0,.15);box-shadow:0 2px 25px 0 rgba(0,0,0,.15)}[data-letters]:before{content:attr(data-letters);display:inline-block;font-size:1em;width:2.5em;height:2.5em;line-height:2.5em;text-align:center;border-radius:50%;background:plum;vertical-align:middle;margin-right:1em;color:#fff}@media only screen and (max-width:840px){.container{padding-left:1rem;padding-right:1rem}}",""])},"o+J7":function(t,e,a){var i=a("6RqR");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("087bee9a",i,!0)},woaG:function(t,e,a){"use strict";e.a={name:"Sidebar",methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/")}).catch(function(e){t.$router.push("/")})}}}}});
//# sourceMappingURL=_username.426be1e0750491d71dbc.js.map