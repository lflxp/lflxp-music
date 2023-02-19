<template>
  <!--暂无数据提示-->
  <div class="mm-no-result">
    <p class="mm-no-result-text" @click="dialogVisible = true">{{ title }}</p>
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
export default {
  name: 'MmNoResult',
  props: {
    // 无数据提示文本
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style lang="less">
.mm-no-result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &-text {
    margin-top: 30px;
    font-size: @font_size_medium;
    color: @text_color;
  }
}
</style>
