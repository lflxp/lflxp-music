"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[366],{8566:function(t,i,s){s.d(i,{Z:function(){return r}});var l=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[i("div",{staticClass:"mm-loading-content"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},e=[],n={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},a=n,o=s(1001),c=(0,o.Z)(a,l,e,!1,null,null,null),r=c.exports},5885:function(t,i,s){s.d(i,{Z:function(){return r}});var l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"mm-no-result"},[i("p",{staticClass:"mm-no-result-text",on:{click:function(i){t.dialogVisible=!0}}},[t._v(t._s(t.title))]),i("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(i){t.dialogVisible=i}}},[i("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/music/local/upload",multiple:""}},[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},e=[],n={name:"MmNoResult",props:{title:{type:String,default:""}},data:function(){return{dialogVisible:!1}}},a=n,o=s(1001),c=(0,o.Z)(a,l,e,!1,null,null,null),r=c.exports},8355:function(t,i,s){s.d(i,{Z:function(){return g}});s(8309);var l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"music-list flex-col"},[t.list.length>0?[i("div",{staticClass:"list-item list-header"},[i("span",{staticClass:"list-name"},[t._v("歌曲")]),i("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?i("span",{staticClass:"list-time"},[t._v("时长")]):i("span",{staticClass:"list-album"},[t._v("专辑")])]),i("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(i){return t.listScroll(i)}}},[t._l(t.list,(function(s,l){return i("div",{key:s.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===s.id},on:{dblclick:function(i){return t.selectItem(s,l,i)}}},[i("span",{staticClass:"list-num",domProps:{textContent:t._s(l+1)}}),i("div",{staticClass:"list-name"},[i("span",[t._v(t._s(s.name))]),i("div",{staticClass:"list-menu"},[i("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(s),size:40},on:{click:function(i){return i.stopPropagation(),t.selectItem(s,l)}}})],1)]),i("span",{staticClass:"list-artist"},[t._v(t._s(s.singer))]),t.isDuration?i("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(s.duration%3600))+" "),i("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(i){return i.stopPropagation(),t.deleteItem(l)}}})],1):i("span",{staticClass:"list-album"},[t._v(t._s(s.album))])])})),t._t("listBtn")],2)]:i("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],n=s(6080),a=(s(4916),s(7601),s(629)),o=s(6879),c=s(5885),r="album",u="duration",d="pullup",m=100,p={name:"MusicList",components:{MmNoResult:c.Z},filters:{format:o.WU},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:r}},data:function(){return{lockUp:!0}},computed:(0,n.Z)({isDuration:function(){return this.listType===u}},(0,a.Se)(["playing","currentMusic"])),watch:{list:function(t,i){this.listType===d&&(t.length!==i.length||t[t.length-1].id!==i[i.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:(0,n.Z)({listScroll:function(t){var i=t.target.scrollTop;if(this.scrollTop=i,this.listType===d&&!this.lockUp){var s=t.target,l=s.scrollHeight,e=s.offsetHeight;i+e>=l-m&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,i,s){s&&/list-menu-icon-del/.test(s.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,i))},getPlayIconType:function(t){var i=t.id,s=this.playing,l=this.currentMusic.id;return s&&l===i?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},(0,a.OI)({setPlaying:"SET_PLAYING"}))},f=p,h=s(1001),v=(0,h.Z)(f,l,e,!1,null,"49b9d2f4",null),g=v.exports},1366:function(t,i,s){s.r(i),s.d(i,{default:function(){return h}});var l=function(){var t=this,i=t._self._c;return i("div",{staticClass:"details"},[i("mm-loading",{model:{value:t.mmLoadShow,callback:function(i){t.mmLoadShow=i},expression:"mmLoadShow"}}),i("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},e=[],n=s(6080),a=(s(8309),s(629)),o=s(60),c=s(8566),r=s(8355),u=s(6250),d={name:"Detail",components:{MmLoading:c.Z,MusicList:r.Z},mixins:[u.q],data:function(){return{list:[]}},created:function(){var t=this;(0,o._V)(this.$route.params.id).then((function(i){document.title="".concat(i.name," - mmPlayer在线音乐播放器"),t.list=i.tracks,t._hideLoad()})).catch((function(){t._hideLoad()}))},methods:(0,n.Z)({selectItem:function(t,i){this.selectPlay({list:this.list,index:i})}},(0,a.nv)(["selectPlay"]))},m=d,p=s(1001),f=(0,p.Z)(m,l,e,!1,null,"96aaaebe",null),h=f.exports},6250:function(t,i,s){s.d(i,{q:function(){return n}});var l=s(6080),e=s(629),n=((0,l.Z)({},(0,e.Se)(["playing","currentMusic"])),(0,l.Z)((0,l.Z)({selectItem:function(t,i){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:i})}},(0,e.OI)({setPlaying:"SET_PLAYING"})),(0,e.nv)(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,i=this;clearTimeout(t),t=setTimeout((function(){i.mmLoadShow=!1}),200)}}})}}]);
//# sourceMappingURL=366-legacy.bf1ef23f.js.map