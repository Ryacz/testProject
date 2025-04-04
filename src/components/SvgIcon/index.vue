<template>

  <div>

    <svg :style="{ width, height }">

      <use :xlink:href="prefix + name" :fill="color"> </use>

    </svg>

  </div>

</template>

<script setup lang="ts">
  import { type } from 'os'

  // 接受父组件传过来的参数
  defineProps({
    // xlint:href属性值前缀
    prefix: {
      type: String,
      default: '#icon-',
    },
    // 提供试用的图标名字
    name: String,
    // 颜色
    color: {
      type: String,
      default: '',
    },
    //父组件的传来的宽高
    width: {
      type: String,
      default: '16px',
    },
    height: {
      type: String,
      default: '16px',
    },
  })
</script>

<style scoped>

</style>

