<template>
  <div class="weui-uploader">
    <div class="weui-uploader__bd">
      <ul class="weui-uploader__files" id="uploaderFiles">
        <li v-for="(file, index) in files" :key="file.id" class="weui-uploader__file  weui-uploader__file_status" @click.prevent="remove(file)" :style="{backgroundImage:'url(' + file.thumb + ')'}">
          <div class="weui-uploader__file-content">
            {{file.progress}}%
          </div>
        </li>
      </ul>
      <div class="weui-uploader__input-box">
        <file-upload ref="upload" class="weui-uploader__input" v-model="files" :post-action="ossUrl" @input-filter="inputFilter" @input-file="inputFile" :multiple="true" :extensions="extensions" :thread="1"></file-upload>
      </div>
    </div>
  </div>
</template>
<script>
import FileUpload from "vue-upload-component/dist/vue-upload-component.part.js";
export default {
  name: "oss-uploader",
  components: {
    FileUpload
  },
  props: {
    mimeType: String
  },
  data() {
    return {
      ossUrl: "http://aisyweixinpic.oss-cn-shanghai.aliyuncs.com",
      files: [],
      ossParams: {
        key: "",
        policy: "",
        OSSAccessKeyId: "",
        success_action_status: "",
        signature: ""
      },
      baseConfig: {
        expire: "",
        dir: ""
      },
      extensions: []
    };
  },
  created() {
    switch (this.mimeType) {
      case "images":
        this.extensions = ["gif", "jpg", "jpeg", "png", "webp"];
        break;
      case "videos":
        this.extensions = ["mp4", "mov", "mpeg"];
        break;
      default:
        break;
    }
  },
  mounted() {},
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // 添加文件

        // 创建 `blob` 字段 用于缩略图预览
        newFile.blob = "";
        let URL = window.URL || window.webkitURL;
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }

        // Thumbnails
        // 缩略图
        newFile.thumb = "";
        if (newFile.blob && newFile.type.substr(0, 6) === "image/") {
          newFile.thumb = newFile.blob;
        }
      }

      if (newFile && oldFile) {
        // 更新文件

        // 增加版本号
        if (!newFile.version) {
          newFile.version = 0;
        }
        newFile.version++;
      }

      if (!newFile && oldFile) {
        // 移除文件
        // 拒绝删除文件
        // return prevent()
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // 添加文件
      }

      if (newFile && oldFile) {
        // 更新文件

        // 开始上传
        if (newFile.active !== oldFile.active) {
          // beforeSend
          if (newFile.active != false) {
            this.getOssSignature(newFile);
          }
          console.log("Start upload", newFile.active, newFile);
        }

        // 上传进度
        if (newFile.progress !== oldFile.progress) {
          console.log("progress", newFile.progress, newFile);
        }

        // 上传错误
        if (newFile.error !== oldFile.error) {
          switch (newFile.error) {
            case "size":
              this.$emit("on-error", "文件大小错误");
              break;
            case "extension":
              this.$emit("on-error", "文件类型错误");
              break;
            default:
              this.$emit("on-error", "网络错误，请稍候重试");
              break;
          }
          this.$refs.upload.remove(newFile);
        }

        // 上传成功
        if (newFile.success !== oldFile.success) {
          console.log("success", newFile.success, newFile);
          let info = {
            mimeType: this.mimeType,
            url: newFile.url
          };
          this.$emit("on-success", info);
        }
      }

      if (!newFile && oldFile) {
        // 删除文件
      }

      // 自动上传
      if (
        Boolean(newFile) !== Boolean(oldFile) ||
        oldFile.error !== newFile.error
      ) {
        if (!this.$refs.upload.active) {
          this.$refs.upload.active = true;
        }
      }
    },
    remove(file) {
      if (file.success) {
        this.$vux.confirm.show({
          title: "提示",
          content: "确认删除该文件?",
          onCancel: () => {},
          onConfirm: () => {
            this.$refs.upload.remove(file);
            let info = {
              mimeType: this.mimeType,
              url: file.url
            };
            this.$emit("on-remove", info);
          }
        });
      }
    },
    getOssSignature(file) {
      let oAjax = new XMLHttpRequest();
      oAjax.open(
        "GET",
        "http://tp.syiptv.cn/api/upload_oss/generatesignature",
        false
      ); //false表示同步请求

      oAjax.onreadystatechange = () => {
        if (oAjax.readyState == 4 && oAjax.status == 200) {
          let data = JSON.parse(oAjax.responseText);
          this.ossParams = {
            key: "",
            policy: data.policy,
            OSSAccessKeyId: data.accessid,
            success_action_status: 200,
            signature: data.signature
          };
          this.baseConfig = {
            expire: data.expire,
            key: data.dir
          };
        } else {
          return false;
        }
        return false;
      };
      let now = Date.parse(new Date()) / 1000;
      if (this.baseConfig.expire < now + 3) {
        oAjax.send();
      }
      this.ossParams.key = `${this.baseConfig.key}${file.id}.${file.name
        .split(".")
        .pop()}`;
      file.data = this.ossParams;
      file.url = `${this.ossUrl}/${file.data.key}`;
    }
  }
};
</script>
<style lang="less">
@import "~vux/src/styles/weui/widget/weui_cell/weui_uploader.less";
.weui-uploader__bd {
  margin-bottom: 0;
  margin-right: 0;
}
</style>

