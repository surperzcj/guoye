<template>
  <div>
    <div class="banner_img">
      <img src="../assets/image/new_banner.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: Number,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.banner_img {
  > img {
    max-height: 400px;
    min-height: 400px;
    width: 100%;
    background-size: cover;
  }
}
</style>