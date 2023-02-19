"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[812],{8566:function(t,e,a){a.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[e("div",{staticClass:"mm-loading-content"},[e("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[e("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},n=[],o={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},i=o,c=a(1001),m=(0,c.Z)(i,s,n,!1,null,null,null),l=m.exports},9812:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment",on:{scroll:function(e){return t.listScroll(e)}}},[e("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t.hotComments.length>0?e("dl",{staticClass:"comment-list"},[e("dt",{staticClass:"comment-title"},[t._v("精彩评论")]),t._l(t.hotComments,(function(a){return e("dd",{key:a.commentId,staticClass:"comment-item"},[e("a",{attrs:{target:"_blank",href:"https://music.163.com/#/user/home?id=".concat(a.user.userId)}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(a.user.avatarUrl,"?param=50y50"),expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"comment-item-pic"}),e("h2",{staticClass:"comment-item-title"},[t._v(t._s(a.user.nickname))])]),e("p",{staticClass:"comment-item-disc"},[t._v(t._s(a.content))]),e("div",{staticClass:"comment-item-opt"},[e("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(a.time)))]),e("span",{staticClass:"comment-opt-liked"},[e("mm-icon",{attrs:{type:"good"}}),t._v(" "+t._s(a.likedCount)+" ")],1)])])}))],2):t._e(),t.commentList.length>0?e("dl",{staticClass:"comment-list"},[e("dt",{staticClass:"comment-title"},[t._v("最新评论（"+t._s(t.total)+"）")]),t._l(t.commentList,(function(a){return e("dd",{key:a.commentId,staticClass:"comment-item"},[e("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"https://music.163.com/#/user/home?id=".concat(a.user.userId)}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"".concat(a.user.avatarUrl,"?param=50y50"),expression:"`${item.user.avatarUrl}?param=50y50`"}],staticClass:"cover-img"})]),e("h2",{staticClass:"comment-item-title"},[e("a",{attrs:{target:"_blank",href:"https://music.163.com/#/user/home?id=".concat(a.user.userId)}},[t._v(" "+t._s(a.user.nickname)+" ")])]),e("p",{staticClass:"comment-item-disc"},[t._v(t._s(a.content))]),t._l(a.beReplied,(function(a){return e("div",{key:a.user.userId,staticClass:"comment-item-replied"},[e("a",{attrs:{target:"_blank",href:"https://music.163.com/#/user/home?id=".concat(a.user.userId)}},[t._v(" "+t._s(a.user.nickname)+" ")]),t._v(" ："+t._s(a.content)+" ")])})),e("div",{staticClass:"comment-item-opt"},[e("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(a.time)))]),a.likedCount>0?e("span",{staticClass:"comment-opt-liked"},[e("mm-icon",{attrs:{type:"good"}}),t._v(" "+t._s(a.likedCount)+" ")],1):t._e()])],2)}))],2):t._e()],1)},n=[],o=a(3698),i=(a(2222),a(60)),c=a(6879),m=a(8566),l=a(6250),r={name:"Comment",components:{MmLoading:m.Z},filters:{format:function(t){var e,a=new Date(t),s={year:a.getFullYear(),month:a.getMonth(),date:a.getDate(),hours:a.getHours(),minutes:a.getMinutes()},n=new Date,o=n.getTime()-t;return e=n.getDate()===s.date&&o<6e4?"刚刚":n.getDate()===s.date&&o>6e4&&o<36e5?"".concat(Math.floor(o/6e4),"分钟前"):n.getDate()===s.date&&o>36e5&&o<864e5?"".concat((0,c.vL)(s.hours),":").concat((0,c.vL)(s.minutes)):n.getDate()!==s.date&&o<864e5?"昨天".concat((0,c.vL)(s.hours),":").concat((0,c.vL)(s.minutes)):n.getFullYear()===s.year?"".concat(s.month+1,"月").concat(s.date,"日"):"".concat(s.year,"年").concat(s.month+1,"月").concat(s.date,"日"),e}},mixins:[l.q],data:function(){return{lockUp:!0,page:0,hotComments:[],commentList:[],total:null}},watch:{commentList:function(t,e){t.length!==e.length&&(this.lockUp=!1)}},created:function(){this.initData()},methods:{initData:function(){var t=this;(0,i.d7)(this.$route.params.id,this.page).then((function(e){t.hotComments=e.hotComments,t.commentList=e.comments,t.total=e.total,t.lockUp=!0,t._hideLoad()}))},listScroll:function(t){if(!this.lockUp){var e=t.target,a=e.scrollTop,s=e.scrollHeight,n=e.offsetHeight;a+n>=s-100&&(this.lockUp=!0,this.page+=1,this.pullUp())}},pullUp:function(){var t=this;(0,i.d7)(this.$route.params.id,this.page).then((function(e){var a=e.comments;t.commentList=[].concat((0,o.Z)(t.commentList),(0,o.Z)(a))}))}}},u=r,d=a(1001),h=(0,d.Z)(u,s,n,!1,null,"a93ee9ec",null),p=h.exports},6250:function(t,e,a){a.d(e,{q:function(){return o}});var s=a(6080),n=a(629),o=((0,s.Z)({},(0,n.Se)(["playing","currentMusic"])),(0,s.Z)((0,s.Z)({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},(0,n.OI)({setPlaying:"SET_PLAYING"})),(0,n.nv)(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}})}}]);
//# sourceMappingURL=812-legacy.fe36ec43.js.map