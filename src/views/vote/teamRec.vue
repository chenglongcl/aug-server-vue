<template>
  <div class="team-rec-page">
    <div class="wrapper">
      <div class="content" v-html="tbVote.teamRecContent">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataForm: {
        voteID: this.$route.query.voteID
      },
      tbVote: {
        teamRecContent: ""
      }
    };
  },
  created() {
    this.getTbVote();
  },
  mounted() {},
  methods: {
    getTbVote() {
      this.$http
        .getTbVote({
          id: this.dataForm.voteID
        })
        .then(({ data }) => {
          if (data.code == 0) {
            document.title = data.data.title;
            this.tbVote.teamRecContent = data.data.teamRecContent;
          }
        });
    }
  }
};
</script>
<style lang="less">
body {
  background-color: #ffffff;
}
.team-rec-page {
  padding: 20px;
  box-sizing: border-box;
  .wrapper {
  }
}
</style>