"use strict";(self["webpackChunkvue_mmplayer"]=self["webpackChunkvue_mmplayer"]||[]).push([[778],{4506:function(t,s,i){i.d(s,{Z:function(){return r}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mm-no-result"},[s("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},e=[],n={name:"MmNoResult",props:{title:{type:String,default:""}}},a=n,o=i(1001),c=(0,o.Z)(a,l,e,!1,null,null,null),r=c.exports},8355:function(t,s,i){i.d(s,{Z:function(){return _}});i(8309);var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-list flex-col"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t.isDuration?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(i,l){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){return t.selectItem(i,l,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(l+1)}}),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),s("div",{staticClass:"list-menu"},[s("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(i),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(i,l)}}})],1)]),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t.isDuration?s("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(i.duration%3600))+" "),s("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(l)}}})],1):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])})),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},e=[],n=i(6080),a=(i(4916),i(7601),i(629)),o=i(6879),c=i(4506),r="album",u="duration",p="pullup",d=100,m={name:"MusicList",components:{MmNoResult:c.Z},filters:{format:o.WU},props:{list:{type:Array,default:function(){return[]}},listType:{type:String,default:r}},data:function(){return{lockUp:!0}},computed:(0,n.Z)({isDuration:function(){return this.listType===u}},(0,a.Se)(["playing","currentMusic"])),watch:{list:function(t,s){this.listType===p&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:(0,n.Z)({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,this.listType===p&&!this.lockUp){var i=t.target,l=i.scrollHeight,e=i.offsetHeight;s+e>=l-d&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,i=this.playing,l=this.currentMusic.id;return i&&l===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},(0,a.OI)({setPlaying:"SET_PLAYING"}))},f=m,h=i(1001),v=(0,h.Z)(f,l,e,!1,null,"49b9d2f4",null),_=v.exports},8778:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"historyList"},[s("music-list",{attrs:{list:t.list,"list-type":"duration"},on:{select:t.selectItem,del:t.deleteItem}},[s("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[s("span",{on:{click:function(s){t.dialogVisible=!0}}},[t._v("上传文件")])])]),s("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/api/music/local/upload",multiple:""}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1)},e=[],n=i(6080),a=i(629),o=i(8355),c=i(60),r={name:"LocalList",components:{MusicList:o.Z},data:function(){return{list:[],dialogVisible:!1}},computed:(0,n.Z)({},(0,a.Se)(["historyList","playing","currentMusic"])),created:function(){this.fetchData()},methods:(0,n.Z)((0,n.Z)({fetchData:function(){var t=this;(0,c.TS)().then((function(s){t.list=s.data}))},selectItem:function(t,s){this.selectPlay({list:this.list,index:s})},deleteItem:function(t){this.fetchData()}},(0,a.OI)({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX"})),(0,a.nv)(["selectPlay","clearHistory","removeHistory"]))},u=r,p=i(1001),d=(0,p.Z)(u,l,e,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=778-legacy.2b8e6dcf.js.map