<template>
  <!--我听过的（播放历史）-->
  <div class="historyList">
    <music-list
      :list="list"
      list-type="album"
      @select="selectItem"
      @del="deleteItem"
    >
      <div slot="listBtn" class="list-btn">
        <span @click="dialogVisible = true">上传文件</span>
      </div>
    </music-list>
    <el-dialog title="上传文件" :visible.sync="dialogVisible" width="35%">
      <el-upload
        class="upload-demo"
        drag
        action="/api/music/local/upload"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MusicList from 'components/music-list/music-list'
import { localList } from 'api'

export default {
  name: 'LocalList',
  components: {
    MusicList
  },
  data() {
    return {
      list: [],
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters(['historyList', 'playing', 'currentMusic'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      localList().then((res) => {
        this.list = res.data
      })
    },
    // 播放事件
    selectItem(item, index) {
      this.selectPlay({
        list: this.list,
        index
      })
    },
    // 删除事件
    deleteItem(index) {
      // let list = [...this.historyList]
      // list.splice(index, 1)
      // this.removeHistory(list)
      this.fetchData()
    },
    ...mapMutations({
      setPlaying: 'SET_PLAYING',
      setCurrentIndex: 'SET_CURRENTINDEX'
    }),
    ...mapActions(['selectPlay', 'clearHistory', 'removeHistory'])
  }
}
</script>
