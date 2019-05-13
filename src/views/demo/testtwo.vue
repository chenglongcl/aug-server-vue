<template>
  <div>
    图片上传
    <oss-uploader :mimeType="'images'" @on-success="uploadSuccess" @on-error="uploadError" @on-remove="uploadRemove"></oss-uploader>
    视频上传
    <oss-uploader :mimeType="'videos'" @on-success="uploadSuccess" @on-error="uploadError" @on-remove="uploadRemove"></oss-uploader>
  </div>
</template>
<script>
import OssUploader from "@/components/common/ossuploader";
export default {
  components: {
    OssUploader
  },
  data() {
    return {
      images: [],
      videos: []
    };
  },
  methods: {
    uploadError(errorMsg) {
      this.$vux.toast.show({
        text: errorMsg,
        type: "cancel"
      });
    },
    uploadSuccess(info) {
      //info mimeType 暂含images,videos两种类型和组件上mimeType一致
      this[info.mimeType].push(info.url);
    },
    uploadRemove(info) {
      this[info.mimeType].splice(
        this[info.mimeType].findIndex(value => value === info.url),
        1
      );
    }
  }
};
</script>
<style lang="less">
</style>