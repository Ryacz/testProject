<template>

  <div>

    <h1>测试测试</h1>

    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>

    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>

    <el-button type="danger" size="default" :icon="Delete">编辑按钮</el-button>

    <svg-icon name="home" width="100px" height="100px"></svg-icon>

    <Pagination></Pagination>

    <SvgIcon name="phone"></SvgIcon>

    <SvgIcon name="home"></SvgIcon>

  </div>

</template>

<script setup lang="ts">
  // 引入图标组件
  import { Plus, Edit, Delete } from '@element-plus/icons-vue'
  import request from './utils/request'
  import { onMounted } from 'vue'
  import { error } from 'console'
  import { userInfo } from 'os'
  // import type { icons } from '@element-plus/icons-vue/global'
  onMounted(() => {
    request({
      url: '/user/info',
      method: 'get',
      headers: {
        token: 'mock_token_001',
      },
    }).then((res) => {
      console.log(res)
    })
  })
</script>

<style scoped lang="scss">
  div {
  h1 {
    color: $base-color;
  }
}
</style>

