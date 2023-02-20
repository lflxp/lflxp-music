"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[366],{8566:function(t,s,i){i.d(s,{Z:function(){return r}});var l=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[s("div",{staticClass:"mm-loading-content"},[s("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[s("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},e=[],a={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},n=a,o=i(1001),c=(0,o.Z)(n,l,e,!1,null,null,null),r=c.exports},5885:function(t,s,i){i.d(s,{Z:function(){return r}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text",on:{click:function(s){t.dialogVisible=!0}}},[t._v(t._s(t.title))]),s("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/music/local/upload",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},e=[],a={name:"MmNoResult",props:{title:{type:String,default:""}},data(){return{dialogVisible:!1}}},n=a,o=i(1001),c=(0,o.Z)(n,l,e,!1,null,null,null),r=c.exports},5052:function(t,s,i){i.d(s,{Z:function(){return g}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,l){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,l,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(l+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,l)}}}),s("mm-icon",{staticClass:"hover",attrs:{type:"ic_get_app",size:40},on:{click:function(s){return s.stopPropagation(),t.comeonbaby(i)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(l)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],a=i(629),n=i(6879),o=i(5885),c=i(60);const r="album",u="duration",m="pullup",d=100;var p={name:"MusicList",components:{MmNoResult:o.Z},filters:{format:n.WU},props:{list:{type:Array,default:()=>[]},listType:{type:String,default:r}},data(){return{lockUp:!0}},computed:{isDuration(){return this.listType===u},...(0,a.Se)(["playing","currentMusic"])},watch:{list(t,s){this.listType===m&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:{listScroll(t){const s=t.target.scrollTop;if(this.scrollTop=s,this.listType!==m||this.lockUp)return;const{scrollHeight:i,offsetHeight:l}=t.target;s+l>=i-d&&(this.lockUp=!0,this.$emit("pullUp"))},scrollTo(){this.$refs.listContent.scrollTop=0},comeonbaby(t){(0,c.LR)(t).then((t=>{void 0===t.data||null===t.data?this.$mmToast(t.errorCode):this.$mmToast(t.data)}))},selectItem(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType({id:t}){const{playing:s,currentMusic:{id:i}}=this;return s&&i===t?"pause-mini":"play-mini"},deleteItem(t){this.$emit("del",t)},...(0,a.OI)({setPlaying:"SET_PLAYING"})}},h=p,v=i(1001),f=(0,v.Z)(h,l,e,!1,null,"45b6031d",null),g=f.exports},1366:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"details"},[s("mm-loading",{model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),s("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},e=[],a=i(629),n=i(60),o=i(8566),c=i(5052),r=i(6250),u={name:"Detail",components:{MmLoading:o.Z,MusicList:c.Z},mixins:[r.q],data(){return{list:[]}},created(){(0,n._V)(this.$route.params.id).then((t=>{document.title=`${t.name} - mmPlayer在线音乐播放器`,this.list=t.tracks,this._hideLoad()})).catch((()=>{this._hideLoad()}))},methods:{selectItem(t,s){this.selectPlay({list:this.list,index:s})},...(0,a.nv)(["selectPlay"])}},m=u,d=i(1001),p=(0,d.Z)(m,l,e,!1,null,"96aaaebe",null),h=p.exports},6250:function(t,s,i){i.d(s,{q:function(){return e}});var l=i(629);(0,l.Se)(["playing","currentMusic"]),(0,l.OI)({setPlaying:"SET_PLAYING"}),(0,l.nv)(["selectPlay"]);const e={data(){return{mmLoadShow:!0}},methods:{_hideLoad(){let t;clearTimeout(t),t=setTimeout((()=>{this.mmLoadShow=!1}),200)}}}}}]);
//# sourceMappingURL=366.fce21ceb.js.map