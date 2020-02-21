<template>
  <div>
    <mt-header fixed title="搜索"></mt-header>
    <div class="search-input-section">
      <input type="text" placeholder="请输入您要搜索的关键字" v-model="value" class="search-input" />
    </div>

    <div class="keywords" v-for="item in bannerlist" :key="item.keywords">{{item}}</div>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>

export default {

  methods: {}
};
</script>
