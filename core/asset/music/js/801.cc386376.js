"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[801],{5885:function(t,s,i){i.d(s,{Z:function(){return c}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text",on:{click:function(s){t.dialogVisible=!0}}},[t._v(t._s(t.title))]),s("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/music/local/upload",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},e=[],a={name:"MmNoResult",props:{title:{type:String,default:""}},data(){return{dialogVisible:!1}}},n=a,r=i(1001),o=(0,r.Z)(n,l,e,!1,null,null,null),c=o.exports},6735:function(t,s,i){i.d(s,{Z:function(){return v}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,l){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,l,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(l+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,l)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(l)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],a=i(629),n=i(6879),r=i(5885);const o="album",c="duration",u="pullup",p=100;var m={name:"MusicList",components:{MmNoResult:r.Z},filters:{format:n.WU},props:{list:{type:Array,default:()=>[]},listType:{type:String,default:o}},data(){return{lockUp:!0}},computed:{isDuration(){return this.listType===c},...(0,a.Se)(["playing","currentMusic"])},watch:{list(t,s){this.listType===u&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:{listScroll(t){const s=t.target.scrollTop;if(this.scrollTop=s,this.listType!==u||this.lockUp)return;const{scrollHeight:i,offsetHeight:l}=t.target;s+l>=i-p&&(this.lockUp=!0,this.$emit("pullUp"))},scrollTo(){this.$refs.listContent.scrollTop=0},selectItem(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType({id:t}){const{playing:s,currentMusic:{id:i}}=this;return s&&i===t?"pause-mini":"play-mini"},deleteItem(t){this.$emit("del",t)},...(0,a.OI)({setPlaying:"SET_PLAYING"})}},d=m,h=i(1001),f=(0,h.Z)(d,l,e,!1,null,"49b9d2f4",null),v=f.exports},1801:function(t,s,i){i.r(s),i.d(s,{default:function(){return d}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"playList"},[s("music-list",{attrs:{list:t.playlist,"list-type":"duration"},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(s){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),s("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空正在播放列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},e=[],a=i(629),n=i(6735),r=i(6282),o=i(60),c={name:"PlayList",components:{MusicList:n.Z,MmDialog:r.Z},data(){return{show:!1}},computed:{...(0,a.Se)(["playing","playlist","currentMusic"])},methods:{clearList(){this.clearPlayList(),this.$mmToast("列表清空成功")},selectItem(t,s){t.id!==this.currentMusic.id&&(this.setCurrentIndex(s),this.setPlaying(!0),(0,o.cf)(t))},deleteItem(t){let s=[...this.playlist];s.splice(t,1),this.removerPlayListItem({list:s,index:t}),this.$mmToast("删除成功")},...(0,a.OI)({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"}),...(0,a.nv)(["removerPlayListItem","clearPlayList"])}},u=c,p=i(1001),m=(0,p.Z)(u,l,e,!1,null,null,null),d=m.exports}}]);
//# sourceMappingURL=801.cc386376.js.map