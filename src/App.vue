<template> </template>

<script setup lang="ts">
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const fun = (arr: any) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index]
      console.log(element)
    }
  }
  fun(arr)
</script>

<style scoped>

</style>

