"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[801],{5885:function(t,s,i){i.d(s,{Z:function(){return r}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text",on:{click:function(s){t.dialogVisible=!0}}},[t._v(t._s(t.title))]),s("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/music/local/upload",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},e=[],n={name:"MmNoResult",props:{title:{type:String,default:""}},data:function(){return{dialogVisible:!1}}},a=n,o=i(1001),c=(0,o.Z)(a,l,e,!1,null,null,null),r=c.exports},531:function(t,s,i){i.d(s,{Z:function(){return g}});i(8309);var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,l){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,l,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(l+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,l)}}}),s("mm-icon",{staticClass:"hover",attrs:{type:"ic_get_app",size:40},on:{click:function(s){return s.stopPropagation(),t.comeonbaby(i)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(l)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],n=i(6080),a=(i(4916),i(7601),i(629)),o=i(6879),c=i(5885),r=i(60),u="album",p="duration",m="pullup",d=100,f={name:"MusicList",components:{MmNoResult:c.Z},filters:{format:o.WU},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:u}},data:function(){return{lockUp:!0}},computed:(0,n.Z)({isDuration:function(){return this.listType===p}},(0,a.Se)(["playing","currentMusic"])),watch:{list:function(t,s){this.listType===m&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:(0,n.Z)({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,this.listType===m&&!this.lockUp){var i=t.target,l=i.scrollHeight,e=i.offsetHeight;s+e>=l-d&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},comeonbaby:function(t){var s=this;(0,r.LR)(t).then((function(t){void 0===t.data||null===t.data?s.$mmToast(t.errorCode):s.$mmToast(t.data)}))},selectItem:function(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,i=this.playing,l=this.currentMusic.id;return i&&l===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},(0,a.OI)({setPlaying:"SET_PLAYING"}))},h=f,v=i(1001),y=(0,v.Z)(h,l,e,!1,null,"45b6031d",null),g=y.exports},1801:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"playList"},[s("music-list",{attrs:{list:t.playlist,"list-type":"duration"},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(s){return t.$refs.dialog.show()}}},[t._v("清空列表")])])]),s("mm-dialog",{ref:"dialog",attrs:{"body-text":"是否清空正在播放列表","confirm-btn-text":"清空"},on:{confirm:t.clearList}})],1)},e=[],n=i(3698),a=i(6080),o=(i(561),i(629)),c=i(531),r=i(6282),u=i(60),p={name:"PlayList",components:{MusicList:c.Z,MmDialog:r.Z},data:function(){return{show:!1}},computed:(0,a.Z)({},(0,o.Se)(["playing","playlist","currentMusic"])),methods:(0,a.Z)((0,a.Z)({clearList:function(){this.clearPlayList(),this.$mmToast("列表清空成功")},selectItem:function(t,s){t.id!==this.currentMusic.id&&(this.setCurrentIndex(s),this.setPlaying(!0),(0,u.cf)(t))},deleteItem:function(t){var s=(0,n.Z)(this.playlist);s.splice(t,1),this.removerPlayListItem({list:s,index:t}),this.$mmToast("删除成功")}},(0,o.OI)({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"})),(0,o.nv)(["removerPlayListItem","clearPlayList"]))},m=p,d=i(1001),f=(0,d.Z)(m,l,e,!1,null,null,null),h=f.exports}}]);
//# sourceMappingURL=801-legacy.96dba1f8.js.map