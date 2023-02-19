<template>
  <!--我听过的（播放历史）-->
  <div class="historyList">
    <music-list
      :list="list"
      list-type="duration"
      @select="selectItem"
      @del="deleteItem"
    >
      <div slot="listBtn" class="list-btn">
        <span @click="$refs.dialog.show()">清空列表</span>
      </div>
    </music-list>
    <mm-dialog
      ref="dialog"
      body-text="是否清空播放历史列表"
      confirm-btn-text="清空"
      @confirm="clearList"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MusicList from 'components/music-list/music-list'
import MmDialog from 'base/mm-dialog/mm-dialog'
import { getHistoryList, deltHistoryList } from 'api'

export default {
  name: 'HistoryList',
  components: {
    MusicList,
    MmDialog
  },
  data() {
    return {
      list: []
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
      getHistoryList().then((res) => {
        // console.log('res', res, this.historyList)
        this.list = res.data
      })
    },
    // 清空列表事件
    clearList() {
      // this.clearHistory()
      this.$mmToast('列表清空成功')
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
      deltHistoryList(this.historyList[index]['name']).then((res) => {
        this.fetchData()
      })
      // let list = [...this.historyList]
      // list.splice(index, 1)
      // this.removeHistory(list)
      this.$mmToast('删除成功')
    },
    ...mapMutations({
      setPlaying: 'SET_PLAYING',
      setCurrentIndex: 'SET_CURRENTINDEX'
    }),
    ...mapActions(['selectPlay', 'clearHistory', 'removeHistory'])
  }
}
</script>
